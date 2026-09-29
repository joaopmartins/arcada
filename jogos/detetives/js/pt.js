/* Exercícios a partir dos bancos: Português (ortografia, gramática, leitura), Inglês, Estudo do Meio */
'use strict';

// memória de itens usados recentemente (evita repetir); o motor guarda/carrega
const Recentes = {
  set: new Set(), fila: [], MAX: 220,
  marcar(k) { if (!k) return; if (!Recentes.set.has(k)) { Recentes.set.add(k); Recentes.fila.push(k); if (Recentes.fila.length > Recentes.MAX) Recentes.set.delete(Recentes.fila.shift()); } },
  tem(k) { return Recentes.set.has(k); },
  escolher(lista, keyFn) {
    if (!lista.length) return null;
    const frescos = lista.filter(x => !Recentes.tem(keyFn(x)));
    const x = U.pick(frescos.length ? frescos : lista);
    Recentes.marcar(keyFn(x));
    return x;
  },
  exportar() { return Recentes.fila.slice(-Recentes.MAX); },
  importar(arr) { (arr || []).forEach(k => Recentes.marcar(k)); },
};

// filtra por nível: preferir o nível pedido, aceitar inferiores; nível 3 (ponte 2.º ano) só quando pedido
function porNivel(lista, lv) {
  const exato = lista.filter(x => (x.nivel || 1) === lv);
  const ate = lista.filter(x => (x.nivel || 1) <= lv);
  // 65% do nível exato, resto dos inferiores
  if (exato.length && Math.random() < 0.65) return exato;
  return ate.length ? ate : lista;
}

const EXCLUIR_GRAM = ['classe']; // classes de palavras (verbo/adjetivo) ficam para mais tarde no 2.º ano

const CASOS_FALTA = {
  'ce-ci': { re: /c(?=[ei])/, op: ['c', 's', 'ç'] },
  'c-cedilha': { re: /ç/, op: ['ç', 'c', 'ss'] },
  'ge-gi': { re: /g(?=[ei])/, op: ['g', 'j'] },
  'gue-gui': { re: /gu(?=[ei])/, op: ['gu', 'g', 'qu'] },
  'que-qui': { re: /qu(?=[ei])/, op: ['qu', 'c', 'gu'] },
  'j': { re: /j/, op: ['j', 'g'] },
  'r-rr': { re: /rr|r/, op: ['rr', 'r'] },
  's-ss': { re: /ss|s/, op: ['ss', 's', 'ç'] },
  's-som-z': { re: /(?<=[aeiouáéíóúâêô])s(?=[aeiouáéíóúâêô])/, op: ['s', 'z'] },
  'z': { re: /z/, op: ['z', 's'] },
  'x': { re: /x/, op: ['x', 'ch', 's'] },
  'ch': { re: /ch/, op: ['ch', 'x', 's'] },
  'nh': { re: /nh/, op: ['nh', 'n', 'lh'] },
  'lh': { re: /lh/, op: ['lh', 'l', 'nh'] },
  'nasal-m': { re: /m(?=[pb])/, op: ['m', 'n'] },
  'nasal-n': { re: /n(?=[^aeiouáéíóúãõh])/, op: ['n', 'm'] },
};

