import express from 'express';
import { getDatabase } from '../database.js';
import { requireAuth } from '../auth.js';

const router = express.Router();

// Save Playback Progress
router.post('/progress', requireAuth, (req, res) => {
  const { movieId, progressSeconds, durationSeconds } = req.body;
  const userId = req.user.id;

  if (!movieId || typeof progressSeconds !== 'number') {
    return res.status(400).json({ error: 'Invalid progress data' });
  }

  const duration = durationSeconds || 0;
  // Mark completed if watched more than 92% of the film
  const completed = (duration > 0 && (progressSeconds / duration) > 0.92) ? 1 : 0;

  const db = getDatabase();

  db.prepare(`
    INSERT INTO watch_progress (user_id, movie_id, progress_seconds, duration_seconds, completed, updated_at)
    VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    ON CONFLICT(user_id, movie_id) DO UPDATE SET
      progress_seconds = excluded.progress_seconds,
      duration_seconds = excluded.duration_seconds,
      completed = excluded.completed,
      updated_at = CURRENT_TIMESTAMP
  `).run(userId, movieId, progressSeconds, duration, completed);

  res.json({ success: true, completed });
});

// Continue Watching List
router.get('/continue-watching', requireAuth, (req, res) => {
  const userId = req.user.id;
  const db = getDatabase();

  const movies = db.prepare(`
    SELECT 
      m.id,
      m.clean_title,
      m.year,
      m.resolution,
      m.duration,
      m.file_size,
      wp.progress_seconds,
      wp.duration_seconds AS watched_duration,
      wp.updated_at
    FROM watch_progress wp
    JOIN movies m ON m.id = wp.movie_id
    WHERE wp.user_id = ? AND wp.completed = 0 AND wp.progress_seconds > 10
    ORDER BY wp.updated_at DESC
    LIMIT 10
  `).all(userId);

  res.json({ continueWatching: movies });
});

// Watch History
router.get('/history', requireAuth, (req, res) => {
  const userId = req.user.id;
  const db = getDatabase();

  const history = db.prepare(`
    SELECT 
      m.id,
      m.clean_title,
      m.year,
      m.resolution,
      m.duration,
      wp.progress_seconds,
      wp.duration_seconds AS watched_duration,
      wp.completed,
      wp.updated_at
    FROM watch_progress wp
    JOIN movies m ON m.id = wp.movie_id
    WHERE wp.user_id = ?
    ORDER BY wp.updated_at DESC
  `).all(userId);

  res.json({ history });
});

// Favorites: List
router.get('/favorites', requireAuth, (req, res) => {
  const userId = req.user.id;
  const db = getDatabase();

  const favorites = db.prepare(`
    SELECT 
      m.*,
      f.created_at AS favorited_at
    FROM favorites f
    JOIN movies m ON m.id = f.movie_id
    WHERE f.user_id = ?
    ORDER BY f.created_at DESC
  `).all(userId);

  res.json({ favorites });
});

// Favorites: Toggle / Add
router.post('/favorites/:movieId', requireAuth, (req, res) => {
  const movieId = parseInt(req.params.movieId, 10);
  const userId = req.user.id;
  const db = getDatabase();

  const existing = db.prepare('SELECT id FROM favorites WHERE user_id = ? AND movie_id = ?').get(userId, movieId);

  if (existing) {
    db.prepare('DELETE FROM favorites WHERE id = ?').run(existing.id);
    return res.json({ favorited: false, message: 'Removed from Favorites' });
  } else {
    db.prepare('INSERT INTO favorites (user_id, movie_id) VALUES (?, ?)').run(userId, movieId);
    return res.json({ favorited: true, message: 'Added to Favorites' });
  }
});

// Collections: List
router.get('/collections', requireAuth, (req, res) => {
  const userId = req.user.id;
  const db = getDatabase();

  const collections = db.prepare(`
    SELECT c.*, COUNT(cm.movie_id) as movie_count
    FROM collections c
    LEFT JOIN collection_movies cm ON cm.collection_id = c.id
    WHERE c.user_id = ?
    GROUP BY c.id
    ORDER BY c.created_at DESC
  `).all(userId);

  res.json({ collections });
});

// Collections: Create
router.post('/collections', requireAuth, (req, res) => {
  const { name } = req.body;
  const userId = req.user.id;

  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Collection name is required' });
  }

  const db = getDatabase();
  const resInsert = db.prepare('INSERT INTO collections (user_id, name) VALUES (?, ?)').run(userId, name.trim());

  res.status(201).json({
    id: resInsert.lastInsertRowid,
    name: name.trim(),
    movie_count: 0
  });
});

