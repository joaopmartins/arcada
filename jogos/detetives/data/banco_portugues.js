// Banco de palavras e perguntas para o jogo "Detetives Galácticos"
// Português de Portugal (Acordo Ortográfico de 1990). Público: 7 anos, fim do 1.º ano / início do 2.º ano.
// BANCO_ORTO: ditado com letras-peça. BANCO_GRAM: escolha múltipla de gramática.

window.BANCO_ORTO = [
  // ---- ce-ci: C antes de E e I lê-se S ----
  {w:"cedo", caso:"ce-ci", nivel:1, intr:["s"], dica:"Antes de E e I, o C lê-se como S: cedo.", e:"🌅"},
  {w:"cesto", caso:"ce-ci", nivel:2, intr:["s"], dica:"Antes de E e I, o C lê-se como S: cesto.", e:"🧺"},
  {w:"cidade", caso:"ce-ci", nivel:2, intr:["s"], dica:"Antes de E e I, o C lê-se como S: cidade.", e:"🏙️"},
  {w:"cinema", caso:"ce-ci", nivel:2, intr:["s"], dica:"Antes de E e I, o C lê-se como S: cinema.", e:"🎬"},
  {w:"cebola", caso:"ce-ci", nivel:2, intr:["s"], dica:"Antes de E e I, o C lê-se como S: cebola.", e:"🧅"},
  {w:"cenoura", caso:"ce-ci", nivel:2, intr:["s"], dica:"Antes de E e I, o C lê-se como S: cenoura.", e:"🥕"},
  {w:"cereja", caso:"ce-ci", nivel:2, intr:["s"], dica:"Antes de E e I, o C lê-se como S: cereja.", e:"🍒"},
  {w:"cigarra", caso:"ce-ci", nivel:2, intr:["s"], dica:"Antes de E e I, o C lê-se como S: cigarra."},

  // ---- c-cedilha: Ç só antes de A, O e U ----
  {w:"laço", caso:"c-cedilha", nivel:1, intr:["s"], dica:"O Ç lê-se S e só se usa antes de A, O e U: laço.", e:"🎀"},
  {w:"braço", caso:"c-cedilha", nivel:1, intr:["s"], dica:"O Ç lê-se S e só se usa antes de A, O e U: braço.", e:"💪"},
  {w:"dança", caso:"c-cedilha", nivel:2, intr:["s"], dica:"O Ç lê-se S e só se usa antes de A, O e U: dança.", e:"💃"},
  {w:"maçã", caso:"c-cedilha", nivel:2, intr:["s"], dica:"O Ç lê-se S e só se usa antes de A, O e U: maçã.", e:"🍎"},
  {w:"cabeça", caso:"c-cedilha", nivel:2, intr:["s"], dica:"O Ç lê-se S e só se usa antes de A, O e U: cabeça.", e:"🙂"},
  {w:"abraço", caso:"c-cedilha", nivel:2, intr:["s"], dica:"O Ç lê-se S e só se usa antes de A, O e U: abraço.", e:"🤗"},
  {w:"criança", caso:"c-cedilha", nivel:2, intr:["s"], dica:"O Ç lê-se S e só se usa antes de A, O e U: criança.", e:"🧒"},
  {w:"rebuçado", caso:"c-cedilha", nivel:3, intr:["s"], dica:"O Ç lê-se S e só se usa antes de A, O e U: rebuçado.", e:"🍬"},

  // ---- ge-gi: G antes de E e I lê-se J ----
  {w:"gelo", caso:"ge-gi", nivel:1, intr:["j"], dica:"Antes de E e I, o G lê-se como J: gelo.", e:"🧊"},
  {w:"gema", caso:"ge-gi", nivel:1, intr:["j"], dica:"Antes de E e I, o G lê-se como J: gema."},
  {w:"girafa", caso:"ge-gi", nivel:2, intr:["j"], dica:"Antes de E e I, o G lê-se como J: girafa.", e:"🦒"},
  {w:"gelado", caso:"ge-gi", nivel:2, intr:["j"], dica:"Antes de E e I, o G lê-se como J: gelado.", e:"🍦"},
  {w:"gigante", caso:"ge-gi", nivel:2, intr:["j"], dica:"Antes de E e I, o G lê-se como J: gigante."},
  {w:"página", caso:"ge-gi", nivel:3, intr:["j"], dica:"Antes de E e I, o G lê-se como J: página.", e:"📄"},
  {w:"ginásio", caso:"ge-gi", nivel:3, intr:["j"], dica:"Antes de E e I, o G lê-se como J: ginásio.", e:"🏋️"},
  {w:"girassol", caso:"ge-gi", nivel:3, intr:["j"], dica:"Antes de E e I, o G lê-se como J: girassol.", e:"🌻"},

  // ---- gue-gui: o U não se lê ----
  {w:"guia", caso:"gue-gui", nivel:1, intr:["q"], dica:"Em GUE e GUI, o U não se lê: serve para o G soar forte, como em guia.", e:"🧭"},
  {w:"foguete", caso:"gue-gui", nivel:2, intr:["q"], dica:"Em GUE e GUI, o U não se lê: serve para o G soar forte, como em foguete.", e:"🚀"},
  {w:"pinguim", caso:"gue-gui", nivel:2, intr:["q"], dica:"Em GUE e GUI, o U não se lê: serve para o G soar forte, como em pinguim.", e:"🐧"},
  {w:"guisado", caso:"gue-gui", nivel:2, intr:["q"], dica:"Em GUE e GUI, o U não se lê: serve para o G soar forte, como em guisado.", e:"🍲"},
  {w:"figueira", caso:"gue-gui", nivel:2, intr:["q"], dica:"Em GUE e GUI, o U não se lê: serve para o G soar forte, como em figueira.", e:"🌳"},
  {w:"guitarra", caso:"gue-gui", nivel:3, intr:["q"], dica:"Em GUE e GUI, o U não se lê: serve para o G soar forte, como em guitarra.", e:"🎸"},
  {w:"mangueira", caso:"gue-gui", nivel:3, intr:["q"], dica:"Em GUE e GUI, o U não se lê: serve para o G soar forte, como em mangueira."},
  {w:"preguiça", caso:"gue-gui", nivel:3, intr:["q"], dica:"Em GUE e GUI, o U não se lê: serve para o G soar forte, como em preguiça.", e:"🦥"},

  // ---- que-qui: o U não se lê ----
  {w:"queijo", caso:"que-qui", nivel:1, intr:["g"], dica:"Em QUE e QUI, o U não se lê: queijo.", e:"🧀"},
  {w:"quente", caso:"que-qui", nivel:1, intr:["g"], dica:"Em QUE e QUI, o U não se lê: quente.", e:"🔥"},
  {w:"quinta", caso:"que-qui", nivel:2, intr:["g"], dica:"Em QUE e QUI, o U não se lê: quinta.", e:"🚜"},
  {w:"parque", caso:"que-qui", nivel:2, intr:["g"], dica:"Em QUE e QUI, o U não se lê: parque.", e:"🎡"},
  {w:"bosque", caso:"que-qui", nivel:2, intr:["g"], dica:"Em QUE e QUI, o U não se lê: bosque.", e:"🌲"},
  {w:"esquilo", caso:"que-qui", nivel:2, intr:["g"], dica:"Em QUE e QUI, o U não se lê: esquilo.", e:"🐿️"},
  {w:"raquete", caso:"que-qui", nivel:2, intr:["g"], dica:"Em QUE e QUI, o U não se lê: raquete.", e:"🏓"},
  {w:"máquina", caso:"que-qui", nivel:3, intr:["g"], dica:"Em QUE e QUI, o U não se lê: máquina.", e:"⚙️"},

  // ---- j: lê-se sempre igual ----
  {w:"jogo", caso:"j", nivel:1, intr:["g"], dica:"O J lê-se sempre da mesma forma, com qualquer vogal: jogo.", e:"🎲"},
  {w:"loja", caso:"j", nivel:1, intr:["g"], dica:"O J lê-se sempre da mesma forma, com qualquer vogal: loja.", e:"🏪"},
  {w:"hoje", caso:"j", nivel:2, intr:["g"], dica:"Antes de E, o som «j» pode escrever-se com J: hoje.", e:"📅"},
  {w:"joia", caso:"j", nivel:2, intr:["g"], dica:"O J lê-se sempre da mesma forma, com qualquer vogal: joia.", e:"💎"},
  {w:"janela", caso:"j", nivel:2, intr:["g"], dica:"O J lê-se sempre da mesma forma, com qualquer vogal: janela.", e:"🪟"},
  {w:"jardim", caso:"j", nivel:2, intr:["g"], dica:"O J lê-se sempre da mesma forma, com qualquer vogal: jardim.", e:"🌷"},
  {w:"joelho", caso:"j", nivel:2, intr:["g"], dica:"O J lê-se sempre da mesma forma, com qualquer vogal: joelho.", e:"🦵"},
  {w:"laranja", caso:"j", nivel:3, intr:["g"], dica:"Antes de A, o som «j» escreve-se sempre com J: laranja.", e:"🍊"},

  // ---- r-rr: R forte e R fraco ----
  {w:"rato", caso:"r-rr", nivel:1, intr:["d"], dica:"No início da palavra, um só R já se lê forte: rato.", e:"🐭"},
  {w:"pera", caso:"r-rr", nivel:1, intr:["d"], dica:"Um só R entre vogais lê-se fraco: pera.", e:"🍐"},
  {w:"carro", caso:"r-rr", nivel:1, intr:["l"], dica:"Entre duas vogais, para o R soar forte, escrevem-se dois: carro.", e:"🚗"},
  {w:"terra", caso:"r-rr", nivel:1, intr:["l"], dica:"Entre duas vogais, para o R soar forte, escrevem-se dois: terra.", e:"🌍"},
  {w:"arroz", caso:"r-rr", nivel:2, intr:["s"], dica:"Entre duas vogais, para o R soar forte, escrevem-se dois: arroz.", e:"🍚"},
  {w:"raposa", caso:"r-rr", nivel:2, intr:["l"], dica:"No início da palavra, um só R já se lê forte: raposa.", e:"🦊"},
  {w:"garrafa", caso:"r-rr", nivel:2, intr:["l"], dica:"Entre duas vogais, para o R soar forte, escrevem-se dois: garrafa.", e:"🍾"},
  {w:"cachorro", caso:"r-rr", nivel:3, intr:["l"], dica:"Entre duas vogais, para o R soar forte, escrevem-se dois: cachorro.", e:"🐶"},

  // ---- s-ss ----
  {w:"sapo", caso:"s-ss", nivel:1, intr:["z"], dica:"No início da palavra, o S lê-se como S: sapo.", e:"🐸"},
  {w:"sopa", caso:"s-ss", nivel:1, intr:["z"], dica:"No início da palavra, o S lê-se como S: sopa.", e:"🥣"},
  {w:"osso", caso:"s-ss", nivel:1, intr:["ç"], dica:"Entre duas vogais, para o S soar como S, escrevem-se dois: osso.", e:"🦴"},
  {w:"tosse", caso:"s-ss", nivel:2, intr:["ç"], dica:"Entre duas vogais, para o S soar como S, escrevem-se dois: tosse.", e:"🤧"},
  {w:"semana", caso:"s-ss", nivel:2, intr:["z"], dica:"No início da palavra, o S lê-se como S: semana.", e:"📆"},
  {w:"pessoa", caso:"s-ss", nivel:2, intr:["ç"], dica:"Entre duas vogais, para o S soar como S, escrevem-se dois: pessoa.", e:"🧍"},
  {w:"pássaro", caso:"s-ss", nivel:3, intr:["ç"], dica:"Entre duas vogais, para o S soar como S, escrevem-se dois: pássaro.", e:"🐦"},
  {w:"vassoura", caso:"s-ss", nivel:2, intr:["ç"], dica:"Entre duas vogais, para o S soar como S, escrevem-se dois: vassoura.", e:"🧹"},

  // ---- s-som-z: um só S entre vogais lê-se Z ----
  {w:"casa", caso:"s-som-z", nivel:1, intr:["z"], dica:"Entre duas vogais, um só S lê-se Z: casa.", e:"🏠"},
  {w:"mesa", caso:"s-som-z", nivel:1, intr:["z"], dica:"Entre duas vogais, um só S lê-se Z: mesa."},
  {w:"rosa", caso:"s-som-z", nivel:1, intr:["z"], dica:"Entre duas vogais, um só S lê-se Z: rosa.", e:"🌹"},
  {w:"vaso", caso:"s-som-z", nivel:2, intr:["z"], dica:"Entre duas vogais, um só S lê-se Z: vaso.", e:"🏺"},
  {w:"blusa", caso:"s-som-z", nivel:2, intr:["z"], dica:"Entre duas vogais, um só S lê-se Z: blusa.", e:"👚"},
  {w:"música", caso:"s-som-z", nivel:2, intr:["z"], dica:"Entre duas vogais, um só S lê-se Z: música.", e:"🎵"},
  {w:"tesoura", caso:"s-som-z", nivel:3, intr:["z"], dica:"Entre duas vogais, um só S lê-se Z: tesoura.", e:"✂️"},
  {w:"camisola", caso:"s-som-z", nivel:3, intr:["z"], dica:"Entre duas vogais, um só S lê-se Z: camisola.", e:"👕"},
  {w:"presente", caso:"s-som-z", nivel:2, intr:["z"], dica:"Entre duas vogais, um só S lê-se Z: presente.", e:"🎁"},

  // ---- z ----
  {w:"zero", caso:"z", nivel:1, intr:["s"], dica:"O Z lê-se sempre Z: zero.", e:"0️⃣"},
  {w:"luz", caso:"z", nivel:2, intr:["s"], dica:"No fim da palavra, este som escreve-se com Z: luz.", e:"💡"},
  {w:"zebra", caso:"z", nivel:1, intr:["s"], dica:"O Z lê-se sempre Z: zebra.", e:"🦓"},
  {w:"feliz", caso:"z", nivel:2, intr:["s"], dica:"No fim da palavra, este som escreve-se com Z: feliz.", e:"😊"},
  {w:"dezena", caso:"z", nivel:2, intr:["s"], dica:"O Z lê-se sempre Z: dezena.", e:"🔟"},
  {w:"azeite", caso:"z", nivel:2, intr:["s"], dica:"O Z lê-se sempre Z: azeite.", e:"🫒"},
  {w:"buzina", caso:"z", nivel:2, intr:["s"], dica:"O Z lê-se sempre Z: buzina.", e:"📢"},
  {w:"cozinha", caso:"z", nivel:3, intr:["s"], dica:"O Z lê-se sempre Z: cozinha.", e:"🍳"},

  // ---- x: vários sons ----
  {w:"lixo", caso:"x", nivel:1, intr:["c"], dica:"Aqui o X lê-se «ch»: lixo.", e:"🗑️"},
  {w:"peixe", caso:"x", nivel:1, intr:["s"], dica:"Aqui o X lê-se «ch»: peixe.", e:"🐟"},
  {w:"táxi", caso:"x", nivel:1, intr:["s"], dica:"Aqui o X lê-se «ks»: táxi.", e:"🚕"},
  {w:"caixa", caso:"x", nivel:2, intr:["s"], dica:"Aqui o X lê-se «ch»: caixa.", e:"📦"},
  {w:"bruxa", caso:"x", nivel:2, intr:["s"], dica:"Aqui o X lê-se «ch»: bruxa.", e:"🧙"},
  {w:"exame", caso:"x", nivel:2, intr:["s"], dica:"Aqui o X lê-se «z»: exame.", e:"📝"},
  {w:"xadrez", caso:"x", nivel:3, intr:["s"], dica:"Aqui o X lê-se «ch»: xadrez.", e:"♟️"},
  {w:"exemplo", caso:"x", nivel:3, intr:["z"], dica:"Aqui o X lê-se «z», mas escreve-se X: exemplo."},

  // ---- ch ----
  {w:"chave", caso:"ch", nivel:1, intr:["x"], dica:"O som «ch» escreve-se com CH: chave.", e:"🔑"},
  {w:"chuva", caso:"ch", nivel:1, intr:["x"], dica:"O som «ch» escreve-se com CH: chuva.", e:"🌧️"},
  {w:"chão", caso:"ch", nivel:1, intr:["x"], dica:"O som «ch» escreve-se com CH: chão."},
  {w:"chapéu", caso:"ch", nivel:2, intr:["x"], dica:"O som «ch» escreve-se com CH: chapéu.", e:"🎩"},
  {w:"chinelo", caso:"ch", nivel:2, intr:["x"], dica:"O som «ch» escreve-se com CH: chinelo.", e:"🩴"},
  {w:"chuveiro", caso:"ch", nivel:3, intr:["x"], dica:"O som «ch» escreve-se com CH: chuveiro.", e:"🚿"},
  {w:"salsicha", caso:"ch", nivel:3, intr:["x"], dica:"O som «ch» escreve-se com CH: salsicha.", e:"🌭"},
  {w:"cachecol", caso:"ch", nivel:3, intr:["x"], dica:"O som «ch» escreve-se com CH: cachecol.", e:"🧣"},
  {w:"chocolate", caso:"ch", nivel:3, intr:["x"], dica:"O som «ch» escreve-se com CH: chocolate.", e:"🍫"},

  // ---- nh ----
  {w:"unha", caso:"nh", nivel:1, intr:["i"], dica:"O som «nh» escreve-se com N e H juntos: unha.", e:"💅"},
  {w:"ninho", caso:"nh", nivel:1, intr:["i"], dica:"O som «nh» escreve-se com N e H juntos: ninho.", e:"🐣"},
  {w:"banho", caso:"nh", nivel:1, intr:["i"], dica:"O som «nh» escreve-se com N e H juntos: banho.", e:"🛁"},
  {w:"sonho", caso:"nh", nivel:1, intr:["i"], dica:"O som «nh» escreve-se com N e H juntos: sonho.", e:"💭"},
  {w:"manhã", caso:"nh", nivel:2, intr:["i"], dica:"O som «nh» escreve-se com N e H juntos: manhã.", e:"🌄"},
  {w:"aranha", caso:"nh", nivel:2, intr:["i"], dica:"O som «nh» escreve-se com N e H juntos: aranha.", e:"🕷️"},
  {w:"galinha", caso:"nh", nivel:3, intr:["i"], dica:"O som «nh» escreve-se com N e H juntos: galinha.", e:"🐔"},
  {w:"carinho", caso:"nh", nivel:3, intr:["i"], dica:"O som «nh» escreve-se com N e H juntos: carinho.", e:"🥰"},
  {w:"castanha", caso:"nh", nivel:3, intr:["i"], dica:"O som «nh» escreve-se com N e H juntos: castanha.", e:"🌰"},

  // ---- lh ----
  {w:"olho", caso:"lh", nivel:1, intr:["i"], dica:"O som «lh» escreve-se com L e H juntos: olho.", e:"👁️"},
  {w:"folha", caso:"lh", nivel:1, intr:["i"], dica:"O som «lh» escreve-se com L e H juntos: folha.", e:"🍃"},
  {w:"milho", caso:"lh", nivel:1, intr:["i"], dica:"O som «lh» escreve-se com L e H juntos: milho.", e:"🌽"},
  {w:"filho", caso:"lh", nivel:2, intr:["i"], dica:"O som «lh» escreve-se com L e H juntos: filho.", e:"👦"},
  {w:"coelho", caso:"lh", nivel:2, intr:["i"], dica:"O som «lh» escreve-se com L e H juntos: coelho.", e:"🐰"},
  {w:"abelha", caso:"lh", nivel:2, intr:["i"], dica:"O som «lh» escreve-se com L e H juntos: abelha.", e:"🐝"},
  {w:"ovelha", caso:"lh", nivel:2, intr:["i"], dica:"O som «lh» escreve-se com L e H juntos: ovelha.", e:"🐑"},
  {w:"orelha", caso:"lh", nivel:2, intr:["i"], dica:"O som «lh» escreve-se com L e H juntos: orelha.", e:"👂"},
  {w:"telhado", caso:"lh", nivel:3, intr:["i"], dica:"O som «lh» escreve-se com L e H juntos: telhado.", e:"🏡"},

  // ---- nasal-m: M antes de P e B, e em fim de palavra ----
  {w:"bem", caso:"nasal-m", nivel:1, intr:["n"], dica:"No fim da palavra, o som nasal escreve-se com M: bem.", e:"👍"},
  {w:"campo", caso:"nasal-m", nivel:1, intr:["n"], dica:"Antes de P e B escreve-se sempre M: campo.", e:"🏕️"},
  {w:"pomba", caso:"nasal-m", nivel:1, intr:["n"], dica:"Antes de P e B escreve-se sempre M: pomba.", e:"🕊️"},
  {w:"limpo", caso:"nasal-m", nivel:2, intr:["n"], dica:"Antes de P e B escreve-se sempre M: limpo.", e:"🧼"},
  {w:"sempre", caso:"nasal-m", nivel:2, intr:["n"], dica:"Antes de P e B escreve-se sempre M: sempre."},
  {w:"tambor", caso:"nasal-m", nivel:2, intr:["n"], dica:"Antes de P e B escreve-se sempre M: tambor.", e:"🥁"},
  {w:"comboio", caso:"nasal-m", nivel:3, intr:["n"], dica:"Antes de P e B escreve-se sempre M: comboio.", e:"🚆"},
  {w:"bombeiro", caso:"nasal-m", nivel:3, intr:["n"], dica:"Antes de P e B escreve-se sempre M: bombeiro.", e:"🧑‍🚒"},

  // ---- nasal-n: N antes das outras consoantes ----
  {w:"canto", caso:"nasal-n", nivel:1, intr:["m"], dica:"Antes de outras consoantes (não P nem B), o som nasal escreve-se com N: canto."},
  {w:"ponte", caso:"nasal-n", nivel:1, intr:["m"], dica:"Antes de outras consoantes (não P nem B), o som nasal escreve-se com N: ponte.", e:"🌉"},
  {w:"mundo", caso:"nasal-n", nivel:1, intr:["m"], dica:"Antes de outras consoantes (não P nem B), o som nasal escreve-se com N: mundo.", e:"🌎"},
  {w:"dente", caso:"nasal-n", nivel:2, intr:["m"], dica:"Antes de outras consoantes (não P nem B), o som nasal escreve-se com N: dente.", e:"🦷"},
  {w:"planta", caso:"nasal-n", nivel:2, intr:["m"], dica:"Antes de outras consoantes (não P nem B), o som nasal escreve-se com N: planta.", e:"🌿"},
  {w:"sandes", caso:"nasal-n", nivel:2, intr:["m"], dica:"Antes de outras consoantes (não P nem B), o som nasal escreve-se com N: sandes.", e:"🥪"},
  {w:"pincel", caso:"nasal-n", nivel:2, intr:["m"], dica:"Antes de outras consoantes (não P nem B), o som nasal escreve-se com N: pincel.", e:"🖌️"},
  {w:"elefante", caso:"nasal-n", nivel:3, intr:["m"], dica:"Antes de outras consoantes (não P nem B), o som nasal escreve-se com N: elefante.", e:"🐘"},

  // ---- til ----
  {w:"pão", caso:"til", nivel:1, intr:["u"], dica:"O til (~) faz a vogal soar pelo nariz: pão.", e:"🍞"},
  {w:"mãe", caso:"til", nivel:1, intr:["i"], dica:"O til (~) faz a vogal soar pelo nariz: mãe.", e:"👩"},
  {w:"põe", caso:"til", nivel:1, intr:["i"], dica:"O til (~) faz a vogal soar pelo nariz: põe."},
  {w:"irmã", caso:"til", nivel:2, intr:["n"], dica:"No fim da palavra, o som nasal do A escreve-se com til: irmã.", e:"👧"},
  {w:"limão", caso:"til", nivel:2, intr:["u"], dica:"O til (~) faz a vogal soar pelo nariz: limão.", e:"🍋"},
  {w:"balão", caso:"til", nivel:2, intr:["u"], dica:"O til (~) faz a vogal soar pelo nariz: balão.", e:"🎈"},
  {w:"avião", caso:"til", nivel:3, intr:["u"], dica:"O til (~) faz a vogal soar pelo nariz: avião.", e:"✈️"},
  {w:"coração", caso:"til", nivel:3, intr:["u"], dica:"O til (~) faz a vogal soar pelo nariz: coração.", e:"💗"},

  // ---- l-final ----
  {w:"sol", caso:"l-final", nivel:1, intr:["r"], dica:"No fim da palavra, o som «u» de sol escreve-se com L: sol.", e:"☀️"},
  {w:"mel", caso:"l-final", nivel:1, intr:["r"], dica:"No fim da palavra, o som «u» de mel escreve-se com L: mel.", e:"🍯"},
  {w:"anel", caso:"l-final", nivel:2, intr:["u"], dica:"No fim da palavra, o som «u» de anel escreve-se com L: anel.", e:"💍"},
  {w:"azul", caso:"l-final", nivel:2, intr:["u"], dica:"No fim da palavra, o som «u» de azul escreve-se com L: azul.", e:"🔵"},
  {w:"papel", caso:"l-final", nivel:2, intr:["u"], dica:"No fim da palavra, o som «u» de papel escreve-se com L: papel.", e:"📃"},
  {w:"animal", caso:"l-final", nivel:2, intr:["u"], dica:"No fim da palavra, o som «u» de animal escreve-se com L: animal.", e:"🐾"},
  {w:"caracol", caso:"l-final", nivel:3, intr:["u"], dica:"No fim da palavra, o som «u» de caracol escreve-se com L: caracol.", e:"🐌"},
  {w:"futebol", caso:"l-final", nivel:3, intr:["u"], dica:"No fim da palavra, o som «u» de futebol escreve-se com L: futebol.", e:"⚽"},

  // ---- r-final ----
  {w:"mar", caso:"r-final", nivel:1, intr:["e"], dica:"No fim da palavra, o R escreve-se mesmo que se ouça pouco: mar.", e:"🌊"},
  {w:"flor", caso:"r-final", nivel:1, intr:["l"], dica:"No fim da palavra, o R escreve-se mesmo que se ouça pouco: flor.", e:"🌸"},
  {w:"amor", caso:"r-final", nivel:2, intr:["l"], dica:"No fim da palavra, o R escreve-se mesmo que se ouça pouco: amor.", e:"💕"},
  {w:"comer", caso:"r-final", nivel:2, intr:["l"], dica:"Os verbos no infinitivo acabam em R: comer.", e:"😋"},
  {w:"dormir", caso:"r-final", nivel:2, intr:["l"], dica:"Os verbos no infinitivo acabam em R: dormir.", e:"😴"},
  {w:"colher", caso:"r-final", nivel:2, intr:["l"], dica:"No fim da palavra, o R escreve-se mesmo que se ouça pouco: colher.", e:"🥄"},
  {w:"cantor", caso:"r-final", nivel:2, intr:["l"], dica:"No fim da palavra, o R escreve-se mesmo que se ouça pouco: cantor.", e:"🎤"},
  {w:"doutor", caso:"r-final", nivel:2, intr:["l"], dica:"No fim da palavra, o R escreve-se mesmo que se ouça pouco: doutor.", e:"🩺"},
  {w:"computador", caso:"r-final", nivel:3, intr:["l"], dica:"No fim da palavra, o R escreve-se mesmo que se ouça pouco: computador.", e:"💻"},

  // ---- grupos consonânticos ----
  {w:"prato", caso:"grupos-consonanticos", nivel:1, intr:["a"], dica:"Duas consoantes seguidas leem-se juntas, sem vogal no meio: prato.", e:"🍽️"},
  {w:"trigo", caso:"grupos-consonanticos", nivel:1, intr:["i"], dica:"Duas consoantes seguidas leem-se juntas, sem vogal no meio: trigo.", e:"🌾"},
  {w:"livro", caso:"grupos-consonanticos", nivel:1, intr:["o"], dica:"Duas consoantes seguidas leem-se juntas, sem vogal no meio: livro.", e:"📖"},
  {w:"grilo", caso:"grupos-consonanticos", nivel:1, intr:["i"], dica:"Duas consoantes seguidas leem-se juntas, sem vogal no meio: grilo.", e:"🦗"},
  {w:"bloco", caso:"grupos-consonanticos", nivel:2, intr:["o"], dica:"Duas consoantes seguidas leem-se juntas, sem vogal no meio: bloco.", e:"🧱"},
  {w:"praia", caso:"grupos-consonanticos", nivel:2, intr:["a"], dica:"Duas consoantes seguidas leem-se juntas, sem vogal no meio: praia.", e:"🏖️"},
  {w:"dragão", caso:"grupos-consonanticos", nivel:2, intr:["a"], dica:"Duas consoantes seguidas leem-se juntas, sem vogal no meio: dragão.", e:"🐉"},
  {w:"bicicleta", caso:"grupos-consonanticos", nivel:3, intr:["i"], dica:"Duas consoantes seguidas leem-se juntas, sem vogal no meio: bicicleta.", e:"🚲"},

  // ---- h-inicial ----
  {w:"hora", caso:"h-inicial", nivel:1, intr:["l"], dica:"O H no início da palavra não se lê, mas escreve-se: hora.", e:"🕐"},
  {w:"horta", caso:"h-inicial", nivel:1, intr:["l"], dica:"O H no início da palavra não se lê, mas escreve-se: horta.", e:"🥬"},
  {w:"homem", caso:"h-inicial", nivel:1, intr:["n"], dica:"O H no início da palavra não se lê, mas escreve-se: homem.", e:"👨"},
  {w:"hotel", caso:"h-inicial", nivel:2, intr:["u"], dica:"O H no início da palavra não se lê, mas escreve-se: hotel.", e:"🏨"},
  {w:"herói", caso:"h-inicial", nivel:2, intr:["l"], dica:"O H no início da palavra não se lê, mas escreve-se: herói.", e:"🦸"},
  {w:"húmido", caso:"h-inicial", nivel:3, intr:["l"], dica:"O H no início da palavra não se lê, mas escreve-se: húmido.", e:"💧"},
  {w:"história", caso:"h-inicial", nivel:3, intr:["z"], dica:"O H no início da palavra não se lê, mas escreve-se: história.", e:"📚"},
  {w:"hospital", caso:"h-inicial", nivel:3, intr:["u"], dica:"O H no início da palavra não se lê, mas escreve-se: hospital.", e:"🏥"},
  {w:"hipopótamo", caso:"h-inicial", nivel:3, intr:["u"], dica:"O H no início da palavra não se lê, mas escreve-se: hipopótamo.", e:"🦛"},

  // ---- o-final-u ----
  {w:"gato", caso:"o-final-u", nivel:1, intr:["u"], dica:"No fim da palavra, o som «u» escreve-se quase sempre com O: gato.", e:"🐱"},
  {w:"pato", caso:"o-final-u", nivel:1, intr:["u"], dica:"No fim da palavra, o som «u» escreve-se quase sempre com O: pato.", e:"🦆"},
  {w:"bolo", caso:"o-final-u", nivel:1, intr:["u"], dica:"No fim da palavra, o som «u» escreve-se quase sempre com O: bolo.", e:"🎂"},
  {w:"copo", caso:"o-final-u", nivel:1, intr:["u"], dica:"No fim da palavra, o som «u» escreve-se quase sempre com O: copo.", e:"🥤"},
  {w:"ovo", caso:"o-final-u", nivel:1, intr:["u"], dica:"No fim da palavra, o som «u» escreve-se quase sempre com O: ovo.", e:"🥚"},
  {w:"barco", caso:"o-final-u", nivel:2, intr:["u"], dica:"No fim da palavra, o som «u» escreve-se quase sempre com O: barco.", e:"⛵"},
  {w:"porco", caso:"o-final-u", nivel:2, intr:["u"], dica:"No fim da palavra, o som «u» escreve-se quase sempre com O: porco.", e:"🐷"},
  {w:"sapato", caso:"o-final-u", nivel:2, intr:["u"], dica:"No fim da palavra, o som «u» escreve-se quase sempre com O: sapato.", e:"👞"},
  {w:"macaco", caso:"o-final-u", nivel:2, intr:["u"], dica:"No fim da palavra, o som «u» escreve-se quase sempre com O: macaco.", e:"🐵"},

  // ---- e-final-i ----
  {w:"nove", caso:"e-final-i", nivel:1, intr:["i"], dica:"No fim da palavra, o som «i» fraco escreve-se com E: nove.", e:"9️⃣"},
  {w:"rede", caso:"e-final-i", nivel:1, intr:["i"], dica:"No fim da palavra, o som «i» fraco escreve-se com E: rede.", e:"🥅"},
  {w:"bife", caso:"e-final-i", nivel:1, intr:["i"], dica:"No fim da palavra, o som «i» fraco escreve-se com E: bife.", e:"🥩"},
  {w:"nome", caso:"e-final-i", nivel:1, intr:["i"], dica:"No fim da palavra, o som «i» fraco escreve-se com E: nome.", e:"🏷️"},
  {w:"leite", caso:"e-final-i", nivel:2, intr:["i"], dica:"No fim da palavra, o som «i» fraco escreve-se com E: leite.", e:"🥛"},
  {w:"noite", caso:"e-final-i", nivel:2, intr:["i"], dica:"No fim da palavra, o som «i» fraco escreve-se com E: noite.", e:"🌙"},
  {w:"verde", caso:"e-final-i", nivel:2, intr:["i"], dica:"No fim da palavra, o som «i» fraco escreve-se com E: verde.", e:"🟢"},
  {w:"tarde", caso:"e-final-i", nivel:2, intr:["i"], dica:"No fim da palavra, o som «i» fraco escreve-se com E: tarde.", e:"🌇"},
  {w:"tomate", caso:"e-final-i", nivel:3, intr:["i"], dica:"No fim da palavra, o som «i» fraco escreve-se com E: tomate.", e:"🍅"},

  // ---- ditongos ----
  {w:"pai", caso:"ditongos", nivel:1, intr:["e"], dica:"Duas vogais juntas na mesma sílaba formam um ditongo: pai.", e:"👨‍👧"},
  {w:"rei", caso:"ditongos", nivel:1, intr:["a"], dica:"Duas vogais juntas na mesma sílaba formam um ditongo: rei.", e:"🤴"},
  {w:"boi", caso:"ditongos", nivel:1, intr:["u"], dica:"Duas vogais juntas na mesma sílaba formam um ditongo: boi.", e:"🐂"},
  {w:"céu", caso:"ditongos", nivel:1, intr:["o"], dica:"Duas vogais juntas na mesma sílaba formam um ditongo: céu.", e:"🌌"},
  {w:"ouro", caso:"ditongos", nivel:2, intr:["l"], dica:"O ditongo «ou» escreve-se com O e U: ouro.", e:"🥇"},
  {w:"roupa", caso:"ditongos", nivel:2, intr:["l"], dica:"O ditongo «ou» escreve-se com O e U: roupa.", e:"👗"},
  {w:"cadeira", caso:"ditongos", nivel:3, intr:["a"], dica:"O ditongo «ei» escreve-se com E e I: cadeira.", e:"🪑"},
  {w:"sereia", caso:"ditongos", nivel:3, intr:["a"], dica:"O ditongo «ei» escreve-se com E e I: sereia.", e:"🧜"},
  {w:"papagaio", caso:"ditongos", nivel:3, intr:["e"], dica:"O ditongo «ai» escreve-se com A e I: papagaio.", e:"🦜"},

  // ---- acentos ----
  {w:"café", caso:"acentos", nivel:1, intr:["e"], dica:"O acento agudo (´) marca a sílaba forte e abre a vogal: café.", e:"☕"},
  {w:"avó", caso:"acentos", nivel:1, intr:["o"], dica:"O acento agudo (´) abre a vogal: avó (com O aberto).", e:"👵"},
  {w:"avô", caso:"acentos", nivel:1, intr:["o"], dica:"O acento circunflexo (^) fecha a vogal: avô (com O fechado).", e:"👴"},
  {w:"bebé", caso:"acentos", nivel:2, intr:["u"], dica:"O acento agudo (´) marca a sílaba forte e abre a vogal: bebé.", e:"👶"},
  {w:"ténis", caso:"acentos", nivel:2, intr:["e"], dica:"O acento agudo (´) marca a sílaba forte e abre a vogal: ténis.", e:"👟"},
  {w:"óculos", caso:"acentos", nivel:3, intr:["o"], dica:"O acento agudo (´) marca a sílaba forte e abre a vogal: óculos.", e:"👓"},
  {w:"árvore", caso:"acentos", nivel:3, intr:["a"], dica:"O acento agudo (´) marca a sílaba forte e abre a vogal: árvore.", e:"🌳"},
  {w:"âncora", caso:"acentos", nivel:3, intr:["o"], dica:"O acento circunflexo (^) marca a sílaba forte e fecha a vogal: âncora.", e:"⚓"},

  // ---- plurais (2.º ano) ----
  {w:"pães", caso:"plurais", nivel:3, intr:["o"], dica:"Palavras em -ão podem fazer o plural em -ães: pão, pães.", e:"🥖"},
  {w:"cães", caso:"plurais", nivel:3, intr:["o"], dica:"Palavras em -ão podem fazer o plural em -ães: cão, cães.", e:"🐕"},
  {w:"mãos", caso:"plurais", nivel:3, intr:["u"], dica:"Algumas palavras em -ão fazem o plural só com S: mão, mãos.", e:"🙌"},
  {w:"limões", caso:"plurais", nivel:3, intr:["a"], dica:"A maioria das palavras em -ão faz o plural em -ões: limão, limões.", e:"🍋"},
  {w:"flores", caso:"plurais", nivel:3, intr:["i"], dica:"Palavras acabadas em R fazem o plural com -es: flor, flores.", e:"💐"},
  {w:"animais", caso:"plurais", nivel:3, intr:["l"], dica:"Palavras em -al fazem o plural em -ais: animal, animais.", e:"🐾"},
  {w:"papéis", caso:"plurais", nivel:3, intr:["e"], dica:"Palavras em -el fazem o plural em -éis: papel, papéis.", e:"📃"},
  {w:"lápis", caso:"plurais", nivel:3, intr:["z"], dica:"Lápis é igual no singular e no plural: um lápis, dois lápis.", e:"✏️"}
];

