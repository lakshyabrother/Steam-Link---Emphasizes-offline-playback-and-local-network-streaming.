import React, { useState, useEffect } from 'react';
import { Sliders, Check, Zap, Eye, Monitor, Activity, X } from 'lucide-react';
import { performanceManager, QUALITY_LEVELS } from '../cine3d/PerformanceManager';

export default function QualitySettingsModal({ isOpen, onClose, ambientEnabled, onToggleAmbient }) {
  const [currentMode, setCurrentMode] = useState(performanceManager.mode);
  const [currentLevel, setCurrentLevel] = useState(performanceManager.currentLevel);
  const [fps, setFps] = useState(performanceManager.fps);

  useEffect(() => {
    return performanceManager.subscribe((level, mode, currFps) => {
      setCurrentLevel(level);
      setCurrentMode(mode);
      setFps(currFps);
    });
  }, []);

  const handleSelectMode = (mode) => {
    performanceManager.setMode(mode);
    setCurrentMode(mode);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop-3d" onClick={onClose}>
      <div className="quality-modal-window" onClick={e => e.stopPropagation()}>
        <div className="profiles-header">
          <div className="profiles-title-pill">
            <Sliders size={16} className="text-cyan" />
            <span>CINE-3D GRAPHICS & PERFORMANCE</span>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Live Hardware Stats */}
        <div className="quality-stats-banner">
          <div className="stat-box">
            <span className="stat-label">RENDER QUALITY</span>
            <span className="stat-val text-cyan">{currentLevel.toUpperCase()}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">REAL-TIME FPS</span>
            <span className="stat-val">{fps > 0 ? fps : 60} FPS</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">WEBGL 2.0</span>
            <span className="stat-val text-violet">{performanceManager.isWebGLAvailable ? 'ACTIVE' : 'FALLBACK'}</span>
          </div>
        </div>

        {/* Mode Selector */}
        <div className="quality-options-list">
          <div
            className={`quality-option-card ${currentMode === 'auto' ? 'active' : ''}`}
            onClick={() => handleSelectMode('auto')}
          >
            <div className="option-info">
              <div className="option-title-row">
                <Zap size={16} className="text-cyan" />
                <strong>Auto-Adaptive (Recommended)</strong>
              </div>
              <p>Dynamically scales particle count and geometry resolution based on your GPU and display refresh rate.</p>
            </div>
            {currentMode === 'auto' && <Check size={18} className="text-cyan" />}
          </div>

          <div
            className={`quality-option-card ${currentMode === QUALITY_LEVELS.HIGH ? 'active' : ''}`}
            onClick={() => handleSelectMode(QUALITY_LEVELS.HIGH)}
          >
            <div className="option-info">
              <div className="option-title-row">
                <Monitor size={16} className="text-violet" />
                <strong>High Fidelity</strong>
              </div>
              <p>Full 3D cinematic scene, high particle counts, procedural lighting, and soft shadows.</p>
            </div>
            {currentMode === QUALITY_LEVELS.HIGH && <Check size={18} className="text-cyan" />}
          </div>

          <div
            className={`quality-option-card ${currentMode === QUALITY_LEVELS.MEDIUM ? 'active' : ''}`}
            onClick={() => handleSelectMode(QUALITY_LEVELS.MEDIUM)}
          >
            <div className="option-info">
              <div className="option-title-row">
                <Activity size={16} className="text-muted" />
                <strong>Balanced</strong>
              </div>
              <p>Optimized for laptops and integrated graphics. Streamlined particles and lighting.</p>
            </div>
            {currentMode === QUALITY_LEVELS.MEDIUM && <Check size={18} className="text-cyan" />}
          </div>

          <div
            className={`quality-option-card ${currentMode === QUALITY_LEVELS.LOW ? 'active' : ''}`}
            onClick={() => handleSelectMode(QUALITY_LEVELS.LOW)}
          >
            <div className="option-info">
              <div className="option-title-row">
                <Eye size={16} className="text-dim" />
                <strong>Low / 2D Canvas Mode</strong>
              </div>
              <p>Disables heavy WebGL loops; uses lightweight CSS 3D perspective. Ideal for battery saving or older devices.</p>
            </div>
            {currentMode === QUALITY_LEVELS.LOW && <Check size={18} className="text-cyan" />}
          </div>
        </div>

        {/* Ambient Cinema Lighting Switch */}
        <div className="ambient-switch-row">
          <div className="ambient-switch-text">
            <strong>Ambient Cinema Glow</strong>
            <p className="text-xs text-dim">Projects subtle dynamic ambient color glows matching movie artwork.</p>
          </div>
          <button
            className={`toggle-switch-pill ${ambientEnabled ? 'on' : 'off'}`}
            onClick={onToggleAmbient}
          >
            <div className="toggle-handle" />
          </button>
        </div>

        <div className="modal-footer-actions">
          <button className="btn-primary btn-sm" onClick={onClose}>Done</button>
        </div>
      </div>
    </div>
  );
}
