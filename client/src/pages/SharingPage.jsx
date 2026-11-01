import React, { useState, useEffect } from 'react';
import {
  Globe, Wifi, Copy, Check, QrCode, Play, Square,
  ShieldCheck, Lock, Trash2, Plus, Film, ExternalLink, AlertCircle
} from 'lucide-react';

export default function SharingPage({ authFetch }) {
  const [shareInfo, setShareInfo] = useState(null);
  const [links, setLinks] = useState([]);
  const [movies, setMovies] = useState([]);
  const [copiedKey, setCopiedKey] = useState(null);
  const [tunnelLoading, setTunnelLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  // Form to generate new share link
  const [newType, setNewType] = useState('library');
  const [selectedMovieId, setSelectedMovieId] = useState('');
  const [newPasscode, setNewPasscode] = useState('');
  const [newLabel, setNewLabel] = useState('');

  // Fetch sharing info (local IP, tunnel status, QR codes)
  const fetchShareInfo = async () => {
    try {
      const res = await authFetch('/api/share/info');
      const data = await res.json();
      setShareInfo(data);
    } catch (e) {}
  };

  // Fetch share links
  const fetchLinks = async () => {
    try {
      const res = await authFetch('/api/share/links');
      const data = await res.json();
      if (data.links) setLinks(data.links);
    } catch (e) {}
  };

  // Fetch movies for individual movie sharing
  const fetchMovies = async () => {
    try {
      const res = await authFetch('/api/movies');
      const data = await res.json();
      if (data.movies) setMovies(data.movies);
    } catch (e) {}
  };

  useEffect(() => {
    fetchShareInfo();
    fetchLinks();
    fetchMovies();
    const interval = setInterval(fetchShareInfo, 3500);
    return () => clearInterval(interval);
  }, []);

  // Copy helper
  const handleCopy = (text, key) => {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    });
  };

  // Tunnel Controls
  const handleTunnelToggle = async (action) => {
    setTunnelLoading(true);
    setStatusMsg(`${action === 'start' ? 'Starting' : 'Stopping'} Cloudflare Tunnel...`);
    try {
      const res = await authFetch(`/api/admin/tunnel/${action}`, { method: 'POST' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Tunnel command failed');
      setStatusMsg(data.message);
      await fetchShareInfo();
    } catch (err) {
      setStatusMsg(`Tunnel error: ${err.message}`);
    } finally {
      setTunnelLoading(false);
    }
  };

  // Create new share link
  const handleGenerateLink = async (e) => {
    e.preventDefault();
    try {
      const res = await authFetch('/api/share/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: newType,
          movieId: newType === 'movie' ? parseInt(selectedMovieId, 10) : null,
          passcode: newPasscode.trim(),
          label: newLabel.trim()
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to generate link');

      setStatusMsg('New sharing link created successfully!');
      setNewPasscode('');
      setNewLabel('');
      await fetchLinks();
    } catch (err) {
      alert(err.message);
    }
  };

  // Revoke link
  const handleRevokeLink = async (id) => {
    if (!window.confirm('Revoke this share link? Viewers will no longer be able to access it.')) return;
    try {
      const res = await authFetch(`/api/share/revoke/${id}`, { method: 'POST' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      await fetchLinks();
    } catch (err) {
      alert(err.message);
    }
  };

  const isTunnelConnected = shareInfo?.remote?.status === 'connected';
  const isTunnelStarting = shareInfo?.remote?.status === 'starting';

  // Construct sharing URL
  const buildShareUrl = (token, isPublic = true) => {
    const base = isPublic && shareInfo?.remote?.publicUrl
      ? shareInfo.remote.publicUrl
      : (shareInfo?.local?.url || `http://localhost:5050`);
    return `${base}/?share=${token}`;
  };

  return (
    <div className="sharing-page-container">
      {/* Header */}
      <div className="page-header-row">
        <div>
          <h1 className="page-main-title">Sharing & Network Access</h1>
          <p className="page-sub-title">
            Generate simple direct access links for remote friends and local Wi-Fi devices to stream movies from your PC.
          </p>
        </div>
      </div>

      {statusMsg && (
        <div className="folder-status-box" style={{ marginBottom: '20px' }}>
          {statusMsg}
        </div>
      )}

      {/* Grid: Section A (Local) & Section B (Remote) */}
      <div className="sharing-sections-grid">
        {/* SECTION A: LOCAL NETWORK ACCESS */}
        <div className="sharing-card">
          <div className="sharing-card-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Wifi size={22} color="var(--success)" />
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 700 }}>Section A: Local Network Access</h3>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Same-Wi-Fi Home Streaming</div>
              </div>
            </div>
            <span className="status-pill-green">LAN ONLINE</span>
          </div>

          <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
            Any phone, tablet, smart TV or laptop connected to your home Wi-Fi network can open this address to browse and stream.
          </p>

          <div className="link-display-box">
            <span className="link-text-mono">{shareInfo?.local?.url || 'Detecting local IP...'}</span>
            <button
              className="btn-secondary"
              style={{ padding: '8px 14px', fontSize: '13px' }}
              onClick={() => handleCopy(shareInfo?.local?.url, 'local')}
            >
              {copiedKey === 'local' ? <Check size={15} color="var(--success)" /> : <Copy size={15} />}
              <span>{copiedKey === 'local' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {shareInfo?.local?.qrCode && (
            <div style={{ textAlign: 'center', background: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>Scan with Phone Camera (Same Wi-Fi)</div>
              <img src={shareInfo.local.qrCode} alt="Local QR" style={{ width: '140px', height: '140px', background: '#fff', padding: '6px', borderRadius: '8px' }} />
            </div>
          )}
        </div>

        {/* SECTION B: REMOTE ACCESS (CLOUDFLARE TUNNEL) */}
        <div className="sharing-card">
          <div className="sharing-card-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Globe size={22} color="#38bdf8" />
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 700 }}>Section B: Remote Access (Cloudflare Tunnel)</h3>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Worldwide Internet Streaming</div>
              </div>
            </div>
            <span className={`status-pill ${isTunnelConnected ? 'status-pill-green' : (isTunnelStarting ? 'status-pill-yellow' : 'status-pill-red')}`}>
              {shareInfo?.remote?.status?.toUpperCase() || 'STOPPED'}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              className="btn-primary"
              style={{ flex: 1, background: isTunnelConnected ? 'var(--bg-secondary)' : 'var(--success)' }}
              onClick={() => handleTunnelToggle('start')}
              disabled={tunnelLoading || isTunnelConnected}
            >
              <Play size={16} fill="currentColor" />
              <span>START TUNNEL</span>
            </button>

            <button
              className="btn-danger"
              style={{ flex: 1 }}
              onClick={() => handleTunnelToggle('stop')}
              disabled={tunnelLoading || (!isTunnelConnected && !isTunnelStarting)}
            >
              <Square size={16} fill="currentColor" />
              <span>STOP TUNNEL</span>
            </button>
          </div>

          <div className="link-display-box">
            <span className="link-text-mono" style={{ color: '#38bdf8' }}>
              {shareInfo?.remote?.publicUrl || (isTunnelStarting ? 'Connecting to Cloudflare edge...' : 'Tunnel stopped — Click START TUNNEL')}
            </span>
            {shareInfo?.remote?.publicUrl && (
              <button
                className="btn-secondary"
                style={{ padding: '8px 14px', fontSize: '13px' }}
                onClick={() => handleCopy(shareInfo?.remote?.publicUrl, 'public')}
              >
                {copiedKey === 'public' ? <Check size={15} color="var(--success)" /> : <Copy size={15} />}
                <span>{copiedKey === 'public' ? 'Copied' : 'Copy'}</span>
              </button>
            )}
          </div>

          {shareInfo?.remote?.qrCode && (
            <div style={{ textAlign: 'center', background: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>Scan with Phone (Worldwide Access)</div>
              <img src={shareInfo.remote.qrCode} alt="Remote QR" style={{ width: '140px', height: '140px', background: '#fff', padding: '6px', borderRadius: '8px' }} />
            </div>
          )}
        </div>
      </div>

      {/* SECTION C: GENERATE SIMPLE SHARE LINKS */}
      <div className="share-generator-card">
        <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px' }}>
          Generate Custom Sharing Links
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '18px' }}>
          Create tailored streaming links. Viewers who open these links do not need an account — they can immediately stream the movies authorized by the link.
        </p>

        <form onSubmit={handleGenerateLink} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', alignItems: 'flex-end' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
              Sharing Scope:
            </label>
            <select value={newType} onChange={e => setNewType(e.target.value)} style={{ width: '100%' }}>
              <option value="library">Entire Movie Library</option>
              <option value="movie">Single Individual Movie</option>
            </select>
          </div>

          {newType === 'movie' && (
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                Select Movie:
              </label>
              <select value={selectedMovieId} onChange={e => setSelectedMovieId(e.target.value)} required style={{ width: '100%' }}>
                <option value="">-- Choose Movie --</option>
                {movies.map(m => (
                  <option key={m.id} value={m.id}>{m.clean_title}</option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
              Optional Passcode / PIN:
            </label>
            <input
              type="text"
              placeholder="e.g. 1234 (optional)"
              value={newPasscode}
              onChange={e => setNewPasscode(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
              Note / Label:
            </label>
            <input
              type="text"
              placeholder="e.g. Link for John"
              value={newLabel}
              onChange={e => setNewLabel(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          <div>
            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '10px', height: '42px' }}>
              <Plus size={16} />
              <span>Create Link</span>
            </button>
          </div>
        </form>
      </div>

      {/* ACTIVE SHARING LINKS TABLE */}
      <div className="active-links-section">
        <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '14px' }}>
          Active Sharing Links ({links.length})
        </h3>

        <div style={{ overflowX: 'auto', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <table className="sessions-table-3d">
            <thead>
              <tr>
                <th>Scope</th>
                <th>Label / Target</th>
                <th>Security</th>
                <th>Views</th>
                <th>Remote Sharing Link</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {links.map(link => {
                const url = buildShareUrl(link.token, true);
                const localUrl = buildShareUrl(link.token, false);
                return (
                  <tr key={link.id}>
                    <td>
                      <span className={`role-pill ${link.type === 'movie' ? 'viewer' : 'admin'}`}>
                        {link.type.toUpperCase()}
                      </span>
                    </td>
                    <td>
                      <strong>{link.label || 'Standard Link'}</strong>
                      {link.movie_title && (
                        <div style={{ fontSize: '12px', color: '#38bdf8' }}>{link.movie_title}</div>
                      )}
                    </td>
                    <td>
                      {link.passcode ? (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fbbf24', fontSize: '12px' }}>
                          <Lock size={13} />
                          <span>PIN Protected</span>
                        </span>
                      ) : (
                        <span style={{ color: 'var(--text-dim)', fontSize: '12px' }}>Direct Access</span>
                      )}
                    </td>
                    <td>{link.access_count}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontFamily: 'monospace', fontSize: '12px', color: '#38bdf8', maxWidth: '240px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={url}>
                          {url}
                        </span>
                        <button
                          className="btn-secondary"
                          style={{ padding: '4px 8px', fontSize: '11px' }}
                          onClick={() => handleCopy(url, `link_${link.id}`)}
                          title="Copy Remote Link"
                        >
                          {copiedKey === `link_${link.id}` ? <Check size={13} color="var(--success)" /> : <Copy size={13} />}
                        </button>
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn-danger"
                        style={{ padding: '5px 10px', fontSize: '12px' }}
                        onClick={() => handleRevokeLink(link.id)}
                        title="Revoke Link"
                      >
                        <Trash2 size={13} />
                        <span>Revoke</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

