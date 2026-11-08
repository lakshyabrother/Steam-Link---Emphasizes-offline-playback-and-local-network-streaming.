import express from 'express';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { getDatabase, addLog } from '../database.js';
import { requireAuth } from '../auth.js';
import { handleStreamRequest, convertSrtToVtt } from '../streamer.js';
import { CONFIG } from '../config.js';
import {
  getTmdbApiKey,
  searchTmdbMovies,
  autoRecognizeMovie,
  applyManualTmdbMatch,
  batchAutoRecognizeLibrary,
  downloadAndCacheArtwork
} from '../metadata.js';

const router = express.Router();

/**
 * Search local disk directory for movie poster or backdrop art
 */
function findLocalArtwork(filePath, kind = 'poster') {
  if (!filePath || !fs.existsSync(filePath)) return null;
  const dir = path.dirname(filePath);
  const baseName = path.basename(filePath, path.extname(filePath));

  const posterNames = [
    'poster.jpg', 'poster.png', 'poster.jpeg', 'poster.webp',
    'cover.jpg', 'cover.png', 'cover.jpeg', 'cover.webp',
    'folder.jpg', 'folder.png', 'folder.jpeg', 'folder.webp',
    `${baseName}.jpg`, `${baseName}.png`, `${baseName}-poster.jpg`
  ];

  const backdropNames = [
    'backdrop.jpg', 'backdrop.png', 'backdrop.jpeg', 'backdrop.webp',
    'fanart.jpg', 'fanart.png', 'fanart.jpeg', 'fanart.webp',
    'banner.jpg', 'banner.png', 'banner.jpeg', 'banner.webp',
    `${baseName}-backdrop.jpg`, `${baseName}-fanart.jpg`
  ];

  const candidates = kind === 'backdrop' ? backdropNames : posterNames;
  for (const name of candidates) {
    const candidatePath = path.join(dir, name);
    if (fs.existsSync(candidatePath)) {
      try {
        const stat = fs.statSync(candidatePath);
        if (stat.isFile() && stat.size > 0) return candidatePath;
      } catch (e) {}
    }
  }
  return null;
}

/**
 * Helper to escape XML characters in SVG text
 */
function escapeXml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Extract a high-definition video frame screencap using FFmpeg
 */
function extractVideoFrame(videoFilePath, outputJpgPath, seekSeconds = 2) {
  return new Promise((resolve) => {
    if (!videoFilePath) return resolve(false);
    try {
      if (!fs.existsSync(videoFilePath)) return resolve(false);
      const proc = spawn('ffmpeg', [
        '-y',
        '-ss', String(seekSeconds),
        '-i', videoFilePath,
        '-vframes', '1',
        '-q:v', '2',
        outputJpgPath
      ]);
      proc.on('close', (code) => {
        resolve(code === 0 && fs.existsSync(outputJpgPath));
      });
      proc.on('error', () => resolve(false));
    } catch (e) {
      resolve(false);
    }
  });
}

/**
 * Generate a vibrant Gen-Z aesthetic SVG poster (300x450)
 * Uses 6 aesthetic themes based on title hash so every file gets a unique, stunning cover!
 */
