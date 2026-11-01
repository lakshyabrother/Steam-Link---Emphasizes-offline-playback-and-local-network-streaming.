import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { CONFIG } from './config.js';
import { getDatabase } from './database.js';

/**
 * Hash password with salt using native crypto.scryptSync
 */
export function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return { hash, salt };
}

/**
 * Verify password against salt and stored hash
 */
export function verifyPassword(password, salt, storedHash) {
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return crypto.timingSafeEqual(Buffer.from(hash, 'hex'), Buffer.from(storedHash, 'hex'));
}

/**
 * Sign JWT token
 */
export function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      role: user.role
    },
    CONFIG.JWT_SECRET,
    { expiresIn: '7d' }
  );
}

/**
 * Authentication Middleware
 */
export function requireAuth(req, res, next) {
  // Check authorization header or query token (for direct video stream src)
  let token = null;
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  } else if (req.query && req.query.token) {
    token = req.query.token;
  }

  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, CONFIG.JWT_SECRET);
    const db = getDatabase();
    const user = db.prepare('SELECT id, username, role FROM users WHERE id = ?').get(decoded.id);

    if (!user) {
      return res.status(401).json({ error: 'User no longer exists' });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired session' });
  }
}

/**
 * Admin Only Middleware
 */
export function requireAdmin(req, res, next) {
  requireAuth(req, res, () => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied: Admin privileges required' });
    }
    next();
  });
}
