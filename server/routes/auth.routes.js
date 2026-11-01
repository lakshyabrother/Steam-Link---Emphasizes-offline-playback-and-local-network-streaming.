import express from 'express';
import { getDatabase, addLog } from '../database.js';
import { verifyPassword, hashPassword, generateToken, requireAuth, requireAdmin } from '../auth.js';

const router = express.Router();

// Login (Admin or Viewer)
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  const db = getDatabase();
  const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);

  if (!user) {
    addLog(db, 'warn', `Failed login attempt for unknown user: ${username}`);
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  const isValid = verifyPassword(password, user.salt, user.password_hash);
  if (!isValid) {
    addLog(db, 'warn', `Failed password attempt for user: ${username}`);
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  const token = generateToken(user);
  addLog(db, 'info', `User logged in: ${user.username} (${user.role})`);

  res.json({
    message: 'Login successful',
    token,
    user: {
      id: user.id,
      username: user.username,
      role: user.role
    }
  });
});

// Current User Profile
router.get('/me', requireAuth, (req, res) => {
  res.json({
    user: {
      id: req.user.id,
      username: req.user.username,
      role: req.user.role
    }
  });
});

// Admin: List all users
router.get('/users', requireAdmin, (req, res) => {
  const db = getDatabase();
  const users = db.prepare('SELECT id, username, role, created_at FROM users ORDER BY created_at DESC').all();
  res.json({ users });
});

// Admin: Create viewer account
router.post('/users', requireAdmin, (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  if (username.length < 3 || password.length < 6) {
    return res.status(400).json({ error: 'Username must be at least 3 chars and password at least 6 chars' });
  }

  const db = getDatabase();
  const existing = db.prepare('SELECT id FROM users WHERE username = ?').get(username);
  if (existing) {
    return res.status(400).json({ error: 'Username is already taken' });
  }

  const userRole = role === 'admin' ? 'admin' : 'viewer';
  const { hash, salt } = hashPassword(password);

  const result = db.prepare('INSERT INTO users (username, password_hash, salt, role) VALUES (?, ?, ?, ?)').run(
    username,
    hash,
    salt,
    userRole
  );

  addLog(db, 'info', `Admin created new ${userRole} account: ${username}`);

  res.status(201).json({
    message: 'User created successfully',
    user: {
      id: result.lastInsertRowid,
      username,
      role: userRole
    }
  });
});

// Admin: Delete user
router.delete('/users/:id', requireAdmin, (req, res) => {
  const targetId = parseInt(req.params.id, 10);
  const db = getDatabase();

  const user = db.prepare('SELECT id, username, role FROM users WHERE id = ?').get(targetId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (user.role === 'admin' && user.id === req.user.id) {
    return res.status(400).json({ error: 'Cannot delete your own active admin account' });
  }

  db.prepare('DELETE FROM users WHERE id = ?').run(targetId);
  addLog(db, 'info', `User deleted: ${user.username}`);

  res.json({ message: 'User deleted successfully' });
});

export default router;
