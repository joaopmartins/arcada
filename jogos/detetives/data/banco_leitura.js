// Banco de textos de leitura: "Interrogar o suspeito"
// Agência de Detetives Galácticos. Português de Portugal (AO90).
// 40 textos: 12 de nível 1, 16 de nível 2, 12 de nível 3.
window.BANCO_LEITURA = [

  // ===================== NÍVEL 1 =====================
  {
    id:"L01", nivel:1, genero:"narrativo",
    titulo:"O alien que perdeu a memória",
    texto:"O alien Zuk estava sentado na cantina da agência.\nTremia e escondia-se debaixo da mesa.\n«Não me lembro de nada!», disse ele, apressado.\nO robô Bip viu uma bolacha na mão do Zuk.",
    falante:"👽",
    perguntas:[
      {tipo:"literal", q:"Onde estava o Zuk?", o:["Na nave","Na cantina","No jardim"], ok:1, dica:"O texto diz: «sentado na cantina da agência»."},
      {tipo:"inferencia", q:"Porque é que o Zuk tremia?", o:["Tinha frio","Tinha medo","Estava a dançar"], ok:1, dica:"Ele tremia e escondia-se debaixo da mesa: isso mostra medo."},
      {tipo:"vocab", q:"O que quer dizer «apressado»?", o:["Com pressa","Com fome","Com sono"], ok:0, dica:"Apressado vem da palavra pressa."}
    ],
    mentira:{q:"O Zuk disse 3 coisas. Qual é a MENTIRA?", o:["Estava na cantina","Não tinha nada na mão","Estava debaixo da mesa"], ok:1, dica:"O Bip viu uma bolacha na mão do Zuk."}
  },
  {
    id:"L02", nivel:1, genero:"informativo",
    titulo:"O Sol é uma estrela",
    texto:"O Bip consultou a enciclopédia da nave.\nO Sol é uma estrela, como as que vemos à noite.\nParece maior porque está muito mais perto de nós.\nO Sol dá luz e calor à Terra.",
    falante:"🤖",
    perguntas:[
      {tipo:"literal", q:"O que é o Sol?", o:["Um planeta","Uma estrela","Uma lua"], ok:1, dica:"O texto diz: «O Sol é uma estrela»."},
      {tipo:"inferencia", q:"Porque é que o Sol parece maior do que as outras estrelas?", o:["Porque está mais perto de nós","Porque é amarelo","Porque é de dia"], ok:0, dica:"As coisas que estão perto parecem maiores."},
      {tipo:"ficcao", q:"Este texto é...", o:["Uma história inventada","Informação real","Um convite"], ok:1, dica:"O Bip foi ver à enciclopédia: são factos verdadeiros."}
    ]
  },
  {
    id:"L03", nivel:1, genero:"poema",
    titulo:"O robô Bip",
    texto:"O Bip é um robô pequenino,\ntem luzes e um grande sino.\nQuando vê uma pista no chão,\napita e diz: «Atenção!»",
    falante:"🤖",
    perguntas:[
      {tipo:"rima", q:"Qual palavra rima com «pequenino»?", o:["sino","chão","luzes"], ok:0, dica:"Pequenino e sino acabam as duas em «ino»."},
      {tipo:"literal", q:"O que faz o Bip quando vê uma pista?", o:["Foge","Apita","Dorme"], ok:1, dica:"O poema diz: «apita e diz: Atenção!»."},
      {tipo:"vocab", q:"O que é uma «pista»?", o:["Uma comida","Um brinquedo","Uma coisa que ajuda a descobrir o mistério"], ok:2, dica:"Os detetives procuram pistas para resolver o caso."}
    ]
  },
  {
    id:"L04", nivel:1, genero:"recado",
    titulo:"Recado na porta da cantina",
    texto:"Recado da capitã Lia:\nDetetive, a minha caneta azul desapareceu.\nVi-a pela última vez na sala de mapas.\nPergunta ao Zuk. Ele estava lá.\nObrigada!",
    falante:"👩‍🚀",
    perguntas:[
      {tipo:"literal", q:"O que desapareceu?", o:["Uma caneta azul","Um mapa","Um chapéu"], ok:0, dica:"O recado diz: «a minha caneta azul desapareceu»."},
      {tipo:"personagem", q:"Quem escreveu o recado?", o:["O Bip","O Zuk","A capitã Lia"], ok:2, dica:"Começa com «Recado da capitã Lia»."},
      {tipo:"vocab", q:"O que quer dizer «desapareceu»?", o:["Ficou maior","Deixou de estar lá","Ficou azul"], ok:1, dica:"Uma coisa que desaparece já não se vê, já não está no lugar."}
    ]
  },
  {
    id:"L05", nivel:1, genero:"narrativo",
    titulo:"A bolacha desaparecida",
    texto:"A bolacha do Bip desapareceu.\nO hamster Pipo tinha migalhas no bigode.\n«Eu não comi nada!», disse o Pipo.\nO Bip olhou para as migalhas e sorriu.",
    falante:"🐹",
    perguntas:[
      {tipo:"personagem", q:"Quem tinha migalhas no bigode?", o:["O Bip","O Pipo","O Zuk"], ok:1, dica:"O texto diz: «O hamster Pipo tinha migalhas no bigode»."},
      {tipo:"inferencia", q:"Porque é que o Bip sorriu?", o:["Porque já sabia quem comeu a bolacha","Porque tinha fome","Porque estava triste"], ok:0, dica:"As migalhas no bigode são a pista: o Bip percebeu tudo."},
      {tipo:"vocab", q:"O que são «migalhas»?", o:["Botões","Pelos do bigode","Bocadinhos pequenos de comida"], ok:2, dica:"Quando comemos uma bolacha, caem migalhas."}
    ],
    mentira:{q:"O Pipo disse 3 coisas. Qual é a MENTIRA?", o:["A bolacha era do Bip","Eu não comi nada","Tenho migalhas no bigode"], ok:1, dica:"As migalhas no bigode mostram que ele comeu a bolacha."}
  },
  {
    id:"L06", nivel:1, genero:"descritivo",
    titulo:"A nave da agência",
    texto:"A nave da agência é prateada e brilhante.\nTem três janelas redondas e uma porta amarela.\nLá dentro há um sofá azul e muitos botões.\nO Bip dorme sempre ao lado do sofá.",
    falante:"🚀",
    perguntas:[
      {tipo:"literal", q:"De que cor é a porta da nave?", o:["Azul","Amarela","Prateada"], ok:1, dica:"O texto diz: «uma porta amarela»."},
      {tipo:"vocab", q:"O que quer dizer «brilhante»?", o:["Que brilha, que reflete a luz","Que está partida","Que é pesada"], ok:0, dica:"Brilhante vem de brilhar."},
      {tipo:"tema", q:"Do que fala o texto?", o:["De um alien perdido","Do pequeno-almoço do Bip","Da nave da agência"], ok:2, dica:"Todas as frases descrevem a nave."}
    ]
  },
  {
    id:"L07", nivel:1, genero:"informativo",
    titulo:"A Lua não tem luz própria",
    texto:"O Bip abriu a enciclopédia.\nA Lua não tem luz própria.\nEla parece brilhar porque reflete a luz do Sol.\nA Lua é a nossa vizinha mais próxima no espaço.",
    falante:"🤖",
    perguntas:[
      {tipo:"literal", q:"A Lua tem luz própria?", o:["Sim, muita","Não, reflete a luz do Sol","Só no inverno"], ok:1, dica:"O texto diz: «A Lua não tem luz própria»."},
      {tipo:"vocab", q:"O que quer dizer «reflete»?", o:["Esconde","Come","Devolve a luz, como um espelho"], ok:2, dica:"Um espelho reflete a luz: manda-a de volta."},
      {tipo:"ficcao", q:"Este texto é...", o:["Informação real","Uma história inventada","Um poema"], ok:0, dica:"O Bip leu na enciclopédia: são factos verdadeiros."}
    ]
  },
  {
    id:"L08", nivel:1, genero:"narrativo",
    titulo:"O gato do espaço",
    texto:"O gato Cosmo vive na nave.\nOntem, alguém deixou a porta do frigorífico aberta.\nO Cosmo tinha leite no focinho.\nO Bip disse: «Cosmo, já sei quem bebeu o leite!»",
    falante:"🐱",
    perguntas:[
      {tipo:"literal", q:"O que tinha o Cosmo no focinho?", o:["Leite","Tinta","Areia"], ok:0, dica:"O texto diz: «O Cosmo tinha leite no focinho»."},
      {tipo:"inferencia", q:"O que aconteceu ao leite?", o:["Caiu no chão","O Cosmo bebeu-o","O Bip bebeu-o"], ok:1, dica:"O leite no focinho do Cosmo mostra que foi ele."},
      {tipo:"vocab", q:"O que é o «focinho»?", o:["A cauda do gato","As patas do gato","O nariz e a boca do gato"], ok:2, dica:"O focinho é a parte da frente da cara dos animais."}
    ]
  },
  {
    id:"L09", nivel:1, genero:"dialogo",
    titulo:"Onde estavas, Zuk?",
    texto:"Bip: «Zuk, onde estavas às três horas?»\nZuk: «Estava a dormir no meu quarto.»\nBip: «Então porque tens as botas cheias de lama?»\nZuk: «Hum... fui só ao jardim um bocadinho.»",
    falante:"👽",
    perguntas:[
      {tipo:"literal", q:"O que disse o Zuk primeiro?", o:["Que estava no jardim","Que estava a dormir","Que estava a comer"], ok:1, dica:"A primeira resposta do Zuk foi: «Estava a dormir no meu quarto»."},
      {tipo:"inferencia", q:"Porque é que o Bip perguntou pelas botas?", o:["Porque a lama mostra que o Zuk saiu do quarto","Porque gosta de botas","Porque quer limpar o chão"], ok:0, dica:"Quem está a dormir no quarto não fica com lama nas botas."},
      {tipo:"vocab", q:"O que é «lama»?", o:["Água limpa","Terra molhada","Neve"], ok:1, dica:"Quando chove, a terra do jardim fica em lama."}
    ],
    mentira:{q:"O Zuk disse 3 coisas. Qual é a MENTIRA?", o:["Fui ao jardim","Estava a dormir no meu quarto","Tenho as botas com lama"], ok:1, dica:"As botas com lama mostram que ele saiu do quarto."}
  },
  {
    id:"L10", nivel:1, genero:"aviso",
    titulo:"Aviso: chão molhado",
    texto:"AVISO\nCuidado! O chão do corredor está molhado.\nAlguém entornou um balde de água às dez horas.\nNão corras. Podes escorregar.\nSe viste quem foi, avisa o detetive.",
    falante:"⚠️",
    perguntas:[
      {tipo:"literal", q:"O que aconteceu no corredor?", o:["Alguém entornou água","Alguém pintou o chão","Alguém perdeu um sapato"], ok:0, dica:"O aviso diz: «Alguém entornou um balde de água»."},
      {tipo:"inferencia", q:"Porque é que não se deve correr?", o:["Porque é tarde","Porque o chão molhado faz escorregar","Porque o Bip está a dormir"], ok:1, dica:"O aviso diz: «Não corras. Podes escorregar»."},
      {tipo:"vocab", q:"O que quer dizer «entornou»?", o:["Bebeu","Guardou","Deixou cair um líquido"], ok:2, dica:"Entornar é virar um copo ou um balde e deixar a água sair."}
    ]
  },
  {
    id:"L11", nivel:1, genero:"narrativo",
    titulo:"As pegadas verdes",
    texto:"Havia pegadas verdes no chão da nave.\nO sapo Gluglu tem os pés verdes.\n«Eu não saí da minha piscina!», disse ele.\nMas as pegadas iam da piscina até à cozinha.",
    falante:"🐸",
    perguntas:[
      {tipo:"literal", q:"De que cor eram as pegadas?", o:["Azuis","Verdes","Vermelhas"], ok:1, dica:"O texto diz: «pegadas verdes»."},
      {tipo:"inferencia", q:"Para onde foi o Gluglu?", o:["Para a cozinha","Para o quarto","Para o jardim"], ok:0, dica:"As pegadas iam da piscina até à cozinha."},
      {tipo:"vocab", q:"O que são «pegadas»?", o:["Sapatos","Pedras verdes","Marcas dos pés no chão"], ok:2, dica:"Quando pisamos com os pés molhados, deixamos pegadas."}
    ],
    mentira:{q:"O Gluglu disse 3 coisas. Qual é a MENTIRA?", o:["Tenho os pés verdes","Não saí da minha piscina","Vivo numa piscina"], ok:1, dica:"As pegadas verdes iam da piscina até à cozinha."}
  },
  {
    id:"L12", nivel:1, genero:"poema",
    titulo:"A estrela que piscava",
    texto:"Uma estrela pequenina\npiscava só para mim.\nEra amarela e muito fina\ne voou para o jardim.\nO Bip olhou com atenção:\n«É uma nave, estrela não!»",
    falante:"⭐",
    perguntas:[
      {tipo:"rima", q:"Qual palavra rima com «mim»?", o:["jardim","fina","nave"], ok:0, dica:"Mim e jardim acabam as duas em «im»."},
      {tipo:"inferencia", q:"O que era afinal a «estrela»?", o:["Uma estrela verdadeira","Uma nave","Um pássaro"], ok:1, dica:"O Bip disse: «É uma nave, estrela não!»."},
      {tipo:"vocab", q:"O que quer dizer «piscava»?", o:["Cantava","Dormia","Acendia e apagava a luz"], ok:2, dica:"Uma luz que pisca acende e apaga, acende e apaga."}
    ]
  },

  // ===================== NÍVEL 2 =====================
  {
    id:"L13", nivel:2, genero:"narrativo",
    titulo:"O capacete trocado",
    texto:"O astronauta Rui chegou à agência com um capacete demasiado grande.\n«Este capacete não é meu!», queixou-se ele.\nO Bip reparou que o capacete tinha um autocolante de foguetão.\nSó a astronauta Sara tem autocolantes de foguetões.\nA Sara estava na cantina com um capacete pequeno na cabeça e disse: «Eu nunca troco de capacete!»",
    falante:"👨‍🚀",
    perguntas:[
      {tipo:"literal", q:"O que tinha o capacete grande?", o:["Um autocolante de foguetão","Uma luz vermelha","Um buraco"], ok:0, dica:"O texto diz: «tinha um autocolante de foguetão»."},
      {tipo:"inferencia", q:"De quem era o capacete grande?", o:["Do Rui","Do Bip","Da Sara"], ok:2, dica:"Só a Sara tem autocolantes de foguetões."},
      {tipo:"vocab", q:"Neste texto, o que quer dizer «reparou»?", o:["Arranjou","Viu com atenção","Partiu"], ok:1, dica:"O Bip olhou e viu o autocolante: reparou nele."}
    ],
    mentira:{q:"A Sara disse 3 coisas. Qual é a MENTIRA?", o:["Tenho autocolantes de foguetões","Eu nunca troco de capacete","Estou na cantina"], ok:1, dica:"O capacete dela, com o autocolante, estava na cabeça do Rui."}
  },
  {
    id:"L14", nivel:2, genero:"informativo",
    titulo:"Marte, o planeta vermelho",
    texto:"O Bip consultou a enciclopédia sobre Marte.\nMarte é chamado o planeta vermelho porque o seu chão está coberto de pó vermelho, parecido com ferrugem.\nÉ um planeta muito frio e tem duas luas pequenas.\nNunca lá foi nenhuma pessoa, mas já lá andaram robôs a explorar.\nO Bip suspirou: «Um dia também quero ir!»",
    falante:"🤖",
    perguntas:[
      {tipo:"literal", q:"Porque é que Marte é chamado o planeta vermelho?", o:["Porque está muito quente","Porque o chão tem pó vermelho","Porque tem fogo"], ok:1, dica:"O texto diz: «o seu chão está coberto de pó vermelho»."},
      {tipo:"ficcao", q:"A frase «Marte tem duas luas pequenas» é...", o:["Uma história inventada","Um desejo do Bip","Informação real"], ok:2, dica:"Está na enciclopédia: é um facto."},
      {tipo:"vocab", q:"O que quer dizer «explorar»?", o:["Descobrir e conhecer um lugar novo","Dormir","Comer"], ok:0, dica:"Os robôs andaram por Marte a descobrir como ele é."}
    ]
  },
  {
    id:"L15", nivel:2, genero:"receita",
    titulo:"Sumo de cometa",
    texto:"Receita do cozinheiro Tomé: Sumo de Cometa\n1. Corta duas laranjas ao meio, com a ajuda de um adulto.\n2. Espreme o sumo para um copo.\n3. Junta um pouco de água fresca e mexe bem.\n4. Põe uma rodela de laranja em cima: é a cauda do cometa!\nAtenção, detetive: alguém bebeu o sumo do Tomé antes do almoço.",
    falante:"🧑‍🍳",
    perguntas:[
      {tipo:"ordem", q:"O que se faz primeiro?", o:["Espremer o sumo","Cortar as laranjas","Juntar água"], ok:1, dica:"O passo número 1 é cortar as laranjas."},
      {tipo:"literal", q:"O que é a «cauda do cometa» na receita?", o:["Uma rodela de laranja","Um pouco de água","Um copo"], ok:0, dica:"O passo 4 diz: «Põe uma rodela de laranja em cima: é a cauda do cometa!»."},
      {tipo:"vocab", q:"O que quer dizer «espreme»?", o:["Lava","Congela","Aperta para sair o sumo"], ok:2, dica:"Espremer uma laranja é apertá-la para o sumo sair."}
    ]
  },
  {
    id:"L16", nivel:2, genero:"narrativo",
    titulo:"O álibi do cozinheiro",
    texto:"O bolo da capitã Lia desapareceu do forno.\nO cozinheiro Tomé disse: «Eu tenho um álibi! Estive toda a manhã na horta.»\nMas o Bip encontrou o avental do Tomé na cozinha, ainda quente do forno.\nO Tomé ficou vermelho como um tomate.\n«Está bem, provei só uma fatia... ou duas.»",
    falante:"🧑‍🍳",
    perguntas:[
      {tipo:"vocab", q:"O que é um «álibi»?", o:["Uma prova de que se estava noutro lugar","Um bolo","Um avental"], ok:0, dica:"O Tomé disse que estava na horta para mostrar que não podia ter sido ele."},
      {tipo:"inferencia", q:"Porque é que o Tomé ficou vermelho?", o:["Porque estava com calor","Porque teve vergonha de ter sido apanhado","Porque comeu tomate"], ok:1, dica:"Ficamos vermelhos quando temos vergonha."},
      {tipo:"personagem", q:"De quem era o bolo?", o:["Do Tomé","Do Bip","Da capitã Lia"], ok:2, dica:"A primeira frase diz: «O bolo da capitã Lia»."}
    ],
    mentira:{q:"O Tomé disse 3 coisas. Qual é a MENTIRA?", o:["Estive toda a manhã na horta","Tenho um avental","Provei uma fatia"], ok:0, dica:"O avental dele estava na cozinha, ainda quente do forno."}
  },
  {
    id:"L17", nivel:2, genero:"convite",
    titulo:"Convite para a Festa da Lua",
    texto:"CONVITE\nQuerido detetive,\nestás convidado para a Festa da Lua Cheia!\nOnde: no terraço da agência.\nQuando: sexta-feira, às oito da noite.\nTraz uma lanterna e um chapéu engraçado.\nMissão secreta: descobrir quem escondeu o bolo da festa.\nAssinado: a capitã Lia",
    falante:"🌙",
    perguntas:[
      {tipo:"literal", q:"Onde é a festa?", o:["No jardim","No terraço da agência","Na cantina"], ok:1, dica:"O convite diz: «Onde: no terraço da agência»."},
      {tipo:"literal", q:"Quando é a festa?", o:["Sexta-feira, às oito da noite","Sábado de manhã","Domingo ao almoço"], ok:0, dica:"O convite diz: «Quando: sexta-feira, às oito da noite»."},
      {tipo:"tema", q:"Que tipo de texto é este?", o:["Uma receita","Um poema","Um convite"], ok:2, dica:"Começa com a palavra CONVITE e convida-te para uma festa."}
    ]
  },
  {
    id:"L18", nivel:2, genero:"narrativo",
    titulo:"A chave do laboratório",
    texto:"A chave do laboratório desapareceu da gaveta.\nA coruja Nina disse que esteve a dormir todo o dia, como fazem as corujas.\nMas o Bip viu uma pena castanha na gaveta vazia.\nA Nina é a única na agência com penas castanhas.\n«Só queria ver as estrelas de mais perto», confessou ela, envergonhada.",
    falante:"🦉",
    perguntas:[
      {tipo:"personagem", q:"Quem tem penas castanhas?", o:["O Bip","A Nina","A capitã"], ok:1, dica:"O texto diz: «A Nina é a única na agência com penas castanhas»."},
      {tipo:"inferencia", q:"Porque é que a Nina levou a chave?", o:["Para ver as estrelas de mais perto","Para vender a chave","Para dormir"], ok:0, dica:"Ela confessou: «Só queria ver as estrelas de mais perto»."},
      {tipo:"vocab", q:"O que quer dizer «confessou»?", o:["Cantou","Disse a verdade sobre o que fez","Fugiu"], ok:1, dica:"Confessar é admitir o que fizemos."}
    ],
    mentira:{q:"A Nina disse 3 coisas. Qual é a MENTIRA?", o:["Estive a dormir todo o dia","Tenho penas castanhas","Queria ver as estrelas"], ok:0, dica:"A pena dela estava na gaveta: ela não esteve a dormir todo o dia."}
  },
  {
    id:"L19", nivel:2, genero:"informativo",
    titulo:"O coração, um motor",
    texto:"O Bip leu na enciclopédia sobre o corpo humano.\nO coração é um músculo do tamanho do teu punho fechado.\nTrabalha como uma bomba: empurra o sangue para todo o corpo.\nBate dia e noite, mesmo quando dormes.\nSe correres, o coração bate mais depressa.",
    falante:"🤖",
    perguntas:[
      {tipo:"literal", q:"Qual é o tamanho do coração?", o:["Como o teu punho fechado","Como uma bola de futebol","Como uma ervilha"], ok:0, dica:"O texto diz: «do tamanho do teu punho fechado»."},
      {tipo:"inferencia", q:"Porque é que o texto diz que o coração é como uma bomba?", o:["Porque explode","Porque empurra o sangue","Porque faz muito barulho"], ok:1, dica:"Uma bomba empurra líquidos; o coração empurra o sangue."},
      {tipo:"ficcao", q:"Este texto é...", o:["Uma história inventada","Um convite","Informação real"], ok:2, dica:"O Bip leu na enciclopédia: são factos sobre o corpo."}
    ]
  },
  {
    id:"L20", nivel:2, genero:"dialogo",
    titulo:"O interrogatório do polvo",
    texto:"Bip: «Otto, alguém pintou a parede com tinta roxa. Foste tu?»\nOtto: «Eu? Nunca! Estive a nadar a tarde toda.»\nBip: «E porque tens três braços roxos?»\nOtto: «É... é a moda no meu planeta!»\nBip: «Otto, o pincel ainda está na tua mão.»",
    falante:"🐙",
    perguntas:[
      {tipo:"literal", q:"De que cor era a tinta?", o:["Roxa","Verde","Amarela"], ok:0, dica:"O Bip diz: «alguém pintou a parede com tinta roxa»."},
      {tipo:"inferencia", q:"Quem pintou a parede?", o:["O Bip","O Otto","Ninguém"], ok:1, dica:"O Otto tem braços roxos e o pincel na mão."},
      {tipo:"vocab", q:"O que é a «moda»?", o:["Uma comida","Um tipo de tinta","Aquilo que muita gente usa porque gosta"], ok:2, dica:"Quando uma roupa está na moda, muita gente a usa."}
    ],
    mentira:{q:"O Otto disse 3 coisas. Qual é a MENTIRA?", o:["Estive a nadar a tarde toda","Tenho três braços roxos","Venho de outro planeta"], ok:0, dica:"Quem esteve a nadar não fica com tinta nos braços e um pincel na mão."}
  },
  {
    id:"L21", nivel:2, genero:"narrativo",
    titulo:"O ladrão de meias",
    texto:"Na agência, todos os dias desaparecia uma meia.\nO cão espacial Rex jurava que estava inocente.\nO Bip seguiu um rasto de pelos até à cama do Rex.\nDebaixo da almofada havia doze meias, todas de cores diferentes.\nO Rex abanou o rabo: gostava de coisas macias para dormir.",
    falante:"🐶",
    perguntas:[
      {tipo:"literal", q:"Quantas meias havia debaixo da almofada?", o:["Dez","Doze","Duas"], ok:1, dica:"O texto diz: «havia doze meias»."},
      {tipo:"inferencia", q:"Porque é que o Rex tirava as meias?", o:["Para as vender","Para as comer","Porque gostava de coisas macias para dormir"], ok:2, dica:"A última frase explica: «gostava de coisas macias para dormir»."},
      {tipo:"vocab", q:"O que quer dizer «inocente»?", o:["Que não fez nada de mal","Que está doente","Que tem fome"], ok:0, dica:"Quem é inocente não é culpado."}
    ],
    mentira:{q:"O Rex disse 3 coisas. Qual é a MENTIRA?", o:["Sou um cão espacial","Estou inocente","Durmo numa cama com almofada"], ok:1, dica:"As doze meias estavam debaixo da almofada dele."}
  },
  {
    id:"L22", nivel:2, genero:"poema",
    titulo:"Bip, o robô detetive",
    texto:"O Bip tem uma lupa na mão\ne procura pistas pelo chão.\nSe alguém mente, ele descobre,\nseja rico ou seja pobre.\nNão há mistério que resista\nao pequeno robô detetive artista!",
    falante:"🤖",
    perguntas:[
      {tipo:"rima", q:"Qual palavra rima com «mão»?", o:["chão","lupa","pistas"], ok:0, dica:"Mão e chão acabam as duas em «ão»."},
      {tipo:"vocab", q:"O que é uma «lupa»?", o:["Um chapéu","Um vidro que faz ver as coisas maiores","Um sapato"], ok:1, dica:"Os detetives usam a lupa para ver pistas pequeninas."},
      {tipo:"tema", q:"Do que fala o poema?", o:["De um alien com fome","De uma festa","Do robô Bip a resolver mistérios"], ok:2, dica:"Todos os versos falam do Bip a procurar pistas."}
    ]
  },
  {
    id:"L23", nivel:2, genero:"informativo",
    titulo:"Os astronautas flutuam",
    texto:"O Bip procurou na enciclopédia como vivem os astronautas.\nNa estação espacial, os astronautas flutuam, porque lá quase não se sente a força que nos puxa para o chão.\nA comida vem em pacotes fechados, para não voar pela nave.\nPara dormir, entram num saco preso à parede.\nE fazem exercício todos os dias para os músculos ficarem fortes.",
    falante:"🤖",
    perguntas:[
      {tipo:"literal", q:"Como dormem os astronautas?", o:["Numa cama grande","Num saco preso à parede","No chão"], ok:1, dica:"O texto diz: «entram num saco preso à parede»."},
      {tipo:"inferencia", q:"Porque é que a comida vem em pacotes fechados?", o:["Para não voar pela nave","Porque é mais bonita","Porque é mais barata"], ok:0, dica:"Lá em cima tudo flutua, até a comida."},
      {tipo:"vocab", q:"O que quer dizer «flutuam»?", o:["Correm muito","Cantam","Ficam no ar sem cair"], ok:2, dica:"Flutuar é ficar no ar ou na água sem ir ao fundo."}
    ]
  },
  {
    id:"L24", nivel:2, genero:"narrativo",
    titulo:"A luz que se apagou",
    texto:"De repente, as luzes da agência apagaram-se.\nO alien Zuk gritou: «Não fui eu! Estava a ler no sofá!»\nO Bip acendeu a sua lanterna e viu o Zuk ao lado do quadro dos botões, longe do sofá.\nO Zuk tinha o dedo mesmo em cima do botão vermelho.\n«Só queria ver o que o botão fazia», disse ele, envergonhado.",
    falante:"👽",
    perguntas:[
      {tipo:"literal", q:"Onde estava o Zuk quando o Bip acendeu a lanterna?", o:["No sofá","Ao lado do quadro dos botões","Na cozinha"], ok:1, dica:"O texto diz: «viu o Zuk ao lado do quadro dos botões»."},
      {tipo:"inferencia", q:"Como se apagaram as luzes?", o:["Houve uma tempestade","O Bip apagou-as","O Zuk carregou no botão vermelho"], ok:2, dica:"O dedo do Zuk estava em cima do botão vermelho."},
      {tipo:"vocab", q:"O que quer dizer «envergonhado»?", o:["Com vergonha","Com fome","Com frio"], ok:0, dica:"Envergonhado vem de vergonha."}
    ],
    mentira:{q:"O Zuk disse 3 coisas. Qual é a MENTIRA?", o:["Estava a ler no sofá","Só queria ver o que o botão fazia","Não gosto do escuro"], ok:0, dica:"O Bip viu o Zuk ao lado dos botões, longe do sofá."}
  },
  {
    id:"L25", nivel:2, genero:"descritivo",
    titulo:"O suspeito de três olhos",
    texto:"O suspeito chama-se Tríbio.\nÉ um alien baixinho, com a pele azul e três olhos amarelos.\nUsa um chapéu com uma pena e umas botas enormes.\nAnda sempre com uma mala cheia de rebuçados.\nQuando fica nervoso, os três olhos piscam ao mesmo tempo.",
    falante:"👾",
    perguntas:[
      {tipo:"literal", q:"Quantos olhos tem o Tríbio?", o:["Dois","Três","Quatro"], ok:1, dica:"O texto diz: «três olhos amarelos»."},
      {tipo:"inferencia", q:"Como sabes que o Tríbio está nervoso?", o:["Os três olhos piscam ao mesmo tempo","Come rebuçados","Tira o chapéu"], ok:0, dica:"A última frase diz o que acontece quando ele fica nervoso."},
      {tipo:"vocab", q:"O que quer dizer «enormes»?", o:["Muito pequenas","Muito grandes","Muito velhas"], ok:1, dica:"Enorme é maior do que grande."}
    ]
  },
  {
    id:"L26", nivel:2, genero:"narrativo",
    titulo:"O mapa rasgado",
    texto:"O mapa das estrelas apareceu rasgado ao meio.\nA tartaruga Lenta disse que passou a tarde toda na sala de mapas, mas que não viu nada.\nO Bip ficou a pensar: como é que ela não viu nada, se esteve lá a tarde toda?\nEntão a Lenta baixou a cabeça.\n«Adormeci em cima do mapa e, quando acordei, estava rasgado. Foi sem querer.»",
    falante:"🐢",
    perguntas:[
      {tipo:"literal", q:"O que aconteceu ao mapa?", o:["Foi rasgado","Foi pintado","Desapareceu"], ok:0, dica:"A primeira frase diz: «apareceu rasgado ao meio»."},
      {tipo:"inferencia", q:"Porque é que o Bip desconfiou da Lenta?", o:["Porque ela é verde","Porque ela esteve na sala a tarde toda e disse que não viu nada","Porque ela tem casca"], ok:1, dica:"Quem está numa sala a tarde toda vê o que lá se passa."},
      {tipo:"vocab", q:"O que quer dizer «adormeci»?", o:["Comecei a correr","Comecei a chorar","Comecei a dormir"], ok:2, dica:"Adormecer é começar a dormir."}
    ],
    mentira:{q:"A Lenta disse 3 coisas. Qual é a MENTIRA?", o:["Passei a tarde na sala de mapas","Não vi nada","Adormeci em cima do mapa"], ok:1, dica:"Ela viu, sim: acordou em cima do mapa rasgado."}
  },
  {
    id:"L27", nivel:2, genero:"receita",
    titulo:"Como fazer um crachá de detetive",
    texto:"Instruções do Bip: Crachá de Detetive\n1. Recorta um círculo de cartão.\n2. Pinta-o de dourado.\n3. Escreve o teu nome no meio, com letras grandes.\n4. Pede a um adulto para colar um alfinete atrás.\n5. Prende o crachá na camisola e mostra-o a todos os suspeitos!",
    falante:"🤖",
    perguntas:[
      {tipo:"ordem", q:"O que se faz logo depois de recortar o círculo?", o:["Pintar de dourado","Escrever o nome","Colar o alfinete"], ok:0, dica:"O passo 1 é recortar e o passo 2 é pintar."},
      {tipo:"literal", q:"Quem cola o alfinete?", o:["O Bip","Um adulto","Um suspeito"], ok:1, dica:"O passo 4 diz: «Pede a um adulto para colar um alfinete»."},
      {tipo:"vocab", q:"O que quer dizer «recorta»?", o:["Cola","Dobra","Corta com a tesoura"], ok:2, dica:"Recortar é cortar com a tesoura à volta de uma forma."}
    ]
  },
  {
    id:"L28", nivel:2, genero:"narrativo",
    titulo:"O barulho na noite",
    texto:"Durante a noite, ouviu-se um barulho na despensa: «Croc, croc, croc».\nDe manhã, faltava um saco de cereais.\nO ouriço Pico disse que dormiu a noite toda e que não ouviu nada.\nMas o Bip encontrou cereais espetados nos picos do Pico.\n«Está bem, acordei com fome...», admitiu ele, a rir.",
    falante:"🦔",
    perguntas:[
      {tipo:"literal", q:"Que barulho se ouviu na despensa?", o:["Croc, croc, croc","Pum, pum, pum","Miau, miau"], ok:0, dica:"O texto diz: «Croc, croc, croc»."},
      {tipo:"inferencia", q:"Como é que o Bip descobriu o Pico?", o:["Viu-o a comer","Encontrou cereais nos picos dele","O Pico confessou logo"], ok:1, dica:"Os cereais espetados nos picos foram a pista."},
      {tipo:"vocab", q:"O que é a «despensa»?", o:["A casa de banho","O jardim","O lugar onde se guarda a comida"], ok:2, dica:"Na despensa guardam-se os cereais, as massas e as bolachas."}
    ]
  },

  // ===================== NÍVEL 3 =====================
  {
    id:"L29", nivel:3, genero:"narrativo",
    titulo:"O caso do telescópio partido",
    texto:"O telescópio da agência apareceu com a lente partida.\nO macaco Zico jurou que estava na cantina a comer bananas quando aconteceu.\nMas o Bip encontrou uma casca de banana mesmo ao lado do telescópio.\nAlém disso, o Zico tinha um pequeno arranhão na mão.\nO Bip lembrou-se de que o Zico adora trepar às coisas altas.\nO Zico respirou fundo e disse: «Estava a tentar ver a Lua mais de perto e escorreguei. Desculpem.»\nO Bip sorriu: «Dizer a verdade foi a melhor pista de todas.»",
    falante:"🐒",
    perguntas:[
      {tipo:"inferencia", q:"Porque é que a casca de banana era uma pista importante?", o:["Porque o Zico come bananas e a casca estava ao lado do telescópio, não na cantina","Porque as bananas são amarelas","Porque o Bip tinha fome"], ok:0, dica:"Se o Zico estivesse na cantina, a casca não estaria junto ao telescópio."},
      {tipo:"ordem", q:"O que aconteceu primeiro?", o:["O Zico pediu desculpa","O Zico trepou ao telescópio e escorregou","O Bip encontrou a casca de banana"], ok:1, dica:"Primeiro o telescópio partiu-se; só depois o Bip investigou e o Zico pediu desculpa."},
      {tipo:"vocab", q:"O que é um «arranhão»?", o:["Um chapéu","Uma banana","Uma pequena ferida na pele"], ok:2, dica:"Quando caímos ou escorregamos, podemos ficar com um arranhão."}
    ],
    mentira:{q:"O Zico disse 3 coisas. Qual é a MENTIRA?", o:["Estava na cantina a comer bananas","Escorreguei","Queria ver a Lua de perto"], ok:0, dica:"A casca de banana estava ao lado do telescópio e ele tinha um arranhão."}
  },
  {
    id:"L30", nivel:3, genero:"informativo",
    titulo:"Saturno tem anéis",
    texto:"O Bip abriu a enciclopédia na página de Saturno.\nSaturno é um planeta gigante, muito maior do que a Terra.\nÉ famoso pelos seus anéis, que parecem um chapéu à volta do planeta.\nVistos de longe, os anéis parecem inteiros, mas na verdade são feitos de milhões de pedaços de gelo e de rocha.\nSaturno tem mais de cem luas, muitas mais do que a Terra, que só tem uma.\nEstá tão longe do Sol que lá é sempre muito frio.\nO Bip suspirou: «Gostava de patinar nesses anéis!»",
    falante:"🤖",
    perguntas:[
      {tipo:"literal", q:"De que são feitos os anéis de Saturno?", o:["De ouro","De pedaços de gelo e de rocha","De nuvens"], ok:1, dica:"O texto diz: «feitos de milhões de pedaços de gelo e de rocha»."},
      {tipo:"inferencia", q:"Porque é que em Saturno é sempre muito frio?", o:["Porque tem muitas luas","Porque é gigante","Porque está muito longe do Sol"], ok:2, dica:"O Sol dá calor; quanto mais longe, mais frio."},
      {tipo:"ficcao", q:"A frase «Gostava de patinar nesses anéis» é...", o:["Informação real da enciclopédia","Um desejo inventado do Bip","Uma receita"], ok:1, dica:"É o Bip a sonhar, não é um facto da enciclopédia."}
    ]
  },
  {
    id:"L31", nivel:3, genero:"narrativo",
    titulo:"O caracol e as flores azuis",
    texto:"No jardim da agência, as flores azuis da capitã desapareceram uma a uma.\nO caracol Lino disse que era demasiado lento para chegar às flores.\nO Bip reparou num rasto brilhante e pegajoso que ia da casa do Lino até aos canteiros.\nMas o rasto passava ao lado das flores e ia até à horta das alfaces!\nAs alfaces estavam roídas, mas as flores azuis não.\nO Bip pensou melhor: o Lino tinha comido alfaces, não flores.\nQuem levou as flores foi a capitã, para as pôr num jarro no seu quarto!",
    falante:"🐌",
    perguntas:[
      {tipo:"inferencia", q:"Porque é que o Lino não foi o culpado das flores?", o:["Porque é azul","Porque o rasto dele ia para as alfaces, não para as flores","Porque não tem boca"], ok:1, dica:"O rasto passava ao lado das flores e as alfaces é que estavam roídas."},
      {tipo:"personagem", q:"Quem levou as flores?", o:["O Lino","O Bip","A capitã"], ok:2, dica:"A última frase diz quem as levou e porquê."},
      {tipo:"vocab", q:"O que quer dizer «pegajoso»?", o:["Que cola, que agarra","Que é frio","Que é rápido"], ok:0, dica:"O rasto dos caracóis é pegajoso: cola-se aos dedos."}
    ]
  },
  {
    id:"L32", nivel:3, genero:"narrativo",
    titulo:"O peixe que via tudo",
    texto:"O peixe Bolhas vive num aquário na entrada da agência.\nEle vê tudo o que se passa, mas ninguém lhe pergunta nada.\nOntem, a lanterna do Bip desapareceu da mesa da entrada.\nDesta vez, o Bip lembrou-se de perguntar ao Bolhas.\nO Bolhas nadou até ao vidro e apontou com a barbatana para o cesto da roupa.\nLá dentro, enrolada numa toalha, estava a lanterna.\nA capitã tinha-a apanhado sem querer, junto com a roupa para lavar.",
    falante:"🐟",
    perguntas:[
      {tipo:"personagem", q:"Quem viu onde estava a lanterna?", o:["O Bolhas","O Bip","A capitã"], ok:0, dica:"O Bolhas vê tudo o que se passa na entrada."},
      {tipo:"inferencia", q:"A lanterna foi roubada?", o:["Sim, pelo Bolhas","Sim, pela capitã","Não, foi levada sem querer com a roupa"], ok:2, dica:"A última frase diz: «apanhado sem querer, junto com a roupa para lavar»."},
      {tipo:"vocab", q:"O que é a «barbatana»?", o:["Uma toalha","A parte do peixe que ele usa para nadar","Um cesto"], ok:1, dica:"Os peixes mexem as barbatanas para nadar."}
    ]
  },
  {
    id:"L33", nivel:3, genero:"poema",
    titulo:"O cometa apressado",
    texto:"Passou um cometa apressado,\ncom a cauda toda a brilhar.\nNão parou nem deu recado,\ntinha um planeta para visitar.\n\nO Bip gritou: «Espera aí!\nÉs tu quem deixou pó por aqui?»\nMas o cometa nem parou\ne o pó no céu ficou.",
    falante:"☄️",
    perguntas:[
      {tipo:"rima", q:"Qual palavra rima com «apressado»?", o:["recado","cauda","cometa"], ok:0, dica:"Apressado e recado acabam as duas em «ado»."},
      {tipo:"inferencia", q:"Porque é que o cometa não parou?", o:["Porque estava zangado","Porque tinha pressa de visitar um planeta","Porque não gosta do Bip"], ok:1, dica:"O poema diz: «tinha um planeta para visitar»."},
      {tipo:"vocab", q:"O que é a «cauda» do cometa?", o:["A cabeça","Uma luz vermelha","A parte comprida atrás do cometa, como um rabo"], ok:2, dica:"Os animais têm cauda atrás; o cometa também tem uma cauda brilhante atrás."}
    ]
  },
  {
    id:"L34", nivel:3, genero:"narrativo",
    titulo:"A carta anónima",
    texto:"De manhã, apareceu uma carta debaixo da porta da agência.\nNão tinha nome, só dizia: «Procurem o tesouro atrás do relógio grande.»\nA letra era torta e tinha manchas de tinta verde.\nO Bip lembrou-se de que o Zuk andava a aprender a escrever e usava sempre tinta verde.\nAtrás do relógio, encontraram uma caixa com bolachas e um bilhete: «Parabéns, detetives! Obrigado por serem meus amigos.»\nAfinal, não era um mistério, era uma surpresa.\nO Zuk espreitava da porta, a rir baixinho.",
    falante:"👽",
    perguntas:[
      {tipo:"inferencia", q:"Quem escreveu a carta?", o:["A capitã","O Zuk","O Bip"], ok:1, dica:"O Zuk usava sempre tinta verde e estava a espreitar, a rir."},
      {tipo:"inferencia", q:"Qual foi a pista que levou ao autor da carta?", o:["A tinta verde e a letra torta","O relógio grande","As bolachas"], ok:0, dica:"O Zuk andava a aprender a escrever e usava tinta verde."},
      {tipo:"vocab", q:"O que quer dizer uma carta «anónima»?", o:["Muito comprida","Sem o nome de quem a escreveu","Cheia de desenhos"], ok:1, dica:"O texto diz: «Não tinha nome»."}
    ]
  },
  {
    id:"L35", nivel:3, genero:"narrativo",
    titulo:"Quem comeu o bolo de anos?",
    texto:"Era o dia de anos do Bip e a capitã fez um bolo de chocolate.\nQuando chegou a hora da festa, faltava uma fatia enorme.\nO hamster Pipo disse: «Eu estive a dormir na minha roda o dia todo!»\nMas as rodas dos hamsters são para correr, não para dormir, e a roda ainda estava a girar.\nAlém disso, o Pipo tinha as bochechas muito cheias e não conseguia falar bem.\nO Bip perguntou: «Pipo, o que tens na boca?»\nO Pipo engoliu, limpou o chocolate do bigode e disse: «Parabéns, Bip...»",
    falante:"🐹",
    perguntas:[
      {tipo:"inferencia", q:"Porque é que o Bip não acreditou no Pipo?", o:["Porque os hamsters não comem bolo","Porque a roda ainda girava e o Pipo tinha as bochechas cheias","Porque o Pipo é pequeno"], ok:1, dica:"Quem dorme não faz a roda girar nem fica com as bochechas cheias."},
      {tipo:"literal", q:"De que era o bolo?", o:["De laranja","De morango","De chocolate"], ok:2, dica:"A primeira frase diz: «um bolo de chocolate»."},
      {tipo:"vocab", q:"O que quer dizer «engoliu»?", o:["Fez a comida descer pela garganta","Cuspiu","Cantou"], ok:0, dica:"Engolir é fazer a comida passar da boca para a garganta."}
    ],
    mentira:{q:"O Pipo disse 3 coisas. Qual é a MENTIRA?", o:["Parabéns, Bip","Estive a dormir na minha roda o dia todo","Tenho a boca cheia"], ok:1, dica:"A roda ainda girava e ele tinha chocolate no bigode."}
  },
  {
    id:"L36", nivel:3, genero:"informativo",
    titulo:"A Terra gira",
    texto:"O Bip leu na enciclopédia porque é que existe o dia e a noite.\nA Terra gira sobre si própria, como um pião muito lento.\nDemora um dia inteiro, vinte e quatro horas, a dar uma volta completa.\nQuando o lado onde vivemos está virado para o Sol, é dia.\nQuando esse lado fica virado para o lado contrário, é noite.\nAo mesmo tempo, a Terra dá uma volta grande em redor do Sol, que demora um ano.\n«Então o Sol não anda à volta da Terra, somos nós que giramos!», percebeu o Bip.",
    falante:"🤖",
    perguntas:[
      {tipo:"literal", q:"Quanto tempo demora a Terra a dar uma volta sobre si própria?", o:["Um dia","Uma hora","Um ano"], ok:0, dica:"O texto diz: «Demora um dia inteiro, vinte e quatro horas»."},
      {tipo:"inferencia", q:"Porque é que fica de noite?", o:["Porque o Sol se apaga","Porque o nosso lado da Terra fica virado para o lado contrário ao Sol","Porque a Lua tapa o Sol"], ok:1, dica:"O Sol nunca se apaga; é a Terra que roda."},
      {tipo:"vocab", q:"O que é um «pião»?", o:["Um planeta","Um relógio","Um brinquedo que roda"], ok:2, dica:"O pião roda em cima da ponta, e a Terra roda parecido."}
    ]
  },
  {
    id:"L37", nivel:3, genero:"narrativo",
    titulo:"O robô que não dormia",
    texto:"O robô Zzt, o guarda da noite, disse que ninguém entrou na agência durante a noite.\nMas de manhã havia uma janela aberta e cadeiras fora do lugar.\nO Bip perguntou ao Zzt se tinha estado sempre acordado.\n«Claro! Os robôs não dormem!», respondeu o Zzt, muito ofendido.\nEntão o Bip viu que a bateria do Zzt estava a piscar a vermelho.\nQuando a bateria fica fraca, os robôs desligam-se sem dar por isso.\nO Zzt não mentiu de propósito: só não sabia que tinha «adormecido».",
    falante:"🤖",
    perguntas:[
      {tipo:"literal", q:"O que estava a piscar a vermelho?", o:["A janela","Uma cadeira","A bateria do Zzt"], ok:2, dica:"O texto diz: «a bateria do Zzt estava a piscar a vermelho»."},
      {tipo:"inferencia", q:"O Zzt mentiu de propósito?", o:["Sim, queria esconder a verdade","Não, ele não sabia que se tinha desligado","Sim, porque estava zangado"], ok:1, dica:"A última frase diz: «O Zzt não mentiu de propósito»."},
      {tipo:"vocab", q:"O que quer dizer «ofendido»?", o:["Chateado porque alguém duvidou dele","Cheio de sono","Com muita fome"], ok:0, dica:"O Zzt ficou chateado quando o Bip perguntou se ele tinha adormecido."}
    ]
  },
  {
    id:"L38", nivel:3, genero:"narrativo",
    titulo:"A pista na neve",
    texto:"A agência foi chamada ao planeta Gelinho, onde tudo é branco de neve.\nAlguém tinha levado a bandeira da estação de investigação.\nO pinguim Pedrito jurou que não saiu da sua casa de gelo o dia inteiro.\nO Bip olhou para a neve à porta da casa: havia pegadas de pinguim a ir e a voltar.\nMas as pegadas eram enormes, muito maiores do que os pés do Pedrito.\n«Isto não foi o Pedrito», concluiu o Bip.\nAtrás de um monte de neve, um pinguim gigante chamado Bruno acenava com a bandeira, a rir: «Só queria brincar!»",
    falante:"🐧",
    perguntas:[
      {tipo:"inferencia", q:"Porque é que o Bip percebeu que não foi o Pedrito?", o:["Porque ele estava a dormir","Porque as pegadas eram muito maiores do que os pés dele","Porque ele não gosta de bandeiras"], ok:1, dica:"Pés pequenos não deixam pegadas enormes."},
      {tipo:"personagem", q:"Quem tinha a bandeira?", o:["O Pedrito","O Bip","O Bruno"], ok:2, dica:"A última frase diz: «um pinguim gigante chamado Bruno acenava com a bandeira»."},
      {tipo:"vocab", q:"O que quer dizer «concluiu»?", o:["Chegou a uma resposta depois de pensar","Fugiu a correr","Comeu"], ok:0, dica:"O Bip olhou para as pistas, pensou e chegou a uma resposta."}
    ]
  },
  {
    id:"L39", nivel:3, genero:"narrativo",
    titulo:"As duas histórias do Zuk",
    texto:"O Zuk contou ao Bip o que fez de manhã.\nDisse: «Tomei o pequeno-almoço e depois fui logo para a escola de detetives.»\nMais tarde, à capitã, disse: «Fui ao jardim apanhar flores e depois à escola.»\nO Bip franziu as sobrancelhas: as duas histórias não eram iguais.\nOu ele foi logo para a escola, ou passou pelo jardim.\nNo bolso do Zuk havia pétalas amarelas.\nAfinal, o Zuk tinha ido ao jardim apanhar flores para dar à capitã, e queria que fosse surpresa.",
    falante:"👽",
    perguntas:[
      {tipo:"inferencia", q:"Porque é que o Bip desconfiou?", o:["Porque o Zuk é verde","Porque o Zuk contou duas histórias diferentes","Porque o Zuk chegou tarde"], ok:1, dica:"O texto diz: «as duas histórias não eram iguais»."},
      {tipo:"ordem", q:"Pela verdade descoberta, o que aconteceu primeiro?", o:["Foi ao jardim apanhar flores","Foi para a escola","Deu as flores à capitã"], ok:0, dica:"Ele foi ao jardim e só depois à escola. Ainda não deu as flores."},
      {tipo:"vocab", q:"O que quer dizer «franziu as sobrancelhas»?", o:["Fechou os olhos e dormiu","Sorriu muito","Fez uma cara de quem está a pensar ou a desconfiar"], ok:2, dica:"Quando desconfiamos de algo, as sobrancelhas juntam-se e a testa enruga."}
    ],
    mentira:{q:"O Zuk disse 3 coisas. Qual é a MENTIRA?", o:["Tomei o pequeno-almoço","Depois do pequeno-almoço fui logo para a escola","Fui ao jardim apanhar flores"], ok:1, dica:"As pétalas no bolso mostram que ele passou pelo jardim antes da escola."}
  },
  {
    id:"L40", nivel:3, genero:"narrativo",
    titulo:"O caso do colar de estrelas",
    texto:"O colar de estrelas da capitã desapareceu da gaveta do quarto.\nHavia três suspeitos: o papagaio Rico, o gato Cosmo e o alien Zuk.\nO Rico disse que esteve no poleiro; o Cosmo disse que dormiu ao sol; o Zuk disse que esteve na escola.\nO Bip encontrou na gaveta uma pena vermelha, e o Rico é o único com penas vermelhas.\nO Rico confessou, de cabeça baixa: «Era tão brilhante... Levei-o para o meu ninho.»\nA capitã não ficou zangada, mas pediu-lhe que, da próxima vez, perguntasse primeiro.\nO Bip escreveu no caderno: «Caso resolvido!»",
    falante:"🦜",
    perguntas:[
      {tipo:"personagem", q:"Quem levou o colar?", o:["O Cosmo","O Zuk","O Rico"], ok:2, dica:"A pena vermelha na gaveta era do Rico, e ele confessou."},
      {tipo:"inferencia", q:"Porque é que o Rico levou o colar?", o:["Para o vender","Porque achou o colar brilhante e quis levá-lo para o ninho","Para dar ao Zuk"], ok:1, dica:"Ele disse: «Era tão brilhante... Levei-o para o meu ninho»."},
      {tipo:"vocab", q:"O que é um «poleiro»?", o:["O lugar onde os pássaros pousam","Uma gaveta","Um colar"], ok:0, dica:"O papagaio fica em cima do poleiro, como num pau."}
    ],
    mentira:{q:"O Rico disse 3 coisas. Qual é a MENTIRA?", o:["Estive no poleiro","Tenho penas vermelhas","Levei o colar para o ninho"], ok:0, dica:"A pena dele estava na gaveta da capitã, não no poleiro."}
  }
];
