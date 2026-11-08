import React, { useState, useEffect } from 'react';
import {
  Search, Filter, Play, Clock, Sparkles, FolderPlus, RefreshCw,
  Film, LayoutGrid, List, CheckCircle2, CheckSquare, Square,
  X, AlertTriangle, Trash2, FolderMinus, Image as ImageIcon,
  Check, AlertCircle, Info, ChevronDown
} from 'lucide-react';
import MovieCard, { formatDuration, formatFileSize } from '../components/MovieCard';

export default function LibraryPage({ onSelectMovie, onPlayMovie, authFetch, onOpenFolderPicker, onNavigateCine3D }) {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [resolutionFilter, setResolutionFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [watchedFilter, setWatchedFilter] = useState('all'); // 'all' | 'unwatched' | 'watched'
  const [sortBy, setSortBy] = useState('recent');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [loading, setLoading] = useState(true);
  const [isRescanning, setIsRescanning] = useState(false);

  // Multi-Select Mode State
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [selectedMovieIds, setSelectedMovieIds] = useState([]);

  // Dialog Modals State
  const [movieToRemove, setMovieToRemove] = useState(null);
  const [movieToDeleteFile, setMovieToDeleteFile] = useState(null);
  const [showBulkRemoveConfirm, setShowBulkRemoveConfirm] = useState(false);
  const [posterEditMovie, setPosterEditMovie] = useState(null);
  const [customPosterUrl, setCustomPosterUrl] = useState('');
  const [posterSaving, setPosterSaving] = useState(false);

  // Notification Toast State
  const [toast, setToast] = useState(null);
  const showToast = (text, type = 'success') => {
    setToast({ text, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  // Fetch movies from backend
  const fetchMovies = () => {
    setLoading(true);
    let url = `/api/movies?sort=${sortBy}`;
    if (search.trim()) url += `&q=${encodeURIComponent(search.trim())}`;
    if (resolutionFilter) url += `&resolution=${encodeURIComponent(resolutionFilter)}`;
    if (yearFilter) url += `&year=${encodeURIComponent(yearFilter)}`;
    if (genreFilter) url += `&genre=${encodeURIComponent(genreFilter)}`;

    authFetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.movies) setMovies(data.movies);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchMovies();
  }, [search, resolutionFilter, yearFilter, genreFilter, sortBy]);

  // Rescan library
  const handleRescan = async () => {
    setIsRescanning(true);
    try {
      const res = await authFetch('/api/admin/scan', { method: 'POST' });
      const data = await res.json();
      await fetchMovies();
      showToast(data.message || 'Library rescan complete!', 'success');
    } catch (e) {
      showToast('Error during library scan', 'error');
    }
    setIsRescanning(false);
  };

  // Toggle favorite
  const handleToggleFavorite = async (movieId) => {
    try {
      const res = await authFetch(`/api/user/favorites/${movieId}`, { method: 'POST' });
      const data = await res.json();
      setMovies(prev => prev.map(m => m.id === movieId ? { ...m, is_favorite: data.favorited ? 1 : 0 } : m));
    } catch (e) {}
  };

  // Filter movies by watched status in frontend
  const filteredMovies = movies.filter(movie => {
    if (watchedFilter === 'watched') {
      return (movie.progress_seconds && movie.duration && movie.progress_seconds / movie.duration >= 0.9) || movie.completed === 1;
    }
    if (watchedFilter === 'unwatched') {
      return !movie.progress_seconds || movie.progress_seconds < 15;
    }
    return true;
  });

  const availableYears = Array.from(new Set(movies.map(m => m.year).filter(Boolean))).sort().reverse();
  const totalBytes = filteredMovies.reduce((acc, m) => acc + (m.file_size || 0), 0);
  const hasActiveFilters = Boolean(search || resolutionFilter || yearFilter || watchedFilter !== 'all');

  const handleClearFilters = () => {
    setSearch('');
    setResolutionFilter('');
    setYearFilter('');
    setWatchedFilter('all');
  };

  // Multi-select helpers
  const handleToggleSelect = (movieId) => {
    setSelectedMovieIds(prev =>
      prev.includes(movieId) ? prev.filter(id => id !== movieId) : [...prev, movieId]
    );
  };

  const handleSelectAllVisible = () => {
    if (selectedMovieIds.length === filteredMovies.length) {
      setSelectedMovieIds([]);
    } else {
      setSelectedMovieIds(filteredMovies.map(m => m.id));
    }
  };

  // 1. Remove Single Movie from Library (preserves video file on computer)
  const confirmRemoveFromLibrary = async () => {
    if (!movieToRemove) return;
    try {
      const res = await authFetch(`/api/movies/${movieToRemove.id}/remove`, { method: 'POST' });
      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || 'Failed to remove movie', 'error');
      } else {
        setMovies(prev => prev.filter(m => m.id !== movieToRemove.id));
        setSelectedMovieIds(prev => prev.filter(id => id !== movieToRemove.id));
        showToast(`"${movieToRemove.clean_title}" removed from library (file preserved on PC)`, 'success');
      }
    } catch (e) {
      showToast('Network error removing movie', 'error');
    }
    setMovieToRemove(null);
  };

  // 2. Permanent Video File Deletion
  const confirmDeleteFile = async () => {
    if (!movieToDeleteFile) return;
    try {
      const res = await authFetch(`/api/movies/${movieToDeleteFile.id}/delete-file`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ confirmPermanent: true, confirmTitle: movieToDeleteFile.clean_title })
      });
      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || 'Failed to delete movie file', 'error');
      } else {
        setMovies(prev => prev.filter(m => m.id !== movieToDeleteFile.id));
        setSelectedMovieIds(prev => prev.filter(id => id !== movieToDeleteFile.id));
        showToast(`Permanently deleted "${movieToDeleteFile.clean_title}" from disk`, 'warn');
      }
    } catch (e) {
      showToast('Network error during file deletion', 'error');
    }
    setMovieToDeleteFile(null);
  };

  // 3. Bulk Remove from Library
  const confirmBulkRemove = async () => {
    if (selectedMovieIds.length === 0) return;
    try {
      const res = await authFetch('/api/movies/bulk/remove', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ movieIds: selectedMovieIds })
      });
      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || 'Failed to bulk remove movies', 'error');
      } else {
        setMovies(prev => prev.filter(m => !selectedMovieIds.includes(m.id)));
        showToast(`Removed ${data.removedCount} movies from library (files preserved)`, 'success');
        setSelectedMovieIds([]);
        setIsSelectMode(false);
      }
    } catch (e) {
      showToast('Network error during bulk removal', 'error');
    }
    setShowBulkRemoveConfirm(false);
  };

  // 4. Save Custom Poster
  const handleSavePoster = async (e) => {
    e.preventDefault();
    if (!posterEditMovie || !customPosterUrl.trim()) return;

    setPosterSaving(true);
    try {
      const res = await authFetch(`/api/movies/${posterEditMovie.id}/poster`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ posterUrl: customPosterUrl.trim() })
      });
      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || 'Failed to update poster', 'error');
      } else {
        showToast('Poster updated successfully!', 'success');
        setPosterEditMovie(null);
        setCustomPosterUrl('');
        fetchMovies();
      }
    } catch (err) {
      showToast('Network error saving poster', 'error');
    } finally {
      setPosterSaving(false);
    }
  };

  return (
    <div className="library-page-3d">
      {/* Toast Notification */}
      {toast && (
        <div className={`app-toast-banner ${toast.type}`}>
          {toast.type === 'success' && <CheckCircle2 size={16} />}
          {toast.type === 'warn' && <AlertTriangle size={16} />}
          {toast.type === 'error' && <AlertCircle size={16} />}
          <span>{toast.text}</span>
        </div>
      )}

      {/* Header */}
      <div className="page-header-row">
        <div className="page-header-info">
          <h1 className="page-header-title">Movie Library</h1>
          <p className="page-header-subtitle">
            {filteredMovies.length} movies available • Total size: {formatFileSize(totalBytes)}
          </p>
        </div>

        <div className="page-header-actions">
          {onNavigateCine3D && (
            <button className="btn-primary" onClick={onNavigateCine3D} title="Enter CINE-3D spatial cinema carousel">
              <Sparkles size={15} className="text-cyan pulse-icon" />
              <span>Launch CINE-3D</span>
            </button>
          )}

          {/* Multi-Select Toggle Button */}
          <button
            className={`btn-secondary ${isSelectMode ? 'active' : ''}`}
            onClick={() => {
              setIsSelectMode(!isSelectMode);
              if (isSelectMode) setSelectedMovieIds([]);
            }}
            title={isSelectMode ? 'Cancel Selection' : 'Manage Multiple Movies'}
          >
            <CheckSquare size={15} />
            <span>{isSelectMode ? 'Cancel' : 'Manage'}</span>
          </button>

          {/* Grid vs List View Mode Toggle */}
          <div className="view-mode-toggle">
            <button
              className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              <LayoutGrid size={16} />
            </button>
            <button
              className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              title="List View"
            >
              <List size={16} />
            </button>
          </div>

          {/* Rescan Button */}
          <button
            className={`btn-secondary ${isRescanning ? 'rescan-spinning' : ''}`}
            onClick={handleRescan}
            disabled={isRescanning}
            title="Scan movie folder for newly added or changed video files"
          >
            <RefreshCw size={15} />
            <span>{isRescanning ? 'Scanning...' : 'Rescan Library'}</span>
          </button>
        </div>
      </div>

      {/* Multi-Select Action Bar (shown when select mode active) */}
      {isSelectMode && (
        <div className="multi-select-toolbar">
          <div className="select-toolbar-left">
            <button className="select-all-btn" onClick={handleSelectAllVisible}>
              {selectedMovieIds.length === filteredMovies.length && filteredMovies.length > 0 ? (
                <CheckSquare size={18} className="checkbox-icon checked" />
              ) : (
                <Square size={18} className="checkbox-icon" />
              )}
              <span>Select All Visible ({filteredMovies.length})</span>
            </button>
            <span className="selected-count-badge">
              {selectedMovieIds.length} movie{selectedMovieIds.length !== 1 ? 's' : ''} selected
            </span>
          </div>

          <div className="select-toolbar-right">
            <button
              className="btn-danger-sm"
              disabled={selectedMovieIds.length === 0}
              onClick={() => setShowBulkRemoveConfirm(true)}
            >
              <FolderMinus size={14} />
              <span>Remove Selected ({selectedMovieIds.length})</span>
            </button>
            <button
              className="btn-secondary-sm"
              onClick={() => {
                setIsSelectMode(false);
                setSelectedMovieIds([]);
              }}
            >
              <span>Done</span>
            </button>
          </div>
        </div>
      )}

      {/* Compact Horizontal Filter and Search Toolbar */}
      <div className="library-toolbar">
        {/* Search Field */}
        <div className="toolbar-search-box">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search movie title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className="search-clear-btn" onClick={() => setSearch('')} title="Clear search">
              <X size={14} />
            </button>
          )}
        </div>

        {/* Filters Group */}
        <div className="toolbar-filters-group">
          {/* Genre Filter */}
          <div className="toolbar-select-wrapper">
            <select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}>
              <option value="">All Genres</option>
              <option value="Action & Adventure">Action & Adventure</option>
              <option value="Anime & Animation">Anime & Animation</option>
              <option value="Horror & Suspense">Horror & Suspense</option>
              <option value="Sci-Fi & Cyber">Sci-Fi & Cyber</option>
              <option value="Thriller & Mystery">Thriller & Mystery</option>
              <option value="Comedy">Comedy</option>
              <option value="Cinema & Drama">Cinema & Drama</option>
            </select>
          </div>

          {/* Resolution Filter */}
          <div className="toolbar-select-wrapper">
            <select value={resolutionFilter} onChange={(e) => setResolutionFilter(e.target.value)}>
              <option value="">All Resolutions</option>
              <option value="4K">4K Ultra HD</option>
              <option value="1080P">1080p Full HD</option>
              <option value="720P">720p HD</option>
            </select>
          </div>

          {/* Year Filter */}
          <div className="toolbar-select-wrapper">
            <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
              <option value="">All Years</option>
              {availableYears.map(yr => (
                <option key={yr} value={yr}>{yr}</option>
              ))}
            </select>
          </div>

          {/* Watched Status Filter */}
          <div className="toolbar-select-wrapper">
            <select value={watchedFilter} onChange={(e) => setWatchedFilter(e.target.value)}>
              <option value="all">All Status</option>
              <option value="unwatched">Unwatched</option>
              <option value="watched">Watched</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="toolbar-select-wrapper">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="recent">Recently Added</option>
              <option value="title">Title (A-Z)</option>
              <option value="year">Release Year</option>
              <option value="size">Largest File Size</option>
              <option value="duration">Longest Duration</option>
            </select>
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button className="btn-clear-filters" onClick={handleClearFilters} title="Reset all search and filters">
              <X size={13} />
              <span>Clear Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Movies Content */}
      {loading ? (
        <div className="loading-state-3d">
          <div className="loading-pulse-ring" />
          <span>Scanning & loading movies...</span>
        </div>
      ) : filteredMovies.length === 0 ? (
        <div className="empty-state-3d">
          <Film size={48} color="var(--text-dim)" style={{ marginBottom: '16px' }} />
          <h3>No Movies Found</h3>
          <p>
            {hasActiveFilters
              ? 'No movies match your active search or filter criteria. Try clearing filters to see all available movies.'
              : 'You have not scanned a movie folder yet. Select a folder on your Windows PC to automatically populate your library.'}
          </p>
          {hasActiveFilters ? (
            <button className="btn-secondary" onClick={handleClearFilters}>
              <X size={15} />
              <span>Clear Active Filters</span>
            </button>
          ) : (
            onOpenFolderPicker && (
              <button className="btn-primary" onClick={onOpenFolderPicker}>
                <FolderPlus size={16} />
                <span>Select Movie Folder</span>
              </button>
            )
          )}
        </div>
      ) : viewMode === 'list' ? (
        <div className="movie-list-container">
          {filteredMovies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onSelect={onSelectMovie}
              onPlay={onPlayMovie}
              onToggleFavorite={handleToggleFavorite}
              onChangePoster={(m) => {
                setPosterEditMovie(m);
                setCustomPosterUrl('');
              }}
              onRemoveMovie={(m) => setMovieToRemove(m)}
              onDeleteFile={(m) => setMovieToDeleteFile(m)}
              viewMode="list"
              isSelectMode={isSelectMode}
              isSelected={selectedMovieIds.includes(movie.id)}
              onToggleSelect={handleToggleSelect}
            />
          ))}
        </div>
      ) : (
        <div className="movie-grid-3d">
          {filteredMovies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onSelect={onSelectMovie}
              onPlay={onPlayMovie}
              onToggleFavorite={handleToggleFavorite}
              onChangePoster={(m) => {
                setPosterEditMovie(m);
                setCustomPosterUrl('');
              }}
              onRemoveMovie={(m) => setMovieToRemove(m)}
              onDeleteFile={(m) => setMovieToDeleteFile(m)}
              viewMode="grid"
              isSelectMode={isSelectMode}
              isSelected={selectedMovieIds.includes(movie.id)}
              onToggleSelect={handleToggleSelect}
            />
          ))}
        </div>
      )}

      {/* ── DIALOG 1: Remove from Library Confirmation Modal ── */}
      {movieToRemove && (
        <div className="dialog-backdrop" onClick={() => setMovieToRemove(null)}>
          <div className="dialog-card" onClick={e => e.stopPropagation()}>
            <div className="dialog-header">
              <div className="dialog-icon-wrapper icon-warning">
                <FolderMinus size={22} />
              </div>
              <div>
                <h3 className="dialog-title">Remove from Library?</h3>
                <span className="dialog-subtitle">{movieToRemove.clean_title}</span>
              </div>
            </div>

            <div className="dialog-body">
              <p>
                This movie will be removed from your StreamLink library, but your <strong>original video file will remain safe and untouched on your computer</strong>.
              </p>
              <div className="dialog-detail-box">
                <div className="detail-row">
                  <span>File Location:</span>
                  <code title={movieToRemove.file_path}>{movieToRemove.file_path}</code>
                </div>
              </div>
              <p className="dialog-note">
                StreamLink will remember this choice so the movie will not reappear when you rescan your library.
              </p>
            </div>

            <div className="dialog-actions">
              <button className="btn-secondary" onClick={() => setMovieToRemove(null)}>
                Cancel
              </button>
              <button className="btn-warning" onClick={confirmRemoveFromLibrary}>
                <FolderMinus size={15} />
                <span>Remove from Library</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── DIALOG 2: Permanent Video File Deletion Confirmation Modal ── */}
      {movieToDeleteFile && (
        <div className="dialog-backdrop" onClick={() => setMovieToDeleteFile(null)}>
          <div className="dialog-card card-danger-border" onClick={e => e.stopPropagation()}>
            <div className="dialog-header">
              <div className="dialog-icon-wrapper icon-danger">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h3 className="dialog-title text-danger">Permanently Delete Video File?</h3>
                <span className="dialog-subtitle">{movieToDeleteFile.clean_title}</span>
              </div>
            </div>

            <div className="dialog-body">
              <div className="danger-alert-box">
                <strong>WARNING: This action is permanent and cannot be undone!</strong>
                <p>The video file will be permanently deleted from your Windows hard drive.</p>
              </div>

              <div className="dialog-detail-box">
                <div className="detail-row">
                  <span>File Name:</span>
                  <code>{movieToDeleteFile.file_name}</code>
                </div>
                <div className="detail-row">
                  <span>File Path:</span>
                  <code title={movieToDeleteFile.file_path}>{movieToDeleteFile.file_path}</code>
                </div>
                <div className="detail-row">
                  <span>File Size:</span>
                  <code>{formatFileSize(movieToDeleteFile.file_size)}</code>
                </div>
              </div>
            </div>

            <div className="dialog-actions">
              <button className="btn-secondary" onClick={() => setMovieToDeleteFile(null)}>
                Cancel
              </button>
              <button className="btn-danger" onClick={confirmDeleteFile}>
                <Trash2 size={15} />
                <span>Permanently Delete File</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── DIALOG 3: Bulk Remove Confirmation Modal ── */}
      {showBulkRemoveConfirm && (
        <div className="dialog-backdrop" onClick={() => setShowBulkRemoveConfirm(false)}>
          <div className="dialog-card" onClick={e => e.stopPropagation()}>
            <div className="dialog-header">
              <div className="dialog-icon-wrapper icon-warning">
                <FolderMinus size={22} />
              </div>
              <div>
                <h3 className="dialog-title">Remove {selectedMovieIds.length} Movies from Library?</h3>
                <span className="dialog-subtitle">Original files remain untouched on computer</span>
              </div>
            </div>

            <div className="dialog-body">
              <p>
                All <strong>{selectedMovieIds.length} selected movies</strong> will be removed from your active StreamLink library.
              </p>
              <p className="dialog-note">
                Your original video files on your hard drive will <strong>not</strong> be deleted. StreamLink will keep them hidden so they will not reappear upon rescan.
              </p>
            </div>

            <div className="dialog-actions">
              <button className="btn-secondary" onClick={() => setShowBulkRemoveConfirm(false)}>
                Cancel
              </button>
              <button className="btn-warning" onClick={confirmBulkRemove}>
                <FolderMinus size={15} />
                <span>Remove {selectedMovieIds.length} Movies</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── DIALOG 4: Change Movie Poster Modal ── */}
      {posterEditMovie && (
        <div className="dialog-backdrop" onClick={() => setPosterEditMovie(null)}>
          <div className="dialog-card" onClick={e => e.stopPropagation()}>
            <div className="dialog-header">
              <div className="dialog-icon-wrapper icon-accent">
                <ImageIcon size={22} />
              </div>
              <div>
                <h3 className="dialog-title">Change Movie Poster</h3>
                <span className="dialog-subtitle">{posterEditMovie.clean_title}</span>
              </div>
            </div>

            <form onSubmit={handleSavePoster}>
              <div className="dialog-body">
                <p>Enter an image URL or a local image path on your PC (e.g. D:\Posters\cover.jpg):</p>
                <input
                  type="text"
                  className="dialog-input"
                  placeholder="https://image.tmdb.org/... or C:\path\poster.jpg"
                  value={customPosterUrl}
                  onChange={e => setCustomPosterUrl(e.target.value)}
                  autoFocus
                  required
                />
              </div>

              <div className="dialog-actions">
                <button type="button" className="btn-secondary" onClick={() => setPosterEditMovie(null)}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary" disabled={posterSaving}>
                  {posterSaving ? 'Downloading & Saving...' : 'Update Poster'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
