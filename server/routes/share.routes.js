import express from 'express';
import crypto from 'crypto';
import os from 'os';
import fs from 'fs';
import path from 'path';
import QRCode from 'qrcode';
import { getDatabase, addLog } from '../database.js';
import { requireAdmin } from '../auth.js';
import { tunnelState, getCloudflaredPath } from '../tunnel.js';
import { CONFIG } from '../config.js';
import { handleStreamRequest, convertSrtToVtt } from '../streamer.js';
import { scanDirectoryRecursively, parseMovieFilename, findSubtitles } from '../scanner.js';

const router = express.Router();

/**
 * Path containment security check:
 * Ensures filePath is strictly inside folderPath (resolves relative traversal like ..)
 */
export function isPathInsideFolder(filePath, folderPath) {
  if (!filePath || !folderPath) return false;
  const resolvedFile = path.resolve(filePath).toLowerCase();
  const resolvedFolder = path.resolve(folderPath).toLowerCase();
  const folderWithSep = resolvedFolder.endsWith(path.sep) ? resolvedFolder : resolvedFolder + path.sep;
  return resolvedFile.startsWith(folderWithSep) || resolvedFile === resolvedFolder;
}

// Helper to get local network IPv4
export function getLocalIpAddress() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return '127.0.0.1';
}

/**
 * Helper to build all URL variants for a share token
 */
export function buildUrlsForToken(token) {
  const localIp = getLocalIpAddress();
  const localUrl = `http://${localIp}:${CONFIG.PORT}/?share=${token}`;
  const localPathUrl = `http://${localIp}:${CONFIG.PORT}/share/${token}`;

  const remoteBase = tunnelState.publicUrl || null;
  const remoteUrl = remoteBase ? `${remoteBase}/?share=${token}` : null;
  const remotePathUrl = remoteBase ? `${remoteBase}/share/${token}` : null;

  // Active URL prefers remote if tunnel is online, else local LAN
  const activeUrl = remoteUrl || localUrl;

  return {
    localUrl,
    localPathUrl,
    remoteUrl,
    remotePathUrl,
    activeUrl,
    isRemote: !!remoteUrl
  };
}

/**
 * Scan a specific folder recursively and index its movies into DB if not present
 */
