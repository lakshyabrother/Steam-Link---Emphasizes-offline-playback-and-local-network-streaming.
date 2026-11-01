import React, { useState, useEffect } from 'react';
import { Play, Clock, Sparkles, TrendingUp, Heart, Film, ArrowRight, FolderPlus } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import MovieCard, { formatDuration } from '../components/MovieCard';

export default function HomePage({ onSelectMovie, onPlayMovie, authFetch, onNavigateLibrary, onOpenFolderPicker }) {
  const [sections, setSections] = useState({
    featured: null,
    continueWatching: [],
    recentlyAdded: [],
    popular: [],
    favorites: []
  });
  const [loading, setLoading] = useState(true);

  const fetchSections = () => {
    setLoading(true);
    authFetch('/api/movies/sections/home')
      .then(res => res.json())
      .then(data => {
        setSections({
          featured: data.featured || null,
          continueWatching: data.continueWatching || [],
          recentlyAdded: data.recentlyAdded || [],
          popular: data.popular || [],
          favorites: data.favorites || []
        });
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchSections();
  }, []);

  const handleToggleFavorite = async (movieId) => {
    try {
      const res = await authFetch(`/api/user/favorites/${movieId}`, { method: 'POST' });
      const data = await res.json();
      setSections(prev => ({
        ...prev,
        recentlyAdded: prev.recentlyAdded.map(m => m.id === movieId ? { ...m, is_favorite: data.favorited ? 1 : 0 } : m),
        popular: prev.popular.map(m => m.id === movieId ? { ...m, is_favorite: data.favorited ? 1 : 0 } : m),
        favorites: data.favorited 
          ? [...prev.favorites, prev.recentlyAdded.find(m => m.id === movieId) || { id: movieId, is_favorite: 1 }]
          : prev.favorites.filter(m => m.id !== movieId)
      }));
    } catch (e) {}
  };

  if (loading) {
    return (
      <div className="loading-state-3d">
        <div className="loading-pulse-ring" />
        <span>Loading cinematic home...</span>
      </div>
    );
  }

  const hasAnyMovies = sections.featured || sections.recentlyAdded.length > 0;

  if (!hasAnyMovies) {
    return (
      <div className="empty-state-3d" style={{ marginTop: '60px' }}>
        <Film size={48} color="var(--text-dim)" style={{ marginBottom: '16px' }} />
        <h3>Your Cinema Library is Empty</h3>
        <p>Connect and scan a movie folder on your host Windows PC to populate your personal streaming theater.</p>
        {onOpenFolderPicker && (
          <button className="btn-primary" onClick={onOpenFolderPicker}>
            <FolderPlus size={16} />
            <span>Select Movie Folder</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="home-page-container">
      {/* Featured Hero Banner */}
      {sections.featured && (
        <HeroSection
          movie={sections.featured}
          onPlay={onPlayMovie}
          onDetails={onSelectMovie}
        />
      )}

      {/* Continue Watching Section */}
      {sections.continueWatching.length > 0 && (
        <section className="home-section">
          <div className="section-header">
            <div className="section-title">
              <Clock size={19} color="#7C6CF8" />
              <span>Continue Watching</span>
            </div>
          </div>

          <div className="continue-watching-grid">
            {sections.continueWatching.map(item => {
              const pct = item.duration > 0 ? Math.round((item.progress_seconds / item.duration) * 100) : 50;
              return (
                <div
                  key={item.id}
                  className="continue-card-3d"
                  onClick={() => onPlayMovie(item)}
                >
                  <div className="continue-poster-thumb">
                    <img src={`/api/movies/${item.id}/poster`} alt={item.clean_title} />
                    <div className="continue-play-overlay">
                      <Play size={20} fill="#ffffff" />
                    </div>
                  </div>

                  <div className="continue-info">
                    <div>
                      <h4 className="continue-title" title={item.clean_title}>
                        {item.clean_title}
                      </h4>
                      <div className="continue-time">
                        {formatDuration(item.progress_seconds)} of {formatDuration(item.duration)}
                      </div>
                    </div>

                    <div className="continue-bar-track">
                      <div className="continue-bar-fill" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Recently Added Row */}
      {sections.recentlyAdded.length > 0 && (
        <section className="home-section">
          <div className="section-header">
            <div className="section-title">
              <Sparkles size={19} color="#38BDF8" />
              <span>Recently Added</span>
            </div>
            {onNavigateLibrary && (
              <button className="section-see-all-btn" onClick={onNavigateLibrary}>
                <span>View Full Library</span>
                <ArrowRight size={14} />
              </button>
            )}
          </div>

          <div className="movie-grid-3d">
            {sections.recentlyAdded.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onSelect={onSelectMovie}
                onPlay={onPlayMovie}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        </section>
      )}

      {/* Popular / Most Watched Row */}
      {sections.popular.length > 0 && (
        <section className="home-section">
          <div className="section-header">
            <div className="section-title">
              <TrendingUp size={19} color="#22C55E" />
              <span>Popular & Most Watched</span>
            </div>
          </div>

          <div className="movie-grid-3d">
            {sections.popular.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onSelect={onSelectMovie}
                onPlay={onPlayMovie}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        </section>
      )}

      {/* Favorites Row */}
      {sections.favorites.length > 0 && (
        <section className="home-section">
          <div className="section-header">
            <div className="section-title">
              <Heart size={19} color="#EF4444" fill="#EF4444" />
              <span>Your Favorites</span>
            </div>
          </div>

          <div className="movie-grid-3d">
            {sections.favorites.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onSelect={onSelectMovie}
                onPlay={onPlayMovie}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

