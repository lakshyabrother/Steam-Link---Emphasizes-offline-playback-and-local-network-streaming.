import React, { useState } from 'react';
import { Film, Lock, User, AlertCircle, ArrowRight, Server, Check, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getApiBaseUrl, setApiBaseUrl } from '../utils/api';

export default function LoginPage() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Server URL configuration for remote/Vercel deployments
  const [showServerConfig, setShowServerConfig] = useState(false);
  const [serverUrlInput, setServerUrlInput] = useState(() => getApiBaseUrl());
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
      if (msg.includes('fetch') || msg.includes('Failed to fetch') || msg.includes('NetworkError')) {
        setError('Cannot connect to StreamLink server. Ensure your backend is running on your PC or configure your Server URL below.');
        setShowServerConfig(true);
      } else {
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleTestAndSave = async () => {
    const targetUrl = serverUrlInput.trim().replace(/\/+$/, '');
    setTestingConnection(true);
    setTestResult(null);

    const testEndpoint = targetUrl ? `${targetUrl}/api/health` : '/api/health';

    try {
      const res = await fetch(testEndpoint, { signal: AbortSignal.timeout(5000) });
      if (res.ok) {
        setApiBaseUrl(targetUrl);
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
        message: 'Could not connect. Verify your Cloudflare Tunnel URL or start the server on your PC.'
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

        {/* Server Connection Accordion */}
        <div className="login-server-config">
          <button
            type="button"
            className="login-server-toggle"
            onClick={() => setShowServerConfig(!showServerConfig)}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Server size={14} />
              Server Connection {getApiBaseUrl() ? '(Configured)' : '(Default)'}
            </span>
            {showServerConfig ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {showServerConfig && (
            <div className="login-server-panel">
              <label className="login-server-label">
                Backend Server / Tunnel URL:
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
                  className="btn-secondary"
                  onClick={handleTestAndSave}
                  disabled={testingConnection}
                  style={{ padding: '8px 12px', fontSize: '12px', whiteSpace: 'nowrap' }}
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
                  onClick={() => setServerUrlInput('http://localhost:5050')}
                >
                  Localhost (5050)
                </button>
                <button
                  type="button"
                  className="login-preset-chip"
                  onClick={() => setServerUrlInput('')}
                >
                  Reset to Default
                </button>
              </div>

              {testResult && (
                <div className={`login-server-feedback ${testResult.type}`}>
                  {testResult.message}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
