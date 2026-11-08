import fs from 'fs';
import path from 'path';
import os from 'os';
import { spawn } from 'child_process';
import * as mm from 'music-metadata';
import { CONFIG } from './config.js';
import { getDatabase, addLog } from './database.js';

let cachedFfprobePath = null;

/**
 * Check if ffprobe or ffmpeg is available
 */
export async function getFfprobePath() {
  if (cachedFfprobePath) return cachedFfprobePath;

  const isWin = process.platform === 'win32';
  const ext = isWin ? '.exe' : '';

  // Check local bin
  const localProbe = path.join(CONFIG.ROOT_DIR, 'bin', `ffprobe${ext}`);
  if (fs.existsSync(localProbe)) {
    cachedFfprobePath = localProbe;
    return cachedFfprobePath;
  }

  // Check common default locations
  if (isWin) {
    const gyanPath = 'C:\\Program Files\\FFmpeg\\bin\\ffprobe.exe';
    if (fs.existsSync(gyanPath)) {
      cachedFfprobePath = gyanPath;
      return cachedFfprobePath;
    }
  } else {
    const brewSilicon = '/opt/homebrew/bin/ffprobe';
    if (fs.existsSync(brewSilicon)) {
      cachedFfprobePath = brewSilicon;
      return cachedFfprobePath;
    }
    const usrLocal = '/usr/local/bin/ffprobe';
    if (fs.existsSync(usrLocal)) {
      cachedFfprobePath = usrLocal;
      return cachedFfprobePath;
    }
  }

  // Check system PATH
  const lookupCmd = isWin ? 'where.exe' : 'which';
  const targetBinary = isWin ? 'ffprobe.exe' : 'ffprobe';

  return new Promise((resolve) => {
    const proc = spawn(lookupCmd, [targetBinary]);
    let out = '';
    proc.stdout.on('data', (d) => { out += d.toString(); });
    proc.on('close', (code) => {
      if (code === 0 && out.trim()) {
        cachedFfprobePath = out.split(/\r?\n/)[0].trim();
        resolve(cachedFfprobePath);
      } else {
        resolve(null);
      }
    });
    proc.on('error', () => {
      resolve(null);
    });
  });
}

/**
 * Intelligent file name parser to extract clean title, release year, resolution, and codecs.
 */
export function parseMovieFilename(filename) {
  const ext = path.extname(filename);
  let base = path.basename(filename, ext);

  // Replace dots, underscores, pluses with spaces
  let cleaned = base.replace(/[._+]/g, ' ').trim();

  // Extract year (1900-2099)
  let year = '';
  const yearMatch = cleaned.match(/\b(19\d\d|20\d\d)\b/);
  if (yearMatch) {
    year = yearMatch[1];
  }

  // Extract resolution
  let resolution = '1080p';
  const resMatch = cleaned.match(/\b(2160p|4k|1080p|720p|480p|576p|ds4k)\b/i);
  if (resMatch) {
    resolution = resMatch[1].toUpperCase();
    if (resolution === 'DS4K') resolution = '4K';
  }

  // Extract codec
  let codec = 'H264';
  const codecMatch = cleaned.match(/\b(x265|x264|hevc|h264|h\.264|h\.265|avc|av1|vp9)\b/i);
  if (codecMatch) {
    codec = codecMatch[1].toUpperCase();
  }

  // Strip release groups, audio tags, quality tags
  const junkPatterns = [
    /\b(10bit|8bit|bluray|web-dl|webrip|hdrip|dvdrip|brrip|hdtv|ds4k|4k|remux)\b/gi,
    /\b(hindi|english|tamil|telugu|japanese|korean|dual audio|multi audio)\b/gi,
    /\b(5\.1|2\.0|7\.1|ddp5\.1|dd5\.1|atmos|aac|ac3|dts|mp3)\b/gi,
    /\b(esub|msub|sub|subs)\b/gi,
    /\b(hdhub4u|yify|yts|rarbg|psa|ms|tv|fitgirl|utr|anarcho|galaxy)\b/gi,
    /\b(x264|x265|hevc|h264|avc|av1)\b/gi,
    /\b\d{3,4}p\b/gi
  ];

  let titlePart = cleaned;
  if (yearMatch && yearMatch.index > 0) {
    titlePart = cleaned.substring(0, yearMatch.index);
  }

  for (const pattern of junkPatterns) {
    titlePart = titlePart.replace(pattern, ' ');
  }

  // Clean trailing dashes, multiple spaces
  let cleanTitle = titlePart
    .replace(/[-–—]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleanTitle) {
    cleanTitle = base;
  }

  return {
    rawName: filename,
    cleanTitle,
    year,
    resolution,
    codec
  };
}

