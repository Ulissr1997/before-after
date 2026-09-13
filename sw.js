const CACHE = 'before-after-v26';
const FONT_CACHE = 'before-after-fonts';
const ASSETS = ['./', './index.html', './video.html', './lang.js', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png',
  './inter-400.woff2', './inter-600.woff2', './anton-400.woff2', './playfair-700.woff2', './caveat-700.woff2'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE && k !== FONT_CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // Google Fonts: cache on first use so the app still renders offline
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com'){
    e.respondWith(
      caches.open(FONT_CACHE).then(cache =>
        cache.match(e.request).then(hit =>
          hit || fetch(e.request).then(res => {
            if (res.ok) cache.put(e.request, res.clone());
            return res;
          }).catch(() => hit)
        )
      )
    );
    return;
  }

  // Pages and scripts: try the network first so a deploy shows up immediately.
  // Fonts, icons and everything else stay cache-first — they change with the version.
  const fresh = e.request.mode === 'navigate' ||
                url.pathname.endsWith('.html') ||
                url.pathname.endsWith('.js');

  if (fresh){
    e.respondWith(
      fetch(e.request).then(res => {
        if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        return res;
      }).catch(() => caches.match(e.request).then(hit => hit || caches.match('./index.html')))
    );
    return;
  }

  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request)));
});
