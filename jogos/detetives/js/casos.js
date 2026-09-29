/* Zonas, casos (histórias), patentes, coleção (caixas) */
'use strict';

const CODINOMES = ['Agente Cometa', 'Agente Foguetão', 'Agente Nebulosa', 'Agente Lupa', 'Agente Estrela', 'Agente Órbita', 'Agente Meteoro', 'Agente Galáxia'];

const ZONAS = [
  { id: 'z1', nome: 'Estação Alfa', e: '🛰️', cor: '#4f8cff', trof: 0, lvMin: 1, lvMax: 1, p3: 0, desc: 'A base da Agência. Os primeiros casos de um detetive novato.' },
  { id: 'z2', nome: 'Planeta Verdejante', e: '🌿', cor: '#2ecc71', trof: 50, lvMin: 1, lvMax: 2, p3: 0, desc: 'Selvas, rios e aliens simpáticos. Os mistérios crescem.' },
  { id: 'z3', nome: 'Lua de Cristal', e: '🔮', cor: '#a569bd', trof: 120, lvMin: 2, lvMax: 2, p3: 0, desc: 'Tudo brilha e tudo se esconde. Casos para detetives atentos.' },
  { id: 'z4', nome: 'Cinturão de Asteroides', e: '☄️', cor: '#e67e22', lvMin: 2, lvMax: 3, trof: 210, p3: 0.2, desc: 'Rochas a voar e pistas espalhadas. Começam os desafios novos.' },
  { id: 'z5', nome: 'Nebulosa Vermelha', e: '🌌', cor: '#e74c3c', trof: 320, lvMin: 2, lvMax: 3, p3: 0.4, desc: 'Um nevoeiro vermelho esconde os maiores ladrões da galáxia.' },
  { id: 'z6', nome: 'Buraco Negro Misterioso', e: '🕳️', cor: '#34495e', trof: 450, lvMin: 3, lvMax: 3, p3: 0.5, desc: 'O último mistério. Só para Comandantes e Lendas.' },
];

const PATENTES = [
  { nome: 'Recruta', e: '🎓', trof: 0 },
  { nome: 'Agente', e: '🕵️', trof: 50 },
  { nome: 'Inspetor', e: '🔎', trof: 150 },
  { nome: 'Comandante', e: '🎖️', trof: 300 },
  { nome: 'Lenda Galáctica', e: '🌟', trof: 500 },
];

// texto de introdução de cada tipo de pista (o robô Bip fala)
const PISTA_INTRO = {
  orto: ['Intercetei uma mensagem em código! Ouve a palavra e escreve-a.', 'O suspeito deixou uma palavra gravada. Descodifica-a!', 'Mensagem secreta a chegar... escreve o que ouves.'],
  gram: ['O relatório do caso tem erros. Ajuda-me a corrigir!', 'Uma frase ficou estragada na transmissão. Repara-a.', 'O computador da nave baralhou as palavras. Põe ordem nisto!'],
  leitura: ['Vamos interrogar o suspeito. Lê com atenção o que ele diz!', 'Encontrei um documento importante. Lê e responde às minhas perguntas.', 'O suspeito quer falar. Ouve bem, pode estar a mentir...'],
  num: ['O cofre tem um código numérico. Descobre-o!', 'Os números da caixa negra estão baralhados. Ajuda-me!', 'Precisamos de contar as provas com cuidado.'],
  calc: ['Para abrir a porta, faz esta conta!', 'O cadeado só abre com o resultado certo.', 'Cálculo rápido, detetive! O tempo está a contar.'],
  prob: ['Temos um problema... literalmente! Lê e resolve.', 'Um caso dentro do caso. Pensa bem antes de responder.', 'Os números da história dizem a verdade. Descobre-a.'],
  seq: ['Há um padrão nas pegadas! Descobre a regra.', 'O ladrão seguiu uma sequência. Continua-a!', 'Estas luzes acendem-se com uma regra. Qual é?'],
  geo: ['Vamos reconstruir o mapa do local do crime.', 'Onde estava cada coisa? Observa bem a cena.', 'Reconhece as formas que o ladrão deixou.'],
  dados: ['Li o relatório da Agência. Ajuda-me a ler o gráfico!', 'Os dados das câmaras estão neste gráfico. Analisa-o.', 'Quantas provas de cada tipo temos? Olha para o gráfico.'],
  med: ['O calendário e o relógio da nave têm pistas!', 'Vamos medir e comparar as provas.', 'O tempo e o tamanho contam para resolver o caso.'],
  mult: ['Dobra as pistas! Quantas são ao todo?', 'Contamos aos pares e aos cincos. Vamos!'],
  meio: ['O laboratório da Agência precisa de ti. Analisa esta prova!', 'A ciência ajuda os detetives. Responde ao laboratório.', 'O que sabes sobre o mundo pode resolver este caso!'],
  en: ['O nosso aliado da Estação Inglesa enviou uma mensagem. Traduz!', 'Contacto com a base inglesa! Ouve e responde em inglês.', 'Os aliens de Inglaterra falam inglês. Vamos comunicar!'],
};

