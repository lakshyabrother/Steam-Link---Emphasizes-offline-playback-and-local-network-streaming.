import React, { useState, useRef, useEffect } from 'react';
import { getApiUrl } from '../utils/api.js';
import { formatDisplayTitle } from '../utils/formatTitle.js';
import {
  Play, Heart, Clock, HardDrive, MoreVertical,
  Trash2, FolderMinus, Info, Image as ImageIcon, CheckSquare, Square
} from 'lucide-react';

export function formatDuration(seconds) {
  if (!seconds || seconds <= 0) return 'Unknown';
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  if (hrs > 0) return `${hrs}h ${mins}m`;
  return `${mins}m`;
}

export function formatFileSize(bytes) {
  if (!bytes || bytes <= 0) return '0 MB';
  const gb = bytes / (1024 * 1024 * 1024);
  if (gb >= 1) return `${gb.toFixed(2)} GB`;
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(0)} MB`;
}

export default function MovieCard({
  movie,
  onSelect,
  onToggleFavorite,
  onPlay,
  onChangePoster,
  onRemoveMovie,
  onDeleteFile,
  viewMode = 'grid',
  isSelectMode = false,
  isSelected = false,
  onToggleSelect = null
}) {
  const cardRef = useRef(null);
  const menuRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [imgError, setImgError] = useState(false);
  const displayTitle = formatDisplayTitle(movie.clean_title);

  // Close three-dot menu when clicking outside
  useEffect(() => {
    if (!showMenu) return;
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMenu]);

  const percentWatched = movie.duration > 0 && movie.progress_seconds > 0
    ? Math.min(100, Math.round((movie.progress_seconds / movie.duration) * 100))
    : (movie.watched_duration > 0 && movie.progress_seconds > 0
      ? Math.min(100, Math.round((movie.progress_seconds / movie.watched_duration) * 100))
      : 0);

  // Subtle 3D Tilt calculation based on mouse cursor position
  const handleMouseMove = (e) => {
    if (!cardRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches || isSelectMode) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tiltX = (y - 0.5) * -8;
    const tiltY = (x - 0.5) * 8;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleCardClick = (e) => {
    if (isSelectMode) {
      if (onToggleSelect) onToggleSelect(movie.id);
    } else {
      if (onSelect) onSelect(movie);
    }
  };

  // Compact List View Mode
  if (viewMode === 'list') {
    return (
      <div
        className={`movie-list-item ${isSelected ? 'selected' : ''}`}
        onClick={handleCardClick}
      >
        {isSelectMode && (
          <button
            className="select-checkbox-btn"
            onClick={(e) => {
              e.stopPropagation();
              if (onToggleSelect) onToggleSelect(movie.id);
            }}
          >
            {isSelected ? (
              <CheckSquare size={18} className="checkbox-icon checked" />
            ) : (
              <Square size={18} className="checkbox-icon" />
            )}
          </button>
        )}

        <div className="movie-list-thumb">
          <img
            src={getApiUrl(imgError ? `/api/movies/${movie.id}/poster?fallback=1` : `/api/movies/${movie.id}/poster`)}
            alt={displayTitle}
            onError={() => setImgError(true)}
            loading="lazy"
          />
          {!isSelectMode && onPlay && (
            <button
              className="list-play-overlay"
              onClick={(e) => {
                e.stopPropagation();
                onPlay(movie);
              }}
              title="Play Movie"
            >
              <Play size={16} fill="#ffffff" />
            </button>
          )}
        </div>

        <div className="movie-list-info">
          <div className="movie-list-title-row">
            <h4 className="movie-list-title" title={displayTitle}>{displayTitle}</h4>
            {movie.resolution && <span className="badge-studio">{movie.resolution}</span>}
          </div>

          <div className="movie-list-meta">
            {movie.year && <span className="meta-tag">{movie.year}</span>}
            <span className="meta-tag"><Clock size={12} /> {formatDuration(movie.duration)}</span>
            <span className="meta-tag"><HardDrive size={12} /> {formatFileSize(movie.file_size)}</span>
            {movie.codec && <span className="meta-tag">{movie.codec}</span>}
          </div>
        </div>

        <div className="movie-list-actions">
          {onToggleFavorite && (
            <button
              className={`fav-btn-clean ${movie.is_favorite ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(movie.id);
              }}
              title={movie.is_favorite ? 'Remove Favorite' : 'Add to Favorites'}
            >
              <Heart size={16} fill={movie.is_favorite ? 'currentColor' : 'none'} />
            </button>
          )}

          {!isSelectMode && onPlay && (
            <button
              className="btn-primary-sm"
              onClick={(e) => {
                e.stopPropagation();
                onPlay(movie);
              }}
            >
              <Play size={13} fill="#ffffff" />
              <span>Watch</span>
            </button>
          )}

          {/* Management Three-Dot Dropdown */}
          <div className="card-menu-container" ref={menuRef}>
            <button
              className="card-menu-btn"
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu(!showMenu);
              }}
              title="Movie options"
            >
              <MoreVertical size={16} />
            </button>

            {showMenu && (
              <div className="card-menu-dropdown" onClick={(e) => e.stopPropagation()}>
                {onPlay && (
                  <button
                    className="card-menu-item"
                    onClick={() => {
                      setShowMenu(false);
                      onPlay(movie);
                    }}
                  >
                    <Play size={14} />
                    <span>Play Movie</span>
                  </button>
                )}

                {onSelect && (
                  <button
                    className="card-menu-item"
                    onClick={() => {
                      setShowMenu(false);
                      onSelect(movie);
                    }}
                  >
                    <Info size={14} />
                    <span>View Details</span>
                  </button>
                )}

                {onToggleFavorite && (
                  <button
                    className="card-menu-item"
                    onClick={() => {
                      setShowMenu(false);
                      onToggleFavorite(movie.id);
                    }}
                  >
                    <Heart size={14} fill={movie.is_favorite ? 'currentColor' : 'none'} />
                    <span>{movie.is_favorite ? 'Remove Favorite' : 'Add to Favorites'}</span>
                  </button>
                )}

                {onChangePoster && (
                  <button
                    className="card-menu-item"
                    onClick={() => {
                      setShowMenu(false);
                      onChangePoster(movie);
                    }}
                  >
                    <ImageIcon size={14} />
                    <span>Change Poster</span>
                  </button>
                )}

                <div className="card-menu-divider" />

                {onRemoveMovie && (
                  <button
                    className="card-menu-item text-warning"
                    onClick={() => {
                      setShowMenu(false);
                      onRemoveMovie(movie);
                    }}
                  >
                    <FolderMinus size={14} />
                    <span>Remove from Library</span>
                  </button>
                )}

                {onDeleteFile && (
                  <button
                    className="card-menu-item text-danger"
                    onClick={() => {
                      setShowMenu(false);
                      onDeleteFile(movie);
                    }}
                  >
                    <Trash2 size={14} />
                    <span>Delete Movie File</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Standard 2:3 Grid View Mode
  return (
    <div
      ref={cardRef}
      className={`movie-card-3d ${isHovered ? 'hovered' : ''} ${isSelected ? 'selected' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      style={{
        transform: isHovered && !isSelectMode
          ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-5px)`
          : 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)'
      }}
    >
      <div className="poster-wrapper-3d">
        <img
          src={getApiUrl(imgError ? `/api/movies/${movie.id}/poster?fallback=1` : `/api/movies/${movie.id}/poster`)}
          alt={displayTitle}
          className="poster-img-3d"
          onError={() => setImgError(true)}
          loading="lazy"
        />

        {/* Diagonal Glossy Glass Sheen */}
        <div className="poster-gloss-sheen" />

        {/* Subtle dark vignette */}
        <div className="poster-vignette" />

        {/* Multi-Select Checkbox overlay */}
        {isSelectMode ? (
          <div
            className="select-checkbox-overlay"
            onClick={(e) => {
              e.stopPropagation();
              if (onToggleSelect) onToggleSelect(movie.id);
            }}
          >
            {isSelected ? (
              <CheckSquare size={22} className="checkbox-icon checked" />
            ) : (
              <Square size={22} className="checkbox-icon" />
            )}
          </div>
        ) : (
          /* Hover play trigger */
          <div className="poster-overlay-3d">
            <button
              className="play-circle-3d"
              onClick={(e) => {
                if (onPlay) {
                  e.stopPropagation();
                  onPlay(movie);
                }
              }}
              title="Play Movie"
            >
              <Play size={22} fill="#ffffff" strokeWidth={0} />
            </button>
          </div>
        )}

        {/* Badges */}
        {movie.resolution && (
          <span className="badge-studio badge-top-left">{movie.resolution}</span>
        )}

        {movie.year && (
          <span className="badge-studio badge-top-right">{movie.year}</span>
        )}

        {/* Management Three-Dot Menu Button */}
        {!isSelectMode && (
          <div className="card-menu-container top-right-ctrl" ref={menuRef}>
            <button
              className="card-menu-btn"
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu(!showMenu);
              }}
              title="Movie options"
            >
              <MoreVertical size={16} />
            </button>

            {showMenu && (
              <div className="card-menu-dropdown" onClick={(e) => e.stopPropagation()}>
                {onPlay && (
                  <button
                    className="card-menu-item"
                    onClick={() => {
                      setShowMenu(false);
                      onPlay(movie);
                    }}
                  >
                    <Play size={14} />
                    <span>Play Movie</span>
                  </button>
                )}

                {onSelect && (
                  <button
                    className="card-menu-item"
                    onClick={() => {
                      setShowMenu(false);
                      onSelect(movie);
                    }}
                  >
                    <Info size={14} />
                    <span>View Details</span>
                  </button>
                )}

                {onToggleFavorite && (
                  <button
                    className="card-menu-item"
                    onClick={() => {
                      setShowMenu(false);
                      onToggleFavorite(movie.id);
                    }}
                  >
                    <Heart size={14} fill={movie.is_favorite ? 'currentColor' : 'none'} />
                    <span>{movie.is_favorite ? 'Remove Favorite' : 'Add to Favorites'}</span>
                  </button>
                )}

                {onChangePoster && (
                  <button
                    className="card-menu-item"
                    onClick={() => {
                      setShowMenu(false);
                      onChangePoster(movie);
                    }}
                  >
                    <ImageIcon size={14} />
                    <span>Change Poster</span>
                  </button>
                )}

                <div className="card-menu-divider" />

                {onRemoveMovie && (
                  <button
                    className="card-menu-item text-warning"
                    onClick={() => {
                      setShowMenu(false);
                      onRemoveMovie(movie);
                    }}
                  >
                    <FolderMinus size={14} />
                    <span>Remove from Library</span>
                  </button>
                )}

                {onDeleteFile && (
                  <button
                    className="card-menu-item text-danger"
                    onClick={() => {
                      setShowMenu(false);
                      onDeleteFile(movie);
                    }}
                  >
                    <Trash2 size={14} />
                    <span>Delete Movie File</span>
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* Favorite button */}
        {!isSelectMode && onToggleFavorite && (
          <button
            className={`fav-btn-3d ${movie.is_favorite ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(movie.id);
            }}
            title={movie.is_favorite ? 'Remove Favorite' : 'Add to Favorites'}
          >
            <Heart size={14} fill={movie.is_favorite ? 'currentColor' : 'none'} />
          </button>
        )}

        {/* Watch progress bar */}
        {percentWatched > 0 && (
          <div className="progress-bar-container-3d">
            <div className="progress-bar-fill-3d" style={{ width: `${percentWatched}%` }} />
          </div>
        )}
      </div>

      <div className="movie-info-3d">
        <h4 className="movie-title-3d" title={displayTitle}>
          {displayTitle}
        </h4>

        <div className="movie-meta-row-3d">
          <span className="meta-tag">
            <Clock size={11} />
            {formatDuration(movie.duration)}
          </span>
          <span className="meta-tag">
            <HardDrive size={11} />
            {formatFileSize(movie.file_size)}
          </span>
        </div>
      </div>
    </div>
  );
}
