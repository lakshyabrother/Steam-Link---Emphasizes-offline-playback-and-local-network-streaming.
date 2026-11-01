import fs from 'fs';
import path from 'path';

// Global metrics and active sessions
export const metrics = {
  totalBytesTransmitted: 0,
  currentUploadSpeedBps: 0,
  activeSessions: new Map(), // sessionId -> sessionDetails
  lastBytesSample: 0,
  lastSampleTime: Date.now()
};

// Periodic calculation of upload speed (every 1 second)
setInterval(() => {
  const now = Date.now();
  const timeDelta = (now - metrics.lastSampleTime) / 1000;
  if (timeDelta > 0) {
    const bytesDelta = metrics.totalBytesTransmitted - metrics.lastBytesSample;
    metrics.currentUploadSpeedBps = Math.round(bytesDelta / timeDelta);
    metrics.lastBytesSample = metrics.totalBytesTransmitted;
    metrics.lastSampleTime = now;
  }
}, 1000);

export function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.mp4':
    case '.m4v':
      return 'video/mp4';
    case '.mkv':
      return 'video/webm'; // Chrome & Firefox support WebM/Matroska container
    case '.webm':
      return 'video/webm';
    case '.mov':
      return 'video/quicktime';
    case '.avi':
      return 'video/x-msvideo';
    case '.ts':
      return 'video/mp2t';
    default:
      return 'application/octet-stream';
  }
}

/**
 * Handle HTTP Range Requests for high-performance video streaming
 */
export async function handleStreamRequest(req, res, filePath, movie = null, user = null) {
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'Video file not found on disk' });
  }

  const stat = await fs.promises.stat(filePath);
  const fileSize = stat.size;
  const mimeType = getMimeType(filePath);
  const range = req.headers.range;

  const sessionId = `${user?.id || 'anon'}_${movie?.id || 'mov'}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  const sessionInfo = {
    id: sessionId,
    userId: user?.id || null,
    username: user?.username || 'Guest Viewer',
    movieId: movie?.id || null,
    movieTitle: movie?.clean_title || path.basename(filePath),
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    userAgent: req.headers['user-agent'] || 'Unknown',
    startTime: Date.now(),
    bytesTransmitted: 0
  };

  metrics.activeSessions.set(sessionId, sessionInfo);

  const cleanup = () => {
    metrics.activeSessions.delete(sessionId);
  };

  res.on('finish', cleanup);
  res.on('close', cleanup);

  if (range) {
    // Parse Range header: e.g. "bytes=0-1048576" or "bytes=1048576-"
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    let end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    // Validate range limits
    if (start >= fileSize || start < 0 || end >= fileSize || start > end) {
      res.setHeader('Content-Range', `bytes */${fileSize}`);
      return res.status(416).send('Requested Range Not Satisfiable');
    }

    // Optional chunking (up to 5MB chunks to optimize bandwidth and fast seeking)
    const MAX_CHUNK = 5 * 1024 * 1024; // 5 MB
    if (end - start >= MAX_CHUNK) {
      end = start + MAX_CHUNK - 1;
    }

    const chunksize = end - start + 1;
    const stream = fs.createReadStream(filePath, { start, end });

    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': mimeType,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'X-Content-Type-Options': 'nosniff'
    });

    stream.on('data', (chunk) => {
      metrics.totalBytesTransmitted += chunk.length;
      sessionInfo.bytesTransmitted += chunk.length;
    });

    stream.on('error', (err) => {
      console.error('Stream error:', err.message);
      if (!res.headersSent) {
        res.status(500).send('Streaming error');
      }
    });

    req.on('close', () => {
      stream.destroy();
    });

    stream.pipe(res);
  } else {
    // Full content response (200 OK)
    res.writeHead(200, {
      'Content-Length': fileSize,
      'Content-Type': mimeType,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'X-Content-Type-Options': 'nosniff'
    });

    const stream = fs.createReadStream(filePath);

    stream.on('data', (chunk) => {
      metrics.totalBytesTransmitted += chunk.length;
      sessionInfo.bytesTransmitted += chunk.length;
    });

    stream.on('error', (err) => {
      console.error('Stream error:', err.message);
      if (!res.headersSent) {
        res.status(500).send('Streaming error');
      }
    });

    req.on('close', () => {
      stream.destroy();
    });

    stream.pipe(res);
  }
}

/**
 * Convert SRT to WebVTT format for browser HTML5 <track>
 */
export function convertSrtToVtt(srtContent) {
  // Normalize line endings
  let normalized = srtContent.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  // Replace SRT timestamp comma with WebVTT period (00:01:23,456 --> 00:01:23.456)
  normalized = normalized.replace(/(\d{2}:\d{2}:\d{2}),(\d{3})/g, '$1.$2');

  return 'WEBVTT\n\n' + normalized;
}
