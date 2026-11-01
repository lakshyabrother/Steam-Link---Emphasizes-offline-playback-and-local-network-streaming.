import express from 'express';
import os from 'os';
import fs from 'fs';
import path from 'path';
import QRCode from 'qrcode';
import { getDatabase, addLog } from '../database.js';
import { requireAdmin } from '../auth.js';
import { scanLibrary, listDrives, listDirectory, openNativeWindowsFolderDialog } from '../scanner.js';
import { metrics } from '../streamer.js';
import { tunnelState, startTunnel, stopTunnel } from '../tunnel.js';
import { CONFIG } from '../config.js';

const router = express.Router();
const serverStartTime = Date.now();

let serverRemoteEnabled = true;

/**
 * Server Status & Dashboard Statistics
 */
router.get('/dashboard-stats', requireAdmin, async (req, res) => {
  const db = getDatabase();

  const totalMovies = db.prepare('SELECT COUNT(*) as count FROM movies').get().count;
  const libraryFolder = db.prepare("SELECT value FROM settings WHERE key = 'library_folder'").get()?.value || '';
  const serverName = db.prepare("SELECT value FROM settings WHERE key = 'server_name'").get()?.value || 'StreamLink Media Server';
  const tunnelMode = db.prepare("SELECT value FROM settings WHERE key = 'tunnel_mode'").get()?.value || 'quick';
  const customDomain = db.prepare("SELECT value FROM settings WHERE key = 'custom_domain'").get()?.value || '';

  // Calculate library storage info
  let totalDiskBytes = 0;
  try {
    const sizeRow = db.prepare('SELECT SUM(file_size) as total_size FROM movies').get();
    totalDiskBytes = sizeRow?.total_size || 0;
  } catch (e) {}

  // Active sessions
  const activeSessionsArray = Array.from(metrics.activeSessions.values());

  // Recent logs
  const logs = db.prepare('SELECT * FROM server_logs ORDER BY id DESC LIMIT 20').all();

  const uptimeSeconds = Math.floor((Date.now() - serverStartTime) / 1000);

  res.json({
    server: {
      status: 'online',
      remoteStreamingEnabled: serverRemoteEnabled,
      uptimeSeconds,
      serverName,
      port: CONFIG.PORT,
      platform: os.platform(),
      cpus: os.cpus().length,
      freeMemoryBytes: os.freemem(),
      totalMemoryBytes: os.totalmem()
    },
    tunnel: {
      status: tunnelState.status,
      publicUrl: tunnelState.publicUrl,
      mode: tunnelState.mode,
      customDomain,
      logs: tunnelState.logs.slice(-10)
    },
    library: {
      folder: libraryFolder,
      totalMovies,
      totalDiskBytes,
      folderExists: libraryFolder ? fs.existsSync(libraryFolder) : false
    },
    streaming: {
      activeViewersCount: activeSessionsArray.length,
      activeSessions: activeSessionsArray,
      currentUploadSpeedBps: metrics.currentUploadSpeedBps,
      totalBytesTransmitted: metrics.totalBytesTransmitted
    },
    recentLogs: logs
  });
});

router.get('/tunnel-status', requireAdmin, (req, res) => {
  res.json({
    tunnel: {
      status: tunnelState.status,
      publicUrl: tunnelState.publicUrl,
      mode: tunnelState.mode,
      logs: tunnelState.logs.slice(-10)
    }
  });
});

/**
 * Start Cloudflare Tunnel independently
 */
router.post('/tunnel/start', requireAdmin, async (req, res) => {
  const db = getDatabase();
  addLog(db, 'info', 'Administrator triggered Cloudflare Tunnel start');

  try {
    await startTunnel(CONFIG.PORT);
    res.json({
      message: 'Cloudflare Tunnel started',
      tunnel: tunnelState
    });
  } catch (err) {
    res.status(500).json({ error: `Tunnel start error: ${err.message}` });
  }
});

/**
 * Stop Cloudflare Tunnel independently
 */
