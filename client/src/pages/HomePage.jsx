import React, { useState, useEffect } from 'react';
import { Play, Clock, Sparkles, TrendingUp, Heart, Film, ArrowRight, FolderPlus, Layers, Compass, Zap, Flame } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import MovieCard, { formatDuration } from '../components/MovieCard';
import { getApiUrl } from '../utils/api';
import { formatDisplayTitle } from '../utils/formatTitle';

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
  const [activeVibe, setActiveVibe] = useState('all');

  const vibePills = [
    { id: 'all', label: 'All Vibes', icon: Sparkles, color: '#8B5CF6' },
    { id: 'trending', label: 'Trending', icon: Flame, color: '#EC4899' },
    { id: '4k', label: '4K Ultra HD', icon: Zap, color: '#38BDF8' },
    { id: 'continue', label: 'Continue Binge', icon: Clock, color: '#A855F7' },
    { id: 'anime', label: 'Anime & Aesthetic', icon: Film, color: '#F43F5E' },
    { id: 'recommended', label: 'Curated For You', icon: Compass, color: '#10B981' },
    { id: 'favorites', label: 'Favorites', icon: Heart, color: '#F59E0B' }
  ];

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

      {/* Gen Z Interactive Vibe Category Pills Bar */}
      <div className="vibe-chips-bar">
        {vibePills.map(vibe => {
          const Icon = vibe.icon;
          const isActive = activeVibe === vibe.id;
          return (
            <button
              key={vibe.id}
              className={`vibe-chip ${isActive ? 'active' : ''}`}
              style={{
                '--chip-color': vibe.color
              }}
              onClick={() => setActiveVibe(vibe.id)}
            >
              <Icon size={14} className="vibe-chip-icon" />
              <span>{vibe.label}</span>
            </button>
          );
        })}
      </div>

      {/* CINE-3D Experience Invitation Banner (Cyberpunk Portal) */}
      {onNavigateCine3D && (
        <div className="cine3d-invitation-strip cyber-portal-strip" onClick={onNavigateCine3D}>
          <div className="cyber-strip-glow" />
          <div className="strip-left">
            <div className="strip-sparkle-pill">
              <Sparkles size={13} className="text-cyan pulse-icon" />
              <span>SPATIAL 3D CINEMA METAVERSE</span>
            </div>
            <h3 className="cyber-portal-heading">Explore in CINE-3D Spatial Lobby</h3>
            <p className="cyber-portal-desc">Step inside an interactive 3D curved cinema carousel with volumetric depth, spatial physics, and holographic inertia.</p>
          </div>
          <div className="strip-right-action">
            <button className="cyber-portal-launch-btn">
              <Sparkles size={15} />
              <span>Launch 3D Cinema</span>
              <ArrowRight size={15} />
            </button>
          </div>
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
              const displayTitle = formatDisplayTitle(item.clean_title);
              return (
                <div
                  key={item.id}
                  className="continue-card-3d"
                  onClick={() => onPlayMovie(item)}
                >
                  <div className="continue-poster-thumb">
                    <img src={getApiUrl(`/api/movies/${item.id}/poster`)} alt={displayTitle} />
                    <div className="continue-play-overlay">
                      <Play size={20} fill="#ffffff" />
                    </div>
                  </div>

                  <div className="continue-info">
                    <div>
                      <h4 className="continue-title" title={displayTitle}>
                        {displayTitle}
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
