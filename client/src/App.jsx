import React, { useState, useEffect } from 'react';
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

  const [currentView, setCurrentView] = useState('home'); // 'home' | 'library' | 'folder' | 'sharing' | 'dashboard' | 'favorites'
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [playingMovie, setPlayingMovie] = useState(null);
  const [libraryFolder, setLibraryFolder] = useState('D:\\Movies');

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

  if (loading) {
    return (
      <div className="viewer-loading-screen">
        <div className="loading-pulse-ring" />
        <span style={{ marginTop: '16px', color: 'var(--text-muted)' }}>Loading StreamLink...</span>
      </div>
    );
  }

  if (!user) {
    return <LoginPage />;
  }

  // Active fullscreen video player
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
      {/* Sidebar Navigation */}
      <Sidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
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
          />
        )}

        {currentView === 'library' && (
          <LibraryPage
            onSelectMovie={(movie) => setSelectedMovie(movie)}
            onPlayMovie={(movie) => setPlayingMovie(movie)}
            authFetch={authFetch}
            onOpenFolderPicker={() => setCurrentView('folder')}
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
            } catch (e) {}
          }}
          onRemoveMovie={async (movie) => {
            if (window.confirm(`Remove "${movie.clean_title}" from your library?\n\nThe original video file will remain untouched on your computer.`)) {
              try {
                await authFetch(`/api/movies/${movie.id}/remove`, { method: 'POST' });
                setSelectedMovie(null);
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
              } catch (e) {}
            }
          }}
          authFetch={authFetch}
        />
      )}
    </div>
  );
}
