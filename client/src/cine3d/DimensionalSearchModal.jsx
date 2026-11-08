import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, Film, Clock, Tag, Play, ArrowRight, CornerDownLeft } from 'lucide-react';
import { getApiUrl } from '../utils/api';

const QUICK_GENRES = [
  'All',
  'Action & Adventure',
  'Anime & Animation',
  'Horror & Suspense',
  'Sci-Fi & Cyber',
  'Thriller & Mystery',
  'Cinema & Drama'
];

export default function DimensionalSearchModal({ isOpen, onClose, onSelectMovie, onPlayMovie, authFetch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const inputRef = useRef(null);

  // Load search history from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = JSON.parse(localStorage.getItem('streamlink_search_history') || '[]');
        setSearchHistory(Array.isArray(saved) ? saved.slice(0, 6) : []);
      } catch (e) {}
    }
  }, []);

  const saveSearchTerm = (term) => {
    if (!term || !term.trim()) return;
    const clean = term.trim();
    const updated = [clean, ...searchHistory.filter(s => s.toLowerCase() !== clean.toLowerCase())].slice(0, 6);
    setSearchHistory(updated);
    try {
      localStorage.setItem('streamlink_search_history', JSON.stringify(updated));
    } catch (e) {}
  };

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    } else {
      setSearchTerm('');
      setFocusedIndex(0);
    }
  }, [isOpen]);

  // Fetch movies based on query and genre
  useEffect(() => {
    if (!isOpen) return;

    let isMounted = true;
    setLoading(true);

    const queryParams = new URLSearchParams();
    if (searchTerm.trim()) queryParams.set('q', searchTerm.trim());
    if (selectedGenre !== 'All') queryParams.set('genre', selectedGenre);

    authFetch(`/api/movies?${queryParams.toString()}`)
      .then(res => res.json())
      .then(data => {
        if (isMounted) {
          setMovies(data.movies || []);
          setFocusedIndex(0);
        }
      })
      .catch(() => {})
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => { isMounted = false; };
  }, [isOpen, searchTerm, selectedGenre]);

  // Keyboard navigation inside modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setFocusedIndex(prev => Math.min(prev + 1, movies.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusedIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        if (movies[focusedIndex]) {
          saveSearchTerm(searchTerm || movies[focusedIndex].clean_title);
          onSelectMovie(movies[focusedIndex]);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, movies, focusedIndex, searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="dimensional-search-overlay" onClick={onClose}>
      <div className="dimensional-search-window" onClick={e => e.stopPropagation()}>
        {/* Top Search Header */}
        <div className="search-bar-wrap">
          <Search size={22} className="search-input-icon text-cyan" />
          <input
            ref={inputRef}
            type="text"
            className="spatial-search-input"
            placeholder="Search by title, genre, year, resolution (e.g. 4K, Annabelle)..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className="search-clear-btn" onClick={() => setSearchTerm('')}>
              <X size={18} />
            </button>
          )}
          <div className="search-shortcut-pill">
            <span>ESC to close</span>
          </div>
        </div>

        {/* Genre Filter Pills */}
        <div className="search-genres-row">
          {QUICK_GENRES.map(genre => (
            <button
              key={genre}
              className={`search-genre-chip ${selectedGenre === genre ? 'active' : ''}`}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Search History Chips */}
        {searchHistory.length > 0 && !searchTerm && (
          <div className="search-history-row">
            <Clock size={13} className="text-muted" />
            <span className="text-dim text-xs">Recent:</span>
            {searchHistory.map((term, i) => (
              <button
                key={i}
                className="search-history-chip"
                onClick={() => setSearchTerm(term)}
              >
                {term}
              </button>
            ))}
          </div>
        )}

        {/* Results Container */}
        <div className="search-results-viewport">
          {loading ? (
            <div className="search-loading-state">
              <div className="loading-pulse-ring" />
              <span>Scanning personal cinema database...</span>
            </div>
          ) : movies.length > 0 ? (
            <div className="search-cards-grid">
              {movies.map((movie, idx) => (
                <div
                  key={movie.id}
                  className={`search-card-3d ${idx === focusedIndex ? 'focused' : ''}`}
                  onClick={() => {
                    saveSearchTerm(searchTerm || movie.clean_title);
                    onSelectMovie(movie);
                    onClose();
                  }}
                  onMouseEnter={() => setFocusedIndex(idx)}
                >
                  <div className="search-card-poster">
                    <img
                      src={getApiUrl(`/api/movies/${movie.id}/poster`)}
                      alt={movie.clean_title}
                      loading="lazy"
                    />
                    <div className="search-card-glow" />
                  </div>
                  <div className="search-card-info">
                    <div className="search-card-tags">
                      <span className="badge-pill res">{movie.resolution || '1080P'}</span>
                      {movie.year && <span className="badge-pill year">{movie.year}</span>}
                      <span className="badge-pill genre">{movie.genre || 'Movie'}</span>
                    </div>
                    <h4 className="search-card-title">{movie.clean_title}</h4>
                    <p className="search-card-filename">{movie.file_name}</p>
                    <div className="search-card-play-pill">
                      <Play size={12} fill="currentColor" />
                      <span>Stream</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="search-empty-state">
              <Film size={40} className="text-dim" style={{ marginBottom: '12px' }} />
              <h4>No matches found for "{searchTerm}"</h4>
              <p>Check spelling or try searching for broad terms like "1080p", "4k", or clearing the genre filter.</p>
            </div>
          )}
        </div>

        {/* Footer Navigation Help */}
        <div className="search-footer-hint">
          <span><CornerDownLeft size={12} /> Press <strong>Enter</strong> to open details</span>
          <span>Use <strong>↑ / ↓ Arrow Keys</strong> to navigate</span>
        </div>
      </div>
    </div>
  );
}