// Profiles: List
router.get('/profiles', requireAuth, (req, res) => {
  const userId = req.user.id;
  const db = getDatabase();

  let profiles = db.prepare('SELECT * FROM user_profiles WHERE user_id = ? ORDER BY id ASC').all(userId);

  // If no profiles yet, auto-create a primary profile based on username
  if (profiles.length === 0) {
    const username = req.user.username || 'Viewer';
    const ins = db.prepare(`
      INSERT INTO user_profiles (user_id, name, avatar_color, avatar_icon, is_kids)
      VALUES (?, ?, ?, ?, ?)
    `).run(userId, username, '#8B5CF6', 'film', 0);

    profiles = [{
      id: ins.lastInsertRowid,
      user_id: userId,
      name: username,
      avatar_color: '#8B5CF6',
      avatar_icon: 'film',
      is_kids: 0,
      created_at: new Date().toISOString()
    }];
  }

  res.json({ profiles });
});

// Profiles: Create
router.post('/profiles', requireAuth, (req, res) => {
  const { name, avatar_color, avatar_icon, is_kids } = req.body;
  const userId = req.user.id;

  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Profile name is required' });
  }

  const db = getDatabase();
  const count = db.prepare('SELECT COUNT(*) as cnt FROM user_profiles WHERE user_id = ?').get(userId)?.cnt || 0;
  if (count >= 6) {
    return res.status(400).json({ error: 'Maximum of 6 profiles allowed per account' });
  }

  const safeColor = avatar_color || '#8B5CF6';
  const safeIcon = avatar_icon || 'film';
  const safeKids = is_kids ? 1 : 0;

  const ins = db.prepare(`
    INSERT INTO user_profiles (user_id, name, avatar_color, avatar_icon, is_kids)
    VALUES (?, ?, ?, ?, ?)
  `).run(userId, name.trim(), safeColor, safeIcon, safeKids);

  res.status(201).json({
    profile: {
      id: ins.lastInsertRowid,
      user_id: userId,
      name: name.trim(),
      avatar_color: safeColor,
      avatar_icon: safeIcon,
      is_kids: safeKids
    }
  });
});

// Profiles: Delete
router.delete('/profiles/:id', requireAuth, (req, res) => {
  const profileId = parseInt(req.params.id, 10);
  const userId = req.user.id;
  const db = getDatabase();

  const count = db.prepare('SELECT COUNT(*) as cnt FROM user_profiles WHERE user_id = ?').get(userId)?.cnt || 0;
  if (count <= 1) {
    return res.status(400).json({ error: 'Cannot delete the only profile. At least one profile must exist.' });
  }

  db.prepare('DELETE FROM user_profiles WHERE id = ? AND user_id = ?').run(profileId, userId);
  res.json({ success: true, message: 'Profile deleted' });
});

// Recommendations: Real library recommendations based on favorites and viewing history
router.get('/recommendations', requireAuth, (req, res) => {
  const userId = req.user.id;
  const db = getDatabase();

  // Find user's favorited or completed movie IDs
  const favMovieIds = db.prepare('SELECT movie_id FROM favorites WHERE user_id = ?').all(userId).map(r => r.movie_id);
  const watchedMovieIds = db.prepare('SELECT movie_id FROM watch_progress WHERE user_id = ?').all(userId).map(r => r.movie_id);
  const excludeIds = Array.from(new Set([...favMovieIds, ...watchedMovieIds]));

  let recommendations = [];
  if (excludeIds.length > 0) {
    const placeholders = excludeIds.map(() => '?').join(',');
    recommendations = db.prepare(`
      SELECT m.*,
        CASE WHEN f.id IS NOT NULL THEN 1 ELSE 0 END AS is_favorite
      FROM movies m
      LEFT JOIN favorites f ON f.movie_id = m.id AND f.user_id = ?
      WHERE m.id NOT IN (${placeholders})
      ORDER BY m.id DESC
      LIMIT 12
    `).all(userId, ...excludeIds);
  }

  // If not enough recommendations from un-watched, fallback to all movies sorted by highest resolution / recent
  if (recommendations.length < 4) {
    recommendations = db.prepare(`
      SELECT m.*,
        CASE WHEN f.id IS NOT NULL THEN 1 ELSE 0 END AS is_favorite
      FROM movies m
      LEFT JOIN favorites f ON f.movie_id = m.id AND f.user_id = ?
      ORDER BY m.id DESC
      LIMIT 12
    `).all(userId);
  }

  res.json({ recommendations });
});

export default router;
