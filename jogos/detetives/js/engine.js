/* Motor do jogo: ecrãs, casos, exercícios, recompensas, missão diária, duelo, painel dos pais */
'use strict';

const TOPICO_NOME = { num: 'Números', calc: 'Cálculo mental', prob: 'Problemas', seq: 'Sequências', geo: 'Geometria', dados: 'Gráficos', med: 'Medida e tempo', mult: 'Dobros e pares', orto: 'Ortografia', gram: 'Gramática', leitura: 'Leitura', en: 'Inglês', meio: 'Estudo do Meio' };
const TOPICO_AREA = { num: 'Matemática', calc: 'Matemática', prob: 'Matemática', seq: 'Matemática', geo: 'Matemática', dados: 'Matemática', med: 'Matemática', mult: 'Matemática', orto: 'Português', gram: 'Português', leitura: 'Português', en: 'Inglês', meio: 'Estudo do Meio' };
const TOPICO_E = { num: '🔢', calc: '🧮', prob: '🧩', seq: '🔁', geo: '📐', dados: '📊', med: '📏', mult: '✖️', orto: '✍️', gram: '📝', leitura: '📖', en: '🇬🇧', meio: '🔬' };

let S = Save.load();
const $app = () => document.getElementById('app');

/* ---------------- estado diário / tempo ---------------- */
const Dia = {
  hoje() { const h = U.hoje(); if (!S.dias[h]) S.dias[h] = { seg: 0, casos: 0, ok: 0, err: 0, duelos: 0 }; return S.dias[h]; },
  tickAtivo: false,
  init() {
    setInterval(() => { if (Dia.tickAtivo && document.visibilityState === 'visible') { Dia.hoje().seg += 10; Save.save(S); } }, 10000);
  },
};

/* ---------------- adaptativo / estatísticas ---------------- */
const Adapt = {
  nivel(topic) { return S.nivel[topic] || 1; },
  registar(topic, ok, ex) {
    const st = S.stats[topic] || (S.stats[topic] = { ok: 0, err: 0, streak: 0, errStreak: 0 });
    const d = Dia.hoje();
    if (ok) { st.ok++; st.streak++; st.errStreak = 0; d.ok++; if (st.streak >= 5) { st.streak = 0; S.nivel[topic] = Math.min(3, Adapt.nivel(topic) + 1); } }
    else {
      st.err++; st.streak = 0; st.errStreak++; d.err++;
      if (st.errStreak >= 2) { st.errStreak = 0; S.nivel[topic] = Math.max(1, Adapt.nivel(topic) - 1); }
      S.erros.unshift({ t: topic, q: (ex.q || '').slice(0, 120), r: Runner.respostaCerta(ex), d: U.hoje(), n: ex.nivel || 1 });
      if (S.erros.length > 60) S.erros.length = 60;
    }
    Save.save(S);
  },
  // nível efetivo para uma zona
  nivelZona(topic, zona) {
    let lv = Adapt.nivel(topic);
    lv = Math.max(zona.lvMin, Math.min(zona.lvMax, lv));
    if (lv === 3 && zona.p3 < 1 && Math.random() > zona.p3) lv = 2;
    if (topic === 'mult' && lv < 3) return 3; // mult só existe em nível 3 (zonas finais)
    return lv;
  },
  // teto global: nunca acima do nível máximo da zona mais avançada já desbloqueada (evita matéria "à frente")
  capGlobal() { return Math.max(...ZONAS.filter(z => Rank.zonaAberta(z)).map(z => z.lvMax)); },
  nivelMissao(topic) {
    let lv = Math.min(Adapt.nivel(topic), Adapt.capGlobal());
    if (lv === 3 && Math.random() < 0.5) lv = 2;
    return lv;
  },
  // tópicos a reforçar (missão do dia)
  fracos(n) {
    const todos = Gerar.todos().filter(t => t !== 'mult');
    const score = todos.map(t => {
      const st = S.stats[t] || { ok: 0, err: 0 };
      const tent = st.ok + st.err;
      const acc = tent ? st.ok / tent : 0.5;
      return { t, s: (1 - acc) * 2 + (tent < 4 ? 0.8 : 0) + Math.random() * 0.4 };
    }).sort((a, b) => b.s - a.s);
    // garantir áreas diferentes
    const out = [], areas = new Set();
    for (const x of score) { if (out.length >= n) break; if (areas.has(TOPICO_AREA[x.t]) && out.length < n - 1 && score.length > n) continue; out.push(x.t); areas.add(TOPICO_AREA[x.t]); }
    while (out.length < n) out.push(score[out.length].t);
    return out;
  },
};

/* ---------------- patente / troféus ---------------- */
const Rank = {
  patente() { let p = PATENTES[0]; for (const x of PATENTES) if (S.trofeus >= x.trof) p = x; return p; },
  proxima() { return PATENTES.find(x => x.trof > S.trofeus) || null; },
  zonaAberta(z) { return S.trofeus >= z.trof; },
  casoAberto(c) {
    const z = ZONAS.find(z => z.id === c.zona);
    if (!Rank.zonaAberta(z)) return false;
    if (c.idx === 0) return true;
    const ant = CASOS.find(x => x.zona === c.zona && x.idx === c.idx - 1);
    return !!(S.casos[ant.id] && S.casos[ant.id].best > 0);
  },
};

