const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './icono.png'
  // Agrega aquí otros recursos que desees cachear
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caché abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna el recurso cacheado o realiza la petición a la red
        return response || fetch(event.request);
      })
  );
});
