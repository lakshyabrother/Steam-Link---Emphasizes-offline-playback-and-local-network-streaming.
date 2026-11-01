import React, { useState, useEffect } from 'react';
import {
  FolderOpen, Folder, HardDrive, RefreshCw, CheckCircle,
  AlertTriangle, Monitor, Play, Film, ArrowRight, Check
} from 'lucide-react';
import { formatFileSize, formatDuration } from '../components/MovieCard';

export default function MovieFolderPage({ authFetch, onScanSuccess, onViewLibrary }) {
  const [folderPath, setFolderPath] = useState('D:\\Movies');
  const [folderExists, setFolderExists] = useState(false);
  const [totalMovies, setTotalMovies] = useState(0);
  const [totalBytes, setTotalBytes] = useState(0);
  const [drives, setDrives] = useState([]);
  const [browserInfo, setBrowserInfo] = useState(null);

  const [scanning, setScanning] = useState(false);
  const [dialogLoading, setDialogLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [scanResult, setScanResult] = useState(null);

  // Load current library settings & stats
  const loadFolderStats = async () => {
    try {
      const res = await authFetch('/api/admin/dashboard-stats');
      const data = await res.json();
      if (data.library) {
        setFolderPath(data.library.folder || 'D:\\Movies');
        setFolderExists(data.library.folderExists);
        setTotalMovies(data.library.totalMovies);
        setTotalBytes(data.library.totalDiskBytes);
      }
    } catch (e) {}
  };

  // Load Windows drive letters
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
      }
    } catch (e) {}
  };

  useEffect(() => {
    loadFolderStats();
    loadDrives();
  }, []);

  // Native Windows folder picker
  const handleOpenNativeDialog = async () => {
    setDialogLoading(true);
    setStatusMessage('Opening Windows Folder Dialog on your PC host screen...');
    try {
      const res = await authFetch('/api/admin/open-folder-dialog', { method: 'POST' });
      const data = await res.json();
      if (data.selectedPath) {
        setFolderPath(data.selectedPath);
        setStatusMessage(`Selected from Windows Dialog: ${data.selectedPath}`);
        // Save and scan
        await handleSaveAndScan(data.selectedPath);
      } else {
        setStatusMessage('Folder selection was cancelled.');
      }
    } catch (err) {
      setStatusMessage(`Error launching Windows dialog: ${err.message}`);
    } finally {
      setDialogLoading(false);
    }
  };

  // Save selected folder and trigger recursive scan
  const handleSaveAndScan = async (pathToScan = folderPath) => {
    if (!pathToScan) return;
    setScanning(true);
    setStatusMessage(`Scanning "${pathToScan}" for video files and metadata...`);
    setScanResult(null);

    try {
      const res = await authFetch('/api/admin/library-folder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ folder: pathToScan })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Scan failed');

      setScanResult(data.scanResult);
      setStatusMessage(`Scan complete! Found ${data.scanResult.totalFiles} files (${data.scanResult.added} new, ${data.scanResult.updated} verified).`);
      await loadFolderStats();
      if (onScanSuccess) onScanSuccess(pathToScan);
    } catch (err) {
      setStatusMessage(`Scan Error: ${err.message}`);
    } finally {
      setScanning(false);
    }
  };

  // Rescan existing folder
  const handleRescan = async () => {
    setScanning(true);
    setStatusMessage('Rescanning library folder for new or removed movies...');
    try {
      const res = await authFetch('/api/admin/rescan', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Rescan failed');
      setScanResult(data.scanResult);
      setStatusMessage(`Rescan complete! ${data.scanResult.totalFiles} movies in library.`);
      await loadFolderStats();
    } catch (err) {
      setStatusMessage(`Rescan Error: ${err.message}`);
    } finally {
      setScanning(false);
    }
  };

  return (
    <div className="folder-page-container">
      {/* Header */}
      <div className="page-header-row">
        <div>
          <h1 className="page-main-title">Movie Folder Management</h1>
          <p className="page-sub-title">
            Select any local folder on your Windows PC to automatically scan, index, and stream your movies.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            className="btn-primary"
            style={{ padding: '10px 20px', gap: '8px' }}
            onClick={() => handleSaveAndScan()}
            disabled={scanning || dialogLoading}
          >
            <RefreshCw size={16} className={scanning ? 'spin' : ''} />
            <span>{scanning ? 'Scanning...' : 'Scan Movies'}</span>
          </button>

          <button
            className="btn-secondary"
            onClick={handleRescan}
            disabled={scanning || dialogLoading}
          >
            <span>Refresh Library</span>
          </button>
        </div>
      </div>

      {/* Main Selected Folder Card */}
      <div className="folder-hero-card">
        <div className="folder-hero-top">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="folder-icon-large">
              <FolderOpen size={28} color="var(--primary)" />
            </div>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600 }}>CURRENT MOVIE DIRECTORY</div>
              <div className="folder-path-display" title={folderPath}>
                {folderPath}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className={`folder-status-pill ${folderExists ? 'status-connected' : 'status-missing'}`}>
              {folderExists ? <CheckCircle size={15} /> : <AlertTriangle size={15} />}
              <span>{folderExists ? 'Connected & Accessible' : 'Path Not Found on Host PC'}</span>
            </div>
          </div>
        </div>

        {/* Buttons Row */}
        <div className="folder-actions-row">
          <button
            className="btn-primary"
            style={{ padding: '12px 24px', background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)' }}
            onClick={handleOpenNativeDialog}
            disabled={dialogLoading || scanning}
          >
            <Monitor size={18} />
            <span>Select Movie Folder (Windows Dialog)</span>
          </button>

          <button
            className="btn-secondary"
            onClick={() => loadDirectory(folderPath)}
          >
            <Folder size={16} />
            <span>Change Folder via Browser</span>
          </button>
        </div>

        {/* Statistics Bar */}
        <div className="folder-stats-bar">
          <div className="folder-stat-item">
            <span className="folder-stat-label">Total Movies Detected:</span>
            <span className="folder-stat-val text-red">{totalMovies}</span>
          </div>

          <div className="folder-stat-item">
            <span className="folder-stat-label">Library Storage Size:</span>
            <span className="folder-stat-val text-blue">{formatFileSize(totalBytes)}</span>
          </div>

          <div className="folder-stat-item">
            <span className="folder-stat-label">Host Machine Location:</span>
            <span className="folder-stat-val" style={{ color: '#cbd5e1' }}>Local Windows Filesystem</span>
          </div>
        </div>
      </div>

      {/* Status or Progress Feedback */}
      {statusMessage && (
        <div className="folder-status-box">
          <span style={{ fontWeight: 600 }}>{statusMessage}</span>
          {scanResult && (
            <div style={{ fontSize: '12px', marginTop: '6px', color: 'var(--text-muted)' }}>
              Summary: {scanResult.totalFiles} video files found | {scanResult.added} added | {scanResult.updated} updated | {scanResult.deleted} dead links removed
            </div>
          )}
        </div>
      )}

      {/* Interactive Drive & Folder Browser */}
      <div className="folder-browser-section">
        <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <HardDrive size={18} color="#38bdf8" />
          <span>Interactive Filesystem Navigator</span>
        </h3>

        {/* Drive selector pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
          {drives.map(drive => (
            <button
              key={drive}
              className={`drive-pill ${folderPath.startsWith(drive) ? 'active' : ''}`}
              onClick={() => loadDirectory(drive)}
            >
              <HardDrive size={14} />
              <span>{drive}</span>
            </button>
          ))}
        </div>

        {/* Manual path input box */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
          <input
            type="text"
            value={folderPath}
            onChange={(e) => setFolderPath(e.target.value)}
            placeholder="Type path (e.g. D:\Movies or C:\Users\ASUS\Downloads)"
            style={{ flex: 1, fontFamily: 'monospace', fontSize: '13px' }}
          />
          <button className="btn-secondary" onClick={() => loadDirectory(folderPath)}>
            Browse
          </button>
          <button className="btn-primary" onClick={() => handleSaveAndScan(folderPath)} disabled={scanning}>
            Set & Scan
          </button>
        </div>

        {/* Directory Listing */}
        {browserInfo && (
          <div className="folder-list-container">
            {browserInfo.parentPath && (
              <div className="folder-list-item" onClick={() => loadDirectory(browserInfo.parentPath)}>
                <Folder size={16} color="var(--text-dim)" />
                <span style={{ color: 'var(--text-muted)' }}>.. (Parent Directory)</span>
              </div>
            )}

            {browserInfo.folders?.map(f => (
              <div key={f.path} className="folder-list-item" onClick={() => loadDirectory(f.path)}>
                <Folder size={16} color="#fbbf24" />
                <span>{f.name}</span>
              </div>
            ))}

            {browserInfo.folders?.length === 0 && (
              <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-dim)', fontSize: '13px' }}>
                No subdirectories in this path.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

