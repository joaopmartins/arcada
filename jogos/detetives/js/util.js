/* Utilitários: aleatório, baralhar, voz, sons, guardar */
'use strict';

const U = {
  ri(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); },
  pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; },
  shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },
  // escolhe n elementos distintos
  sample(arr, n) { return U.shuffle(arr).slice(0, n); },
  // opções de escolha múltipla: baralha e devolve {o, ok}
  mcFrom(correct, wrongs) {
    const all = U.shuffle([{ v: correct, ok: true }].concat(wrongs.map(w => ({ v: w, ok: false }))));
    return { o: all.map(x => x.v), ok: all.findIndex(x => x.ok) };
  },
  // distratores numéricos únicos, perto do certo, >= 0
  distractors(ans, n, spread) {
    spread = spread || Math.max(2, Math.round(Math.abs(ans) * 0.3) + 2);
    const set = new Set();
    let guard = 0;
    while (set.size < n && guard++ < 200) {
      let d = ans + U.ri(-spread, spread);
      if (d === ans || d < 0) continue;
      set.add(d);
    }
    // se falhar (ex.: ans=0), completa
    let k = 1;
    while (set.size < n) { if (ans + k !== ans) set.add(ans + k); k++; }
    return Array.from(set);
  },
  hoje() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  },
  ontem() {
    const d = new Date(); d.setDate(d.getDate() - 1);
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  },
  esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); },
  el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  },
  // remove acentos para comparar
  norm(s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); },
  cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); },
};

/* ---------- Voz (Web Speech API) ---------- */
const Voz = {
  vozes: [], pronta: false, ativa: true,
  init() {
    if (!('speechSynthesis' in window)) return;
    const load = () => { Voz.vozes = speechSynthesis.getVoices(); Voz.pronta = Voz.vozes.length > 0; };
    load();
    speechSynthesis.onvoiceschanged = load;
  },
  voz(lang) {
    const want = lang === 'en' ? ['en-GB', 'en_GB', 'en-US', 'en'] : ['pt-PT', 'pt_PT', 'pt-BR', 'pt'];
    for (const w of want) {
      const v = Voz.vozes.find(v => v.lang && v.lang.replace('_', '-').toLowerCase().startsWith(w.toLowerCase()));
      if (v) return v;
    }
    return null;
  },
  temPT() { return !!Voz.voz('pt'); },
  falar(texto, lang, rate) {
    if (!Voz.ativa || !('speechSynthesis' in window) || !texto) return false;
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(texto);
      const v = Voz.voz(lang || 'pt');
      if (v) { u.voice = v; u.lang = v.lang; } else u.lang = lang === 'en' ? 'en-GB' : 'pt-PT';
      u.rate = rate || 0.9;
      u.pitch = 1.05;
      speechSynthesis.speak(u);
      return !!v;
    } catch (e) { return false; }
  },
  parar() { try { speechSynthesis.cancel(); } catch (e) { } },
};

/* ---------- Sons (Web Audio) ---------- */
const Som = {
  ctx: null, ativo: true,
  init() {
    const arranca = () => {
      if (!Som.ctx) { try { Som.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { } }
      if (Som.ctx && Som.ctx.state === 'suspended') Som.ctx.resume();
    };
    document.addEventListener('pointerdown', arranca, { passive: true });
    document.addEventListener('touchstart', arranca, { passive: true });
  },
  tom(f, dur, tipo, vol, t0) {
    if (!Som.ativo || !Som.ctx) return;
    const c = Som.ctx, o = c.createOscillator(), g = c.createGain();
    o.type = tipo || 'sine'; o.frequency.value = f;
    const t = c.currentTime + (t0 || 0);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol || 0.15, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(c.destination);
    o.start(t); o.stop(t + dur + 0.05);
  },
  certo() { Som.tom(660, 0.12, 'sine', 0.15); Som.tom(880, 0.18, 'sine', 0.15, 0.1); },
  errado() { Som.tom(220, 0.25, 'triangle', 0.12); },
  toque() { Som.tom(500, 0.05, 'square', 0.04); },
  fanfarra() { [523, 659, 784, 1047].forEach((f, i) => Som.tom(f, 0.25, 'sine', 0.15, i * 0.12)); Som.tom(1047, 0.5, 'sine', 0.12, 0.5); },
  caixa() { for (let i = 0; i < 6; i++) Som.tom(400 + i * 120, 0.08, 'square', 0.05, i * 0.07); },
  epico() { [392, 523, 659, 784, 1047, 1319].forEach((f, i) => Som.tom(f, 0.3, 'sine', 0.14, i * 0.1)); },
  tic() { Som.tom(1200, 0.03, 'square', 0.03); },
};

/* ---------- Guardar ---------- */
const Save = {
  KEY: 'dg_save_v1',
  def() {
    return {
      v: 1, criado: U.hoje(), codinome: null, trofeus: 0, xpTotal: 0,
      casos: {},            // id -> {best, vezes}
      caixas: 0, caixasAbertas: 0, pity: 0,
      colecao: [],          // ids de itens
      detetive: 'novato', gadget: null, titulo: null,
      nivel: {},            // topic -> 1..3
      stats: {},            // topic -> {ok, err, streak, hist:[1/0...]}
      erros: [],            // últimos erros {t, q, r, d}
      dias: {},             // 'YYYY-MM-DD' -> {seg, casos, ok, err}
      streak: 0, ultimoDia: null, missaoDia: null,
      duelos: { v: 0, d: 0 },
      opts: { voz: true, som: true },
    };
  },
  load() {
    try {
      const raw = localStorage.getItem(Save.KEY);
      if (!raw) return Save.def();
      const s = Object.assign(Save.def(), JSON.parse(raw));
      s.opts = Object.assign({ voz: true, som: true }, s.opts || {});
      return s;
    } catch (e) { return Save.def(); }
  },
  save(s) { try { localStorage.setItem(Save.KEY, JSON.stringify(s)); } catch (e) { } },
  reset() { try { localStorage.removeItem(Save.KEY); } catch (e) { } },
};
