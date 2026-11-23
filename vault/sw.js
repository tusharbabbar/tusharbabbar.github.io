// Offline cache: serve the app shell from cache, refresh it in the background.
const CACHE = 'vault-mwtot74c';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon.svg', 'icon-180.png', 'icon-512.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  if (e.request.mode === 'navigate' || e.request.url.endsWith('/index.html')) {
    // app shell: newest version when online, cached copy when offline
    e.respondWith(caches.open(CACHE).then((c) => fetch(e.request).then((res) => { if (res.ok) c.put(e.request, res.clone()); return res; })
      .catch(async () => (await c.match(e.request, { ignoreSearch: true })) || c.match('index.html'))));
    return;
  }
  e.respondWith(caches.open(CACHE).then(async (c) => {
    const hit = await c.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then((res) => { if (res.ok) c.put(e.request, res.clone()); return res; }).catch(() => hit);
    return hit || net;
  }));
});
