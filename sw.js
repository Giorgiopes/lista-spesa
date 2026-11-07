// Service worker minimo: serve a Chrome per installare la pagina come app (niente cache).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
