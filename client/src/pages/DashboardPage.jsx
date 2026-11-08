import React, { useState, useEffect } from 'react';
import { getApiUrl } from '../utils/api.js';
import {
  Globe, Copy, Check, QrCode, ArrowUpRight, Folder, RefreshCw,
  RotateCw, Play, Square, HardDrive, Users, Shield, UserPlus,
  Trash2, Download, Upload, X, Activity, Server, Sparkles, Key,
  Layers, Film, CheckCircle2, AlertTriangle, ChevronRight
} from 'lucide-react';
import { formatFileSize, formatDuration } from '../components/MovieCard';

export default function DashboardPage({ authFetch, onOpenFolderPicker, onOpenShareModal }) {
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  const [copied, setCopied] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // TMDB Artwork & Metadata State
  const [metaStatus, setMetaStatus] = useState({ total: 0, matched: 0, uncertain: 0, missing: 0, hasApiKey: false });
  const [tmdbKeyInput, setTmdbKeyInput] = useState('');
  const [keySavedMsg, setKeySavedMsg] = useState('');
  const [batchRunning, setBatchRunning] = useState(false);
  const [batchMsg, setBatchMsg] = useState('');

  // New viewer form state
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [userError, setUserError] = useState('');
  const [userSuccess, setUserSuccess] = useState('');

  const fetchStats = () => {
    authFetch('/api/admin/dashboard-stats')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(() => {});
  };

  const fetchUsers = () => {
    authFetch('/api/auth/users')
      .then(res => res.json())
      .then(data => {
        if (data.users) setUsers(data.users);
      })
      .catch(() => {});
  };

  const fetchMetaStatus = () => {
    authFetch('/api/movies/metadata/status')
      .then(res => res.json())
      .then(data => setMetaStatus(data))
      .catch(() => {});
  };

  const fetchSettings = () => {
    authFetch('/api/admin/settings')
      .then(res => res.json())
      .then(data => {
        if (data.settings?.tmdb_api_key) {
          setTmdbKeyInput(data.settings.tmdb_api_key);
        }
      })
      .catch(() => {});
  };

  useEffect(() => {
    fetchStats();
    fetchUsers();
    fetchMetaStatus();
    fetchSettings();
    const interval = setInterval(fetchStats, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSaveTmdbKey = async (e) => {
    e.preventDefault();
    setKeySavedMsg('');
    try {
      const res = await authFetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tmdb_api_key: tmdbKeyInput.trim() })
      });
      if (res.ok) {
        setKeySavedMsg('TMDB API Key saved successfully!');
        fetchMetaStatus();
        setTimeout(() => setKeySavedMsg(''), 3000);
      }
    } catch (err) {
      setKeySavedMsg('Failed to save API key');
    }
  };

  const handleBatchAutoFetch = async () => {
    setBatchRunning(true);
    setBatchMsg('Recognizing movies and caching high-res artwork...');
    try {
      const res = await authFetch('/api/movies/batch/recognize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ limit: 40 })
      });
      const data = await res.json();
      setBatchMsg(data.message || 'Auto-recognition finished.');
      fetchMetaStatus();
      fetchStats();
    } catch (err) {
      setBatchMsg(`Error: ${err.message}`);
    } finally {
      setBatchRunning(false);
    }
  };

  // Server control actions
  const handleServerAction = async (action) => {
    setActionLoading(true);
    setStatusMessage(`Applying server ${action}...`);
    try {
      const res = await authFetch(`/api/admin/server/${action}`, { method: 'POST' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `${action} failed`);
      setStatusMessage(data.message || `Server ${action} completed successfully.`);
      fetchStats();
    } catch (err) {
      setStatusMessage(`Error: ${err.message}`);
    } finally {
      setActionLoading(false);
    }
  };

  // Rescan library
  const handleRescan = async () => {
    setActionLoading(true);
    setStatusMessage('Scanning movie folder for new files...');
    try {
      const res = await authFetch('/api/admin/rescan', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Rescan failed');
      setStatusMessage(data.message || 'Library rescan complete.');
      fetchStats();
    } catch (err) {
      setStatusMessage(`Error: ${err.message}`);
    } finally {
      setActionLoading(false);
    }
  };

  // Copy Public Link
  const handleCopyLink = () => {
    const url = stats?.tunnel?.publicUrl;
    if (!url) return;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  // Create Viewer User
  const handleCreateUser = async (e) => {
    e.preventDefault();
    setUserError('');
    setUserSuccess('');

    try {
      const res = await authFetch('/api/auth/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: newUsername,
          password: newPassword,
          role: 'viewer'
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create user');
      setUserSuccess(`Viewer account "${newUsername}" created!`);
      setNewUsername('');
      setNewPassword('');
      fetchUsers();
    } catch (err) {
      setUserError(err.message);
    }
  };

  // Delete User
  const handleDeleteUser = async (id, name) => {
    if (!window.confirm(`Delete viewer account "${name}"?`)) return;
    try {
      const res = await authFetch(`/api/auth/users/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      fetchUsers();
    } catch (err) {
      alert(err.message);
    }
  };

  // Backup Download
  const handleDownloadBackup = () => {
    window.open(getApiUrl(`/api/admin/backup?token=${encodeURIComponent(localStorage.getItem('streamlink_token'))}`), '_blank');
  };

  // Restore Backup
  const handleRestoreFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (evt) => {
      try {
        const json = JSON.parse(evt.target.result);
        const res = await authFetch('/api/admin/restore', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(json)
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error);
        alert('Backup successfully restored!');
        fetchStats();
      } catch (err) {
        alert(`Restore error: ${err.message}`);
      }
    };
    reader.readAsText(file);
  };

  const isTunnelOnline = stats?.tunnel?.status === 'connected';
  const isTunnelStarting = stats?.tunnel?.status === 'starting';

  return (
    <div className="dash-container">
      {/* ── Modern User-Centric Header ── */}
      <div className="dash-page-header">
        <div>
          <h1 className="dash-page-title">Server Dashboard</h1>
          <p className="dash-page-desc">
            Manage your movie storage, remote streaming link, and viewer accounts.
          </p>
        </div>

        <div className="dash-header-actions">
          <button
            className="btn-secondary"
            onClick={handleRescan}
            disabled={actionLoading}
            title="Scan your movie folder for newly added files"
          >
            <RefreshCw size={14} className={actionLoading ? 'dash-spin' : ''} />
            <span>Rescan Library</span>
          </button>
          <button
            className="btn-secondary"
            onClick={() => handleServerAction('restart')}
            disabled={actionLoading}
            title="Restart the local StreamLink server"
          >
            <RotateCw size={14} />
            <span>Restart Server</span>
          </button>
        </div>
      </div>

      {/* ── Status Toast Banner ── */}
      {statusMessage && (
        <div className="dash-status-toast">
          <span>{statusMessage}</span>
          <button onClick={() => setStatusMessage('')} className="dash-toast-close" title="Dismiss">
            <X size={14} />
          </button>
        </div>
      )}

      {/* ── Main Dashboard Layout ── */}
      <div className="dash-sections-stack">
        {/* 1. Remote Access & Public Streaming Link (Hero Card) */}
        <div className="dash-panel dash-panel-highlight">
          <div className="dash-panel-header">
            <div className="dash-panel-title-group">
              <div className={`dash-status-indicator ${isTunnelOnline ? 'indicator-online' : isTunnelStarting ? 'indicator-starting' : 'indicator-offline'}`} />
              <div>
                <h2 className="dash-panel-heading">Remote Access</h2>
                <p className="dash-panel-sub">
                  {isTunnelOnline
                    ? 'Your movie library is securely accessible from anywhere.'
                    : isTunnelStarting
                    ? 'Connecting encrypted remote streaming tunnel...'
                    : 'Stream outside your home network on phones, tablets, or remote browsers.'}
                </p>
              </div>
            </div>

            <div>
              {isTunnelOnline ? (
                <button
                  className="btn-secondary dash-btn-danger"
                  onClick={() => handleServerAction('stop')}
                  disabled={actionLoading}
                >
                  <Square size={14} fill="currentColor" />
                  <span>Pause Remote Access</span>
                </button>
              ) : (
                <button
                  className="btn-primary"
                  onClick={() => handleServerAction('start')}
                  disabled={actionLoading || isTunnelStarting}
                >
                  <Play size={14} fill="currentColor" />
                  <span>{isTunnelStarting ? 'Connecting...' : 'Enable Remote Access'}</span>
                </button>
              )}
            </div>
          </div>

          {/* When Online: Show Friendly Public Link with One-Click Actions */}
          {isTunnelOnline && stats?.tunnel?.publicUrl ? (
            <div className="dash-link-bar">
              <div className="dash-link-content">
                <span className="dash-link-label">Your Live Streaming Link:</span>
                <span className="dash-link-url" title={stats.tunnel.publicUrl}>
                  {stats.tunnel.publicUrl}
                </span>
              </div>
              <div className="dash-link-buttons">
                <button className="btn-secondary dash-btn-compact" onClick={handleCopyLink} title="Copy link to clipboard">
                  {copied ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
                <button className="btn-secondary dash-btn-compact" onClick={onOpenShareModal} title="Display QR Code for mobile">
                  <QrCode size={14} />
                  <span>QR Code</span>
                </button>
                <a
                  href={stats.tunnel.publicUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary dash-btn-compact"
                  title="Open live link in new tab"
                >
                  <ArrowUpRight size={14} />
                  <span>Open</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="dash-link-offline">
              <Globe size={16} />
              <span>
                Local in-home access is available at <code className="dash-code">http://localhost:5050</code>. Click &quot;Enable Remote Access&quot; to securely share outside home.
              </span>
            </div>
          )}
        </div>

        {/* ── 2-Column Grid for Storage & Activity ── */}
        <div className="dash-two-col-grid">
          {/* 2. Media Storage Card */}
          <div className="dash-panel">
            <div className="dash-panel-header">
              <div className="dash-panel-title-group">
                <HardDrive size={18} className="dash-icon" />
                <h2 className="dash-panel-heading">Movie Storage</h2>
              </div>
              <button
                className="btn-secondary dash-btn-compact"
                onClick={onOpenFolderPicker}
                title="Select another folder on your computer"
              >
                <Folder size={14} />
                <span>Change Folder</span>
              </button>
            </div>

            <div className="dash-storage-box">
              <div className="dash-folder-info">
                <Folder size={15} className="dash-folder-icon" />
                <span className="dash-folder-text" title={stats?.library?.folder}>
                  {stats?.library?.folder || 'No folder selected'}
                </span>
              </div>
              <span className={`dash-badge ${stats?.library?.folderExists ? 'badge-success' : 'badge-error'}`}>
                {stats?.library?.folderExists ? 'Connected' : 'Folder Not Found'}
              </span>
            </div>

            <div className="dash-metrics-grid">
              <div className="dash-metric-item">
                <span className="dash-metric-label">Total Movies</span>
                <span className="dash-metric-number">{stats?.library?.totalMovies || 0}</span>
              </div>
              <div className="dash-metric-item">
                <span className="dash-metric-label">Disk Storage</span>
                <span className="dash-metric-number">{formatFileSize(stats?.library?.totalDiskBytes)}</span>
              </div>
              <div className="dash-metric-item">
                <span className="dash-metric-label">Server Port</span>
                <span className="dash-metric-number">:{stats?.server?.port || 5050}</span>
              </div>
            </div>
          </div>

          {/* 3. Now Playing / Active Viewers */}
          <div className="dash-panel">
            <div className="dash-panel-header">
              <div className="dash-panel-title-group">
                <Activity size={18} className="dash-icon" />
                <h2 className="dash-panel-heading">Now Playing</h2>
              </div>
              <span className="dash-pill-counter">
                {stats?.streaming?.activeViewersCount || 0} Active
              </span>
            </div>

            {stats?.streaming?.activeSessions?.length === 0 ? (
              <div className="dash-empty-state">
                <Users size={24} className="dash-empty-icon" />
                <p className="dash-empty-title">No one is streaming right now</p>
                <p className="dash-empty-sub">
                  When movies are played on connected phones or browsers, real-time viewer details will appear here.
                </p>
              </div>
            ) : (
              <div className="dash-sessions-list">
                {stats.streaming.activeSessions.map(sess => (
                  <div key={sess.id} className="dash-session-row">
                    <div className="dash-session-avatar">
                      {sess.username.charAt(0).toUpperCase()}
                    </div>
                    <div className="dash-session-text">
                      <span className="dash-session-movie">{sess.movieTitle}</span>
                      <span className="dash-session-user">{sess.username} ({sess.ip})</span>
                    </div>
                    <span className="dash-session-bandwidth">
                      {formatFileSize(sess.bytesTransmitted)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── 2-Column Grid for Viewers & Backup ── */}
        <div className="dash-two-col-grid">
          {/* 4. Viewer Accounts */}
          <div className="dash-panel">
            <div className="dash-panel-header">
              <div className="dash-panel-title-group">
                <Shield size={18} className="dash-icon" />
                <div>
                  <h2 className="dash-panel-heading">Viewer Accounts</h2>
                  <p className="dash-panel-sub">Manage user logins for friends and family.</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleCreateUser} className="dash-user-form">
              <div className="dash-user-inputs">
                <input
                  type="text"
                  placeholder="Username"
                  value={newUsername}
                  onChange={e => setNewUsername(e.target.value)}
                  required
                  className="dash-input"
                />
                <input
                  type="password"
                  placeholder="Password (min 6 chars)"
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  required
                  className="dash-input"
                />
                <button type="submit" className="btn-primary dash-btn-compact">
                  <UserPlus size={14} />
                  <span>Add</span>
                </button>
              </div>
              {userError && <span className="dash-form-error">{userError}</span>}
              {userSuccess && <span className="dash-form-success">{userSuccess}</span>}
            </form>

            <div className="dash-user-list">
              {users.map(u => (
                <div key={u.id} className="dash-user-row">
                  <div className="dash-user-info">
                    <span className="dash-user-name">{u.username}</span>
                    <span className={`dash-role-badge ${u.role}`}>{u.role}</span>
                  </div>
                  {u.role !== 'admin' && (
                    <button
                      className="dash-delete-btn"
                      onClick={() => handleDeleteUser(u.id, u.username)}
                      title={`Remove user ${u.username}`}
                    >
                      <Trash2 size={13} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 5. Backup & Maintenance */}
          <div className="dash-panel">
            <div className="dash-panel-header">
              <div className="dash-panel-title-group">
                <Download size={18} className="dash-icon" />
                <div>
                  <h2 className="dash-panel-heading">Backup & Settings</h2>
                  <p className="dash-panel-sub">
                    Safely export or restore watch progress, favorites, and settings without touching movie files.
                  </p>
                </div>
              </div>
            </div>

            <div className="dash-backup-actions">
              <button className="btn-secondary dash-backup-btn" onClick={handleDownloadBackup}>
                <Download size={15} />
                <span>Export Backup (.json)</span>
              </button>

              <label className="btn-secondary dash-backup-btn dash-file-upload">
                <Upload size={15} />
                <span>Restore Backup</span>
                <input type="file" accept=".json" onChange={handleRestoreFile} style={{ display: 'none' }} />
              </label>
            </div>
          </div>
        </div>

        {/* ── Artwork & TMDB Metadata Hub Panel ── */}
        <div className="dash-panel" style={{ marginTop: '24px' }}>
          <div className="dash-panel-header">
            <div className="dash-panel-title-group">
              <Sparkles size={20} className="dash-icon text-cyan" />
              <div>
                <h2 className="dash-panel-heading">Automatic Movie Artwork & Metadata System</h2>
                <p className="dash-panel-sub">
                  TMDB movie recognition, vertical poster & wide backdrop caching, and metadata matching.
                </p>
              </div>
            </div>
            <div className="dash-panel-actions">
              <button
                className="btn-primary"
                onClick={handleBatchAutoFetch}
                disabled={batchRunning || !metaStatus.hasApiKey}
                title={metaStatus.hasApiKey ? 'Scan entire library and auto-fetch missing posters & backdrops' : 'Enter TMDB API Key below first'}
              >
                <RefreshCw size={14} className={batchRunning ? 'rescan-spinning' : ''} />
                <span>{batchRunning ? 'Fetching Artwork...' : 'Auto-Fetch All Artwork'}</span>
              </button>
            </div>
          </div>

          {batchMsg && (
            <div className="dash-status-alert info" style={{ marginBottom: '18px' }}>
              <Sparkles size={15} className="text-cyan pulse-icon" />
              <span>{batchMsg}</span>
            </div>
          )}

          {/* Metadata Statistics Row */}
          <div className="dash-metrics-grid" style={{ marginBottom: '20px' }}>
            <div className="dash-metric-item">
              <span className="dash-metric-label">Total Titles</span>
              <span className="dash-metric-number">{metaStatus.total}</span>
            </div>
            <div className="dash-metric-item">
              <span className="dash-metric-label">Artwork Matched</span>
              <span className="dash-metric-number" style={{ color: '#22C55E' }}>{metaStatus.matched}</span>
            </div>
            <div className="dash-metric-item">
              <span className="dash-metric-label">Uncertain Matches</span>
              <span className="dash-metric-number" style={{ color: '#F59E0B' }}>{metaStatus.uncertain}</span>
            </div>
            <div className="dash-metric-item">
              <span className="dash-metric-label">Missing Artwork</span>
              <span className="dash-metric-number" style={{ color: '#EF4444' }}>{metaStatus.missing}</span>
            </div>
          </div>

          {/* TMDB API Key Configuration Input */}
          <form onSubmit={handleSaveTmdbKey} className="tmdb-key-config-row">
            <div className="tmdb-key-label-wrap">
              <Key size={16} className="text-cyan" />
              <div>
                <strong>The Movie Database (TMDB) API Key:</strong>
                <p className="text-xs text-dim">
                  Used by backend server to automatically query posters, backdrops, and descriptions. Your key is stored securely on the host PC and never exposed to client browsers.
                </p>
              </div>
            </div>

            <div className="tmdb-key-input-group">
              <input
                type="text"
                className="input-text-dark"
                placeholder="Paste your TMDB v3 API Key (e.g. a1b2c3d4e5...)"
                value={tmdbKeyInput}
                onChange={e => setTmdbKeyInput(e.target.value)}
              />
              <button type="submit" className="btn-secondary">Save Key</button>
            </div>
          </form>

          {keySavedMsg && (
            <div className="dash-form-success" style={{ marginTop: '10px' }}>
              <CheckCircle2 size={14} />
              <span>{keySavedMsg}</span>
            </div>
          )}

          <div className="tmdb-attribution-footer">
            <span>
              This product uses the TMDB API but is not endorsed or certified by TMDB. Movie posters and cinematic artwork remain copyright of their respective production studios.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
