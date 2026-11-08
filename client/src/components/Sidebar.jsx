import React from 'react';
import {
  Home, Film, FolderOpen, FolderSync, Globe, LayoutDashboard,
  Heart, LogOut, Radio, Sparkles, Search, Users, Sliders, Layers
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Sidebar({
  currentView,
  setCurrentView,
  onOpenSearch,
  onOpenProfiles,
  onOpenQuality,
  currentProfile,
  qualityLevel = 'high'
}) {
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
            <span className="mobile-version-tag">2.0</span>
          </span>
          <span className="mobile-live-dot" title="Server Online">
            <Radio size={11} className="pulse-icon" />
            LIVE
          </span>
        </div>

        <div className="mobile-top-right">
          <button className="mobile-search-btn" onClick={onOpenSearch} title="Search (/)">
            <Search size={16} />
          </button>
          <button
            className="mobile-profile-btn"
            onClick={onOpenProfiles}
            style={{ backgroundColor: currentProfile?.avatar_color || '#8B5CF6' }}
            title="Switch Profile"
          >
            <span>{currentProfile?.name?.[0]?.toUpperCase() || user?.username?.[0]?.toUpperCase() || 'U'}</span>
          </button>
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
            <span>Stream<span className="brand-accent">Link</span> <span className="version-pill">2.0</span></span>
            <span className="sidebar-brand-sub">OBSIDIAN CINEMA</span>
          </div>
        </div>

        {/* Search Quick Action */}
        <div className="sidebar-search-action" onClick={onOpenSearch}>
          <Search size={15} className="text-cyan" />
          <span>Dimensional Search</span>
          <kbd className="sidebar-kbd">/</kbd>
        </div>

        <nav className="sidebar-nav">
          <div className="sidebar-nav-section-label">EXPERIENCE</div>

          <button
            className={`sidebar-nav-item cine3d-nav-item ${currentView === 'cine3d' ? 'active' : ''}`}
            onClick={() => setCurrentView('cine3d')}
          >
            <Sparkles size={18} className="text-cyan pulse-icon" />
            <span>CINE-3D Lobby</span>
            <span className="sidebar-badge-new">3D</span>
          </button>

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
            <span>My List & Favorites</span>
          </button>

          {user?.role === 'admin' && (
            <>
              <div className="sidebar-nav-section-label" style={{ marginTop: '16px' }}>SERVER & CONTROL</div>

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

          <div className="sidebar-nav-section-label" style={{ marginTop: '16px' }}>SYSTEM & QUALITY</div>

          <button
            className="sidebar-nav-item quality-nav-pill"
            onClick={onOpenQuality}
          >
            <Sliders size={17} className="text-cyan" />
            <div style={{ flex: 1, textAlign: 'left' }}>
              <div>Quality Manager</div>
              <div className="sidebar-quality-badge">{qualityLevel.toUpperCase()}</div>
            </div>
          </button>

          <button
            className="sidebar-nav-item"
            onClick={onOpenProfiles}
          >
            <Users size={17} />
            <span>Switch Profile</span>
          </button>
        </nav>

        {/* Active Profile & Sign Out Footer */}
        <div className="sidebar-footer">
          <div className="sidebar-user-pill" onClick={onOpenProfiles} title="Manage Profiles">
            <div
              className="user-avatar-dot"
              style={{ backgroundColor: currentProfile?.avatar_color || '#8B5CF6' }}
            >
              <span>{currentProfile?.name?.[0]?.toUpperCase() || user?.username?.[0]?.toUpperCase() || 'U'}</span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="sidebar-username">{currentProfile?.name || user?.username}</div>
              <div className="sidebar-role">{user?.role === 'admin' ? 'Host Administrator' : 'Viewer'}</div>
            </div>
            <button
              className="sidebar-logout-btn"
              onClick={(e) => {
                e.stopPropagation();
                logout();
              }}
              title="Sign Out"
            >
              <LogOut size={15} />
            </button>
          </div>
        </div>
      </aside>

      {/* ── Mobile Bottom Navigation Bar ── */}
      <nav className="app-mobile-bottom-nav">
        <button
          className={`mobile-nav-btn ${currentView === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentView('home')}
        >
          <Home size={20} />
          <span>Home</span>
        </button>

        <button
          className={`mobile-nav-btn cine3d-btn ${currentView === 'cine3d' ? 'active' : ''}`}
          onClick={() => setCurrentView('cine3d')}
        >
          <Sparkles size={20} className="text-cyan pulse-icon" />
          <span>CINE-3D</span>
        </button>

        <button
          className={`mobile-nav-btn ${currentView === 'library' ? 'active' : ''}`}
          onClick={() => setCurrentView('library')}
        >
          <Film size={20} />
          <span>Library</span>
        </button>

        <button
          className="mobile-nav-btn"
          onClick={onOpenSearch}
        >
          <Search size={20} />
          <span>Search</span>
        </button>

        <button
          className={`mobile-nav-btn ${currentView === 'favorites' ? 'active' : ''}`}
          onClick={() => setCurrentView('favorites')}
        >
          <Heart size={20} />
          <span>My List</span>
        </button>
      </nav>
    </>
  );
}
