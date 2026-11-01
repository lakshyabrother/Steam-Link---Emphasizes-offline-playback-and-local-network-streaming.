import React, { useRef, useState } from 'react';
import { Play, Info, Sparkles, Clock, HardDrive } from 'lucide-react';
import { formatDuration } from './MovieCard';
import { getApiUrl } from '../utils/api.js';

export default function HeroSection({ movie, onPlay, onDetails }) {
  const heroRef = useRef(null);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  if (!movie) return null;

  const handleMouseMove = (e) => {
    if (!heroRef.current || !window.matchMedia('(pointer: fine)').matches) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    // Subtle gentle parallax (max 12px)
    setParallaxOffset({
      x: x * 12,
      y: y * 8
    });
  };

  const handleMouseLeave = () => {
    setParallaxOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={heroRef}
      className="hero-section-3d"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Layer 1: Ambient Backdrop with gentle parallax */}
      <div
        className="hero-backdrop-layer"
        style={{
          transform: `translate3d(${parallaxOffset.x * -1}px, ${parallaxOffset.y * -1}px, 0) scale(1.05)`
        }}
      >
        <img
          src={getApiUrl(`/api/movies/${movie.id}/backdrop`)}
          alt={movie.clean_title}
          className="hero-bg-image"
        />
        <div className="hero-gradient-overlay" />
      </div>

      {/* Layer 2: Floating Light Accent */}
      <div
        className="hero-accent-light"
        style={{
          transform: `translate3d(${parallaxOffset.x * 1.5}px, ${parallaxOffset.y * 1.5}px, 0)`
        }}
      />

      {/* Layer 3: Foreground Content */}
      <div
        className="hero-content-layer"
        style={{
          transform: `translate3d(${parallaxOffset.x * 0.5}px, ${parallaxOffset.y * 0.5}px, 0)`
        }}
      >
        <div className="hero-badge-row">
          <span className="hero-badge-pill">
            <Sparkles size={13} color="var(--primary)" />
            <span>FEATURED STREAM</span>
          </span>
          {movie.resolution && (
            <span className="hero-badge-quality">{movie.resolution} ULTRA HD</span>
          )}
          {movie.year && (
            <span className="hero-badge-year">{movie.year}</span>
          )}
          {movie.duration > 0 && (
            <span className="hero-badge-duration">
              <Clock size={12} />
              {formatDuration(movie.duration)}
            </span>
          )}
        </div>

        <h1 className="hero-title">{movie.clean_title}</h1>

        <p className="hero-description">
          {movie.description ||
            `Direct high-bitrate streaming from your host Windows workstation. Multi-channel audio, dynamic range seeking, and zero cloud compression.`}
        </p>

        <div className="hero-actions-row">
          <button className="hero-btn-play" onClick={() => onPlay(movie)}>
            <Play size={18} fill="#ffffff" />
            <span>Watch Now</span>
          </button>

          <button className="hero-btn-details" onClick={() => onDetails(movie)}>
            <Info size={18} />
            <span>More Details</span>
          </button>
        </div>
      </div>
    </div>
  );
}

