import React, { useState, useEffect } from 'react';
import { WifiOff } from 'lucide-react';
import { useAuth } from './context/AuthContext';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import FolderSharingPage from './pages/FolderSharingPage';
import MovieFolderPage from './pages/MovieFolderPage';
import SharingPage from './pages/SharingPage';
import FavoritesPage from './pages/FavoritesPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import PublicViewerPage from './pages/PublicViewerPage';
import VideoPlayer from './components/VideoPlayer';
import MovieModal from './components/MovieModal';
import ProfilesModal from './components/ProfilesModal';
import QualitySettingsModal from './components/QualitySettingsModal';
import ObsidianLoader from './components/ObsidianLoader';
import CursorLight from './components/CursorLight';
import SpatialLanding from './cine3d/SpatialLanding';
import CinemaLobby3D from './cine3d/CinemaLobby3D';
import DimensionalSearchModal from './cine3d/DimensionalSearchModal';
import AmbientLighting from './cine3d/AmbientLighting';
import { performanceManager } from './cine3d/PerformanceManager';
import './App.css';
import './player.css';
import './folder.css';

export default function App() {
  // Check if visitor arrived via a public sharing link (e.g. ?share=abc123 or /share/abc123)
  const urlParams = new URLSearchParams(window.location.search);
  let shareToken = urlParams.get('share');
  if (!shareToken) {
    const match = window.location.pathname.match(/\/share\/([a-zA-Z0-9_-]+)/);
    if (match) {
      shareToken = match[1];
    }
  }

  // If this is a public viewer link, directly mount PublicViewerPage without requiring admin login
  if (shareToken) {
    return <PublicViewerPage token={shareToken} />;
  }

  const { user, token, authFetch, loading } = useAuth();

  const [currentView, setCurrentView] = useState('home'); // 'home' | 'cine3d' | 'library' | 'folder' | 'sharing' | 'dashboard' | 'favorites'
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [playingMovie, setPlayingMovie] = useState(null);
  const [libraryFolder, setLibraryFolder] = useState('D:\\Movies');
  const [allMovies, setAllMovies] = useState([]);

  // CINE-3D Modals & Spatial States
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfilesOpen, setIsProfilesOpen] = useState(false);
  const [isQualityOpen, setIsQualityOpen] = useState(false);
  const [currentProfile, setCurrentProfile] = useState(null);
  const [ambientEnabled, setAmbientEnabled] = useState(() => {
    return localStorage.getItem('streamlink_ambient_lighting') !== 'false';
  });
  const [qualityLevel, setQualityLevel] = useState(performanceManager.currentLevel);

  // First-time spatial intro experience
  const [showSpatialIntro, setShowSpatialIntro] = useState(() => {
    return localStorage.getItem('streamlink_seen_intro') !== 'true';
  });

  // Performance quality manager subscription
  useEffect(() => {
    return performanceManager.subscribe(lvl => setQualityLevel(lvl));
  }, []);

  // Global `/` keyboard shortcut for Dimensional Search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Fetch all movies for CINE-3D cache
  const fetchAllMovies = () => {
    if (user && authFetch) {
      authFetch('/api/movies?sort=recent')
        .then(res => res.json())
        .then(data => {
          if (data.movies) setAllMovies(data.movies);
        })
        .catch(() => {});
    }
  };

  useEffect(() => {
    fetchAllMovies();
  }, [user]);

  // Load profiles
  useEffect(() => {
    if (user && authFetch) {
      authFetch('/api/user/profiles')
        .then(res => res.json())
        .then(data => {
          if (data.profiles && data.profiles.length > 0) {
            const savedId = localStorage.getItem('streamlink_active_profile_id');
            const found = data.profiles.find(p => String(p.id) === savedId) || data.profiles[0];
            setCurrentProfile(found);
          }
        })
        .catch(() => {});
    }
  }, [user]);

  // Load initial settings
  useEffect(() => {
    if (user?.role === 'admin' && authFetch) {
      authFetch('/api/admin/settings')
        .then(res => res.json())
        .then(data => {
          if (data.settings?.library_folder) {
            setLibraryFolder(data.settings.library_folder);
          }
        })
        .catch(() => {});
    }
  }, [user]);

  const handleToggleAmbient = () => {
    setAmbientEnabled(prev => {
      const next = !prev;
      localStorage.setItem('streamlink_ambient_lighting', String(next));
      return next;
    });
  };

  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleProfileChange = (profile) => {
    setCurrentProfile(profile);
    localStorage.setItem('streamlink_active_profile_id', String(profile.id));
  };

  if (loading) {
    return (
      <ObsidianLoader
        message="Connecting to StreamLink 2.0 Media Server..."
        onRetry={() => window.location.reload()}
      />
    );
  }

  if (!user) {
    return <LoginPage />;
  }

  // First-time Spatial Landing Portal
  if (showSpatialIntro) {
    return (
      <SpatialLanding
        onEnter={() => {
          setShowSpatialIntro(false);
          localStorage.setItem('streamlink_seen_intro', 'true');
          setCurrentView('cine3d');
        }}
        onSkip={() => {
          setShowSpatialIntro(false);
          localStorage.setItem('streamlink_seen_intro', 'true');
        }}
      />
    );
  }

  // Active fullscreen video player (Independent of WebGL)
  if (playingMovie) {
    return (
      <VideoPlayer
        movie={playingMovie}
        onBack={() => setPlayingMovie(null)}
        token={token}
        authFetch={authFetch}
      />
    );
  }

  return (
    <div className="app-shell-sidebar-layout">
      {/* Offline Status Banner */}
      {!isOnline && (
        <div className="obsidian-offline-banner">
          <span className="offline-badge">OFFLINE</span>
          <WifiOff size={14} />
          <span>Windows Media Server is offline. Cached library and interface are available. Streaming will resume when reconnected.</span>
        </div>
      )}

      {/* Subtle Ambient Cursor Light & Depth */}
      <CursorLight />

      {/* Dynamic Ambient Cinema Back-Glow */}
      <AmbientLighting enabled={ambientEnabled} />

      {/* Sidebar Navigation */}
      <Sidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenProfiles={() => setIsProfilesOpen(true)}
        onOpenQuality={() => setIsQualityOpen(true)}
        currentProfile={currentProfile}
        qualityLevel={qualityLevel}
      />

      {/* Main Content Area */}
      <main className="main-content-scrollable">
        {currentView === 'home' && (
          <HomePage
            onSelectMovie={(movie) => setSelectedMovie(movie)}
            onPlayMovie={(movie) => setPlayingMovie(movie)}
            authFetch={authFetch}
            onNavigateLibrary={() => setCurrentView('library')}
            onOpenFolderPicker={() => setCurrentView('folder')}
            onNavigateCine3D={() => setCurrentView('cine3d')}
          />
        )}

        {currentView === 'cine3d' && (
          <CinemaLobby3D
            movies={allMovies}
            onSelectMovie={(movie) => setSelectedMovie(movie)}
            onPlayMovie={(movie) => setPlayingMovie(movie)}
            onSwitchTo2D={() => setCurrentView('library')}
          />
        )}

        {currentView === 'library' && (
          <LibraryPage
            onSelectMovie={(movie) => setSelectedMovie(movie)}
            onPlayMovie={(movie) => setPlayingMovie(movie)}
            authFetch={authFetch}
            onOpenFolderPicker={() => setCurrentView('folder')}
            onNavigateCine3D={() => setCurrentView('cine3d')}
          />
        )}

        {currentView === 'folder-sharing' && user?.role === 'admin' && (
          <FolderSharingPage
            authFetch={authFetch}
          />
        )}

        {currentView === 'folder' && user?.role === 'admin' && (
          <MovieFolderPage
            authFetch={authFetch}
            onScanSuccess={(path) => {
              setLibraryFolder(path);
              fetchAllMovies();
            }}
            onViewLibrary={() => setCurrentView('library')}
          />
        )}

        {currentView === 'sharing' && user?.role === 'admin' && (
          <SharingPage
            authFetch={authFetch}
          />
        )}

        {currentView === 'favorites' && (
          <FavoritesPage
            onSelectMovie={(movie) => setSelectedMovie(movie)}
            onPlayMovie={(movie) => setPlayingMovie(movie)}
            authFetch={authFetch}
          />
        )}

        {currentView === 'dashboard' && user?.role === 'admin' && (
          <DashboardPage
            authFetch={authFetch}
            onOpenFolderPicker={() => setCurrentView('folder')}
            onOpenShareModal={() => setCurrentView('sharing')}
          />
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
          onToggleFavorite={async (movieId) => {
            try {
              const res = await authFetch(`/api/user/favorites/${movieId}`, { method: 'POST' });
              const data = await res.json();
              setSelectedMovie(prev => prev ? { ...prev, is_favorite: data.favorited ? 1 : 0 } : null);
              fetchAllMovies();
            } catch (e) {}
          }}
          onRemoveMovie={async (movie) => {
            if (window.confirm(`Remove "${movie.clean_title}" from your library?\n\nThe original video file will remain untouched on your computer.`)) {
              try {
                await authFetch(`/api/movies/${movie.id}/remove`, { method: 'POST' });
                setSelectedMovie(null);
                fetchAllMovies();
              } catch (e) {}
            }
          }}
          onDeleteFile={async (movie) => {
            if (window.confirm(`PERMANENT DELETION WARNING:\nAre you sure you want to permanently delete "${movie.file_name}" from your hard drive?\n\nThis cannot be undone.`)) {
              try {
                await authFetch(`/api/movies/${movie.id}/delete-file`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ confirmPermanent: true, confirmTitle: movie.clean_title })
                });
                setSelectedMovie(null);
                fetchAllMovies();
              } catch (e) {}
            }
          }}
          authFetch={authFetch}
        />
      )}

      {/* Dimensional Full-Screen Search Modal */}
      <DimensionalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectMovie={(movie) => setSelectedMovie(movie)}
        onPlayMovie={(movie) => setPlayingMovie(movie)}
        authFetch={authFetch}
      />

      {/* Viewer Profiles Management Modal */}
      <ProfilesModal
        isOpen={isProfilesOpen}
        onClose={() => setIsProfilesOpen(false)}
        authFetch={authFetch}
        currentProfile={currentProfile}
        onProfileChange={handleProfileChange}
      />

      {/* CINE-3D Quality & Hardware Performance Modal */}
      <QualitySettingsModal
        isOpen={isQualityOpen}
        onClose={() => setIsQualityOpen(false)}
        ambientEnabled={ambientEnabled}
        onToggleAmbient={handleToggleAmbient}
      />
    </div>
  );
}