function generateMovieSvgPoster(title, year, resolution) {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  const themeIdx = Math.abs(hash) % 6;

  const themes = [
    { name: 'Cyberpunk Neon', c1: '#7928CA', c2: '#FF0080', c3: '#00DFD8', accent: '#FF0080', tag: 'CYBER-VIBE' },
    { name: 'Synthwave Horizon', c1: '#E11D48', c2: '#FB923C', c3: '#4F46E5', accent: '#FB923C', tag: 'SYNTH-WAVE' },
    { name: 'Matrix Emerald', c1: '#059669', c2: '#06B6D4', c3: '#0B132B', accent: '#10B981', tag: 'MATRIX-CORE' },
    { name: 'Ultraviolet Prime', c1: '#8B5CF6', c2: '#D946EF', c3: '#18181B', accent: '#C084FC', tag: 'ULTRAVIOLET' },
    { name: 'Tokyo Crimson', c1: '#DC2626', c2: '#701A75', c3: '#0A0A0A', accent: '#F87171', tag: 'TOKYO-NIGHTS' },
    { name: 'Cosmic Dream', c1: '#0284C7', c2: '#38BDF8', c3: '#818CF8', accent: '#38BDF8', tag: 'COSMIC-STREAM' }
  ];
  const t = themes[themeIdx];

  const rawClean = (title || 'Movie').replace(/\.(mp4|mkv|avi|mov|webm)$/i, '').replace(/[_\.\-]+/g, ' ').trim();
  const cleanDisplayTitle = escapeXml(rawClean.length > 26 ? rawClean.substring(0, 24) + '...' : rawClean);
  const initialLetter = escapeXml((rawClean.charAt(0) || 'S').toUpperCase());
  const safeRes = escapeXml((resolution || '1080P').toUpperCase());
  const safeYear = year ? escapeXml(String(year)) : '';

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="450" viewBox="0 0 300 450">
      <defs>
        <linearGradient id="posterGrad_${themeIdx}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${t.c1}" />
          <stop offset="50%" stop-color="${t.c2}" />
          <stop offset="100%" stop-color="${t.c3}" />
        </linearGradient>
        <radialGradient id="neonHalo_${themeIdx}" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stop-color="${t.accent}" stop-opacity="0.45" />
          <stop offset="60%" stop-color="${t.c1}" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#090B10" stop-opacity="0.85" />
        </radialGradient>
        <linearGradient id="glassPlaque" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#090B10" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#090B10" stop-opacity="0.96" />
        </linearGradient>
      </defs>

      <!-- Base Canvas Background with Rich Theme Colors -->
      <rect width="300" height="450" rx="10" fill="url(#posterGrad_${themeIdx})"/>
      <rect width="300" height="450" rx="10" fill="url(#neonHalo_${themeIdx})"/>

      <!-- Ambient Diagonal Cyber Lines -->
      <line x1="0" y1="40" x2="300" y2="180" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
      <line x1="0" y1="120" x2="300" y2="260" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      <line x1="0" y1="200" x2="300" y2="340" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>

      <!-- Stylized Giant Monogram Initial -->
      <text x="150" y="245" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="140" font-weight="900" fill="rgba(255,255,255,0.08)" text-anchor="middle">${initialLetter}</text>

      <!-- Center Glowing Aperture & Play Circle -->
      <circle cx="150" cy="180" r="46" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="2"/>
      <circle cx="150" cy="180" r="36" fill="rgba(9,11,16,0.65)" stroke="${t.accent}" stroke-width="1.5"/>
      <polygon points="144,168 162,180 144,192" fill="#FFFFFF"/>

      <!-- Top Badges Row -->
      <rect x="18" y="18" width="62" height="22" rx="5" fill="rgba(9,11,16,0.75)" stroke="${t.accent}" stroke-width="1"/>
      <text x="49" y="33" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="middle">⚡ ${safeRes}</text>

      <rect x="220" y="18" width="62" height="22" rx="5" fill="rgba(9,11,16,0.75)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
      <text x="251" y="33" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10" font-weight="800" fill="#FACC15" text-anchor="middle">⭐ 9.8</text>

      <!-- Bottom Glass Title Plaque -->
      <rect x="0" y="310" width="300" height="140" fill="url(#glassPlaque)"/>
      <rect x="18" y="316" width="32" height="3" rx="1.5" fill="${t.accent}"/>

      <text x="18" y="340" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="9" font-weight="800" fill="${t.accent}" letter-spacing="1">✨ ${t.tag}</text>
      <text x="18" y="368" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF">${cleanDisplayTitle}</text>
      <text x="18" y="392" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="10.5" font-weight="600" fill="rgba(255,255,255,0.7)">DIRECT WORKSTATION BITRATE</text>

      <!-- Equalizer Visualizer Bars in corner -->
      <rect x="240" y="415" width="3" height="12" rx="1" fill="${t.accent}"/>
      <rect x="246" y="410" width="3" height="17" rx="1" fill="#FFFFFF"/>
      <rect x="252" y="418" width="3" height="9" rx="1" fill="${t.accent}"/>
      <rect x="258" y="412" width="3" height="15" rx="1" fill="#FFFFFF"/>
      <rect x="264" y="420" width="3" height="7" rx="1" fill="${t.accent}"/>
      <rect x="270" y="414" width="3" height="13" rx="1" fill="#FFFFFF"/>
    </svg>
  `.trim();
}

/**
 * Generate 16:9 Widescreen Backdrop SVG (1280x720) with Cinematic Aurora Mesh
 */
function generateMovieSvgBackdrop(title, year, resolution) {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  const themeIdx = Math.abs(hash) % 6;

  const themes = [
    { c1: '#4A154B', c2: '#1E1B4B', c3: '#0F172A', accent: '#C084FC' },
    { c1: '#831843', c2: '#312E81', c3: '#090B10', accent: '#F43F5E' },
    { c1: '#064E3B', c2: '#0F172A', c3: '#090B10', accent: '#10B981' },
    { c1: '#581C87', c2: '#1E1B4B', c3: '#090B10', accent: '#8B5CF6' },
    { c1: '#7F1D1D', c2: '#2E1065', c3: '#090B10', accent: '#F87171' },
    { c1: '#0C4A6E', c2: '#1E1B4B', c3: '#090B10', accent: '#38BDF8' }
  ];
  const t = themes[themeIdx];

  const rawClean = (title || 'Movie').replace(/\.(mp4|mkv|avi|mov|webm)$/i, '').replace(/[_\.\-]+/g, ' ').trim();
  const cleanDisplayTitle = escapeXml(rawClean.length > 38 ? rawClean.substring(0, 36) + '...' : rawClean);
  const safeRes = escapeXml((resolution || '1080P').toUpperCase());
  const safeYear = year ? escapeXml(String(year)) : '';

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
      <defs>
        <linearGradient id="bgH_${themeIdx}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${t.c1}" />
          <stop offset="50%" stop-color="${t.c2}" />
          <stop offset="100%" stop-color="${t.c3}" />
        </linearGradient>
        <radialGradient id="auroraGlow_${themeIdx}" cx="75%" cy="35%" r="60%">
          <stop offset="0%" stop-color="${t.accent}" stop-opacity="0.45" />
          <stop offset="70%" stop-color="${t.c1}" stop-opacity="0.1" />
          <stop offset="100%" stop-color="#090B10" stop-opacity="0" />
        </radialGradient>
      </defs>

      <rect width="1280" height="720" fill="url(#bgH_${themeIdx})"/>
      <rect width="1280" height="720" fill="url(#auroraGlow_${themeIdx})"/>

      <!-- Ambient Cinema Rings & Stars -->
      <circle cx="950" cy="360" r="320" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>
      <circle cx="950" cy="360" r="220" fill="none" stroke="${t.accent}" stroke-opacity="0.12" stroke-width="1.5"/>
      <circle cx="950" cy="360" r="120" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>

      <!-- Vignette Overlay -->
      <rect width="1280" height="720" fill="#090B10" opacity="0.35"/>

      <!-- Typography -->
      <rect x="80" y="420" width="54" height="4" rx="2" fill="${t.accent}"/>
      <text x="80" y="470" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="44" font-weight="900" fill="#FFFFFF">${cleanDisplayTitle}</text>
      <text x="80" y="508" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="16" font-weight="700" fill="${t.accent}" letter-spacing="1.5">STREAMLINK 2.0 CINEMA • ${safeRes}${safeYear ? ` • ${safeYear}` : ''}</text>
    </svg>
  `.trim();
}

