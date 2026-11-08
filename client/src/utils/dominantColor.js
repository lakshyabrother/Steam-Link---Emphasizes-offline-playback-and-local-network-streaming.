/**
 * StreamLink 2.0 — Obsidian Cinema Dynamic Artwork Color Extractor
 * Extracts dominant ambient hues from movie posters & backdrops using HTML5 Canvas.
 * Results are cached in memory so no re-computation occurs on renders.
 */

const colorCache = new Map();

/**
 * Extracts a rich ambient hue from an image URL.
 * Falls back to Obsidian Lavender (#B69AFF) if CORS or loading fails.
 */
export async function getDominantArtworkColor(imageUrl) {
  if (!imageUrl) return '#B69AFF';
  if (colorCache.has(imageUrl)) return colorCache.get(imageUrl);

  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 24;
        canvas.height = 24;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve('#B69AFF');
          return;
        }

        ctx.drawImage(img, 0, 0, 24, 24);
        const data = ctx.getImageData(0, 0, 24, 24).data;

        let totalR = 0, totalG = 0, totalB = 0, validPixels = 0;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          // Luminance check: skip near-blacks and washed-out near-whites to find the vivid cinematic hue
          const lum = 0.299 * r + 0.587 * g + 0.114 * b;
          if (lum > 30 && lum < 220) {
            totalR += r;
            totalG += g;
            totalB += b;
            validPixels++;
          }
        }

        let dominantColor = '#B69AFF';
        if (validPixels > 0) {
          const avgR = Math.round(totalR / validPixels);
          const avgG = Math.round(totalG / validPixels);
          const avgB = Math.round(totalB / validPixels);
          dominantColor = `rgb(${avgR}, ${avgG}, ${avgB})`;
        }

        colorCache.set(imageUrl, dominantColor);
        resolve(dominantColor);
      } catch (err) {
        resolve('#B69AFF');
      }
    };

    img.onerror = () => {
      resolve('#B69AFF');
    };

    img.src = imageUrl;
  });
}
