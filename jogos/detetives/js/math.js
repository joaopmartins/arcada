/* Geradores de exercícios de Matemática (regras, sem repetição)
   Nível 1-2 = 1.º ano; nível 3 = ponte para o INÍCIO do 2.º ano (até 200, centena, dobros, dinheiro simples).
   Cada gerador devolve um exercício normalizado:
   {topic, kind:'mc'|'num'|'order'|'tf', q, o:[{e,t}], ok, ans, itens, html, dica, speak}
*/
'use strict';

const NOMES = ['a Lua', 'o Tomás', 'a Mia', 'o Bip', 'o alien Zog', 'a capitã Órbita', 'o Rui', 'a Sofia', 'o robô Tico', 'a Inês'];
const COISAS = [
  { s: 'cristal', p: 'cristais', e: '💎' }, { s: 'estrela', p: 'estrelas', e: '⭐', f: true }, { s: 'moeda', p: 'moedas', e: '🪙', f: true },
  { s: 'pegada', p: 'pegadas', e: '👣', f: true }, { s: 'chave', p: 'chaves', e: '🔑', f: true }, { s: 'bolacha', p: 'bolachas', e: '🍪', f: true },
  { s: 'parafuso', p: 'parafusos', e: '🔩' }, { s: 'pilha', p: 'pilhas', e: '🔋', f: true }, { s: 'lupa', p: 'lupas', e: '🔍', f: true },
  { s: 'meteorito', p: 'meteoritos', e: '☄️' }, { s: 'maçã', p: 'maçãs', e: '🍎', f: true }, { s: 'livro', p: 'livros', e: '📚' },
];
const QTOS = c => c.f ? 'Quantas' : 'Quantos';
const FORMAS = ['🔴', '🔵', '🟢', '🟡', '🟣', '🟠', '⭐', '🔺', '🟦', '💜'];
const DIAS = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado', 'domingo'];
const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const ORD = ['1.º', '2.º', '3.º', '4.º', '5.º', '6.º', '7.º', '8.º', '9.º', '10.º', '11.º', '12.º', '13.º', '14.º', '15.º', '16.º', '17.º', '18.º', '19.º', '20.º'];
const ORDN = ['primeiro', 'segundo', 'terceiro', 'quarto', 'quinto', 'sexto', 'sétimo', 'oitavo', 'nono', 'décimo', 'décimo primeiro', 'décimo segundo', 'décimo terceiro', 'décimo quarto', 'décimo quinto', 'décimo sexto', 'décimo sétimo', 'décimo oitavo', 'décimo nono', 'vigésimo'];