// List Movies with search, filter, and sorting
router.get('/', requireAuth, (req, res) => {
  const { q, year, resolution, genre, artworkStatus, sort } = req.query;
  const db = getDatabase();
  const userId = req.user.id;

  let query = `
    SELECT 
      m.*,
      wp.progress_seconds,
      wp.duration_seconds AS watched_duration,
      wp.completed,
      CASE WHEN f.id IS NOT NULL THEN 1 ELSE 0 END AS is_favorite
    FROM movies m
    LEFT JOIN watch_progress wp ON wp.movie_id = m.id AND wp.user_id = ?
    LEFT JOIN favorites f ON f.movie_id = m.id AND f.user_id = ?
    WHERE 1=1
  `;
  const params = [userId, userId];

  if (q && q.trim()) {
    query += ` AND (m.clean_title LIKE ? OR m.title LIKE ?)`;
    params.push(`%${q.trim()}%`, `%${q.trim()}%`);
  }

  if (year && year.trim()) {
    query += ` AND m.year = ?`;
    params.push(year.trim());
  }

  if (resolution && resolution.trim()) {
    query += ` AND m.resolution = ?`;
    params.push(resolution.trim().toUpperCase());
  }

  // Sorting
  switch (sort) {
    case 'title':
      query += ` ORDER BY m.clean_title ASC`;
      break;
    case 'year':
      query += ` ORDER BY CAST(m.year AS INTEGER) DESC, m.clean_title ASC`;
      break;
    case 'duration':
      query += ` ORDER BY m.duration DESC`;
      break;
    case 'size':
      query += ` ORDER BY m.file_size DESC`;
      break;
    case 'recent':
    default:
      query += ` ORDER BY m.id DESC`;
      break;
  }

  const movies = db.prepare(query).all(...params);

  // Parse subtitles_json safely and attach inferred genres
  let mapped = movies.map(m => {
    let subs = [];
    try {
      subs = JSON.parse(m.subtitles_json || '[]');
    } catch (e) {}
    const finalGenre = (m.genre && m.genre !== 'Movie') ? m.genre : inferMovieGenre(m.clean_title);
    return {
      ...m,
      genre: finalGenre,
      subtitles: subs
    };
  });

  if (genre && genre !== 'All') {
    mapped = mapped.filter(m => m.genre.toLowerCase() === genre.toLowerCase());
  }

  if (artworkStatus === 'missing') {
    mapped = mapped.filter(m => {
      const p = path.join(CONFIG.POSTERS_DIR, `${m.id}_poster.jpg`);
      return !fs.existsSync(p) || m.match_status === 'none';
    });
  } else if (artworkStatus === 'uncertain') {
    mapped = mapped.filter(m => m.match_status === 'uncertain');
  } else if (artworkStatus === 'matched') {
    mapped = mapped.filter(m => m.match_status === 'matched' || m.match_status === 'manual');
  }

  res.json({ movies: mapped });
});

// Infer movie genre dynamically based on title keywords if not explicitly specified
export function inferMovieGenre(title) {
  const t = (title || '').toLowerCase();
  if (/\b(anime|manga|moe|wallpaper|ghibli|animation|naruto|goku|jujutsu|demon|slayer)\b/.test(t)) return 'Anime & Animation';
  if (/\b(horror|annabelle|conjuring|ghost|dead|evil|corpse|zombie|blood|haunted|dracula)\b/.test(t)) return 'Horror & Suspense';
  if (/\b(action|war|blade|fighter|avengers|mission|knight|hunter|strike|combat|speed)\b/.test(t)) return 'Action & Adventure';
  if (/\b(sci-fi|scifi|space|alien|star|cyber|matrix|future|robot|galaxy|quantum)\b/.test(t)) return 'Sci-Fi & Cyber';
  if (/\b(thriller|mystery|crime|detective|dark|shadow|secret|clue|murder)\b/.test(t)) return 'Thriller & Mystery';
  if (/\b(comedy|funny|laugh|humor)\b/.test(t)) return 'Comedy';
  return 'Cinema & Drama';
}