const ROTACAO = [
  ['orto', 'calc', 'meio', 'leitura', 'num', 'en'],
  ['gram', 'prob', 'geo', 'orto', 'meio', 'dados'],
  ['leitura', 'seq', 'en', 'calc', 'med', 'orto'],
  ['meio', 'num', 'gram', 'prob', 'en', 'geo'],
  ['orto', 'dados', 'leitura', 'calc', 'meio', 'seq'],
];

const CASOS_RAW = [
  // Zona 1: Estação Alfa
  ['O Cofre dos Rebuçados', 'Alguém abriu o cofre da cantina e levou todos os rebuçados!', 'O Bip encontrou pegadas doces no chão.', [['👽', 'Zuk'], ['🤖', 'Robô Tico'], ['🐱', 'Gato Cosmo']], 2, 'O Gato Cosmo! As pegadas eram de patas com açúcar. Devolveu tudo e pediu desculpa.'],
  ['A Lupa Desaparecida', 'A lupa da Chefe da Agência desapareceu da secretária.', 'Sem lupa não há detetives. Temos de a encontrar!', [['👩‍🚀', 'Capitã Órbita'], ['👽', 'Zuk'], ['🧹', 'Robô da Limpeza']], 2, 'O Robô da Limpeza! Arrumou a lupa numa gaveta secreta. Só queria tudo limpinho.'],
  ['Luzes Apagadas', 'De repente, a Estação Alfa ficou às escuras.', 'Quem desligou a energia? E porquê?', [['🐭', 'Rato Espacial'], ['🤖', 'Robô Tico'], ['👨‍🚀', 'Astronauta Rui']], 0, 'O Rato Espacial! Roeu um fio para fazer a cama. Agora tem uma cama de algodão.'],
  ['O Foguetão Trocado', 'O foguetão vermelho da Capitã apareceu pintado de azul!', 'Há tinta azul num corredor. Vamos seguir o rasto.', [['🎨', 'Alien Pintor'], ['👽', 'Zuk'], ['🐱', 'Gato Cosmo']], 0, 'O Alien Pintor! Queria fazer uma surpresa de aniversário. A Capitã até gostou do azul.'],
  ['A Bolacha Gigante', 'Uma bolacha gigante desapareceu do forno da Estação.', 'Só sobraram migalhas... e um bilhete em código.', [['🐶', 'Cão Lunar'], ['🤖', 'Robô Tico'], ['👽', 'Zuk']], 0, 'O Cão Lunar! Não resistiu ao cheiro. Agora ajuda o cozinheiro a fazer mais bolachas.'],
  // Zona 2: Planeta Verdejante
  ['As Flores que Cantam', 'As flores do Planeta Verdejante pararam de cantar!', 'Alguém lhes tirou a água. Temos de descobrir quem.', [['🐝', 'Abelha Zum'], ['🦎', 'Lagarto Sol'], ['👽', 'Alien Verde']], 1, 'O Lagarto Sol! Bebeu a água toda porque estava muito calor. Agora tem uma piscina própria.'],
  ['O Rio ao Contrário', 'O rio começou a correr para o lado errado!', 'Há uma pedra enorme a mudar o caminho da água.', [['🐘', 'Elefante Trombim'], ['🐒', 'Macaco Pipo'], ['🤖', 'Robô Jardineiro']], 0, 'O Elefante Trombim! Pôs a pedra para fazer uma ponte e não reparou. Ajudou a tirá-la.'],
  ['A Colheita Roubada', 'Todas as maçãs do pomar desapareceram numa noite.', 'Há pegadas pequeninas e uma pena azul.', [['🐦', 'Pássaro Azul'], ['🐒', 'Macaco Pipo'], ['👽', 'Alien Verde']], 0, 'O Pássaro Azul e os seus 20 irmãos! Tinham fome. Agora plantam macieiras novas.'],
  ['O Sono da Floresta', 'Todos os animais da floresta adormeceram ao meio-dia!', 'Cheira a chá de camomila por todo o lado...', [['🦉', 'Coruja Sábia'], ['🐻', 'Urso Ronco'], ['👩‍🔬', 'Cientista Lia']], 2, 'A Cientista Lia! Fez uma experiência com chá que correu mal. Já acordou toda a gente.'],
  ['O Mapa Rasgado', 'O mapa do tesouro verde foi rasgado em bocadinhos.', 'Vamos juntar as peças e seguir as pistas.', [['🐒', 'Macaco Pipo'], ['🦜', 'Papagaio Rima'], ['🐢', 'Tartaruga Lenta']], 0, 'O Macaco Pipo! Queria fazer um puzzle. O tesouro era uma caixa de bananas.'],
  // Zona 3: Lua de Cristal
  ['O Cristal que Pisca', 'O grande Cristal da Lua começou a piscar em código.', 'Alguém está a mandar mensagens secretas!', [['👾', 'Alien Pixel'], ['🤖', 'Robô Guarda'], ['🧙', 'Feiticeiro Lunar']], 0, 'O Alien Pixel! Estava a pedir ajuda: perdeu a sua nave. Já a encontrámos.'],
  ['Espelhos Partidos', 'Os espelhos da Sala dos Cristais apareceram todos partidos.', 'Há marcas de uma bola e uma raquete.', [['🏓', 'Alien Desportista'], ['🧙', 'Feiticeiro Lunar'], ['🐱', 'Gato Cosmo']], 0, 'O Alien Desportista! Jogava ténis de mesa onde não devia. Vai jogar no ginásio.'],
  ['A Voz do Eco', 'Uma voz misteriosa repete tudo o que dizemos.', 'Vem de uma gruta de cristal. Vamos investigar.', [['🦇', 'Morcego Cantor'], ['👾', 'Alien Pixel'], ['🤖', 'Robô Guarda']], 0, 'O Morcego Cantor! Adora imitar vozes. Agora canta no coro da Agência.'],
  ['O Tesouro de Gelo', 'O tesouro da Rainha de Cristal transformou-se em gelo!', 'Quem baixou a temperatura da sala?', [['🐧', 'Pinguim Frio'], ['🧙', 'Feiticeiro Lunar'], ['👩‍🔬', 'Cientista Lia']], 0, 'O Pinguim Frio! Tinha calor e ligou o ar frio no máximo. O tesouro já derreteu.'],
  ['Pegadas Brilhantes', 'Pegadas brilhantes atravessam toda a Lua de Cristal.', 'Levam a um lugar secreto. Vamos segui-las!', [['👾', 'Alien Pixel'], ['🦄', 'Unicórnio Lunar'], ['🐱', 'Gato Cosmo']], 1, 'O Unicórnio Lunar! Deixou pó de cristal para nos guiar até uma festa surpresa.'],
  // Zona 4: Cinturão de Asteroides
  ['O Asteroide Fugitivo', 'Um asteroide saiu do lugar e anda a passear!', 'Alguém o empurrou. Precisamos de provas.', [['🐂', 'Touro Espacial'], ['🤖', 'Robô Mineiro'], ['👽', 'Zuk']], 1, 'O Robô Mineiro! Confundiu o asteroide com uma bola gigante. Já o pôs no sítio.'],
  ['As Rochas Douradas', 'As rochas douradas da mina desapareceram!', 'Só ficou uma pá e um saco vazio.', [['🦝', 'Guaxinim Ladrão'], ['🤖', 'Robô Mineiro'], ['👨‍🚀', 'Astronauta Rui']], 0, 'O Guaxinim Ladrão! Escondeu as rochas para brilhar no escuro. Devolveu tudo.'],
  ['O Sinal Perdido', 'O sinal de rádio da Agência desapareceu no Cinturão.', 'Uma antena foi virada para o lado errado.', [['🐙', 'Polvo Técnico'], ['👽', 'Zuk'], ['🦅', 'Águia Veloz']], 0, 'O Polvo Técnico! Com 8 braços, virou a antena sem querer. Já pediu desculpa.'],
  ['O Combustível Sumido', 'O combustível das naves desapareceu do depósito!', 'Há um cheiro estranho e marcas de rodas.', [['🚜', 'Robô Trator'], ['🤖', 'Robô Mineiro'], ['👩‍🚀', 'Capitã Órbita']], 0, 'O Robô Trator! Estava a abastecer para uma viagem longa. Esqueceu-se de avisar.'],
  ['A Corrida Trapaceira', 'Na corrida de asteroides, alguém fez batota!', 'Um piloto chegou primeiro sem passar pela meta.', [['🐇', 'Coelho Turbo'], ['🐢', 'Tartaruga Lenta'], ['🦊', 'Raposa Esperta']], 2, 'A Raposa Esperta! Usou um atalho secreto. Vai repetir a corrida a sério.'],
  // Zona 5: Nebulosa Vermelha
  ['O Nevoeiro Vermelho', 'Um nevoeiro vermelho cobriu a nebulosa toda.', 'Alguém fez uma poção que fumegou demais.', [['🧪', 'Alquimista Gasoso'], ['🐉', 'Dragão Pimenta'], ['👩‍🔬', 'Cientista Lia']], 1, 'O Dragão Pimenta! Espirrou depois de comer malaguetas. Agora só come sopa.'],
  ['A Estrela Roubada', 'A estrela mais brilhante da nebulosa desapareceu!', 'Fica um buraco escuro no céu e um rasto de purpurinas.', [['🦹', 'Vilão Sombra'], ['🐉', 'Dragão Pimenta'], ['🧚', 'Fada Cintilante']], 2, 'A Fada Cintilante! Levou-a para dar luz a um planeta sem Sol. Já a devolveu com uma cópia.'],
  ['O Código do Vilão', 'O Vilão Sombra deixou um código na parede.', 'Se o decifrarmos, descobrimos o seu esconderijo.', [['🦹', 'Vilão Sombra'], ['🐺', 'Lobo Uivante'], ['👾', 'Alien Pixel']], 0, 'O Vilão Sombra! O código dizia «tenho saudades de amigos». Agora tem muitos.'],
  ['A Nave Fantasma', 'Uma nave sem ninguém anda a voar sozinha.', 'Vamos descobrir quem está aos comandos.', [['👻', 'Fantasma Bu'], ['🤖', 'Piloto Automático'], ['🐺', 'Lobo Uivante']], 1, 'O Piloto Automático! Ficou ligado e foi dar uma volta. Já está estacionado.'],
  ['O Planeta Sem Cor', 'Todas as cores fugiram do planeta Arco-Íris.', 'Ficou tudo cinzento! Onde estão as cores?', [['🎨', 'Alien Pintor'], ['🦹', 'Vilão Sombra'], ['☁️', 'Nuvem Rabugenta']], 2, 'A Nuvem Rabugenta! Estava triste e tapou o Sol. Contámos-lhe uma anedota e voltou a cor.'],
  // Zona 6: Buraco Negro Misterioso
  ['A Boca do Buraco Negro', 'Objetos da Agência desaparecem no Buraco Negro!', 'Precisamos de descobrir o que há do outro lado.', [['🕳️', 'O Próprio Buraco'], ['🦹', 'Vilão Sombra'], ['🐙', 'Polvo Técnico']], 2, 'O Polvo Técnico! Guardava tudo lá dentro para arrumar a Agência. Fez um armazém.'],
  ['O Tempo ao Contrário', 'Perto do Buraco Negro, os relógios andam para trás!', 'Alguém mexeu nas engrenagens do tempo.', [['⏰', 'Relógio Rebelde'], ['🧙', 'Feiticeiro Lunar'], ['🤖', 'Robô Tico']], 0, 'O Relógio Rebelde! Queria voltar ao dia da sua festa. Já anda para a frente.'],
  ['O Mapa da Galáxia', 'O mapa completo da galáxia foi roubado da Agência!', 'É o caso mais importante de todos.', [['🦹', 'Vilão Sombra'], ['🐉', 'Dragão Pimenta'], ['🦊', 'Raposa Esperta']], 2, 'A Raposa Esperta! Queria encontrar o caminho para casa. Levámo-la nós.'],
  ['A Última Mensagem', 'Uma mensagem misteriosa chegou do fundo do Buraco Negro.', 'Diz que só um verdadeiro detetive a pode ler.', [['👽', 'Zuk'], ['🤖', 'Bip'], ['🌟', 'Estrela Antiga']], 2, 'A Estrela Antiga! Queria conhecer o melhor detetive da galáxia. E és tu!'],
  ['O Caso Final', 'O Vilão Sombra desafia a Agência para o último duelo de mistérios.', 'Junta tudo o que aprendeste. É agora!', [['🦹', 'Vilão Sombra'], ['🕳️', 'O Buraco Negro'], ['🌟', 'Estrela Antiga']], 0, 'O Vilão Sombra... que afinal só queria ser detetive! Foi aceito na Agência como estagiário.'],
];