/* ---------------- UI base ---------------- */
const UI = {
  render(html) { const a = $app(); a.innerHTML = '<div class="stars"></div>' + html; a.scrollTop = 0; window.scrollTo(0, 0); },
  top(extra) {
    const p = Rank.patente();
    return '<div class="top"><button class="logo" id="logo"><span class="l1">🕵️</span><span>Detetives<br>Galácticos</span></button><div class="row">' + (extra || '') +
      '<span class="pill gold">🏆 ' + S.trofeus + '</span><span class="pill">' + p.e + ' ' + p.nome + '</span></div></div>';
  },
  bindLogo() {
    const l = document.getElementById('logo'); if (!l) return;
    let t = null;
    const down = () => { t = setTimeout(() => { t = null; Pais.abrir(); }, 800); };
    const up = () => { if (t) { clearTimeout(t); t = null; } };
    l.addEventListener('pointerdown', down); l.addEventListener('pointerup', up); l.addEventListener('pointerleave', up); l.addEventListener('pointercancel', up);
    l.addEventListener('contextmenu', e => e.preventDefault());
  },
  falarBtn(txt, lang) { return '<button class="spk" data-say="' + U.esc(txt) + '" data-lang="' + (lang || 'pt') + '" aria-label="ouvir">🔊</button>'; },
  bindSpk(root) { (root || document).querySelectorAll('[data-say]').forEach(b => b.onclick = e => { e.stopPropagation(); Voz.falar(b.dataset.say, b.dataset.lang); }); },
  flash(ok) { const f = U.el('div', 'flash ' + (ok ? 'ok' : 'err')); document.body.appendChild(f); setTimeout(() => f.remove(), 600); },
  confetti(n) {
    const c = U.el('div', 'confetti'); const cores = ['#f1c40f', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#fff'];
    for (let i = 0; i < (n || 60); i++) { const p = U.el('i'); p.style.left = Math.random() * 100 + '%'; p.style.background = U.pick(cores); p.style.animationDelay = (Math.random() * 0.8) + 's'; p.style.transform = 'rotate(' + Math.random() * 360 + 'deg)'; c.appendChild(p); }
    document.body.appendChild(c); setTimeout(() => c.remove(), 2800);
  },
  modal(html, onClose) {
    const m = U.el('div', 'modal'); m.innerHTML = '<div class="card">' + html + '</div>';
    m.addEventListener('click', e => { if (e.target === m) { m.remove(); onClose && onClose(); } });
    document.body.appendChild(m); return m;
  },
  bip(texto, opts) {
    opts = opts || {};
    const gad = S.gadget ? Colecao.item(S.gadget) : null;
    return '<div class="bd"><div class="bip' + (opts.fala ? ' fala' : '') + '">🤖' + (gad ? '<span class="gad">' + gad.e + '</span>' : '') + '</div><div class="balao' + (opts.alien ? ' alien' : '') + '">' + texto + UI.falarBtn(texto.replace(/<[^>]+>/g, ''), 'pt') + '</div></div>';
  },
  optHtml(o) {
    if (o.svg) return '<span class="oe">' + o.svg + '</span>' + (o.t ? '<span>' + U.esc(o.t) + '</span>' : '');
    return (o.e ? '<span class="oe">' + o.e + '</span>' : '') + (o.t ? '<span>' + U.esc(o.t) + '</span>' : '');
  },
};

/* ---------------- ECRÃS ---------------- */
const Tela = {
  inicio() {
    Dia.tickAtivo = false;
    UI.render('<div class="screen"><div class="center" style="margin-top:6vh"><div style="font-size:4.5rem">🕵️🚀</div><h1>Agência de Detetives Galácticos</h1><p class="muted">Bem-vindo, novo detetive! Escolhe o teu nome de código.</p></div>' +
      '<div class="tiles" id="codinomes">' + CODINOMES.map(c => '<button class="tile" data-c="' + c + '"><span class="te">🛰️</span><span class="tt">' + c + '</span></button>').join('') + '</div></div>');
    document.querySelectorAll('#codinomes .tile').forEach(b => b.onclick = () => { Som.toque(); S.codinome = b.dataset.c; Save.save(S); Tela.hq(true); });
  },
  hq(primeira) {
    Dia.tickAtivo = false;
    const p = Rank.patente(), prox = Rank.proxima();
    const det = Colecao.item(S.detetive) || ITENS[0];
    const gad = S.gadget ? Colecao.item(S.gadget) : null;
    const tit = S.titulo ? Colecao.item(S.titulo) : null;
    const pct = prox ? Math.round((S.trofeus - p.trof) / (prox.trof - p.trof) * 100) : 100;
    const missaoFeita = S.missaoDia === U.hoje();
    const deco = S.colecao.map(id => Colecao.item(id)).filter(i => i && i.tipo === 'deco').map(i => '<span title="' + i.nome + '">' + i.e + '</span>').join('');
    const saud = primeira ? 'Olá, ' + S.codinome + '! Eu sou o Bip, o teu robô parceiro. Vamos resolver mistérios pela galáxia!' :
      U.pick(['Olá, ' + S.codinome + '! Pronto para mais um caso?', 'Bip a reportar! Há mistérios à espera.', 'A galáxia precisa de ti, ' + S.codinome + '!', 'Bip, bip! Lupa carregada, vamos a isto!']);
    UI.render('<div class="screen">' + UI.top() +
      '<div class="card"><div class="hq-hero"><div class="avatar">' + det.e + (gad ? '<span class="gad">' + gad.e + '</span>' : '') + '</div><div style="flex:1"><div class="patente">' + p.e + ' ' + p.nome + '</div><div class="muted" style="font-size:.9rem">' + S.codinome + (tit ? ' · ' + tit.nome : '') + '</div><div class="prog"><i style="width:' + pct + '%"></i></div><div class="muted" style="font-size:.85rem">' + (prox ? 'Faltam ' + (prox.trof - S.trofeus) + ' troféus para ' + prox.nome : 'Patente máxima!') + (S.streak > 0 ? ' · 🔥 ' + S.streak + ' dia' + (S.streak > 1 ? 's' : '') + ' seguidos' : '') + '</div></div></div>' +
      UI.bip(saud, { fala: true }) + (deco ? '<div class="deco-shelf">' + deco + '</div>' : '') + '</div>' +
      '<div class="tiles">' +
      '<button class="tile missao' + (missaoFeita ? ' feita' : '') + '" id="t-missao"><div><span class="te">' + (missaoFeita ? '✅' : '📋') + '</span><span class="tt">Missão do Dia' + (missaoFeita ? '' : '<span class="badge">2 caixas</span>') + '</span></div><span class="ts">' + (missaoFeita ? 'Feita! Volta amanhã para manter a sequência 🔥' : '3 pistas especiais escolhidas pelo Bip. Mantém a sequência!') + '</span></button>' +
      '<button class="tile" id="t-zonas"><span class="te">🗺️</span><div><span class="tt">Casos</span><br><span class="ts">Explorar a galáxia</span></div></button>' +
      '<button class="tile" id="t-duelo"><span class="te">⚡</span><div><span class="tt">Duelo</span><br><span class="ts">60 s contra o Robô Rival</span></div></button>' +
      '<button class="tile" id="t-colecao"><span class="te">🎁</span><div><span class="tt">Coleção' + (S.caixas > 0 ? '<span class="badge">' + S.caixas + '</span>' : '') + '</span><br><span class="ts">' + S.colecao.length + '/' + (ITENS.length - 1) + ' itens</span></div></button>' +
      '</div><p class="hint" style="margin-top:14px">Pais: toque longo no logótipo.</p></div>');
    UI.bindLogo(); UI.bindSpk();
    document.getElementById('t-missao').onclick = () => { Som.toque(); missaoFeita ? Tela.zonas() : Runner.startMissao(); };
    document.getElementById('t-zonas').onclick = () => { Som.toque(); Tela.zonas(); };
    document.getElementById('t-duelo').onclick = () => { Som.toque(); Duelo.intro(); };
    document.getElementById('t-colecao').onclick = () => { Som.toque(); Tela.colecao(); };
    if (primeira) Voz.falar(saud, 'pt');
  },
  zonas() {
    UI.render('<div class="screen">' + UI.top('<button class="pill" id="back">← Base</button>') + '<h2>🗺️ Mapa da Galáxia</h2><div class="zonas">' +
      ZONAS.map(z => {
        const aberta = Rank.zonaAberta(z);
        const feitos = CASOS.filter(c => c.zona === z.id).map(c => (S.casos[c.id] || {}).best || 0);
        return '<button class="zona' + (aberta ? '' : ' lock') + '" data-z="' + z.id + '"><span class="ze" style="background:' + z.cor + '33">' + (aberta ? z.e : '🔒') + '</span><div style="flex:1"><div class="zt">' + z.nome + '</div><div class="zs">' + (aberta ? z.desc : 'Precisas de ' + z.trof + ' troféus 🏆') + '</div><div class="dots">' + feitos.map(f => '<i class="d' + f + '"></i>').join('') + '</div></div></button>';
      }).join('') + '</div></div>');
    UI.bindLogo();
    document.getElementById('back').onclick = () => Tela.hq();
    document.querySelectorAll('.zona').forEach(b => b.onclick = () => { const z = ZONAS.find(z => z.id === b.dataset.z); if (!Rank.zonaAberta(z)) { UI.flash(false); return; } Som.toque(); Tela.casos(z); });
  },
  casos(z) {
    UI.render('<div class="screen">' + UI.top('<button class="pill" id="back">← Mapa</button>') + '<h2>' + z.e + ' ' + z.nome + '</h2><p class="muted">' + z.desc + '</p><div class="casos">' +
      CASOS.filter(c => c.zona === z.id).map(c => {
        const ab = Rank.casoAberto(c), best = (S.casos[c.id] || {}).best || 0;
        return '<button class="caso' + (ab ? '' : ' lock') + '" data-c="' + c.id + '"><span class="cn">CASO ' + (c.idx + 1) + '</span><span class="ct">' + (ab ? c.titulo : '🔒 ???') + '</span><span class="cs">' + (best ? '⭐'.repeat(best) + '<span class="off" style="opacity:.25">' + '⭐'.repeat(3 - best) + '</span>' : (ab ? '<span style="opacity:.3">⭐⭐⭐</span>' : '')) + '</span></button>';
      }).join('') + '</div></div>');
    UI.bindLogo();
    document.getElementById('back').onclick = () => Tela.zonas();
    document.querySelectorAll('.caso').forEach(b => b.onclick = () => { const c = CASOS.find(c => c.id === b.dataset.c); if (!Rank.casoAberto(c)) { UI.flash(false); return; } Som.toque(); Runner.startCaso(c); });
  },
  colecao(tab) {
    tab = tab || 'detetive';
    const tipos = ['detetive', 'gadget', 'deco', 'titulo'];
    const ativo = { detetive: S.detetive, gadget: S.gadget, deco: null, titulo: S.titulo };
    UI.render('<div class="screen">' + UI.top('<button class="pill" id="back">← Base</button>') + '<h2>🎁 Coleção</h2>' +
      (S.caixas > 0 ? '<div class="card center" style="margin-bottom:12px"><div class="muted">Tens caixas por abrir!</div><button class="btn gold" id="abrir">🎁 Abrir caixa (' + S.caixas + ')</button></div>' : '') +
      '<div class="tabs">' + tipos.map(t => '<button class="tab' + (t === tab ? ' on' : '') + '" data-t="' + t + '">' + TIPO_NOME[t] + 's</button>').join('') + '</div>' +
      '<div class="grid-col">' + ITENS.filter(i => i.tipo === tab).map(i => {
        const tem = i.base || S.colecao.includes(i.id);
        return '<button class="citem' + (tem ? '' : ' lock') + (ativo[tab] === i.id ? ' ativo' : '') + '" data-i="' + i.id + '"><span class="tag" style="background:' + RAR[i.r].cor + '"></span><span class="ce">' + i.e + '</span><span class="cn">' + (tem ? i.nome : '???') + '</span>' + (tem && i.frase ? '<span class="muted" style="font-size:.75rem">«' + i.frase + '»</span>' : '') + '</button>';
      }).join('') + '</div><p class="hint" style="margin-top:10px">' + (tab === 'deco' ? 'A decoração aparece no teu gabinete.' : 'Toca num item que já tens para o usar.') + '</p></div>');
    UI.bindLogo();
    document.getElementById('back').onclick = () => Tela.hq();
    const ab = document.getElementById('abrir'); if (ab) ab.onclick = () => Caixa.abrir(() => Tela.colecao(tab));
    document.querySelectorAll('.tab').forEach(b => b.onclick = () => Tela.colecao(b.dataset.t));
    document.querySelectorAll('.citem').forEach(b => b.onclick = () => {
      const i = Colecao.item(b.dataset.i); if (!(i.base || S.colecao.includes(i.id))) { UI.flash(false); return; }
      Som.toque();
      if (i.tipo === 'detetive') S.detetive = i.id; else if (i.tipo === 'gadget') S.gadget = S.gadget === i.id ? null : i.id; else if (i.tipo === 'titulo') S.titulo = S.titulo === i.id ? null : i.id;
      Save.save(S); Tela.colecao(tab);
    });
  },
};

/* ---------------- CAIXAS ---------------- */
const Caixa = {
  abrir(depois) {
    if (S.caixas <= 0) { depois && depois(); return; }
    UI.render('<div class="screen"><div class="result" style="margin-top:6vh"><h2>Caixa de Provas</h2><p class="muted">Toca na caixa para a abrir!</p><div class="caixa tremer" id="cx">🎁</div><div id="rev"></div></div></div>');
    const cx = document.getElementById('cx');
    cx.onclick = () => {
      cx.onclick = null; Som.caixa();
      S.caixas--; S.caixasAbertas++;
      const r = Colecao.sortear(S); Save.save(S);
      const rar = RAR[r.item.r];
      cx.style.transform = 'scale(1.3)'; cx.textContent = '✨';
      setTimeout(() => {
        cx.style.display = 'none';
        if (r.item.r === 'epico' || r.item.r === 'lendario') { Som.epico(); UI.confetti(90); } else Som.certo();
        document.getElementById('rev').innerHTML = '<div class="reveal"><span class="re" style="color:' + rar.cor + '">' + r.item.e + '</span><span class="rar" style="background:' + rar.cor + '">' + rar.nome + '</span><h2>' + r.item.nome + '</h2><div class="muted">' + TIPO_NOME[r.item.tipo] + (r.dup ? ' · já tinhas este! Fica como recordação.' : '') + (r.item.frase ? '<br>«' + r.item.frase + '»' : '') + '</div>' +
          (r.item.tipo === 'detetive' && !r.dup ? '<button class="btn small sec" id="usar">Usar este detetive</button>' : '') + (r.item.tipo === 'gadget' && !r.dup ? '<button class="btn small sec" id="usar">Dar ao Bip</button>' : '') +
          '<button class="btn gold" id="cont">' + (S.caixas > 0 ? '🎁 Abrir outra (' + S.caixas + ')' : 'Continuar') + '</button></div>';
        const u = document.getElementById('usar'); if (u) u.onclick = () => { if (r.item.tipo === 'detetive') S.detetive = r.item.id; else S.gadget = r.item.id; Save.save(S); u.textContent = '✔ A usar'; u.disabled = true; };
        document.getElementById('cont').onclick = () => { Som.toque(); if (S.caixas > 0) Caixa.abrir(depois); else depois && depois(); };
      }, 500);
    };
  },
};

/* ---------------- RUNNER DE CASOS ---------------- */
const Runner = {
  st: null,
  respostaCerta(ex) {
    if (!ex) return '';
    switch (ex.kind) {
      case 'mc': { const o = ex.o[ex.ok]; return (o.t || '') + (o.e ? ' ' + o.e : ''); }
      case 'num': return String(ex.ans);
      case 'tf': return ex.ok ? 'Verdadeiro' : 'Falso';
      case 'letters': return ex.word;
      case 'order': return ex.itens.map(i => i.t || i.e).join(' → ');
      case 'groups': return ex.g.map((g, gi) => g + ': ' + ex.itens.filter(i => i.g === gi).map(i => i.t || i.e).join(', ')).join(' | ');
    }
    return '';
  },
  startCaso(caso) {
    const zona = ZONAS.find(z => z.id === caso.zona);
    Runner.st = { tipo: 'caso', caso, zona, pistas: caso.pistas.map(t => ({ t, estado: 0 })), fila: [], idx: -1, certas: 0, erradas: 0, primeira: 0, boss: null, inicio: Date.now(), retries: {} };
    Runner.intro();
  },
  startMissao() {
    const tops = Adapt.fracos(3);
    const caso = { id: 'missao', titulo: 'Missão do Dia', intro: ['O Bip escolheu 3 pistas especiais só para ti.', 'São as que mais precisas de treinar. Vamos a isso!'], suspeitos: [['🤖', 'Robô Rival'], ['👽', 'Zuk'], ['🦹', 'Vilão Sombra']].map(s => ({ e: s[0], n: s[1] })), culpado: U.ri(0, 2), final: 'Missão cumprida! O Bip está orgulhoso de ti.', pistas: tops };
    Runner.st = { tipo: 'missao', caso, zona: null, pistas: tops.map(t => ({ t, estado: 0 })), fila: [], idx: -1, certas: 0, erradas: 0, primeira: 0, boss: null, inicio: Date.now(), retries: {} };
    Runner.intro();
  },
  intro() {
    const st = Runner.st, c = st.caso;
    Dia.tickAtivo = true;
    UI.render('<div class="screen">' + UI.top('<button class="pill" id="sair">✕</button>') +
      '<div class="card"><h2>' + (st.zona ? st.zona.e + ' ' : '📋 ') + c.titulo + '</h2>' + UI.bip(c.intro[0] + ' ' + c.intro[1], { fala: true }) +
      '<h3>Suspeitos</h3><div class="suspeitos">' + c.suspeitos.map(s => '<div class="susp"><div class="se">' + s.e + '</div><div>' + s.n + '</div></div>').join('') + '</div>' +
      '<p class="muted center" style="margin-top:10px">Pistas a recolher: ' + st.pistas.map(p => TOPICO_E[p.t]).join(' ') + '</p>' +
      '<button class="btn wide gold" id="go">🔍 Começar a investigar</button></div></div>');
    UI.bindLogo(); UI.bindSpk();
    document.getElementById('sair').onclick = () => Runner.sair();
    document.getElementById('go').onclick = () => { Som.toque(); Voz.parar(); Runner.proximo(); };
  },
  sair() {
    UI.modal('<h3>Sair do caso?</h3><p class="muted">O progresso deste caso perde-se, mas o que aprendeste fica.</p><div class="row"><button class="btn sec" id="m-nao">Continuar a jogar</button><button class="btn" id="m-sim">Sair</button></div>');
    document.getElementById('m-nao').onclick = () => document.querySelector('.modal').remove();
    document.getElementById('m-sim').onclick = () => { document.querySelector('.modal').remove(); Voz.parar(); Tela.hq(); };
  },
  nivelPara(t) { const st = Runner.st; return st.zona ? Adapt.nivelZona(t, st.zona) : Adapt.nivelMissao(t); },
  // prepara os passos de uma pista (pode ser várias perguntas, ex.: leitura)
  passosPista(pi, retry) {
    const st = Runner.st, t = st.pistas[pi].t;
    let ex = Gerar.ex(t, Runner.nivelPara(t));
    if (!ex) return [];
    const arr = Array.isArray(ex) ? ex : [ex];
    return arr.map((e, i) => ({ pi, ex: e, retry: !!retry, primeiro: i === 0 }));
  },
  proximo() {
    const st = Runner.st;
    st.idx++;
    if (st.idx >= st.fila.length) {
      // próxima pista ainda não gerada?
      const proxPi = st.fila.length ? Math.max(...st.fila.map(p => p.pi)) + 1 : 0;
      const pendente = st.pistas.findIndex((p, i) => i >= proxPi);
      if (pendente >= 0 && !st.boss) { st.fila.push(...Runner.passosPista(pendente)); }
      else if (!st.boss) { Runner.bossIntro(); return; }
      else { Runner.fim(); return; }
    }
    if (st.idx >= st.fila.length) { Runner.proximo(); return; }
    Runner.mostrar(st.fila[st.idx]);
  },
  mostrar(passo) {
    const st = Runner.st, ex = passo.ex, t = ex.topic;
    st.cur = ex;
    st.pistas.forEach((p, i) => { if (i === passo.pi && p.estado === 0) p.estado = 'cur'; });
    const intro = passo.retry ? 'O Bip encontrou outra pista igual! Mais uma tentativa.' : (passo.primeiro ? U.pick(PISTA_INTRO[t] || ['Vamos lá!']) : 'Mais uma pergunta sobre o mesmo.');
    const progresso = '<div class="pistas">' + st.pistas.map((p, i) => '<i class="' + (i === passo.pi ? 'cur' : p.estado === 1 ? 'on' : p.estado === 2 ? 'err' : '') + '"></i>').join('') + '<span class="boss">🦹</span></div>';
    UI.render('<div class="screen">' + UI.top('<button class="pill" id="sair">✕</button>') + progresso + UI.bip('<b>' + TOPICO_E[t] + ' ' + TOPICO_NOME[t] + '</b><br>' + intro, { fala: true }) + '<div class="ex" id="ex"></div></div>');
    UI.bindLogo(); UI.bindSpk();
    document.getElementById('sair').onclick = () => Runner.sair();
    Exer.render(document.getElementById('ex'), ex, (ok, detalhe) => Runner.responder(passo, ok, detalhe));
  },
  responder(passo, ok, detalhe) {
    const st = Runner.st, ex = passo.ex;
    Adapt.registar(ex.topic, ok, ex);
    if (ok) { st.certas++; if (!passo.retry) st.primeira++; Som.certo(); UI.flash(true); }
    else { st.erradas++; Som.errado(); UI.flash(false); }
    // estado da pista: só fecha quando termina o último passo dessa pista
    const restantes = st.fila.filter((p, i) => i > st.idx && p.pi === passo.pi).length;
    if (restantes === 0) {
      const errosPista = st.fila.filter(p => p.pi === passo.pi).some(p => p.errou);
      passo.errou = !ok;
      st.pistas[passo.pi].estado = (errosPista || !ok) ? 2 : 1;
      // repetir pista (uma vez) se errou e não é leitura
      if (!ok && !passo.retry && !Array.isArray(Gerar.ex.__noop) && ex.topic !== 'leitura' && !st.retries[passo.pi]) {
        st.retries[passo.pi] = true;
        const novos = Runner.passosPista(passo.pi, true);
        st.fila.splice(st.idx + 1, 0, ...novos);
      }
    } else passo.errou = !ok;
    Feedback.mostrar(ok, ex, detalhe, () => Runner.proximo());
  },
  /* ---- chefe ---- */
  bossIntro() {
    const st = Runner.st, c = st.caso;
    st.boss = { alvo: st.tipo === 'missao' ? 3 : 5, certas: 0, erradas: 0 };
    UI.render('<div class="screen">' + UI.top('<button class="pill" id="sair">✕</button>') + '<div class="card center"><div style="font-size:4rem">🦹</div><h2>Apanhar o culpado!</h2>' +
      UI.bip('Temos todas as pistas! Agora responde a ' + st.boss.alvo + ' perguntas rápidas para apanhar o culpado. Se errares, aparece outra. Tu consegues!', { fala: true }) +
      '<button class="btn wide" id="go">⚡ Vamos!</button></div></div>');
    UI.bindLogo(); UI.bindSpk();
    document.getElementById('sair').onclick = () => Runner.sair();
    document.getElementById('go').onclick = () => { Som.toque(); Voz.parar(); Runner.bossPergunta(); };
  },
  bossEx() {
    const st = Runner.st;
    let ex = null, guard = 0;
    while (guard++ < 12) {
      const t = U.pick(st.pistas.map(p => p.t).filter(t => t !== 'leitura'));
      ex = Gerar.ex(t, Runner.nivelPara(t));
      if (Array.isArray(ex)) ex = null;
      if (ex && ['mc', 'tf', 'num'].includes(ex.kind)) break; else ex = null;
    }
    return ex || Mat.gerar('calc', 1);
  },
  bossPergunta() {
    const st = Runner.st, b = st.boss, ex = Runner.bossEx();
    st.cur = ex;
    const dots = '<div class="pistas">' + st.pistas.map(p => '<i class="' + (p.estado === 1 ? 'on' : 'err') + '"></i>').join('') + '<span class="boss cur">🦹</span></div>';
    UI.render('<div class="screen">' + UI.top('<button class="pill" id="sair">✕</button>') + dots +
      '<div class="row" style="justify-content:space-between;margin-bottom:8px"><span class="pill">🦹 Perseguição</span><span class="pill gold">' + '⭐'.repeat(b.certas) + '<span style="opacity:.3">' + '⭐'.repeat(b.alvo - b.certas) + '</span></span></div>' +
      UI.bip(U.pick(['Rápido, detetive!', 'Ele está a fugir!', 'Mais uma e apanhamo-lo!', 'Não o deixes escapar!']), { fala: false }) + '<div class="ex" id="ex"></div></div>');
    UI.bindLogo(); UI.bindSpk();
    document.getElementById('sair').onclick = () => Runner.sair();
    Exer.render(document.getElementById('ex'), ex, (ok, det) => {
      Adapt.registar(ex.topic, ok, ex);
      if (ok) { b.certas++; Som.certo(); UI.flash(true); } else { b.erradas++; Som.errado(); UI.flash(false); }
      Feedback.mostrar(ok, ex, det, () => { if (b.certas >= b.alvo) Runner.fim(); else Runner.bossPergunta(); });
    });
  },
  /* ---- fim do caso ---- */
  fim() {
    const st = Runner.st, c = st.caso, b = st.boss || { erradas: 0 };
    Dia.tickAtivo = false;
    const errosTot = st.erradas + b.erradas;
    const estrelas = errosTot <= 1 ? 3 : errosTot <= 4 ? 2 : 1;
    let trof = 8 + st.primeira * 2 + (b.erradas <= 1 ? 5 : 0);
    let caixas = 1, bonus = 0, msgExtra = '';
    if (st.tipo === 'missao') {
      trof = 15; caixas = 2;
      const h = U.hoje(); S.missaoDia = h;
      S.streak = (S.ultimoMissao === U.ontem()) ? S.streak + 1 : 1; S.ultimoMissao = h;
      msgExtra = '🔥 Sequência: ' + S.streak + ' dia' + (S.streak > 1 ? 's' : '') + ' seguidos!';
    } else {
      const reg = S.casos[c.id] || { best: 0, vezes: 0 };
      if (reg.vezes === 0) { bonus = 10; msgExtra = '🎉 Primeira vez neste caso: +10 troféus!'; }
      reg.vezes++; reg.best = Math.max(reg.best, estrelas); S.casos[c.id] = reg;
    }
    const antes = Rank.patente();
    S.trofeus += trof + bonus; S.caixas += caixas; Dia.hoje().casos++;
    Save.save(S);
    const depois = Rank.patente(); const subiu = depois !== antes;
    Som.fanfarra(); UI.confetti(estrelas * 25);
    const culp = c.suspeitos[c.culpado];
    UI.render('<div class="screen"><div class="card result"><h2>Caso resolvido!</h2><div class="estrelas">' + '⭐'.repeat(estrelas) + '<span class="off">' + '⭐'.repeat(3 - estrelas) + '</span></div>' +
      '<div class="suspeitos">' + c.suspeitos.map((s, i) => '<div class="susp' + (i === c.culpado ? ' culp' : '') + '"><div class="se">' + s.e + '</div><div>' + s.n + '</div></div>').join('') + '</div>' +
      UI.bip('🔎 Culpado: <b>' + culp.n + '</b>. ' + c.final.replace(/^[^!]*!\s*/, ''), { fala: true }) +
      '<div class="row center"><span class="pill gold">🏆 +' + (trof + bonus) + '</span><span class="pill">🎁 +' + caixas + ' caixa' + (caixas > 1 ? 's' : '') + '</span><span class="pill">✅ ' + st.certas + (b.certas ? ' + ' + b.certas : '') + ' certas</span></div>' +
      (msgExtra ? '<div class="muted">' + msgExtra + '</div>' : '') +
      (subiu ? '<div class="card soft" style="width:100%"><div style="font-size:2.4rem">' + depois.e + '</div><b>Nova patente: ' + depois.nome + '!</b></div>' : '') +
      '<button class="btn gold wide" id="abrir">🎁 Abrir caixa' + (caixas > 1 ? 's' : '') + '</button><button class="btn sec wide" id="voltar">Voltar à base</button></div></div>');
    UI.bindSpk();
    document.getElementById('abrir').onclick = () => Caixa.abrir(() => Tela.hq());
    document.getElementById('voltar').onclick = () => Tela.hq();
    Voz.falar('Caso resolvido! O culpado é ' + culp.n + '.', 'pt');
  },
};

/* ---------------- FEEDBACK ---------------- */
const Feedback = {
  mostrar(ok, ex, detalhe, cont) {
    const fb = U.el('div', 'fb ' + (ok ? 'ok' : 'err'));
    const certa = Runner.respostaCerta(ex);
    const frase = ok ? U.pick(['Boa!', 'Excelente!', 'Isso mesmo!', 'Pista encontrada!', 'Muito bem, detetive!', 'Brutal!']) : U.pick(['Quase!', 'Não faz mal!', 'Boa tentativa!', 'Aprende-se a errar!']);
    fb.innerHTML = '<div class="in"><div class="fe">' + (ok ? U.pick(['🎉', '✅', '🌟', '🔍']) : '🤖') + '</div><div class="ft"><b>' + frase + '</b>' +
      (ok ? (ex.dica && ex.kind !== 'letters' && Math.random() < 0.35 ? '<span style="opacity:.85">' + U.esc(ex.dica) + '</span>' : '') : '<span>Resposta certa: <u>' + U.esc(certa) + '</u></span>' + (ex.dica ? '<br><span style="opacity:.9">' + U.esc(ex.dica) + '</span>' : '')) +
      '</div><button class="btn ' + (ok ? 'ok' : '') + '" id="fb-cont">Continuar ▶</button></div>';
    document.body.appendChild(fb);
    if (!ok && S.opts.voz) Voz.falar(frase + ' ' + (ex.dica || 'A resposta certa era ' + certa + '.'), 'pt');
    else if (ok && ex.falarDepois) Voz.falar(ex.speak, ex.lang || 'pt');
    document.getElementById('fb-cont').onclick = () => { Som.toque(); Voz.parar(); fb.remove(); cont(); };
  },
};

/* ---------------- RENDERIZAÇÃO DE EXERCÍCIOS ---------------- */
const Exer = {
  render(root, ex, done) {
    let fim = false;
    const finish = (ok, det) => { if (fim) return; fim = true; done(ok, det); };
    let h = '';
    if (ex.texto) h += '<div class="texto"><div class="tit">' + (ex.falante || '👽') + ' ' + U.esc(ex.titulo || '') + '</div>' + U.esc(ex.texto) + UI.falarBtn(ex.texto, 'pt') + '</div>';
    // se a palavra é dita antes (ditado, inglês), o altifalante repete a PALAVRA na língua certa; senão lê a pergunta
    h += '<div class="q">' + U.esc(ex.q) + ' ' + UI.falarBtn(ex.falarAntes && ex.speak ? ex.speak : ex.q, ex.falarAntes && ex.speak ? (ex.lang || 'pt') : 'pt') + '</div>';
    if (ex.html) h += ex.html;
    if (ex.falarAntes && ex.speak && ex.kind !== 'letters') h += '<div class="row center"><button class="btn small sec" data-say="' + U.esc(ex.speak) + '" data-lang="' + (ex.lang || 'pt') + '">🔊 Ouvir outra vez</button></div>';
    root.innerHTML = h;
    UI.bindSpk(root);
    // ouvir a palavra/pergunta automaticamente
    if (ex.falarAntes && ex.speak) {
      setTimeout(() => Voz.falar(ex.speak, ex.lang || 'pt', 0.85), 350);
    }
    switch (ex.kind) {
      case 'mc': Exer.mc(root, ex, finish); break;
      case 'tf': Exer.tf(root, ex, finish); break;
      case 'num': Exer.num(root, ex, finish); break;
      case 'letters': Exer.letters(root, ex, finish); break;
      case 'groups': Exer.groups(root, ex, finish); break;
      case 'order': Exer.order(root, ex, finish); break;
      default: Exer.mc(root, ex, finish);
    }
  },
  mc(root, ex, done) {
    const emo = ex.o.every(o => (o.e || o.svg) && !o.t);
    const wrap = U.el('div', 'opts' + (emo ? ' emo' : ''));
    ex.o.forEach((o, i) => {
      const b = U.el('button', 'opt', UI.optHtml(o));
      b.onclick = () => {
        wrap.querySelectorAll('.opt').forEach((x, j) => { x.disabled = true; if (j === ex.ok) x.classList.add('ok'); else if (j === i) x.classList.add('err'); else x.classList.add('dim'); });
        if (i !== ex.ok) b.classList.add('shake');
        setTimeout(() => done(i === ex.ok), 350);
      };
      wrap.appendChild(b);
    });
    root.appendChild(wrap);
  },
  tf(root, ex, done) {
    const wrap = U.el('div', 'tf');
    [[true, '✅ Verdadeiro'], [false, '❌ Falso']].forEach(([v, t]) => {
      const b = U.el('button', 'opt', t);
      b.onclick = () => { wrap.querySelectorAll('.opt').forEach(x => x.disabled = true); b.classList.add(v === ex.ok ? 'ok' : 'err'); setTimeout(() => done(v === ex.ok), 350); };
      wrap.appendChild(b);
    });
    root.appendChild(wrap);
  },
  num(root, ex, done) {
    let val = '';
    const show = U.el('div', 'numshow', '?');
    const pad = U.el('div', 'numpad');
    root.appendChild(show); root.appendChild(pad);
    const upd = () => { show.textContent = val === '' ? '?' : val; };
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '⌫', '0', 'OK'].forEach(k => {
      const b = U.el('button', 'k' + (k === '⌫' ? ' del' : k === 'OK' ? ' go' : ''), k);
      b.onclick = () => {
        Som.tic();
        if (k === '⌫') val = val.slice(0, -1);
        else if (k === 'OK') { if (val === '') return; const ok = parseInt(val, 10) === ex.ans; show.style.borderColor = ok ? '#2ecc71' : '#e74c3c'; if (!ok) show.classList.add('shake'); pad.querySelectorAll('.k').forEach(x => x.disabled = true); setTimeout(() => done(ok), 300); return; }
        else if (val.length < 4) val += k;
        upd();
      };
      pad.appendChild(b);
    });
  },
  letters(root, ex, done) {
    const word = ex.word.toLowerCase();
    const letras = U.shuffle(word.split('').concat(ex.intr || []));
    const top = U.el('div', 'palavra', (ex.e ? '<span class="pemoji">' + ex.e + '</span>' : '') + '<button class="btn small sec" id="ouvir">🔊 Ouvir outra vez</button>');
    const slots = U.el('div', 'slots'); const tiles = U.el('div', 'letras');
    const hint = U.el('div', 'hint', 'Toca nas letras pela ordem. Toca numa letra colocada para a tirar.');
    root.appendChild(top); root.appendChild(slots); root.appendChild(tiles); root.appendChild(hint);
    // sem voz portuguesa: mostrar a palavra por instantes
    if (!Voz.temPT() || !S.opts.voz) { const m = U.el('div', 'hint', 'Memoriza a palavra: <b style="font-size:1.4rem;color:#f7d354">' + word + '</b>'); root.insertBefore(m, slots); setTimeout(() => m.remove(), 3000); }
    document.getElementById('ouvir').onclick = () => Voz.falar(ex.speak || word, ex.lang || 'pt', 0.8);
    const preenchido = new Array(word.length).fill(null); // índice da peça usada
    const drawSlots = () => {
      slots.innerHTML = '';
      preenchido.forEach((pi, i) => {
        const s = U.el('div', 'slot' + (pi !== null ? ' f' : ''), pi !== null ? letras[pi] : '');
        s.onclick = () => { if (pi === null) return; Som.tic(); preenchido[i] = null; tiles.children[pi].classList.remove('used'); drawSlots(); };
        slots.appendChild(s);
      });
    };
    letras.forEach((l, pi) => {
      const b = U.el('button', 'letra', l);
      b.onclick = () => {
        const i = preenchido.indexOf(null); if (i < 0) return;
        Som.tic(); preenchido[i] = pi; b.classList.add('used'); drawSlots();
        if (preenchido.every(x => x !== null)) {
          const tent = preenchido.map(p => letras[p]).join('');
          const ok = tent === word;
          slots.querySelectorAll('.slot').forEach((s, k) => { s.onclick = null; s.classList.add(word[k] === tent[k] ? 'ok' : 'err'); });
          tiles.querySelectorAll('.letra').forEach(x => x.disabled = true);
          if (!ok) slots.classList.add('shake');
          setTimeout(() => done(ok), 500);
        }
      };
      tiles.appendChild(b);
    });
    drawSlots();
  },
  groups(root, ex, done) {
    const itens = U.shuffle(ex.itens.map((it, i) => Object.assign({ id: i, em: null }, it)));
    const pool = U.el('div', 'pool'); const grupos = U.el('div', 'grupos');
    const hint = U.el('div', 'hint', 'Toca num item e depois no grupo certo.');
    const btn = U.el('button', 'btn wide ok', 'Verificar'); btn.disabled = true;
    root.appendChild(pool); root.appendChild(grupos); root.appendChild(hint); root.appendChild(btn);
    let sel = null;
    const chipHtml = it => (it.e ? '<span class="ce">' + it.e + '</span>' : '') + (it.t ? '<span>' + U.esc(it.t) + '</span>' : '');
    const draw = () => {
      pool.innerHTML = ''; grupos.innerHTML = '';
      itens.filter(it => it.em === null).forEach(it => { const c = U.el('button', 'chip' + (sel === it.id ? ' sel' : ''), chipHtml(it)); c.onclick = () => { Som.tic(); sel = sel === it.id ? null : it.id; draw(); }; pool.appendChild(c); });
      ex.g.forEach((g, gi) => {
        const box = U.el('div', 'grupo' + (sel !== null ? ' sel' : '')); box.innerHTML = '<div class="gt">' + U.esc(g) + '</div>';
        const gi_ = U.el('div', 'gi');
        itens.filter(it => it.em === gi).forEach(it => { const c = U.el('button', 'chip', chipHtml(it)); c.dataset.id = it.id; c.onclick = e => { e.stopPropagation(); Som.tic(); it.em = null; draw(); }; gi_.appendChild(c); });
        box.appendChild(gi_);
        box.onclick = () => { if (sel === null) return; Som.tic(); itens.find(it => it.id === sel).em = gi; sel = null; draw(); };
        grupos.appendChild(box);
      });
      btn.disabled = itens.some(it => it.em === null);
    };
    btn.onclick = () => {
      let ok = true;
      grupos.querySelectorAll('.chip').forEach(c => { const it = itens.find(x => x.id === +c.dataset.id); const certo = it.em === it.g; if (!certo) ok = false; c.classList.add(certo ? 'ok' : 'err'); c.onclick = null; });
      grupos.querySelectorAll('.grupo').forEach(b => b.onclick = null);
      btn.disabled = true;
      setTimeout(() => done(ok), 600);
    };
    draw();
  },
  order(root, ex, done) {
    const itens = ex.itens.map((it, i) => Object.assign({ id: i }, it));
    let restantes = U.shuffle(itens.slice());
    // evitar começar já na ordem certa
    if (restantes.every((it, i) => it.id === i) && itens.length > 1) restantes = restantes.reverse();
    let out = [];
    const outBox = U.el('div', 'ordem-out'); const pool = U.el('div', 'pool');
    const hint = U.el('div', 'hint', 'Toca pela ordem certa. Toca num item já colocado para o tirar.');
    const btns = U.el('div', 'row center'); const limpar = U.el('button', 'btn small sec', 'Limpar'); const ver = U.el('button', 'btn ok', 'Verificar'); ver.disabled = true;
    btns.appendChild(limpar); btns.appendChild(ver);
    root.appendChild(outBox); root.appendChild(pool); root.appendChild(hint); root.appendChild(btns);
    const chipHtml = it => (it.e ? '<span class="ce">' + it.e + '</span>' : '') + (it.t ? '<span>' + U.esc(it.t) + '</span>' : '');
    const draw = () => {
      outBox.innerHTML = out.length ? '' : '<span class="hint">A ordem aparece aqui</span>'; pool.innerHTML = '';
      out.forEach((it, i) => { const c = U.el('button', 'chip', '<span class="n">' + (i + 1) + '.</span>' + chipHtml(it)); c.onclick = () => { Som.tic(); out.splice(i, 1); restantes.push(it); draw(); }; outBox.appendChild(c); });
      restantes.forEach(it => { const c = U.el('button', 'chip', chipHtml(it)); c.onclick = () => { Som.tic(); restantes = restantes.filter(x => x !== it); out.push(it); draw(); }; pool.appendChild(c); });
      ver.disabled = restantes.length > 0;
    };
    limpar.onclick = () => { Som.tic(); restantes = U.shuffle(itens.slice()); out = []; draw(); };
    ver.onclick = () => {
      let ok = true;
      outBox.querySelectorAll('.chip').forEach((c, i) => { const certo = out[i].id === i; if (!certo) ok = false; c.classList.add(certo ? 'ok' : 'err'); c.onclick = null; });
      ver.disabled = true; limpar.disabled = true;
      setTimeout(() => done(ok), 600);
    };
    draw();
  },
};

