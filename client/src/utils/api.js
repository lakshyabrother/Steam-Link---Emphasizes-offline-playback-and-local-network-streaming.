export function getApiBaseUrl() {
  if (typeof window !== 'undefined') {
    const custom = localStorage.getItem('streamlink_api_url');
    if (custom) return custom.trim().replace(/\/+$/, '');
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
