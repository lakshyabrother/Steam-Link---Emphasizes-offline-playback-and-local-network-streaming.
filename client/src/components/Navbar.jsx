import React, { useState } from 'react';
import { Film, Heart, LayoutDashboard, LogOut, User, FolderSearch, Menu, X, Globe } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import MagneticButton from './MagneticButton';

export default function Navbar({ currentView, setCurrentView, onOpenFolderPicker, onOpenShareModal }) {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-3d">
      <div className="nav-brand-3d" onClick={() => handleNavClick('library')}>
        <div className="nav-logo-icon-3d">
          <Film size={18} strokeWidth={2.5} />
        </div>
        <span>Stream<span style={{ color: 'var(--primary)' }}>Link</span></span>
      </div>

      <nav className={`nav-links-3d ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <button
          className={`nav-btn-3d ${currentView === 'library' ? 'active' : ''}`}
          onClick={() => handleNavClick('library')}
        >
          <Film size={16} />
          <span>Library</span>
          {currentView === 'library' && <div className="nav-active-indicator" />}
        </button>

        <button
          className={`nav-btn-3d ${currentView === 'favorites' ? 'active' : ''}`}
          onClick={() => handleNavClick('favorites')}
        >
          <Heart size={16} />
          <span>Favorites</span>
          {currentView === 'favorites' && <div className="nav-active-indicator" />}
        </button>

        {user?.role === 'admin' && (
          <button
            className={`nav-btn-3d ${currentView === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleNavClick('dashboard')}
          >
            <LayoutDashboard size={16} />
            <span>Dashboard</span>
            {currentView === 'dashboard' && <div className="nav-active-indicator" />}
          </button>
        )}
      </nav>

      <div className="nav-right-3d">
        {user?.role === 'admin' && (
          <>
            <MagneticButton
              className="btn-secondary nav-action-btn"
              onClick={onOpenFolderPicker}
              title="Change Movie Folder"
            >
              <FolderSearch size={15} />
              <span className="desktop-only">Folder</span>
            </MagneticButton>

            <MagneticButton
              className="btn-secondary nav-action-btn"
              onClick={onOpenShareModal}
              title="Share StreamLink"
            >
              <Globe size={15} color="#38bdf8" />
              <span className="desktop-only">Share</span>
            </MagneticButton>
          </>
        )}

        <div className="user-badge-3d">
          <User size={14} />
          <span>{user?.username}</span>
          <span className={`role-pill ${user?.role}`}>
            {user?.role}
          </span>
        </div>

        <MagneticButton className="btn-secondary nav-action-btn" onClick={logout} title="Sign Out">
          <LogOut size={15} />
        </MagneticButton>

        {/* Mobile menu toggle */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