/* ---------------- DUELO (60 s) ---------------- */
const Duelo = {
  st: null,
  intro() {
    UI.render('<div class="screen">' + UI.top('<button class="pill" id="back">← Base</button>') + '<div class="card center"><div style="font-size:4rem">⚡🤖</div><h2>Duelo contra o Robô Rival</h2>' +
      UI.bip('60 segundos, perguntas rápidas. Cada resposta certa vale um ponto. O Robô Rival também vai responder... quem ganha?', { fala: true }) +
      '<div class="muted">Vitórias: ' + S.duelos.v + ' · Derrotas: ' + S.duelos.d + '</div><br><button class="btn wide" id="go">⚡ Começar</button></div></div>');
    UI.bindLogo(); UI.bindSpk();
    document.getElementById('back').onclick = () => Tela.hq();
    document.getElementById('go').onclick = () => { Som.toque(); Voz.parar(); Duelo.start(); };
  },
  ex() {
    // perguntas rápidas: níveis adaptativos mas só formatos rápidos
    let ex = null, guard = 0;
    const tops = ['calc', 'num', 'seq', 'meio', 'gram', 'en', 'geo', 'med', 'calc', 'meio'];
    while (guard++ < 15) {
      const t = U.pick(tops);
      const lv = Math.min(Adapt.nivel(t), 2, Adapt.capGlobal());
      ex = t === 'meio' ? PT.meio(lv, Math.random() < 0.6 ? 'vf' : 'mc') : Gerar.ex(t, lv);
      if (ex && !Array.isArray(ex) && ['mc', 'tf', 'num'].includes(ex.kind) && !ex.texto) break; else ex = null;
    }
    return ex || Mat.gerar('calc', 1);
  },
  start() {
    Duelo.st = { t: 60, eu: 0, rival: 0, fim: false, timer: null, rivalTimer: null };
    Dia.tickAtivo = true;
    Duelo.st.timer = setInterval(() => {
      const st = Duelo.st; st.t--;
      const el = document.getElementById('timer'); if (el) { el.textContent = st.t; if (st.t <= 10) el.classList.add('low'); }
      if (st.t <= 0) Duelo.fim();
    }, 1000);
    // o rival pontua a um ritmo ligado ao nível do jogador (mais forte quando o jogador sobe de nível)
    const media = Object.values(S.nivel); const nv = media.length ? media.reduce((a, b) => a + b, 0) / media.length : 1;
    const ritmo = nv >= 2.5 ? 4500 : nv >= 1.8 ? 5500 : 7000;
    const rivalTick = () => { if (Duelo.st.fim) return; if (Math.random() < 0.75) { Duelo.st.rival++; const r = document.getElementById('sc-rival'); if (r) { r.textContent = Duelo.st.rival; r.parentElement.classList.add('shake'); setTimeout(() => r.parentElement.classList.remove('shake'), 350); } } Duelo.st.rivalTimer = setTimeout(rivalTick, ritmo + U.ri(-1200, 1200)); };
    Duelo.st.rivalTimer = setTimeout(rivalTick, ritmo);
    Duelo.pergunta();
  },
  pergunta() {
    const st = Duelo.st; if (st.fim) return;
    const ex = Duelo.ex();
    st.cur = ex;
    UI.render('<div class="screen"><div class="duelo-top"><div class="score">🕵️ <span id="sc-eu">' + st.eu + '</span></div><div class="timer' + (st.t <= 10 ? ' low' : '') + '" id="timer">' + st.t + '</div><div class="score">🤖 <span id="sc-rival">' + st.rival + '</span></div></div><div class="ex" id="ex"></div><button class="btn small sec" id="sair" style="margin-top:10px;align-self:center">Desistir</button></div>');
    document.getElementById('sair').onclick = () => Duelo.fim(true);
    Exer.render(document.getElementById('ex'), ex, ok => {
      if (st.fim) return;
      Adapt.registar(ex.topic, ok, ex);
      if (ok) { st.eu++; Som.certo(); UI.flash(true); setTimeout(() => Duelo.pergunta(), 350); }
      else { Som.errado(); UI.flash(false); Feedback.mostrar(false, ex, null, () => Duelo.pergunta()); }
    });
  },
  fim(desistiu) {
    const st = Duelo.st; if (st.fim) return; st.fim = true;
    clearInterval(st.timer); clearTimeout(st.rivalTimer); Dia.tickAtivo = false;
    document.querySelectorAll('.fb').forEach(f => f.remove());
    const ganhou = !desistiu && st.eu > st.rival, empate = !desistiu && st.eu === st.rival;
    let trof = 0;
    if (ganhou) { trof = 5; S.duelos.v++; } else if (!desistiu) { S.duelos.d++; trof = 1; }
    S.trofeus += trof; Dia.hoje().duelos++; Save.save(S);
    if (ganhou) { Som.fanfarra(); UI.confetti(50); }
    UI.render('<div class="screen"><div class="card result"><div style="font-size:4rem">' + (ganhou ? '🏆' : empate ? '🤝' : '🤖') + '</div><h2>' + (desistiu ? 'Duelo interrompido' : ganhou ? 'Ganhaste o duelo!' : empate ? 'Empate!' : 'O Robô Rival ganhou desta vez') + '</h2>' +
      '<div class="row center"><span class="score">🕵️ ' + st.eu + '</span><span class="score">🤖 ' + st.rival + '</span></div>' +
      (trof ? '<span class="pill gold">🏆 +' + trof + '</span>' : '') +
      UI.bip(ganhou ? 'Incrível! O Robô Rival ficou a fumegar.' : empate ? 'Empate! Da próxima ganhas tu.' : 'Boa tentativa! Cada duelo deixa-te mais rápido.', { fala: true }) +
      '<button class="btn wide" id="outra">⚡ Outro duelo</button><button class="btn sec wide" id="voltar">Voltar à base</button></div></div>');
    UI.bindSpk();
    document.getElementById('outra').onclick = () => Duelo.start();
    document.getElementById('voltar').onclick = () => Tela.hq();
  },
};

