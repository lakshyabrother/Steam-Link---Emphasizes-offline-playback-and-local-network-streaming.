import express from 'express';
import fs from 'fs';
import path from 'path';
import { getDatabase, addLog } from '../database.js';
import { requireAuth } from '../auth.js';
import { handleStreamRequest, convertSrtToVtt } from '../streamer.js';
import { CONFIG } from '../config.js';

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
 * Generate a premium CINEFLOW Midnight SVG poster (Velvet OTT palette & Bato curves)
 */
function generateMovieSvgPoster(title, year, resolution) {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  const cleanDisplayTitle = title.length > 28 ? title.substring(0, 26) + '...' : title;
  const safeRes = (resolution || '1080P').toUpperCase();
  const safeYear = year ? String(year) : '';

  // Palette: Velvet OTT Midnight (#080B14, #101626, #151D30, #8B7CFF, #38BDF8)
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="450" viewBox="0 0 300 450">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#151D30" />
          <stop offset="40%" stop-color="#101626" />
          <stop offset="100%" stop-color="#080B14" />
        </linearGradient>
        <radialGradient id="violetGlow" cx="30%" cy="25%" r="65%">
          <stop offset="0%" stop-color="#8B7CFF" stop-opacity="0.35" />
          <stop offset="60%" stop-color="#6366F1" stop-opacity="0.08" />
          <stop offset="100%" stop-color="#080B14" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="cyanGlow" cx="80%" cy="75%" r="55%">
          <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.25" />
          <stop offset="100%" stop-color="#080B14" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#8B7CFF" />
          <stop offset="100%" stop-color="#38BDF8" />
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Background Canvas with Moderately Rounded Corners -->
      <rect width="300" height="450" rx="8" fill="url(#bg)"/>
      <rect width="300" height="450" rx="8" fill="url(#violetGlow)"/>
      <rect width="300" height="450" rx="8" fill="url(#cyanGlow)"/>

      <!-- Ambient Geometric Studio Grid Lines -->
      <line x1="24" y1="90" x2="276" y2="90" stroke="rgba(139,124,255,0.08)" stroke-width="1"/>
      <line x1="24" y1="330" x2="276" y2="330" stroke="rgba(56,189,248,0.08)" stroke-width="1"/>

      <!-- Stylized Cinema Aperture Graphic -->
      <circle cx="150" cy="195" r="54" fill="none" stroke="rgba(139,124,255,0.18)" stroke-width="2"/>
      <circle cx="150" cy="195" r="44" fill="rgba(16,22,38,0.7)" stroke="rgba(56,189,248,0.22)" stroke-width="1.5"/>
      <polygon points="144,180 164,195 144,210" fill="url(#accentGrad)" filter="url(#shadow)"/>

      <!-- Top Badges Row (Refined 4px radius) -->
      <rect x="20" y="20" width="56" height="22" rx="4" fill="rgba(16,22,38,0.85)" stroke="rgba(56,189,248,0.3)" stroke-width="1"/>
      <text x="48" y="35" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="10" font-weight="700" fill="#38BDF8" letter-spacing="0.5" text-anchor="middle">${safeRes}</text>

      ${safeYear ? `
        <rect x="224" y="20" width="56" height="22" rx="4" fill="rgba(16,22,38,0.85)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
        <text x="252" y="35" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="10" font-weight="600" fill="#CBD5E1" text-anchor="middle">${safeYear}</text>
      ` : ''}

      <!-- Bottom Film Title Plaque -->
      <rect x="0" y="320" width="300" height="130" fill="url(#bg)" opacity="0.94"/>
      <rect x="20" y="324" width="28" height="2.5" rx="1.25" fill="url(#accentGrad)"/>
      <text x="20" y="366" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="800" fill="#F8FAFC">${cleanDisplayTitle}</text>
      <text x="20" y="392" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="11" font-weight="600" fill="#94A3B8">STREAMLINK CINEMA</text>
      <text x="20" y="412" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="10" fill="#64748B">Direct Host Workstation Stream</text>
    </svg>
  `.trim();
}

/**
 * Generate 16:9 Widescreen Backdrop SVG (1280x720) for Hero & Player banners
 */
function generateMovieSvgBackdrop(title, year, resolution) {
  const cleanDisplayTitle = title.length > 40 ? title.substring(0, 38) + '...' : title;
  const safeRes = (resolution || '1080P').toUpperCase();
  const safeYear = year ? String(year) : '';

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
      <defs>
        <linearGradient id="bgH" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#151D30" />
          <stop offset="45%" stop-color="#101626" />
          <stop offset="100%" stop-color="#080B14" />
        </linearGradient>
        <radialGradient id="heroViolet" cx="20%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#8B7CFF" stop-opacity="0.32" />
          <stop offset="70%" stop-color="#6366F1" stop-opacity="0.04" />
          <stop offset="100%" stop-color="#080B14" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="heroCyan" cx="75%" cy="65%" r="60%">
          <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.22" />
          <stop offset="100%" stop-color="#080B14" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#F8FAFC" />
          <stop offset="100%" stop-color="#CBD5E1" />
        </linearGradient>
        <linearGradient id="heroAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#8B7CFF" />
          <stop offset="100%" stop-color="#38BDF8" />
        </linearGradient>
      </defs>

      <rect width="1280" height="720" fill="url(#bgH)"/>
      <rect width="1280" height="720" fill="url(#heroViolet)"/>
      <rect width="1280" height="720" fill="url(#heroCyan)"/>

      <!-- Ambient Cinema Waves / Geometry -->
      <circle cx="880" cy="360" r="280" fill="none" stroke="rgba(139,124,255,0.06)" stroke-width="2"/>
      <circle cx="880" cy="360" r="190" fill="none" stroke="rgba(56,189,248,0.08)" stroke-width="1.5"/>
      <circle cx="880" cy="360" r="100" fill="none" stroke="rgba(139,124,255,0.12)" stroke-width="1"/>

      <!-- Vignette Overlay -->
      <rect width="1280" height="720" fill="url(#bgH)" opacity="0.35"/>

      <!-- Text / Branding Overlay -->
      <rect x="80" y="390" width="48" height="4" rx="2" fill="url(#heroAccent)"/>
      <text x="80" y="440" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="42" font-weight="900" fill="url(#titleGrad)">${cleanDisplayTitle}</text>
      <text x="80" y="480" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" font-size="16" font-weight="700" fill="#8B7CFF" letter-spacing="1.5">STREAMLINK PERSONAL CINEMA • ${safeRes}${safeYear ? ` • ${safeYear}` : ''}</text>
    </svg>
  `.trim();
}

