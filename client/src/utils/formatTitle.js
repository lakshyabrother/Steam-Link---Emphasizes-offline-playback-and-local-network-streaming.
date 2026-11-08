/**
 * StreamLink 2.0 - Gen Z Clean Title Formatter
 * Transforms raw wallpaper, torrent, and web filenames into sleek, cinematic titles.
 */
export function formatDisplayTitle(rawTitle) {
  if (!rawTitle || typeof rawTitle !== 'string') return 'Untitled Feature';
  
  let str = rawTitle;

  // 1. Remove file extensions if present
  str = str.replace(/\.(mp4|mkv|avi|mov|webm|m4v|flv|ts)$/i, '');

  // 2. Remove web domain suffixes and wallpaper tags
  str = str.replace(/\.(com|org|net|ru|to|xyz|tv|io|moe)\b/gi, '');
  str = str.replace(/\b(moewalls|moe\s*walls|wallpaper\s*engine|live\s*wallpaper|wallpaper|wallpapers|desktophut)\b/gi, '');

  // 3. Remove torrent & encoding metadata tags
  str = str.replace(/\b(1080p|720p|4k|2160p|uhd|hdr|hdr10|remux|bluray|bdrip|web-dl|webrip|dvdrip|h264|h265|x264|x265|hevc|aac|dts|ddp5\.1|10bit|atmos)\b/gi, '');
  str = str.replace(/\b(proper|repack|internal|extended|unrated|directors\.cut|dual\.audio|multi)\b/gi, '');

  // 4. Clean up punctuation, braces, empty parens, and separators
  str = str.replace(/[\._\-]+/g, ' ');
  str = str.replace(/[\[\]\(\)\{\}]/g, ' ');
  str = str.replace(/[,;:]+/g, ' ');

  // 5. Collapse extra spaces
  str = str.replace(/\s+/g, ' ').trim();

  if (!str) return rawTitle;

  // 6. Title Case Capitalization for clean editorial look
  const minorWords = new Set(['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'in', 'nor', 'of', 'on', 'or', 'so', 'the', 'to', 'up', 'yet', 'with']);
  const words = str.split(' ');
  const capitalized = words.map((w, idx) => {
    const lower = w.toLowerCase();
    if (idx > 0 && minorWords.has(lower)) {
      return lower;
    }
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  });

  return capitalized.join(' ');
}
