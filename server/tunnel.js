import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { CONFIG } from './config.js';
import { getDatabase, addLog } from './database.js';

let tunnelProcess = null;

export const tunnelState = {
  status: 'stopped', // 'stopped' | 'starting' | 'connected' | 'error'
  publicUrl: null,
  mode: 'quick',     // 'quick' | 'token'
  startTime: null,
  errorMessage: null,
  logs: []
};

function appendTunnelLog(msg) {
  const line = `[${new Date().toLocaleTimeString()}] ${msg.trim()}`;
  tunnelState.logs.push(line);
  if (tunnelState.logs.length > 50) {
    tunnelState.logs.shift();
  }
}

/**
 * Locate official cloudflared binary
 */
export function getCloudflaredPath() {
  const localBin = path.join(CONFIG.ROOT_DIR, 'bin', 'cloudflared.exe');
  if (fs.existsSync(localBin)) {
    return localBin;
  }

  const progFiles32 = 'C:\\Program Files (x86)\\cloudflared\\cloudflared.exe';
  if (fs.existsSync(progFiles32)) {
    return progFiles32;
  }

  const progFiles64 = 'C:\\Program Files\\cloudflared\\cloudflared.exe';
  if (fs.existsSync(progFiles64)) {
    return progFiles64;
  }

  return 'cloudflared';
}

/**
 * Start Cloudflare Tunnel
 */
export async function startTunnel(localPort = CONFIG.PORT) {
  if (tunnelProcess) {
    appendTunnelLog('Tunnel is already running');
    return tunnelState;
  }

  const db = getDatabase();
  const cloudflaredExe = getCloudflaredPath();

  tunnelState.status = 'starting';
  tunnelState.publicUrl = null;
  tunnelState.errorMessage = null;
  tunnelState.startTime = Date.now();
  appendTunnelLog(`Starting Cloudflare Tunnel using ${cloudflaredExe}...`);

  const mode = db.prepare("SELECT value FROM settings WHERE key = 'tunnel_mode'").get()?.value || 'quick';
  const token = db.prepare("SELECT value FROM settings WHERE key = 'tunnel_token'").get()?.value || '';
  const customDomain = db.prepare("SELECT value FROM settings WHERE key = 'custom_domain'").get()?.value || '';

  tunnelState.mode = mode;

  let args = [];
  if (mode === 'token' && token.trim()) {
    args = ['tunnel', 'run', '--token', token.trim()];
    appendTunnelLog('Launching tunnel with configured Cloudflare token...');
    if (customDomain.trim()) {
      tunnelState.publicUrl = customDomain.trim().startsWith('http') ? customDomain.trim() : `https://${customDomain.trim()}`;
    }
  } else {
    // Quick Tunnel mode (temporary *.trycloudflare.com)
    args = ['tunnel', '--url', `http://127.0.0.1:${localPort}`, '--no-autoupdate'];
    appendTunnelLog(`Requesting Quick Tunnel for http://127.0.0.1:${localPort}...`);
  }

  try {
    tunnelProcess = spawn(cloudflaredExe, args, {
      windowsHide: true
    });

    const urlRegex = /https:\/\/[a-zA-Z0-9-]+\.trycloudflare\.com/i;

    const handleOutput = (data) => {
      const text = data.toString();
      const lines = text.split(/\r?\n/).filter(l => l.trim());

      for (const line of lines) {
        appendTunnelLog(line);

        // Check for URL in Quick Tunnel output
        const match = line.match(urlRegex);
        if (match && !tunnelState.publicUrl) {
          tunnelState.publicUrl = match[0];
          tunnelState.status = 'connected';
          addLog(db, 'info', `Cloudflare Tunnel established: ${tunnelState.publicUrl}`);
          appendTunnelLog(`>>> TUNNEL ONLINE: ${tunnelState.publicUrl} <<<`);
        }

        // Check for token tunnel connection confirmation
        if (line.includes('Registered tunnel connection') || line.includes('Connection registered')) {
          tunnelState.status = 'connected';
          if (!tunnelState.publicUrl && customDomain) {
            tunnelState.publicUrl = customDomain.startsWith('http') ? customDomain : `https://${customDomain}`;
          }
          addLog(db, 'info', `Token tunnel connection registered: ${tunnelState.publicUrl || 'Cloudflare DNS Host'}`);
        }
      }
    };

    tunnelProcess.stdout.on('data', handleOutput);
    tunnelProcess.stderr.on('data', handleOutput);

    tunnelProcess.on('error', (err) => {
      console.error('Failed to spawn cloudflared:', err);
      tunnelState.status = 'error';
      tunnelState.errorMessage = err.message;
      appendTunnelLog(`Tunnel process error: ${err.message}`);
      addLog(db, 'error', `Cloudflare Tunnel process error: ${err.message}`);
      tunnelProcess = null;
    });

    tunnelProcess.on('close', (code) => {
      appendTunnelLog(`Tunnel process exited with code ${code}`);
      tunnelState.status = 'stopped';
      tunnelState.publicUrl = null;
      tunnelProcess = null;
      addLog(db, 'info', `Cloudflare Tunnel stopped (exit code ${code})`);
    });

    // Wait up to 15 seconds to detect initial connection URL
    await new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        if (tunnelState.status === 'connected' || tunnelState.status === 'error' || !tunnelProcess) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 500);

      setTimeout(() => {
        clearInterval(checkInterval);
        resolve();
      }, 15000);
    });

    return tunnelState;
  } catch (err) {
    tunnelState.status = 'error';
    tunnelState.errorMessage = err.message;
    tunnelProcess = null;
    appendTunnelLog(`Failed to start tunnel: ${err.message}`);
    return tunnelState;
  }
}

/**
 * Stop Cloudflare Tunnel safely
 */
export async function stopTunnel() {
  if (!tunnelProcess) {
    tunnelState.status = 'stopped';
    tunnelState.publicUrl = null;
    return tunnelState;
  }

  appendTunnelLog('Stopping Cloudflare Tunnel...');
  const pid = tunnelProcess.pid;

  return new Promise((resolve) => {
    try {
      // On Windows, use taskkill /F /T /PID to terminate the whole tree
      const killer = spawn('taskkill.exe', ['/PID', String(pid), '/T', '/F']);
      killer.on('close', () => {
        tunnelProcess = null;
        tunnelState.status = 'stopped';
        tunnelState.publicUrl = null;
        appendTunnelLog('Cloudflare Tunnel successfully stopped.');
        resolve(tunnelState);
      });
      killer.on('error', () => {
        try {
          tunnelProcess.kill('SIGTERM');
        } catch (e) {}
        tunnelProcess = null;
        tunnelState.status = 'stopped';
        tunnelState.publicUrl = null;
        resolve(tunnelState);
      });
    } catch (e) {
      tunnelProcess = null;
      tunnelState.status = 'stopped';
      tunnelState.publicUrl = null;
      resolve(tunnelState);
    }
  });
}