// Get all library genres and counts
router.get('/genres', requireAuth, (req, res) => {
  const db = getDatabase();
  const movies = db.prepare('SELECT id, clean_title, genre FROM movies').all();

  const genreCounts = {};
  movies.forEach(m => {
    const g = (m.genre && m.genre !== 'Movie') ? m.genre : inferMovieGenre(m.clean_title);
    genreCounts[g] = (genreCounts[g] || 0) + 1;
  });

  const genres = Object.entries(genreCounts).map(([name, count]) => ({ name, count }));
  genres.sort((a, b) => b.count - a.count);

  res.json({
    total: movies.length,
    genres: [{ name: 'All', count: movies.length }, ...genres]
  });
});

// Home Page Curated Sections (Hero, Continue Watching, Recently Added, Popular, Favorites, Genre Collections)
router.get('/sections/home', requireAuth, (req, res) => {
  const db = getDatabase();
  const userId = req.user.id;

  // 1. Featured movie
  const allMovies = db.prepare(`
    SELECT m.*, wp.progress_seconds, wp.duration_seconds AS watched_duration,
           CASE WHEN f.id IS NOT NULL THEN 1 ELSE 0 END AS is_favorite
    FROM movies m
    LEFT JOIN watch_progress wp ON wp.movie_id = m.id AND wp.user_id = ?
    LEFT JOIN favorites f ON f.movie_id = m.id AND f.user_id = ?
    ORDER BY m.id DESC
  `).all(userId, userId);

  // Augment movies with inferred genres
  allMovies.forEach(m => {
    if (!m.genre || m.genre === 'Movie') {
      m.genre = inferMovieGenre(m.clean_title);
    }
  });

  const featured = allMovies.find(m => m.clean_title.toLowerCase().includes('demon') || m.clean_title.toLowerCase().includes('corpse')) || allMovies[0] || null;

  // 2. Continue watching
  const continueWatching = db.prepare(`
    SELECT m.*, wp.progress_seconds, wp.duration_seconds AS watched_duration, wp.completed
    FROM watch_progress wp
    JOIN movies m ON m.id = wp.movie_id
    WHERE wp.user_id = ? AND wp.completed = 0 AND wp.progress_seconds > 10
    ORDER BY wp.updated_at DESC
    LIMIT 10
  `).all(userId);
  continueWatching.forEach(m => {
    if (!m.genre || m.genre === 'Movie') m.genre = inferMovieGenre(m.clean_title);
  });

  // 3. Recently added
  const recentlyAdded = allMovies.slice(0, 10);

  // 4. Popular / Most watched
  const popular = db.prepare(`
    SELECT m.*, COUNT(wp.id) as watch_count
    FROM movies m
    LEFT JOIN watch_progress wp ON wp.movie_id = m.id
    GROUP BY m.id
    ORDER BY watch_count DESC, m.id DESC
    LIMIT 10
  `).all();
  popular.forEach(m => {
    if (!m.genre || m.genre === 'Movie') m.genre = inferMovieGenre(m.clean_title);
  });

  // 5. Favorites
  const favorites = db.prepare(`
    SELECT m.*, 1 as is_favorite
    FROM favorites f
    JOIN movies m ON m.id = f.movie_id
    WHERE f.user_id = ?
    ORDER BY f.created_at DESC
    LIMIT 10
  `).all(userId);
  favorites.forEach(m => {
    if (!m.genre || m.genre === 'Movie') m.genre = inferMovieGenre(m.clean_title);
  });

  // 6. Dynamic Genre Collections
  const genreMap = {};
  allMovies.forEach(m => {
    const g = m.genre || 'Cinema & Drama';
    if (!genreMap[g]) genreMap[g] = [];
    genreMap[g].push(m);
  });

  const genreCollections = Object.entries(genreMap)
    .filter(([_, list]) => list.length > 0)
    .map(([genre, list]) => ({ genre, movies: list }));

  res.json({
    featured,
    continueWatching,
    recentlyAdded,
    popular,
    favorites,
    genreCollections
  });
});

// Bulk remove movies from library (preserves files on disk)
router.post('/bulk/remove', requireAuth, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin permission required to manage library' });
  }

  const { movieIds } = req.body;
  if (!Array.isArray(movieIds) || movieIds.length === 0) {
    return res.status(400).json({ error: 'No movie IDs provided' });
  }

  const db = getDatabase();
  const getMovieStmt = db.prepare('SELECT id, file_path, clean_title FROM movies WHERE id = ?');
  const insertIgnoredStmt = db.prepare('INSERT OR REPLACE INTO ignored_movies (file_path, clean_title) VALUES (?, ?)');
  const deleteMovieStmt = db.prepare('DELETE FROM movies WHERE id = ?');

  let removedCount = 0;
  for (const id of movieIds) {
    const movie = getMovieStmt.get(id);
    if (movie) {
      insertIgnoredStmt.run(movie.file_path, movie.clean_title);
      deleteMovieStmt.run(movie.id);

      // Clean up cached poster/backdrop if present
      const cachedPoster = path.join(CONFIG.POSTERS_DIR, `${movie.id}_poster.jpg`);
      if (fs.existsSync(cachedPoster)) {
        try { fs.unlinkSync(cachedPoster); } catch (e) {}
      }
      const cachedBackdrop = path.join(CONFIG.POSTERS_DIR, `${movie.id}_backdrop.jpg`);
      if (fs.existsSync(cachedBackdrop)) {
        try { fs.unlinkSync(cachedBackdrop); } catch (e) {}
      }

      removedCount++;
    }
  }

  addLog(db, 'info', `Bulk removed ${removedCount} movies from library (original files preserved)`);
  res.json({
    success: true,
    removedCount,
    message: `Successfully removed ${removedCount} movie${removedCount !== 1 ? 's' : ''} from library.`
  });
});

