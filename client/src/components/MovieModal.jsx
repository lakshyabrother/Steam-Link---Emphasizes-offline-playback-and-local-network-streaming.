import React, { useState, useEffect } from 'react';
import { getApiUrl } from '../utils/api.js';
import {
  X, Play, Heart, Clock, HardDrive, Subtitles, Image as ImageIcon,
  RotateCcw, Check, AlertCircle, FolderMinus, Trash2
} from 'lucide-react';
import { formatDuration, formatFileSize } from './MovieCard';

export default function MovieModal({
  movie,
  onClose,
  onPlay,
  onToggleFavorite,
  authFetch,
  onPosterUpdated,
  onRemoveMovie,
  onDeleteFile
}) {
  const [recommendations, setRecommendations] = useState([]);
  const [showPosterInput, setShowPosterInput] = useState(false);
  const [customPosterUrl, setCustomPosterUrl] = useState('');
  const [posterSaving, setPosterSaving] = useState(false);
  const [posterMsg, setPosterMsg] = useState({ type: '', text: '' });
  const [posterKey, setPosterKey] = useState(Date.now());

  useEffect(() => {
    if (movie?.id && authFetch) {
      authFetch(`/api/movies/recommendations/${movie.id}`)
        .then(res => res.json())
        .then(data => {
          if (data.recommendations) setRecommendations(data.recommendations);
        })
        .catch(() => {});
    }
  }, [movie?.id]);

  if (!movie) return null;

  const hasSubtitles = movie.subtitles && movie.subtitles.length > 0;
  const hasProgress = movie.progress_seconds && movie.progress_seconds > 15;

  const handleSavePoster = async (e) => {
    e.preventDefault();
    if (!customPosterUrl.trim() || !authFetch) return;

    setPosterSaving(true);
    setPosterMsg({ type: '', text: '' });

    try {
      const res = await authFetch(`/api/movies/${movie.id}/poster`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ posterUrl: customPosterUrl.trim() })
      });
      const data = await res.json();
      if (!res.ok) {
        setPosterMsg({ type: 'error', text: data.error || 'Failed to update poster' });
      } else {
        setPosterMsg({ type: 'success', text: 'Poster updated successfully!' });
        setPosterKey(Date.now());
        setShowPosterInput(false);
        setCustomPosterUrl('');
        if (onPosterUpdated) onPosterUpdated(movie.id);
      }
    } catch (err) {
      setPosterMsg({ type: 'error', text: 'Network error updating poster' });
    } finally {
      setPosterSaving(false);
    }
  };

  return (
    <div className="movie-modal-backdrop" onClick={onClose}>
      <div className="movie-modal-box" onClick={e => e.stopPropagation()}>

        {/* 16:9 Widescreen Backdrop Banner */}
        <div className="movie-modal-top-banner">
          <img
            src={getApiUrl(`/api/movies/${movie.id}/backdrop?k=${posterKey}`)}
            alt={movie.clean_title}
            className="movie-modal-backdrop-img"
          />
          <div className="movie-modal-banner-gradient" />
          <button className="movie-modal-close-btn" onClick={onClose} title="Close Details">
            <X size={18} />
          </button>
        </div>

        {/* Modal Main Body */}
        <div className="movie-modal-body">
          {/* Left Column: 2:3 Movie Poster + Change Poster Action */}
          <div className="movie-modal-poster-col">
            <div className="movie-modal-poster">
              <img
                src={getApiUrl(`/api/movies/${movie.id}/poster?k=${posterKey}`)}
                alt={movie.clean_title}
                key={posterKey}
              />
            </div>

            {authFetch && (
              <button
                className="btn-change-poster"
                onClick={() => setShowPosterInput(!showPosterInput)}
                title="Change or replace movie poster"
              >
                <ImageIcon size={13} />
                <span>{showPosterInput ? 'Cancel' : 'Change Poster'}</span>
              </button>
            )}

            {showPosterInput && (
              <form onSubmit={handleSavePoster} className="poster-input-popover">
                <input
                  type="text"
                  placeholder="Paste image URL..."
                  value={customPosterUrl}
                  onChange={e => setCustomPosterUrl(e.target.value)}
                  autoFocus
                  required
                />
                <button type="submit" className="btn-primary-sm" disabled={posterSaving}>
                  {posterSaving ? 'Saving...' : 'Apply'}
                </button>
              </form>
            )}

            {posterMsg.text && (
              <div className={`poster-msg-banner ${posterMsg.type}`}>
                {posterMsg.type === 'success' ? <Check size={12} /> : <AlertCircle size={12} />}
                <span>{posterMsg.text}</span>
              </div>
            )}
          </div>

          {/* Right Column: Title, Metadata, Actions, File Specs */}
          <div className="movie-modal-info">
            {/* Badges */}
            <div className="movie-modal-badges">
              {movie.resolution && (
                <span className="badge-studio">{movie.resolution}</span>
              )}
              {movie.genre && (
                <span className="badge-studio-cyan">{movie.genre}</span>
              )}
              {movie.year && (
                <span className="badge-studio-dim">{movie.year}</span>
              )}
              {hasSubtitles && (
                <span className="badge-studio-info">
                  <Subtitles size={11} />
                  CC
                </span>
              )}
            </div>

            <h2 className="movie-modal-title">{movie.clean_title}</h2>

            <div className="movie-modal-meta-row">
              <span className="meta-tag">
                <Clock size={13} />
                {formatDuration(movie.duration)}
              </span>
              <span className="meta-tag">
                <HardDrive size={13} />
                {formatFileSize(movie.file_size)}
              </span>
              {movie.codec && <span className="meta-tag">{movie.codec}</span>}
            </div>

            <p className="movie-modal-description">
              {movie.description ||
                'High-bitrate personal streaming directly from host workstation. Full dynamic HTTP range seeking with multi-track audio and subtitle support.'}
            </p>

            {/* Actions */}
            <div className="movie-modal-actions">
              <button
                className="btn-primary"
                onClick={() => onPlay(movie)}
              >
                <Play size={17} fill="#ffffff" strokeWidth={0} />
                <span>{hasProgress ? 'Resume Playback' : 'Play Movie'}</span>
              </button>

              {hasProgress && (
                <button
                  className="btn-secondary"
                  onClick={() => onPlay({ ...movie, progress_seconds: 0 })}
                  title="Play from 00:00"
                >
                  <RotateCcw size={15} />
                  <span>Start Over</span>
                </button>
              )}

              {onToggleFavorite && (
                <button
                  className={movie.is_favorite ? 'btn-danger' : 'btn-secondary'}
                  onClick={() => onToggleFavorite(movie.id)}
                >
                  <Heart size={16} fill={movie.is_favorite ? 'currentColor' : 'none'} />
                  <span>{movie.is_favorite ? 'Favorited' : 'Favorite'}</span>
                </button>
              )}

              {onRemoveMovie && (
                <button
                  className="btn-warning-outline"
                  onClick={() => {
                    onClose();
                    onRemoveMovie(movie);
                  }}
                  title="Remove from StreamLink library (keeps original file)"
                >
                  <FolderMinus size={15} />
                  <span>Remove from Library</span>
                </button>
              )}

              {onDeleteFile && (
                <button
                  className="btn-danger-outline"
                  onClick={() => {
                    onClose();
                    onDeleteFile(movie);
                  }}
                  title="Permanently delete video file from disk"
                >
                  <Trash2 size={15} />
                  <span>Delete File</span>
                </button>
              )}
            </div>

            {/* Technical File & Codec Information Grid */}
            <div className="movie-modal-file-info">
              <div className="file-info-row" style={{ gridColumn: '1 / -1' }}>
                <span className="file-info-label">File Location</span>
                <span className="file-info-value" title={movie.file_path} style={{ wordBreak: 'break-all' }}>
                  {movie.file_path}
                </span>
              </div>
              <div className="file-info-row">
                <span className="file-info-label">Resolution</span>
                <span className="file-info-value accent-cyan">{movie.resolution || 'Standard'}</span>
              </div>
              <div className="file-info-row">
                <span className="file-info-label">File Size</span>
                <span className="file-info-value">{formatFileSize(movie.file_size)}</span>
              </div>
              <div className="file-info-row">
                <span className="file-info-label">Video Codec</span>
                <span className="file-info-value">{movie.codec || 'H264'}</span>
              </div>
              <div className="file-info-row">
                <span className="file-info-label">Duration</span>
                <span className="file-info-value">{formatDuration(movie.duration)}</span>
              </div>
              {hasSubtitles && (
                <div className="file-info-row" style={{ gridColumn: '1 / -1' }}>
                  <span className="file-info-label">Subtitles</span>
                  <span className="file-info-value">{movie.subtitles.map(s => s.language).join(', ')}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <div className="movie-modal-recommendations">
            <h4>Similar Movies</h4>
            <div className="recommendations-grid">
              {recommendations.slice(0, 5).map(rec => (
                <div
                  key={rec.id}
                  className="rec-card"
                  onClick={() => onPlay(rec)}
                >
                  <img
                    src={getApiUrl(`/api/movies/${rec.id}/poster`)}
                    alt={rec.clean_title}
                    className="rec-poster"
                    loading="lazy"
                  />
                  <div className="rec-info">
                    <div className="rec-title">{rec.clean_title}</div>
                    <div className="rec-meta">{rec.year || rec.resolution}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
