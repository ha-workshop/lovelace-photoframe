// Service worker в ES5: оболочка приложения кэшируется (network-first, при офлайне — из кэша).
// Фото альбома кэшируются отдельно и ключуются по пути без параметров: подпись authSig живёт сутки,
// а размер (w/h) меняется при повороте — кадр при этом тот же, и в кэше не плодятся копии.
// Запросы к Home Assistant (/api/...) и WebSocket не трогаем, кроме самих фото.
var CACHE = 'photoframe-v4';
var PHOTO = '/api/photoframe/photo/';
// Сколько фото держим офлайн и сколько места под них отводим (в APK — те же лимиты на диске).
var PHOTO_MAX = 120;
var PHOTO_BUDGET = 120 * 1024 * 1024;

self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(['index.html', 'manifest.webmanifest']); }));
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

// Ключ кадра — путь без параметров: /api/photoframe/photo/<rel>
function photoKey(href) {
  var q = href.indexOf('?');
  return q < 0 ? href : href.slice(0, q);
}

self.addEventListener('fetch', function (event) {
  var req = event.request;
  var url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  var photo = url.pathname.indexOf(PHOTO) === 0;
  if (!photo && url.pathname.indexOf('/api/') !== -1) return;
  var key = photo ? photoKey(url.href) : req;
  event.respondWith(
    fetch(req).then(function (res) {
      if (res && res.ok) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(key, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(key).then(function (hit) {
        if (hit) return hit;
        // Кадра ещё нет в кэше — возвращаем ошибку, а не index.html (иначе вместо фото придёт страница).
        return photo ? new Response('', { status: 504, statusText: 'Offline' }) : caches.match('index.html');
      });
    })
  );
});

// Страница просит заранее скачать альбом — офлайн рамка продолжает показывать фото.
self.addEventListener('message', function (event) {
  var d = event.data;
  if (!d || d.type !== 'cache-photos' || !d.urls || !d.urls.length) return;
  event.waitUntil(prefetch(d.urls));
});

function prefetch(urls) {
  return caches.open(CACHE).then(function (cache) {
    var total = 0;
    var i = 0;
    function step() {
      if (i >= urls.length || i >= PHOTO_MAX || total >= PHOTO_BUDGET) return Promise.resolve();
      var url = urls[i++];
      var key = photoKey(url);
      return cache.match(key).then(function (hit) {
        if (hit) return step();
        return fetch(url, { credentials: 'same-origin' }).then(function (res) {
          if (!res || !res.ok) return step();
          total += parseInt(res.headers.get('content-length') || '0', 10) || 0;
          return cache.put(key, res).then(step);
        }).catch(function () { return step(); });
      });
    }
    return step();
  });
}