// List ignored / removed movies
router.get('/ignored', requireAuth, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin permission required' });
  }
  const db = getDatabase();
  const ignored = db.prepare('SELECT * FROM ignored_movies ORDER BY removed_at DESC').all();
  res.json({ ignored });
});

// Restore movie to library (un-ignore)
router.post('/ignored/:id/restore', requireAuth, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin permission required' });
  }
  const ignoredId = parseInt(req.params.id, 10);
  const db = getDatabase();
  const item = db.prepare('SELECT * FROM ignored_movies WHERE id = ?').get(ignoredId);
  if (!item) {
    return res.status(404).json({ error: 'Ignored movie entry not found' });
  }

  db.prepare('DELETE FROM ignored_movies WHERE id = ?').run(ignoredId);
  addLog(db, 'info', `Movie un-ignored: "${item.clean_title}". It will be re-added on next library scan.`);
  res.json({ success: true, message: `Movie restored. Run "Rescan Library" to re-import it.` });
});

// Remove single movie from library (preserves file on computer, prevents re-adding on rescan)
const handleRemoveFromLibrary = (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin permission required to remove movies' });
  }

  const movieId = parseInt(req.params.id, 10);
  const db = getDatabase();
  const movie = db.prepare('SELECT id, file_path, clean_title FROM movies WHERE id = ?').get(movieId);

  if (!movie) {
    return res.status(404).json({ error: 'Movie not found in library' });
  }

  // Add to ignored_movies so rescan does not re-import it
  db.prepare('INSERT OR REPLACE INTO ignored_movies (file_path, clean_title) VALUES (?, ?)').run(movie.file_path, movie.clean_title);

  // Delete from movies table
  db.prepare('DELETE FROM movies WHERE id = ?').run(movieId);

  // Clean up cached posters
  const cachedPoster = path.join(CONFIG.POSTERS_DIR, `${movieId}_poster.jpg`);
  if (fs.existsSync(cachedPoster)) {
    try { fs.unlinkSync(cachedPoster); } catch (e) {}
  }
  const cachedBackdrop = path.join(CONFIG.POSTERS_DIR, `${movieId}_backdrop.jpg`);
  if (fs.existsSync(cachedBackdrop)) {
    try { fs.unlinkSync(cachedBackdrop); } catch (e) {}
  }

  addLog(db, 'info', `Removed "${movie.clean_title}" from library (file preserved on computer).`);
  res.json({
    success: true,
    message: `"${movie.clean_title}" was removed from your library. The original video file remains safe on your computer.`
  });
};

router.post('/:id/remove', requireAuth, handleRemoveFromLibrary);
router.delete('/:id', requireAuth, handleRemoveFromLibrary);

// Permanent file deletion from computer (requires explicit admin confirmation)
router.post('/:id/delete-file', requireAuth, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin permission required for permanent deletion' });
  }

  const movieId = parseInt(req.params.id, 10);
  const { confirmPermanent, confirmTitle } = req.body;
  const db = getDatabase();

  const movie = db.prepare('SELECT id, file_path, clean_title FROM movies WHERE id = ?').get(movieId);
  if (!movie) {
    return res.status(404).json({ error: 'Movie not found' });
  }

  if (!confirmPermanent && confirmTitle !== movie.clean_title) {
    return res.status(400).json({ error: 'Confirmation required: confirmPermanent flag or matching title required.' });
  }

  // Strict Path Containment Security:
  // Must reside strictly within configured library folder
  const librarySetting = db.prepare("SELECT value FROM settings WHERE key = 'library_folder'").get();
  const configuredFolder = librarySetting?.value;
  if (!configuredFolder) {
    return res.status(400).json({ error: 'No library folder configured on server.' });
  }

  const resolvedFilePath = path.resolve(movie.file_path).toLowerCase();
  const resolvedFolder = path.resolve(configuredFolder).toLowerCase();
  const folderWithSep = resolvedFolder.endsWith(path.sep) ? resolvedFolder : resolvedFolder + path.sep;

  if (!resolvedFilePath.startsWith(folderWithSep)) {
    return res.status(403).json({
      error: 'Security boundary error: Video file path is outside the designated movie library folder. Deletion blocked.'
    });
  }

  // Attempt physical file deletion
  try {
    if (fs.existsSync(movie.file_path)) {
      await fs.promises.unlink(movie.file_path);
    }
  } catch (fileErr) {
    return res.status(500).json({
      error: `Could not delete file from disk (${fileErr.code || fileErr.message}). File may be locked, in use, or read-only.`
    });
  }

  // Remove from database
  db.prepare('DELETE FROM movies WHERE id = ?').run(movieId);
  db.prepare('DELETE FROM ignored_movies WHERE LOWER(file_path) = LOWER(?)').run(movie.file_path);

  // Clean up cached posters
  const cachedPoster = path.join(CONFIG.POSTERS_DIR, `${movieId}_poster.jpg`);
  if (fs.existsSync(cachedPoster)) {
    try { fs.unlinkSync(cachedPoster); } catch (e) {}
  }
  const cachedBackdrop = path.join(CONFIG.POSTERS_DIR, `${movieId}_backdrop.jpg`);
  if (fs.existsSync(cachedBackdrop)) {
    try { fs.unlinkSync(cachedBackdrop); } catch (e) {}
  }

  addLog(db, 'warn', `PERMANENT DELETION: Video file "${movie.file_path}" was deleted from disk by ${req.user.username}.`);
  res.json({
    success: true,
    message: `Video file "${path.basename(movie.file_path)}" was permanently deleted from your disk.`
  });
});

