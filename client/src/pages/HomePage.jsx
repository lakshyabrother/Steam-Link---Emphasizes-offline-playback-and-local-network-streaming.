import React, { useState, useEffect } from 'react';
import { Play, Clock, Sparkles, TrendingUp, Heart, Film, ArrowRight, FolderPlus, Layers, Compass, Zap } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import MovieCard, { formatDuration } from '../components/MovieCard';
import { getApiUrl } from '../utils/api';

export default function HomePage({
  onSelectMovie,
  onPlayMovie,
  authFetch,
  onNavigateLibrary,
  onOpenFolderPicker,
  onNavigateCine3D
}) {
  const [sections, setSections] = useState({
    featured: null,
    continueWatching: [],
    recentlyAdded: [],
    popular: [],
    favorites: [],
    genreCollections: []
  });
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSections = () => {
    setLoading(true);
    Promise.all([
      authFetch('/api/movies/sections/home').then(r => r.json()),
      authFetch('/api/user/recommendations').then(r => r.json()).catch(() => ({ recommendations: [] }))
    ])
      .then(([data, recData]) => {
        setSections({
          featured: data.featured || null,
          continueWatching: data.continueWatching || [],
          recentlyAdded: data.recentlyAdded || [],
          popular: data.popular || [],
          favorites: data.favorites || [],
          genreCollections: data.genreCollections || []
        });
        setRecommendations(recData.recommendations || []);
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
        <span>Loading StreamLink 2.0 Cinema...</span>
      </div>
    );
  }

  const hasAnyMovies = sections.featured || sections.recentlyAdded.length > 0;

  if (!hasAnyMovies) {
    return (
      <div className="empty-state-3d" style={{ marginTop: '60px' }}>
        <Film size={48} className="text-dim" style={{ marginBottom: '16px' }} />
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
          onEnterCine3D={onNavigateCine3D}
        />
      )}

      {/* CINE-3D Experience Invitation Banner */}
      {onNavigateCine3D && (
        <div className="cine3d-invitation-strip" onClick={onNavigateCine3D}>
          <div className="strip-left">
            <div className="strip-sparkle-pill">
              <Sparkles size={14} className="text-cyan pulse-icon" />
              <span>SPATIAL WEBGL CINEMA</span>
            </div>
            <h3>Explore in CINE-3D Spatial Lobby</h3>
            <p>Step inside an interactive 3D curved cinema carousel with dynamic lighting and spatial controls.</p>
          </div>
          <button className="btn-primary btn-sm">
            <span>Enter CINE-3D</span>
            <ArrowRight size={14} />
          </button>
        </div>
      )}

      {/* Continue Watching Section */}
      {sections.continueWatching.length > 0 && (
        <section className="home-section">
          <div className="section-header">
            <div className="section-title">
              <Clock size={19} color="#8B5CF6" />
              <span>Continue Watching</span>
            </div>
          </div>

          <div className="continue-watching-grid">
            {sections.continueWatching.map(item => {
              const pct = item.duration > 0 ? Math.min(100, Math.round((item.progress_seconds / item.duration) * 100)) : 50;
              return (
                <div
                  key={item.id}
                  className="continue-card-3d"
                  onClick={() => onPlayMovie(item)}
                >
                  <div className="continue-poster-thumb">
                    <img src={getApiUrl(`/api/movies/${item.id}/poster`)} alt={item.clean_title} />
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
                        {formatDuration(item.progress_seconds)} of {formatDuration(item.duration)} ({pct}%)
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

      {/* Recommended For You Section */}
      {recommendations.length > 0 && (
        <section className="home-section">
          <div className="section-header">
            <div className="section-title">
              <Compass size={19} color="#38BDF8" />
              <span>Recommended For You</span>
            </div>
          </div>

          <div className="movie-grid-3d">
            {recommendations.slice(0, 6).map(movie => (
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

      {/* Dynamic Genre Collections */}
      {sections.genreCollections.map(({ genre, movies }) => (
        <section key={genre} className="home-section">
          <div className="section-header">
            <div className="section-title">
              <Layers size={19} color="#A855F7" />
              <span>{genre}</span>
            </div>
          </div>

          <div className="movie-grid-3d">
            {movies.slice(0, 6).map(movie => (
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
      ))}

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
