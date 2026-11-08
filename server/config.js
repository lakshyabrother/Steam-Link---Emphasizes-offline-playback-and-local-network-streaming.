import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.resolve(ROOT_DIR, 'data');
const POSTERS_DIR = path.resolve(DATA_DIR, 'posters');
const BACKDROPS_DIR = path.resolve(DATA_DIR, 'backdrops');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(POSTERS_DIR)) {
  fs.mkdirSync(POSTERS_DIR, { recursive: true });
}
if (!fs.existsSync(BACKDROPS_DIR)) {
  fs.mkdirSync(BACKDROPS_DIR, { recursive: true });
}

export const CONFIG = {
  PORT: process.env.PORT || 5050,
  HOST: '0.0.0.0',
  ROOT_DIR,
  DATA_DIR,
  POSTERS_DIR,
  BACKDROPS_DIR,
  DB_PATH: path.join(DATA_DIR, 'streamlink.db'),
  JWT_SECRET: process.env.JWT_SECRET || 'streamlink-secure-master-secret-key-2026',
  SUPPORTED_EXTENSIONS: ['.mp4', '.mkv', '.avi', '.mov', '.webm', '.m4v', '.flv', '.ts'],
  SUBTITLE_EXTENSIONS: ['.srt', '.vtt', '.ass', '.ssa']
};