// Movie Details
router.get('/:id', requireAuth, (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const db = getDatabase();
  const userId = req.user.id;

  const movie = db.prepare(`
    SELECT 
      m.*,
      wp.progress_seconds,
      wp.duration_seconds AS watched_duration,
      wp.completed,
      CASE WHEN f.id IS NOT NULL THEN 1 ELSE 0 END AS is_favorite
    FROM movies m
    LEFT JOIN watch_progress wp ON wp.movie_id = m.id AND wp.user_id = ?
    LEFT JOIN favorites f ON f.movie_id = m.id AND f.user_id = ?
    WHERE m.id = ?
  `).get(userId, userId, movieId);

  if (!movie) {
    return res.status(404).json({ error: 'Movie not found' });
  }

  let subtitles = [];
  try {
    subtitles = JSON.parse(movie.subtitles_json || '[]');
  } catch (e) {}

  res.json({
    movie: {
      ...movie,
      subtitles
    }
  });
});

// Stream Movie Video
router.get('/:id/stream', requireAuth, async (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const db = getDatabase();

  const movie = db.prepare('SELECT * FROM movies WHERE id = ?').get(movieId);
  if (!movie) {
    return res.status(404).json({ error: 'Movie not found' });
  }

  await handleStreamRequest(req, res, movie.file_path, movie, req.user);
});

// Stream Subtitle (converted to WebVTT)
router.get('/:id/subtitles/:index', requireAuth, async (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const subIndex = parseInt(req.params.index, 10);
  const db = getDatabase();

  const movie = db.prepare('SELECT subtitles_json FROM movies WHERE id = ?').get(movieId);
  if (!movie) {
    return res.status(404).send('Movie not found');
  }

  let subs = [];
  try {
    subs = JSON.parse(movie.subtitles_json || '[]');
  } catch (e) {}

  if (!subs[subIndex] || !fs.existsSync(subs[subIndex].path)) {
    return res.status(404).send('Subtitle not found');
  }

  try {
    const srtContent = await fs.promises.readFile(subs[subIndex].path, 'utf8');
    const vttContent = convertSrtToVtt(srtContent);

    res.writeHead(200, {
      'Content-Type': 'text/vtt; charset=utf-8',
      'Cache-Control': 'public, max-age=86400'
    });
    res.end(vttContent);
  } catch (err) {
    res.status(500).send('Error loading subtitle');
  }
});

/**
 * Download a remote image and cache it on local disk
 */
async function downloadAndCacheImage(url, destPath) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'StreamLink/1.0' }, signal: AbortSignal.timeout(6000) });
    if (!res.ok) return false;
    const arrayBuffer = await res.arrayBuffer();
    await fs.promises.writeFile(destPath, Buffer.from(arrayBuffer));
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Optional automatic poster lookup via TMDB (never blocks playback)
 */
async function tryTmdbLookup(movieId, title, year) {
  const db = getDatabase();
  const apiKeySetting = db.prepare("SELECT value FROM settings WHERE key = 'tmdb_api_key'").get();
  const apiKey = apiKeySetting?.value || process.env.TMDB_API_KEY;
  if (!apiKey || !apiKey.trim()) return null;

  try {
    let searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${encodeURIComponent(apiKey.trim())}&query=${encodeURIComponent(title.trim())}`;
    if (year) searchUrl += `&year=${encodeURIComponent(year)}`;

    const res = await fetch(searchUrl, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.results || data.results.length === 0) return null;

    const hit = data.results[0];
    const posterPath = hit.poster_path ? `https://image.tmdb.org/t/p/w500${hit.poster_path}` : null;
    const backdropPath = hit.backdrop_path ? `https://image.tmdb.org/t/p/original${hit.backdrop_path}` : null;

    if (posterPath) {
      const destPoster = path.join(CONFIG.POSTERS_DIR, `${movieId}_poster.jpg`);
      await downloadAndCacheImage(posterPath, destPoster);
      db.prepare('UPDATE movies SET poster_url = ? WHERE id = ?').run(destPoster, movieId);
    }

    if (backdropPath) {
      const destBackdrop = path.join(CONFIG.POSTERS_DIR, `${movieId}_backdrop.jpg`);
      await downloadAndCacheImage(backdropPath, destBackdrop);
    }

    return { posterPath, backdropPath };
  } catch (e) {
    return null;
  }
}

// Artwork & Metadata Library Health Status
router.get('/metadata/status', requireAuth, (req, res) => {
  const db = getDatabase();
  const total = db.prepare('SELECT COUNT(*) as cnt FROM movies').get().cnt;
  const matched = db.prepare("SELECT COUNT(*) as cnt FROM movies WHERE match_status IN ('matched', 'manual')").get().cnt;
  const uncertain = db.prepare("SELECT COUNT(*) as cnt FROM movies WHERE match_status = 'uncertain'").get().cnt;
  const missing = db.prepare("SELECT COUNT(*) as cnt FROM movies WHERE match_status = 'none' OR (poster_url = '' AND backdrop_url = '')").get().cnt;
  const apiKey = getTmdbApiKey();

  res.json({
    total,
    matched,
    uncertain,
    missing,
    hasApiKey: Boolean(apiKey)
  });
});