/**
 * Find matching subtitle files in the same directory or Subs/ subdirectory
 */
export async function findSubtitles(movieFilePath) {
  const dir = path.dirname(movieFilePath);
  const ext = path.extname(movieFilePath);
  const baseName = path.basename(movieFilePath, ext);
  const parsed = parseMovieFilename(baseName);
  const cleanBase = parsed.cleanTitle.toLowerCase().replace(/[^a-z0-9]/g, '');
  const subtitles = [];

  try {
    const files = await fs.promises.readdir(dir);
    for (const f of files) {
      const fExt = path.extname(f).toLowerCase();
      if (CONFIG.SUBTITLE_EXTENSIONS.includes(fExt)) {
        const fBase = path.basename(f, fExt);
        const fClean = fBase.toLowerCase().replace(/[^a-z0-9]/g, '');

        // Check if subtitle matches the movie base or starts with movie clean title
        if (
          fBase.toLowerCase().startsWith(baseName.toLowerCase()) ||
          fClean.startsWith(cleanBase) ||
          cleanBase.startsWith(fClean)
        ) {
          let lang = 'English';
          if (fBase.includes('_hi') || fBase.toLowerCase().includes('hindi')) lang = 'Hindi';
          else if (fBase.includes('_en') || fBase.toLowerCase().includes('eng')) lang = 'English';
          else if (fBase.includes('_es') || fBase.toLowerCase().includes('spanish')) lang = 'Spanish';
          else if (fBase.includes('_fr') || fBase.toLowerCase().includes('french')) lang = 'French';
          else if (fBase.includes('_ja') || fBase.toLowerCase().includes('japanese')) lang = 'Japanese';

          subtitles.push({
            name: f,
            path: path.join(dir, f),
            language: lang,
            format: fExt.replace('.', '')
          });
        }
      }
    }
  } catch (err) {
    // Ignore subtitle read errors
  }

  return subtitles;
}

const IGNORED_FOLDERS = new Set([
  'node_modules', '.git', 'appdata', 'windows', 'program files',
  'program files (x86)', '$recycle.bin', 'system volume information',
  'steamlink', 'temp', 'cache'
]);

/**
 * Recursively find video files in a folder with safety filters
 */
export async function scanDirectoryRecursively(dir, fileList = [], currentDepth = 0, maxDepth = 3) {
  if (currentDepth > maxDepth) return fileList;

  try {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        const lowerName = entry.name.toLowerCase();
        if (!entry.name.startsWith('.') && !entry.name.startsWith('$') && !IGNORED_FOLDERS.has(lowerName)) {
          await scanDirectoryRecursively(fullPath, fileList, currentDepth + 1, maxDepth);
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (CONFIG.SUPPORTED_EXTENSIONS.includes(ext)) {
          fileList.push(fullPath);
        }
      }
    }
  } catch (err) {
    // Skip unreadable folders
  }
  return fileList;
}

/**
 * Probe video duration and resolution quickly using ffprobe or fast metadata parser
 */
async function probeMedia(filePath, ext) {
  const probePath = await getFfprobePath();

  if (probePath) {
    try {
      return await new Promise((resolve) => {
        const proc = spawn(probePath, [
          '-v', 'quiet',
          '-print_format', 'json',
          '-show_format',
          '-show_streams',
          filePath
        ]);

        let jsonStr = '';
        proc.stdout.on('data', (d) => { jsonStr += d.toString(); });
        proc.on('close', (code) => {
          if (code === 0 && jsonStr) {
            try {
              const data = JSON.parse(jsonStr);
              let duration = Math.round(parseFloat(data.format?.duration || 0));
              let videoStream = data.streams?.find(s => s.codec_type === 'video');
              let width = videoStream?.width || 1920;
              let height = videoStream?.height || 1080;
              let codec = videoStream?.codec_name?.toUpperCase() || 'H264';
              let container = data.format?.format_name?.toUpperCase() || ext.replace('.', '').toUpperCase();

              resolve({ duration, width, height, codec, container });
              return;
            } catch (e) {}
          }
          resolve(null);
        });
        proc.on('error', () => resolve(null));

        // 3 sec safety timeout
        setTimeout(() => {
          proc.kill();
          resolve(null);
        }, 3000);
      });
    } catch (e) {}
  }

  // If ffprobe not available, for MP4 use music-metadata with fast timeout
  if (ext === '.mp4' || ext === '.webm') {
    try {
      const meta = await Promise.race([
        mm.parseFile(filePath, { skipPostHeaders: true }),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 1500))
      ]);
      return {
        duration: Math.round(meta.format?.duration || 0),
        width: 1920,
        height: 1080,
        codec: meta.format?.codec || 'H264',
        container: meta.format?.container || ext.replace('.', '').toUpperCase()
      };
    } catch (e) {}
  }

  return null;
}