const CASOS = CASOS_RAW.map((c, i) => ({
  id: 'c' + (i + 1), zona: ZONAS[Math.floor(i / 5)].id, idx: i % 5,
  titulo: c[0], intro: [c[1], c[2]], suspeitos: c[3].map(s => ({ e: s[0], n: s[1] })), culpado: c[4], final: c[5],
  pistas: ROTACAO[i % 5],
}));

/* ---------- Coleção (caixas de provas) ---------- */
const RAR = {
  comum: { nome: 'Comum', cor: '#95a5a6', p: 0.6 },
  raro: { nome: 'Raro', cor: '#3498db', p: 0.28 },
  epico: { nome: 'Épico', cor: '#9b59b6', p: 0.10 },
  lendario: { nome: 'Lendário', cor: '#f1c40f', p: 0.02 },
};
const ITENS = [
  // detetives (personagens jogáveis)
  { id: 'novato', tipo: 'detetive', e: '🕵️', nome: 'Detetive Novato', frase: 'Vamos resolver isto!', r: 'comum', base: true },
  { id: 'd_gato', tipo: 'detetive', e: '🐱', nome: 'Inspetor Bigodes', frase: 'Miau. Caso resolvido.', r: 'comum' },
  { id: 'd_alien', tipo: 'detetive', e: '👽', nome: 'Agente Zim', frase: 'No meu planeta isto era fácil.', r: 'comum' },
  { id: 'd_cao', tipo: 'detetive', e: '🐶', nome: 'Farejador Rex', frase: 'Cheira-me a pista!', r: 'comum' },
  { id: 'd_robo', tipo: 'detetive', e: '🤖', nome: 'Unidade K-9000', frase: 'Probabilidade de sucesso: 100%.', r: 'raro' },
  { id: 'd_astro', tipo: 'detetive', e: '👩‍🚀', nome: 'Comandante Nova', frase: 'Aos comandos. Sempre.', r: 'raro' },
  { id: 'd_raposa', tipo: 'detetive', e: '🦊', nome: 'Raposa Astuta', frase: 'Nada me escapa.', r: 'raro' },
  { id: 'd_coruja', tipo: 'detetive', e: '🦉', nome: 'Doutora Coruja', frase: 'Já li isso num livro.', r: 'epico' },
  { id: 'd_dragao', tipo: 'detetive', e: '🐉', nome: 'Dragão Detetive', frase: 'Sopro fogo nas mentiras!', r: 'epico' },
  { id: 'd_fantasma', tipo: 'detetive', e: '👻', nome: 'Fantasma Silencioso', frase: 'Bu. Apanhei-te.', r: 'epico' },
  { id: 'd_unicornio', tipo: 'detetive', e: '🦄', nome: 'Unicórnio Lendário', frase: 'Brilho e justiça!', r: 'lendario' },
  { id: 'd_estrela', tipo: 'detetive', e: '🌟', nome: 'Estrela Suprema', frase: 'A galáxia confia em ti.', r: 'lendario' },
  // gadgets do robô Bip
  { id: 'g_lupa', tipo: 'gadget', e: '🔍', nome: 'Lupa Laser', r: 'comum' },
  { id: 'g_lanterna', tipo: 'gadget', e: '🔦', nome: 'Lanterna Cósmica', r: 'comum' },
  { id: 'g_chapeu', tipo: 'gadget', e: '🎩', nome: 'Chapéu de Detetive', r: 'comum' },
  { id: 'g_oculos', tipo: 'gadget', e: '🕶️', nome: 'Óculos Raio-X', r: 'raro' },
  { id: 'g_radar', tipo: 'gadget', e: '📡', nome: 'Radar de Pistas', r: 'raro' },
  { id: 'g_jetpack', tipo: 'gadget', e: '🚀', nome: 'Mochila a Jato', r: 'raro' },
  { id: 'g_ima', tipo: 'gadget', e: '🧲', nome: 'Íman de Provas', r: 'comum' },
  { id: 'g_relogio', tipo: 'gadget', e: '⌚', nome: 'Relógio do Tempo', r: 'epico' },
  { id: 'g_coroa', tipo: 'gadget', e: '👑', nome: 'Coroa do Bip', r: 'epico' },
  { id: 'g_asas', tipo: 'gadget', e: '🪽', nome: 'Asas de Luz', r: 'lendario' },
  // decoração do gabinete
  { id: 'x_planta', tipo: 'deco', e: '🪴', nome: 'Planta Alienígena', r: 'comum' },
  { id: 'x_quadro', tipo: 'deco', e: '🖼️', nome: 'Quadro da Galáxia', r: 'comum' },
  { id: 'x_trofeu', tipo: 'deco', e: '🏆', nome: 'Taça de Ouro', r: 'raro' },
  { id: 'x_globo', tipo: 'deco', e: '🌍', nome: 'Globo Giratório', r: 'comum' },
  { id: 'x_telescopio', tipo: 'deco', e: '🔭', nome: 'Telescópio', r: 'raro' },
  { id: 'x_aquario', tipo: 'deco', e: '🐠', nome: 'Aquário Espacial', r: 'raro' },
  { id: 'x_foguete', tipo: 'deco', e: '🛸', nome: 'Mini Disco Voador', r: 'epico' },
  { id: 'x_cristal', tipo: 'deco', e: '💎', nome: 'Cristal Gigante', r: 'epico' },
  { id: 'x_saturno', tipo: 'deco', e: '🪐', nome: 'Saturno de Estimação', r: 'lendario' },
  { id: 'x_sofa', tipo: 'deco', e: '🛋️', nome: 'Sofá Antigravidade', r: 'comum' },
  // títulos
  { id: 't_virgulas', tipo: 'titulo', e: '🏷️', nome: 'Caçador de Vírgulas', r: 'comum' },
  { id: 't_numeros', tipo: 'titulo', e: '🏷️', nome: 'Mestre dos Números', r: 'comum' },
  { id: 't_cientista', tipo: 'titulo', e: '🏷️', nome: 'Cientista Curioso', r: 'raro' },
  { id: 't_poliglota', tipo: 'titulo', e: '🏷️', nome: 'Poliglota Espacial', r: 'raro' },
  { id: 't_leitor', tipo: 'titulo', e: '🏷️', nome: 'Leitor Veloz', r: 'raro' },
  { id: 't_lenda', tipo: 'titulo', e: '🏷️', nome: 'Lenda Viva', r: 'epico' },
  { id: 't_supremo', tipo: 'titulo', e: '🏷️', nome: 'Detetive Supremo da Galáxia', r: 'lendario' },
];
const TIPO_NOME = { detetive: 'Detetive', gadget: 'Gadget do Bip', deco: 'Decoração', titulo: 'Título' };

