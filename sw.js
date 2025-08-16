// Service Worker - Offline desteği için
const CACHE_NAME = 'siber-macera-v1';
const urlsToCache = [
  './',
  './index.html',
  './scoreboard.html',
  './style.css',
  './manifest.json',
  './firebase-config.js',
  // Fonts
  './fonts/Gilmer Regular.otf',
  './fonts/Gilmer Bold.otf',
  './fonts/Gilmer Light.otf',
  './fonts/conthrax-sb.otf',
  // Key assets
  './assets/Asset 4.svg',
  './assets/Asset 5.svg',
  './assets/Asset 9.svg',
  './assets/Asset 10.svg',
  './assets/Asset 11.svg',
  './assets/Asset 12.svg',
  './assets/Asset 13.svg',
  './assets/Asset 14.svg',
  './assets/Asset 15.svg',
  './assets/oyungirisekranı.svg',
  // External resources
  'https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js',
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js'
];

// Service Worker kurulumu
self.addEventListener('install', function(event) {
  console.log('🔧 Service Worker kuruluyor...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('📦 Cache açıldı');
        return cache.addAll(urlsToCache.map(url => {
          return new Request(url, {cache: 'reload'});
        }));
      })
      .then(() => {
        console.log('✅ Tüm dosyalar cache\'e eklendi');
        self.skipWaiting();
      })
      .catch(error => {
        console.warn('⚠️ Bazı dosyalar cache\'e eklenemedi:', error);
        // Kritik dosyalar için yeniden deneme
        const criticalFiles = ['./', './index.html', './style.css'];
        return caches.open(CACHE_NAME).then(cache => {
          return cache.addAll(criticalFiles);
        });
      })
  );
});

// Service Worker aktifleştirme
self.addEventListener('activate', function(event) {
  console.log('🚀 Service Worker aktifleştiriliyor...');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Eski cache siliniyor:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ Service Worker aktif');
      self.clients.claim();
    })
  );
});

// Network isteklerini yakalama
self.addEventListener('fetch', function(event) {
  // Sadece kendi domain'imize ait istekleri cache'le
  if (event.request.url.startsWith(self.location.origin) || 
      event.request.url.includes('cdnjs.cloudflare.com') ||
      event.request.url.includes('gstatic.com')) {
    
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache'de varsa cache'den döndür
          if (response) {
            return response;
          }
          
          // Network'ten getirmeye çalış
          return fetch(event.request).then(function(response) {
            // Geçerli response kontrolü
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Response'u clone'la ve cache'e ekle
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }).catch(function() {
            // Network başarısızsa ve HTML request'iyse offline sayfası göster
            if (event.request.destination === 'document') {
              return caches.match('./index.html');
            }
          });
        })
    );
  }
});

// Push notifications (gelecekteki güncellemeler için)
self.addEventListener('push', function(event) {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: './assets/Asset 5.svg',
      badge: './assets/Asset 5.svg',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '1'
      }
    };
    
    event.waitUntil(
      self.registration.showNotification('Siber Macera', options)
    );
  }
});

// Background sync (gelecekteki güncellemeler için)
self.addEventListener('sync', function(event) {
  if (event.tag === 'background-sync') {
    console.log('🔄 Background sync tetiklendi');
  }
});

console.log('📱 Service Worker yüklendi - Offline destek aktif!');
