import { DatabaseSync } from 'node:sqlite';
import path from 'path';
import os from 'os';
import { CONFIG } from './config.js';
import crypto from 'crypto';

let dbInstance = null;

export function getDatabase() {
  if (dbInstance) return dbInstance;

  dbInstance = new DatabaseSync(CONFIG.DB_PATH);
  dbInstance.exec('PRAGMA journal_mode = WAL;');
  dbInstance.exec('PRAGMA foreign_keys = ON;');

  initSchema(dbInstance);
  return dbInstance;
}

function initSchema(db) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT
    );

    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL COLLATE NOCASE,
      password_hash TEXT NOT NULL,
      salt TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'viewer',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS movies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      clean_title TEXT NOT NULL,
      file_path TEXT UNIQUE NOT NULL,
      file_name TEXT NOT NULL,
      file_size INTEGER NOT NULL DEFAULT 0,
      file_extension TEXT NOT NULL,
      duration REAL DEFAULT 0,
      resolution TEXT DEFAULT 'Unknown',
      width INTEGER DEFAULT 0,
      height INTEGER DEFAULT 0,
      codec TEXT DEFAULT 'Unknown',
      container TEXT DEFAULT 'Unknown',
      year TEXT DEFAULT '',
      genre TEXT DEFAULT 'Movie',
      description TEXT DEFAULT '',
      poster_url TEXT DEFAULT '',
      subtitles_json TEXT DEFAULT '[]',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_movies_title ON movies(title);
    CREATE INDEX IF NOT EXISTS idx_movies_clean_title ON movies(clean_title);
    CREATE INDEX IF NOT EXISTS idx_movies_created_at ON movies(created_at);

    CREATE TABLE IF NOT EXISTS share_links (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      token TEXT UNIQUE NOT NULL,
      type TEXT NOT NULL DEFAULT 'library',
      movie_id INTEGER,
      folder_path TEXT DEFAULT '',
      folder_name TEXT DEFAULT '',
      movie_count INTEGER DEFAULT 0,
      passcode TEXT DEFAULT '',
      label TEXT DEFAULT '',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      is_active INTEGER DEFAULT 1,
      access_count INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS watch_progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      movie_id INTEGER NOT NULL REFERENCES movies(id) ON DELETE CASCADE,
      progress_seconds REAL NOT NULL DEFAULT 0,
      duration_seconds REAL NOT NULL DEFAULT 0,
      completed INTEGER NOT NULL DEFAULT 0,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(user_id, movie_id)
    );

    CREATE TABLE IF NOT EXISTS favorites (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      movie_id INTEGER NOT NULL REFERENCES movies(id) ON DELETE CASCADE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(user_id, movie_id)
    );

    CREATE TABLE IF NOT EXISTS collections (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS collection_movies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      collection_id INTEGER NOT NULL REFERENCES collections(id) ON DELETE CASCADE,
      movie_id INTEGER NOT NULL REFERENCES movies(id) ON DELETE CASCADE,
      added_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(collection_id, movie_id)
    );

    CREATE TABLE IF NOT EXISTS server_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      level TEXT NOT NULL DEFAULT 'info',
      message TEXT NOT NULL,
      details TEXT DEFAULT '',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS ignored_movies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      file_path TEXT UNIQUE NOT NULL COLLATE NOCASE,
      clean_title TEXT,
      removed_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    CREATE INDEX IF NOT EXISTS idx_ignored_movies_path ON ignored_movies(file_path);

    CREATE TABLE IF NOT EXISTS user_profiles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      avatar_color TEXT NOT NULL DEFAULT '#8B5CF6',
      avatar_icon TEXT NOT NULL DEFAULT 'film',
      is_kids INTEGER NOT NULL DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    CREATE INDEX IF NOT EXISTS idx_user_profiles_user ON user_profiles(user_id);
  `);

  // Migrate columns if table already existed without them
  try { db.exec("ALTER TABLE share_links ADD COLUMN folder_path TEXT DEFAULT '';"); } catch (e) {}
  try { db.exec("ALTER TABLE share_links ADD COLUMN folder_name TEXT DEFAULT '';"); } catch (e) {}
  try { db.exec("ALTER TABLE share_links ADD COLUMN movie_count INTEGER DEFAULT 0;"); } catch (e) {}
  try {
    db.exec(`
      CREATE TABLE IF NOT EXISTS user_profiles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        name TEXT NOT NULL,
        avatar_color TEXT NOT NULL DEFAULT '#8B5CF6',
        avatar_icon TEXT NOT NULL DEFAULT 'film',
        is_kids INTEGER NOT NULL DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
  } catch (e) {}

  // Default settings
  const defaultLibraryFolder = process.platform === 'win32' ? 'D:\\Movies' : path.join(os.homedir(), 'Movies');
  const defaultSettings = [
    { key: 'library_folder', value: defaultLibraryFolder },
    { key: 'server_name', value: 'StreamLink Media Server' },
    { key: 'tunnel_mode', value: 'quick' },
    { key: 'tunnel_token', value: '' },
    { key: 'custom_domain', value: '' },
    { key: 'remote_allowed', value: '1' }
  ];

  const insertSetting = db.prepare('INSERT OR IGNORE INTO settings (key, value) VALUES (?, ?)');
  for (const s of defaultSettings) {
    insertSetting.run(s.key, s.value);
  }

  // Update default folder if it was previously empty
  const currentFolder = db.prepare("SELECT value FROM settings WHERE key = 'library_folder'").get();
  if (!currentFolder || !currentFolder.value) {
    db.prepare("INSERT OR REPLACE INTO settings (key, value) VALUES ('library_folder', 'D:\\Movies')").run();
  }

  // Ensure default public share link exists
  const existingShare = db.prepare("SELECT id FROM share_links WHERE type = 'library' AND is_active = 1").get();
  if (!existingShare) {
    const defaultToken = crypto.randomBytes(8).toString('hex');
    db.prepare("INSERT INTO share_links (token, type, label) VALUES (?, 'library', 'Default Public Share Link')").run(defaultToken);
  }

  // Ensure an admin user exists. Default admin / admin123
  const adminCheck = db.prepare('SELECT id FROM users WHERE role = ?').get('admin');
  if (!adminCheck) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.scryptSync('admin123', salt, 64).toString('hex');
    db.prepare('INSERT INTO users (username, password_hash, salt, role) VALUES (?, ?, ?, ?)').run(
      'admin',
      hash,
      salt,
      'admin'
    );
    addLog(db, 'info', 'Default admin account created (username: admin / password: admin123)');
  }
}

export function addLog(db, level, message, details = '') {
  try {
    const database = db || getDatabase();
    database.prepare('INSERT INTO server_logs (level, message, details) VALUES (?, ?, ?)').run(
      level,
      message,
      typeof details === 'object' ? JSON.stringify(details) : String(details)
    );
  } catch (err) {
    console.error('Failed to write log to DB:', err);
  }
}
