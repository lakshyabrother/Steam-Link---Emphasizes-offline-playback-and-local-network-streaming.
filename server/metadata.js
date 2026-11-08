import fs from 'fs';
import path from 'path';
import { CONFIG } from './config.js';
import { getDatabase, addLog } from './database.js';

/**
 * Get configured TMDB API Key from settings or environment
 */
export function getTmdbApiKey() {
  const db = getDatabase();
  const setting = db.prepare("SELECT value FROM settings WHERE key = 'tmdb_api_key'").get();
  const key = setting?.value?.trim() || process.env.TMDB_API_KEY?.trim() || '';
  return key;
}

/**
 * Clean search query from filenames and scene tags
 */
export function cleanSearchQuery(rawTitle) {
  if (!rawTitle) return { title: '', year: '' };

  let title = rawTitle
    .replace(/[._+]/g, ' ')
    .replace(/\[.*?\]|\(.*?\)/g, ' ')
    .replace(/\b(1080p|720p|2160p|4k|bluray|web-dl|webrip|hdrip|brrip|dvdrip|remux|x264|x265|hevc|h264|avc|10bit|8bit)\b/gi, ' ')
    .replace(/\b(hindi|english|tamil|telugu|japanese|korean|dual audio|multi audio|sub|subs|esub)\b/gi, ' ')
    .replace(/\b(yify|yts|rarbg|psa|fitgirl|utr|anarcho|galaxy|hdhub4u)\b/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  let year = '';
  const yearMatch = title.match(/\b(19\d\d|20\d\d)\b/);
  if (yearMatch) {
    year = yearMatch[1];
    title = title.substring(0, yearMatch.index).trim();
  }

  // Clean trailing punctuation
  title = title.replace(/[-–—:]+$/, '').trim();
  return { title: title || rawTitle, year };
}

/**
 * Calculate match confidence score (0 to 100)
 */
export function calculateMatchConfidence(queryTitle, queryYear, candidate) {
  if (!candidate || !candidate.title) return 0;

  const normQuery = queryTitle.toLowerCase().replace(/[^a-z0-9]/g, '');
  const normCand = candidate.title.toLowerCase().replace(/[^a-z0-9]/g, '');
  const normOriginal = (candidate.original_title || '').toLowerCase().replace(/[^a-z0-9]/g, '');

  let score = 0;

  // Title matching
  if (normQuery === normCand || normQuery === normOriginal) {
    score += 55;
  } else if (normCand.startsWith(normQuery) || normQuery.startsWith(normCand)) {
    score += 40;
  } else if (normCand.includes(normQuery) || normQuery.includes(normCand)) {
    score += 30;
  } else {
    // Levenshtein / character overlap similarity
    let common = 0;
    for (let i = 0; i < Math.min(normQuery.length, normCand.length); i++) {
      if (normQuery[i] === normCand[i]) common++;
    }
    const ratio = common / Math.max(normQuery.length, normCand.length);
    score += Math.round(ratio * 30);
  }

  // Year matching
  const candYear = candidate.release_date?.substring(0, 4);
  if (queryYear && candYear) {
    if (queryYear === candYear) {
      score += 35;
    } else if (Math.abs(parseInt(queryYear, 10) - parseInt(candYear, 10)) === 1) {
      score += 20;
    } else {
      score -= 20; // Year mismatch penalty
    }
  } else if (!queryYear) {
    // If no year was in the file, give slight popularity weight
    if (candidate.vote_count > 100) score += 10;
  }

  // Popularity boost (helps disambiguate between famous movie and obscure indie film)
  if (candidate.vote_count > 500) score += 5;
  if (candidate.vote_count > 2000) score += 5;

  return Math.min(100, Math.max(0, score));
}

/**
 * Search TMDB for movie matches
 */
export async function searchTmdbMovies(query, year = null) {
  const apiKey = getTmdbApiKey();
  if (!apiKey) {
    return { error: 'No TMDB API key configured', candidates: [] };
  }

  const { title: cleanTitle, year: extractedYear } = cleanSearchQuery(query);
  const targetYear = year || extractedYear || '';

  try {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${encodeURIComponent(apiKey)}&query=${encodeURIComponent(cleanTitle)}&include_adult=false&language=en-US`;
    if (targetYear) {
      url += `&year=${encodeURIComponent(targetYear)}`;
    }

    const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
    if (!res.ok) {
      return { error: `TMDB API error: HTTP ${res.status}`, candidates: [] };
    }

    const data = await res.json();
    const results = data.results || [];

    const candidates = results.map(item => {
      const score = calculateMatchConfidence(cleanTitle, targetYear, item);
      return {
        id: item.id,
        title: item.title,
        original_title: item.original_title,
        year: item.release_date ? item.release_date.substring(0, 4) : '',
        overview: item.overview || '',
        poster_url: item.poster_path ? `https://image.tmdb.org/t/p/w780${item.poster_path}` : null,
        backdrop_url: item.backdrop_path ? `https://image.tmdb.org/t/p/original${item.backdrop_path}` : null,
        vote_average: item.vote_average || 0,
        vote_count: item.vote_count || 0,
        confidence_score: score
      };
    });

    // Sort by confidence score
    candidates.sort((a, b) => b.confidence_score - a.confidence_score);

    return { candidates, searchTitle: cleanTitle, searchYear: targetYear };
  } catch (err) {
    return { error: `Network error querying TMDB: ${err.message}`, candidates: [] };
  }
}

