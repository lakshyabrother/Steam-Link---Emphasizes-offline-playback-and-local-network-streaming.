import React, { useState, useEffect } from 'react';
import { Film, RefreshCw, AlertTriangle } from 'lucide-react';

export default function ObsidianLoader({ message = 'Loading StreamLink 2.0 Cinema...', onRetry }) {
  const [showRetry, setShowRetry] = useState(false);

  useEffect(() => {
    // If loading takes longer than 8 seconds, offer retry action to prevent indefinite wait
    const timer = setTimeout(() => {
      setShowRetry(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="obsidian-loading-container" role="status" aria-live="polite">
      {/* Ambient background particles and glow */}
      <div className="obsidian-ambient-glow" />

      <div className="obsidian-loader-core">
        {/* Animated StreamLink Cinematic Emblem */}
        <div className="obsidian-emblem-wrapper">
          <div className="obsidian-pulse-ring outer" />
          <div className="obsidian-pulse-ring inner" />
          <div className="obsidian-emblem-badge">
            <Film size={34} className="obsidian-film-icon" />
          </div>
        </div>

        {/* Brand Label */}
        <div className="obsidian-loader-brand">
          <span className="brand-title">
            Stream<span className="brand-lavender">Link</span>
            <span className="brand-version-pill">2.0</span>
          </span>
          <span className="brand-subtitle">OBSIDIAN CINEMA</span>
        </div>

        {/* Status text */}
        <p className="obsidian-loader-status">{message}</p>

        {/* Elegant loading track */}
        <div className="obsidian-progress-track">
          <div className="obsidian-progress-shimmer" />
        </div>

        {/* Fallback & Retry Button if connection is delayed */}
        {showRetry && (
          <div className="obsidian-retry-prompt">
            <span className="retry-hint">
              <AlertTriangle size={14} className="text-warning" />
              Taking longer than expected?
            </span>
            <button
              className="btn-secondary btn-sm"
              onClick={() => {
                if (onRetry) onRetry();
                else window.location.reload();
              }}
            >
              <RefreshCw size={13} />
              <span>Retry Connection</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

