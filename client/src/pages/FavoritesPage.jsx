import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import MovieCard from '../components/MovieCard';

export default function FavoritesPage({ onSelectMovie, onPlayMovie, authFetch }) {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = () => {
    setLoading(true);
    authFetch('/api/user/favorites')
      .then(res => res.json())
      .then(data => {
        if (data.favorites) {
          setFavorites(data.favorites.map(f => ({ ...f, is_favorite: 1 })));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchFavorites(); }, []);

  const handleToggleFavorite = async (movieId) => {
    try {
      await authFetch(`/api/user/favorites/${movieId}`, { method: 'POST' });
      setFavorites(prev => prev.filter(m => m.id !== movieId));
    } catch (e) {}
  };

  return (
    <div className="favorites-page-shell">
      <div className="page-header-row">
        <div>
          <h1 className="page-main-title">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <Heart size={26} fill="var(--accent)" color="var(--accent)" />
              My Favorites
            </span>
          </h1>
          <p className="page-sub-title">
            Movies you've marked as favorites for quick access.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="loading-state-3d">
          <div className="loading-pulse-ring" />
          <span>Loading your favorites...</span>
        </div>
      ) : favorites.length === 0 ? (
        <div className="empty-state-3d">
          <Heart size={48} color="var(--text-dim)" />
          <h3>No Favorites Yet</h3>
          <p>Browse your movie library and tap the heart icon on any poster to add it to your favorites collection.</p>
        </div>
      ) : (
        <div className="movie-grid-3d">
          {favorites.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onSelect={onSelectMovie}
              onPlay={onPlayMovie}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}