/**
 * Fetch detailed movie information by TMDB ID
 */
export async function fetchTmdbMovieDetails(tmdbId) {
  const apiKey = getTmdbApiKey();
  if (!apiKey) return null;

  try {
    const url = `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${encodeURIComponent(apiKey)}&language=en-US`;
    const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
    if (!res.ok) return null;

    const data = await res.json();
    const genres = (data.genres || []).map(g => g.name).join(', ');
    const year = data.release_date ? data.release_date.substring(0, 4) : '';
    const runtime = data.runtime ? data.runtime * 60 : 0; // in seconds

    return {
      tmdb_id: data.id,
      title: data.title,
      original_title: data.original_title,
      year,
      genres: genres || 'Cinema',
      overview: data.overview || '',
      tagline: data.tagline || '',
      runtime,
      poster_path: data.poster_path ? `https://image.tmdb.org/t/p/w780${data.poster_path}` : null,
      backdrop_path: data.backdrop_path ? `https://image.tmdb.org/t/p/original${data.backdrop_path}` : null,
      vote_average: data.vote_average || 0,
      vote_count: data.vote_count || 0
    };
  } catch (err) {
    return null;
  }
}

/**
 * Download remote image to local disk cache (skips if file already exists with content)
 */
export async function downloadAndCacheArtwork(url, destPath, force = false) {
  if (!url) return false;

  try {
    if (!force && fs.existsSync(destPath)) {
      const stat = await fs.promises.stat(destPath);
      if (stat.size > 1024) return true; // Already cached
    }

    const res = await fetch(url, {
      headers: { 'User-Agent': 'StreamLink/2.0 (Self-Hosted Personal Streaming)' },
      signal: AbortSignal.timeout(10000)
    });
    if (!res.ok) return false;

    const buffer = Buffer.from(await res.arrayBuffer());
    await fs.promises.writeFile(destPath, buffer);
    return true;
  } catch (err) {
    console.error(`Failed to cache artwork from ${url}:`, err.message);
    return false;
  }
}

/**
 * Auto-recognize a movie, fetch TMDB artwork & metadata, and store locally
 */
