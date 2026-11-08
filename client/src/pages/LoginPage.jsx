import React, { useState } from 'react';
import { Film, Lock, User, AlertCircle, ArrowRight, Server, Check, RefreshCw, ChevronDown, ChevronUp, Globe, Info, RotateCcw } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getApiBaseUrl, setApiBaseUrl } from '../utils/api';

export default function LoginPage() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Automatically open Server Connection if running on a remote domain (like Vercel)
  const isRemoteHost = typeof window !== 'undefined' && !window.location.hostname.includes('localhost') && !window.location.hostname.includes('127.0.0.1');
  const [showServerConfig, setShowServerConfig] = useState(() => isRemoteHost || !getApiBaseUrl());
  const [serverUrlInput, setServerUrlInput] = useState(() => getApiBaseUrl() || '');
  const [testingConnection, setTestingConnection] = useState(false);
  const [testResult, setTestResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(username.trim(), password);
    } catch (err) {
      const msg = err.message || 'Login failed';
      if (msg.includes('fetch') || msg.includes('Failed to fetch') || msg.includes('NetworkError') || msg.includes('Cannot connect')) {
        setError('Cannot connect to your StreamLink server. Please enter your Cloudflare Tunnel URL below and click Save.');
        setShowServerConfig(true);
      } else {
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleTestAndSave = async (overrideUrl) => {
    let rawUrl = (overrideUrl !== undefined ? overrideUrl : serverUrlInput).trim();

    if (!rawUrl) {
      setApiBaseUrl('');
      setServerUrlInput('');
      setTestResult({
        type: 'success',
        message: 'Server URL cleared (using local /api).'
      });
      setError('');
      return;
    }

    let targetUrl = rawUrl.replace(/\/+$/, '');
    if (!/^https?:\/\//i.test(targetUrl)) {
      targetUrl = `https://${targetUrl}`;
    }
    // Remove trailing /api if user appended it
    targetUrl = targetUrl.replace(/\/api\/?$/i, '');

    // Catch dummy placeholders like in documentation or screenshots
    if (
      targetUrl.includes('your-temporary-url') ||
      targetUrl.includes('your-tunnel') ||
      targetUrl.includes('sponsored-fee-imposed-associations')
    ) {
      setTestResult({
        type: 'error',
        message: 'Please replace the placeholder with your actual Cloudflare Tunnel URL generated on your PC.'
      });
      return;
    }

    setTestingConnection(true);
    setTestResult(null);

    const testEndpoint = `${targetUrl}/api/health`;

    try {
      const res = await fetch(testEndpoint, { signal: AbortSignal.timeout(8000) });
      if (res.ok) {
        setApiBaseUrl(targetUrl);
        setServerUrlInput(targetUrl);
        setTestResult({
          type: 'success',
          message: 'Connected to StreamLink Server successfully!'
        });
        setError('');
      } else {
        throw new Error(`Server returned status ${res.status}`);
      }
    } catch (err) {
      setTestResult({
        type: 'error',
        message: 'Could not connect. Ensure start-streamlink.bat is running on your PC and Cloudflare Tunnel is started in your Dashboard.'
      });
    } finally {
      setTestingConnection(false);
    }
  };

  return (
    <div className="login-page-shell">
      <div className="login-bg-gradient" />

      <div className="login-card">
        <div className="login-brand">
          <div className="login-logo-icon">
            <Film size={28} />
          </div>
          <h1 className="login-brand-name">
            Stream<span style={{ color: 'var(--accent)' }}>Link</span>
          </h1>
          <p className="login-brand-sub">Personal Self-Hosted Movie Streaming</p>
        </div>

        {error && (
          <div className="login-error" style={{ marginBottom: '16px' }}>
            <AlertCircle size={16} style={{ flexShrink: 0 }} />
            <span>{error}</span>
          </div>
        )}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="sl-username">Username</label>
            <div className="login-input-wrapper">
              <input
                id="sl-username"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                autoFocus
              />
              <User size={16} className="login-input-icon" />
            </div>
          </div>

          <div className="login-field">
            <label htmlFor="sl-password">Password</label>
            <div className="login-input-wrapper">
              <input
                id="sl-password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <Lock size={16} className="login-input-icon" />
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%', padding: '13px', fontSize: '15px', marginTop: '8px' }}
            disabled={loading}
          >
            <span>{loading ? 'Authenticating...' : 'Sign In'}</span>
            {!loading && <ArrowRight size={16} />}
          </button>
        </form>

        <div className="login-hint">
          Default credentials: <strong style={{ color: '#fff' }}>admin</strong> / <strong style={{ color: '#fff' }}>admin123</strong>
        </div>

        {/* Server Connection Section */}
        <div className="login-server-config" style={{ marginTop: '16px' }}>
          <button
            type="button"
            className="login-server-toggle"
            onClick={() => setShowServerConfig(!showServerConfig)}
            style={{ fontWeight: 600, color: '#fff' }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Server size={15} style={{ color: 'var(--accent)' }} />
              Server Connection
              <span style={{
                fontSize: '10px',
                padding: '2px 6px',
                borderRadius: '4px',
                background: getApiBaseUrl() ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.08)',
                color: getApiBaseUrl() ? '#4ade80' : 'var(--text-dim)'
              }}>
                {getApiBaseUrl() ? 'Configured' : 'Local / Not Set'}
              </span>
            </span>
            {showServerConfig ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>

          {showServerConfig && (
            <div className="login-server-panel" style={{ marginTop: '10px' }}>
              <label className="login-server-label">
                PC Tunnel URL (Cloudflare):
              </label>
              <div className="login-server-input-row">
                <input
                  type="url"
                  className="login-server-input"
                  placeholder="https://your-tunnel.trycloudflare.com"
                  value={serverUrlInput}
                  onChange={e => setServerUrlInput(e.target.value)}
                />
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => handleTestAndSave()}
                  disabled={testingConnection}
                  style={{ padding: '8px 14px', fontSize: '12px', whiteSpace: 'nowrap' }}
                >
                  {testingConnection ? (
                    <RefreshCw size={13} className="spin" />
                  ) : (
                    <Check size={13} />
                  )}
                  <span>Save</span>
                </button>
              </div>

              <div className="login-server-presets">
                <button
                  type="button"
                  className="login-preset-chip"
                  onClick={() => {
                    setServerUrlInput('http://localhost:5050');
                    handleTestAndSave('http://localhost:5050');
                  }}
                >
                  <Globe size={11} style={{ display: 'inline', marginRight: '4px' }} />
                  Localhost (5050)
                </button>
                {getApiBaseUrl() && (
                  <button
                    type="button"
                    className="login-preset-chip"
                    onClick={() => {
                      setServerUrlInput('');
                      handleTestAndSave('');
                    }}
                  >
                    <RotateCcw size={11} style={{ display: 'inline', marginRight: '4px' }} />
                    Reset / Clear URL
                  </button>
                )}
              </div>

              {testResult && (
                <div className={`login-server-feedback ${testResult.type}`}>
                  {testResult.message}
                </div>
              )}

              <div className="login-server-guide">
                <div className="login-server-guide-title">
                  <Info size={13} style={{ flexShrink: 0 }} />
                  <span>How to connect when hosted on Vercel:</span>
                </div>
                <ol className="login-server-steps">
                  <li>Run <code>start-streamlink.bat</code> on your PC (where movies are stored).</li>
                  <li>In your PC browser, open <code>http://localhost:5050</code> and go to <strong>Dashboard</strong>.</li>
                  <li>Under <strong>Cloudflare Tunnel</strong>, click <strong>START SERVER</strong>.</li>
                  <li>Copy your live <code>https://....trycloudflare.com</code> link, paste it in the box above, and click <strong>Save</strong>.</li>
                </ol>
                <div className="login-server-tip">
                  💡 <strong>Tip:</strong> You don't need Vercel! Your Cloudflare Tunnel link from your PC can be shared and opened directly on any phone or device.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
