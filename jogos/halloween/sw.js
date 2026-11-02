/* Service worker - cache offline do Super Trunfo dos Monstros */
const CACHE = "trunfo-monstros-v1";
const ASSETS = [
  "./", "index.html", "manifest.webmanifest",
  "icon-192.png", "icon-512.png"
];
self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate", e=>{
  e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));
});
// network-first: sempre fresco quando ha internet, cache quando offline
self.addEventListener("fetch", e=>{
  if(e.request.method!=="GET") return;
  e.respondWith(
    fetch(e.request).then(res=>{
      const copy=res.clone();
      caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});
      return res;
    }).catch(()=>caches.match(e.request))
  );
});
