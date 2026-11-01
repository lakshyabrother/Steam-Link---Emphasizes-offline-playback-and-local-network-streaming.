import React from 'react';
import { Home, Film, FolderOpen, FolderSync, Globe, LayoutDashboard, Heart, LogOut, Radio } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Sidebar({ currentView, setCurrentView }) {
  const { user, logout } = useAuth();

  return (
    <>
      {/* ── Mobile Top Bar (Screen < 768px) ── */}
      <header className="app-mobile-top-bar">
        <div className="mobile-brand-pill" onClick={() => setCurrentView('home')}>
          <div className="sidebar-logo-icon">
            <Film size={18} strokeWidth={2.5} />
          </div>
          <span className="mobile-brand-title">
            Stream<span className="brand-accent">Link</span>
          </span>
          <span className="mobile-live-dot" title="Server Online">
            <Radio size={11} className="pulse-icon" />
            LIVE
          </span>
        </div>

        <div className="mobile-top-right">
          <span className="mobile-user-name">{user?.username}</span>
          <button className="mobile-logout-btn" onClick={logout} title="Sign Out">
            <LogOut size={15} />
          </button>
        </div>
      </header>

      {/* ── Desktop Sidebar (Screen >= 768px) ── */}
      <aside className="app-sidebar">
        <div className="sidebar-brand" onClick={() => setCurrentView('home')}>
          <div className="sidebar-logo-icon">
            <Film size={20} strokeWidth={2.5} />
          </div>
          <div className="sidebar-brand-text">
            <span>Stream<span className="brand-accent">Link</span></span>
            <span className="sidebar-brand-sub">Host Server</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="sidebar-nav-section-label">MEDIA</div>

          <button
            className={`sidebar-nav-item ${currentView === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentView('home')}
          >
            <Home size={18} />
            <span>Home</span>
          </button>

          <button
            className={`sidebar-nav-item ${currentView === 'library' ? 'active' : ''}`}
            onClick={() => setCurrentView('library')}
          >
            <Film size={18} />
            <span>Movie Library</span>
          </button>

          <button
            className={`sidebar-nav-item ${currentView === 'favorites' ? 'active' : ''}`}
            onClick={() => setCurrentView('favorites')}
          >
            <Heart size={18} />
            <span>Favorites</span>
          </button>

          {user?.role === 'admin' && (
            <>
              <div className="sidebar-nav-section-label" style={{ marginTop: '16px' }}>SERVER & SHARING</div>

              <button
                className={`sidebar-nav-item ${currentView === 'folder-sharing' ? 'active' : ''}`}
                onClick={() => setCurrentView('folder-sharing')}
              >
                <FolderSync size={18} />
                <span>Folder Sharing</span>
              </button>

              <button
                className={`sidebar-nav-item ${currentView === 'folder' ? 'active' : ''}`}
                onClick={() => setCurrentView('folder')}
              >
                <FolderOpen size={18} />
                <span>Movie Folder</span>
              </button>

              <button
                className={`sidebar-nav-item ${currentView === 'sharing' ? 'active' : ''}`}
                onClick={() => setCurrentView('sharing')}
              >
                <Globe size={18} />
                <span>Sharing Hub</span>
              </button>

              <button
                className={`sidebar-nav-item ${currentView === 'dashboard' ? 'active' : ''}`}
                onClick={() => setCurrentView('dashboard')}
              >
                <LayoutDashboard size={18} />
                <span>Server Dashboard</span>
              </button>
            </>
          )}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-user-pill">
            <div className="user-avatar-dot" />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="sidebar-username">{user?.username}</div>
              <div className="sidebar-role">{user?.role}</div>
            </div>
            <button className="sidebar-logout-btn" onClick={logout} title="Sign Out">
              <LogOut size={15} />
            </button>
          </div>
        </div>
      </aside>

      {/* ── Mobile Bottom Navigation Bar (Screen < 768px, Reference 1 yaart & Reference 3 Bato) ── */}
      <nav className="app-mobile-bottom-nav">
        <button
          className={`mobile-nav-btn ${currentView === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentView('home')}
        >
          <Home size={20} />
          <span>Home</span>
        </button>

        <button
          className={`mobile-nav-btn ${currentView === 'library' ? 'active' : ''}`}
          onClick={() => setCurrentView('library')}
        >
          <Film size={20} />
          <span>Library</span>
        </button>

        <button
          className={`mobile-nav-btn ${currentView === 'favorites' ? 'active' : ''}`}
          onClick={() => setCurrentView('favorites')}
        >
          <Heart size={20} />
          <span>Favorites</span>
        </button>

        {user?.role === 'admin' && (
          <>
            <button
              className={`mobile-nav-btn ${currentView === 'folder-sharing' ? 'active' : ''}`}
              onClick={() => setCurrentView('folder-sharing')}
            >
              <FolderSync size={20} />
              <span>Sharing</span>
            </button>

            <button
              className={`mobile-nav-btn ${currentView === 'folder' ? 'active' : ''}`}
              onClick={() => setCurrentView('folder')}
            >
              <FolderOpen size={20} />
              <span>Folder</span>
            </button>
          </>
        )}
      </nav>
    </>
  );
}

