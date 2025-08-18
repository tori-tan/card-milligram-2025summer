// Basic service worker for PWA installability and offline shell
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // passthrough; can be extended to cache assets
  return;
});
