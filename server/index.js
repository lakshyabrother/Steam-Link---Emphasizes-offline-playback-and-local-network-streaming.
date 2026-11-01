import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import rateLimit from 'express-rate-limit';
import { CONFIG } from './config.js';
import { getDatabase, addLog } from './database.js';
import authRoutes from './routes/auth.routes.js';
import movieRoutes from './routes/movies.routes.js';
import userRoutes from './routes/user.routes.js';
import adminRoutes from './routes/admin.routes.js';
import shareRoutes from './routes/share.routes.js';
import { stopTunnel } from './tunnel.js';

const app = express();

// Initialize Database
const db = getDatabase();

// CORS for cross-device streaming (allow local network & Cloudflare Tunnel origins)
app.use(cors({
  origin: true,
  credentials: true
}));

// Basic security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// JSON parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiter for auth endpoints (prevent brute force)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30, // Limit each IP to 30 login requests per windowMs
  message: { error: 'Too many login attempts, please try again after 15 minutes' },
  standardHeaders: true,
  legacyHeaders: false
});

// Mount API routes
app.use('/api/auth', authLimiter, authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/share', shareRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'StreamLink Media Server'
  });
});

// Serve frontend in production
const clientDist = path.join(CONFIG.ROOT_DIR, 'client', 'dist');
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  addLog(db, 'error', `Server error: ${err.message}`, err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start listening
const server = app.listen(CONFIG.PORT, CONFIG.HOST, () => {
  const msg = `StreamLink Backend running on http://${CONFIG.HOST}:${CONFIG.PORT}`;
  console.log('==================================================');
  console.log(`🎬 StreamLink - Personal Movie Streaming Platform`);
  console.log(`🚀 ${msg}`);
  console.log(`🌐 Local access: http://localhost:${CONFIG.PORT}`);
  console.log('==================================================');
  addLog(db, 'info', `StreamLink Backend started on port ${CONFIG.PORT}`);
});

// Clean shutdown handler
async function handleShutdown() {
  console.log('\nShutting down StreamLink safely...');
  try {
    await stopTunnel();
  } catch (e) {}
  server.close(() => {
    console.log('Server closed. Goodbye!');
    process.exit(0);
  });
}

process.on('SIGINT', handleShutdown);
process.on('SIGTERM', handleShutdown);

