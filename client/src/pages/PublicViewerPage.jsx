import React, { useState, useEffect } from 'react';
import { Film, Search, Play, Clock, HardDrive, Lock, AlertCircle, FolderOpen } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';
import MovieModal from '../components/MovieModal';
import { formatDuration, formatFileSize } from '../components/MovieCard';

export default function PublicViewerPage({ token }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [requiresPasscode, setRequiresPasscode] = useState(false);
  const [passcode, setPasscode] = useState('');

  const [shareData, setShareData] = useState(null); // { type: 'library' | 'movie' | 'folder', movies: [], movie: {}, folderName: '' }
  const [search, setSearch] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [playingMovie, setPlayingMovie] = useState(null);

  // Load authorized movies using share token
  const authenticateAndFetch = async (enteredPasscode = passcode) => {
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/share/public/access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, passcode: enteredPasscode })
      });

      const data = await res.json();
      if (!res.ok) {
        if (data.requiresPasscode) {
          setRequiresPasscode(true);
        } else {
          setError(data.error || 'Failed to access stream');
        }
        return;
      }

      setRequiresPasscode(false);
      setShareData(data);

      // If single movie share, automatically select it for viewing
      if (data.type === 'movie' && data.movie) {
        setSelectedMovie(data.movie);
      }
    } catch (err) {
      setError('Unable to connect to host streaming PC');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    authenticateAndFetch();
  }, [token]);

  const handlePasscodeSubmit = (e) => {
    e.preventDefault();
    authenticateAndFetch(passcode);
  };

  // If a movie is currently playing, render the video player
  if (playingMovie) {
    const publicStreamUrl = `/api/share/public/stream/${token}/${playingMovie.id}`;
    return (
      <VideoPlayer
        movie={{
          ...playingMovie,
          streamUrlOverride: publicStreamUrl
        }}
        onBack={() => setPlayingMovie(null)}
        token={token}
      />
    );
  }

  // Passcode Protection Screen
  if (requiresPasscode) {
    return (
      <div className="viewer-auth-container">
        <div className="viewer-auth-card">
          <div className="viewer-brand-badge">
            <Film size={24} />
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: 800 }}>StreamLink Movie Share</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '6px' }}>
            This stream is protected with a security passcode set by the host.
          </p>

          {error && (
            <div className="viewer-error-box">
              <AlertCircle size={15} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handlePasscodeSubmit} style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                placeholder="Enter Passcode / PIN"
                value={passcode}
                onChange={e => setPasscode(e.target.value)}
                required
                style={{ width: '100%', paddingLeft: '38px', textAlign: 'center', letterSpacing: '2px', fontSize: '16px' }}
                autoFocus
              />
              <Lock size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dim)' }} />
            </div>

            <button type="submit" className="btn-primary" style={{ padding: '12px' }} disabled={loading}>
              <span>{loading ? 'Verifying...' : 'Unlock & Watch'}</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="viewer-loading-screen">
        <div className="loading-pulse-ring" />
        <span style={{ marginTop: '16px', color: 'var(--text-muted)' }}>
          Connecting to private streaming server...
        </span>
      </div>
    );
  }

  if (error || !shareData) {
    return (
      <div className="viewer-error-screen">
        <AlertCircle size={48} color="var(--danger)" />
        <h2 style={{ fontSize: '22px', marginTop: '16px' }}>Stream Unavailable</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', maxWidth: '420px', marginTop: '8px' }}>
          {error || 'The sharing link is either invalid, disabled, or the host computer has stopped streaming.'}
        </p>
      </div>
    );
  }

  const isMultiple = shareData.type === 'library' || shareData.type === 'folder';
  const movies = isMultiple
    ? (shareData.movies || []).filter(m => !search || m.clean_title.toLowerCase().includes(search.toLowerCase()))
    : (shareData.movie ? [shareData.movie] : []);

  return (
    <div className="public-viewer-layout">
      {/* Viewer Header */}
      <header className="viewer-navbar">
        <div className="viewer-brand">
          <div className="nav-logo-icon">
            <Film size={18} strokeWidth={2.5} />
          </div>
          <span className="viewer-brand-title">
            Stream<span className="brand-accent">Link</span>
          </span>
          <span className="viewer-live-badge">
            {shareData.type === 'folder' ? 'SHARED FOLDER' : 'DIRECT STREAM'}
          </span>
        </div>

        {isMultiple && (
          <div className="viewer-search-box">
            <Search size={15} className="search-icon" />
            <input
              type="text"
              placeholder={shareData.type === 'folder' ? `Search ${shareData.folderName || 'folder'}...` : "Search movies..."}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="viewer-main">
        {shareData.type === 'movie' && shareData.movie ? (
          // Single Movie Showcase View
          <div className="single-movie-showcase">
            <div className="single-movie-poster-box">
              <img src={`/api/movies/${shareData.movie.id}/poster`} alt={shareData.movie.clean_title} />
            </div>

            <div className="single-movie-info-box">
              <div className="single-movie-badges-row">
                <span className="hero-badge-pill">AUTHORIZED DIRECT STREAM</span>
                {shareData.movie.resolution && (
                  <span className="badge-3d badge-top-left" style={{ position: 'static' }}>{shareData.movie.resolution}</span>
                )}
                {shareData.movie.year && (
                  <span className="hero-badge-year">{shareData.movie.year}</span>
                )}
              </div>

              <h1 className="single-movie-title">
                {shareData.movie.clean_title}
              </h1>

              <div className="single-movie-meta-row">
                <span className="meta-pill"><Clock size={12} /> {formatDuration(shareData.movie.duration)}</span>
                <span className="meta-pill"><HardDrive size={12} /> {formatFileSize(shareData.movie.file_size)}</span>
              </div>

              <p className="single-movie-desc">
                {shareData.movie.description || 'Streamed in original high-bitrate quality directly from the host Windows workstation. Multi-channel audio and instant HTTP range seeking.'}
              </p>

              <button
                className="btn-primary hero-btn-play"
                onClick={() => setPlayingMovie(shareData.movie)}
              >
                <Play size={18} fill="#fff" />
                <span>Play Movie Now</span>
              </button>
            </div>
          </div>
        ) : (
          // Library or Shared Folder Grid View
          <>
            <div className="viewer-heading-row">
              {shareData.type === 'folder' ? (
                <div className="viewer-folder-header-box">
                  <div className="viewer-folder-icon-circle">
                    <FolderOpen size={22} />
                  </div>
                  <div>
                    <h2 className="viewer-page-title">
                      {shareData.folderName || 'Shared Folder'}
                      <span className="viewer-count-pill">{movies.length} {movies.length === 1 ? 'Movie' : 'Movies'}</span>
                    </h2>
                    <p className="viewer-page-subtitle">
                      {shareData.label && shareData.label !== shareData.folderName ? `${shareData.label} • ` : ''}
                      Streamed directly from host Windows PC. No app download needed.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="viewer-folder-header-box">
                  <div>
                    <h2 className="viewer-page-title">
                      Available Movies
                      <span className="viewer-count-pill">{movies.length}</span>
                    </h2>
                    <p className="viewer-page-subtitle">
                      Tap any movie to stream directly from the host computer.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {movies.length === 0 ? (
              <div className="viewer-empty-box">
                {search ? 'No movies found matching your search query.' : 'No movies currently found in this shared folder.'}
              </div>
            ) : (
              <div className="movie-grid-3d">
                {movies.map(movie => (
                  <div
                    key={movie.id}
                    className="movie-card-3d"
                    onClick={() => setSelectedMovie(movie)}
                  >
                    <div className="poster-wrapper-3d">
                      <img src={`/api/movies/${movie.id}/poster`} alt={movie.clean_title} className="poster-img-3d" loading="lazy" />
                      <div className="poster-overlay-3d">
                        <div className="play-circle-3d">
                          <Play size={22} fill="#fff" strokeWidth={0} />
                        </div>
                      </div>
                      {movie.resolution && <span className="badge-3d badge-top-left">{movie.resolution}</span>}
                      {movie.year && <span className="badge-3d badge-top-right">{movie.year}</span>}
                    </div>

                    <div className="movie-info-3d">
                      <h4 className="movie-title-3d" title={movie.clean_title}>{movie.clean_title}</h4>
                      <div className="movie-meta-row-3d">
                        <span className="meta-tag"><Clock size={11} /> {formatDuration(movie.duration)}</span>
                        <span className="meta-tag"><HardDrive size={11} /> {formatFileSize(movie.file_size)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </main>

      {/* Movie Details Modal */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          onPlay={(movie) => {
            setSelectedMovie(null);
            setPlayingMovie(movie);
          }}
          onToggleFavorite={() => {}} // Guest favorites not stored in DB
        />
      )}
    </div>
  );
}
