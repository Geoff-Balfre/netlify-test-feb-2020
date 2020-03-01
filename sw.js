
/* Cache name and content */
var cacheName = "hello-pwa-v1";
var filesToCache = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/main.js",
  "/offline.html"
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', (e) => {
  console.log('SW: service worker installed');
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
//      return cache.addAll("offline.html");
    })
  );
});

/* Activate the service worker */
self.addEventListener('activate', (e) => {
//  console.log('SW: service worker activated', e);

});

/* Serve cached content when offline */
self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.open(cacheName).then((cache) => {
        return caches.match || fetch(e.request);
//        return caches.match("offline.html");
      });
    })
  );
});


/* https://workboxjs.org */

// install event
//self.addEventListener('install', evt => {
//  console.log('service worker installed');
//});

// activate event
//self.addEventListener('activate', evt => {
//  console.log('service worker activated');
//});
