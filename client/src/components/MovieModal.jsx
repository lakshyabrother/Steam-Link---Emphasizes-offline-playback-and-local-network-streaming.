import React, { useState, useEffect } from 'react';
import { getApiUrl } from '../utils/api.js';
import {
  X, Play, Heart, Clock, HardDrive, Subtitles, Image as ImageIcon,
  RotateCcw, Check, AlertCircle, FolderMinus, Trash2, Sparkles,
  RefreshCw, Search, CheckCircle2, ChevronRight, Layers, Tag
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
  const [currentMovie, setCurrentMovie] = useState(movie);
  const [recommendations, setRecommendations] = useState([]);

  // Poster & Backdrop custom replace state
  const [showPosterInput, setShowPosterInput] = useState(false);
  const [customPosterUrl, setCustomPosterUrl] = useState('');
  const [showBackdropInput, setShowBackdropInput] = useState(false);
  const [customBackdropUrl, setCustomBackdropUrl] = useState('');
  const [artworkSaving, setArtworkSaving] = useState(false);
  const [artworkMsg, setArtworkMsg] = useState({ type: '', text: '' });
  const [imageKey, setImageKey] = useState(Date.now());

  // TMDB Match Modal State
  const [showTmdbModal, setShowTmdbModal] = useState(false);
  const [tmdbQuery, setTmdbQuery] = useState('');
  const [tmdbYear, setTmdbYear] = useState('');
  const [tmdbCandidates, setTmdbCandidates] = useState([]);
  const [tmdbSearching, setTmdbSearching] = useState(false);
  const [tmdbApplying, setTmdbApplying] = useState(false);
  const [tmdbError, setTmdbError] = useState('');

  // Refresh metadata state
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    setCurrentMovie(movie);
    if (movie) {
      setTmdbQuery(movie.clean_title || '');
      setTmdbYear(movie.year || '');
    }
  }, [movie]);

  useEffect(() => {
    if (currentMovie?.id && authFetch) {
      authFetch(`/api/movies/recommendations/${currentMovie.id}`)
        .then(res => res.json())
        .then(data => {
          if (data.recommendations) setRecommendations(data.recommendations);
        })
        .catch(() => {});
    }
  }, [currentMovie?.id]);

  if (!currentMovie) return null;

  const hasSubtitles = currentMovie.subtitles && currentMovie.subtitles.length > 0;
  const hasProgress = currentMovie.progress_seconds && currentMovie.progress_seconds > 15;

  // Search TMDB Candidates
  const handleSearchTmdb = async (e) => {
    if (e) e.preventDefault();
    if (!tmdbQuery.trim() || !authFetch) return;

    setTmdbSearching(true);
    setTmdbError('');

    try {
      const q = encodeURIComponent(tmdbQuery.trim());
      const yr = tmdbYear ? `&year=${encodeURIComponent(tmdbYear.trim())}` : '';
      const res = await authFetch(`/api/movies/${currentMovie.id}/tmdb-search?q=${q}${yr}`);
      const data = await res.json();

      if (data.error) {
        setTmdbError(data.error);
        setTmdbCandidates([]);
      } else {
        setTmdbCandidates(data.candidates || []);
      }
    } catch (err) {
      setTmdbError('Network error searching TMDB');
    } finally {
      setTmdbSearching(false);
    }
  };

  // Apply selected TMDB match
  const handleApplyMatch = async (candidate) => {
    setTmdbApplying(true);
    setTmdbError('');

    try {
      const res = await authFetch(`/api/movies/${currentMovie.id}/tmdb-match`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tmdbId: candidate.id })
      });
      const data = await res.json();

      if (!res.ok) {
        setTmdbError(data.error || 'Failed to apply TMDB match');
      } else {
        setCurrentMovie(prev => ({
          ...prev,
          clean_title: candidate.title,
          year: candidate.year,
          description: candidate.overview || prev.description,
          tmdb_id: candidate.id,
          match_status: 'manual'
        }));
        setImageKey(Date.now());
        setShowTmdbModal(false);
        setArtworkMsg({ type: 'success', text: `Matched to "${candidate.title}" (${candidate.year})!` });
        if (onPosterUpdated) onPosterUpdated(currentMovie.id);
      }
    } catch (err) {
      setTmdbError('Network error applying TMDB match');
    } finally {
      setTmdbApplying(false);
    }
  };

  // One-click Refresh Metadata from TMDB
  const handleRefreshMetadata = async () => {
    setIsRefreshing(true);
    setArtworkMsg({ type: '', text: '' });

    try {
      const res = await authFetch(`/api/movies/${currentMovie.id}/refresh-metadata`, { method: 'POST' });
      const data = await res.json();

      if (data.result?.success) {
        setCurrentMovie(prev => ({
          ...prev,
          clean_title: data.result.title || prev.clean_title,
          year: data.result.year || prev.year,
          match_status: 'matched'
        }));
        setImageKey(Date.now());
        setArtworkMsg({ type: 'success', text: 'Metadata and artwork refreshed from TMDB!' });
        if (onPosterUpdated) onPosterUpdated(currentMovie.id);
      } else {
        setArtworkMsg({
          type: 'error',
          text: data.result?.reason === 'no_api_key' ? 'No TMDB API key configured in Dashboard' : 'No confident match found. Use "Match on TMDB" to pick manually.'
        });
      }
    } catch (err) {
      setArtworkMsg({ type: 'error', text: 'Network error refreshing metadata' });
    } finally {
      setIsRefreshing(false);
    }
  };

  // Replace Poster
  const handleSavePoster = async (e) => {
    e.preventDefault();
    if (!customPosterUrl.trim() || !authFetch) return;

    setArtworkSaving(true);
    setArtworkMsg({ type: '', text: '' });

    try {
      const res = await authFetch(`/api/movies/${currentMovie.id}/poster`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ posterUrl: customPosterUrl.trim() })
      });
      const data = await res.json();
      if (!res.ok) {
        setArtworkMsg({ type: 'error', text: data.error || 'Failed to update poster' });
      } else {
        setArtworkMsg({ type: 'success', text: 'Poster updated successfully!' });
        setImageKey(Date.now());
        setShowPosterInput(false);
        setCustomPosterUrl('');
        if (onPosterUpdated) onPosterUpdated(currentMovie.id);
      }
    } catch (err) {
      setArtworkMsg({ type: 'error', text: 'Network error updating poster' });
    } finally {
      setArtworkSaving(false);
    }
  };

  // Replace Backdrop
  const handleSaveBackdrop = async (e) => {
    e.preventDefault();
    if (!customBackdropUrl.trim() || !authFetch) return;

    setArtworkSaving(true);
    setArtworkMsg({ type: '', text: '' });

    try {
      const res = await authFetch(`/api/movies/${currentMovie.id}/backdrop`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ backdropUrl: customBackdropUrl.trim() })
      });
      const data = await res.json();
      if (!res.ok) {
        setArtworkMsg({ type: 'error', text: data.error || 'Failed to update backdrop' });
      } else {
        setArtworkMsg({ type: 'success', text: 'Backdrop updated successfully!' });
        setImageKey(Date.now());
        setShowBackdropInput(false);
        setCustomBackdropUrl('');
        if (onPosterUpdated) onPosterUpdated(currentMovie.id);
      }
    } catch (err) {
      setArtworkMsg({ type: 'error', text: 'Network error updating backdrop' });
    } finally {
      setArtworkSaving(false);
    }
  };

  return (
    <div className="movie-modal-backdrop" onClick={onClose}>
      <div className="movie-modal-box" onClick={e => e.stopPropagation()}>

        {/* 16:9 Widescreen Backdrop Banner */}
        <div className="movie-modal-top-banner">
          <img
            src={getApiUrl(`/api/movies/${currentMovie.id}/backdrop?k=${imageKey}`)}
            alt={currentMovie.clean_title}
            className="movie-modal-backdrop-img"
            loading="lazy"
          />
          <div className="movie-modal-banner-gradient" />
          <button className="movie-modal-close-btn" onClick={onClose} title="Close Details">
            <X size={18} />
          </button>
        </div>

        {/* Modal Main Body */}
        <div className="movie-modal-body">
          {/* Left Column: 2:3 Movie Poster + Artwork Actions */}
          <div className="movie-modal-poster-col">
            <div className="movie-modal-poster">
              <img
                src={getApiUrl(`/api/movies/${currentMovie.id}/poster?k=${imageKey}`)}
                alt={currentMovie.clean_title}
                key={imageKey}
                loading="lazy"
              />
            </div>

            {authFetch && (
              <div className="artwork-tools-bar">
                <button
                  className="btn-change-poster"
                  onClick={() => {
                    setShowTmdbModal(true);
                    handleSearchTmdb();
                  }}
                  title="Search & Match TMDB Artwork & Metadata"
                >
                  <Sparkles size={13} className="text-cyan" />
                  <span>Match on TMDB</span>
                </button>

                <button
                  className="btn-change-poster"
                  onClick={handleRefreshMetadata}
                  disabled={isRefreshing}
                  title="Auto-refresh metadata from TMDB"
                >
                  <RefreshCw size={13} className={isRefreshing ? 'rescan-spinning' : ''} />
                  <span>{isRefreshing ? 'Refreshing...' : 'Auto Refresh'}</span>
                </button>

                <button
                  className="btn-change-poster"
                  onClick={() => {
                    setShowPosterInput(!showPosterInput);
                    setShowBackdropInput(false);
                  }}
                  title="Paste custom poster image URL or file path"
                >
                  <ImageIcon size={13} />
                  <span>{showPosterInput ? 'Cancel' : 'Change Poster'}</span>
                </button>

                <button
                  className="btn-change-poster"
                  onClick={() => {
                    setShowBackdropInput(!showBackdropInput);
                    setShowPosterInput(false);
                  }}
                  title="Paste custom backdrop image URL or file path"
                >
                  <Layers size={13} />
                  <span>{showBackdropInput ? 'Cancel' : 'Change Backdrop'}</span>
                </button>
              </div>
            )}

            {/* Poster URL Popover Input */}
            {showPosterInput && (
              <form onSubmit={handleSavePoster} className="poster-input-popover">
                <input
                  type="text"
                  placeholder="Paste poster image URL or file path..."
                  value={customPosterUrl}
                  onChange={e => setCustomPosterUrl(e.target.value)}
                  autoFocus
                  required
                />
                <button type="submit" className="btn-primary-sm" disabled={artworkSaving}>
                  {artworkSaving ? 'Saving...' : 'Apply Poster'}
                </button>
              </form>
            )}

            {/* Backdrop URL Popover Input */}
            {showBackdropInput && (
              <form onSubmit={handleSaveBackdrop} className="poster-input-popover">
                <input
                  type="text"
                  placeholder="Paste backdrop image URL or file path..."
                  value={customBackdropUrl}
                  onChange={e => setCustomBackdropUrl(e.target.value)}
                  autoFocus
                  required
                />
                <button type="submit" className="btn-primary-sm" disabled={artworkSaving}>
                  {artworkSaving ? 'Saving...' : 'Apply Backdrop'}
                </button>
              </form>
            )}

            {artworkMsg.text && (
              <div className={`poster-msg-banner ${artworkMsg.type}`}>
                {artworkMsg.type === 'success' ? <Check size={12} /> : <AlertCircle size={12} />}
                <span>{artworkMsg.text}</span>
              </div>
            )}
          </div>

          {/* Right Column: Title, Metadata, Actions, File Specs */}
          <div className="movie-modal-info">
            {/* Badges */}
            <div className="movie-modal-badges">
              {currentMovie.resolution && (
                <span className="badge-studio">{currentMovie.resolution}</span>
              )}
              {currentMovie.genre && (
                <span className="badge-studio-cyan">{currentMovie.genre}</span>
              )}
              {currentMovie.year && (
                <span className="badge-studio-dim">{currentMovie.year}</span>
              )}
              {currentMovie.tmdb_id && (
                <span className="badge-studio-info" title="Official TMDB Metadata Match">
                  <Tag size={11} />
                  TMDB #{currentMovie.tmdb_id}
                </span>
              )}
              {hasSubtitles && (
                <span className="badge-studio-info">
                  <Subtitles size={11} />
                  CC
                </span>
              )}
            </div>

            <h2 className="movie-modal-title">{currentMovie.clean_title}</h2>

            <div className="movie-modal-meta-row">
              <span className="meta-tag">
                <Clock size={13} />
                {formatDuration(currentMovie.duration)}
              </span>
              <span className="meta-tag">
                <HardDrive size={13} />
                {formatFileSize(currentMovie.file_size)}
              </span>
              {currentMovie.codec && <span className="meta-tag">{currentMovie.codec}</span>}
            </div>

            <p className="movie-modal-description">
              {currentMovie.description ||
                'High-bitrate personal streaming directly from host workstation. Full dynamic HTTP range seeking with multi-track audio and subtitle support.'}
            </p>

            {/* Actions */}
            <div className="movie-modal-actions">
              <button
                className="btn-primary"
                onClick={() => onPlay(currentMovie)}
              >
                <Play size={17} fill="#ffffff" strokeWidth={0} />
                <span>{hasProgress ? 'Resume Playback' : 'Play Movie'}</span>
              </button>

              {hasProgress && (
                <button
                  className="btn-secondary"
                  onClick={() => onPlay({ ...currentMovie, progress_seconds: 0 })}
                  title="Play from 00:00"
                >
                  <RotateCcw size={15} />
                  <span>Start Over</span>
                </button>
              )}

              {onToggleFavorite && (
                <button
                  className={currentMovie.is_favorite ? 'btn-danger' : 'btn-secondary'}
                  onClick={() => onToggleFavorite(currentMovie.id)}
                >
                  <Heart size={16} fill={currentMovie.is_favorite ? 'currentColor' : 'none'} />
                  <span>{currentMovie.is_favorite ? 'Favorited' : 'Favorite'}</span>
                </button>
              )}

              {onRemoveMovie && (
                <button
                  className="btn-warning-outline"
                  onClick={() => {
                    onClose();
                    onRemoveMovie(currentMovie);
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
                    onDeleteFile(currentMovie);
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
                <span className="file-info-value" title={currentMovie.file_path} style={{ wordBreak: 'break-all' }}>
                  {currentMovie.file_path}
                </span>
              </div>
              <div className="file-info-row">
                <span className="file-info-label">Resolution</span>
                <span className="file-info-value accent-cyan">{currentMovie.resolution || 'Standard'}</span>
              </div>
              <div className="file-info-row">
                <span className="file-info-label">File Size</span>
                <span className="file-info-value">{formatFileSize(currentMovie.file_size)}</span>
              </div>
              <div className="file-info-row">
                <span className="file-info-label">Codec / Container</span>
                <span className="file-info-value">{currentMovie.codec || 'H264'} / {currentMovie.container || 'MP4'}</span>
              </div>
              <div className="file-info-row">
                <span className="file-info-label">Subtitles</span>
                <span className="file-info-value">
                  {hasSubtitles ? `${currentMovie.subtitles.length} track(s) available` : 'None embedded'}
                </span>
              </div>
            </div>

            {/* TMDB Attribution Footer */}
            <div className="tmdb-attribution-note">
              <span>Film metadata & high-resolution artwork powered by The Movie Database (TMDB).</span>
            </div>
          </div>
        </div>

        {/* TMDB Interactive Search & Correct Popover Modal */}
        {showTmdbModal && (
          <div className="tmdb-search-popover-overlay" onClick={() => setShowTmdbModal(false)}>
            <div className="tmdb-search-popover-window" onClick={e => e.stopPropagation()}>
              <div className="tmdb-popover-header">
                <div className="tmdb-title-pill">
                  <Sparkles size={16} className="text-cyan" />
                  <span>SEARCH & MATCH ON TMDB</span>
                </div>
                <button className="modal-close-btn" onClick={() => setShowTmdbModal(false)}>
                  <X size={18} />
                </button>
              </div>

              <form className="tmdb-search-form" onSubmit={handleSearchTmdb}>
                <input
                  type="text"
                  className="input-text-dark"
                  placeholder="Movie title (e.g. Annabelle Creation, Inception)..."
                  value={tmdbQuery}
                  onChange={e => setTmdbQuery(e.target.value)}
                  autoFocus
                />
                <input
                  type="text"
                  className="input-text-dark"
                  placeholder="Year (optional)"
                  style={{ width: '120px' }}
                  value={tmdbYear}
                  onChange={e => setTmdbYear(e.target.value)}
                  maxLength={4}
                />
                <button type="submit" className="btn-primary" disabled={tmdbSearching}>
                  <Search size={15} />
                  <span>{tmdbSearching ? 'Searching...' : 'Search'}</span>
                </button>
              </form>

              {tmdbError && (
                <div className="profiles-error-banner" style={{ margin: '14px 0' }}>{tmdbError}</div>
              )}

              <div className="tmdb-results-list">
                {tmdbSearching ? (
                  <div className="loading-state-3d" style={{ padding: '30px' }}>
                    <div className="loading-pulse-ring" />
                    <span>Searching official TMDB database...</span>
                  </div>
                ) : tmdbCandidates.length > 0 ? (
                  tmdbCandidates.map(candidate => (
                    <div key={candidate.id} className="tmdb-candidate-card">
                      <div className="candidate-poster-thumb">
                        {candidate.poster_url ? (
                          <img src={candidate.poster_url} alt={candidate.title} />
                        ) : (
                          <div className="thumb-placeholder"><Film size={20} /></div>
                        )}
                      </div>

                      <div className="candidate-info">
                        <div className="candidate-title-row">
                          <h4>{candidate.title}</h4>
                          {candidate.year && <span className="candidate-year">({candidate.year})</span>}
                          <span className={`confidence-pill ${candidate.confidence_score >= 75 ? 'high' : 'medium'}`}>
                            {candidate.confidence_score}% Match
                          </span>
                        </div>
                        <p className="candidate-overview">
                          {candidate.overview ? candidate.overview.slice(0, 160) + '...' : 'No overview available.'}
                        </p>
                      </div>

                      <button
                        className="btn-primary btn-sm candidate-select-btn"
                        onClick={() => handleApplyMatch(candidate)}
                        disabled={tmdbApplying}
                      >
                        <Check size={14} />
                        <span>{tmdbApplying ? 'Applying...' : 'Select'}</span>
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="tmdb-no-results">
                    <p>Enter movie title and press <strong>Search</strong> to query TMDB.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