const PT = {
  /* ---- ORTOGRAFIA: ditado com letras-peça, ou letra em falta ---- */
  orto(lv) {
    const B = window.BANCO_ORTO || [];
    if (!B.length) return null;
    const w = Recentes.escolher(porNivel(B, lv), x => 'o:' + x.w);
    if (!w) return null;
    const cf = CASOS_FALTA[w.caso];
    if (cf && Math.random() < 0.4) {
      const m = w.w.match(cf.re);
      if (m) {
        const seg = m[0]; const i = m.index;
        const shown = w.w.slice(0, i) + '<b class="lacuna">__</b>' + w.w.slice(i + seg.length);
        const ops = cf.op.filter(o => o !== seg).slice(0, 2);
        const mc = U.mcFrom(seg, ops);
        return { topic: 'orto', kind: 'mc', q: 'Que letras faltam na palavra?', html: '<div class="palavra">' + (w.e ? '<span class="pemoji">' + w.e + '</span>' : '') + '<span class="ptexto">' + shown + '</span></div>', o: mc.o.map(t => ({ t })), ok: mc.ok, dica: w.dica, speak: w.w, falarAntes: true, nivel: w.nivel };
      }
    }
    return { topic: 'orto', kind: 'letters', q: 'Ouve a palavra e escreve-a com as letras.', word: w.w, intr: w.intr || [], e: w.e || '', dica: w.dica, speak: w.w, falarAntes: true, nivel: w.nivel };
  },

  /* ---- GRAMÁTICA: escolha múltipla do banco + ordenar frases dos textos ---- */
  gram(lv) {
    const B = (window.BANCO_GRAM || []).filter(x => !EXCLUIR_GRAM.includes(x.t));
    if (lv >= 2 && Math.random() < 0.3) { const f = PT.fraseOrdem(); if (f) return f; }
    if (!B.length) return null;
    const it = Recentes.escolher(porNivel(B, lv), x => 'g:' + x.q);
    return { topic: 'gram', kind: 'mc', q: it.q, o: it.o.map(t => ({ t })), ok: it.ok, dica: it.dica, speak: it.q, nivel: it.nivel };
  },
  fraseOrdem() {
    const L = window.BANCO_LEITURA || [];
    const frases = [];
    L.forEach(tx => tx.texto.split(/\n|(?<=[.!?])\s+/).forEach(f => {
      f = f.trim();
      if (!f || /[«»"“”:;]/.test(f)) return;
      const ws = f.split(/\s+/);
      if (ws.length >= 4 && ws.length <= 7) frases.push(f);
    }));
    if (!frases.length) return null;
    const f = Recentes.escolher(frases, x => 'f:' + x);
    const ws = f.split(/\s+/);
    return { topic: 'gram', kind: 'order', q: 'As palavras estão baralhadas. Toca nelas pela ordem certa para formar a frase.', itens: ws.map(t => ({ t })), dica: 'A frase é: «' + f + '». Começa pela palavra com letra maiúscula e acaba na que tem o ponto.', nivel: 2 };
  },

  /* ---- LEITURA: texto + 3 perguntas (+ mentira) ---- */
  leitura(lv) {
    const L = window.BANCO_LEITURA || [];
    if (!L.length) return null;
    const tx = Recentes.escolher(porNivel(L, lv), x => 'l:' + x.id);
    const base = { topic: 'leitura', kind: 'mc', texto: tx.texto, titulo: tx.titulo, falante: tx.falante || '👽', genero: tx.genero, nivel: tx.nivel };
    const lista = tx.perguntas.map(p => Object.assign({}, base, { q: p.q, o: p.o.map(t => ({ t })), ok: p.ok, dica: p.dica, tipo: p.tipo }));
    if (tx.mentira && lv >= 2) lista.push(Object.assign({}, base, { q: tx.mentira.q, o: tx.mentira.o.map(t => ({ t })), ok: tx.mentira.ok, dica: tx.mentira.dica, tipo: 'mentira' }));
    return lista; // array: o caso trata como uma pista com várias perguntas
  },

  /* ---- INGLÊS ---- */
  en(lv) {
    const V = window.BANCO_EN_VOCAB || [], F = window.BANCO_EN_FRASES || [];
    if (!V.length) return null;
    const tipo = U.pick(lv === 1 ? ['ouve', 'ouve', 'traduz', 'diz'] : lv === 2 ? ['ouve', 'traduz', 'diz', 'escreve', 'frase'] : ['traduz', 'diz', 'escreve', 'frase', 'ouve']);
    const emojiDe = (w) => w.num && w.e === '🔢' ? String(w.num) : (w.e === '📅' && w.num ? '📅' : w.e);
    if (tipo === 'frase' && F.length) {
      const f = Recentes.escolher(porNivel(F, lv), x => 'ef:' + x.en);
      const wrongs = U.sample(F.filter(x => x !== f && x.pt !== f.pt), 2).map(x => x.pt);
      const mc = U.mcFrom(f.pt, wrongs);
      return { topic: 'en', kind: 'mc', q: 'O que quer dizer «' + f.en + '»?', html: '<div class="bigemoji">' + f.e + '</div>', o: mc.o.map(t => ({ t })), ok: mc.ok, dica: '«' + f.en + '» quer dizer «' + f.pt + '».', speak: f.en, lang: 'en', falarAntes: true, nivel: f.nivel };
    }
    const semImagem = x => x.e === '🔢' || x.e === '📅';
    const pool = porNivel(V.filter(x => tipo !== 'ouve' || !semImagem(x)), lv);
    const w = Recentes.escolher(pool, x => 'ev:' + x.tema + ':' + x.en);
    const distinto = x => x.en !== w.en && x.pt !== w.pt && (tipo !== 'ouve' || (!semImagem(x) && x.e !== w.e));
    const mesmoTema = V.filter(x => x.tema === w.tema && distinto(x));
    const outros = mesmoTema.length >= 2 ? mesmoTema : V.filter(distinto);
    let wr = U.sample(outros, 2);
    if (tipo === 'ouve' && wr[0].e === wr[1].e) wr = [wr[0], U.pick(outros.filter(x => x.e !== wr[0].e)) || wr[1]];
    switch (tipo) {
      case 'ouve': {
        const mc = U.mcFrom(w, wr);
        return { topic: 'en', kind: 'mc', q: 'Ouve a palavra em inglês e toca na imagem certa.', o: mc.o.map(x => ({ e: emojiDe(x), t: '' })), ok: mc.ok, dica: '«' + w.en + '» é ' + w.pt + '.', speak: w.en, lang: 'en', falarAntes: true, nivel: w.nivel };
      }
      case 'traduz': {
        const mc = U.mcFrom(w.pt, wr.map(x => x.pt));
        return { topic: 'en', kind: 'mc', q: 'O que quer dizer «' + w.en + '»?', html: '<div class="bigemoji">' + emojiDe(w) + '</div>', o: mc.o.map(t => ({ t })), ok: mc.ok, dica: '«' + w.en + '» quer dizer «' + w.pt + '».', speak: w.en, lang: 'en', falarAntes: true, nivel: w.nivel };
      }
      case 'diz': {
        const mc = U.mcFrom(w.en, wr.map(x => x.en));
        return { topic: 'en', kind: 'mc', q: 'Como se diz «' + w.pt + '» em inglês?', html: '<div class="bigemoji">' + emojiDe(w) + '</div>', o: mc.o.map(t => ({ t })), ok: mc.ok, dica: '«' + w.pt + '» em inglês é «' + w.en + '».', speak: w.en, lang: 'en', falarDepois: true, nivel: w.nivel };
      }
      case 'escreve': {
        const curtas = pool.filter(x => /^[a-z]+$/.test(x.en) && x.en.length <= 6);
        const c = curtas.length ? Recentes.escolher(curtas, x => 'ew:' + x.en) : w;
        if (!/^[a-z]+$/.test(c.en)) return PT.en(lv);
        return { topic: 'en', kind: 'letters', q: 'Escreve em inglês: ' + c.pt, word: c.en, intr: [U.pick('aeioubcdlmnprst'.split('').filter(l => !c.en.includes(l)))], e: emojiDe(c), dica: '«' + c.pt + '» em inglês escreve-se «' + c.en + '».', speak: c.en, lang: 'en', falarAntes: true, nivel: c.nivel };
      }
    }
  },

  /* ---- ESTUDO DO MEIO ---- */
  meio(lv, formato) {
    const B = window.BANCO_MEIO || [];
    if (!B.length) return null;
    let pool = porNivel(B, lv);
    if (formato) { const p2 = pool.filter(x => x.f === formato); if (p2.length) pool = p2; }
    const it = Recentes.escolher(pool, x => 'm:' + x.q);
    const base = { topic: 'meio', q: it.q, dica: it.dica, speak: it.q, nivel: it.nivel, src: it.src };
    switch (it.f) {
      case 'mc': return Object.assign(base, { kind: 'mc', o: it.o.map(x => ({ e: x.e || '', t: x.t || '' })), ok: it.ok });
      case 'grupos': return Object.assign(base, { kind: 'groups', g: it.g, itens: it.itens.map(x => ({ e: x.e || '', t: x.t || '', g: x.g })) });
      case 'ordem': return Object.assign(base, { kind: 'order', itens: it.itens.map(x => ({ e: x.e || '', t: x.t || '' })) });
      case 'vf': return Object.assign(base, { kind: 'tf', ok: !!it.ok });
    }
    return null;
  },
};

/* Gerador unificado */
const Gerar = {
  MAT: ['num', 'calc', 'prob', 'seq', 'geo', 'dados', 'med', 'mult'],
  PT: ['orto', 'gram', 'leitura'],
  todos() { return Gerar.MAT.concat(Gerar.PT, ['en', 'meio']); },
  ex(topic, lv) {
    lv = Math.max(1, Math.min(3, lv || 1));
    if (topic === 'mult' && lv < 3) topic = 'calc'; // multiplicação só na ponte
    let ex = null;
    if (Gerar.MAT.includes(topic)) ex = Mat.gerar(topic, lv);
    else if (PT[topic]) ex = PT[topic](lv);
    if (!ex) ex = Mat.gerar('calc', lv);
    return ex;
  },
};
