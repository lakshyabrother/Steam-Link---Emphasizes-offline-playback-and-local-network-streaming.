export function getApiBaseUrl() {
  if (typeof window !== 'undefined') {
    const custom = localStorage.getItem('streamlink_api_url');
    if (custom) {
      const trimmed = custom.trim().replace(/\/+$/, '');
      // Purge invalid/dummy placeholders if stored
      if (
        trimmed.includes('your-temporary-url') ||
        trimmed.includes('your-tunnel') ||
        trimmed.includes('sponsored-fee-imposed-associations') ||
        trimmed === 'https://' ||
        trimmed === 'http://'
      ) {
        localStorage.removeItem('streamlink_api_url');
      } else {
        return trimmed;
      }
    }
  }
  return (import.meta.env.VITE_API_BASE_URL || '').trim().replace(/\/+$/, '');
}

export function setApiBaseUrl(url) {
  if (typeof window !== 'undefined') {
    if (!url || !url.trim()) {
      localStorage.removeItem('streamlink_api_url');
    } else {
      localStorage.setItem('streamlink_api_url', url.trim().replace(/\/+$/, ''));
    }
  }
}

export function getApiUrl(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const baseUrl = getApiBaseUrl();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return baseUrl ? `${baseUrl}${cleanPath}` : cleanPath;
}