function mcNum(topic, q, ans, n, spread, dica, extra) {
  const m = U.mcFrom(ans, U.distractors(ans, n || 3, spread));
  return Object.assign({ topic, kind: 'mc', q, o: m.o.map(v => ({ t: String(v) })), ok: m.ok, dica }, extra || {});
}
function mcStr(topic, q, correct, wrongs, dica, extra) {
  const m = U.mcFrom(correct, wrongs);
  return Object.assign({ topic, kind: 'mc', q, o: m.o.map(v => (typeof v === 'object' ? v : { t: String(v) })), ok: m.ok, dica }, extra || {});
}
function numEx(topic, q, ans, dica, extra) {
  return Object.assign({ topic, kind: 'num', q, ans, dica }, extra || {});
}
function emojiGrid(e, n, cols) {
  cols = cols || (n > 12 ? 6 : 5);
  let h = '<div class="egrid" style="grid-template-columns:repeat(' + cols + ',1fr)">';
  for (let i = 0; i < n; i++) h += '<span>' + e + '</span>';
  return h + '</div>';
}
function svgFigura(nome, cor, tam) {
  tam = tam || 90; cor = cor || '#5b8def';
  const c = tam / 2, r = tam * 0.42;
  const poly = (n, rot) => {
    let pts = [];
    for (let i = 0; i < n; i++) { const a = rot + i * 2 * Math.PI / n; pts.push((c + r * Math.cos(a)).toFixed(1) + ',' + (c + r * Math.sin(a)).toFixed(1)); }
    return '<polygon points="' + pts.join(' ') + '" fill="' + cor + '" stroke="#223" stroke-width="3" stroke-linejoin="round"/>';
  };
  let inner = '';
  switch (nome) {
    case 'círculo': inner = '<circle cx="' + c + '" cy="' + c + '" r="' + r + '" fill="' + cor + '" stroke="#223" stroke-width="3"/>'; break;
    case 'quadrado': inner = '<rect x="' + (c - r * 0.8) + '" y="' + (c - r * 0.8) + '" width="' + (r * 1.6) + '" height="' + (r * 1.6) + '" fill="' + cor + '" stroke="#223" stroke-width="3"/>'; break;
    case 'retângulo': inner = '<rect x="' + (c - r) + '" y="' + (c - r * 0.55) + '" width="' + (r * 2) + '" height="' + (r * 1.1) + '" fill="' + cor + '" stroke="#223" stroke-width="3"/>'; break;
    case 'triângulo': inner = poly(3, -Math.PI / 2); break;
    case 'pentágono': inner = poly(5, -Math.PI / 2); break;
    case 'hexágono': inner = poly(6, 0); break;
    case 'oval': inner = '<ellipse cx="' + c + '" cy="' + c + '" rx="' + r + '" ry="' + (r * 0.6) + '" fill="' + cor + '" stroke="#223" stroke-width="3"/>'; break;
  }
  return '<svg viewBox="0 0 ' + tam + ' ' + tam + '" width="' + tam + '" height="' + tam + '">' + inner + '</svg>';
}
const SOLIDOS = [
  { n: 'esfera', e: '⚽', rola: true, dica: 'A esfera é redonda como uma bola e rola.' },
  { n: 'cubo', e: '🎲', rola: false, dica: 'O cubo tem 6 faces quadradas iguais, como um dado.' },
  { n: 'cilindro', e: '🥫', rola: true, dica: 'O cilindro é como uma lata: rola deitado.' },
  { n: 'cone', e: '🍦', rola: true, dica: 'O cone é como o gelado: tem uma ponta e uma base redonda.' },
  { n: 'paralelepípedo', e: '🧱', rola: false, dica: 'O paralelepípedo é como um tijolo ou uma caixa de sapatos.' },
  { n: 'pirâmide', e: '🔺', rola: false, dica: 'A pirâmide tem faces triangulares que se juntam numa ponta.' },
];
function svgRelogio(h) {
  const c = 60, r = 52;
  let ticks = '';
  for (let i = 0; i < 12; i++) {
    const a = i * Math.PI / 6 - Math.PI / 2, n = i === 0 ? 12 : i;
    ticks += '<text x="' + (c + (r - 12) * Math.cos(a)).toFixed(1) + '" y="' + (c + (r - 12) * Math.sin(a) + 4).toFixed(1) + '" font-size="11" text-anchor="middle" fill="#223" font-weight="700">' + n + '</text>';
  }
  const ah = (h % 12) * Math.PI / 6 - Math.PI / 2;
  return '<svg viewBox="0 0 120 120" width="130" height="130"><circle cx="60" cy="60" r="' + r + '" fill="#fff" stroke="#223" stroke-width="4"/>' + ticks +
    '<line x1="60" y1="60" x2="60" y2="16" stroke="#e33" stroke-width="3" stroke-linecap="round"/>' +
    '<line x1="60" y1="60" x2="' + (60 + 28 * Math.cos(ah)).toFixed(1) + '" y2="' + (60 + 28 * Math.sin(ah)).toFixed(1) + '" stroke="#223" stroke-width="5" stroke-linecap="round"/><circle cx="60" cy="60" r="4" fill="#223"/></svg>';
}
function svgBarras(vals, cor) {
  // barras horizontais de comprimentos diferentes (comparar comprimentos)
  const cores = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12'];
  let h = '<svg viewBox="0 0 220 ' + (vals.length * 30 + 10) + '" width="240" height="' + (vals.length * 30 + 10) + '">';
  vals.forEach((v, i) => {
    h += '<rect x="30" y="' + (8 + i * 30) + '" width="' + (v * 18) + '" height="18" rx="4" fill="' + cores[i % 4] + '" stroke="#223" stroke-width="2"/>';
    h += '<text x="10" y="' + (22 + i * 30) + '" font-size="14" font-weight="700" fill="#223">' + String.fromCharCode(65 + i) + '</text>';
  });
  return h + '</svg>';
}
function pictograma(rows, cada) {
  cada = cada || 1;
  let h = '<div class="picto">';
  rows.forEach(r => {
    h += '<div class="prow"><span class="plabel">' + U.esc(r.label) + '</span><span class="picons">' + r.e.repeat(Math.round(r.n / cada)) + '</span></div>';
  });
  h += '<div class="plegend">Legenda: ' + rows[0].e + ' = ' + cada + (cada === 1 ? ' (cada símbolo é um)' : '') + '</div></div>';
  return h;
}
function moedasHtml(lista) {
  const M = { 1: '<span class="moeda m1">1€</span>', 2: '<span class="moeda m2">2€</span>', 5: '<span class="nota n5">5€</span>', 10: '<span class="nota n10">10€</span>', 20: '<span class="nota n20">20€</span>', 0.5: '<span class="moeda mc">50c</span>', 0.2: '<span class="moeda mc">20c</span>', 0.1: '<span class="moeda mc">10c</span>' };
  return '<div class="moedas">' + lista.map(v => M[v]).join('') + '</div>';
}