// List Movies with search, filter, and sorting
router.get('/', requireAuth, (req, res) => {
  const { q, year, resolution, sort } = req.query;
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

  // Parse subtitles_json safely for client
  const mapped = movies.map(m => {
    let subs = [];
    try {
      subs = JSON.parse(m.subtitles_json || '[]');
    } catch (e) {}
    return {
      ...m,
      subtitles: subs
    };
  });

  res.json({ movies: mapped });
});

// Home Page Curated Sections (Hero, Continue Watching, Recently Added, Popular, Favorites)
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

  // 5. Favorites
  const favorites = db.prepare(`
    SELECT m.*, 1 as is_favorite
    FROM favorites f
    JOIN movies m ON m.id = f.movie_id
    WHERE f.user_id = ?
    ORDER BY f.created_at DESC
    LIMIT 10
  `).all(userId);

  res.json({
    featured,
    continueWatching,
    recentlyAdded,
    popular,
    favorites
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

// Movie Poster (Local file, cached poster, or cinematic SVG placeholder)
router.get('/:id/poster', async (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const db = getDatabase();

  const movie = db.prepare('SELECT file_path, clean_title, year, resolution, poster_url FROM movies WHERE id = ?').get(movieId);
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

  // 4. Fallback to clean studio cinematic SVG placeholder
  const svg = generateMovieSvgPoster(movie.clean_title, movie.year, movie.resolution);
  res.writeHead(200, {
    'Content-Type': 'image/svg+xml',
    'Cache-Control': 'public, max-age=86400'
  });
  res.end(svg);
});

// Manually assign or replace a movie poster
router.post('/:id/poster', requireAuth, async (req, res) => {
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
      const ok = await downloadAndCacheImage(cleanUrl, destPoster);
      if (!ok) {
        return res.status(400).json({ error: 'Unable to download image from the provided URL' });
      }
      db.prepare('UPDATE movies SET poster_url = ? WHERE id = ?').run(destPoster, movieId);
    } else if (fs.existsSync(cleanUrl)) {
      await fs.promises.copyFile(cleanUrl, destPoster);
      db.prepare('UPDATE movies SET poster_url = ? WHERE id = ?').run(destPoster, movieId);
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

// Movie 16:9 Widescreen Backdrop (Local image, cached backdrop, or cinematic SVG)
router.get('/:id/backdrop', (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const db = getDatabase();

  const movie = db.prepare('SELECT file_path, clean_title, year, resolution FROM movies WHERE id = ?').get(movieId);
  if (!movie) {
    const fallbackSvg = generateMovieSvgBackdrop('Movie', '', 'HD');
    res.writeHead(200, { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=86400' });
    return res.end(fallbackSvg);
  }

  // 1. Check cached backdrop on disk
  const cachedBackdrop = path.join(CONFIG.POSTERS_DIR, `${movieId}_backdrop.jpg`);
  if (fs.existsSync(cachedBackdrop)) {
    return res.sendFile(cachedBackdrop);
  }

  // 2. Check for local backdrop in movie folder
  const localArt = findLocalArtwork(movie.file_path, 'backdrop');
  if (localArt) {
    return res.sendFile(localArt);
  }

  // 3. Fallback to widescreen SVG backdrop
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