router.post('/tunnel/stop', requireAdmin, async (req, res) => {
  const db = getDatabase();
  addLog(db, 'info', 'Administrator triggered Cloudflare Tunnel stop');

  try {
    await stopTunnel();
    res.json({
      message: 'Cloudflare Tunnel stopped',
      tunnel: tunnelState
    });
  } catch (err) {
    res.status(500).json({ error: `Tunnel stop error: ${err.message}` });
  }
});

/**
 * Start Server (Initializes Remote Tunnel and Enables Remote Streaming)
 */
router.post('/server/start', requireAdmin, async (req, res) => {
  const db = getDatabase();
  const libraryFolder = db.prepare("SELECT value FROM settings WHERE key = 'library_folder'").get()?.value;

  if (!libraryFolder || !fs.existsSync(libraryFolder)) {
    return res.status(400).json({
      error: 'Please select a valid movie folder before starting the remote server.'
    });
  }

  serverRemoteEnabled = true;
  addLog(db, 'info', 'Administrator started the remote streaming server');

  try {
    await startTunnel(CONFIG.PORT);
    res.json({
      message: 'Server and Cloudflare Tunnel started successfully',
      tunnel: tunnelState,
      remoteStreamingEnabled: serverRemoteEnabled
    });
  } catch (err) {
    res.status(500).json({ error: `Failed to start tunnel: ${err.message}` });
  }
});

/**
 * Stop Server (Stops Cloudflare Tunnel and Closes Remote Streaming)
 */
router.post('/server/stop', requireAdmin, async (req, res) => {
  const db = getDatabase();
  serverRemoteEnabled = false;

  // Clear active sessions
  metrics.activeSessions.clear();

  addLog(db, 'info', 'Administrator stopped the remote streaming server');

  try {
    await stopTunnel();
    res.json({
      message: 'Server and Cloudflare Tunnel stopped. Remote access is now offline.',
      tunnel: tunnelState,
      remoteStreamingEnabled: serverRemoteEnabled
    });
  } catch (err) {
    res.status(500).json({ error: `Failed to stop tunnel: ${err.message}` });
  }
});

/**
 * Restart Server
 */
router.post('/server/restart', requireAdmin, async (req, res) => {
  const db = getDatabase();
  addLog(db, 'info', 'Administrator restarted the remote streaming server');

  try {
    await stopTunnel();
    await new Promise(r => setTimeout(r, 1000));
    await startTunnel(CONFIG.PORT);
    serverRemoteEnabled = true;

    res.json({
      message: 'Server restarted successfully',
      tunnel: tunnelState,
      remoteStreamingEnabled: serverRemoteEnabled
    });
  } catch (err) {
    res.status(500).json({ error: `Restart failed: ${err.message}` });
  }
});

/**
 * Trigger Native Windows Folder Dialog
 */
router.post('/open-folder-dialog', requireAdmin, async (req, res) => {
  try {
    const selectedPath = await openNativeWindowsFolderDialog();
    if (selectedPath) {
      res.json({ selectedPath });
    } else {
      res.json({ selectedPath: null, message: 'Selection cancelled' });
    }
  } catch (err) {
    res.status(500).json({ error: `Folder picker error: ${err.message}` });
  }
});

/**
 * List Windows Drives
 */