// Batch auto-recognize all movies in library
router.post('/batch/recognize', requireAuth, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin permission required' });
  }
  const apiKey = getTmdbApiKey();
  if (!apiKey) {
    return res.status(400).json({ error: 'No TMDB API key configured. Please enter your API key in Dashboard settings.' });
  }

  const limit = parseInt(req.body.limit, 10) || 30;
  const results = await batchAutoRecognizeLibrary(limit);
  res.json({
    message: `Batch recognition finished. Matched: ${results.matched}, Uncertain: ${results.uncertain}, Skipped/Unmatched: ${results.failed}`,
    results
  });
});

// Search TMDB for movie matches
router.get('/:id/tmdb-search', requireAuth, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin permission required' });
  }
  const movieId = parseInt(req.params.id, 10);
  const db = getDatabase();
  const movie = db.prepare('SELECT clean_title, year FROM movies WHERE id = ?').get(movieId);
  if (!movie) {
    return res.status(404).json({ error: 'Movie not found' });
  }

  const searchTitle = req.query.q || movie.clean_title;
  const searchYear = req.query.year || movie.year || null;

  const result = await searchTmdbMovies(searchTitle, searchYear);
  res.json(result);
});

// Manually apply a selected TMDB match
router.post('/:id/tmdb-match', requireAuth, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin permission required' });
  }
  const movieId = parseInt(req.params.id, 10);
  const { tmdbId } = req.body;
  if (!tmdbId) {
    return res.status(400).json({ error: 'tmdbId is required' });
  }

  const result = await applyManualTmdbMatch(movieId, parseInt(tmdbId, 10));
  if (!result.success) {
    return res.status(400).json({ error: result.error || 'Failed to apply TMDB match' });
  }

  res.json({
    message: 'TMDB match applied successfully',
    movie: result.movie
  });
});

// Force refresh movie metadata and artwork from TMDB
router.post('/:id/refresh-metadata', requireAuth, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin permission required' });
  }
  const movieId = parseInt(req.params.id, 10);
  const result = await autoRecognizeMovie(movieId, true);
  res.json({
    message: result.success ? 'Metadata and artwork refreshed successfully' : (result.message || 'Lookup complete'),
    result
  });
});

// Movie Poster (Local file, cached poster, or cinematic SVG placeholder)
router.get('/:id/poster', async (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const db = getDatabase();

  const movie = db.prepare('SELECT file_path, clean_title, year, resolution, poster_url, match_status FROM movies WHERE id = ?').get(movieId);
  if (!movie) {
    const fallbackSvg = generateMovieSvgPoster('Movie', '', 'HD');
    res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=86400' });
    return res.end(fallbackSvg);
  }

  // 1. Check custom cached poster on disk
  const cachedPoster = path.join(CONFIG.POSTERS_DIR, `${movieId}_poster.jpg`);
  if (fs.existsSync(cachedPoster)) {
    return res.sendFile(cachedPoster);
  }

  // 2. Check movie.poster_url if local path
  if (movie.poster_url && fs.existsSync(movie.poster_url)) {
    return res.sendFile(movie.poster_url);
  }

  // 3. Check for real local image file next to movie on disk
  const localArt = findLocalArtwork(movie.file_path, 'poster');
  if (localArt) {
    return res.sendFile(localArt);
  }

  // 4. Auto-extract video frame from movie file using FFmpeg
  if (movie.file_path && fs.existsSync(movie.file_path)) {
    const extracted = await extractVideoFrame(movie.file_path, cachedPoster, 2);
    if (extracted && fs.existsSync(cachedPoster)) {
      return res.sendFile(cachedPoster);
    }
  }

  // 5. Fallback to clean studio cinematic SVG placeholder
  const svg = generateMovieSvgPoster(movie.clean_title, movie.year, movie.resolution);
  res.writeHead(200, {
    'Content-Type': 'image/svg+xml',
    'Cache-Control': 'public, max-age=86400'
  });
  res.end(svg);
});

// Manually assign or replace a movie poster
router.post('/:id/poster', requireAuth, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin permission required' });
  }
  const movieId = parseInt(req.params.id, 10);
  const { posterUrl } = req.body;
  const db = getDatabase();

  const movie = db.prepare('SELECT id, file_path, clean_title FROM movies WHERE id = ?').get(movieId);
  if (!movie) {
    return res.status(404).json({ error: 'Movie not found' });
  }

  if (!posterUrl || !posterUrl.trim()) {
    return res.status(400).json({ error: 'Poster URL is required' });
  }

  const cleanUrl = posterUrl.trim();
  const destPoster = path.join(CONFIG.POSTERS_DIR, `${movieId}_poster.jpg`);

  try {
    if (cleanUrl.startsWith('http://') || cleanUrl.startsWith('https://')) {
      const ok = await downloadAndCacheArtwork(cleanUrl, destPoster, true);
      if (!ok) {
        return res.status(400).json({ error: 'Unable to download image from the provided URL' });
      }
      db.prepare("UPDATE movies SET poster_url = ?, match_status = CASE WHEN match_status = 'none' THEN 'manual' ELSE match_status END WHERE id = ?").run(destPoster, movieId);
    } else if (fs.existsSync(cleanUrl)) {
      await fs.promises.copyFile(cleanUrl, destPoster);
      db.prepare("UPDATE movies SET poster_url = ?, match_status = CASE WHEN match_status = 'none' THEN 'manual' ELSE match_status END WHERE id = ?").run(destPoster, movieId);
    } else {
      return res.status(400).json({ error: 'Invalid URL or local file path not found' });
    }

    res.json({
      message: 'Poster updated successfully',
      posterUrl: `/api/movies/${movieId}/poster?t=${Date.now()}`
    });
  } catch (err) {
    res.status(500).json({ error: `Failed to update poster: ${err.message}` });
  }
});

