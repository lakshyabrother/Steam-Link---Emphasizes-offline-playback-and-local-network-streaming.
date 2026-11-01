import React, { useState, useEffect } from 'react';
import {
  FolderOpen, FolderSync, HardDrive, RefreshCw, CheckCircle,
  AlertTriangle, Monitor, Play, Square, Globe, Copy, Check,
  QrCode, Trash2, ExternalLink, Lock, Eye, EyeOff, Plus, Film
} from 'lucide-react';
import { formatFileSize, formatDuration } from '../components/MovieCard';

export default function FolderSharingPage({ authFetch }) {
  // Folder Selection & Scan state
  const [folderPath, setFolderPath] = useState('D:\\Movies');
  const [folderName, setFolderName] = useState('Movies');
  const [customLabel, setCustomLabel] = useState('');
  const [passcode, setPasscode] = useState('');
  const [scanning, setScanning] = useState(false);
  const [dialogLoading, setDialogLoading] = useState(false);
  const [scanData, setScanData] = useState(null); // { folderPath, folderName, movieCount, totalBytes, movies }
  const [statusMsg, setStatusMsg] = useState('');

  // Active Shared Folders list
  const [sharedFolders, setSharedFolders] = useState([]);
  const [loadingFolders, setLoadingFolders] = useState(true);

  // Network & Tunnel Info
  const [shareInfo, setShareInfo] = useState(null);
  const [tunnelLoading, setTunnelLoading] = useState(false);

  // UI helpers
  const [copiedKey, setCopiedKey] = useState(null);
  const [generating, setGenerating] = useState(false);
  const [createdShare, setCreatedShare] = useState(null);
  const [drives, setDrives] = useState([]);
  const [browserInfo, setBrowserInfo] = useState(null);
  const [showBrowser, setShowBrowser] = useState(false);

  // Load drives
  const loadDrives = async () => {
    try {
      const res = await authFetch('/api/admin/drives');
      const data = await res.json();
      if (data.drives) setDrives(data.drives);
    } catch (e) {}
  };

  // Browse directory
  const loadDirectory = async (dir) => {
    try {
      const res = await authFetch(`/api/admin/browse-directory?path=${encodeURIComponent(dir)}`);
      const data = await res.json();
      if (res.ok) {
        setBrowserInfo(data);
        setFolderPath(data.currentPath);
        const name = data.currentPath.split(/[\\/]/).filter(Boolean).pop() || 'Movies';
        setFolderName(name);
      }
    } catch (e) {}
  };

  // Load active folder shares
  const loadSharedFolders = async () => {
    try {
      setLoadingFolders(true);
      const res = await authFetch('/api/share/folder/links');
      const data = await res.json();
      if (data.links) {
        setSharedFolders(data.links);
      }
    } catch (e) {}
    finally {
      setLoadingFolders(false);
    }
  };

  // Load network & tunnel info
  const loadShareInfo = async () => {
    try {
      const res = await authFetch('/api/share/info');
      const data = await res.json();
      setShareInfo(data);
    } catch (e) {}
  };

  useEffect(() => {
    loadSharedFolders();
    loadShareInfo();
    loadDrives();
    const interval = setInterval(loadShareInfo, 4000);
    return () => clearInterval(interval);
  }, []);

  // Native Windows folder picker
  const handleOpenNativeDialog = async () => {
    setDialogLoading(true);
    setStatusMsg('Opening Windows Folder Dialog on your host PC screen...');
    try {
      const res = await authFetch('/api/admin/open-folder-dialog', { method: 'POST' });
      const data = await res.json();
      if (data.selectedPath) {
        setFolderPath(data.selectedPath);
        const name = data.selectedPath.split(/[\\/]/).filter(Boolean).pop() || 'Movies';
        setFolderName(name);
        setStatusMsg(`Selected folder: ${data.selectedPath}`);
        // Automatically scan the newly selected folder
        await handleScanFolder(data.selectedPath);
      } else {
        setStatusMsg('Folder selection was cancelled.');
      }
    } catch (err) {
      setStatusMsg(`Error opening Windows dialog: ${err.message}`);
    } finally {
      setDialogLoading(false);
    }
  };

  // Scan folder
  const handleScanFolder = async (pathToScan = folderPath) => {
    if (!pathToScan) return;
    setScanning(true);
    setStatusMsg(`Scanning "${pathToScan}" for video files and movie metadata...`);
    setScanData(null);
    setCreatedShare(null);

    try {
      const res = await authFetch('/api/share/folder/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ folderPath: pathToScan })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Scan failed');

      setScanData(data);
      setFolderName(data.folderName);
      setStatusMsg(`Scan complete! Detected ${data.movieCount} movies in "${data.folderName}".`);
    } catch (err) {
      setStatusMsg(`Scan error: ${err.message}`);
    } finally {
      setScanning(false);
    }
  };

  // Generate sharing link for folder
  const handleGenerateLink = async (e) => {
    if (e) e.preventDefault();
    if (!folderPath) {
      alert('Please select a folder first');
      return;
    }

    setGenerating(true);
    setStatusMsg(`Registering folder "${folderName}" as a shared streaming resource...`);

    try {
      const res = await authFetch('/api/share/folder/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          folderPath,
          folderName,
          label: customLabel.trim() || `${folderName} Movies`,
          passcode: passcode.trim()
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create share link');

      setCreatedShare(data.link);
      setStatusMsg(`Success! Sharing link generated for "${folderName}".`);
      setCustomLabel('');
      setPasscode('');
      await loadSharedFolders();
    } catch (err) {
      setStatusMsg(`Error generating link: ${err.message}`);
    } finally {
      setGenerating(false);
    }
  };

  // Toggle active status (Enable / Disable)
  const handleToggleShare = async (id) => {
    try {
      const res = await authFetch(`/api/share/folder/toggle/${id}`, { method: 'POST' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      await loadSharedFolders();
    } catch (err) {
      alert(err.message);
    }
  };

  // Delete / Revoke share
  const handleDeleteShare = async (id, name) => {
    if (!window.confirm(`Delete sharing link for folder "${name}"? Viewers will immediately lose access.`)) return;
    try {
      const res = await authFetch(`/api/share/folder/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      await loadSharedFolders();
      if (createdShare?.id === id) setCreatedShare(null);
    } catch (err) {
      alert(err.message);
    }
  };

  // Rescan shared folder
  const handleRescanShare = async (id) => {
    try {
      setStatusMsg('Rescanning shared folder on disk...');
      const res = await authFetch(`/api/share/folder/rescan/${id}`, { method: 'POST' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setStatusMsg(data.message);
      await loadSharedFolders();
    } catch (err) {
      alert(err.message);
    }
  };

  // Cloudflare Tunnel Controls
  const handleTunnelToggle = async (action) => {
    setTunnelLoading(true);
    setStatusMsg(`${action === 'start' ? 'Starting' : 'Stopping'} Cloudflare Tunnel...`);
    try {
      const res = await authFetch(`/api/admin/tunnel/${action}`, { method: 'POST' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Tunnel command failed');
      setStatusMsg(data.message);
      await loadShareInfo();
      await loadSharedFolders();
    } catch (err) {
      setStatusMsg(`Tunnel error: ${err.message}`);
    } finally {
      setTunnelLoading(false);
    }
  };

  // Copy helper
  const handleCopy = (text, key) => {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    });
  };

  const isTunnelConnected = shareInfo?.remote?.status === 'connected';
  const isTunnelStarting = shareInfo?.remote?.status === 'starting';

  return (
    <div style={{ padding: '0 0 60px' }}>
      {/* Page Header */}
      <div className="page-header-row">
        <div>
          <h1 className="page-main-title">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <FolderSync size={28} color="var(--accent)" />
              Folder Sharing
            </span>
          </h1>
          <p className="page-sub-title">
            Select any local movie folder on your Windows PC and generate a unique, secure streaming link. Viewers only see and stream movies inside the exact folder you choose.
          </p>
        </div>

        {/* Cloudflare Tunnel Quick Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className={`status-pill ${isTunnelConnected ? 'status-pill-green' : (isTunnelStarting ? 'status-pill-yellow' : 'status-pill-red')}`}>
            {isTunnelConnected ? 'REMOTE TUNNEL ONLINE' : (isTunnelStarting ? 'CONNECTING...' : 'LOCAL WI-FI ONLY')}
          </div>

          {!isTunnelConnected ? (
            <button
              className="btn-primary"
              style={{ padding: '8px 14px', fontSize: '13px', background: 'var(--success)' }}
              onClick={() => handleTunnelToggle('start')}
              disabled={tunnelLoading || isTunnelStarting}
              title="Start Cloudflare Tunnel to enable streaming outside home Wi-Fi"
            >
              <Play size={14} fill="currentColor" />
              <span>Go Worldwide</span>
            </button>
          ) : (
            <button
              className="btn-danger"
              style={{ padding: '8px 14px', fontSize: '13px' }}
              onClick={() => handleTunnelToggle('stop')}
              disabled={tunnelLoading}
              title="Stop Cloudflare Tunnel"
            >
              <Square size={14} fill="currentColor" />
              <span>Stop Tunnel</span>
            </button>
          )}
        </div>
      </div>

      {/* Status banner */}
      {statusMsg && (
        <div className="folder-status-box" style={{ margin: '0 32px 20px' }}>
          {statusMsg}
        </div>
      )}

      {/* SECTION 1: SELECT MOVIE FOLDER */}
      <div className="folder-hero-card">
        <div className="folder-hero-top">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div className="folder-icon-large">
              <FolderOpen size={30} color="var(--primary)" />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-dim)', fontWeight: 700, letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                SELECTED FOLDER TO SHARE
              </div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2px' }}>
                {folderName}
              </div>
              <div className="folder-path-display" title={folderPath} style={{ marginTop: '4px' }}>
                {folderPath}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              className="btn-primary"
              style={{ padding: '12px 22px', background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)' }}
              onClick={handleOpenNativeDialog}
              disabled={dialogLoading || scanning}
            >
              <Monitor size={17} />
              <span>Select Folder (Windows Dialog)</span>
            </button>

            <button
              className="btn-secondary"
              onClick={() => setShowBrowser(!showBrowser)}
            >
              <HardDrive size={16} />
              <span>{showBrowser ? 'Hide Browser' : 'Browse Drives'}</span>
            </button>

            <button
              className="btn-secondary"
              onClick={() => handleScanFolder(folderPath)}
              disabled={scanning || dialogLoading}
            >
              <RefreshCw size={16} className={scanning ? 'spin' : ''} />
              <span>{scanning ? 'Scanning...' : 'Scan Folder'}</span>
            </button>
          </div>
        </div>

        {/* Interactive Drive & Folder Browser (Toggleable) */}
        {showBrowser && (
          <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '10px', fontWeight: 600 }}>
              Select Windows Drive Letter or Navigate Subdirectories:
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
              {drives.map(drive => (
                <button
                  key={drive}
                  className={`drive-pill ${folderPath.startsWith(drive) ? 'active' : ''}`}
                  onClick={() => loadDirectory(drive)}
                >
                  <HardDrive size={13} />
                  <span>{drive}</span>
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
              <input
                type="text"
                value={folderPath}
                onChange={(e) => {
                  setFolderPath(e.target.value);
                  const n = e.target.value.split(/[\\/]/).filter(Boolean).pop() || 'Movies';
                  setFolderName(n);
                }}
                placeholder="Type full folder path (e.g. D:\Movies\Action)"
                style={{ flex: 1, fontFamily: 'monospace', fontSize: '13px' }}
              />
              <button className="btn-secondary" onClick={() => loadDirectory(folderPath)}>
                Browse
              </button>
              <button className="btn-primary" onClick={() => handleScanFolder(folderPath)} disabled={scanning}>
                Scan
              </button>
            </div>

            {browserInfo && (
              <div className="folder-list-container">
                {browserInfo.parentPath && (
                  <div className="folder-list-item" onClick={() => loadDirectory(browserInfo.parentPath)}>
                    <FolderOpen size={15} color="var(--text-dim)" />
                    <span style={{ color: 'var(--text-muted)' }}>.. (Parent Directory)</span>
                  </div>
                )}
                {browserInfo.folders?.map(f => (
                  <div key={f.path} className="folder-list-item" onClick={() => loadDirectory(f.path)}>
                    <FolderOpen size={15} color="#fbbf24" />
                    <span>{f.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Scan Results & Found Movies Preview */}
        {scanData && (
          <div style={{ background: 'var(--bg-secondary)', padding: '18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={18} color="var(--success)" />
                <span style={{ fontWeight: 700, fontSize: '15px' }}>
                  {scanData.movieCount} Movies Found in "{scanData.folderName}"
                </span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  ({formatFileSize(scanData.totalBytes)})
                </span>
              </div>
              <span style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
                Location: {scanData.folderPath}
              </span>
            </div>

            {/* Movie preview chips */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', maxHeight: '140px', overflowY: 'auto', padding: '4px 0' }}>
              {scanData.movies.map(m => (
                <div
                  key={m.id}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    background: 'var(--bg-card)', padding: '6px 12px',
                    borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)',
                    fontSize: '12px'
                  }}
                >
                  <Film size={13} color="var(--info)" />
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{m.clean_title}</span>
                  {m.resolution && <span style={{ color: 'var(--info)', fontSize: '10px', fontWeight: 700 }}>{m.resolution}</span>}
                  <span style={{ color: 'var(--text-dim)', fontSize: '11px' }}>{formatFileSize(m.file_size)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 2: GENERATE SHARING LINK */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '18px' }}>
          <div style={{ fontSize: '15px', fontWeight: 800, marginBottom: '6px' }}>
            Generate Secure Sharing Link
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
            Creates a unique web access link restricted exclusively to movies in "{folderName}". Viewers cannot view any other folders, files, or settings on your PC.
          </p>

          <form onSubmit={handleGenerateLink} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', alignItems: 'flex-end' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                Link Name / Label:
              </label>
              <input
                type="text"
                value={customLabel}
                onChange={e => setCustomLabel(e.target.value)}
                placeholder={`e.g. ${folderName} Movies`}
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                Optional Passcode / PIN:
              </label>
              <input
                type="text"
                value={passcode}
                onChange={e => setPasscode(e.target.value)}
                placeholder="e.g. 1234 (leave blank for open access)"
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', height: '42px', padding: '10px 20px', fontSize: '14px', gap: '8px' }}
                disabled={generating || !folderPath}
              >
                <Plus size={16} />
                <span>{generating ? 'Creating...' : 'Generate Sharing Link'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* NEWLY CREATED LINK SHOWCASE (IF JUST GENERATED) */}
      {createdShare && (
        <div style={{
          margin: '0 32px 28px',
          background: 'linear-gradient(135deg, rgba(139,124,255,0.12) 0%, rgba(56,189,248,0.06) 100%)',
          border: '1px solid rgba(139,124,255,0.35)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle size={22} color="var(--success)" />
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 800 }}>New Sharing Link Live!</h3>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Sharing {createdShare.movie_count} movies from folder: <strong>{createdShare.folder_name}</strong>
                </div>
              </div>
            </div>
            <span className="status-pill status-pill-green">ACTIVE & READY</span>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div className="link-display-box" style={{ flex: 1, minWidth: '260px' }}>
              <span className="link-text-mono">{createdShare.activeUrl}</span>
              <button
                className="btn-secondary"
                style={{ padding: '8px 14px', fontSize: '13px' }}
                onClick={() => handleCopy(createdShare.activeUrl, 'new_created')}
              >
                {copiedKey === 'new_created' ? <Check size={14} color="var(--success)" /> : <Copy size={14} />}
                <span>{copiedKey === 'new_created' ? 'Copied' : 'Copy Link'}</span>
              </button>
            </div>

            <a
              href={createdShare.activeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '10px 16px', fontSize: '13px' }}
            >
              <ExternalLink size={15} />
              <span>Open Sharing Page</span>
            </a>
          </div>

          {createdShare.qrCode && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '16px', padding: '12px 16px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)' }}>
              <img src={createdShare.qrCode} alt="QR Code" style={{ width: '80px', height: '80px', borderRadius: '6px', background: '#fff', padding: '4px' }} />
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700 }}>Scan with Phone Camera</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                  Anyone who scans this code can immediately stream movies from this folder on their phone.
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* SECTION 3: ACTIVE SHARED FOLDERS MANAGEMENT */}
      <div style={{ margin: '0 32px' }}>
        <div className="section-header" style={{ padding: '0 0 16px 0' }}>
          <div className="section-title">
            <FolderSync size={20} color="var(--primary)" />
            <span>Active Shared Folders ({sharedFolders.length})</span>
          </div>
          <button className="btn-secondary" onClick={loadSharedFolders} title="Refresh Shares">
            <RefreshCw size={14} />
            <span>Refresh</span>
          </button>
        </div>

        {loadingFolders ? (
          <div className="loading-state-3d">
            <div className="loading-pulse-ring" />
            <span>Loading shared folders...</span>
          </div>
        ) : sharedFolders.length === 0 ? (
          <div className="empty-state-3d" style={{ background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            <FolderSync size={44} color="var(--text-dim)" />
            <h3>No Folders Shared Yet</h3>
            <p>
              Select a movie folder above (e.g. D:\Movies) and click "Generate Sharing Link" to create your first independent folder share link.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {sharedFolders.map(share => {
              const url = share.activeUrl;
              const isActive = share.is_active === 1;

              return (
                <div
                  key={share.id}
                  style={{
                    background: 'var(--bg-card)',
                    border: `1px solid ${isActive ? 'var(--border)' : 'rgba(239,68,68,0.2)'}`,
                    borderRadius: 'var(--radius-lg)',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    opacity: isActive ? 1 : 0.75,
                    transition: 'border-color var(--transition)'
                  }}
                >
                  {/* Top Row: Folder Info + Status */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '40px', height: '40px',
                        background: isActive ? 'rgba(139,124,255,0.15)' : 'rgba(255,255,255,0.05)',
                        border: isActive ? '1px solid rgba(139,124,255,0.3)' : '1px solid var(--border)',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: isActive ? 'var(--accent)' : 'var(--text-dim)',
                        flexShrink: 0
                      }}>
                        <FolderOpen size={22} />
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)' }}>
                            {share.label || share.folder_name}
                          </span>
                          <span style={{ fontSize: '12px', color: 'var(--info)', fontWeight: 600 }}>
                            ({share.movie_count} movies)
                          </span>
                          {share.hasPasscode && (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#fbbf24', background: 'rgba(251,191,36,0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                              <Lock size={11} />
                              PIN Protected
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--text-dim)', fontFamily: 'monospace', marginTop: '2px' }} title={share.folder_path}>
                          Path: {share.folder_path}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className={`status-pill ${isActive ? 'status-pill-green' : 'status-pill-red'}`}>
                        {isActive ? 'SHARING ACTIVE' : 'DISABLED'}
                      </span>
                      <span style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
                        {share.access_count} streams
                      </span>
                    </div>
                  </div>

                  {/* Middle Row: Share URL Display */}
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div className="link-display-box" style={{ flex: 1, minWidth: '240px' }}>
                      <span className="link-text-mono">{url}</span>
                      <button
                        className="btn-secondary"
                        style={{ padding: '7px 12px', fontSize: '12px' }}
                        onClick={() => handleCopy(url, `folder_${share.id}`)}
                        title="Copy Sharing Link"
                      >
                        {copiedKey === `folder_${share.id}` ? <Check size={14} color="var(--success)" /> : <Copy size={14} />}
                        <span>{copiedKey === `folder_${share.id}` ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>

                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary"
                      style={{ padding: '9px 14px', fontSize: '13px' }}
                      title="Open sharing viewer in a new tab"
                    >
                      <ExternalLink size={14} />
                      <span>Open Sharing Page</span>
                    </a>
                  </div>

                  {/* Bottom Row: Actions */}
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'flex-end', flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: '10px' }}>
                    <button
                      className="btn-secondary"
                      style={{ padding: '6px 12px', fontSize: '12px' }}
                      onClick={() => handleRescanShare(share.id)}
                      title="Rescan folder for new or deleted movies"
                    >
                      <RefreshCw size={13} />
                      <span>Rescan Folder</span>
                    </button>

                    <button
                      className={isActive ? 'btn-secondary' : 'btn-success'}
                      style={{ padding: '6px 14px', fontSize: '12px' }}
                      onClick={() => handleToggleShare(share.id)}
                    >
                      {isActive ? <EyeOff size={13} /> : <Eye size={13} />}
                      <span>{isActive ? 'Disable Sharing' : 'Enable Sharing'}</span>
                    </button>

                    <button
                      className="btn-danger"
                      style={{ padding: '6px 14px', fontSize: '12px' }}
                      onClick={() => handleDeleteShare(share.id, share.label || share.folder_name)}
                    >
                      <Trash2 size={13} />
                      <span>Delete Share</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

