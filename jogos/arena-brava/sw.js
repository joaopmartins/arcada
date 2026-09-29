/* Service worker do Arena Brava.

   Objectivo: depois de abrir o jogo uma vez, ele passa a funcionar SEM rede
   nenhuma (carro, casa dos avos, avuiao). Mas tambem nao pode ficar preso numa
   versao velha, senao as correcoes nunca chegavam ao telemovel.

   Estrategia: rede primeiro, cache como rede de seguranca.
   - com internet: vai sempre buscar a versao mais recente e guarda-a
   - sem internet: serve a ultima que guardou
*/

const VERSAO = 'arena-brava-v1';
const ESSENCIAIS = [
  './',
  './index.html',
  './manifest.json',
  './icone-192.png',
  './icone-512.png',
  './icone-apple.png'
];

self.addEventListener('install', ev => {
  ev.waitUntil(
    caches.open(VERSAO)
      .then(c => c.addAll(ESSENCIAIS))
      // se um dos ficheiros falhar nao vale a pena abortar a instalacao toda:
      // o jogo em si (index.html) e o que interessa
      .catch(() => caches.open(VERSAO).then(c => c.add('./index.html')))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', ev => {
  ev.waitUntil(
    caches.keys()
      .then(nomes => Promise.all(nomes.filter(n => n !== VERSAO).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', ev => {
  const pedido = ev.request;
  if (pedido.method !== 'GET') return;
  // so tratamos do que e nosso; nada de mexer noutros dominios
  if (new URL(pedido.url).origin !== self.location.origin) return;

  ev.respondWith(
    fetch(pedido)
      .then(resposta => {
        if (resposta && resposta.ok) {
          const copia = resposta.clone();
          caches.open(VERSAO).then(c => c.put(pedido, copia)).catch(() => {});
        }
        return resposta;
      })
      .catch(() =>
        caches.match(pedido).then(guardada => {
          if (guardada) return guardada;
          // navegacao sem rede e sem cache exacta: devolve o jogo
          if (pedido.mode === 'navigate') return caches.match('./index.html');
          return new Response('', { status: 504, statusText: 'sem rede' });
        })
      )
  );
});