const Colecao = {
  item(id) { return ITENS.find(i => i.id === id); },
  sortear(s) {
    // pity: de 5 em 5 caixas garante Épico ou melhor
    s.pity = (s.pity || 0) + 1;
    let r;
    if (s.pity >= 5) { r = Math.random() < 0.15 ? 'lendario' : 'epico'; s.pity = 0; }
    else {
      const x = Math.random();
      r = x < RAR.lendario.p ? 'lendario' : x < RAR.lendario.p + RAR.epico.p ? 'epico' : x < RAR.lendario.p + RAR.epico.p + RAR.raro.p ? 'raro' : 'comum';
      if (r === 'epico' || r === 'lendario') s.pity = 0;
    }
    const ordem = ['comum', 'raro', 'epico', 'lendario'];
    // preferir itens que ainda não tem; se todos dessa raridade estiverem, procura noutra raridade (sobe, depois desce)
    let cand = ITENS.filter(i => i.r === r && !i.base && !s.colecao.includes(i.id));
    let k = ordem.indexOf(r), up = k + 1, down = k - 1;
    while (!cand.length && (up < ordem.length || down >= 0)) {
      if (up < ordem.length) { cand = ITENS.filter(i => i.r === ordem[up] && !i.base && !s.colecao.includes(i.id)); up++; }
      if (!cand.length && down >= 0) { cand = ITENS.filter(i => i.r === ordem[down] && !i.base && !s.colecao.includes(i.id)); down--; }
    }
    if (!cand.length) return { item: U.pick(ITENS.filter(i => i.r === r)), dup: true };
    const item = U.pick(cand);
    s.colecao.push(item.id);
    return { item, dup: false };
  },
};