const Mat = {
  /* ---------------- NÚMEROS ---------------- */
  num(lv) {
    const t = 'num';
    const tipo = U.pick(lv === 1 ? ['contar', 'maior', 'antesdepois', 'parimpar', 'ordinal', 'ordenar']
      : lv === 2 ? ['maior', 'antesdepois', 'dezenas', 'compor', 'parimpar', 'ordinal', 'ordenar', 'saltos', 'contar']
        : ['maior', 'antesdepois', 'dezenas3', 'compor3', 'ordinal20', 'saltos', 'arredondar', 'centena', 'ordenar']);
    const max = lv === 1 ? 20 : lv === 2 ? 100 : 200;
    switch (tipo) {
      case 'contar': {
        const c = U.pick(COISAS), n = lv === 1 ? U.ri(4, 15) : U.ri(12, 30);
        return numEx(t, QTOS(c) + ' ' + c.p + ' encontrou o Bip?', n, 'Conta com calma, um a um. Podes agrupar de 5 em 5.', { html: emojiGrid(c.e, n) });
      }
      case 'maior': {
        let a = U.ri(1, max), b = U.ri(1, max); if (a === b) b = a + 1;
        if (lv >= 2 && Math.random() < 0.4) { // mesmos algarismos trocados (34 vs 43)
          const d = U.ri(1, 9), u = U.ri(0, 9); if (d !== u) { a = d * 10 + u; b = u * 10 + d; if (b === 0) b = 10; }
        }
        const maior = Math.random() < 0.5;
        const ans = maior ? Math.max(a, b) : Math.min(a, b);
        return mcStr(t, 'Qual é o número ' + (maior ? 'MAIOR' : 'MENOR') + ': ' + a + ' ou ' + b + '?', String(ans), [String(ans === a ? b : a)], 'Compara primeiro as dezenas; se forem iguais, compara as unidades.');
      }
      case 'antesdepois': {
        const n = U.ri(2, max - 1), dep = Math.random() < 0.5;
        const ans = dep ? n + 1 : n - 1;
        return mcNum(t, 'Que número vem ' + (dep ? 'logo DEPOIS' : 'logo ANTES') + ' de ' + n + '?', ans, 3, 3, dep ? 'Depois de ' + n + ' vem ' + ans + ': é mais um.' : 'Antes de ' + n + ' vem ' + ans + ': é menos um.');
      }
      case 'parimpar': {
        const n = U.ri(1, lv === 1 ? 20 : 100), par = n % 2 === 0;
        return mcStr(t, 'O número ' + n + ' é par ou ímpar?', par ? 'par' : 'ímpar', [par ? 'ímpar' : 'par'], 'Os pares acabam em 0, 2, 4, 6 ou 8. Os ímpares em 1, 3, 5, 7 ou 9.');
      }
      case 'ordinal': case 'ordinal20': {
        const n = tipo === 'ordinal20' ? U.ri(6, 12) : lv === 1 ? U.ri(3, 5) : U.ri(4, 10);
        const fila = U.sample(['👽', '🤖', '👩‍🚀', '👨‍🚀', '🐱', '🐶', '🦊', '🐸', '🐼', '🦁', '🐨', '🐵'], n);
        const k = U.ri(0, n - 1);
        const html = '<div class="fila">' + fila.map((e, i) => '<span class="fitem">' + e + '</span>').join('') + '<span class="fseta">🏁</span></div><div class="fnote">A fila começa à esquerda.</div>';
        const wrongs = U.sample(fila.filter((e, i) => i !== k), 2);
        return mcStr(t, 'Quem está em ' + ORD[k] + ' lugar na fila (' + ORDN[k] + ')?', { e: fila[k], t: '' }, wrongs.map(e => ({ e, t: '' })), 'Conta a partir da esquerda: primeiro, segundo, terceiro...', { html });
      }
      case 'ordenar': {
        const set = new Set(); while (set.size < 4) set.add(U.ri(1, max));
        const arr = Array.from(set).sort((a, b) => a - b);
        const cresc = Math.random() < 0.6;
        return { topic: t, kind: 'order', q: 'Ordena os números do ' + (cresc ? 'MENOR para o MAIOR' : 'MAIOR para o MENOR') + '.', itens: (cresc ? arr : arr.slice().reverse()).map(v => ({ t: String(v) })), dica: 'Olha primeiro para as dezenas.' };
      }
      case 'dezenas': {
        const d = U.ri(1, 9), u = U.ri(0, 9), n = d * 10 + u;
        if (Math.random() < 0.5) return mcNum(t, 'Quantas DEZENAS tem o número ' + n + '?', d, 3, 3, 'Em ' + n + ', o algarismo ' + d + ' está nas dezenas e o ' + u + ' nas unidades.');
        return mcNum(t, d + ' dezenas e ' + u + ' unidades formam que número?', n, 3, 10, d + ' dezenas são ' + (d * 10) + '; mais ' + u + ' unidades dá ' + n + '.');
      }
      case 'compor': {
        const n = U.ri(11, 99), d = Math.floor(n / 10) * 10;
        if (Math.random() < 0.5) return numEx(t, 'Completa: ' + n + ' = ' + d + ' + ___', n - d, n + ' é ' + d + ' mais ' + (n - d) + '.');
        const a = U.ri(1, n - 1);
        return numEx(t, 'Completa: ' + n + ' = ' + a + ' + ___', n - a, 'Pensa: de ' + a + ' até ' + n + ' faltam ' + (n - a) + '.');
      }
      case 'saltos': {
        const passo = U.pick(lv >= 3 ? [2, 5, 10, 10] : [2, 5, 10]);
        const inicio = passo === 2 ? U.ri(0, 20) * 2 : passo === 5 ? U.ri(0, 12) * 5 : U.ri(0, 9) * 10;
        const seq = []; for (let i = 0; i < 5; i++) seq.push(inicio + i * passo);
        const k = U.ri(1, 4);
        const shown = seq.map((v, i) => i === k ? '__' : v).join(', ');
        return mcNum(t, 'Contamos de ' + passo + ' em ' + passo + '. Que número falta? ' + shown, seq[k], 3, passo * 2, 'De ' + passo + ' em ' + passo + ': ' + seq.join(', ') + '.');
      }
      case 'dezenas3': {
        const c = U.ri(1, 1), d = U.ri(0, 9), u = U.ri(0, 9), n = 100 + d * 10 + u;
        return mcNum(t, 'No número ' + n + ', quantas DEZENAS há depois da centena?', d, 3, 3, n + ' é 1 centena, ' + d + ' dezenas e ' + u + ' unidades.');
      }
      case 'compor3': {
        const d = U.ri(1, 9), u = U.ri(1, 9), n = 100 + d * 10 + u;
        return mcNum(t, '100 + ' + (d * 10) + ' + ' + u + ' = ?', n, 3, 10, '100 mais ' + (d * 10) + ' são ' + (100 + d * 10) + '; mais ' + u + ' dá ' + n + '.');
      }
      case 'centena': {
        if (Math.random() < 0.5) return mcStr(t, 'Uma centena tem quantas dezenas?', '10', ['100', '1', '20'], 'Uma centena = 100 = 10 dezenas.');
        return mcStr(t, '10 dezenas formam que número?', '100', ['10', '1000', '20'], '10 dezenas = 100 = uma centena.');
      }
      case 'arredondar': {
        const n = U.ri(11, 99); if (n % 10 === 0 || n % 10 === 5) return Mat.num(lv);
        const baixo = Math.floor(n / 10) * 10, cima = baixo + 10, ans = (n % 10 < 5) ? baixo : cima;
        return mcStr(t, 'O número ' + n + ' está mais perto de ' + baixo + ' ou de ' + cima + '?', String(ans), [String(ans === baixo ? cima : baixo)], n + ' está a ' + Math.abs(n - ans) + ' de ' + ans + ', por isso é o mais perto.');
      }
    }
  },

  /* ---------------- CÁLCULO MENTAL ---------------- */
  calc(lv) {
    const t = 'calc';
    const tipo = U.pick(lv === 1 ? ['soma10', 'par10', 'sub10', 'dobro5', 'maisum', 'soma10', 'sub10']
      : lv === 2 ? ['soma20', 'sub20', 'quasedobro', 'dezenas', 'dezmaisuni', 'igualdade', 'vf', 'par10', 'soma2d1d']
        : ['soma2d', 'sub2d', 'igualdadesub', 'dobro10', 'metade', 'compensa', 'vf', 'soma2d', 'sub2d']);
    switch (tipo) {
      case 'soma10': { const a = U.ri(0, 10), b = U.ri(0, 10 - a); return numEx(t, a + ' + ' + b + ' = ?', a + b, a + ' mais ' + b + ' são ' + (a + b) + '. Conta pelos dedos se precisares.'); }
      case 'par10': { const a = U.ri(0, 10); return numEx(t, a + ' + ___ = 10', 10 - a, a + ' e ' + (10 - a) + ' são amigos do 10.'); }
      case 'sub10': { const a = U.ri(1, 10), b = U.ri(0, a); return numEx(t, a + ' − ' + b + ' = ?', a - b, a + ' menos ' + b + ' são ' + (a - b) + '.'); }
      case 'dobro5': { const a = U.ri(1, 5); return numEx(t, 'O dobro de ' + a + ' é ' + a + ' + ' + a + ' = ?', a * 2, 'Dobro é duas vezes o mesmo: ' + a + ' + ' + a + ' = ' + (a * 2) + '.'); }
      case 'maisum': { const a = U.ri(0, 18), k = U.pick([1, 2]), mais = Math.random() < 0.5 || a < k; const ans = mais ? a + k : a - k; return numEx(t, a + (mais ? ' + ' : ' − ') + k + ' = ?', ans, (mais ? 'Mais ' : 'Menos ') + k + ': anda ' + k + (mais ? ' para a frente' : ' para trás') + ' na reta numérica.'); }
      case 'soma20': { const a = U.ri(5, 9), b = U.ri(2, 9); return numEx(t, a + ' + ' + b + ' = ?', a + b, 'Faz primeiro até 10: ' + a + ' + ' + (10 - a) + ' = 10, e depois mais ' + (b - (10 - a) > 0 ? b - (10 - a) : 0) + '.'); }
      case 'sub20': { const a = U.ri(11, 20), b = U.ri(2, 9); return numEx(t, a + ' − ' + b + ' = ?', a - b, 'Tira primeiro até ao 10: ' + a + ' − ' + (a - 10) + ' = 10, depois tira o resto.'); }
      case 'quasedobro': { const a = U.ri(2, 9); return numEx(t, a + ' + ' + (a + 1) + ' = ?', 2 * a + 1, 'É quase o dobro: ' + a + ' + ' + a + ' = ' + (2 * a) + ', e mais 1 dá ' + (2 * a + 1) + '.'); }
      case 'dezenas': { const a = U.ri(1, 8) * 10, b = U.ri(1, (90 - a) / 10) * 10, sub = Math.random() < 0.4; return sub ? numEx(t, (a + b) + ' − ' + b + ' = ?', a, 'Pensa em dezenas: ' + (a + b) / 10 + ' dezenas menos ' + b / 10 + ' dezenas.') : numEx(t, a + ' + ' + b + ' = ?', a + b, 'Pensa em dezenas: ' + a / 10 + ' + ' + b / 10 + ' dezenas = ' + (a + b) / 10 + ' dezenas.'); }
      case 'dezmaisuni': { const a = U.ri(1, 9) * 10, b = U.ri(1, 9); return numEx(t, a + ' + ' + b + ' = ?', a + b, a + ' mais ' + b + ' unidades é ' + (a + b) + '.'); }
      case 'soma2d1d': { const a = U.ri(21, 89), b = U.ri(2, 9); return numEx(t, a + ' + ' + b + ' = ?', a + b, 'Vai até à dezena seguinte e depois soma o resto.'); }
      case 'igualdade': {
        const f = U.ri(0, 2);
        if (f === 0) { const s = U.ri(8, 20), a = U.ri(1, s - 1); return numEx(t, a + ' + ___ = ' + s, s - a, 'De ' + a + ' até ' + s + ' faltam ' + (s - a) + '.'); }
        if (f === 1) { const s = U.ri(8, 20), a = U.ri(1, s - 1); return numEx(t, '___ + ' + a + ' = ' + s, s - a, s + ' menos ' + a + ' dá ' + (s - a) + '.'); }
        const s = U.ri(8, 20), a = U.ri(1, s - 1); return numEx(t, s + ' = ' + a + ' + ___', s - a, 'Os dois lados do sinal = têm de valer o mesmo: ' + s + '.');
      }
      case 'vf': {
        const a = U.ri(1, 9), b = U.ri(1, 9), c = U.ri(1, 9); let d = a + b - c; const verd = Math.random() < 0.5;
        if (!verd) d += U.pick([-2, -1, 1, 2]);
        if (d < 0) return Mat.calc(lv);
        return { topic: t, kind: 'tf', q: 'Esta igualdade é verdadeira? ' + a + ' + ' + b + ' = ' + c + ' + ' + d, ok: verd, dica: a + ' + ' + b + ' = ' + (a + b) + ' e ' + c + ' + ' + d + ' = ' + (c + d) + '.' };
      }
      case 'soma2d': { const a = U.ri(21, 79), b = U.ri(11, 99 - a); return numEx(t, a + ' + ' + b + ' = ?', a + b, 'Soma primeiro as dezenas: ' + a + ' + ' + Math.floor(b / 10) * 10 + ' = ' + (a + Math.floor(b / 10) * 10) + '; depois mais ' + (b % 10) + '.'); }
      case 'sub2d': { const a = U.ri(31, 99), b = U.ri(11, a - 10); return numEx(t, a + ' − ' + b + ' = ?', a - b, 'Tira primeiro as dezenas: ' + a + ' − ' + Math.floor(b / 10) * 10 + ' = ' + (a - Math.floor(b / 10) * 10) + '; depois tira ' + (b % 10) + '.'); }
      case 'igualdadesub': {
        const f = U.ri(0, 2), a = U.ri(10, 30), b = U.ri(1, 9);
        if (f === 0) return numEx(t, a + ' − ___ = ' + (a - b), b, 'De ' + (a - b) + ' até ' + a + ' vão ' + b + '.');
        if (f === 1) return numEx(t, '___ − ' + b + ' = ' + (a - b), a, (a - b) + ' mais ' + b + ' dá ' + a + '.');
        return numEx(t, (a - b) + ' = ___ − ' + b, a, 'Se tirando ' + b + ' fica ' + (a - b) + ', o número era ' + a + '.');
      }
      case 'dobro10': { const a = U.ri(6, 10); return numEx(t, 'Qual é o dobro de ' + a + '?', a * 2, 'Dobro de ' + a + ' = ' + a + ' + ' + a + ' = ' + (a * 2) + '.'); }
      case 'metade': { const a = U.ri(1, 10) * 2; return numEx(t, 'Qual é a metade de ' + a + '?', a / 2, 'Metade de ' + a + ' é ' + (a / 2) + ', porque ' + (a / 2) + ' + ' + (a / 2) + ' = ' + a + '.'); }
      case 'compensa': { const a = U.ri(3, 9), b = U.ri(1, a - 1); return numEx(t, a + ' + ' + b + ' = ' + (a + 1) + ' + ___', b - 1 >= 0 ? b - 1 : 0, 'Se um lado sobe 1, o outro tem de descer 1: ' + a + ' + ' + b + ' = ' + (a + 1) + ' + ' + (b - 1) + '.'); }
    }
  },

  /* ---------------- PROBLEMAS ---------------- */
  prob(lv) {
    const t = 'prob';
    const n1 = U.pick(NOMES); let n2 = U.pick(NOMES); while (n2 === n1) n2 = U.pick(NOMES);
    const c = U.pick(COISAS);
    const N1 = U.cap(n1), N2 = U.cap(n2);
    const sentido = U.pick(lv === 1 ? ['acrescentar', 'juntar', 'retirar', 'retirar'] : ['acrescentar', 'juntar', 'retirar', 'completar', 'comparar', 'comparar', 'completar']);
    let a, b;
    if (lv === 1) { a = U.ri(2, 9); b = U.ri(1, 10 - a > 0 ? 10 - a : 1); }
    else if (lv === 2) { a = U.ri(8, 40); b = U.ri(2, 9); }
    else { a = U.ri(20, 70); b = U.ri(11, 29); }
    const extra = lv === 3 && Math.random() < 0.5; // dados a mais
    const ruido = extra ? ' ' + U.pick(['Tinha também ' + U.ri(2, 9) + ' ' + U.pick(COISAS.filter(x => x !== c)).p + '.', 'A nave demorou ' + U.ri(2, 9) + ' horas a chegar.', 'Estavam ' + U.ri(3, 12) + ' aliens a ver.']) : '';
    let q, ans, dica;
    switch (sentido) {
      case 'acrescentar': q = N1 + ' tinha ' + a + ' ' + c.p + '.' + ruido + ' Depois encontrou mais ' + b + '. Com quantos ' + c.p + ' ficou?'; ans = a + b; dica = 'Acrescentar é juntar ao que já havia: ' + a + ' + ' + b + ' = ' + ans + '.'; break;
      case 'juntar': q = N1 + ' encontrou ' + a + ' ' + c.p + ' e ' + n2 + ' encontrou ' + b + '.' + ruido + ' ' + QTOS(c) + ' ' + c.p + ' encontraram os dois juntos?'; ans = a + b; dica = 'Juntar os dois: ' + a + ' + ' + b + ' = ' + ans + '.'; break;
      case 'retirar': { const tot = a + b; q = N1 + ' tinha ' + tot + ' ' + c.p + '.' + ruido + ' Perdeu ' + b + ' num buraco negro. Com quantos ficou?'; ans = a; dica = 'Retirar é tirar: ' + tot + ' − ' + b + ' = ' + ans + '.'; break; }
      case 'completar': { const tot = a + b; q = 'O cofre precisa de ' + tot + ' ' + c.p + ' para abrir. ' + N1 + ' já pôs ' + a + '.' + ruido + ' Quantos faltam?'; ans = b; dica = 'De ' + a + ' até ' + tot + ' faltam ' + b + '. Podes fazer ' + tot + ' − ' + a + '.'; break; }
      case 'comparar': { const tot = a + b; q = N1 + ' tem ' + tot + ' ' + c.p + ' e ' + n2 + ' tem ' + a + '.' + ruido + ' ' + QTOS(c) + ' ' + c.p + ' tem ' + n1 + ' a MAIS?'; ans = b; dica = 'Comparar é ver a diferença: ' + tot + ' − ' + a + ' = ' + b + '.'; break; }
    }
    return numEx(t, q, ans, dica + (extra ? ' Havia números a mais que não interessavam!' : ''), { html: '<div class="probicon">' + c.e + '</div>', speak: q });
  },

  /* ---------------- SEQUÊNCIAS / ÁLGEBRA ---------------- */
  seq(lv) {
    const t = 'seq';
    const tipo = U.pick(lv === 1 ? ['rep2', 'rep3', 'rep2'] : lv === 2 ? ['rep3', 'falta', 'numseq', 'rep3'] : ['numseq3', 'intruso', 'falta', 'termo10', 'numseq3']);
    const fs = U.sample(FORMAS, 3);
    switch (tipo) {
      case 'rep2': case 'rep3': {
        const grp = tipo === 'rep2' ? [fs[0], fs[1]] : U.pick([[fs[0], fs[0], fs[1]], [fs[0], fs[1], fs[2]], [fs[0], fs[1], fs[1]]]);
        const L = grp.length * (tipo === 'rep2' ? 3 : 2) + U.ri(0, 1);
        const seq = []; for (let i = 0; i < L; i++) seq.push(grp[i % grp.length]);
        const ans = grp[L % grp.length];
        const wrongs = Array.from(new Set(fs.filter(f => f !== ans))).slice(0, 2);
        return mcStr(t, 'Qual é a figura que vem a seguir?', { e: ans, t: '' }, wrongs.map(e => ({ e, t: '' })), 'O grupo que se repete é ' + grp.join(' ') + '.', { html: '<div class="seqbox">' + seq.map(e => '<span>' + e + '</span>').join('') + '<span class="seqq">?</span></div>' });
      }
      case 'falta': {
        const grp = U.pick([[fs[0], fs[1]], [fs[0], fs[0], fs[1]], [fs[0], fs[1], fs[2]]]);
        const L = grp.length * 3; const seq = []; for (let i = 0; i < L; i++) seq.push(grp[i % grp.length]);
        const k = U.ri(1, L - 2); const ans = seq[k];
        const wrongs = fs.filter(f => f !== ans).slice(0, 2);
        return mcStr(t, 'Falta uma figura no meio. Qual é?', { e: ans, t: '' }, wrongs.map(e => ({ e, t: '' })), 'O grupo que se repete é ' + grp.join(' ') + '.', { html: '<div class="seqbox">' + seq.map((e, i) => i === k ? '<span class="seqq">?</span>' : '<span>' + e + '</span>').join('') + '</div>' });
      }
      case 'numseq': case 'numseq3': {
        const passo = tipo === 'numseq' ? U.pick([1, 2, 5, 10]) : U.pick([2, 3, 5, 10, -2, -5, -10]);
        let ini = passo > 0 ? (passo === 1 ? U.ri(1, 40) : U.ri(0, 5) * Math.abs(passo)) : U.ri(6, 10) * Math.abs(passo);
        const seq = []; for (let i = 0; i < 5; i++) seq.push(ini + i * passo);
        if (seq.some(v => v < 0)) return Mat.seq(lv);
        const k = U.ri(2, 4);
        return mcNum(t, 'Descobre a regra e completa: ' + seq.map((v, i) => i === k ? '__' : v).join(', '), seq[k], 3, Math.abs(passo) * 2, 'A regra é ' + (passo > 0 ? 'mais ' : 'menos ') + Math.abs(passo) + ' de cada vez.');
      }
      case 'intruso': {
        const passo = U.pick([2, 5, 10]); const seq = []; for (let i = 1; i <= 5; i++) seq.push(i * passo);
        const k = U.ri(1, 3); let intr = seq[k] + U.pick([-1, 1]); if (seq.includes(intr)) intr = seq[k] + 1; if (seq.includes(intr)) intr = seq[k] - 1; const shown = seq.slice(); shown[k] = intr;
        return mcStr(t, 'Contamos de ' + passo + ' em ' + passo + ', mas um número é INTRUSO. Qual?', String(intr), U.sample(seq.filter((v, i) => i !== k), 2).map(String), 'De ' + passo + ' em ' + passo + ' fica ' + seq.join(', ') + '. O ' + intr + ' não pertence.');
      }
      case 'termo10': {
        const a = fs[0], b = fs[1]; const n = U.pick([7, 8, 9, 10]);
        const ans = n % 2 === 1 ? a : b;
        return mcStr(t, 'A sequência continua sempre assim. Qual é a ' + ORD[n - 1] + ' figura?', { e: ans, t: '' }, [{ e: ans === a ? b : a, t: '' }], 'As posições ímpares (1.ª, 3.ª, 5.ª...) são ' + a + ' e as pares são ' + b + '.', { html: '<div class="seqbox">' + [a, b, a, b, a, b].map(e => '<span>' + e + '</span>').join('') + '<span class="seqq">…</span></div>' });
      }
    }
  },

  /* ---------------- GEOMETRIA ---------------- */
  geo(lv) {
    const t = 'geo';
    const tipo = U.pick(lv === 1 ? ['figura', 'posicao', 'figura', 'posicao'] : lv === 2 ? ['figura2', 'solido', 'posicao', 'rola', 'lados'] : ['lados', 'solido', 'vertices', 'figura2', 'qualfig']);
    switch (tipo) {
      case 'figura': case 'figura2': {
        const nomes = tipo === 'figura' ? ['círculo', 'quadrado', 'retângulo', 'triângulo'] : ['círculo', 'quadrado', 'retângulo', 'triângulo', 'pentágono', 'hexágono'];
        const ans = U.pick(nomes);
        return mcStr(t, 'Como se chama esta figura?', ans, U.sample(nomes.filter(n => n !== ans), 2), 'Esta figura é um ' + ans + '.', { html: '<div class="figbox">' + svgFigura(ans, U.pick(['#5b8def', '#e67e22', '#27ae60', '#8e44ad'])) + '</div>' });
      }
      case 'qualfig': {
        const nomes = ['círculo', 'quadrado', 'retângulo', 'triângulo', 'pentágono', 'hexágono'];
        const ans = U.pick(nomes); const outros = U.sample(nomes.filter(n => n !== ans), 2);
        const m = U.mcFrom(ans, outros);
        return { topic: t, kind: 'mc', q: 'Toca no ' + ans + '.', o: m.o.map(n => ({ svg: svgFigura(n, '#5b8def', 70), t: '' })), ok: m.ok, dica: 'O ' + ans + (ans === 'círculo' ? ' é redondo.' : ans === 'triângulo' ? ' tem 3 lados.' : ans === 'quadrado' ? ' tem 4 lados iguais.' : ans === 'retângulo' ? ' tem 4 lados, dois compridos e dois curtos.' : ans === 'pentágono' ? ' tem 5 lados.' : ' tem 6 lados.') };
      }
      case 'lados': case 'vertices': {
        const figs = [['triângulo', 3], ['quadrado', 4], ['retângulo', 4], ['pentágono', 5], ['hexágono', 6]];
        const f = U.pick(figs); const v = tipo === 'lados' ? 'lados' : 'vértices (bicos)';
        return mcNum(t, 'Quantos ' + v + ' tem este ' + f[0] + '?', f[1], 3, 2, 'O ' + f[0] + ' tem ' + f[1] + ' lados e ' + f[1] + ' vértices.', { html: '<div class="figbox">' + svgFigura(f[0], '#27ae60') + '</div>' });
      }
      case 'solido': {
        const s = U.pick(SOLIDOS);
        return mcStr(t, 'Este objeto faz lembrar que sólido?', s.n, U.sample(SOLIDOS.filter(x => x !== s), 2).map(x => x.n), s.dica, { html: '<div class="bigemoji">' + s.e + '</div>' });
      }
      case 'rola': {
        const s = U.pick(SOLIDOS);
        return { topic: t, kind: 'tf', q: 'Um ' + s.n + ' rola numa mesa?', ok: s.rola, dica: s.rola ? 'Rola porque tem uma superfície curva.' : 'Não rola porque só tem superfícies planas.', html: '<div class="bigemoji">' + s.e + '</div>' };
      }
      case 'posicao': {
        const objs = U.sample(['🚀', '👽', '🤖', '⭐', '🪐', '🔭', '🛸', '🌙', '☄️'], 5);
        // grelha 3x3 com centro objs[0] e 4 vizinhos
        const grid = ['', objs[1], '', objs[2], objs[0], objs[3], '', objs[4], ''];
        const rel = U.pick([['em cima', 1], ['à esquerda', 3], ['à direita', 5], ['em baixo', 7]]);
        const ans = grid[rel[1]];
        const html = '<div class="grid3">' + grid.map(g => '<span>' + (g || '') + '</span>').join('') + '</div>';
        return mcStr(t, 'O que está ' + rel[0] + ' do ' + objs[0] + '?', { e: ans, t: '' }, U.sample(objs.filter(o => o !== ans && o !== objs[0]), 2).map(e => ({ e, t: '' })), rel[0] === 'à esquerda' ? 'A esquerda é o lado da mão com que fazes o L.' : 'Olha bem para a posição do ' + objs[0] + '.', { html });
      }
    }
  },

  /* ---------------- DADOS (pictogramas) ---------------- */
  dados(lv) {
    const t = 'dados';
    const cats = U.sample([{ label: 'Aliens', e: '👽' }, { label: 'Robôs', e: '🤖' }, { label: 'Naves', e: '🚀', f: true }, { label: 'Estrelas', e: '⭐', f: true }, { label: 'Planetas', e: '🪐' }, { label: 'Gatos', e: '🐱' }], 3);
    const cada = lv === 3 && Math.random() < 0.5 ? 2 : 1;
    const maxn = lv === 1 ? 6 : 9;
    const set = new Set(); while (set.size < 3) set.add(U.ri(1, maxn));
    const ns = Array.from(set);
    cats.forEach((c, i) => c.n = ns[i] * cada);
    const html = pictograma(cats, cada);
    const tipo = U.pick(lv === 1 ? ['mais', 'menos', 'quantos'] : lv === 2 ? ['mais', 'menos', 'quantos', 'amais'] : ['quantos', 'amais', 'total', 'mais']);
    const mx = cats.reduce((a, b) => a.n > b.n ? a : b), mn = cats.reduce((a, b) => a.n < b.n ? a : b);
    switch (tipo) {
      case 'mais': return mcStr(t, 'Olha para o gráfico. O que há em MAIOR quantidade?', mx.label, cats.filter(c => c !== mx).map(c => c.label), 'A fila mais comprida é a que tem mais.', { html });
      case 'menos': return mcStr(t, 'Olha para o gráfico. O que há em MENOR quantidade?', mn.label, cats.filter(c => c !== mn).map(c => c.label), 'A fila mais curta é a que tem menos.', { html });
      case 'quantos': { const c = U.pick(cats); return numEx(t, QTOS(c) + ' ' + c.label.toLowerCase() + ' há?', c.n, cada === 1 ? 'Conta os símbolos na fila.' : 'Cada símbolo vale 2. Conta de 2 em 2.', { html }); }
      case 'amais': return numEx(t, QTOS(mx) + ' ' + mx.label.toLowerCase() + ' há a MAIS do que ' + mn.label.toLowerCase() + '?', mx.n - mn.n, mx.n + ' − ' + mn.n + ' = ' + (mx.n - mn.n) + '.', { html });
      case 'total': return numEx(t, 'Quantos há no total, todos juntos?', cats.reduce((s, c) => s + c.n, 0), 'Soma as três filas.', { html });
    }
  },

  /* ---------------- MEDIDA: tempo, comprimento, dinheiro ---------------- */
  med(lv) {
    const t = 'med';
    const tipo = U.pick(lv === 1 ? ['diaseg', 'messeg', 'comprido', 'diasem'] : lv === 2 ? ['diaseg', 'messeg', 'comprido', 'medir', 'calend', 'ordemdias'] : ['moedas', 'notas', 'gastar', 'horas', 'calend', 'medir', 'anomeses']);
    switch (tipo) {
      case 'diaseg': {
        const i = U.ri(0, 6), dep = Math.random() < 0.6; const ans = DIAS[(i + (dep ? 1 : 6)) % 7];
        return mcStr(t, 'Hoje é ' + DIAS[i] + '. Que dia é ' + (dep ? 'AMANHÃ' : 'foi ONTEM') + '?', ans, U.sample(DIAS.filter(d => d !== ans && d !== DIAS[i]), 2), 'A ordem é: ' + DIAS.join(', ') + '.');
      }
      case 'messeg': {
        const i = U.ri(0, 11), dep = Math.random() < 0.6; const ans = MESES[(i + (dep ? 1 : 11)) % 12];
        return mcStr(t, 'Que mês vem ' + (dep ? 'DEPOIS' : 'ANTES') + ' de ' + MESES[i] + '?', ans, U.sample(MESES.filter(m => m !== ans && m !== MESES[i]), 2), 'Os meses: ' + MESES.join(', ') + '.');
      }
      case 'diasem': return mcNum(t, 'Quantos dias tem uma semana?', 7, 3, 3, 'Uma semana tem 7 dias.');
      case 'anomeses': return mcNum(t, 'Quantos meses tem um ano?', 12, 3, 3, 'Um ano tem 12 meses.');
      case 'ordemdias': {
        const i = U.ri(0, 3); const arr = DIAS.slice(i, i + 4);
        return { topic: t, kind: 'order', q: 'Põe estes dias por ordem, a começar em ' + arr[0] + '.', itens: arr.map(d => ({ t: d })), dica: 'A ordem é: ' + DIAS.join(', ') + '.' };
      }
      case 'comprido': {
        const set = new Set(); while (set.size < 3) set.add(U.ri(2, 10)); const vals = Array.from(set);
        const maior = Math.random() < 0.5; const idx = vals.indexOf(maior ? Math.max(...vals) : Math.min(...vals));
        const ans = String.fromCharCode(65 + idx);
        return mcStr(t, 'Qual é a barra mais ' + (maior ? 'COMPRIDA' : 'CURTA') + '?', ans, ['A', 'B', 'C'].filter(x => x !== ans), 'Compara o tamanho das barras a começar do mesmo lado.', { html: '<div class="figbox">' + svgBarras(vals) + '</div>' });
      }
      case 'medir': {
        const n = U.ri(3, 8);
        const html = '<div class="medir"><div class="objeto">✏️</div><div class="clips">' + '📎'.repeat(n) + '</div><div class="fnote">O lápis tem o comprimento de todos estes clipes juntos.</div></div>';
        return numEx(t, 'Quantos clipes mede o lápis?', n, 'Conta os clipes: ' + n + '.', { html });
      }
      case 'calend': {
        // mini calendário: mês com início aleatório
        const inicio = U.ri(0, 6), ndias = 30; const dia = U.ri(1, 28);
        let h = '<table class="cal"><tr>' + ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map(d => '<th>' + d + '</th>').join('') + '</tr><tr>';
        for (let i = 0; i < inicio; i++) h += '<td></td>';
        for (let d = 1; d <= ndias; d++) { h += '<td' + (d === dia ? ' class="hoje"' : '') + '>' + d + '</td>'; if ((inicio + d) % 7 === 0 && d < ndias) h += '</tr><tr>'; }
        h += '</tr></table>';
        const ans = DIAS[(inicio + dia - 1) % 7];
        return mcStr(t, 'Em que dia da semana calha o dia ' + dia + ' (marcado no calendário)?', ans, U.sample(DIAS.filter(d => d !== ans), 2), 'Olha para a coluna onde está o ' + dia + ': S T Q Q S S D = segunda a domingo.', { html: h });
      }
      case 'moedas': {
        const n = U.ri(2, 4); const lista = []; for (let i = 0; i < n; i++) lista.push(U.pick([1, 1, 2, 2]));
        const tot = lista.reduce((a, b) => a + b, 0);
        return numEx(t, 'Quantos euros estão aqui?', tot, 'Soma as moedas: ' + lista.join(' + ') + ' = ' + tot + ' euros.', { html: moedasHtml(lista) });
      }
      case 'notas': {
        const lista = [U.pick([5, 10, 20]), U.pick([1, 2, 5])]; const tot = lista.reduce((a, b) => a + b, 0);
        return numEx(t, 'Quantos euros estão aqui?', tot, lista.join(' + ') + ' = ' + tot + ' euros.', { html: moedasHtml(lista) });
      }
      case 'gastar': {
        const tem = U.pick([5, 10, 20]), custa = U.ri(1, tem - 1);
        return numEx(t, 'Tens ' + tem + ' euros e compras um gelado de ' + custa + ' euros. Quanto sobra?', tem - custa, tem + ' − ' + custa + ' = ' + (tem - custa) + ' euros.', { html: moedasHtml([tem]) + '<div class="bigemoji">🍦</div>' });
      }
      case 'horas': {
        const h = U.ri(1, 12);
        return mcStr(t, 'Que horas marca o relógio?', h + ' horas', U.sample([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].filter(x => x !== h), 2).map(x => x + ' horas'), 'O ponteiro pequeno aponta para as horas; o grande está no 12, por isso são horas certas.', { html: '<div class="figbox">' + svgRelogio(h) + '</div>' });
      }
    }
  },

  /* ---------------- MULTIPLICAÇÃO (só intro, nível 3) ---------------- */
  mult(lv) {
    const t = 'mult';
    const tipo = U.pick(['rodas', 'dobro', 'maos', 'vezes2']);
    switch (tipo) {
      case 'rodas': { const n = U.ri(2, 5); return numEx(t, n + ' bicicletas têm quantas rodas ao todo?', n * 2, 'Cada bicicleta tem 2 rodas: ' + Array(n).fill(2).join(' + ') + ' = ' + (n * 2) + '.', { html: emojiGrid('🚲', n, n) }); }
      case 'dobro': { const n = U.ri(2, 10); return numEx(t, 'O dobro de ' + n + ' é ' + n + ' + ' + n + ' = ?', n * 2, 'Dobro é 2 vezes: 2 × ' + n + ' = ' + (n * 2) + '.'); }
      case 'maos': { const n = U.ri(2, 4); return numEx(t, n + ' mãos têm quantos dedos ao todo?', n * 5, 'Cada mão tem 5 dedos: conta de 5 em 5.', { html: emojiGrid('✋', n, n) }); }
      case 'vezes2': { const n = U.ri(2, 9); return mcNum(t, '2 × ' + n + ' é o mesmo que ' + n + ' + ' + n + '. Quanto é?', 2 * n, 3, 3, '2 × ' + n + ' = ' + n + ' + ' + n + ' = ' + (2 * n) + '.'); }
    }
  },
};

Mat.gerar = function (topic, lv) {
  lv = Math.max(1, Math.min(3, lv || 1));
  const fn = Mat[topic];
  if (!fn) return null;
  let ex = null, guard = 0;
  while (!ex && guard++ < 5) ex = fn(lv);
  if (ex) { ex.topic = topic; ex.nivel = lv; }
  return ex;
};