window.BANCO_GRAM = [
  // ---- plural (20) ----
  {t:"plural", q:"Qual é o plural de «pão»?", o:["pãos","pães","pões"], ok:1, dica:"Palavras em -ão podem fazer o plural em -ães: pão, pães.", nivel:2},
  {t:"plural", q:"Qual é o plural de «gato»?", o:["gatos","gatões","gates"], ok:0, dica:"A maioria das palavras faz o plural juntando um S: gato, gatos.", nivel:1},
  {t:"plural", q:"Qual é o plural de «flor»?", o:["flors","flores","florem"], ok:1, dica:"Palavras acabadas em R fazem o plural com -es: flor, flores.", nivel:1},
  {t:"plural", q:"Qual é o plural de «animal»?", o:["animals","animales","animais"], ok:2, dica:"Palavras em -al fazem o plural em -ais: animal, animais.", nivel:2},
  {t:"plural", q:"Qual é o plural de «limão»?", o:["limões","limãos","limães"], ok:0, dica:"A maioria das palavras em -ão faz o plural em -ões: limão, limões.", nivel:2},
  {t:"plural", q:"Qual é o plural de «papel»?", o:["papeis","papéis","papels"], ok:1, dica:"Palavras em -el fazem o plural em -éis, com acento: papel, papéis.", nivel:2},
  {t:"plural", q:"Qual é o plural de «lápis»?", o:["lápises","lápis","lápiz"], ok:1, dica:"Lápis é igual no singular e no plural: um lápis, dois lápis.", nivel:2},
  {t:"plural", q:"Qual é o plural de «mão»?", o:["mãos","mães","mões"], ok:0, dica:"Algumas palavras em -ão fazem o plural só com S: mão, mãos.", nivel:2},
  {t:"plural", q:"Qual é o plural de «nuvem»?", o:["nuvems","nuvenes","nuvens"], ok:2, dica:"Palavras acabadas em M trocam o M por NS no plural: nuvem, nuvens.", nivel:2},
  {t:"plural", q:"Qual é o plural de «cão»?", o:["cãos","cães","cões"], ok:1, dica:"Palavras em -ão podem fazer o plural em -ães: cão, cães.", nivel:2},
  {t:"plural", q:"Qual é o plural de «mesa»?", o:["mesas","meses","mesãs"], ok:0, dica:"A maioria das palavras faz o plural juntando um S: mesa, mesas.", nivel:1},
  {t:"plural", q:"Qual é o plural de «balão»?", o:["balãos","balães","balões"], ok:2, dica:"A maioria das palavras em -ão faz o plural em -ões: balão, balões.", nivel:2},
  {t:"plural", q:"Qual é o plural de «anel»?", o:["anéis","aneles","anels"], ok:0, dica:"Palavras em -el fazem o plural em -éis, com acento: anel, anéis.", nivel:2},
  {t:"plural", q:"Qual é o plural de «azul»?", o:["azules","azuis","azuls"], ok:1, dica:"Palavras em -ul fazem o plural em -uis: azul, azuis.", nivel:2},
  {t:"plural", q:"Qual é o plural de «rapaz»?", o:["rapazs","rapazes","rapaces"], ok:1, dica:"Palavras acabadas em Z fazem o plural com -es: rapaz, rapazes.", nivel:1},
  {t:"plural", q:"Qual é o plural de «jardim»?", o:["jardims","jardines","jardins"], ok:2, dica:"Palavras acabadas em M trocam o M por NS no plural: jardim, jardins.", nivel:2},
  {t:"plural", q:"Qual é o plural de «irmã»?", o:["irmães","irmãs","irmãos"], ok:1, dica:"Irmã faz o plural só com S: irmã, irmãs. Irmãos é o plural de irmão.", nivel:1},
  {t:"plural", q:"Qual é o plural de «leão»?", o:["leões","leães","leãos"], ok:0, dica:"A maioria das palavras em -ão faz o plural em -ões: leão, leões.", nivel:2},
  {t:"plural", q:"Qual é o plural de «sol»?", o:["sols","soles","sóis"], ok:2, dica:"Palavras em -ol fazem o plural em -óis, com acento: sol, sóis.", nivel:2},
  {t:"plural", q:"Qual é o plural de «peixe»?", o:["peixes","peixs","peixis"], ok:0, dica:"A maioria das palavras faz o plural juntando um S: peixe, peixes.", nivel:1},

  // ---- singular (8) ----
  {t:"singular", q:"Qual é o singular de «pães»?", o:["pãe","pão","pãs"], ok:1, dica:"Pães é o plural de pão.", nivel:2},
  {t:"singular", q:"Qual é o singular de «flores»?", o:["flore","flor","flors"], ok:1, dica:"Flores é o plural de flor: tira-se o -es.", nivel:1},
  {t:"singular", q:"Qual é o singular de «cães»?", o:["cãe","cã","cão"], ok:2, dica:"Cães é o plural de cão.", nivel:2},
  {t:"singular", q:"Qual é o singular de «papéis»?", o:["papel","papéi","papele"], ok:0, dica:"Papéis é o plural de papel.", nivel:2},
  {t:"singular", q:"Qual é o singular de «livros»?", o:["livros","livro","livre"], ok:1, dica:"Para passar ao singular, tira-se o S: livros, livro.", nivel:1},
  {t:"singular", q:"Qual é o singular de «corações»?", o:["coração","coraçõe","coraçã"], ok:0, dica:"Corações é o plural de coração.", nivel:2},
  {t:"singular", q:"Qual é o singular de «animais»?", o:["animai","animal","animale"], ok:1, dica:"Animais é o plural de animal: -ais vem de -al.", nivel:2},
  {t:"singular", q:"Qual é o singular de «lápis»?", o:["lápi","lápise","lápis"], ok:2, dica:"Lápis é igual no singular e no plural.", nivel:2},

  // ---- genero (15): concordância ----
  {t:"genero", q:"O gato é ___.", o:["preto","preta","pretos"], ok:0, dica:"Gato é masculino e singular, por isso o adjetivo também: preto.", nivel:1},
  {t:"genero", q:"As flores são ___.", o:["bonito","bonita","bonitas"], ok:2, dica:"Flores é feminino e plural, por isso o adjetivo também: bonitas.", nivel:1},
  {t:"genero", q:"A casa é ___.", o:["grande","grandes","grando"], ok:0, dica:"Casa está no singular, por isso o adjetivo fica no singular: grande.", nivel:1},
  {t:"genero", q:"Os meninos estão ___.", o:["contente","contentes","contenta"], ok:1, dica:"Meninos é plural, por isso o adjetivo também: contentes.", nivel:1},
  {t:"genero", q:"A sopa está ___.", o:["quente","quentes","quento"], ok:0, dica:"Sopa está no singular, por isso o adjetivo fica no singular: quente.", nivel:1},
  {t:"genero", q:"O céu está ___.", o:["azuis","azula","azul"], ok:2, dica:"Céu é singular, por isso o adjetivo também: azul.", nivel:1},
  {t:"genero", q:"As maçãs são ___.", o:["vermelhas","vermelhos","vermelha"], ok:0, dica:"Maçãs é feminino e plural, por isso o adjetivo também: vermelhas.", nivel:1},
  {t:"genero", q:"A minha irmã é ___.", o:["pequeno","pequena","pequenas"], ok:1, dica:"Irmã é feminino e singular, por isso o adjetivo também: pequena.", nivel:1},
  {t:"genero", q:"Os sapatos são ___.", o:["novo","nova","novos"], ok:2, dica:"Sapatos é masculino e plural, por isso o adjetivo também: novos.", nivel:1},
  {t:"genero", q:"___ borboleta voa.", o:["O","A","Os"], ok:1, dica:"Borboleta é uma palavra feminina: a borboleta.", nivel:1},
  {t:"genero", q:"___ leões dormem.", o:["Os","As","O"], ok:0, dica:"Leões é masculino e plural: os leões.", nivel:1},
  {t:"genero", q:"A professora é ___.", o:["simpático","simpática","simpáticos"], ok:1, dica:"Professora é feminino e singular, por isso o adjetivo também: simpática.", nivel:1},
  {t:"genero", q:"O comboio é ___.", o:["rápido","rápida","rápidas"], ok:0, dica:"Comboio é masculino e singular, por isso o adjetivo também: rápido.", nivel:2},
  {t:"genero", q:"As estrelas são ___.", o:["brilhante","brilhantes","brilhanto"], ok:1, dica:"Estrelas é plural, por isso o adjetivo também: brilhantes.", nivel:2},
  {t:"genero", q:"___ mão está fria.", o:["O","A","As"], ok:1, dica:"Mão é uma palavra feminina, mesmo acabando em -ão: a mão.", nivel:2},

  // ---- nome-proprio (8) ----
  {t:"nome-proprio", q:"Qual destas palavras é um nome próprio?", o:["cidade","Porto","rua"], ok:1, dica:"Os nomes próprios são nomes de pessoas, lugares ou animais e escrevem-se com maiúscula: Porto.", nivel:1},
  {t:"nome-proprio", q:"Qual destas palavras deve começar por letra maiúscula?", o:["menina","rita","escola"], ok:1, dica:"Rita é o nome de uma pessoa, por isso escreve-se com maiúscula.", nivel:1},
  {t:"nome-proprio", q:"Qual destas palavras é o nome de um rio?", o:["Tejo","rio","água"], ok:0, dica:"Tejo é um nome próprio: o nome de um rio de Portugal.", nivel:2},
  {t:"nome-proprio", q:"Qual destas palavras é um nome próprio?", o:["cão","animal","Bobi"], ok:2, dica:"Bobi é o nome de um cão em particular, por isso é nome próprio e leva maiúscula.", nivel:1},
  {t:"nome-proprio", q:"Qual destas frases está bem escrita?", o:["A maria vive em lisboa.","A Maria vive em Lisboa.","a Maria vive em lisboa."], ok:1, dica:"Nomes de pessoas e de cidades levam maiúscula, e a frase começa com maiúscula.", nivel:2},
  {t:"nome-proprio", q:"Qual destas palavras é um nome comum?", o:["Portugal","país","Braga"], ok:1, dica:"País é um nome comum: serve para qualquer país. Portugal e Braga são nomes próprios.", nivel:2},
  {t:"nome-proprio", q:"Qual destas palavras deve começar por letra maiúscula?", o:["mar","praia","algarve"], ok:2, dica:"Algarve é o nome de uma região, por isso é nome próprio e leva maiúscula.", nivel:2},
  {t:"nome-proprio", q:"Qual destas palavras é um nome próprio?", o:["planeta","Marte","estrela"], ok:1, dica:"Marte é o nome de um planeta em particular, por isso leva maiúscula.", nivel:2},

  // ---- frase-tipo (10): sinal no fim ----
  {t:"frase-tipo", q:"Que sinal falta no fim: «Onde está o meu lápis»", o:["?","!","."], ok:0, dica:"Quando fazemos uma pergunta, a frase termina com ponto de interrogação (?).", nivel:1},
  {t:"frase-tipo", q:"Que sinal falta no fim: «Que susto»", o:[".","?","!"], ok:2, dica:"Quando mostramos surpresa ou emoção, a frase termina com ponto de exclamação (!).", nivel:1},
  {t:"frase-tipo", q:"Que sinal falta no fim: «O gato dorme no sofá»", o:["!",".","?"], ok:1, dica:"Quando só contamos uma coisa, a frase termina com ponto final (.).", nivel:1},
  {t:"frase-tipo", q:"Que sinal falta no fim: «Queres ir ao parque»", o:["?",".","!"], ok:0, dica:"Quando fazemos uma pergunta, a frase termina com ponto de interrogação (?).", nivel:1},
  {t:"frase-tipo", q:"Que sinal falta no fim: «Parabéns, ganhaste»", o:[".","!","?"], ok:1, dica:"Quando mostramos alegria ou emoção, a frase termina com ponto de exclamação (!).", nivel:1},
  {t:"frase-tipo", q:"Que sinal falta no fim: «A Lua gira à volta da Terra»", o:["?","!","."], ok:2, dica:"Quando só contamos uma coisa, a frase termina com ponto final (.).", nivel:1},
  {t:"frase-tipo", q:"Que sinal falta no fim: «Quantos anos tens»", o:[".","?","!"], ok:1, dica:"Quando fazemos uma pergunta, a frase termina com ponto de interrogação (?).", nivel:1},
  {t:"frase-tipo", q:"Que sinal falta no fim: «Que bolo delicioso»", o:["!",".","?"], ok:0, dica:"Quando mostramos admiração, a frase termina com ponto de exclamação (!).", nivel:2},
  {t:"frase-tipo", q:"Que sinal falta no fim: «Amanhã vamos à praia»", o:["?",".","!"], ok:1, dica:"Quando só contamos uma coisa, a frase termina com ponto final (.).", nivel:1},
  {t:"frase-tipo", q:"Que sinal falta no fim: «Cuidado, a bola vem aí»", o:[".","?","!"], ok:2, dica:"Quando avisamos ou chamamos a atenção, a frase termina com ponto de exclamação (!).", nivel:2},

  // ---- pontuacao (8): frase bem pontuada ----
  {t:"pontuacao", q:"Qual destas frases está bem pontuada?", o:["Comprei maçãs, peras e uvas.","Comprei maçãs peras e uvas.","Comprei, maçãs, peras e uvas."], ok:0, dica:"Numa lista, separam-se os elementos com vírgula, e antes do último usa-se «e».", nivel:2},
  {t:"pontuacao", q:"Qual destas frases está bem pontuada?", o:["Olá Rita como estás","Olá, Rita, como estás?","Olá Rita, como estás."], ok:1, dica:"O nome da pessoa a quem falamos fica entre vírgulas, e a pergunta acaba com «?».", nivel:2},
  {t:"pontuacao", q:"Qual destas frases está bem pontuada?", o:["O Pedro, gosta de futebol.","O Pedro gosta de futebol.","O Pedro gosta, de futebol."], ok:1, dica:"Não se põe vírgula entre quem faz a ação e o verbo.", nivel:1},
  {t:"pontuacao", q:"Qual destas frases está bem pontuada?", o:["Não, não quero mais sopa.","Não não quero mais sopa.","Não não, quero mais sopa."], ok:0, dica:"Depois de «Não» a responder, usa-se vírgula: Não, não quero.", nivel:2},
  {t:"pontuacao", q:"Qual destas frases está bem pontuada?", o:["Vamos jogar, à bola?","Vamos jogar à bola?","Vamos, jogar à bola?"], ok:1, dica:"Uma frase curta e simples não precisa de vírgulas no meio.", nivel:1},
  {t:"pontuacao", q:"Qual destas frases está bem pontuada?", o:["Tenho um cão um gato e um peixe.","Tenho um cão, um gato, e um peixe.","Tenho um cão, um gato e um peixe."], ok:2, dica:"Numa lista, usa-se vírgula entre os elementos, mas não antes de «e».", nivel:2},
  {t:"pontuacao", q:"Qual destas frases está bem pontuada?", o:["Mãe, posso ir brincar?","Mãe posso ir brincar?","Mãe, posso, ir brincar?"], ok:0, dica:"Quando chamamos alguém, o nome fica separado por vírgula: Mãe, posso ir brincar?", nivel:2},
  {t:"pontuacao", q:"Qual destas frases está bem pontuada?", o:["A joana foi à escola","A Joana foi à escola.","a Joana foi à escola."], ok:1, dica:"A frase começa com maiúscula, o nome próprio leva maiúscula e termina com ponto final.", nivel:1},

  // ---- classe (14): nome, verbo, adjetivo ----
  {t:"classe", q:"Na frase «O cão grande ladra», qual é o adjetivo?", o:["cão","grande","ladra"], ok:1, dica:"O adjetivo diz como é o nome: o cão é grande.", nivel:3},
  {t:"classe", q:"Na frase «A menina lê um livro», qual é o verbo?", o:["menina","livro","lê"], ok:2, dica:"O verbo indica a ação: a menina lê.", nivel:3},
  {t:"classe", q:"Na frase «O sol brilha», qual é o nome?", o:["sol","brilha","o"], ok:0, dica:"O nome é a palavra que dá nome a uma coisa, pessoa ou animal: sol.", nivel:3},
  {t:"classe", q:"Qual destas palavras é um verbo?", o:["correr","mesa","azul"], ok:0, dica:"Os verbos indicam ações e no infinitivo acabam em -ar, -er ou -ir: correr.", nivel:3},
  {t:"classe", q:"Qual destas palavras é um adjetivo?", o:["comer","bonito","escola"], ok:1, dica:"O adjetivo diz como é alguma coisa: bonito.", nivel:3},
  {t:"classe", q:"Qual destas palavras é um nome?", o:["saltar","feliz","casa"], ok:2, dica:"O nome dá nome a coisas, pessoas, animais ou lugares: casa.", nivel:3},
  {t:"classe", q:"Na frase «A tartaruga lenta caminha», qual é o adjetivo?", o:["tartaruga","lenta","caminha"], ok:1, dica:"O adjetivo diz como é o nome: a tartaruga é lenta.", nivel:3},
  {t:"classe", q:"Na frase «Os meninos comem gelado», qual é o verbo?", o:["meninos","comem","gelado"], ok:1, dica:"O verbo indica a ação: os meninos comem.", nivel:3},
  {t:"classe", q:"Na frase «O foguete voa alto», qual é o nome?", o:["voa","alto","foguete"], ok:2, dica:"O nome dá nome a uma coisa: foguete.", nivel:3},
  {t:"classe", q:"Qual destas palavras é um verbo?", o:["cadeira","dormir","vermelho"], ok:1, dica:"Os verbos indicam ações ou estados: dormir.", nivel:3},
  {t:"classe", q:"Qual destas palavras é um adjetivo?", o:["alegre","saltar","janela"], ok:0, dica:"O adjetivo diz como é alguém ou alguma coisa: alegre.", nivel:3},
  {t:"classe", q:"Na frase «A flor amarela cheira bem», qual é o adjetivo?", o:["flor","amarela","cheira"], ok:1, dica:"O adjetivo diz como é o nome: a flor é amarela.", nivel:3},
  {t:"classe", q:"Na frase «O avô conta histórias», qual é o verbo?", o:["conta","avô","histórias"], ok:0, dica:"O verbo indica a ação: o avô conta.", nivel:3},
  {t:"classe", q:"Qual destas palavras é um nome?", o:["pequeno","nadar","escola"], ok:2, dica:"O nome dá nome a lugares, coisas, pessoas ou animais: escola.", nivel:3},

  // ---- sinonimo (10) ----
  {t:"sinonimo", q:"Qual palavra quer dizer o mesmo que «alegre»?", o:["contente","triste","cansado"], ok:0, dica:"Alegre e contente são sinónimos: querem dizer o mesmo.", nivel:1},
  {t:"sinonimo", q:"Qual palavra quer dizer o mesmo que «bonito»?", o:["feio","lindo","grande"], ok:1, dica:"Bonito e lindo são sinónimos.", nivel:1},
  {t:"sinonimo", q:"Qual palavra quer dizer o mesmo que «rápido»?", o:["lento","veloz","alto"], ok:1, dica:"Rápido e veloz são sinónimos.", nivel:2},
  {t:"sinonimo", q:"Qual palavra quer dizer o mesmo que «casa»?", o:["escola","jardim","lar"], ok:2, dica:"Casa e lar são sinónimos.", nivel:2},
  {t:"sinonimo", q:"Qual palavra quer dizer o mesmo que «grande»?", o:["enorme","pequeno","baixo"], ok:0, dica:"Grande e enorme são sinónimos.", nivel:1},
  {t:"sinonimo", q:"Qual palavra quer dizer o mesmo que «começar»?", o:["acabar","iniciar","parar"], ok:1, dica:"Começar e iniciar são sinónimos.", nivel:2},
  {t:"sinonimo", q:"Qual palavra quer dizer o mesmo que «esperto»?", o:["inteligente","tonto","lento"], ok:0, dica:"Esperto e inteligente são sinónimos.", nivel:2},
  {t:"sinonimo", q:"Qual palavra quer dizer o mesmo que «falar»?", o:["calar","dizer","ouvir"], ok:1, dica:"Falar e dizer são sinónimos.", nivel:1},
  {t:"sinonimo", q:"Qual palavra quer dizer o mesmo que «feliz»?", o:["zangado","triste","contente"], ok:2, dica:"Feliz e contente são sinónimos.", nivel:1},
  {t:"sinonimo", q:"Qual palavra quer dizer o mesmo que «carro»?", o:["automóvel","autocarro","comboio"], ok:0, dica:"Carro e automóvel são sinónimos. O autocarro e o comboio são outros meios de transporte.", nivel:2},

  // ---- antonimo (10) ----
  {t:"antonimo", q:"Qual palavra quer dizer o contrário de «quente»?", o:["frio","quentinho","fervente"], ok:0, dica:"Quente e frio são antónimos: querem dizer o contrário.", nivel:1},
  {t:"antonimo", q:"Qual palavra quer dizer o contrário de «grande»?", o:["enorme","pequeno","gordo"], ok:1, dica:"Grande e pequeno são antónimos.", nivel:1},
  {t:"antonimo", q:"Qual palavra quer dizer o contrário de «alto»?", o:["baixo","magro","largo"], ok:0, dica:"Alto e baixo são antónimos.", nivel:1},
  {t:"antonimo", q:"Qual palavra quer dizer o contrário de «dia»?", o:["tarde","manhã","noite"], ok:2, dica:"Dia e noite são antónimos.", nivel:1},
  {t:"antonimo", q:"Qual palavra quer dizer o contrário de «cheio»?", o:["vazio","pesado","leve"], ok:0, dica:"Cheio e vazio são antónimos.", nivel:1},
  {t:"antonimo", q:"Qual palavra quer dizer o contrário de «rápido»?", o:["veloz","lento","forte"], ok:1, dica:"Rápido e lento são antónimos.", nivel:1},
  {t:"antonimo", q:"Qual palavra quer dizer o contrário de «abrir»?", o:["fechar","entrar","saltar"], ok:0, dica:"Abrir e fechar são antónimos.", nivel:1},
  {t:"antonimo", q:"Qual palavra quer dizer o contrário de «limpo»?", o:["novo","sujo","velho"], ok:1, dica:"Limpo e sujo são antónimos.", nivel:1},
  {t:"antonimo", q:"Qual palavra quer dizer o contrário de «subir»?", o:["correr","andar","descer"], ok:2, dica:"Subir e descer são antónimos.", nivel:1},
  {t:"antonimo", q:"Qual palavra quer dizer o contrário de «feliz»?", o:["contente","triste","alegre"], ok:1, dica:"Feliz e triste são antónimos.", nivel:1},

  // ---- silabas (12) ----
  {t:"silabas", q:"Quantas sílabas tem «borboleta»?", o:["3","4","5"], ok:1, dica:"bor-bo-le-ta tem 4 sílabas. Bate uma palma por cada bocadinho.", nivel:2},
  {t:"silabas", q:"Quantas sílabas tem «sol»?", o:["1","2","3"], ok:0, dica:"Sol diz-se de uma só vez: tem 1 sílaba.", nivel:1},
  {t:"silabas", q:"Quantas sílabas tem «casa»?", o:["1","2","3"], ok:1, dica:"ca-sa tem 2 sílabas.", nivel:1},
  {t:"silabas", q:"Quantas sílabas tem «elefante»?", o:["4","3","5"], ok:0, dica:"e-le-fan-te tem 4 sílabas.", nivel:2},
  {t:"silabas", q:"Quantas sílabas tem «pão»?", o:["1","2","3"], ok:0, dica:"Pão diz-se de uma só vez: tem 1 sílaba. O «ão» é um ditongo.", nivel:1},
  {t:"silabas", q:"Quantas sílabas tem «chocolate»?", o:["5","3","4"], ok:2, dica:"cho-co-la-te tem 4 sílabas.", nivel:2},
  {t:"silabas", q:"Como se divide «janela» em sílabas?", o:["ja-ne-la","jan-ela","ja-nela"], ok:0, dica:"Cada sílaba tem uma vogal: ja-ne-la.", nivel:2},
  {t:"silabas", q:"Como se divide «carro» em sílabas?", o:["ca-rro","car-ro","carr-o"], ok:1, dica:"Os dois R separam-se, um em cada sílaba: car-ro.", nivel:2},
  {t:"silabas", q:"Como se divide «passarinho» em sílabas?", o:["pas-sa-ri-nho","pa-ssa-ri-nho","pass-a-ri-nho"], ok:0, dica:"Os dois S separam-se, e o NH fica junto: pas-sa-ri-nho.", nivel:3},
  {t:"silabas", q:"Como se divide «coelho» em sílabas?", o:["co-e-lho","coe-lho","co-el-ho"], ok:0, dica:"O O e o E dizem-se separados, e o LH fica junto: co-e-lho.", nivel:2},
  {t:"silabas", q:"Quantas sílabas tem «bicicleta»?", o:["3","5","4"], ok:2, dica:"bi-ci-cle-ta tem 4 sílabas.", nivel:2},
  {t:"silabas", q:"Como se divide «peixe» em sílabas?", o:["pe-i-xe","pei-xe","peix-e"], ok:1, dica:"O ditongo «ei» fica na mesma sílaba: pei-xe.", nivel:2},

  // ---- ordem-alfabetica (8) ----
  {t:"ordem-alfabetica", q:"Qual destas letras vem primeiro no alfabeto?", o:["B","D","F"], ok:0, dica:"A ordem do alfabeto é A, B, C, D, E, F... O B vem antes do D e do F.", nivel:1},
  {t:"ordem-alfabetica", q:"Qual destas palavras vem primeiro no dicionário?", o:["gato","cão","pato"], ok:1, dica:"No dicionário olha-se para a primeira letra: C vem antes de G e de P.", nivel:2},
  {t:"ordem-alfabetica", q:"Qual letra vem logo depois do M?", o:["L","N","O"], ok:1, dica:"No alfabeto: ...L, M, N, O... Depois do M vem o N.", nivel:1},
  {t:"ordem-alfabetica", q:"Qual destas palavras vem primeiro no dicionário?", o:["zebra","macaco","abelha"], ok:2, dica:"A é a primeira letra do alfabeto, por isso abelha vem primeiro.", nivel:2},
  {t:"ordem-alfabetica", q:"Qual letra vem logo antes do S?", o:["R","T","U"], ok:0, dica:"No alfabeto: ...Q, R, S, T... Antes do S vem o R.", nivel:1},
  {t:"ordem-alfabetica", q:"Qual destas palavras vem em último lugar no dicionário?", o:["bola","dado","avião"], ok:1, dica:"A vem antes de B, e B antes de D. Dado é a última.", nivel:2},
  {t:"ordem-alfabetica", q:"Qual destas palavras vem primeiro no dicionário?", o:["uva","banana","morango"], ok:1, dica:"B vem antes de M e de U, por isso banana vem primeiro.", nivel:2},
  {t:"ordem-alfabetica", q:"Qual destas letras vem primeiro no alfabeto?", o:["T","P","J"], ok:2, dica:"J vem antes de P, e P vem antes de T.", nivel:1},

  // ---- conector (6) ----
  {t:"conector", q:"Fiquei em casa ___ estava a chover.", o:["mas","porque","quando"], ok:1, dica:"«Porque» explica a razão: fiquei em casa porque chovia.", nivel:2},
  {t:"conector", q:"Gosto de maçãs ___ de peras.", o:["mas","e","porque"], ok:1, dica:"«E» junta duas coisas: maçãs e peras.", nivel:1},
  {t:"conector", q:"Queria brincar, ___ tinha de estudar.", o:["e","porque","mas"], ok:2, dica:"«Mas» mostra uma oposição: queria uma coisa, mas tinha de fazer outra.", nivel:2},
  {t:"conector", q:"Lavo os dentes ___ acabo de comer.", o:["quando","mas","porque"], ok:0, dica:"«Quando» indica o momento em que algo acontece.", nivel:2},
  {t:"conector", q:"Vesti o casaco ___ tinha frio.", o:["porque","e","quando"], ok:0, dica:"«Porque» explica a razão: vesti o casaco porque tinha frio.", nivel:2},
  {t:"conector", q:"O gato dorme ___ o cão brinca.", o:["porque","e","quando"], ok:1, dica:"«E» junta duas ideias: o gato dorme e o cão brinca.", nivel:1},

  // ---- familia-palavras (6) ----
  {t:"familia-palavras", q:"Qual destas palavras pertence à família de «flor»?", o:["florista","flauta","flutuar"], ok:0, dica:"Florista vem de flor: é quem vende flores. As palavras da mesma família têm a mesma raiz e sentido ligado.", nivel:2},
  {t:"familia-palavras", q:"Qual destas palavras pertence à família de «pão»?", o:["pato","padaria","papel"], ok:1, dica:"Padaria é a loja onde se faz e vende pão.", nivel:2},
  {t:"familia-palavras", q:"Qual destas palavras pertence à família de «pedra»?", o:["pedal","pente","pedreiro"], ok:2, dica:"Pedreiro é quem trabalha com pedra.", nivel:2},
  {t:"familia-palavras", q:"Qual destas palavras pertence à família de «livro»?", o:["livre","livraria","lírio"], ok:1, dica:"Livraria é a loja onde se vendem livros.", nivel:2},
  {t:"familia-palavras", q:"Qual destas palavras pertence à família de «sapato»?", o:["sapo","sapateiro","sabão"], ok:1, dica:"Sapateiro é quem faz ou arranja sapatos.", nivel:2},
  {t:"familia-palavras", q:"Qual destas palavras pertence à família de «peixe»?", o:["peito","pêssego","peixeiro"], ok:2, dica:"Peixeiro é quem vende peixe.", nivel:2},

  // ---- frase-ordem (10) ----
  {t:"frase-ordem", q:"Qual é a frase bem ordenada?", o:["Gato o dorme sofá no.","O gato dorme no sofá.","Dorme sofá o gato no."], ok:1, dica:"Primeiro quem faz (o gato), depois o que faz (dorme) e onde (no sofá).", nivel:1},
  {t:"frase-ordem", q:"Qual é a frase bem ordenada?", o:["A Rita come uma maçã.","Come Rita a maçã uma.","Maçã a Rita come uma."], ok:0, dica:"Primeiro quem faz (a Rita), depois a ação (come) e o quê (uma maçã).", nivel:1},
  {t:"frase-ordem", q:"Qual é a frase bem ordenada?", o:["Escola à vou amanhã.","Amanhã escola à vou.","Amanhã vou à escola."], ok:2, dica:"A frase tem de fazer sentido quando a lemos: Amanhã vou à escola.", nivel:1},
  {t:"frase-ordem", q:"Qual é a frase bem ordenada?", o:["O foguete voa até à Lua.","Foguete o voa Lua à até.","Até Lua voa o à foguete."], ok:0, dica:"Primeiro quem faz (o foguete), depois a ação (voa) e para onde (até à Lua).", nivel:2},
  {t:"frase-ordem", q:"Qual é a frase bem ordenada?", o:["Peixe o no nada aquário.","O peixe nada no aquário.","Aquário nada o peixe no."], ok:1, dica:"Primeiro quem faz (o peixe), depois a ação (nada) e onde (no aquário).", nivel:1},
  {t:"frase-ordem", q:"Qual é a frase bem ordenada?", o:["Os meninos jogam à bola no recreio.","Meninos os bola à jogam recreio no.","Recreio no jogam à bola os meninos."], ok:0, dica:"Primeiro quem faz (os meninos), depois a ação (jogam à bola) e onde (no recreio).", nivel:2},
  {t:"frase-ordem", q:"Qual é a frase bem ordenada?", o:["Livro um a lê avó.","A avó lê um livro.","Lê livro a um avó."], ok:1, dica:"Primeiro quem faz (a avó), depois a ação (lê) e o quê (um livro).", nivel:1},
  {t:"frase-ordem", q:"Qual é a frase bem ordenada?", o:["Chuva a molha flores as.","A chuva molha as flores.","Molha as a chuva flores."], ok:1, dica:"Primeiro quem faz (a chuva), depois a ação (molha) e o quê (as flores).", nivel:1},
  {t:"frase-ordem", q:"Qual é a frase bem ordenada?", o:["O comboio chega à estação.","Comboio o à chega estação.","Estação à chega comboio o."], ok:0, dica:"Primeiro quem faz (o comboio), depois a ação (chega) e onde (à estação).", nivel:2},
  {t:"frase-ordem", q:"Qual é a frase bem ordenada?", o:["Pão o mãe compra a.","A mãe compra o pão.","Compra pão a o mãe."], ok:1, dica:"Primeiro quem faz (a mãe), depois a ação (compra) e o quê (o pão).", nivel:1}
];