/**
 * Main Library Scanner
 */
export async function scanLibrary(customFolder = null) {
  const db = getDatabase();
  const folder = customFolder || db.prepare("SELECT value FROM settings WHERE key = 'library_folder'").get()?.value;

  if (!folder || !fs.existsSync(folder)) {
    throw new Error(`Invalid library folder: ${folder || '(None selected)'}`);
  }

  addLog(db, 'info', `Scanning library in: ${folder}`);

  const videoPaths = await scanDirectoryRecursively(folder);
  const foundSet = new Set(videoPaths.map(p => path.resolve(p)));

  let addedCount = 0;
  let updatedCount = 0;

  const checkIgnoredStmt = db.prepare('SELECT id FROM ignored_movies WHERE LOWER(file_path) = LOWER(?)');

  for (const filePath of videoPaths) {
    const normalizedPath = path.resolve(filePath);

    // Skip movies that have been removed from the library
    if (checkIgnoredStmt.get(normalizedPath)) {
      continue;
    }

    const fileName = path.basename(filePath);
    const ext = path.extname(filePath).toLowerCase();

    try {
      const stats = await fs.promises.stat(filePath);
      const parsed = parseMovieFilename(fileName);

      let duration = 0;
      let container = ext.replace('.', '').toUpperCase();
      let codec = parsed.codec || 'H264';
      let width = 1920;
      let height = 1080;

      const probed = await probeMedia(filePath, ext);
      if (probed) {
        if (probed.duration) duration = probed.duration;
        if (probed.width) width = probed.width;
        if (probed.height) height = probed.height;
        if (probed.codec) codec = probed.codec;
        if (probed.container) container = probed.container;
      }

      // Check subtitles
      const subtitles = await findSubtitles(filePath);
      const subtitlesJson = JSON.stringify(subtitles);

      // Check if movie already exists in DB
      const existing = db.prepare('SELECT id FROM movies WHERE file_path = ?').get(normalizedPath);

      if (existing) {
        db.prepare(`
          UPDATE movies SET
            clean_title = ?,
            year = ?,
            resolution = ?,
            file_size = ?,
            duration = ?,
            codec = ?,
            container = ?,
            subtitles_json = ?,
            updated_at = CURRENT_TIMESTAMP
          WHERE id = ?
        `).run(
          parsed.cleanTitle,
          parsed.year,
          parsed.resolution,
          stats.size,
          duration,
          codec,
          container,
          subtitlesJson,
          existing.id
        );
        updatedCount++;
      } else {
        db.prepare(`
          INSERT INTO movies (
            title, clean_title, file_path, file_name, file_size, file_extension,
            duration, resolution, width, height, codec, container, year, genre,
            description, poster_url, subtitles_json
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).run(
          parsed.cleanTitle,
          parsed.cleanTitle,
          normalizedPath,
          fileName,
          stats.size,
          ext,
          duration,
          parsed.resolution,
          width,
          height,
          codec,
          container,
          parsed.year,
          'Movie',
          `Format: ${ext.toUpperCase()} | Codec: ${codec} | Resolution: ${parsed.resolution}`,
          '',
          subtitlesJson
        );
        addedCount++;
      }
    } catch (fileErr) {
      console.error(`Failed to process movie ${filePath}:`, fileErr.message);
      addLog(db, 'error', `Failed to process ${fileName}: ${fileErr.message}`);
    }
  }

  // Cleanup deleted or moved files from library
  const allCurrentMovies = db.prepare('SELECT id, file_path FROM movies').all();
  let deletedCount = 0;
  for (const m of allCurrentMovies) {
    if (!fs.existsSync(m.file_path) || (!foundSet.has(path.resolve(m.file_path)) && m.file_path.startsWith(folder))) {
      db.prepare('DELETE FROM movies WHERE id = ?').run(m.id);
      deletedCount++;
    }
  }

  const summary = `Scan finished. Found: ${videoPaths.length}, Added: ${addedCount}, Updated: ${updatedCount}, Removed: ${deletedCount}`;
  addLog(db, 'info', summary);

  return {
    totalFiles: videoPaths.length,
    added: addedCount,
    updated: updatedCount,
    deleted: deletedCount,
    folder
  };
}

/**
 * List System Drives or common root directories
 */
export async function listDrives() {
  if (process.platform === 'win32') {
    return new Promise((resolve) => {
      const ps = spawn('powershell.exe', ['-NoProfile', '-Command', 'Get-PSDrive -PSProvider FileSystem | Select-Object -ExpandProperty Root']);
      let output = '';

      ps.stdout.on('data', (d) => { output += d.toString(); });
      ps.on('close', () => {
        const drives = output
          .split(/\r?\n/)
          .map(d => d.trim())
          .filter(d => d.length > 0 && fs.existsSync(d));

        resolve(drives.length === 0 ? ['C:\\'] : drives);
      });

      ps.on('error', () => {
        resolve(['C:\\']);
      });
    });
  }

  // macOS / Linux locations
  const home = os.homedir();
  const candidates = [
    home,
    path.join(home, 'Movies'),
    path.join(home, 'Downloads'),
    path.join(home, 'Desktop'),
    '/Volumes',
    '/'
  ];
  return candidates.filter(p => fs.existsSync(p));
}

/**
 * List subdirectories of a given path for the interactive directory picker
 */
export async function listDirectory(dirPath) {
  const defaultRoot = process.platform === 'win32' ? 'C:\\' : os.homedir();
  const target = dirPath ? path.resolve(dirPath) : defaultRoot;

  if (!fs.existsSync(target)) {
    throw new Error(`Directory does not exist: ${target}`);
  }

  const entries = await fs.promises.readdir(target, { withFileTypes: true });
  const folders = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (!entry.name.startsWith('$') && !entry.name.startsWith('.') && !IGNORED_FOLDERS.has(entry.name.toLowerCase())) {
        folders.push({
          name: entry.name,
          path: path.join(target, entry.name)
        });
      }
    }
  }

  // Count video files in the current directory directly
  let videoCount = 0;
  for (const entry of entries) {
    if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (CONFIG.SUPPORTED_EXTENSIONS.includes(ext)) {
        videoCount++;
      }
    }
  }

  return {
    currentPath: target,
    parentPath: path.dirname(target) === target ? null : path.dirname(target),
    folders,
    videoCount
  };
}

/**
 * Launch native OS Folder Dialog (macOS Finder dialog or Windows FolderBrowserDialog)
 */
export function openNativeWindowsFolderDialog() {
  return new Promise((resolve, reject) => {
    // macOS native folder picker using AppleScript
    if (process.platform === 'darwin') {
      const script = 'POSIX path of (choose folder with prompt "Select Movie Folder for StreamLink")';
      const osa = spawn('osascript', ['-e', script]);
      let stdout = '';

      osa.stdout.on('data', (d) => { stdout += d.toString(); });
      osa.on('close', (code) => {
        const res = stdout.trim().replace(/\/+$/, '');
        if (code === 0 && res) {
          resolve(res);
        } else {
          resolve(null);
        }
      });

      osa.on('error', () => {
        resolve(null);
      });
      return;
    }

    if (process.platform === 'win32') {
      const psScript = `
        Add-Type -AssemblyName System.Windows.Forms
        $dialog = New-Object System.Windows.Forms.FolderBrowserDialog
        $dialog.Description = "Select Movie Folder for StreamLink"
        $dialog.ShowNewFolderButton = $false
        $res = $dialog.ShowDialog()
        if ($res -eq [System.Windows.Forms.DialogResult]::OK) {
          Write-Output $dialog.SelectedPath
        } else {
          Write-Output "CANCELLED"
        }
      `;

      const ps = spawn('powershell.exe', ['-NoProfile', '-Command', psScript]);
      let stdout = '';

      ps.stdout.on('data', (d) => { stdout += d.toString(); });

      ps.on('close', (code) => {
        const res = stdout.trim();
        if (res && res !== 'CANCELLED') {
          resolve(res);
        } else {
          resolve(null);
        }
      });

      ps.on('error', (err) => {
        reject(err);
      });
      return;
    }

    // Other platforms
    resolve(null);
  });
}
