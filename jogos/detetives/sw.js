/* Service worker: guarda o jogo no dispositivo para funcionar offline.
   Estratégia: cache primeiro, atualização em segundo plano (stale-while-revalidate).
   Ao publicar uma versão nova, mudar VERSAO para forçar a limpeza da cache antiga. */
const VERSAO = 'dg-v1.2';
const FICHEIROS = [
  './', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png',
  './css/style.css',
  './js/util.js', './js/math.js', './js/pt.js', './js/casos.js', './js/engine.js',
  './data/banco_portugues.js', './data/banco_leitura.js', './data/banco_ingles.js', './data/banco_meio.js',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(FICHEIROS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(caches.open(VERSAO).then(async c => {
    const emCache = await c.match(req, { ignoreSearch: true });
    const rede = fetch(req).then(r => { if (r && r.ok) c.put(req, r.clone()); return r; }).catch(() => null);
    if (emCache) { e.waitUntil(rede); return emCache; }
    const r = await rede;
    return r || new Response('Sem ligação e ficheiro ainda não guardado.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  }));
});