/* ---------------- PAINEL DOS PAIS ---------------- */
const Pais = {
  abrir() {
    Dia.tickAtivo = false; Voz.parar();
    const dias = Object.keys(S.dias).sort().reverse().slice(0, 14);
    const tot = Object.values(S.dias).reduce((a, d) => ({ seg: a.seg + d.seg, casos: a.casos + d.casos, ok: a.ok + d.ok, err: a.err + d.err }), { seg: 0, casos: 0, ok: 0, err: 0 });
    const acc = tot.ok + tot.err ? Math.round(tot.ok / (tot.ok + tot.err) * 100) : 0;
    const tops = Gerar.todos();
    UI.render('<div class="screen pais">' + UI.top('<button class="pill" id="back">← Sair</button>') + '<h2>👨‍👩‍👦 Painel dos Pais</h2>' +
      '<div class="card"><h3>Resumo</h3><div class="row"><span class="pill">📅 ' + Object.keys(S.dias).length + ' dias jogados</span><span class="pill">⏱️ ' + Math.round(tot.seg / 60) + ' min</span><span class="pill">🗂️ ' + tot.casos + ' casos</span><span class="pill">🎯 ' + acc + '% certas</span><span class="pill">🔥 sequência ' + S.streak + '</span></div>' +
      '<p class="muted" style="font-size:.85rem">Nível 1-2 = matéria do 1.º ano; nível 3 = ponte para o início do 2.º ano. O nível sobe com 5 respostas certas seguidas e desce com 2 erradas seguidas, e nunca ultrapassa o nível da zona mais avançada já desbloqueada.</p></div>' +
      '<div class="card" style="margin-top:12px"><h3>Por tema</h3><table><tr><th>Tema</th><th>Nível</th><th>Acertos</th><th></th></tr>' +
      tops.map(t => { const st = S.stats[t] || { ok: 0, err: 0 }; const n = st.ok + st.err; const p = n ? Math.round(st.ok / n * 100) : 0; return '<tr><td>' + TOPICO_E[t] + ' ' + TOPICO_NOME[t] + '<br><span class="muted" style="font-size:.75rem">' + TOPICO_AREA[t] + '</span></td><td>' + (S.nivel[t] || 1) + '</td><td>' + st.ok + '/' + n + '</td><td><div class="bar"><i style="width:' + p + '%"></i></div></td></tr>'; }).join('') + '</table></div>' +
      '<div class="card" style="margin-top:12px"><h3>Últimos dias</h3><table><tr><th>Dia</th><th>Tempo</th><th>Casos</th><th>Certas</th><th>Erradas</th></tr>' + (dias.length ? dias.map(d => { const x = S.dias[d]; return '<tr><td>' + d + '</td><td>' + Math.round(x.seg / 60) + ' min</td><td>' + x.casos + '</td><td>' + x.ok + '</td><td>' + x.err + '</td></tr>'; }).join('') : '<tr><td colspan="5" class="muted">Ainda não jogou.</td></tr>') + '</table></div>' +
      '<div class="card" style="margin-top:12px"><h3>Últimos erros (' + S.erros.length + ')</h3>' + (S.erros.length ? S.erros.slice(0, 40).map(e => '<div class="erro-item"><b>' + TOPICO_E[e.t] + ' ' + TOPICO_NOME[e.t] + '</b> · nível ' + e.n + ' · ' + e.d + '<br>' + U.esc(e.q) + '<br><span class="muted">Certa: ' + U.esc(e.r) + '</span></div>').join('') : '<p class="muted">Sem erros registados.</p>') + '</div>' +
      '<div class="card" style="margin-top:12px"><h3>Opções</h3><div class="row"><button class="btn small sec" id="o-voz">🔊 Voz: ' + (S.opts.voz ? 'ligada' : 'desligada') + '</button><button class="btn small sec" id="o-som">🎵 Sons: ' + (S.opts.som ? 'ligados' : 'desligados') + '</button><button class="btn small sec" id="o-nome">✏️ Mudar nome de código</button></div>' +
      '<p class="muted" style="font-size:.85rem">Voz portuguesa disponível neste dispositivo: ' + (Voz.temPT() ? 'sim' : 'não (o jogo mostra a palavra por instantes no ditado)') + '</p>' +
      '<div class="row" style="margin-top:8px"><button class="btn small sec" id="o-export">📋 Copiar dados (JSON)</button><button class="btn small" style="background:#c0392b;box-shadow:0 6px 0 #7b241c" id="o-reset">🗑️ Apagar progresso</button></div></div></div>');
    UI.bindLogo();
    document.getElementById('back').onclick = () => Tela.hq();
    document.getElementById('o-voz').onclick = () => { S.opts.voz = !S.opts.voz; Voz.ativa = S.opts.voz; Save.save(S); Pais.abrir(); };
    document.getElementById('o-som').onclick = () => { S.opts.som = !S.opts.som; Som.ativo = S.opts.som; Save.save(S); Pais.abrir(); };
    document.getElementById('o-nome').onclick = () => { S.codinome = null; Save.save(S); Tela.inicio(); };
    document.getElementById('o-export').onclick = () => { const txt = JSON.stringify(S); if (navigator.clipboard) navigator.clipboard.writeText(txt).then(() => alert('Copiado!'), () => prompt('Copia:', txt)); else prompt('Copia:', txt); };
    document.getElementById('o-reset').onclick = () => {
      UI.modal('<h3>Apagar TODO o progresso?</h3><p class="muted">Troféus, coleção e estatísticas desaparecem. Não dá para voltar atrás.</p><div class="row"><button class="btn sec" id="m-nao">Cancelar</button><button class="btn" style="background:#c0392b;box-shadow:0 6px 0 #7b241c" id="m-sim">Apagar tudo</button></div>');
      document.getElementById('m-nao').onclick = () => document.querySelector('.modal').remove();
      document.getElementById('m-sim').onclick = () => { Save.reset(); S = Save.load(); document.querySelector('.modal').remove(); Tela.inicio(); };
    };
  },
};

/* ---------------- arranque ---------------- */
window.addEventListener('DOMContentLoaded', () => {
  Voz.init(); Som.init(); Dia.init();
  Voz.ativa = S.opts.voz; Som.ativo = S.opts.som;
  Recentes.importar(S.recentes);
  window.addEventListener('beforeunload', () => { S.recentes = Recentes.exportar(); Save.save(S); });
  setInterval(() => { S.recentes = Recentes.exportar(); }, 15000);
  // sequência diária: se falhou um dia, a contagem recomeça
  if (S.ultimoMissao && S.ultimoMissao !== U.hoje() && S.ultimoMissao !== U.ontem()) { S.streak = 0; Save.save(S); }
  if (!S.codinome) Tela.inicio(); else Tela.hq();
});
