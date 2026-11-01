import React, { useState } from 'react';
import { Film, Lock, User, AlertCircle, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(username.trim(), password);
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
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
            <AlertCircle size={15} />
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
      </div>
    </div>
  );
}