router.get('/drives', requireAdmin, async (req, res) => {
  try {
    const drives = await listDrives();
    res.json({ drives });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * Interactive Web Directory Browser
 */
router.get('/browse-directory', requireAdmin, async (req, res) => {
  const targetPath = req.query.path || 'C:\\';
  try {
    const info = await listDirectory(targetPath);
    res.json(info);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * Save Library Folder and Trigger Scan
 */
router.post('/library-folder', requireAdmin, async (req, res) => {
  const { folder } = req.body;
  if (!folder || !fs.existsSync(folder)) {
    return res.status(400).json({ error: 'Folder does not exist on host PC' });
  }

  const db = getDatabase();
  const normalized = path.resolve(folder);

  db.prepare("INSERT OR REPLACE INTO settings (key, value) VALUES ('library_folder', ?)").run(normalized);
  addLog(db, 'info', `Library folder set to: ${normalized}`);

  try {
    const scanResult = await scanLibrary(normalized);
    res.json({
      message: 'Library folder updated and scan completed successfully',
      scanResult
    });
  } catch (err) {
    res.status(500).json({ error: `Scan failed: ${err.message}` });
  }
});

/**
 * Manual Rescan Library
 */
const handleRescanLibrary = async (req, res) => {
  try {
    const scanResult = await scanLibrary();
    res.json({
      message: 'Library rescan completed successfully',
      scanResult
    });
  } catch (err) {
    res.status(500).json({ error: `Rescan failed: ${err.message}` });
  }
};

router.post('/rescan', requireAdmin, handleRescanLibrary);
router.post('/scan', requireAdmin, handleRescanLibrary);

/**
 * Generate QR Code for Share Link
 */
router.get('/share-qr', requireAdmin, async (req, res) => {
  const url = tunnelState.publicUrl || `http://localhost:${CONFIG.PORT}`;
  try {
    const qrDataUrl = await QRCode.toDataURL(url, {
      width: 280,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    });
    res.json({ qrDataUrl, url });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate QR code' });
  }
});

/**
 * Settings GET & POST
 */
router.get('/settings', requireAdmin, (req, res) => {
  const db = getDatabase();
  const rows = db.prepare('SELECT * FROM settings').all();
  const settingsObj = {};
  for (const r of rows) {
    settingsObj[r.key] = r.value;
  }
  res.json({ settings: settingsObj });
});

router.post('/settings', requireAdmin, (req, res) => {
  const { server_name, tunnel_mode, tunnel_token, custom_domain, tmdb_api_key } = req.body;
  const db = getDatabase();

  const updateSetting = db.prepare('INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)');

  if (server_name !== undefined) updateSetting.run('server_name', String(server_name).trim());
  if (tunnel_mode !== undefined) updateSetting.run('tunnel_mode', String(tunnel_mode).trim());
  if (tunnel_token !== undefined) updateSetting.run('tunnel_token', String(tunnel_token).trim());
  if (custom_domain !== undefined) updateSetting.run('custom_domain', String(custom_domain).trim());
  if (tmdb_api_key !== undefined) updateSetting.run('tmdb_api_key', String(tmdb_api_key).trim());

  addLog(db, 'info', 'Server settings updated by administrator');
  res.json({ message: 'Settings saved successfully' });
});

/**
 * Backup Database and User State (Section 17)
 */
router.get('/backup', requireAdmin, (req, res) => {
  const db = getDatabase();
  const users = db.prepare('SELECT id, username, role, created_at FROM users').all();
  const settings = db.prepare('SELECT * FROM settings').all();
  const favorites = db.prepare('SELECT * FROM favorites').all();
  const watchProgress = db.prepare('SELECT * FROM watch_progress').all();
  const collections = db.prepare('SELECT * FROM collections').all();
  const movies = db.prepare('SELECT id, clean_title, file_path, file_size, duration, resolution, year FROM movies').all();

  const backupData = {
    exportedAt: new Date().toISOString(),
    version: '1.0.0',
    users,
    settings,
    favorites,
    watchProgress,
    collections,
    moviesCount: movies.length
  };

  const filename = `streamlink-backup-${new Date().toISOString().slice(0, 10)}.json`;
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(backupData, null, 2));
});

/**
 * Restore Application State (Section 17)
 */
router.post('/restore', requireAdmin, express.json({ limit: '10mb' }), (req, res) => {
  const backup = req.body;
  if (!backup || !backup.settings) {
    return res.status(400).json({ error: 'Invalid backup file format' });
  }

  const db = getDatabase();

  try {
    // Restore settings
    const insertSetting = db.prepare('INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)');
    for (const s of backup.settings) {
      insertSetting.run(s.key, s.value);
    }

    // Restore favorites if any
    if (Array.isArray(backup.favorites)) {
      const insertFav = db.prepare('INSERT OR IGNORE INTO favorites (user_id, movie_id, created_at) VALUES (?, ?, ?)');
      for (const f of backup.favorites) {
        insertFav.run(f.user_id, f.movie_id, f.created_at);
      }
    }

    addLog(db, 'info', 'Application settings and state restored from backup');
    res.json({ message: 'Restore completed successfully' });
  } catch (err) {
    res.status(500).json({ error: `Restore error: ${err.message}` });
  }
});

export default router;

