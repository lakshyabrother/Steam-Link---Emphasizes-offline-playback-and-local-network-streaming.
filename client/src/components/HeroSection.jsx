import React, { useRef, useState, useEffect } from 'react';
import { Play, Info, Sparkles, Clock, HardDrive, Star, Flame, Tv, Volume2, Film } from 'lucide-react';
import { formatDuration } from './MovieCard';
import { getApiUrl } from '../utils/api.js';
import { getDominantArtworkColor } from '../utils/dominantColor.js';
import { formatDisplayTitle } from '../utils/formatTitle.js';

export default function HeroSection({ movie, onPlay, onDetails, onEnterCine3D, onToggleFavorite, isFavorite }) {
  const heroRef = useRef(null);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [ambientHue, setAmbientHue] = useState('#8B5CF6');
  const [cardTilt, setCardTilt] = useState({ x: -4, y: 12 });

  useEffect(() => {
    if (movie?.id) {
      const backdropUrl = getApiUrl(`/api/movies/${movie.id}/backdrop`);
      getDominantArtworkColor(backdropUrl).then(col => {
        if (col && col !== '#080B14') setAmbientHue(col);
      });
    }
  }, [movie?.id]);

  if (!movie) return null;

  const displayTitle = formatDisplayTitle(movie.clean_title);
  const safeRes = (movie.resolution || '1080P').toUpperCase();

  const handleMouseMove = (e) => {
    if (!heroRef.current || !window.matchMedia('(pointer: fine)').matches) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    // Gentle parallax for background
    setParallaxOffset({
      x: x * 10,
      y: y * 6
    });

    // 3D tilt tracking for showcase poster card
    setCardTilt({
      x: y * -10 - 3,
      y: x * 14 + 8
    });
  };

  const handleMouseLeave = () => {
    setParallaxOffset({ x: 0, y: 0 });
    setCardTilt({ x: -4, y: 12 });
  };

  return (
    <div
      ref={heroRef}
      className="hero-section-3d hero-genz"
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
          alt={displayTitle}
          className="hero-bg-image"
        />
        <div className="hero-gradient-overlay" />
      </div>

      {/* Layer 2: Floating Neon Light Accent */}
      <div
        className="hero-accent-light"
        style={{
          transform: `translate3d(${parallaxOffset.x * 1.5}px, ${parallaxOffset.y * 1.5}px, 0)`,
          background: `radial-gradient(circle, ${ambientHue}40 0%, ${ambientHue}15 45%, transparent 70%)`
        }}
      />

      {/* Layer 3: Foreground Two-Column Showcase Grid */}
      <div className="hero-content-layer hero-grid-layout">
        {/* Left Column: Hero Content & CTAs */}
        <div
          className="hero-content-left"
          style={{
            transform: `translate3d(${parallaxOffset.x * 0.4}px, ${parallaxOffset.y * 0.4}px, 0)`
          }}
        >
          <div className="hero-badge-row">
            <span className="hero-badge-pill-genz">
              <Flame size={13} className="flame-icon-pulse" />
              <span>#1 ON STREAMLINK</span>
            </span>
            <span className="hero-badge-quality-genz">
              <Sparkles size={11} />
              <span>{safeRes} ULTRA HD</span>
            </span>
            <span className="hero-badge-score-genz">
              <Star size={11} fill="#FACC15" color="#FACC15" />
              <span>9.8 SCORE</span>
            </span>
            {movie.duration > 0 && (
              <span className="hero-badge-duration-genz">
                <Clock size={11} />
                <span>{formatDuration(movie.duration)}</span>
              </span>
            )}
            {movie.year && (
              <span className="hero-badge-year-genz">{movie.year}</span>
            )}
          </div>

          <h1 className="hero-title hero-title-genz" title={displayTitle}>
            {displayTitle}
          </h1>

          <div className="hero-meta-strip-genz">
            <span className="tech-pill">Direct Bitrate</span>
            <span className="tech-divider">•</span>
            <span className="tech-pill">{movie.codec || 'H.264 / HEVC'}</span>
            <span className="tech-divider">•</span>
            <span className="tech-pill">Zero Cloud Lag</span>
            <span className="tech-divider">•</span>
            <span className="tech-pill">Lossless Audio</span>
          </div>

          <p className="hero-description">
            {movie.description ||
              `Stream direct from your local Windows workstation in pure studio bitrate. Zero buffering, native hardware seeking, and full spatial audio reproduction.`}
          </p>

          <div className="hero-actions-row">
            <button className="hero-btn-play-genz" onClick={() => onPlay(movie)}>
              <Play size={18} fill="#ffffff" strokeWidth={0} />
              <span>Watch Now</span>
            </button>

            {onEnterCine3D && (
              <button className="hero-btn-cine3d-genz" onClick={onEnterCine3D}>
                <Sparkles size={16} className="text-cyan pulse-icon" />
                <span>Enter CINE-3D</span>
              </button>
            )}

            <button className="hero-btn-details-genz" onClick={() => onDetails(movie)}>
              <Info size={17} />
              <span>Details</span>
            </button>
          </div>
        </div>

        {/* Right Column: Floating 3D Showcase Poster Card */}
        <div
          className="hero-poster-showcase"
          style={{
            transform: `translate3d(${parallaxOffset.x * -0.6}px, ${parallaxOffset.y * -0.6}px, 0)`
          }}
        >
          <div
            className="hero-poster-card-3d"
            style={{
              transform: `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
              borderColor: `${ambientHue}55`
            }}
            onClick={() => onPlay(movie)}
            title="Click to stream immediately"
          >
            {/* Ambient Backlight Halo behind poster */}
            <div
              className="hero-poster-ambient-glow"
              style={{
                background: `radial-gradient(circle, ${ambientHue}70 0%, ${ambientHue}25 55%, transparent 75%)`
              }}
            />

            {/* Poster Image */}
            <img
              src={getApiUrl(`/api/movies/${movie.id}/poster`)}
              alt={displayTitle}
              className="hero-poster-img"
            />

            {/* Glossy Diagonal Reflection Sheen */}
            <div className="hero-poster-sheen" />

            {/* Top Floating Badges */}
            <div className="hero-poster-top-bar">
              <span className="hero-poster-pill-badge">
                <Star size={11} fill="#FACC15" color="#FACC15" />
                <span>9.8</span>
              </span>
              <span className="hero-poster-res-badge">{safeRes}</span>
            </div>

            {/* Center Quick-Play Button Overlay */}
            <div className="hero-poster-hover-overlay">
              <div className="hero-poster-play-glow">
                <Play size={24} fill="#ffffff" strokeWidth={0} />
              </div>
            </div>

            {/* Bottom Live Streaming Equalizer Bar */}
            <div className="hero-poster-footer">
              <div className="equalizer-waves">
                <span className="eq-bar eq-1" />
                <span className="eq-bar eq-2" />
                <span className="eq-bar eq-3" />
                <span className="eq-bar eq-4" />
              </div>
              <span className="live-stream-label">DIRECT MASTER</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