export async function autoRecognizeMovie(movieId, force = false) {
  const db = getDatabase();
  const movie = db.prepare('SELECT * FROM movies WHERE id = ?').get(movieId);
  if (!movie) return { success: false, reason: 'movie_not_found' };

  // Skip if already matched and artwork present unless force = true
  const cachedPoster = path.join(CONFIG.POSTERS_DIR, `${movieId}_poster.jpg`);
  const cachedBackdrop = path.join(CONFIG.BACKDROPS_DIR, `${movieId}_backdrop.jpg`);

  if (!force && movie.match_status === 'matched' && fs.existsSync(cachedPoster)) {
    return { success: true, status: 'already_matched', movie };
  }

  const apiKey = getTmdbApiKey();
  if (!apiKey) {
    return { success: false, reason: 'no_api_key', message: 'Configure a TMDB API key in settings' };
  }

  // Search TMDB
  const { candidates } = await searchTmdbMovies(movie.clean_title || movie.title, movie.year);
  if (!candidates || candidates.length === 0) {
    db.prepare("UPDATE movies SET match_status = 'none' WHERE id = ?").run(movieId);
    return { success: false, reason: 'no_results' };
  }

  const topMatch = candidates[0];

  // High confidence threshold (>= 75%)
  if (topMatch.confidence_score >= 75) {
    const details = await fetchTmdbMovieDetails(topMatch.id);
    if (!details) {
      return { success: false, reason: 'details_failed' };
    }

    // Cache poster
    if (details.poster_path) {
      await downloadAndCacheArtwork(details.poster_path, cachedPoster, force);
    }

    // Cache backdrop
    if (details.backdrop_path) {
      await downloadAndCacheArtwork(details.backdrop_path, cachedBackdrop, force);
    }

    // Update movie row in database
    db.prepare(`
      UPDATE movies SET
        clean_title = ?,
        year = ?,
        genre = ?,
        description = ?,
        duration = CASE WHEN duration <= 0 AND ? > 0 THEN ? ELSE duration END,
        tmdb_id = ?,
        poster_url = ?,
        backdrop_url = ?,
        match_status = 'matched',
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(
      details.title,
      details.year || movie.year,
      details.genres || movie.genre,
      details.overview || movie.description,
      details.runtime,
      details.runtime,
      details.tmdb_id,
      cachedPoster,
      cachedBackdrop,
      movieId
    );

    addLog(db, 'info', `Auto-recognized movie: "${details.title}" (${details.year}) [TMDB ID ${details.tmdb_id}] (Score: ${topMatch.confidence_score}%)`);

    return {
      success: true,
      status: 'matched',
      tmdb_id: details.tmdb_id,
      title: details.title,
      year: details.year,
      confidence_score: topMatch.confidence_score
    };
  }

  // Uncertain match (45% - 74%): flag for manual review, do not auto-overwrite
  if (topMatch.confidence_score >= 45) {
    db.prepare("UPDATE movies SET match_status = 'uncertain' WHERE id = ?").run(movieId);
    addLog(db, 'info', `Uncertain match for "${movie.clean_title}": "${topMatch.title}" (${topMatch.confidence_score}%). Flagged for manual review.`);
    return {
      success: false,
      status: 'uncertain',
      topCandidate: topMatch,
      confidence_score: topMatch.confidence_score
    };
  }

  // Low confidence (< 45%)
  db.prepare("UPDATE movies SET match_status = 'none' WHERE id = ?").run(movieId);
  return { success: false, status: 'low_confidence', confidence_score: topMatch.confidence_score };
}

/**
 * Manually apply a selected TMDB match to a movie
 */
export async function applyManualTmdbMatch(movieId, tmdbId) {
  const db = getDatabase();
  const movie = db.prepare('SELECT * FROM movies WHERE id = ?').get(movieId);
  if (!movie) return { success: false, error: 'Movie not found' };

  const details = await fetchTmdbMovieDetails(tmdbId);
  if (!details) return { success: false, error: 'Failed to retrieve movie details from TMDB' };

  const cachedPoster = path.join(CONFIG.POSTERS_DIR, `${movieId}_poster.jpg`);
  const cachedBackdrop = path.join(CONFIG.BACKDROPS_DIR, `${movieId}_backdrop.jpg`);

  // Download artwork
  if (details.poster_path) {
    await downloadAndCacheArtwork(details.poster_path, cachedPoster, true);
  }
  if (details.backdrop_path) {
    await downloadAndCacheArtwork(details.backdrop_path, cachedBackdrop, true);
  }

  db.prepare(`
    UPDATE movies SET
      clean_title = ?,
      year = ?,
      genre = ?,
      description = ?,
      duration = CASE WHEN duration <= 0 AND ? > 0 THEN ? ELSE duration END,
      tmdb_id = ?,
      poster_url = ?,
      backdrop_url = ?,
      match_status = 'manual',
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `).run(
    details.title,
    details.year || movie.year,
    details.genres || movie.genre,
    details.overview || movie.description,
    details.runtime,
    details.runtime,
    details.tmdb_id,
    cachedPoster,
    cachedBackdrop,
    movieId
  );

  addLog(db, 'info', `Manual TMDB match applied to "${movie.file_name}": "${details.title}" (${details.year}) [TMDB ID: ${details.tmdb_id}]`);

  return {
    success: true,
    movie: {
      ...movie,
      clean_title: details.title,
      year: details.year,
      genre: details.genres,
      description: details.overview,
      tmdb_id: details.tmdb_id,
      match_status: 'manual'
    }
  };
}

/**
 * Batch auto-recognize all movies in library
 */
export async function batchAutoRecognizeLibrary(limit = 20) {
  const db = getDatabase();
  const movies = db.prepare(`
    SELECT id, clean_title, year, file_path
    FROM movies
    WHERE match_status IN ('none', 'uncertain') OR tmdb_id IS NULL
    LIMIT ?
  `).all(limit);

  const results = {
    total: movies.length,
    matched: 0,
    uncertain: 0,
    failed: 0
  };

  for (const m of movies) {
    try {
      const res = await autoRecognizeMovie(m.id);
      if (res.success) {
        results.matched++;
      } else if (res.status === 'uncertain') {
        results.uncertain++;
      } else {
        results.failed++;
      }
      // Polite delay between API requests
      await new Promise(r => setTimeout(r, 250));
    } catch (e) {
      results.failed++;
    }
  }

  return results;
}
