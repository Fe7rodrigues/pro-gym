const CACHE_NAME = 'zoro-app-v5';
const ASSETS = [
    './',
    './index.html',
    './css/style.css',
    './js/script.js',
    './assets/img/icon.png',
    './assets/img/logo.png',
    'https://cdn.tailwindcss.com',
    'https://unpkg.com/lucide@latest'
];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => res || fetch(e.request))
    );
});