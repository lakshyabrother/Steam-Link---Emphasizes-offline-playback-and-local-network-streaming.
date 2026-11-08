import React, { useState, useEffect } from 'react';
import { User, Users, Plus, Trash2, Check, X, Shield, Sparkles } from 'lucide-react';

const AVATAR_COLORS = [
  '#8B5CF6', '#38BDF8', '#EC4899', '#10B981', '#F59E0B', '#6366F1'
];

export default function ProfilesModal({ isOpen, onClose, authFetch, onProfileChange, currentProfile }) {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [newProfileName, setNewProfileName] = useState('');
  const [selectedColor, setSelectedColor] = useState(AVATAR_COLORS[0]);
  const [errorMsg, setErrorMsg] = useState('');

  const loadProfiles = () => {
    setLoading(true);
    authFetch('/api/user/profiles')
      .then(res => res.json())
      .then(data => {
        setProfiles(data.profiles || []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (isOpen) {
      loadProfiles();
      setIsCreating(false);
      setErrorMsg('');
    }
  }, [isOpen]);

  const handleCreateProfile = async (e) => {
    e.preventDefault();
    if (!newProfileName.trim()) return;

    try {
      const res = await authFetch('/api/user/profiles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newProfileName.trim(),
          avatar_color: selectedColor,
          avatar_icon: 'film'
        })
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || 'Failed to create profile');
        return;
      }
      setNewProfileName('');
      setIsCreating(false);
      loadProfiles();
    } catch (err) {
      setErrorMsg('Network error creating profile');
    }
  };

  const handleDeleteProfile = async (profileId, name) => {
    if (!window.confirm(`Delete profile "${name}"? Watchlist and history for this profile will be removed.`)) {
      return;
    }

    try {
      const res = await authFetch(`/api/user/profiles/${profileId}`, { method: 'DELETE' });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Failed to delete profile');
        return;
      }
      loadProfiles();
    } catch (err) {
      alert('Network error deleting profile');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop-3d" onClick={onClose}>
      <div className="profiles-modal-window" onClick={e => e.stopPropagation()}>
        <div className="profiles-header">
          <div className="profiles-title-pill">
            <Users size={16} className="text-cyan" />
            <span>WHO'S WATCHING STREAMLINK?</span>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {errorMsg && (
          <div className="profiles-error-banner">{errorMsg}</div>
        )}

        {loading ? (
          <div className="loading-state-3d" style={{ padding: '40px' }}>
            <div className="loading-pulse-ring" />
            <span>Loading user profiles...</span>
          </div>
        ) : (
          <div className="profiles-grid-wrap">
            {profiles.map(p => {
              const isActive = currentProfile?.id === p.id;
              return (
                <div
                  key={p.id}
                  className={`profile-card-item ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    onProfileChange(p);
                    onClose();
                  }}
                >
                  <div
                    className="profile-avatar-circle"
                    style={{ backgroundColor: p.avatar_color || '#8B5CF6' }}
                  >
                    <User size={32} color="#FFFFFF" />
                    {isActive && (
                      <div className="active-badge-indicator">
                        <Check size={12} strokeWidth={3} />
                      </div>
                    )}
                  </div>
                  <span className="profile-name-label">{p.name}</span>

                  {profiles.length > 1 && (
                    <button
                      className="profile-delete-icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteProfile(p.id, p.name);
                      }}
                      title="Delete profile"
                    >
                      <Trash2 size={13} />
                    </button>
                  )}
                </div>
              );
            })}

            {profiles.length < 6 && !isCreating && (
              <div
                className="profile-card-item add-new"
                onClick={() => setIsCreating(true)}
              >
                <div className="profile-avatar-circle dashed">
                  <Plus size={28} />
                </div>
                <span className="profile-name-label">Add Profile</span>
              </div>
            )}
          </div>
        )}

        {isCreating && (
          <form className="create-profile-form" onSubmit={handleCreateProfile}>
            <h4>Create Viewer Profile</h4>
            <input
              type="text"
              className="input-text-dark"
              placeholder="Profile Name (e.g. Cinema Room, Family)"
              value={newProfileName}
              onChange={e => setNewProfileName(e.target.value)}
              autoFocus
              maxLength={24}
              required
            />

            <div className="color-picker-row">
              <span className="text-xs text-dim">Avatar Glow Color:</span>
              <div className="colors-list">
                {AVATAR_COLORS.map(c => (
                  <button
                    type="button"
                    key={c}
                    className={`color-dot-btn ${selectedColor === c ? 'active' : ''}`}
                    style={{ backgroundColor: c }}
                    onClick={() => setSelectedColor(c)}
                  />
                ))}
              </div>
            </div>

            <div className="form-actions-row">
              <button type="submit" className="btn-primary btn-sm">Save Profile</button>
              <button type="button" className="btn-secondary btn-sm" onClick={() => setIsCreating(false)}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