export async function scanAndIndexFolder(folderPath) {
  const db = getDatabase();
  const normalizedFolder = path.resolve(folderPath);

  if (!fs.existsSync(normalizedFolder)) {
    throw new Error(`Directory does not exist on host PC: ${normalizedFolder}`);
  }

  const stat = await fs.promises.stat(normalizedFolder);
  if (!stat.isDirectory()) {
    throw new Error(`Path is not a directory: ${normalizedFolder}`);
  }

  const videoPaths = await scanDirectoryRecursively(normalizedFolder);
  const folderMovies = [];
  let totalDiskBytes = 0;

  for (const filePath of videoPaths) {
    const normPath = path.resolve(filePath);
    const fileName = path.basename(filePath);
    const ext = path.extname(filePath).toLowerCase();

    try {
      const stats = await fs.promises.stat(normPath);
      totalDiskBytes += stats.size;
      let existing = db.prepare('SELECT * FROM movies WHERE file_path = ?').get(normPath);

      if (!existing) {
        const parsed = parseMovieFilename(fileName);
        const subtitles = await findSubtitles(normPath);

        const insert = db.prepare(`
          INSERT INTO movies (
            title, clean_title, file_path, file_name, file_size, file_extension,
            resolution, codec, year, subtitles_json, duration
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        const res = insert.run(
          parsed.cleanTitle,
          parsed.cleanTitle,
          normPath,
          fileName,
          stats.size,
          ext,
          parsed.resolution || 'HD',
          parsed.codec || 'H264',
          parsed.year || '',
          JSON.stringify(subtitles || []),
          0
        );

        existing = {
          id: res.lastInsertRowid,
          clean_title: parsed.cleanTitle,
          title: parsed.cleanTitle,
          year: parsed.year,
          resolution: parsed.resolution || 'HD',
          duration: 0,
          file_size: stats.size,
          file_name: fileName,
          file_path: normPath,
          subtitles_json: JSON.stringify(subtitles || [])
        };
      }

      folderMovies.push({
        id: existing.id,
        clean_title: existing.clean_title,
        title: existing.title,
        year: existing.year,
        resolution: existing.resolution,
        duration: existing.duration,
        file_size: existing.file_size,
        file_name: existing.file_name
      });
    } catch (e) {
      // skip unreadable file
    }
  }

  return {
    folderPath: normalizedFolder,
    folderName: path.basename(normalizedFolder) || normalizedFolder,
    movieCount: folderMovies.length,
    totalBytes: totalDiskBytes,
    movies: folderMovies
  };
}

/**
 * SECTION A & B: Local & Remote Network Info
 */
router.get('/info', async (req, res) => {
  const localIp = getLocalIpAddress();
  const localUrl = `http://${localIp}:${CONFIG.PORT}`;
  const publicUrl = tunnelState.publicUrl || null;

  const cloudflaredPath = getCloudflaredPath();
  const isCloudflaredInstalled = fs.existsSync(cloudflaredPath) || cloudflaredPath === 'cloudflared';

  let localQr = '';
  let publicQr = '';

  try {
    localQr = await QRCode.toDataURL(localUrl, { width: 220, margin: 2 });
    if (publicUrl) {
      publicQr = await QRCode.toDataURL(publicUrl, { width: 220, margin: 2 });
    }
  } catch (e) {}

  res.json({
    local: {
      ip: localIp,
      port: CONFIG.PORT,
      url: localUrl,
      qrCode: localQr
    },
    remote: {
      cloudflaredInstalled: isCloudflaredInstalled,
      cloudflaredPath: isCloudflaredInstalled ? cloudflaredPath : null,
      status: tunnelState.status,
      publicUrl: publicUrl,
      qrCode: publicQr,
      errorMessage: tunnelState.errorMessage
    }
  });
});

/**
 * List active share links (Admin only)
 */
router.get('/links', requireAdmin, (req, res) => {
  const db = getDatabase();
  const links = db.prepare(`
    SELECT 
      sl.*,
      m.clean_title as movie_title
    FROM share_links sl
    LEFT JOIN movies m ON m.id = sl.movie_id
    WHERE sl.is_active = 1
    ORDER BY sl.created_at DESC
  `).all();

  res.json({ links });
});

/**
 * Generate a new share link (Admin only)
 */
router.post('/generate', requireAdmin, (req, res) => {
  const { type = 'library', movieId = null, passcode = '', label = '' } = req.body;
  const db = getDatabase();

  const token = crypto.randomBytes(8).toString('hex');
  const cleanPasscode = String(passcode || '').trim();
  const cleanLabel = String(label || '').trim() || (type === 'movie' ? 'Movie Access Link' : 'Full Library Link');

  const result = db.prepare(`
    INSERT INTO share_links (token, type, movie_id, passcode, label)
    VALUES (?, ?, ?, ?, ?)
  `).run(token, type, movieId || null, cleanPasscode, cleanLabel);

  addLog(db, 'info', `Generated share link (${type}): ${token}`);

  res.status(201).json({
    message: 'Share link generated successfully',
    link: {
      id: result.lastInsertRowid,
      token,
      type,
      movieId,
      hasPasscode: !!cleanPasscode,
      label: cleanLabel
    }
  });
});

/**
 * Revoke a share link (Admin only)
 */
router.post('/revoke/:id', requireAdmin, (req, res) => {
  const linkId = parseInt(req.params.id, 10);
  const db = getDatabase();

  db.prepare('UPDATE share_links SET is_active = 0 WHERE id = ?').run(linkId);
  addLog(db, 'info', `Revoked share link ID: ${linkId}`);

  res.json({ message: 'Share link revoked successfully' });
});

// ==========================================
// DEDICATED FOLDER SHARING ENDPOINTS (ADMIN)
// ==========================================

/**
 * Scan a specific folder for movies and preview results
 */
router.post('/folder/scan', requireAdmin, async (req, res) => {
  const { folderPath } = req.body;
  if (!folderPath) {
    return res.status(400).json({ error: 'Folder path is required' });
  }

  try {
    const result = await scanAndIndexFolder(folderPath);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * Generate a unique sharing link for a specific folder
 */
router.post('/folder/generate', requireAdmin, async (req, res) => {
  const { folderPath, folderName = '', label = '', passcode = '' } = req.body;

  if (!folderPath) {
    return res.status(400).json({ error: 'Folder path is required' });
  }

  const resolvedFolder = path.resolve(folderPath);
  if (!fs.existsSync(resolvedFolder)) {
    return res.status(400).json({ error: `Folder does not exist on host PC: ${resolvedFolder}` });
  }

  const db = getDatabase();

  try {
    // Scan and index movies in this specific folder
    const scanData = await scanAndIndexFolder(resolvedFolder);

    const token = crypto.randomBytes(12).toString('hex');
    const cleanFolderName = folderName.trim() || path.basename(resolvedFolder) || 'Shared Folder';
    const cleanLabel = label.trim() || `${cleanFolderName} Shared Folder`;
    const cleanPasscode = String(passcode || '').trim();

    const insert = db.prepare(`
      INSERT INTO share_links (
        token, type, folder_path, folder_name, label, passcode, movie_count, is_active
      ) VALUES (?, 'folder', ?, ?, ?, ?, ?, 1)
    `);

    const result = insert.run(
      token,
      resolvedFolder,
      cleanFolderName,
      cleanLabel,
      cleanPasscode,
      scanData.movieCount
    );

    const urls = buildUrlsForToken(token);
    let qrCode = '';
    try {
      qrCode = await QRCode.toDataURL(urls.activeUrl, { width: 220, margin: 2 });
    } catch (e) {}

    addLog(db, 'info', `Created Folder Share [${cleanFolderName}] (${scanData.movieCount} movies) -> Token: ${token}`);

    res.status(201).json({
      message: 'Folder sharing link created successfully',
      link: {
        id: result.lastInsertRowid,
        token,
        type: 'folder',
        folder_path: resolvedFolder,
        folder_name: cleanFolderName,
        label: cleanLabel,
        hasPasscode: !!cleanPasscode,
        movie_count: scanData.movieCount,
        is_active: 1,
        ...urls,
        qrCode
      }
    });
  } catch (err) {
    res.status(500).json({ error: `Failed to generate folder share link: ${err.message}` });
  }
});

/**
 * List all shared folders
 */
router.get('/folder/links', requireAdmin, async (req, res) => {
  const db = getDatabase();
  const rows = db.prepare(`
    SELECT * FROM share_links
    WHERE type = 'folder'
    ORDER BY created_at DESC
  `).all();

  const links = rows.map(r => {
    const urls = buildUrlsForToken(r.token);
    return {
      id: r.id,
      token: r.token,
      type: r.type,
      folder_path: r.folder_path,
      folder_name: r.folder_name,
      label: r.label,
      movie_count: r.movie_count,
      hasPasscode: !!r.passcode,
      is_active: r.is_active,
      access_count: r.access_count,
      created_at: r.created_at,
      ...urls
    };
  });

  res.json({ links });
});

/**
 * Toggle active status (Enable / Disable sharing) for a folder share link
 */
router.post('/folder/toggle/:id', requireAdmin, (req, res) => {
  const linkId = parseInt(req.params.id, 10);
  const db = getDatabase();

  const current = db.prepare('SELECT is_active FROM share_links WHERE id = ?').get(linkId);
  if (!current) {
    return res.status(404).json({ error: 'Share link not found' });
  }

  const newStatus = current.is_active === 1 ? 0 : 1;
  db.prepare('UPDATE share_links SET is_active = ? WHERE id = ?').run(newStatus, linkId);
  addLog(db, 'info', `Toggled folder share ID ${linkId} active status to ${newStatus}`);

  res.json({
    message: newStatus === 1 ? 'Folder sharing enabled' : 'Folder sharing disabled',
    isActive: newStatus
  });
});

/**
 * Delete / Revoke a folder share link
 */
router.delete('/folder/:id', requireAdmin, (req, res) => {
  const linkId = parseInt(req.params.id, 10);
  const db = getDatabase();

  db.prepare('DELETE FROM share_links WHERE id = ?').run(linkId);
  addLog(db, 'info', `Deleted folder share ID ${linkId}`);

  res.json({ message: 'Folder share link deleted successfully' });
});

router.post('/folder/delete/:id', requireAdmin, (req, res) => {
  const linkId = parseInt(req.params.id, 10);
  const db = getDatabase();

  db.prepare('DELETE FROM share_links WHERE id = ?').run(linkId);
  addLog(db, 'info', `Deleted folder share ID ${linkId}`);

  res.json({ message: 'Folder share link deleted successfully' });
});

/**
 * Rescan a shared folder on disk and update its movie count
 */
router.post('/folder/rescan/:id', requireAdmin, async (req, res) => {
  const linkId = parseInt(req.params.id, 10);
  const db = getDatabase();

  const link = db.prepare('SELECT * FROM share_links WHERE id = ?').get(linkId);
  if (!link || link.type !== 'folder') {
    return res.status(404).json({ error: 'Folder share link not found' });
  }

  try {
    const scanData = await scanAndIndexFolder(link.folder_path);
    db.prepare('UPDATE share_links SET movie_count = ? WHERE id = ?').run(scanData.movieCount, linkId);

    res.json({
      message: `Rescan complete: ${scanData.movieCount} movies found in folder`,
      movieCount: scanData.movieCount,
      movies: scanData.movies
    });
  } catch (err) {
    res.status(500).json({ error: `Rescan failed: ${err.message}` });
  }
});

// ==========================================
// PUBLIC VIEWER ENDPOINTS (NO ADMIN ACCESS)
// ==========================================

/**
 * Validate share token and return authorized movie(s)
 */
router.post('/public/access', (req, res) => {
  const { token, passcode = '' } = req.body;
  if (!token) {
    return res.status(400).json({ error: 'Share token is required' });
  }

  const db = getDatabase();
  const link = db.prepare('SELECT * FROM share_links WHERE token = ? AND is_active = 1').get(token);

  if (!link) {
    return res.status(404).json({ error: 'This sharing link is invalid, disabled, or has been revoked by the host.' });
  }

  // Check passcode if protected
  if (link.passcode && link.passcode !== String(passcode).trim()) {
    return res.status(401).json({
      error: 'Passcode required to access this movie stream',
      requiresPasscode: true
    });
  }

  // Update access counter
  db.prepare('UPDATE share_links SET access_count = access_count + 1 WHERE id = ?').run(link.id);

  // CASE 1: Individual single movie share
  if (link.type === 'movie' && link.movie_id) {
    const movie = db.prepare(`
      SELECT id, clean_title, year, resolution, duration, file_size, description, subtitles_json
      FROM movies
      WHERE id = ?
    `).get(link.movie_id);

    if (!movie) {
      return res.status(404).json({ error: 'Movie is no longer in the library' });
    }

    let subtitles = [];
    try {
      subtitles = JSON.parse(movie.subtitles_json || '[]');
    } catch (e) {}

    return res.json({
      type: 'movie',
      movie: {
        ...movie,
        subtitles
      }
    });
  }

  // CASE 2: Specific Shared Folder
  // STRICT SECURITY: Only movies inside link.folder_path are returned!
  if (link.type === 'folder' && link.folder_path) {
    const resolvedFolder = path.resolve(link.folder_path);

    if (!fs.existsSync(resolvedFolder)) {
      return res.status(404).json({ error: 'The shared folder is currently not available on the host PC.' });
    }

    // Query all movies and strictly filter for those within this exact folder
    const allMovies = db.prepare(`
      SELECT id, clean_title, title, year, resolution, duration, file_size, description, subtitles_json, file_path
      FROM movies
      ORDER BY clean_title ASC
    `).all();

    const allowedMovies = allMovies.filter(m => {
      if (!m.file_path) return false;
      return isPathInsideFolder(m.file_path, resolvedFolder);
    });

    // Sanitized output: NEVER expose file_path to the viewer!
    const sanitized = allowedMovies.map(m => {
      let subs = [];
      try {
        subs = JSON.parse(m.subtitles_json || '[]');
      } catch (e) {}
      return {
        id: m.id,
        clean_title: m.clean_title,
        title: m.title,
        year: m.year,
        resolution: m.resolution,
        duration: m.duration,
        file_size: m.file_size,
        description: m.description,
        subtitles: subs
      };
    });

    return res.json({
      type: 'folder',
      folderName: link.folder_name || path.basename(resolvedFolder) || 'Shared Folder',
      label: link.label,
      totalMovies: sanitized.length,
      movies: sanitized
    });
  }

  // CASE 3: Full library share: return all movies without exposing internal disk paths
  const movies = db.prepare(`
    SELECT id, clean_title, year, resolution, duration, file_size, description, subtitles_json
    FROM movies
    ORDER BY id DESC
  `).all();

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

  return res.json({
    type: 'library',
    movies: mapped
  });
});

/**
 * Public stream endpoint for authorized share link viewers
 */
router.get('/public/stream/:token/:movieId', async (req, res) => {
  const { token, movieId } = req.params;
  const db = getDatabase();

  const link = db.prepare('SELECT * FROM share_links WHERE token = ? AND is_active = 1').get(token);
  if (!link) {
    return res.status(403).send('Invalid or disabled sharing link');
  }

  const targetMovieId = parseInt(movieId, 10);
  if (isNaN(targetMovieId)) {
    return res.status(400).send('Invalid movie ID');
  }

  if (link.type === 'movie' && link.movie_id !== targetMovieId) {
    return res.status(403).send('Unauthorized movie stream');
  }

  const movie = db.prepare('SELECT * FROM movies WHERE id = ?').get(targetMovieId);
  if (!movie) {
    return res.status(404).send('Movie not found');
  }

  // STRICT SECURITY CHECK FOR FOLDER SHARE:
  // File must reside strictly inside the shared folder path!
  if (link.type === 'folder') {
    if (!link.folder_path || !isPathInsideFolder(movie.file_path, link.folder_path)) {
      addLog(db, 'warning', `Forbidden stream attempt for movie outside shared folder. Token: ${token}, Path: ${movie.file_path}`);
      return res.status(403).send('Forbidden: Requested movie is outside the authorized shared folder.');
    }
  }

  if (!fs.existsSync(movie.file_path)) {
    return res.status(404).send('Movie file not found on host PC');
  }

  const viewerUser = {
    id: `guest_${link.token}`,
    username: `Viewer (${link.label || link.folder_name || 'Guest'})`
  };

  await handleStreamRequest(req, res, movie.file_path, movie, viewerUser);
});

/**
 * Public subtitle endpoint for authorized share link viewers
 */
router.get('/public/subtitles/:token/:movieId/:index', async (req, res) => {
  const { token, movieId, index } = req.params;
  const db = getDatabase();

  const link = db.prepare('SELECT * FROM share_links WHERE token = ? AND is_active = 1').get(token);
  if (!link) return res.status(403).send('Invalid sharing link');

  const movie = db.prepare('SELECT subtitles_json, file_path FROM movies WHERE id = ?').get(parseInt(movieId, 10));
  if (!movie) return res.status(404).send('Movie not found');

  if (link.type === 'folder') {
    if (!link.folder_path || !isPathInsideFolder(movie.file_path, link.folder_path)) {
      return res.status(403).send('Forbidden');
    }
  }

  let subs = [];
  try {
    subs = JSON.parse(movie.subtitles_json || '[]');
  } catch (e) {}

  const sub = subs[parseInt(index, 10)];
  if (!sub || !fs.existsSync(sub.path)) {
    return res.status(404).send('Subtitle not found');
  }

  try {
    const srt = await fs.promises.readFile(sub.path, 'utf8');
    const vtt = convertSrtToVtt(srt);
    res.writeHead(200, {
      'Content-Type': 'text/vtt; charset=utf-8',
      'Cache-Control': 'public, max-age=86400'
    });
    res.end(vtt);
  } catch (err) {
    res.status(500).send('Subtitle error');
  }
});

export default router;
