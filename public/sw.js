// Smart Study Tutorial PWA Service Worker (V7 - Mobile Resilient & Vercel Optimized)
const CACHE_NAME = 'smart-study-pwa-v7';

const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg',
  '/pwa-192x192.png',
  '/pwa-512x512.png',
  '/apple-touch-icon.png'
];

// Install: precache essential shell assets safely
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(
        PRECACHE_ASSETS.map((url) =>
          fetch(url)
            .then((res) => {
              if (res.ok) {
                return cache.put(url, res);
              }
            })
            .catch(() => {
              // Silently ignore individual asset precache failures
            })
        )
      );
    })
  );
  self.skipWaiting();
});

// Activate: clean up all old caches immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Message listener for instant updates
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Fetch: Network-First for Navigation (HTML), Stale-While-Revalidate for static assets
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Pass through non-GET, API endpoints, Chrome extensions, or vite internal dev paths
  if (
    request.method !== 'GET' ||
    !request.url.startsWith('http') ||
    request.url.includes('/api/') ||
    request.url.includes('/@vite/') ||
    request.url.includes('/@fs/') ||
    request.url.includes('/node_modules/') ||
    request.url.includes('?import') ||
    request.url.includes('?t=')
  ) {
    return;
  }

  // 1. Navigation requests (Page loads / URL clicks): Always Network-First
  // Ensures mobile browsers get latest deployed HTML & JS hashes, never a stale 404 bundle!
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          // Offline fallback
          const cached = await caches.match(request);
          if (cached) return cached;

          const fallbackIndex = (await caches.match('/index.html')) || (await caches.match('/'));
          if (fallbackIndex) return fallbackIndex;

          return new Response(
            `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Smart Study Tutorial - Offline</title>
              <style>
                body { background-color: #020617; color: #f8fafc; font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 1.5rem; text-align: center; }
                .card { max-width: 420px; background: #0f172a; padding: 2rem; border-radius: 1.5rem; border: 1px solid #1e293b; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5); }
                h1 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: #818cf8; }
                p { font-size: 0.875rem; color: #94a3b8; margin-bottom: 1.5rem; line-height: 1.5; }
                button { background: #4f46e5; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 600; cursor: pointer; }
              </style>
            </head>
            <body>
              <div class="card">
                <h1>Smart Study Tutorial</h1>
                <p>You appear to be offline or the connection is momentarily slow. Please check your internet connection and tap reload.</p>
                <button onclick="window.location.reload()">Reload Application</button>
              </div>
            </body>
            </html>`,
            { headers: { 'Content-Type': 'text/html' } }
          );
        })
    );
    return;
  }

  // 2. Static Assets (JS chunks, CSS, SVGs, Fonts, Images): Cache-first with network fallback
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(request)
        .then((networkResponse) => {
          const contentType = networkResponse.headers.get('content-type') || '';
          const isJs = request.url.includes('.js');
          const isHtmlResponse = contentType.includes('text/html');

          // Never cache HTML responses disguised as JS chunks (which happens on 404 SPA fallback)
          if (networkResponse && networkResponse.ok && (!isJs || !isHtmlResponse)) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return cachedResponse || new Response(null, { status: 504, statusText: 'Gateway Timeout' });
        });
    })
  );
});