// Manually assign or replace a movie backdrop
router.post('/:id/backdrop', requireAuth, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin permission required' });
  }
  const movieId = parseInt(req.params.id, 10);
  const { backdropUrl } = req.body;
  const db = getDatabase();

  const movie = db.prepare('SELECT id, file_path, clean_title FROM movies WHERE id = ?').get(movieId);
  if (!movie) {
    return res.status(404).json({ error: 'Movie not found' });
  }

  if (!backdropUrl || !backdropUrl.trim()) {
    return res.status(400).json({ error: 'Backdrop URL is required' });
  }

  const cleanUrl = backdropUrl.trim();
  const destBackdrop = path.join(CONFIG.BACKDROPS_DIR, `${movieId}_backdrop.jpg`);

  try {
    if (cleanUrl.startsWith('http://') || cleanUrl.startsWith('https://')) {
      const ok = await downloadAndCacheArtwork(cleanUrl, destBackdrop, true);
      if (!ok) {
        return res.status(400).json({ error: 'Unable to download image from the provided URL' });
      }
      db.prepare("UPDATE movies SET backdrop_url = ? WHERE id = ?").run(destBackdrop, movieId);
    } else if (fs.existsSync(cleanUrl)) {
      await fs.promises.copyFile(cleanUrl, destBackdrop);
      db.prepare("UPDATE movies SET backdrop_url = ? WHERE id = ?").run(destBackdrop, movieId);
    } else {
      return res.status(400).json({ error: 'Invalid URL or local file path not found' });
    }

    res.json({
      message: 'Backdrop updated successfully',
      backdropUrl: `/api/movies/${movieId}/backdrop?t=${Date.now()}`
    });
  } catch (err) {
    res.status(500).json({ error: `Failed to update backdrop: ${err.message}` });
  }
});

// Movie 16:9 Widescreen Backdrop (Local image, cached backdrop, or cinematic SVG)
router.get('/:id/backdrop', async (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const db = getDatabase();

  const movie = db.prepare('SELECT file_path, clean_title, year, resolution, backdrop_url FROM movies WHERE id = ?').get(movieId);
  if (!movie) {
    const fallbackSvg = generateMovieSvgBackdrop('Movie', '', 'HD');
    res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=86400' });
    return res.end(fallbackSvg);
  }

  // 1. Check cached backdrop in BACKDROPS_DIR
  const cachedBackdrop = path.join(CONFIG.BACKDROPS_DIR, `${movieId}_backdrop.jpg`);
  if (fs.existsSync(cachedBackdrop)) {
    return res.sendFile(cachedBackdrop);
  }

  // 2. Check legacy cached backdrop in POSTERS_DIR
  const legacyBackdrop = path.join(CONFIG.POSTERS_DIR, `${movieId}_backdrop.jpg`);
  if (fs.existsSync(legacyBackdrop)) {
    return res.sendFile(legacyBackdrop);
  }

  // 3. Check movie.backdrop_url if local path
  if (movie.backdrop_url && fs.existsSync(movie.backdrop_url)) {
    return res.sendFile(movie.backdrop_url);
  }

  // 4. Check for local backdrop in movie folder
  const localArt = findLocalArtwork(movie.file_path, 'backdrop');
  if (localArt) {
    return res.sendFile(localArt);
  }

  // 5. Auto-extract video frame from movie file using FFmpeg
  if (movie.file_path && fs.existsSync(movie.file_path)) {
    const extracted = await extractVideoFrame(movie.file_path, cachedBackdrop, 4);
    if (extracted && fs.existsSync(cachedBackdrop)) {
      return res.sendFile(cachedBackdrop);
    }
  }

  // 6. Fallback to widescreen SVG backdrop
  const svg = generateMovieSvgBackdrop(movie.clean_title, movie.year, movie.resolution);
  res.writeHead(200, {
    'Content-Type': 'image/svg+xml',
    'Cache-Control': 'public, max-age=86400'
  });
  res.end(svg);
});

// Recommendations (similar movies by year or resolution)
router.get('/recommendations/:id', requireAuth, (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const db = getDatabase();

  const movie = db.prepare('SELECT clean_title, year, resolution FROM movies WHERE id = ?').get(movieId);
  if (!movie) {
    return res.status(404).json({ error: 'Movie not found' });
  }

  const recommendations = db.prepare(`
    SELECT id, clean_title, year, resolution, duration, file_size
    FROM movies
    WHERE id != ?
    ORDER BY (CASE WHEN year = ? THEN 2 ELSE 0 END) + (CASE WHEN resolution = ? THEN 1 ELSE 0 END) DESC, id DESC
    LIMIT 6
  `).all(movieId, movie.year || '', movie.resolution || '1080P');

  res.json({ recommendations });
});

export default router;
