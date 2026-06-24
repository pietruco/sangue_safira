// clans.js — Sangue & Safira Campaign Companion
// Conteúdo baseado no material oficial de Vampiro: O Mapeamento V5
// (Guia dos Jogadores & Livro Básico)

const clans = [
  {
    id: "banu-haqim",
    nome: "Banu Haqim",
    alcunhas: ["O Clã da Caça", "Filhos de Haqim", "Mediadores", "Juízes"],
    simbolo: "⬡",
    cor: "#8B0000",
    citacao: "Nenhuma lei pode existir sem punição. Nenhuma punição pode ser aplicada sem julgamento. E nos somos os juízes.",
    resumo: "Os Juízes dos Banu Haqim estão divididos entre sua sede hereditária por Sangue vampírico e sua paixão pela justiça. Árbitros severos e ferozmente dedicados a defender um código moral, eles Abraçam mortais capazes de avaliar e lidar com ameaças, aplicar leis e tradições e punir transgressores.",
    historia: "O Sangue é uma lei em si mesmo a partir da perspectiva dos Banu Haqim, comunicando um senso de dever àqueles que o carregam, além da maldição de estarem para sempre vigiando contra a Besta. Banu Haqim de todas as culturas e tradições jurídicas em vida descobrem que seu Sangue os vincula à rigores e à honra. Eles gravitam em torno de uma sociedade ordenada — segundo seu raciocínio, os Amaldiçoados precisam de estrutura para não se perderem em seus impulsos mais baixos e os domínios se tornarem cenários infernais salpicados de sangue. Um motivo comum entre os Banu Haqim é uma linhagem tripartite composta por juízes, feiticeiros de sangue e assassinos de assassinos. As linhagens mais renomadas prometeram lealdade à Camarilla, embora Juízes pragmáticos favoreçam qualquer instituição que melhor sirva à justiça em um determinado domínio.",
    disciplinas: [
      {
        nome: "Feitiçaria de Sangue",
        descricao: "Vários métodos e filosofias Haqimitas a respeito da Feitiçaria de Sangue infletem as aplicações práticas da Disciplina, desde fornecer aos seus praticantes habilidades assassinas até aspectos rituais mais versáteis, extraindo segredos de seu próprio Sangue e do de outros."
      },
      {
        nome: "Celeridade",
        descricao: "Os Filhos de Haqim usam Celeridade com efeitos aterrorizantes. Muitos são habilidosos em seu uso antes de todas as outras Disciplinas, para confiar na velocidade do julgamento antes que a dúvida possa retardar uma lâmina na garganta."
      },
      {
        nome: "Ofuscação",
        descricao: "Os Banu Haqim perseguem suas presas sem serem vistos, seja como um meio de se alimentar discretamente ou de desferir a morte final a um alvo sem os riscos desnecessários de um confronto direto. Alguns empregam esta Disciplina para observar um alvo cometendo um ato de transgressão antes de proferir o julgamento."
      }
    ],
    perdicao: "Os Banu Haqim são atraídos a se alimentar daqueles que merecem punição — especialmente do Sangue de vampiros, a própria essência da transgressão. Quando um dos Juízes prova o Sangue de outro Cainita, ele acha muito difícil parar. Saciar pelo menos um nível de Fome com vitae vampírica provoca um teste de frenesi de fome com Dificuldade 2 + Severidade da Perdição. Se o teste falhar, eles tentam se fartar com Sangue de vampiro, às vezes até realizarem diablerie contra sua vítima Membro.",
    fome: {
      nome: "Julgamento",
      descricao: "O vampiro é compelido a punir qualquer pessoa vista transgredindo seu código pessoal, tomando seu sangue como justa vingança pelo crime. Por uma cena, o vampiro deve saciar pelo menos uma Fome de qualquer pessoa, amigo ou inimigo, que aja contra uma Convicção dele. Falhar em fazer isso resulta em uma penalidade de três dados para todas as jogadas até que a Compulsão seja satisfeita ou a cena termine."
    }
  },

  {
    id: "brujah",
    nome: "Brujah",
    alcunhas: ["O Clã Erudito", "Chusma", "Punks", "Hipsters", "Prometeanos", "Rebeldes", "Reis-Filósofos", "Helenos"],
    simbolo: "⊘",
    cor: "#CC2200",
    citacao: "Toda ordem é uma corrente, as vezes ela vem decorada e cheia de plumas, mas sempre preferimos as cicatrizes da liberdade",
    resumo: "O sonho do clã erudito é um mundo onde toda injustiça tenha sido eliminada. Eles dizem que é por amor aos mortais que os lideram contra seus senhores. Na verdade, eles podem simplesmente enfurecer-se contra um Deus distante ou inexistente que nunca poderão combater, contra uma maldição que nunca poderão encerrar. O deles é um sonho que envenena tudo o que toca.",
    historia: "O Clã Brujah sempre Abraçou a partir das fileiras daqueles que simpatizam com a contracultura e a revolução. Eles buscam aliados que questionam ideias normativas e, reconhecendo o fogo dos oprimidos, gravitam em direção aos desfavorecidos. A percepção comum coloca punks, membros de gangues, imigrantes desajustados e manifestantes entre os Brujah. Embora o clã inclua um número substancial de marginalizados vocais, seu desejo de rebelião vai tão fundo quanto o fraudador que rouba a própria empresa, ou o advogado que representa os pobres pro bono. Os Brujah filosóficos, conhecidos como Helenos, acreditam que o melhor método para desmantelar o sistema é compreender os sistemas sociais e culturais que permitem que ele exista em primeiro lugar.",
    disciplinas: [
      {
        nome: "Celeridade",
        descricao: "Os Brujah usam Celeridade para golpear rápido e escapar de revoltas que eles mesmos iniciaram. Eles caçam com ela para arrebatar recipientes nas ruas, alimentando-se deles de forma selvagem, ou para descartar rapidamente um mortal antes de desaparecer na noite."
      },
      {
        nome: "Potência",
        descricao: "Os Brujah usam Potência como uma arma devastadora, encurtando qualquer confronto com uma finalidade destrutiva. Embora o clã pregue uma conexão com a humanidade, seus membros frequentemente tomam o que querem pela força."
      },
      {
        nome: "Presença",
        descricao: "Os Brujah usam Presença para conquistar os corações da multidão, virar uma turba ameaçadora contra si mesma ou enviar um oponente perigoso fugindo para a noite. Os intelectuais Brujah preferem se alimentar com Presença para convencer os recipientes a cederem seu sangue voluntariamente."
      }
    ],
    perdicao: "O Sangue dos Brujah fervilha com uma raiva mal contida, explodindo à menor provocação. Subtraia dados iguais à Severidade da Perdição do Brujah de qualquer jogada para resistir ao frenesi de fúria. Isso não pode reduzir a parada abaixo de um dado.",
    fome: {
      nome: "Rebelião",
      descricao: "Quando um Brujah sofre uma Compulsão, ele deve se manifestar contra ou resistir ativamente à figura de autoridade mais proeminente na cena. Qualquer ação que não resista, sabote ou desafie de alguma forma a autoridade custa ao Brujah uma penalidade de dois dados até que a Compulsão seja satisfeita."
    }
  },

  {
    id: "gangrel",
    nome: "Gangrel",
    alcunhas: ["O Clã da Besta", "Animais", "Ferais", "Selvagens", "Bárbaros", "Exilados", "Lobos", "Vira-latas"],
    simbolo: "🐺",
    cor: "#5C4033",
    citacao: "Cidades são prisões de pedra, se eu tenho uma eternidade pela frente prefiro ser livre.",
    resumo: "Uma fome mais antiga que a humanidade arde dentro dos lobos. Cruzando fronteiras entre espécies, nações e domínios com a facilidade de predadores perfeitos, eles pertencem à vida selvagem e a vida selvagem pertence a eles. Trocando histórias de guerra e as histórias secretas de sua espécie ao redor de fogueiras acesas com os ossos de seus opressores, eles viraram as costas para a Camarilla.",
    historia: "O Clã Gangrel é composto por exilados, andarilhos, trapaceiros e caçadores. Eles fazem seus refúgios nas partes mais pobres da cidade e não sentem vergonha disso. Eles reivindicam poucos domínios como seus, mas não se curvam a nenhum príncipe. Os Gangrel Abraçam a partir das fileiras de sobreviventes e lutadores: líderes de detentos e gangues, exploradores e qualquer gado que veja o mundo como algo a ser atravessado, em vez de algo do qual se esconder. Eles não se importam com aparências ou títulos, mas sim com realizações e reputação. Qualquer mortal capaz de projetar sua vontade sobre os outros, liderar um grupo do desastre ao sucesso ou lutar contra probabilidades impossíveis atrai a atenção do clã.",
    disciplinas: [
      {
        nome: "Animalismo",
        descricao: "Um Gangrel pode usar Animalism para adotar um companheiro animal, às vezes chamado de famulato. O companheiro animal pode ser usado para caçar, espiar e atacar. Alguns Gangrel atiçam animais de estimação contra seus donos, perseguem mendigos com matilhas de cães ou atraem vira-latas para si para uma alimentação rápida."
      },
      {
        nome: "Fortitude",
        descricao: "Como guarda-costas e soldados de longa data para os outros clãs, os Gangrel se beneficiaram enormemente da Fortitude. A Disciplina pode dar-lhes uma sensação de destemor, pois permite-lhes caçar em terrenos difíceis e receber balas e lâminas de faca sem preocupação."
      },
      {
        nome: "Proteanismo",
        descricao: "Os Gangrel são conhecidos por seu domínio de Metamorfose, já que poucos outros clãs possuem seus dons. Cruzando a linha entre o vampirismo e a mudança de forma, a Disciplina permite que um Gangrel assuma as propriedades físicas de outra criatura ou, de outras maneiras, altere sua forma física."
      }
    ],
    perdicao: "Os Gangrel se relacionam com sua Besta da mesma forma que os outros Membros se relacionam com os Gangrel: uma parceria suspeita. No frenesi, os Gangrel ganham uma ou mais características animais: um traço físico, um cheiro ou um tique comportamental. Essas características duram mais uma noite depois disso. Cada característica reduz um Atributo em 1 ponto. O número de características que um Gangrel manifesta é igual à sua Severidade da Perdição.",
    fome: {
      nome: "A Natureza Selvagem",
      descricao: "Quando um Gangrel sofre uma Compulsão, o chamado da natureza se torna avassalador. O vampiro deve se isolar para ficar sozinho ou na natureza e só pode caçar usando o instinto animal predatório. Quaisquer ações sociais que não sejam de natureza predatória custam uma penalidade de dois dados até que a Compulsão seja satisfeita."
    }
  },

  {
    id: "hecata",
    nome: "Hecata",
    alcunhas: ["Necromantes", "Membros-Demônios", "Lazarenos", "O Clã da Morte"],
    simbolo: "☠",
    cor: "#2E4A3E",
    citacao: "A morte não é o fim, é apenas a próxima pergunta a ser respondida.",
    resumo: "Uma coleção heterogênea de linhagens vampíricas necromânticas, o clã Hecata está unido na busca de um único assunto: a Morte. Eles são estudantes do pós-vida e ressurreicionistas dos mortos — ou pior. Vendendo seus serviços a quem pagar mais, há poucos que conseguem se esconder da vigilância daqueles que podem invocar e comandar os próprios espíritos dos falecidos.",
    historia: "Os Hecata são anômalos entre os clãs de Membros, no sentido de que são praticamente uma seita em si mesmos, um clã que consiste em linhagens estranhas e até mesmo em alguns laços familiares genuínos, todos construídos sobre a reverência e a subjugação ocasional da própria morte. Compreendendo desde famílias criminosas do Velho Mundo que adoram ancestrais até sacerdotes que empunham efígies e monstros degenerados comedores de carne, o clã Hecata tem em comum uma fascinação doentia pela matéria mortal entre suas linhagens membras. Um ritual mórbido uniu recentemente essas consanguinidades díspares em um clã 'unificado' propriamente dito. Os Hecata subscrevem uma filosofia cíclica em relação ao Abraço, que simbolizam pelas três faces da Morte, Decomposição e Renascimento.",
    disciplinas: [
      {
        nome: "Auspício",
        descricao: "Os Hecata frequentemente consideram o Auspício como a percepção do destino. Ler uma aura torna-se um exercício para discernir como as atitudes do indivíduo o guiam em direção ao seu destino. É também uma Disciplina que exige um certo grau de sutileza, desde sentir fantasmas invisíveis até ler a história espiritual de um objecto."
      },
      {
        nome: "Fortitude",
        descricao: "Quem melhor para exaltar a durabilidade física da forma morta-viva? A Fortitude pode se manifestar desde a futilidade de retalhar um cadáver já morto até um grande domínio sobre — e evasão de — as próprias leis da Morte."
      },
      {
        nome: "Oblívio",
        descricao: "O Oblívio está entre as Disciplinas mais misteriosas, pois pode alcançar além do véu do pós-vida. Através de seu uso, os Hecata podem interrogar um fantasma ou instigá-lo a atormentar um rival. Eles podem apodrecer a carne de um mortal com um toque ou conduzir um gado intrometido a uma recompensa sombria."
      }
    ],
    perdicao: "Os Hecata inflictam um Beijo notoriamente doloroso. As presas os Lazarenos trazem não o êxtase, mas a agonia. Vítimas pegas de surpresa resistirão violentamente, a menos que sejam contidas, e poucas pessoas se submetem voluntariamente. Ao beber diretamente de uma vítima, os Hecata só podem dar goles dolorosos, resultando em perda de sangue. Mesmo aqueles coagidos ou dispostos devem ser bem-sucedidos em um teste de Vigor + Determinação contra Dificuldade 2 + Severidade da Perdição para não se debaterem contra a dor.",
    fome: {
      nome: "Morbidade",
      descricao: "O vampiro experimenta uma necessidade imediata de mover algo da vida para a morte ou vice-versa. Qualquer ação que não seja dedicada a encerrar ou ressuscitar algo é realizada com uma penalidade de dois dados. Este alvo não precisa ser uma pessoa, ou mesmo um ser vivo, mas pode incluir objetos ou até coisas mais abstratas, como uma ideia ou uma conversa. A Compulsão dura até que o vampiro consiga matar ou devolver algo à vida."
    }
  },

  {
    id: "lasombra",
    nome: "Lasombra",
    alcunhas: ["O Clã da Noite", "Magistrados", "Guardiões", "Sombras"],
    simbolo: "♛",
    cor: "#1A0A2E",
    citacao: "Com certeza, serei sempre seu aliado, mas devo me resignar às sombras, caso contrário eles saberão a verdadeira ameaça que nosso poder combinado apresenta.",
    resumo: "Criaturas sutilmente em desacordo com a realidade mundana, espera-se que os vampiros Lasombra triunfem a qualquer custo. A crueldade é um traço procurado em suas proles, fazendo com que sua reputação de intrusos traidores seja bem merecida. A maioria não busca atenção, preferindo agir como manipuladores, poderes por trás do proverbial trono. Para uma Sombra, os fins justificam quaisquer meios.",
    historia: "A partir das sombras, os Guardiões orquestram seus esquemas, puxando as cordas de Membros 'inferiores', manipulando-os como se fossem marionetes em fios, encenando o jogo de sombras da Luta Eterna. Os Lasombra estimam grandemente as realizações, especialmente em assuntos pelos quais possam ganhar poder sobre os outros. Eles não gostam de riscos, e os Guardiões ganharam, com inteira justiça, uma reputação de planejamento astuto e cálculo frio. Historicamente, os Lasombra influenciaram todas as seitas: rebeldes precoces na Revolta Anarquista, senhores da guerra do Sabá nas Américas e recrutas formidáveis na Camarilla durante esta era moderna da Segunda Inquisição.",
    disciplinas: [
      {
        nome: "Dominação",
        descricao: "Os Lasombra confiam em sua habilidade de esmagar vontades e comandar obediência sem os afetos gentis que alguns dos Amaldiçoados fingem possuir. A maneira cruel como exercem esta Disciplina nas vítimas frequentemente rende a antipatia de outros Membros, mas poucos negam a habilidade dos Magistrados em fazer lavagem cerebral e subjugar suas presas."
      },
      {
        nome: "Oblívio",
        descricao: "A habilidade de manipular sombras permite que os Lasombra observem, golpeiem e escapem sem nunca ter que confrontar sua vítima, ou empregar entidades mais sombrias que a morte para o mesmo propósito. Muitos afirmam que há um custo para a alma de alguém ao usar o Alheamento, ou que o excesso de indulgência nele é a razão pela qual os Lasombra aparecem de forma estranha em reflexos e formatos de mídia modernos."
      },
      {
        nome: "Potência",
        descricao: "Quando forçados a recorrer à violência física, os Magistrados podem preferir estourar o crânio de um inimigo com as próprias mãos, enfiar uma bota no estômago de um punk ou arrancar uma porta das dobradiças para impor respeito e medo. Poucos Lasombra usam Potência para se alimentar, considerando um exercício vulgar agarrar e segurar manualmente um recipiente."
      }
    ],
    perdicao: "Qualquer pessoa que veja o reflexo ou a gravação de um vampiro Lasombra pode reconhecê-lo instantaneamente pelo que é, desde que saiba o que está procurando. Além disso, o uso de tecnologia moderna de comunicação, incluindo fazer uma simples chamada telefônica, requer um teste de Tecnologia com Dificuldade 2 + Severidade da Perdição, já que os microfones apresentam problemas semelhantes com a voz de um Lasombra assim como as câmeras com sua imagem. Evitar sistemas eletrônicos de detecção de vampiros também é feito com uma penalidade igual à Severidade da Perdição.",
    fome: {
      nome: "Crueldade",
      descricao: "Os Lasombra desprezam o fracasso, associando-o a um planejamento inadequado ou a uma fraqueza pessoal. Quando afetados por esta compulsão, seu Sangue os impele a qualquer ato concebível para alcançar seus objetivos. A próxima vez que o vampiro falhar em qualquer ação, ele receberá uma penalidade de dois dados em toda e qualquer jogada até que uma tentativa futura da mesma ação seja bem-sucedida ou a cena termine."
    }
  },

  {
    id: "malkavian",
    nome: "Malkavian",
    alcunhas: ["O Clã da Lua", "Lunáticos", "Loucos", "Bobos", "Oráculos", "Dervixes", "Visionários", "Filhos de Malkav"],
    simbolo: "☽",
    cor: "#4A0E6E",
    citacao: "Não somos palhaços. Todos vocês olham para as sombras e fingem entender o mundo. Nós olhamos para o fogo que produz a sombra e abraçamos o fato de não entendermos.",
    resumo: "Os psicólogos diagnosticariam os filhos de Malkav com esquizofrenia, depressão, transtorno obsessivo-compulsivo ou transtorno de estresse pós-traumático. Na realidade, eles têm todas essas coisas e nenhuma. Como os 'loucos sábios' da poesia, sua perturbação decorre de ver demais do mundo de uma só vez, de compreender profundamente e sentir emoções fortes demais para suportar.",
    historia: "Há muito tempo existe o equívoco de que poucas famílias de Membros são tão díspares quanto o Clã da Lua. Outros clãs os veem e raciocinam: 'cada um deles é louco, então por que suas respectivas origens deveriam importar?' Para os Malkavianos, as origens importam muito. Um dos dons que os Malkavianos procuram em um mortal é a 'segunda vista' — a habilidade de interpretar sonhos, perceber espíritos ou prever eventos futuros infalivelmente. Eles também são fascinados pelos 'quebrados' — indivíduos que foram mudados por experiências traumáticas. Alguns Malkavianos afirmam que existe um fator comum em sua loucura; que estão todos psiquicamente ligados através de um comprimento de onda comunitário conhecido como a teia ou a rede da loucura.",
    disciplinas: [
      {
        nome: "Auspício",
        descricao: "Os Malkavianos usam Auspício para aguçar seus sentidos, fortalecendo sua visão ou audição a um nível sobrenatural, ou para determinar os medos, ilusões e fraquezas mentais de um mortal, para que possam jogar com eles horrivelmente enquanto se preparam para se alimentar."
      },
      {
        nome: "Dominação",
        descricao: "Alguns Malkavianos usam Dominação para afastar todas as distrações da mente de uma vítima, cativando-a completamente; outros usam a Disciplina para extrair ou infligir psicoses, através da infame variante conhecida como Demência."
      },
      {
        nome: "Ofuscação",
        descricao: "Os Malkavianos não anunciam o uso de Ofuscação, permitindo convenientemente que muitos Membros se esqueçam de que eles têm acesso a esta Disciplina. Alguns Malkavianos se escondem nas casas, alas e lares de idosos do gado, observando os rostos adormecidos antes de se alimentarem discretamente."
      }
    ],
    perdicao: "Afligidos por sua linhagem, todos os Malkavianos são amaldiçoados com pelo menos um tipo de perturbação mental. Quando o Malkaviano sofre uma Falha Bestial ou uma Compulsão, sua maldição vem à tona. Sofra uma penalidade igual à Severidade da Perdição do personagem em uma categoria de paradas de dados (Físico, Social ou Mental) durante toda a cena.",
    fome: {
      nome: "Delírio",
      descricao: "A loucura do vampiro borbulha irreprimivelmente para a superfície. O vampiro deve agir de acordo com uma de suas Convicções com certeza absoluta e imediata, independentemente da situação. Todas as ações não relacionadas diretamente ao cumprimento desta Convicção custam uma penalidade de dois dados até que a Compulsão termine."
    }
  },

  {
    id: "ministry",
    nome: "O Ministério",
    alcunhas: ["Serpentes", "O Clã da Fé", "O Clã das Mentiras", "Setitas"],
    simbolo: "🐍",
    cor: "#1C3A1C",
    citacao: "Você me chama de mentiroso, de tentador e de degenerado, mas todos os seus supostos insultos são simplesmente o peso das correntes com as quais você se acorrenta.",
    resumo: "O Ministério sempre tem algo a oferecer. Este clã, frequentemente semelhante a um culto, recruta aqueles capazes de empregar a tentação como uma arma. Eles Abraçam aqueles com a vontade e os meios para influenciar, enredar e, por fim, libertar seus alvos daquilo que procuram: os bens da vítima, sua lealdade ou até mesmo sua fé. Para as Serpentes, tudo tem um preço.",
    historia: "Parte clã, parte culto, o Ministério ocupa um nicho estranho na sociedade dos Membros. Em suas próprias mentes, o Ministério serve ao propósito de libertar os indivíduos de aceitarem acriticamente o fardo do 'pecado', seja na forma de doutrina religiosa, estigma social ou mesmo as Tradições dos Amaldiçoados. Para a mente do Ministério, questionar é em si um sacramento. Sem o pecado, que valor tem a retidão? O caminho do Ministério é desafiar a moralidade predominante, perguntar 'Por que isso é proibido?' Talvez a maior facção do clã tenha se apropriado do deus egípcio Set, com quem os anciões do clã afirmam ter uma conexão ou mesmo consanguinidade — daí o seu apelido de Setitas.",
    disciplinas: [
      {
        nome: "Ofuscação",
        descricao: "Os Membros do Ministério usam esta Disciplina para descobrir as crenças, perspectivas e vícios de vampiros e mortais, para facilitar sua exploração e libertação. Ministros poderosos também costumam usar os rostos de figuras confiáveis e amigos para melhor atrair as presas para seus santuários e templos."
      },
      {
        nome: "Presença",
        descricao: "Para muitos Ministros nas noites modernas, esta é a sua habilidade favorita, oferecendo um poder com uma sutileza que satisfaz até mesmo os autoproclamados executores da Máscara. As Serpentes usam Presença com grande destreza, empunhando gestos majestosos e discursos ressonantes que tocam os corações de uma congregação."
      },
      {
        nome: "Proteanismo",
        descricao: "Os Ministros usam esta habilidade para impressionar os observadores, mas também se utilizam de suas muitas maneiras inovadoras de escapar do perigo. Eles costumam adotar a forma de uma cobra em vez de a de um lobo, mas podem se fundir com a terra para evitar o sol ao lado de qualquer Gangrel."
      }
    ],
    perdicao: "O Sangue de um Ministro abomina a luz. Quando expostos à iluminação direta, seja natural ou artificial, os membros do clã recuam. Os Ministros recebem uma penalidade igual à sua Severidade da Perdição em todas as paradas de dados quando submetidos a uma luz brilhante direcionada diretamente para eles. Além disso, adicione sua Severidade da Perdição ao dano Agravado recebido pela luz solar.",
    fome: {
      nome: "Transgression",
      descricao: "A sabedoria predominante do Clã da Fé é que a mente e o espírito de todos estão limitados por correntes invisíveis criadas por eles mesmos. Com seu Sangue irritado por essas amarras, o Ministro sofre uma necessidade ardente de quebrá-las. O vampiro recebe uma penalidade de dos dados em todas as paradas de dados que não se refiram a induzir alguém (incluindo a si mesmo) a quebrar um Princípio da Crônica ou Convicção pessoal, causando pelo menos uma Mácula e encerrando esta Compulsão."
    }
  },

  {
    id: "nosferatu",
    nome: "Nosferatu",
    alcunhas: ["Horrores", "O Clã dos Escondidos", "Ratos de Esgoto", "Leprosos", "Colmeias", "Artistas de Circo", "Cascas", "Kapos", "Mendigos", "Orloks"],
    simbolo: "🐀",
    cor: "#2B2B2B",
    citacao: "Podemos não ser bonitos ou capazes de nos misturar com o gado. Não podemos fingir ser nada além de monstros degenerados. Mas quer saber de uma coisa? Isso nos dá perspectivas que faltam a cada um daqueles outros bastardos iludidos. Nos enxergamos os segredos, pois eles residem nas mais profundas e piores das sombras.",
    resumo: "Para os Nosferatu, o Abraço é uma jornada através da abjeção, à medida que o Sangue do horror deforma gradualmente os tecidos em luta do corpo humano em abominações grotescas. Semanas de dor resultam em deformidades semelhantes a terríveis defeitos congênitos, crescimentos cancerígenos, lesões incapacitantes e feridas semelhantes às de leprosos. Mas talvez a dor e a humilhação ensinem a compaixão.",
    historia: "Os Nosferatu são os mais humanos dos Membros, exibindo sua maldição por fora e não por dentro. Para se misturarem, alguns recorrem ao Sangue para usar os rostos emprestados de suas vítimas ou desaparecer de vista, enquanto outros confiam em próteses e maquiagem pesada. Quando a Segunda Inquisição encontrou a SchreckNET, muitos Membros propuseram secretamente um brinde ao colapso do clã. Mas aqueles que resistiram e prosperaram dominaram as artes do arquivamento seguro, fisicamente e online. Eles reforçaram seus laços existentes com contatos e clientes, e recuperaram firmemente a confiança dos Membros que valorizam um centro de informações centralizado para pesquisas e troca de mensagens secretas.",
    disciplinas: [
      {
        nome: "Animalismo",
        descricao: "Os Nosferatu valorizam a Disciplina de Animalismo por sua utilidade em aumentar sua rede de espionagem, obter familiares, permitir a entrega de mensagens e conceder a habilidade de repentinamente subjugar um oponente com uma horda de ratos, insetos ou pássaros."
      },
      {
        nome: "Ofuscação",
        descricao: "Os Nosferatu têm opiniões divididas sobre a Ofuscação, já que a Disciplina permite que eles se misturem com os outros, mas também mascara aquilo que define seu clã. Alguns Nosferatu orgulham-se da sua monstruosidade indisfarçável, enquanto outros fazem todos os esforços para a ocultar."
      },
      {
        nome: "Potência",
        descricao: "Os Nosferatu usam Potência para neutralizar rapidamente os inimigos. Os Nosferatu compreendem o mérito de golpear e correr, incapacitando um recipiente antes de se alimentar e fugir, ou quebrando a cabeça do Barão Anarquista antes de saltar para longe do seu esconderijo."
      }
    ],
    perdicao: "Feios e vis, todos os Nosferatu contam como tendo a Defeito Repulsivo (-2) e nunca podem aumentar sua classificação na Qualidade Aparência. Além disso, qualquer tentativa de se disfarçarem como humanos incorre em uma penalidade em sua parada de dados igual à Severidade da Perdição de seu personagem (isso inclui os poderes de Ofuscação Máscara de Mil Faces e Aparência do Impostor).",
    fome: {
      nome: "Criptofilia",
      descricao: "O vampiro torna-se obcecado em descobrir e possuir segredos. O vampiro deve passar a cena tentando descobrir ou roubar pelo menos um segredo de alguém na cena. Qualquer ação que não seja tomada em direção a esse objetivo custa uma penalidade de dois dados. A Compulsão termina quando o vampiro obtém um segredo ou a cena termina."
    }
  },

  {
    id: "ravnos",
    nome: "Ravnos",
    alcunhas: ["Trapaceiros", "Corvos", "Demolidores", "Os Assombrados"],
    simbolo: "🦅",
    cor: "#3D1A00",
    citacao: "A ilusão perfeita é aquela que o alvo cria para ele mesmo.",
    resumo: "Mestres do drecionamento incorreto, os Ravnos preferem não lutar ou sangrar por algo que podem obter através de meios mais sutis. Eles podem encantar e desaparecer no espaço de um suspiro mortal, e aqueles outrora enganados rapidamente aprendem a questionar seus próprios sentidos quando na companhia de Corvos. Sempre em movimento, os Ravnos nunca podem descansar no mesmo lugar por muito tempo, sob o risco de sua maldição incendiá-los enquanto dormem.",
    historia: "Um clã quase aniquilado na salva de abertura da Guerra da Gehena, cujas brasas agora brilham mais a cada noite que passa. Outros os conhecem como portadores de mensagens, andarilhos e manipuladores mentais. Seus métodos não são a força bruta, a adoração de multidões ou conspirações meticulosas que duram séculos, mas sim a astúcia e a elegância, o charme artístico e a ilusão direta. Embora os hábitos nômades (e até mesmo exigências) do clã tornem difícil qualquer tipo de organização adequada, algo como um renascimento Ravnos está se formando. Um conjunto complexo de sinais e marcas, conhecido e ensinado apenas aos membros do clã, ajuda-os a encontrar e identificar uns aos outros.",
    disciplinas: [
      {
        nome: "Animalismo",
        descricao: "Os Ravnos mantêm uma relação quase afável com os animais, especialmente corvos, raposas, coiotes, aranhas e macacos. A critério do Narrador, reduza em um a Dificuldade para testes de Animalismo que envolvam esses animais e aumente-a para todos os outros tipos de animais. Empregando esses familiares como espiões, distrações e companheiros ocasionais, um Ravnos nunca está verdadeiramente sozinho na estrada."
      },
      {
        nome: "Ofuscação",
        descricao: "Embora muitos Trapaceiros sejam capazes de desaparecer de vista e permanecer ocultos, o clã também é adepto de estender o uso da Ofuscação para criar alucinações elaboradas e sustentadas, usando efetivamente sua Presença para impulsionar as propriedades da Disciplina para abranger mais do que sua própria imagem."
      },
      {
        nome: "Presença",
        descricao: "O método padrão quando o charme natural e a persuasão não são suficientes. Poucos Demolidores estão sem pelo menos alguma medida desta Disciplina. Eles fazem uso frequente da Presença para conseguir vítimas em um piscar de olhos, e a Disciplina também tem um papel a desempenhar em poderes alucinatórios."
      }
    ],
    perdicao: "Os Ravnos estão condenados. O fogo do sol que incinerou seu fundador rage através do Sangue do clã, irrompendo de sua própria carne se eles se estabelecerem por muito tempo. Se eles dormirem no mesmo lugar mais de uma vez em sete noites, role um número de dados igual à sua Severidade da Perdição. Eles recebem dano Agravado igual ao número de 10s (resultados críticos) rolados à medida que queimam por dentro. Dois locais de descanso precisam estar a pelo menos um quilômetro e meio de distância para evitar ativar a Perdição.",
    fome: {
      nome: "Desafiar o Destino",
      descricao: "O vampiro é impelido por seu Sangue a cortejar o perigo. A próxima vez que o vampiro for confrontado com um problema para resolver, qualquer tentativa de solução que não seja a mais ousada ou perigosa incorrerá em uma penalidade de dois dados. Tentativas adequadamente chamativas e arriscadas podem até render dados de bônus para esta ocasião. A Compulsão persiste até que o problema seja resolvido ou novas tentativas se tornem impossíveis."
    }
  },

  {
    id: "salubri",
    nome: "Salubri",
    alcunhas: ["Ciclopes", "Ladrões de Almas", "Dajjals", "Prole de Saulot"],
    simbolo: "👁",
    cor: "#1A3A5C",
    citacao: "Fazer o seu refúgio no vale das dores e trilhar para sempre um caminho de espinhos.",
    resumo: "Com a maior parte de sua espécie perdida para usurpadores mortos-vivos, o altamente desejável Sangue dos caçados Salubri é um prêmio para outros vampiros. Isso, e sua relutância em Abraçar, os torna raros nas noites modernas. Eles frequentemente recrutam aqueles que estão à beira da morte, acreditando que sua maldição pode fornecer aos dignos uma segunda chance, e contam com alguns dos vampiros mais humanos entre suas fileiras.",
    historia: "Os Salubri indiscutivelmente já nem sequer são um clã, tendo seu progenitor, segundo se conta, sucumbido às presas de um usurpador mais ambicioso que construiu seu próprio Clã Tremere com aquele Sangue roubado. O deles é um legado de tragédia, mas também uma lição amarga na Luta Eterna que se estende por milênios. Cada Salubri carrega um terceiro olho no centro da testa, o indicador de sua linhagem. De acordo com seus costumes, os senhores Salubri Abraçam apenas quando alcançam a Golconda, transmitindo assim sua maldição novamente a cada vez. As crias Salubri são poucas — sussurra-se que apenas sete existem ao mesmo tempo.",
    disciplinas: [
      {
        nome: "Auspício",
        descricao: "Grande parte da célebre sabedoria dos Salubri vem de serem capazes de perceber além do alcance de Membros menos observadores. Consideradas por uma mente filosófica, as verdades ocultas do mundo se revelam."
      },
      {
        nome: "Dominação",
        descricao: "Os Salubri usam Dominação para livrar os outros dos horrores de ser um vampiro ou de testemunhar as atrocidades que os Membros podem cometer. Seja apagando memórias perturbadoras ou fortalecendo os indivíduos contra as consequências indesejadas de suas ações, os Salubri desenvolveram a habilidade de aplicar esta Disciplina como um bálsamo."
      },
      {
        nome: "Fortitude",
        descricao: "Um clã tão desprezado precisa de todas as vantagens possíveis para sobreviver às noites modernas, e os Salubri também aprenderam a manifestar sua própria resistência como um benefício para o bem-estar dos outros."
      }
    ],
    perdicao: "Os Salubri são caçados: Membros de outros clãs apreciam especialmente a vitae Salubri. Quando um não-Salubri partilha do sangue de um Ciclope, frequentemente acha difícil afastar-se. Consumir o suficiente para abater pelo menos um nível de Fome requer um teste de frenesi de fome com Dificuldade 2 + Severidade da Perdição do Salubri. Além disso, o terceiro olho que Saulot abriu é transmitido através da linhagem toda vez que um Salubri Abraça. Sempre que um Salubri ativa um poder de Disciplina, o terceiro olho chora vitae, ativando testes de frenesi de fome em vampiros próximos com Fome 4 ou mais.",
    fome: {
      nome: "Empatia Afetiva",
      descricao: "Quando um Salubri sofre uma Compulsão, o Membro fica oprimido pela empatia por um problema pessoal que aflige alguém na cena e busca promover sua resolução. Qualquer ação que não seja tomada para mitigar essa tragédia pessoal incorre em uma penalidade de dois dados. A Compulsão persiste até que o fardo da vítima seja aliviado ou uma crise mais imediata o substitua, ou até o fim da cena."
    }
  },

  {
    id: "toreador",
    nome: "Toreador",
    alcunhas: ["Divas", "O Clã da Rosa", "Degenerados", "Artistas", "Prostitutas", "Arikelitas", "Hedonistas", "Sensitivos", "Pervertidos"],
    simbolo: "🌹",
    cor: "#8B0066",
    citacao: "A imortalidade sem beleza é apenas uma forma mais longa de morrer.",
    resumo: "Amaldiçoadas por sua sensualidade desenfreada, as divas são obcecadas pela perfeição estética. Mas descartar os Toreador como pervertidos devassos ou artistas superficiais é o último erro que um Membro cometerá na vida. A beleza é poder, e o amor pode fazer qualquer um fazer praticamente qualquer coisa.",
    historia: "O Clã Toreador sempre pregou a seletividade em seus rituais do Abraço. Os anciões do clã enfatizam repetidas vezes que o clã necessita de pioneiros entre as artes e todos os tipos de vanguarda. Por esta razão, muitos Toreador emergem das fileiras de artistas talentosos. Para os Toreador, a arte abrange todas as formas de entretenimento e estimulação. O clã corteja os maiores atores, cantores, escritores, bailarinos e até profissionais do sexo. Apesar do costume de Abraçar apenas os melhores, a fixação dos Toreador pela beleza e inocência fez com que muitas divas criassem um neófito apressadamente, resultando em hedonistas superficiais e sucessos de uma nota só. O clã ainda se mantém no topo, liderando a Camarilla ao lado dos Ventrue e Tremere.",
    disciplinas: [
      {
        nome: "Auspício",
        descricao: "Os Toreador estão sempre à caça de experiências requintadas e usam Auspício para identificar os recipientes mais suscetíveis e aqueles que possam, através dos seus sentimentos e temperamento, oferecer novos sabores e sensações ao bebedor durante a alimentação."
      },
      {
        nome: "Celeridade",
        descricao: "Os Toreador afirmam que não são combatentes, mas poucos se movem tão rapidamente quanto o degenerado que usa Celeridade para cortar um oponente em pedaços antes mesmo que ele tenha tempo de sacar sua arma. Os Toreador frequentemente usam Celeridade para aprimorar habilidades artísticas ou performáticas."
      },
      {
        nome: "Presença",
        descricao: "Os Toreador dominam a Disciplina de Presença, frequentemente usando-a em conjunto com Auspício para manipular as emoções de Membros e do gado. A Presença pode garantir um público apreciativo ou causar o fracasso de outro artista."
      }
    ],
    perdicao: "Os Toreador desejam a beleza tão intensamente que sofrem na sua ausência. Enquanto um personagem Toreador se encontra em ambientes menos que belos, perde o equivalente à sua Severidade da Perdição em dados nas paradas de dados para usar Disciplinas. Esta obsessão com a estética também faz com que as divas se percam em momentos de beleza — uma falha bestial frequentemente resulta num transe de arrebatamento.",
    fome: {
      nome: "Obsessão",
      descricao: "Algo na cena captura a atenção exclusiva do Toreador. O vampiro fica cativado por uma pessoa, objeto, obra de arte ou qualquer qualidade estética na cena, e deve passar pelo menos dois turnos sem fazer nada além de apreciá-la. Depois disso, o Toreador está livre para agir normalmente, mas achará difícil prestar atenção a qualquer outra coisa. Qualquer ação que não se refira ao objeto de fascínio custa uma penalidade de dois dados."
    }
  },

  {
    id: "tremere",
    nome: "Tremere",
    alcunhas: ["Usurpadores", "Feiticeiros", "Herméticos", "Taumaturgos", "Transgressores", "O Clã Partido", "Bruxas de Sangue"],
    simbolo: "⊙",
    cor: "#6B0000",
    citacao: "Nunca fomos nobres. Nobreza não vem do sangue, magia vem. O restantes é apenas gramática.",
    resumo: "Um mago Hermético na Romênia do século VIII, Tremere era o líder de uma cabala de praticantes de magia temidos por sua obsessão por conhecimento e poder. Incapaz de aceitar a própria mortalidade, Tremere instigou os experimentos mágicos mais aterrorizantes já conduzidos, condenando a si mesmo e a seus seguidores a um inferno criado por eles mesmos.",
    historia: "Depois que a Segunda Inquisição destruiu a Capela Primária em Viena em 2008, os Tremere caíram de eminências pardas para personae non gratae em muitas regiões. A arrogância da Pirâmide fizera com que os Usurpadores conquistassem poucos amigos. Sem a Pirâmide ordenando-os em posições e valores, os feiticeiros encontram-se competindo com seus companheiros Membros e, cada vez mais, uns com os outros por qualquer coisa que possa permitir-lhes recuperar parte do seu antigo poder. O termo 'mago mercenário' está se tornando cada vez mais difundido, à medida que os feiticeiros que antes estavam Vinculados pela vontade de seus senhores se veem livres para servir pelo preço que escolherem.",
    disciplinas: [
      {
        nome: "Auspício",
        descricao: "Os Tremere usam Auspício para perceber as auras dos outros, procurar evidências de essências mágicas e objetos importantes deixados para trás, e para comunicar uns com os outros através de vastas distâncias sem medo de serem ouvidos."
      },
      {
        nome: "Feitiçaria de Sangue",
        descricao: "Mestres taumaturgos, a experiência dos Tremere em magia de sangue faz deles um pilar valioso, embora desconfiado, da Camarilla. Usando Feitiçaria de Sangue, eles podem desferir ataques devastadores contra a mente e o corpo de um oponente, defender-se e facilitar sua alimentação."
      },
      {
        nome: "Dominação",
        descricao: "Os Tremere farão quase tudo por conhecimento e influência, e Dominação é a Disciplina que permite que eles saiam impunes disso. Ao tentar se alimentar, um Tremere mostrará escassos escrúpulos em usar a Disciplina para forçar um mortal a expor sua garganta."
      }
    ],
    perdicao: "Antigamente, o clã era definido por uma hierarquia rígida de Laços de Sangue. Mas após a queda de Viena, seu Sangue recuou e abortou todas as conexões desse tipo. A vitae Tremere não pode mais criar Laço de Sangue com outros Membros, embora eles próprios possam ser Vinculados por Membros de outros clãs. Um Tremere ainda pode vincular mortais e carniçais, embora a vitae corrompida deva ser bebida um número adicional de vezes igual à Severidade da Perdição do vampiro para que o laço se forme.",
    fome: {
      nome: "Perfeccionismo",
      descricao: "Nada menos que o melhor servirá. O Tremere deve realizar a próxima tarefa que empreender com sucesso completo — sucesso parcial é fracasso. Se falharem, deverão tentar novamente, se for de todo possível. Qualquer ação que não seja uma nova tentativa da ação fracassada custa uma penalidade de dois dados até que tentem novamente ou a cena termine."
    }
  },

  {
    id: "tzimisce",
    nome: "Tzimisce",
    alcunhas: ["Dragões", "O Velho Clã", "Voivodes", "Fomentadores"],
    simbolo: "🐉",
    cor: "#003320",
    citacao: "Não para liderar, não para triunfar, mas para governar — possuir completamente. A forma é uma prisão. Eu me libertei.",
    resumo: "Para os Tzimisce, a posse é tudo. Eles visam dominar e possuir o objeto de sua possessividade, guardando-o zelosamente como o dragão de seu nome faria com seu tesouro. Tudo, desde terras, pessoas, cultos, empresas ou gangues, pode cair sob as garras cobiçosas de um Dragão.",
    historia: "Os encargos do clã têm sido tradicionalmente definidos geograficamente, como uma terra ou um povo regional, mas à medida que as propriedades na Transilvânia diminuem, eles estendem sua obsessão para gangues, redes de negócios ou mesmo unidades militares. Esta possessividade implacável estende-se também à forma física dos Tzimisce, que se consideram os donos definitivos dos seus corpos, mesmo além das limitações da Maldição de Caim. Muitos Dragões praticam uma especialização da Disciplina de Metamorfose conhecida como Vicissitude, que lhes permite remodelar seus corpos e os de seus súditos e até de vítimas menos dispostas. Os Tzimisce participaram vigorosamente na Revolta Anarquista e foram um dos clãs fundadores do Sabá.",
    disciplinas: [
      {
        nome: "Animalismo",
        descricao: "Alguns Tzimisce cultivam o Animalismo como uma extensão da sua unidade com os seus domínios. Outros veem-no como uma ferramenta para melhor comandar hordas de feras inferiores de modo a reivindicar esses domínios. Em qualquer caso, os Tzimisce sentem há muito tempo uma afinidade com os habitantes mais bestiais das suas terras ancestrais."
      },
      {
        nome: "Dominação",
        descricao: "A Disciplina perfeita para impor editais através de pura força mental. Dominação não apenas ajuda os Dragões a se apoderarem do objeto de sua obsessão, mas também condiciona servidores de longo prazo a se tornarem extensões da vontade inquestionável do Demônio."
      },
      {
        nome: "Proteanismo",
        descricao: "Como mestres de suas próprias formas físicas, os Tzimisce usam Metamorfose para se forçarem em outras formas, especialmente aquelas associadas a muitas das terras ancestrais do Velho Clã. Muitos Tzimisce praticam os métodos da Vicissitude, que lhes permite transcender as formas mecânicas de Metamorfose e tratar os seus próprios corpos e os dos seus súditos como argila primordial."
      }
    ],
    perdicao: "Os Tzimisce são territorialistas: cada Tzimisce deve escolher um encargo específico — um domínio físico, um grupo de pessoas, uma organização ou até algo mais esotérico — mas claramente definido e limitado. O Membro deve passar o seu repouso diurno cercado pelo encargo escolhido. Se não o fizer, sofrerá dano Agravado na Força de Vontade igual à sua Severidade da Perdição ao acordar na noite seguinte.",
    fome: {
      nome: "Cobiça",
      descricao: "Quando um Tzimisce sofre uma Compulsão, o Membro fica obcecado em possuir algo na cena, desejando adicioná-lo ao seu tesouro proverbial. Isto pode ser qualquer coisa, desde um objeto até uma propriedade ou uma pessoa real. Qualquer ação que não seja tomada em direção a este propósito incorre em uma penalidade de dois dados. A Compulsão persiste até que a propriedade seja estabelecida ou o objeto de desejo se torne inalcançável."
    }
  },

  {
    id: "ventrue",
    nome: "Ventrue",
    alcunhas: ["O Clã dos Reis", "Sangues-Azuis", "Tiranos", "Senhores da Guerra", "Patrícios", "Borgias", "o Culto de Mithras"],
    simbolo: "♜",
    cor: "#00008B",
    citacao: "Nós não governamos porque queremos poder. Nós governamos porqque sem nós, tudo desmorona.",
    resumo: "Aos seus próprios olhos, apenas o Clã dos Reis tem a contenção, a sabedoria, o controle e o pedigree para liderar sua espécie através da noite. Ao longo de sua trajetória como reis-deuses da antiga Babilônia e lordes e ladys da Idade Das Trevas até seus papéis contemporâneos como guardiões de sangue real, acionistas majoritários e apoiadores de fundos de campanha, eles têm sido obcecados pelo impulso de governar.",
    historia: "O Clã Ventrue há muito tempo lidera a Camarilla, ocupando mais posições de poder do que qualquer outro clã, e eles relutam em abrir mão disso. Os Ventrue acreditam na força da tradição e da linhagem. O Abraço é um dos seus rituais mais importantes, e a escolha da cria afeta a forma como os outros membros do clã tratam o senhor. Os Ventrue, portanto, visam Abraçar pessoas de alto desempenho, gado política ou financeiramente poderoso, ou aqueles com um talento que os diferencie das massas. Os Ventrue são o sistema. Eles estabelecem e mantêm as regras, punindo aqueles que as quebram. A verdade desconfortável é que, sem eles, a Máscara, e a Camarilla com ela, já teriam caído há muito tempo.",
    disciplinas: [
      {
        nome: "Dominação",
        descricao: "Os Ventrue consideram-se os mestres desta Disciplina, usando-a principalmente para exercer a sua vontade sobre vassalos e sobre o gado. Ao se alimentar, um Ventrue pode ordenar a um mortal que exponha o pescoço, ou usar Dominação para apagar toda a memória de uma alimentação. Os Ventrue também usam habilmente esta Disciplina para proteger a Máscara."
      },
      {
        nome: "Fortitude",
        descricao: "A Fortitude permite aos Ventrue manterem os seus tronos mesmo quando os exércitos se alinham contra eles, e resistirem a todas as lâminas, balas e bombas. Onde outros Membros podem ficar sem vitae, os Ventrue resistem ao ambiente e saciam a sua Fome."
      },
      {
        nome: "Presença",
        descricao: "Os Ventrue procuram domar a corte e construir o amor e a devoção dos outros em relação ao seu governo. A Disciplina também é usada pelo Ventrue que quer que os outros vejam a facilidade com que adquire recipientes. O clã valoriza a conservação de tempo e recursos, e a Presença permite que um sangue-azul faminto seja eficiente ao atrair a sua presa."
      }
    ],
    perdicao: "Os Ventrue possuem paladares rarefeitos. Quando um Ventrue bebe sangue de qualquer mortal fora de sua preferência, é exigido um profundo esforço de vontade, caso contrário o sangue ingerido retorna como um vômito escarlate. As preferências variam muito, desde Ventrue que só conseguem se alimentar de morenas legítimas, indivíduos de ascendência suíça ou homossexuais, até outros que só conseguem se alimentar de soldados ou usuários de metanfetamina. Se quiser que o seu personagem se alimente de algo que não seja a sua vítima preferida, deverá gastar pontos de Força de Vontade iguais à Severidade da Perdição do personagem.",
    fome: {
      nome: "Arrogância",
      descricao: "O vampiro deve estar no controle total da cena. Se o vampiro já não estiver em uma posição de liderança ou autoridade, deverá assumir uma, pela força se necessário. Qualquer ação que não sirva para afirmar ou manter a sua dominância incorre em uma penalidade de dois dados. A Compulsão termina quando o vampiro é o líder inquestionável da cena, ou a cena termina."
    }
  }
];

// Exportar para uso no site
if (typeof module !== 'undefined' && module.exports) {
  module.exports = clans;
}
