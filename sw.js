self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // অনলাইন অ্যাপের ডিফল্ট ফেচ রিকোয়েস্ট হ্যান্ডেলার
});
