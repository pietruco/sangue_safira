// data.js — Sangue & Safira | Disciplinas V5 (pt-BR)
// Fontes: Vampiro: A Máscara Corebook + Players Guide

const DISCIPLINES = {

  // ─────────────────────────────────────────────
  // ANIMALISMO
  // ─────────────────────────────────────────────
  animalismo: {
    descricao: "Animalismo é a capacidade de se comunicar com animais, dominar a Besta interior de outros seres e tornar criaturas em extensões da própria vontade. Vampiros que dominam essa disciplina frequentemente encontram mais conforto entre feras do que entre humanos.",
    habilidades: [

      // NÍVEL 1
      {
        nivel: 1,
        amalgama: null,
        nome: "Vincular Fâmulo",
        resumo: "Cria um vínculo mental com um animal através de um Laço de Sangue, tornando-o um fâmulo leal e facilitando o uso de outras habilidades de Animalismo sobre ele.",
        custo: "O animal deve receber o Sangue do usuário em três noites separadas (cada uma exige uma Checagem de Sangue); após isso, o custo de manutenção é desprezível.",
        dados: "Carisma + Animali­smo",
        resist: "—",
        mecanica: "Dar ordens simples sem Sussurros Selvagens exige Carisma + Animalismo (Dificuldade 2; aumente conforme a complexidade). Um vampiro só pode ter um fâmulo por vez, mas pode obter um novo se o atual morrer. Fâmulos não envelhecem enquanto receberem Sangue regularmente. O vínculo só é rompido pela morte.",
        duracao: "Permanente (até a morte do animal)"
      },
      {
        nivel: 1,
        amalgama: null,
        nome: "Sentir a Besta",
        resumo: "O vampiro detecta a Besta presente em mortais, vampiros e outros sobrenaturais, percebendo natureza, fome e hostilidade do alvo.",
        custo: "Grátis",
        dados: "Determinação + Animalismo vs. Autocontrole + Subterfúgio",
        resist: "Autocontrole + Subterfúgio",
        mecanica: "Uma vitória revela o nível de hostilidade do alvo e se ele possui uma Besta sobrenatural (vampiro ou lobisomem). Uma vitória crítica revela o tipo exato de criatura e seu nível de Fome ou Fúria. Pode ser usada passivamente, alertando o usuário sobre intenções agressivas nas proximidades.",
        duracao: "Passiva"
      },

      // NÍVEL 2
      {
        nivel: 2,
        amalgama: null,
        nome: "Sussurros Selvagens",
        resumo: "Permite comunicação bidirecional com animais — o vampiro pode conversar, persuadir e até convocar criaturas da área.",
        custo: "Uma Checagem de Sangue por tipo de animal escolhido para a cena (gratuito com fâmulo); permite uma convocação e comunicação ilimitada.",
        dados: "Manipulação + Animalismo (persuasão) / Carisma + Animalismo (convocação)",
        resist: "—",
        mecanica: "Comunicação simples não exige teste. Persuadir um animal a prestar um serviço requer Manipulação + Animalismo (Dificuldade 3 para tarefas simples, até 6 para missões suicidas). Convocar animais usa Carisma + Animalismo; a Dificuldade depende da raridade dos animais na área. Uma vitória crítica convoca a maioria, senão todos os animais do tipo na região. Animais convocados obedecem, mas fogem ou atacam se ameaçados.",
        duracao: "Uma cena"
      },
      {
        nivel: 2,
        amalgama: "Auspício 1",
        nome: "Mensageiro Animal",
        resumo: "O fâmulo carrega uma mensagem curta até uma pessoa designada, entregando-a com a voz do vampiro assim que estabelece contato visual.",
        custo: "Uma Checagem de Sangue por noite",
        dados: "Determinação + Manha/Sobrevivência do fâmulo (se o alvo estiver escondido ou em local desconhecido)",
        resist: "Inteligência + Manha/Sobrevivência (alvo tentando se esconder)",
        mecanica: "O vampiro sussurra uma única frase ao fâmulo e informa o alvo. Se o local for desconhecido, o fâmulo deve rastrear o alvo (Dificuldade 2, ou resistido pelo alvo). A tentativa pode ser feita uma vez por noite. A mensagem é entregue assim que o fâmulo faz contato visual, e então o fâmulo retorna.",
        duracao: "Uma ou mais noites, conforme o tempo de busca"
      },

      // NÍVEL 3
      {
        nivel: 3,
        amalgama: null,
        nome: "Sucosidade Animal",
        resumo: "O vampiro sacia mais Fome ao se alimentar de animais. Consumir o próprio fâmulo concede sustento excepcional e absorve um fragmento de seu traço primário.",
        custo: "Grátis",
        dados: "—",
        resist: "—",
        mecanica: "Alimentar-se de animais sacia 1 Fome adicional e o vampiro conta seu Potencial de Sangue como dois níveis mais baixo para fins de penalidades ao saciar Fome com sangue animal. Consumir o fâmulo sacia 4 de Fome (independente do tamanho) — este ato nunca remove o último dado de Fome. Além disso, aumenta em 2 pontos o Atributo mais associado ao animal (a critério do Narrador), ex.: gato pode aumentar Destreza ou Autocontrole; cão pode aumentar Carisma ou Determinação. O bônus dura até a próxima alimentação ou até a Fome atingir 5.",
        duracao: "Passiva / até a próxima alimentação"
      },
      {
        nivel: 3,
        amalgama: null,
        nome: "Apaziguar a Besta",
        resumo: "O vampiro cruza os olhares com um alvo e suprime temporariamente sua Besta interior — mortais ficam apáticos e vampiros perdem o acesso a surtos bestiais.",
        custo: "Uma Checagem de Sangue",
        dados: "Carisma + Animalismo vs. Vigor + Determinação",
        resist: "Vigor + Determinação",
        mecanica: "Vitória contra mortal: incapacitado pela cena com letargia severa; age apenas para se preservar. Vitória contra vampiro: impede Surtos de Sangue e o alvo não acumula críticos sujos enquanto a Besta estiver suprimida; dura um turno mais um turno por ponto de margem. Vitória crítica contra vampiro: também encerra o Frenesi ativo.",
        duracao: "Uma cena (mortais) / 1 turno + margem (vampiros)"
      },
      {
        nivel: 3,
        amalgama: "Ofuscação 2",
        nome: "Colmeia Viva",
        resumo: "Estende o controle animal a enxames de insetos (moscas, baratas etc.), tratando o enxame como uma criatura única — vampiros Nosferatu frequentemente os alojam no próprio corpo.",
        custo: "Sem custo adicional",
        dados: "—",
        resist: "—",
        mecanica: "Estende todas as habilidades de Animalismo (antes restritas a vertebrados) a enxames de insetos. O vampiro pode vincular o enxame como fâmulo e até alojá-lo em cavidades do próprio corpo, tornando-o indetectável por qualquer meio inferior a raio-X. Enxames têm Saúde 5 e pool de 8 dados para resistir ataques. Dano Superficial de Briga; chamas e inseticida causam dano Agravado. Úteis para espionagem, distração (−2 dados para o alvo enxameado) ou intimidação de mortais (+1 a +3 dados em pools de Intimidação).",
        duracao: "Passiva"
      },
      {
        nivel: 3,
        amalgama: "Dominação 1",
        nome: "Comando do Mensageiro",
        resumo: "O vampiro usa Compelir ou Mesmerizar através do fâmulo, impondo sua vontade ao destinatário da mensagem.",
        custo: "Nenhum custo adicional",
        dados: "Ver Compelir ou Mesmerizar (rating de Dominação não pode exceder o de Animalismo do usuário)",
        resist: "Ver Compelir ou Mesmerizar",
        mecanica: "Requer o poder Mensageiro Animal como pré-requisito e Compelir ou Mesmerizar como pré-requisito. O teste de Compelir ou Mesmerizar é realizado assim que o fâmulo faz contato visual com o alvo. Siga as regras normais desses poderes de Dominação.",
        duracao: "Ver Mensageiro Animal"
      },
      {
        nivel: 3,
        amalgama: null,
        nome: "Praga de Feras",
        resumo: "O vampiro marca um indivíduo, tornando-o o foco de toda atenção animal da área — bestas e pragas o perseguem, latem, bicam e arranham, dificultando suas ações.",
        custo: "Uma Checagem de Sangue",
        dados: "Manipulação + Animalismo vs. Autocontrole + Empatia com Animais",
        resist: "Autocontrole + Empatia com Animais",
        mecanica: "Vitória: o alvo sofre penalidade de dados a todas as pools de Perícia igual à margem pelo resto da noite, a menos que se isole fisicamente dos animais. O alvo também fica mais fácil de rastrear (bônus igual à margem para qualquer perseguidor). A penalidade não se aplica a conflitos físicos (os animais não são suicidas), mas retorna após a briga cessar.",
        duracao: "Uma noite"
      },

      // NÍVEL 4
      {
        nivel: 4,
        amalgama: null,
        nome: "Subjugar o Espírito",
        resumo: "O vampiro transfere completamente sua mente para o corpo de um animal, controlando seus sentidos e ações — mesmo durante o dia, caso consiga ficar acordado.",
        custo: "Uma Checagem de Sangue (gratuito com fâmulo)",
        dados: "Manipulação + Animalismo (Dificuldade 4)",
        resist: "—",
        mecanica: "Vitória: habita o corpo do animal por uma cena. Vitória crítica: pode habitá-lo indefinidamente. O corpo do vampiro fica imóvel como em torpor. Ver o sol exige teste de frenesi de terror, mas a luz solar não afeta o animal. Dano ao corpo original encerra o transe e libera o animal. A morte do animal encerra o transe e causa 1 nível de dano Agravado de Vontade pelo choque.",
        duracao: "Uma cena / indefinidamente (ver acima)"
      },
      {
        nivel: 4,
        amalgama: null,
        nome: "Influenciar o Rebanho",
        resumo: "O vampiro influencia o humor geral de todos os animais em uma ampla área, inclinando-os da indiferença total à agressão indiscriminada.",
        custo: "Uma ou mais Checagens de Sangue",
        dados: "Autocontrole + Animalismo",
        resist: "—",
        mecanica: "O vampiro decide o comportamento desejado e faz o teste. Com 1 sucesso os animais mal são afetados; com 5 são completamente dominados pelo impulso, desde dormir tranquilamente até atacar qualquer coisa sem provocação. Qualquer tentativa mundana de controlar os animais tem Dificuldade aumentada em igual número de sucessos. A área afetada é do tamanho aproximado de um campo de futebol; Checagens de Sangue adicionais estendem a área, até 5 para uma pequena cidade.",
        duracao: "Uma noite"
      },

      // NÍVEL 5
      {
        nivel: 5,
        amalgama: null,
        nome: "Domínio Animal",
        resumo: "O controle do vampiro sobre as feras é tão absoluto que pode comandar bandos e rebanhos inteiros como extensões do próprio corpo — centenas de animais podem dar suas vidas a um gesto.",
        custo: "Duas Checagens de Sangue",
        dados: "Carisma + Animalismo",
        resist: "—",
        mecanica: "Escolha um tipo de animal e faça o teste com Dificuldade conforme natureza dos animais e ordem dada (ex.: dispersar corvos para buscar um alvo, Dificuldade 3; ataque suicida de cães contra outro vampiro, Dificuldade 5). O poder não convoca animais — compele os já presentes. O vampiro pode ordenar que retornem após cumprir a missão.",
        duracao: "Uma cena ou até a diretiva ser cumprida (o que vier primeiro)"
      },
      {
        nivel: 5,
        amalgama: null,
        nome: "Despertar o Temperamento Bestial",
        resumo: "O vampiro exerce influência sutil sobre a Besta de todos os vampiros presentes, podendo agitar ou acalmar os instintos vampíricos de toda Cainita ao alcance da voz.",
        custo: "Uma Checagem de Sangue",
        dados: "Manipulação + Animalismo (Dificuldade 3)",
        resist: "—",
        mecanica: "O vampiro decide agitar ou acalmar, cantarola suavemente e faz o teste. Cada sucesso na margem aumenta ou reduz em 1 a Dificuldade de resistir ao Frenesi para todos os outros vampiros ao alcance da voz. Se a Dificuldade for reduzida, vampiros já em Frenesi podem fazer um novo teste para resistir, saindo do estado se tiverem sucesso.",
        duracao: "Enquanto o usuário continuar cantarolando"
      },
      {
        nivel: 5,
        amalgama: null,
        nome: "Projetar a Besta",
        resumo: "No momento de um Frenesi de terror ou fúria, o vampiro projeta sua Besta a um sujeito próximo, que experimenta o Frenesi no lugar do usuário.",
        custo: "Uma Checagem de Sangue",
        dados: "Raciocínio + Animalismo vs. Autocontrole + Determinação",
        resist: "Autocontrole + Determinação",
        mecanica: "Em vez de jogar Vontade para resistir ao Frenesi, o vampiro joga Raciocínio + Animalismo vs. Autocontrole + Determinação do alvo. Se o usuário falhar, ele entra em Frenesi normalmente. Em caso de vitória, o alvo experimenta o Frenesi. Estímulos posteriores ainda podem provocar Frenesi no usuário, mas ele pode usar o poder novamente enquanto tiver Checagens de Sangue e alvos disponíveis. Este poder não pode transferir um Frenesi de Fome.",
        duracao: "Duração do Frenesi"
      }
    ]
  },

  // ─────────────────────────────────────────────
  // AUSPÍCIO
  // ─────────────────────────────────────────────
  auspicio: {
    descricao: "Auspício aguça os sentidos além dos limites mortais, permite sondar mentes, perceber o que está oculto e vislumbrar o futuro. Seus usuários são espertos e paranóicos — uma vez que a verdade está ao seu alcance, é impossível parar de buscá-la.",
    habilidades: [

      // NÍVEL 1
      {
        nivel: 1,
        amalgama: null,
        nome: "Sentidos Aguçados",
        resumo: "Os sentidos do vampiro atingem grau sobrenatural — visão no escuro total, audição ultrassônica e olfato capaz de sentir o medo da presa.",
        custo: "Grátis (ver abaixo)",
        dados: "Raciocínio + Determinação",
        resist: "—",
        mecanica: "Adiciona o nível de Auspício a todas as jogadas de percepção. Exposição a sensações extremas (barulho alto, luz intensa, cheiros avassaladores) enquanto o poder está ativo exige Raciocínio + Determinação (Dificuldade 3+) para amortecer os sentidos a tempo — falha causa −3 dados em todas as jogadas baseadas em percepção pelo resto da cena. Manter o poder ativo por mais de uma cena em ambientes de alto estímulo pode exigir gasto de Vontade, a critério do Narrador.",
        duracao: "Até ser desativado"
      },
      {
        nivel: 1,
        amalgama: null,
        nome: "Sentir o Invisível",
        resumo: "Os sentidos do vampiro se sintonizam com dimensões além do mundano, detectando presenças ocultas — vampiros em Ofuscação, espíritos, fantasmas ou magia dormente.",
        custo: "Grátis",
        dados: "Raciocínio + Auspício ou Determinação + Auspício",
        resist: "Raciocínio + Ofuscação (ex.)",
        mecanica: "O Narrador faz uma jogada oculta de Raciocínio + Auspício contra Dificuldade que ele mesmo escolhe quando há algo sobrenatural escondido. Contra uma entidade ativamente se escondendo, é uma disputa cega (o Narrador pede 'jogue X dados'). Se o vampiro busca ativamente, usa Determinação + Auspício. Ex.: detectar vampiro em Ofuscação = Raciocínio + Auspício vs. Raciocínio + Ofuscação.",
        duracao: "Passiva"
      },

      // NÍVEL 2
      {
        nivel: 2,
        amalgama: null,
        nome: "Premonição",
        resumo: "O vampiro experimenta flashes de insight — arrepios, inspiração súbita ou visões vívidas que o afastam do perigo ou revelam verdades esquecidas.",
        custo: "Grátis ou uma Checagem de Sangue",
        dados: "Determinação + Auspício",
        resist: "—",
        mecanica: "Sempre que o Narrador julgar adequado, o personagem recebe uma dica súbita: encontra uma pista perdida, é avisado de uma armadilha etc. Limite sugerido: uma premonição por cena (mesmo que mais de um personagem tenha o poder). O usuário também pode provocar ativamente uma premonição focando em um assunto — faz uma Checagem de Sangue e joga Determinação + Auspício; o número de sucessos determina o nível de insight.",
        duracao: "Passiva"
      },
      {
        nivel: 2,
        amalgama: "Fortitude 1",
        nome: "Panaceia",
        resumo: "O vampiro acalma o tumulto mental ou emocional de um sujeito, restaurando um fragmento de firmeza — especialmente eficaz em mortais antes de se alimentar.",
        custo: "Uma Checagem de Sangue (+ Vontade conforme circunstâncias)",
        dados: "Autocontrole + Auspício (Dificuldade 2)",
        resist: "—",
        mecanica: "O vampiro joga Autocontrole + Auspício contra Dificuldade 2 e restaura níveis de dano Superficial de Vontade iguais à margem. Alternativamente, restaura 1 nível de dano Agravado de Vontade a cada 3 sucessos. Usar em mortais também os acalma ou alivia seu estado emocional turbulento. O uso leva um turno inteiro; passar a cena inteira reduz a Dificuldade para 0. Não pode ser usado em si mesmo. Um sujeito só pode ser afetado uma vez por noite. Usar em mais de um sujeito por noite causa ao usuário dano Superficial de Vontade igual a metade dos sucessos da margem para cada sujeito adicional.",
        duracao: "N/A"
      },
      {
        nivel: 2,
        amalgama: null,
        nome: "Revelar Temperamento",
        resumo: "O vampiro fareja a Ressonância do alvo, qualquer Discrasia que ele carregue, e se outro vampiro se alimentou dele recentemente — além da Ressonância da última vítima desse vampiro.",
        custo: "Uma Checagem de Sangue",
        dados: "Inteligência + Auspício vs. Autocontrole + Subterfúgio",
        resist: "Autocontrole + Subterfúgio",
        mecanica: "Com o poder ativo, jogue Inteligência + Auspício vs. Autocontrole + Subterfúgio do alvo. Vitória revela a Ressonância do mortal e quaisquer particularidades do sangue, incluindo Dyscrasias. Vitória crítica também concede +2 dados nas interações com o alvo pela cena (o usuário adapta sua abordagem ao estado emocional do mortal). Contra vampiro: vitória revela a Ressonância do último mortal de quem se alimentou; vitória crítica fornece um quadro mais detalhado, revelando o método e Tipo de Predador do vampiro.",
        duracao: "Uma cena"
      },

      // NÍVEL 3
      {
        nivel: 3,
        amalgama: null,
        nome: "Sondar a Alma",
        resumo: "Focando em uma pessoa, o vampiro percebe o estado de sua psique como uma aura de cores cambiantes, revelando estado emocional, Ressonância e traços sobrenaturais.",
        custo: "Uma Checagem de Sangue",
        dados: "Inteligência + Auspício vs. Autocontrole + Subterfúgio",
        resist: "Autocontrole + Subterfúgio",
        mecanica: "Vitória: o Narrador responde verdadeiramente um número de perguntas igual à margem sobre a aura e psique do alvo, incluindo: estado emocional, Ressonância no sangue, se é vampiro/lobisomem/ghoul/sobrenatural, se está sob influência de Feitiçaria de Sangue, se cometeu diablerie no último ano. Vitória crítica: revela algo inesperado. Para varredura de multidão, jogue contra Dificuldade conforme tamanho da multidão e distrações externas.",
        duracao: "Um turno ou a critério do Narrador"
      },
      {
        nivel: 3,
        amalgama: null,
        nome: "Compartilhar os Sentidos",
        resumo: "O vampiro adentra a mente de um mortal ou vampiro e experimenta o que ele vê, ouve e sente, mantendo plena consciência de seus próprios arredores.",
        custo: "Uma Checagem de Sangue",
        dados: "Determinação + Auspício (Dificuldade 3)",
        resist: "Raciocínio + Determinação (para expulsar o intruso)",
        mecanica: "Jogue Determinação + Auspício (Dificuldade 3; pode ser maior por distância ou distração). O alvo normalmente não percebe a intrusão, mas Sentir o Invisível pode revelar o passageiro. Para expulsar o intruso, a vítima deve vencer uma disputa de Raciocínio + Determinação vs. Raciocínio + Determinação do intruso. Um usuário expulso não pode tentar novamente até a próxima noite. Pode ser usado a distâncias maiores em alguém que ainda carregue o Sangue do usuário no corpo.",
        duracao: "Uma cena"
      },
      {
        nivel: 3,
        amalgama: "Oblívio 1",
        nome: "Falha Fatal",
        resumo: "Observando a sutil obra da entropia, o vampiro detecta o ponto fraco de um alvo — uma fissura em sua defesa mental ou uma vulnerabilidade em sua armadura física.",
        custo: "Uma Checagem de Sangue",
        dados: "Inteligência + Auspício vs. Autocontrole ou Vigor + Subterfúgio",
        resist: "Autocontrole (fraquezas mentais) ou Vigor (físicas) + Subterfúgio",
        mecanica: "O usuário passa um turno observando o alvo e faz o teste. Vitória revela como atacá-lo melhor, expondo a menor pool defensiva em qualquer categoria, e concede +2 dados em ataques contra essa pool. Se o usuário informar outros sobre a fraqueza, eles ganham +1 dado.",
        duracao: "Uma cena"
      },

      // NÍVEL 4
      {
        nivel: 4,
        amalgama: null,
        nome: "Toque do Espírito",
        resumo: "Ao tocar um objeto inanimado ou o chão de um local, o vampiro percebe o resíduo emocional deixado por quem manuseou aquele objeto ou visitou aquele lugar.",
        custo: "Uma Checagem de Sangue",
        dados: "Inteligência + Auspício",
        resist: "—",
        mecanica: "Jogue Inteligência + Auspício contra Dificuldade conforme a informação buscada (Dificuldade 3 para emoção do usuário de uma arma usada há poucos dias; até 6+ para sentir as circunstâncias em que uma carta de 300 anos foi escrita). Cada ponto de margem permite sentir aproximadamente um detentor anterior e suas circunstâncias, contando do mais recente para o mais antigo.",
        duracao: "Um turno"
      },

      // NÍVEL 5
      {
        nivel: 5,
        amalgama: null,
        nome: "Clarividência",
        resumo: "Em transe leve, o vampiro varre uma área urbana e reúne em minutos informações que levariam dias de investigação — e pode monitorar eventos em andamento.",
        custo: "Uma Checagem de Sangue",
        dados: "Inteligência + Auspício",
        resist: "—",
        mecanica: "Jogue Inteligência + Auspício contra Dificuldade conforme segurança e atividade da área (3 para a própria mansão; 7+ para um quarteirão desconhecido em cidade grande). O usuário adiciona seu nível base de Refúgio em dados extras ao usar Clarividência no próprio refúgio. O Narrador responde perguntas sobre entradas e saídas da área, o que as pessoas viram e ouviram, fofoca local, choques e impressões recentes. Pode-se monitorar eventos em andamento, mas o vampiro deve permanecer na área. O jogador pode fazer aproximadamente uma pergunta por ponto de margem; informações deliberadamente ocultas consomem mais de um ponto. Vitória crítica revela algo importante independentemente das perguntas feitas.",
        duracao: "Poucos minutos (coleta) / até uma noite (vigilância)"
      },
      {
        nivel: 5,
        amalgama: "Dominação 3",
        nome: "Possessão",
        resumo: "O vampiro despoja a vontade de um mortal e habita completamente seu corpo, usando-o como o próprio — podendo inclusive experimentar luz solar, comida e sexualidade negadas pela morte.",
        custo: "Duas Checagens de Sangue",
        dados: "Determinação + Auspício vs. Determinação + Inteligência",
        resist: "Determinação + Inteligência",
        mecanica: "Só funciona em mortais. Se for ghoul, deve ser Ligado ao usuário. Requer contato visual. O usuário entra em disputa de Determinação + Auspício vs. Determinação + Inteligência do alvo para habitar o corpo. Falha total: o alvo fica imune a novas tentativas durante a história. O corpo do vampiro cai em torpor. O vampiro pode usar Auspício, Presença e Dominação através do corpo possuído. Para manter a Possessão durante o dia, deve permanecer acordado. Dano Agravado ao possuído arrisca encerrar a Possessão (Determinação + Auspício, Dificuldade 2 + dano sofrido). Morte do possuído causa imediatamente 3 níveis de dano Agravado de Vontade. O poder não concede leitura de mentes, acesso às perícias ou maneirismos do alvo; impersonar o alvo exige Manipulação + Performance vs. Raciocínio + Percepção.",
        duracao: "Até ser encerrado voluntária ou involuntariamente"
      },
      {
        nivel: 5,
        amalgama: null,
        nome: "Telepatia",
        resumo: "No mais alto nível de Auspício, o vampiro lê mentes e projeta pensamentos. Mentes mortais são relativamente acessíveis; mentes não-mortas exigem esforço maior.",
        custo: "Uma Checagem de Sangue (+ 1 Vontade contra vampiros não-consententes)",
        dados: "Determinação + Auspício vs. Raciocínio + Subterfúgio",
        resist: "Raciocínio + Subterfúgio",
        mecanica: "Projetar pensamentos não exige teste (mas requer linha de visão). Para ler a mente de um mortal: Determinação + Auspício vs. Raciocínio + Subterfúgio enquanto olha nos olhos (mortal consentente: sem teste). Vitória: descobre pensamentos superficiais como fluxo de imagens; margem maior permite sondar memórias mais profundas. Vitória crítica: quadro coerente dos pensamentos e intenções atuais. Para vampiro não-consentente: gaste 1 Vontade antes de jogar.",
        duracao: "Aproximadamente 1 minuto por Checagem de Sangue; cena inteira com sujeito consentente"
      },
      {
        nivel: 5,
        amalgama: "Dominação 3",
        nome: "Aliviar a Alma Bestial",
        resumo: "Compartilha a serenidade moral do vampiro com um Cainita arrependido, removendo Manchas ou erguendo escudos psicológicos — mas submete a mente do sujeito à do usuário.",
        custo: "Duas Checagens de Sangue + 1 Mancha",
        dados: "Autocontrole + Auspício vs. Humanidade do sujeito",
        resist: "Humanidade do sujeito",
        mecanica: "Pré-requisito: Panaceia. O vampiro passa uma cena em reclusão com o sujeito e joga Autocontrole + Auspício vs. Humanidade do sujeito. Para cada sucesso na margem: remove 1 Mancha do sujeito OU ergue um 'escudo' que cancela 1 Mancha futura (1:1). Exemplo: margem 3 em sujeito sem Manchas cancela até 3 Manchas adquiridas na mesma sessão. Vitória crítica: o usuário pode abrir mão dos benefícios acima e restaurar 1 ponto de Humanidade ao sujeito (cada vampiro pode receber esse benefício apenas uma vez na existência). Só funciona em vampiros; falha automaticamente se o sujeito tiver Humanidade maior que o usuário. Pelo resto da sessão, o sujeito fica entorpecido (parte da mente mesclada ao usuário) e qualquer Dominação usada pelo usuário no sujeito tem sucesso automático sem contato visual. Ao fim da sessão, escudos não utilizados são perdidos; Manchas removidas e Humanidade restaurada permanecem.",
        duracao: "Uma sessão"
      }
    ]
  },

  // ─────────────────────────────────────────────
  // CELERIDADE
  // ─────────────────────────────────────────────
  celeridade: {
    descricao: "Celeridade permite ao vampiro mover-se e reagir em velocidade sobrenatural, tornando-o um predador letal e quase impossível de atingir. Mais do que velocidade pura, os vampiros que a empregam parecem pensar tão rápido quanto agem.",
    habilidades: [

      // NÍVEL 1
      {
        nivel: 1,
        amalgama: null,
        nome: "Graça Felina",
        resumo: "O vampiro adquire equilíbrio e graça iguais ou superiores aos de acrobatas de nível mundial, caminhando e correndo sobre beiradas e fios sem esforço.",
        custo: "Grátis",
        dados: "—",
        resist: "—",
        mecanica: "O usuário passa automaticamente em qualquer teste baseado em Destreza ou Atletismo necessário para manter equilíbrio. Não permite equilibrar-se em superfície que não suporte seu peso.",
        duracao: "Passiva"
      },
      {
        nivel: 1,
        amalgama: null,
        nome: "Reflexos Rápidos",
        resumo: "O vampiro percebe eventos instantaneamente e reage com alacridez sobre-humana — capaz de tentar esquivar de flechas e até balas sem cobertura.",
        custo: "Grátis",
        dados: "—",
        resist: "—",
        mecanica: "Com este poder, vampiros não sofrem penalidade em suas pools defensivas pela falta de cobertura contra ataques de Armas de Fogo. Também podem executar uma ação menor (ver p. 298 do corebook) no valor de até 2 dados por turno — como preparar ou recarregar uma arma — gratuitamente.",
        duracao: "Passiva"
      },

      // NÍVEL 2
      {
        nivel: 2,
        amalgama: null,
        nome: "Velocidade",
        resumo: "O domínio da Celeridade permite ao vampiro mover-se e reagir em velocidade vertiginosa.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Adiciona o nível de Celeridade à pool do usuário para testes de Destreza não-combativos. Uma vez por turno, pode fazer isso também ao se defender com Destreza + Atletismo.",
        duracao: "Uma cena"
      },
      {
        nivel: 2,
        amalgama: null,
        nome: "Trabalho Acelerado",
        resumo: "O vampiro realiza tarefas demoradas com velocidade cegante — dedos e mãos borram enquanto escreve, conserta ou constrói em tempo recorde.",
        custo: "Uma Checagem de Sangue",
        dados: "N/A",
        resist: "—",
        mecanica: "Quando ativo, o vampiro completa tarefas relacionadas a Perícias que levariam turnos inteiros em questão de segundos, podendo tratar uma ação completa como ação menor (ver p. 298 do corebook). Não pode ser usado para acelerar ataques, defesas ou qualquer tarefa ativamente resistida — mas permite, por exemplo, arrombar uma fechadura e ainda disparar uma arma (com penalidade de −2 dados para a segunda ação).",
        duracao: "Uma cena"
      },

      // NÍVEL 3
      {
        nivel: 3,
        amalgama: null,
        nome: "Piscar",
        resumo: "O vampiro avança sobre um inimigo em linha reta, cobrindo qualquer distância até 50 metros em um piscar de olhos — para observadores despreparados, parece teletransporte.",
        custo: "Uma Checagem de Sangue",
        dados: "Destreza + Atletismo (ou conforme necessário)",
        resist: "—",
        mecanica: "O vampiro move-se em linha reta até 50 m e ainda tem tempo de agir (ex.: atacar) no mesmo turno. Se o terreno for perigoso, requer Destreza + Atletismo para não tropeçar. Vampiros que usam Piscar para engajar agem como se já estivessem em contato ao início do turno. O Narrador pode chamar outras disputas conforme necessário.",
        duracao: "Um turno"
      },
      {
        nivel: 3,
        amalgama: null,
        nome: "Travessia",
        resumo: "Com velocidade ofuscante, o vampiro corre ou escala qualquer superfície — inclusive paredes verticais e, por distância limitada, sobre a água.",
        custo: "Uma Checagem de Sangue",
        dados: "Destreza + Atletismo",
        resist: "—",
        mecanica: "Destreza + Atletismo contra Dificuldade 3 (superfície inclinada com tração) até 6 (superfície vertical escorregadia, água aberta). Cada ponto de margem avança o vampiro mais longe; margem 0 alcança um alvo próximo. Regra geral: mais de 60 m sobre água ou mais de 30 andares provavelmente excede o alcance do poder.",
        duracao: "Um turno"
      },
      {
        nivel: 3,
        amalgama: null,
        nome: "Tecer",
        resumo: "O vampiro move-se rápido o bastante para perceber projéteis — facas, flechas ou balas — como objetos lentos e desviá-los à vontade.",
        custo: "Uma Checagem de Sangue",
        dados: "N/A",
        resist: "—",
        mecanica: "Pré-requisito: Reflexos Rápidos. O usuário não sofre diminuição de dados ao se defender de múltiplos ataques à distância com Destreza + Atletismo. Também pode adicionar seu nível de Celeridade a todas essas tentativas enquanto o poder está ativo.",
        duracao: "Uma cena"
      },

      // NÍVEL 4
      {
        nivel: 4,
        amalgama: null,
        nome: "Draught de Elegância",
        resumo: "O Sangue do vampiro fica saturado com o poder da Celeridade, transferindo parte desse poder a quem beber diretamente de suas veias.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Beber um volume de Sangue equivalente a uma Checagem de Sangue diretamente do usuário concede ao bebedor Celeridade temporária igual a metade dos pontos de Celeridade do doador (arredondado para baixo), incluindo os mesmos poderes não-Amalgama até esse nível.",
        duracao: "Uma noite; para vampiros, até a próxima alimentação ou ao atingir Fome 5"
      },
      {
        nivel: 4,
        amalgama: null,
        nome: "Momentum Desfocado",
        resumo: "O movimento do vampiro torna-se um borrão inquieto, tornando extremamente difícil atingi-lo — mesmo quando não está atento ao oponente ou se defendendo ativamente.",
        custo: "Uma Checagem de Sangue por turno",
        dados: "N/A",
        resist: "—",
        mecanica: "Ataques que obtêm menos sucessos do que o nível de Celeridade do usuário sempre erram, independentemente do resultado de qualquer teste de defesa ou esquiva (se houver). Funciona também contra ataques-surpresa ou outros ataques que normalmente não permitem defesa, como Golpe Relâmpago. Ativar exige uma Checagem de Sangue; manter ativo exige uma Jogada adicional por turno.",
        duracao: "Até o usuário deixar expirar"
      },
      {
        nivel: 4,
        amalgama: "Auspício 2",
        nome: "Pontaria Infalível",
        resumo: "O mundo ao redor parece desacelerar e o vampiro pode mirar e disparar qualquer arma como se o alvo estivesse completamente parado.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Use antes de fazer um ataque à distância. O alvo não rola para esquivar ou se defender; faça o ataque contra Dificuldade 1. Um oponente com Celeridade 5 pode anular este poder fazendo sua própria Checagem de Sangue, defendendo-se à mesma velocidade.",
        duracao: "Um único ataque"
      },

      // NÍVEL 5
      {
        nivel: 5,
        amalgama: null,
        nome: "Golpe Relâmpago",
        resumo: "Mais rápido do que os olhos podem acompanhar, o vampiro atinge com punho ou arma branca de modo que o oponente não consegue se defender nem esquivar.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Use antes de fazer um ataque de Briga ou Armas Brancas. O oponente não rola para esquivar ou se defender; faça o ataque contra Dificuldade 1. Um oponente com Celeridade 5 pode anular este poder fazendo sua própria Checagem de Sangue, defendendo-se à mesma velocidade.",
        duracao: "Um único ataque"
      },
      {
        nivel: 5,
        amalgama: null,
        nome: "Fração de Segundo",
        resumo: "A velocidade do vampiro se iguala à sua percepção sobrecarregada, permitindo-lhe reagir a eventos ao redor num piscar de olho — armadilhas são burladas antes mesmo de se armarem.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "O jogador pode sobrescrever a narração do Narrador, dentro do razoável. Pode fazer o personagem atravessar uma porta antes que ela feche, contornar uma emboscada após ela ser ativada, rolar para fora de uma explosão etc. A ação deve ser razoável e não levar mais que alguns segundos em tempo real. O Narrador decide quais Perícias, se houver, precisam ser testadas para concluir a ação.",
        duracao: "Aproximadamente uma ação, a critério do Narrador"
      },
      {
        nivel: 5,
        amalgama: "Ofuscação 4",
        nome: "Golpe Invisível",
        resumo: "Este poder letal combina Piscar e elementos de Desaparecer de Ofuscação — o vampiro some à vista e surge instantaneamente atrás do inimigo para desferir um golpe fatal.",
        custo: "Duas Checagens de Sangue",
        dados: "Destreza + Celeridade vs. Raciocínio + Percepção",
        resist: "Raciocínio + Percepção",
        mecanica: "Pré-requisito: Piscar. Combina Piscar com elementos do poder Desaparecer de Ofuscação. Para os observadores o vampiro parece sumir; o alvo é pego de surpresa (ataque-surpresa). A menos que a vítima vença Raciocínio + Percepção contra Destreza + Celeridade do usuário, ela não pode se defender e o ataque é feito contra Dificuldade 1. Se o atacante falhar no teste, ainda realiza um ataque normal como Piscar. Sujeito às mesmas restrições de movimento de Piscar.",
        duracao: "Um turno"
      }
    ]
  },

  // ─────────────────────────────────────────────
  // DOMINAÇÃO
  // ─────────────────────────────────────────────
  dominacao: {
    descricao: "Dominação concede ao vampiro controle sobre ações e memórias alheias, forçando criaturas vivas a atos que jamais realizariam por vontade própria. É a Besta em sua forma mais cruel e controladora.",
    habilidades: [

      // NÍVEL 1
      {
        nivel: 1,
        amalgama: null,
        nome: "Nublar a Memória",
        resumo: "Com a palavra 'Esqueça!', o vampiro faz a vítima Dominada apagar o momento atual e os últimos minutos — suficiente para encobrir uma alimentação superficial.",
        custo: "Grátis",
        dados: "Carisma + Dominação vs. Raciocínio + Determinação",
        resist: "Raciocínio + Determinação",
        mecanica: "Sem teste contra mortal despreparado. Contra vítima resistindo ou outro vampiro, jogue Carisma + Dominação vs. Raciocínio + Determinação. Nenhuma nova memória é formada; pressionada, a vítima percebe que lhe faltam alguns minutos.",
        duracao: "Indefinida"
      },
      {
        nivel: 1,
        amalgama: null,
        nome: "Compelir",
        resumo: "Com contato visual, o vampiro emite um comando único e breve — não mais que uma frase curta — que deve ser cumprido à risca no mesmo turno.",
        custo: "Grátis",
        dados: "Carisma + Dominação vs. Inteligência + Determinação",
        resist: "Inteligência + Determinação",
        mecanica: "Sem teste contra mortal despreparado. Exige disputa contra vítima resistindo, vítima já Dominada na mesma cena, outro vampiro ou se o comando vai contra a natureza da vítima. O Narrador pode interpretar comandos ambíguos de forma inesperada ou desfavorável; alternativamente, o comando confunde a vítima e falha. Comandos que resultam em morte ou dano grave óbvio falham automaticamente (a menos que Terminal Decretado esteja ativo).",
        duracao: "Não mais que uma cena"
      },
      {
        nivel: 1,
        amalgama: "Fortitude 1",
        nome: "Devoção Servil",
        resumo: "Quem já está sob o domínio mental do vampiro tem a mente fortalecida contra interferências de outros Cainitas.",
        custo: "Sem custo adicional",
        dados: "—",
        resist: "—",
        mecanica: "Qualquer tentativa de terceiros de usar Dominação em um personagem que já está sob a influência da Dominação do vampiro sofre uma penalidade de dados igual ao nível de Fortitude do vampiro.",
        duracao: "Passiva"
      },

      // NÍVEL 2
      {
        nivel: 2,
        amalgama: null,
        nome: "Mesmerizar",
        resumo: "O vampiro emite comandos complexos à vítima, exigindo silêncio relativo e contato visual; as instruções devem ser executadas imediatamente e sem condicionais.",
        custo: "Uma Checagem de Sangue",
        dados: "Manipulação + Dominação vs. Inteligência + Determinação",
        resist: "Inteligência + Determinação",
        mecanica: "Sem teste contra mortal despreparado. Exige disputa contra vítima resistindo ou outro vampiro. Comandos contra a natureza da vítima também exigem disputa. As instruções devem ser executadas imediatamente — nenhuma condicional (ex.: 'se você ver Henrique, entregue o documento') pois isso exigiria cognição.",
        duracao: "Até o comando ser cumprido ou a cena terminar (o que vier primeiro)"
      },
      {
        nivel: 2,
        amalgama: "Ofuscação 2",
        nome: "Dementação",
        resumo: "Escondida entre linhas e inflexões de uma conversa casual, a influência do vampiro faz a vítima aflorar seus demônios internos — levando-a à agitação crescente e eventual colapso.",
        custo: "Uma Checagem de Sangue por cena",
        dados: "Manipulação + Dominação vs. Autocontrole + Inteligência",
        resist: "Autocontrole + Inteligência",
        mecanica: "Após engajar-se em conversa com a vítima, o usuário ativa o poder. Pela cena, pode atacar um único indivíduo por turno em uma disputa de Manipulação + Dominação vs. Autocontrole + Inteligência, causando dano Superficial de Vontade. Um mortal que fica Comprometido por este poder sofre um colapso nervoso ou episódio psicótico (forma determinada pela Ressonância, a critério do Narrador). Um vampiro que fica Comprometido deve imediatamente sucumbir a uma Compulsão escolhida pelo usuário do poder. Para afetar múltiplas vítimas, é necessária uma Checagem de Sangue separada para cada uma.",
        duracao: "Uma cena"
      },
      {
        nivel: 2,
        amalgama: "Fortitude 1",
        nome: "Favor do Dominador",
        resumo: "Enquanto condicionado com o Favor do Dominador, um servo com Laço de Sangue acha muito mais difícil agir contra seu mestre.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Jogadas de Defiance de servos voluntariosos sob efeito do Favor do Dominador são feitas com penalidade de −3 dados, e os servos não podem gastar Vontade nelas. Além disso, falha total em uma jogada de Defiance significa que o Laço de Sangue não enfraquece naquele mês.",
        duracao: "Um mês"
      },

      // NÍVEL 3
      {
        nivel: 3,
        amalgama: null,
        nome: "A Mente Esquecida",
        resumo: "O vampiro reescreve faixas inteiras de memória da vítima, descrevendo verbalmente as novas lembranças enquanto mantém contato visual e atenção ininterruptos.",
        custo: "Uma Checagem de Sangue",
        dados: "Manipulação + Dominação vs. Inteligência + Determinação",
        resist: "Inteligência + Determinação",
        mecanica: "O usuário joga uma disputa. Cada ponto de margem permite adicionar ou remover uma memória adicional. A vítima recorda as edições vagamente — pensamentos nebulosos que se desfazem sob questionamento próximo. Vitória crítica: cria uma impressão perfeita, tão real quanto qualquer memória verdadeira. O poder não permite investigar as memórias verdadeiras da vítima — é como pintar cegamente sobre uma tela.",
        duracao: "Indefinida"
      },

      // NÍVEL 4
      {
        nivel: 4,
        amalgama: null,
        nome: "Racionalizar",
        resumo: "As vítimas agora acreditam que tudo o que fizeram sob influência da Dominação foi por vontade própria e defendem essas ações com convicção.",
        custo: "Sem custo adicional",
        dados: "—",
        resist: "Raciocínio + Percepção (Dificuldade 5, para a vítima questionar a si mesma)",
        mecanica: "Se pressionada sobre suas crenças, a vítima pode fazer um teste de Raciocínio + Percepção (Dificuldade 5). Uma vitória a faz questionar sua própria declaração — e talvez sua sanidade. Exposição prolongada a este poder pode causar trauma mental severo.",
        duracao: "Indefinida"
      },
      {
        nivel: 4,
        amalgama: null,
        nome: "Diretiva Submersa",
        resumo: "Ao usar Mesmerizar, o vampiro implanta uma sugestão pós-hipnótica que permanece dormente até um estímulo específico ocorrer — pode jamais expirar.",
        custo: "Sem custo adicional",
        dados: "—",
        resist: "—",
        mecanica: "Funciona como Mesmerizar, embora o Narrador possa querer fazer as jogadas secretamente. Não há como saber se a sugestão funcionou até as condições serem satisfeitas. O estímulo pode ser uma data específica, uma pessoa, uma frase ouvida etc. Só pode haver uma sugestão ativa por vítima.",
        duracao: "Passiva (sem expiração)"
      },
      {
        nivel: 4,
        amalgama: "Feitiçaria de Sangue 2",
        nome: "Domínio Ancestral",
        resumo: "Vampiros de grande idade e potência exertem sua vontade pelo próprio Sangue, sem precisar de contato visual ou comunicação verbal — compelindo um descendente a agir em seu nome.",
        custo: "Uma Checagem de Sangue",
        dados: "Manipulação + Dominação vs. Determinação + Ocultismo",
        resist: "Determinação + Ocultismo",
        mecanica: "Pré-requisito: Mesmerizar. Numa disputa bem-sucedida, a vítima cumpre a solicitação desde que não implique auto-dano. Para cada geração que separa o usuário de seu alvo, o vampiro resistindo ganha um dado adicional. Vampiros instintivamente sabem que um ancestral os está manipulando. Não exige contato visual nem comando verbal, mas está sujeito a todas as demais limitações de Dominação.",
        duracao: "Até o comando ser cumprido ou a cena terminar (o que vier primeiro)"
      },
      {
        nivel: 4,
        amalgama: "Presença 1",
        nome: "Implantar Sugestão",
        resumo: "O vampiro altera a própria personalidade ou opiniões do sujeito temporariamente — fazendo-o desejar um estranho, abandonar sua família, desconfiar de suas próprias crenças, ou simplesmente querer uma cerveja.",
        custo: "Uma Checagem de Sangue",
        dados: "Manipulação + Dominação vs. Autocontrole + Determinação",
        resist: "Autocontrole + Determinação",
        mecanica: "Sem teste contra mortal despreparado. Mortal preparado ou vampiro requer disputa de Manipulação + Dominação vs. Autocontrole + Determinação. Mudanças radicais nas crenças centrais (ex.: fazer um pacifista se tornar violento) também merecem resistência, mesmo de mortais despreparados. A sugestão dura uma cena, após a qual a vítima sai do estado.",
        duracao: "Uma cena"
      },

      // NÍVEL 5
      {
        nivel: 5,
        amalgama: null,
        nome: "Manipulação em Massa",
        resumo: "O vampiro comanda agora grupos inteiros de mortais — e em alguns casos até grupos de vampiros — emitindo instruções ou manipulando memórias de todos ao mesmo tempo.",
        custo: "Uma Checagem de Sangue adicional ao custo do poder amplificado",
        dados: "—",
        resist: "—",
        mecanica: "O vampiro pode amplificar qualquer um de seus outros poderes para afetar um grupo de pessoas (mortais ou vampiros) ao mesmo tempo. Todas as vítimas precisam ver os olhos do usuário. O usuário faz qualquer jogada necessária apenas uma vez — contra o oponente mais forte do grupo.",
        duracao: "Conforme o poder amplificado"
      },
      {
        nivel: 5,
        amalgama: null,
        nome: "Decreto Terminal",
        resumo: "O vampiro não está mais limitado pelo instinto de autopreservação das vítimas — pode agora emitir comandos que levam diretamente à morte ou ferimento grave do alvo.",
        custo: "Sem custo adicional de Fome; o custo de Humanidade pode ser severo",
        dados: "—",
        resist: "—",
        mecanica: "Comandos terminais agora devem ser resistidos (ver poderes individuais para as jogadas envolvidas), em vez de falhar automaticamente. Mortais podem ser ordenados a se suicidar, pular de telhados ou engolir veneno. Vampiros podem, com algum esforço, ser forçados a entrar no fogo ou na luz solar.",
        duracao: "Passiva"
      }
    ]
  },

  // ─────────────────────────────────────────────
  // FORTITUDE
  // ─────────────────────────────────────────────
  fortitude: {
    descricao: "Fortitude concede ao vampiro resistência sobre-humana a dano físico e mental. Poucos vampiros sobrevivem além de um século sem ao menos um traço dessa disciplina em um mundo onde a violência é comum e nem os Cainitas estão seguros.",
    habilidades: [

      // NÍVEL 1
      {
        nivel: 1,
        amalgama: null,
        nome: "Resiliência",
        resumo: "O vampiro é dotado de resistência sobrenatural, ampliando seu limiar de dano.",
        custo: "Grátis",
        dados: "—",
        resist: "—",
        mecanica: "O usuário adiciona seu nível de Fortitude à trilha de Saúde.",
        duracao: "Passiva"
      },
      {
        nivel: 1,
        amalgama: null,
        nome: "Mente Inabalável",
        resumo: "Uma capacidade mística de resistir a tentativas de influência — seja charme mundano, coerção ou poderes sobrenaturais como Dominação e Presença.",
        custo: "Grátis",
        dados: "—",
        resist: "—",
        mecanica: "O usuário adiciona seus pontos de Fortitude como dados extras em qualquer jogada para resistir a coerção, intimidação, sedução ou qualquer outra tentativa de dobrar sua mente contra sua vontade. Funciona também contra habilidades sobrenaturais como Dominação e Presença.",
        duracao: "Passiva"
      },

      // NÍVEL 2
      {
        nivel: 2,
        amalgama: null,
        nome: "Resistência",
        resumo: "O vampiro ignora danos que incapacitariam outros da sua espécie — embora não proteja contra banes ou dano Agravado.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Subtraia o nível de Fortitude do defensor de todo dano Superficial sofrido. Isso ocorre antes de dividir o dano pela metade e não pode reduzir o dano abaixo de 1.",
        duracao: "Uma cena"
      },
      {
        nivel: 2,
        amalgama: "Animali­smo 1",
        nome: "Feras Resistentes",
        resumo: "O vampiro compartilha um fragmento de sua resistência sobrenatural com os animais que influencia, tornando enxames e grandes bestas quase tão resistentes quanto ele próprio.",
        custo: "Grátis (fâmulo); Uma Checagem de Sangue (outros animais)",
        dados: "Vigor + Animalismo (para animais não-fâmulos, Dificuldade 3)",
        resist: "—",
        mecanica: "O vampiro estende seus poderes de Fortitude a animais afetados por seu Animalismo. Qualquer animal assim imbuído ganha pontos de Saúde adicionais iguais aos pontos de Fortitude do vampiro. Usar em fâmulo é gratuito e automático. Para outros animais, faça uma Checagem de Sangue e um teste de Vigor + Animalismo (Dificuldade 3); o usuário pode fortalecer um animal por ponto de margem. Quando o efeito termina, remove-se primeiro a Saúde não marcada — o que pode matar o animal.",
        duracao: "Uma cena"
      },
      {
        nivel: 2,
        amalgama: "Auspício 1",
        nome: "Vitalização da Cura",
        resumo: "O vampiro fortalece a capacidade do próprio Sangue de curar feridas mortais. Seres vivos que bebem seu vitae se recuperam com velocidade surpreendente.",
        custo: "Nenhum além das Checagens de Sangue para dar Sangue",
        dados: "N/A",
        resist: "—",
        mecanica: "Usar vitae para curar os vivos (ver p. 139 do corebook) cura 3 níveis de Dano Agravado por Checagem de Sangue em vez de apenas 1. Outros efeitos (tornar-se ghoul, risco de Laço de Sangue) permanecem inalterados.",
        duracao: "Passiva"
      },
      {
        nivel: 2,
        amalgama: null,
        nome: "Perseverança da Terra",
        resumo: "Quase impossível de mover quando ativo — o vampiro extrai força da terra, enraizando-se no lugar.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Quando ativo, a única maneira de o vampiro se mover é por vontade própria. Isso não o torna resistente a dano — ainda pode ser esmagado, despedaçado ou destruído, assim como o chão sob seus pés.",
        duracao: "Uma cena ou até o usuário optar por encerrar"
      },

      // NÍVEL 3
      {
        nivel: 3,
        amalgama: null,
        nome: "Desafiar o Bane",
        resumo: "O vampiro se prepara para resistir temporariamente a fogo e luz solar, além de outros ferimentos graves que ameaçariam a Morte Final.",
        custo: "Uma Checagem de Sangue",
        dados: "Raciocínio + Sobrevivência (para ativar reflexivamente)",
        resist: "—",
        mecanica: "O usuário pode converter um número de danos Agravados sofridos igual ao seu nível de Fortitude em dano Superficial durante a cena. Não pode curar esse dano Superficial pelo resto da cena. O poder converte um número de danos por cena, não por ferida ou ataque. Pode ser renovado com outra Checagem de Sangue. Se surpreendido, pode ativar reflexivamente com Raciocínio + Sobrevivência (Dificuldade 3) ao receber dano Agravado — falha: não ativa; sucesso: deve fazer uma Checagem de Sangue para pagar o custo.",
        duracao: "Uma cena ou até expirar (o que vier primeiro)"
      },
      {
        nivel: 3,
        amalgama: null,
        nome: "Fortalecer a Fachada Interior",
        resumo: "Em vez de endurecer o corpo, este poder protege os pensamentos e emoções do vampiro contra bisbilhotice sobrenatural — sua mente parece completamente em branco e sua aura, plana.",
        custo: "Grátis",
        dados: "—",
        resist: "—",
        mecanica: "Aumenta a Dificuldade de usar Sondar a Alma (Auspício 3), Telepatia (Auspício 5) e poderes similares no usuário em metade do nível de Fortitude (arredondado para cima). Se as regras permitirem ao usuário resistir a esses poderes, ele adiciona seu nível de Fortitude à pool em vez disso.",
        duracao: "Uma cena"
      },
      {
        nivel: 3,
        amalgama: "Auspício 1",
        nome: "Valeren",
        resumo: "O vampiro projeta sua Fortitude para fora, usando o poder do próprio Sangue para curar as feridas de outro vampiro.",
        custo: "Uma Checagem de Sangue (+ Saúde adicional conforme as circunstâncias)",
        dados: "Inteligência + Fortitude (Dificuldade 2)",
        resist: "—",
        mecanica: "O vampiro joga Inteligência + Fortitude contra Dificuldade 2 e cura níveis de dano Superficial de Saúde iguais à margem. Alternativamente, cura 1 nível de dano Agravado de Saúde a cada 3 sucessos na margem. O uso leva um turno inteiro; passar a cena inteira reduz a Dificuldade para 0. Não pode ser usado em si mesmo; só funciona em vampiros. Um sujeito só pode ser afetado uma vez por noite. Curar mais de um sujeito por noite causa ao usuário dano Superficial de Saúde igual a metade dos sucessos da margem para cada sujeito adicional.",
        duracao: "N/A"
      },

      // NÍVEL 4
      {
        nivel: 4,
        amalgama: null,
        nome: "Draught de Resistência",
        resumo: "O Sangue do vampiro fica saturado com o poder da Fortitude, transferindo parte desse poder a quem beber diretamente de suas veias.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Beber um volume de Sangue equivalente a uma Checagem de Sangue diretamente do usuário concede ao bebedor Fortitude temporária igual a metade dos pontos de Fortitude do doador (arredondado para baixo), incluindo os mesmos poderes até esse nível.",
        duracao: "Uma noite; para vampiros, até a próxima alimentação ou ao atingir Fome 5"
      },
      {
        nivel: 4,
        amalgama: null,
        nome: "Escamas de Górgona",
        resumo: "A Ressonância do sangue no sistema do vampiro concede defesas variadas contra poderes de outros Cainitas ou protege contra fraquezas comuns dos vampiros.",
        custo: "Uma Checagem de Sangue",
        dados: "N/A",
        resist: "—",
        mecanica: "Na ativação, o vampiro ganha imunidades ou resistências dependendo da Ressonância do sangue da última refeição: Colérico: uma estaca cravada no coração se decompõe ou vira cinzas ao fim da cena, libertando imediatamente o vampiro da paralisia (a Ressonância é perdida); Melancólico: dano Agravado de Saúde causado por fogo é reduzido para Superficial (a Ressonância é perdida após reduzir 4 níveis de dano); Fleumático: o vampiro ganha +4 dados para resistir a poderes de Auspício que revelariam algo sobre ele ou seu conhecimento (dura uma cena, Ressonância perdida); Sanguíneo: dano Agravado de Saúde causado por luz solar é reduzido para Superficial (a Ressonância é perdida após reduzir 4 níveis de dano).",
        duracao: "Até a cena terminar ou a Ressonância ser consumida (o que vier primeiro)"
      },

      // NÍVEL 5
      {
        nivel: 5,
        amalgama: null,
        nome: "Carne de Mármore",
        resumo: "O Sangue faz a pele do vampiro endurecer com brilho marmóreo — ainda flexível mas capaz de parar quase qualquer golpe antes de quebrar e se reformar.",
        custo: "Duas Checagens de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Com este poder ativo, o vampiro ignora a primeira fonte de dano físico em cada turno — incluindo fogo, mas não luz solar. Se houver dúvida sobre qual fonte é 'a primeira', o Narrador decide pela narrativa ou o vampiro ignora a fonte mais danosa do turno. Uma vitória crítica em uma jogada de ataque ignora este poder.",
        duracao: "Uma cena"
      },
      {
        nivel: 5,
        amalgama: null,
        nome: "Força da Dor",
        resumo: "Ferimentos e impairments agora apenas alimentam os poderes do vampiro — quanto mais machucado, mais forte e veloz se torna.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Ao ativar o poder, o vampiro não sofre mais penalidades de dados por dano de Saúde sofrido (como Comprometimento físico). Além disso, pode aumentar em 1 ponto um Atributo Físico (atributos derivados não são afetados) para cada nível de dano na trilha de Saúde — Agravado ou Superficial. Os Atributos do usuário não podem exceder um valor igual ao seu Surto de Sangue + 6 por meio desta habilidade.",
        duracao: "Uma cena"
      }
    ]
  },

  // ─────────────────────────────────────────────
  // FEITIÇARIA DE SANGUE
  // ─────────────────────────────────────────────
  feiticaria: {
    descricao: "Feitiçaria de Sangue — ou 'Taumaturgia' para os Tremere, 'Quietus' para os Banu Haqim — torna o próprio vitae em arma, veneno, ácido ou ferramenta mágica. É a única Disciplina que também desbloqueia a capacidade de realizar Rituais.",
    habilidades: [

      // NÍVEL 1
      {
        nivel: 1,
        amalgama: null,
        nome: "Vitae Corrosivo",
        resumo: "O vampiro altera as propriedades de parte do seu Sangue, tornando-o altamente corrosivo a substâncias mortas — capaz de dissolver a maioria dos objetos até virar fumaça com tempo e Sangue suficientes.",
        custo: "Uma ou mais Checagens de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Sem teste adicional. O usuário concentra-se por um turno e força Sangue através de um ferimento aberto (geralmente autoinfligido). Derrama então o Sangue sobre um objeto não-vivo (exceto carne não-viva de Cainitas) para corrodi-lo. Cada Checagem de Sangue corrói aproximadamente 35 cm de matéria em todas as direções a partir do ponto de contato (leva cerca de 5 minutos; mais tempo em metais macios como cobre ou ferro fundido). Metais mais duros como ligas e aço apenas ficam marcados e deformados — se isso os enfraquece significativamente é a critério do Narrador.",
        duracao: "N/A"
      },
      {
        nivel: 1,
        amalgama: null,
        nome: "Sabor do Sangue",
        resumo: "Ao provar uma gota de sangue, o usuário descobre traços básicos de quem lhe pertence — Ressonância, tipo de criatura e potência.",
        custo: "Grátis",
        dados: "Determinação + Feitiçaria de Sangue (Dificuldade 3)",
        resist: "—",
        mecanica: "O usuário esfrega o sangue na língua e faz o teste. Com vitória: determina a Ressonância e intensidade do sangue humano, e identifica se pertence a mortal, ghoul, vampiro ou outra criatura sobrenatural. Provar vitae também determina o Potencial de Sangue relativo (e portanto a faixa geracional provável) do vampiro. Vitória crítica: revela se o sujeito já cometeu diablerie, e a geração exata (dentro de uma) do vampiro. Se o usuário conhece a criatura sobrenatural em questão, pode identificá-la especificamente com vitória crítica.",
        duracao: "N/A"
      },

      // NÍVEL 2
      {
        nivel: 2,
        amalgama: null,
        nome: "Extinguir o Vitae",
        resumo: "O usuário remove intencionalmente as propriedades vivificantes de parte do Sangue de outro vampiro — elevando sua Fome à medida que as reservas internas se solidificam em impotência.",
        custo: "Uma Checagem de Sangue",
        dados: "Inteligência + Feitiçaria de Sangue vs. Vigor + Autocontrole",
        resist: "Vigor + Autocontrole",
        mecanica: "O usuário joga uma disputa de Inteligência + Feitiçaria vs. Vigor + Autocontrole de um vampiro alvo em linha de visão enquanto se concentra por um turno e gesticula sutilmente. Vitória: aumenta a Fome do alvo em 1. Vitória crítica: aumenta em 2. A vítima pode discernir quem a está afligindo fazendo Inteligência + Ocultismo vs. Raciocínio + Subterfúgio (se puder ver o usuário).",
        duracao: "N/A"
      },
      {
        nivel: 2,
        amalgama: null,
        nome: "Vasculhar Segredos",
        resumo: "O Feiticeiro de Sangue libera riachos do próprio Sangue sintonizados para buscar informações sobre um assunto escolhido, varrendo vastas quantidades de texto em minutos.",
        custo: "Uma Checagem de Sangue",
        dados: "Inteligência + Feitiçaria de Sangue",
        resist: "—",
        mecanica: "O usuário faz uma Checagem de Sangue e testa Inteligência + Feitiçaria de Sangue contra Dificuldade definida pelo Narrador: de 2 para uma única carta em um escritório comum até 5 para informações cifradas em uma vasta biblioteca. Informações supernaturalmente ocultas aumentam ainda mais a Dificuldade. O tempo gasto depende do tamanho da área: um único cômodo pode ser vasculhado em minutos; uma biblioteca requer horas ou a noite inteira. O objeto vasculhado fica manchado de sangue depois. O poder não confere a capacidade de decifrar linguagens desconhecidas ou códigos. Se o conhecimento for em formatos não escritos (pinturas, músicas, disquetes antigos), funciona a critério do Narrador, com Dificuldade provavelmente maior.",
        duracao: "Uma noite ou até a informação ser encontrada (o que vier primeiro)"
      },

      // NÍVEL 3
      {
        nivel: 3,
        amalgama: null,
        nome: "Sangue de Potência",
        resumo: "O vampiro concentra seu Sangue, aumentando temporariamente seu Potencial de Sangue.",
        custo: "Uma Checagem de Sangue",
        dados: "Determinação + Feitiçaria de Sangue (Dificuldade 2 + Potencial de Sangue atual)",
        resist: "—",
        mecanica: "Vitória: aumenta o Potencial de Sangue em 1 pela cena. Vitória crítica: aumenta em 2. O vampiro pode usar este poder para exceder seu limite geracional de Potencial de Sangue durante a duração.",
        duracao: "Uma cena ou uma noite"
      },
      {
        nivel: 3,
        amalgama: null,
        nome: "Toque do Escorpião",
        resumo: "O vampiro transmuta parte do próprio Sangue em veneno paralisante capaz de afetar mortais e vampiros — pode revestir armas ou ser cuspido no alvo.",
        custo: "Uma ou mais Checagens de Sangue",
        dados: "Força + Feitiçaria de Sangue vs. Vigor + Ocultismo ou Fortitude",
        resist: "Vigor + Ocultismo (ou Vigor + Fortitude para vampiros com essa Disciplina)",
        mecanica: "Concentra-se por um turno e força Sangue através de um ferimento aberto. Cada Checagem de Sangue produz veneno suficiente para revestir uma arma cortante ou encher uma bocada para cuspir. Cuspir exige Destreza + Atletismo (pode ser esquivado como ataque à distância). Se atingir, jogue Força + Feitiçaria vs. Vigor + Ocultismo. Vitória: o veneno causa a margem em dano Agravado a mortais e dano Superficial não-dividido a vampiros. Um mortal que sofra ao menos 1 ponto de dano desmaia inconsciente. O veneno transmitido diretamente de veia a presas garante acerto automático! Não pode envenenar bebidas (dissolve-se em líquidos) nem ser injetado por mordida (diferença de pressão). Não pode ser usado com armas de fogo à distância. O veneno permanece potente por uma cena.",
        duracao: "O veneno permanece potente por uma cena"
      },

      // NÍVEL 4
      {
        nivel: 4,
        amalgama: null,
        nome: "Roubo de Vitae",
        resumo: "Por meios místicos, o vampiro abre um ferimento em uma artéria principal de uma vítima mortal, fazendo o sangue jorrar pelo ar diretamente até a boca aberta do usuário — mantendo a vítima subjugada como se sob o Beijo.",
        custo: "Uma Checagem de Sangue",
        dados: "Raciocínio + Feitiçaria de Sangue vs. Raciocínio + Ocultismo",
        resist: "Raciocínio + Ocultismo",
        mecanica: "O usuário faz um gesto de chamado em direção a uma vítima mortal em linha de visão e joga a disputa. Vitória: abre uma ferida arterial e o vampiro começa a se alimentar à distância. O usuário não pode fazer mais nada enquanto se alimenta, mas pode fazê-lo no dobro da velocidade normal (triplo com vitória crítica) graças à pressão sorceira. A ferida se fecha sozinha ao final, quer a vítima tenha morrido ou não. (Alvo com proteção corporal total como traje hazmat sangra estaticamente para dentro do traje.) Extremamente espetacular — potencial violação da Máscara enquanto em andamento.",
        duracao: "Uma alimentação"
      },
      {
        nivel: 4,
        amalgama: null,
        nome: "Égide de Sangue",
        resumo: "O vampiro força seu vitae a formar uma barreira física protetora — uma folha tremulante de Sangue que se move por conta própria para interceptar e absorver projéteis.",
        custo: "Uma ou mais Checagens de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "O usuário expende Sangue equivalente a uma ou mais Checagens de Sangue. Para cada Jogada, a barreira flutuante pode reduzir o dano de ataques à distância recebidos em 5. O efeito é automático: o vitae intercepta cada projétil numa chuva de sangue, se reformando enquanto o poder estiver ativo. Quando a proteção se esgota, o Sangue torna-se inerte espalhado pela área.",
        duracao: "Uma cena ou até os níveis de dano serem gastos (o que vier primeiro)"
      },

      // NÍVEL 5
      {
        nivel: 5,
        amalgama: null,
        nome: "Carícia de Baal",
        resumo: "O vampiro transmuta seu Sangue em veneno extremamente agressivo — letal para mortais e Cainitas igualmente.",
        custo: "Uma ou mais Checagens de Sangue",
        dados: "Força + Feitiçaria de Sangue vs. Vigor + Ocultismo ou Fortitude",
        resist: "Vigor + Ocultismo (ou Fortitude em vez de Ocultismo para vampiros)",
        mecanica: "Usa o mesmo sistema e restrições de Toque do Escorpião, com dano aumentado. Se atingir: jogue Força + Feitiçaria vs. Vigor + Ocultismo. Vitória: o veneno causa a margem em dano Agravado de Saúde a mortais e vampiros igualmente. Mortal com ao menos 1 ponto de dano morre instantaneamente. Se um vampiro alvo sofrer dano Agravado, jogue a disputa novamente; vitória coloca o vampiro em torpor na próxima vez em que dormir.",
        duracao: "O veneno permanece potente por uma cena"
      },
      {
        nivel: 5,
        amalgama: null,
        nome: "Caldeirão de Sangue",
        resumo: "Faz o sangue da vítima ferver dentro das próprias veias, causando dano massivo e dor excruciante com um toque.",
        custo: "Uma Checagem de Sangue + 1 (ou mais) Manchas",
        dados: "Determinação + Feitiçaria de Sangue vs. Autocontrole + Ocultismo ou Fortitude",
        resist: "Autocontrole + Ocultismo (ou Autocontrole + Fortitude para vampiros)",
        mecanica: "O usuário paga o custo e toca a vítima (Destreza + Atletismo em combate), jogando a disputa. Vitória: cada ponto de margem causa 1 ponto de dano Agravado à vítima. Mortais com ao menos 1 ponto de dano morrem gritando. Vampiros vítimas ganham 1 Fome por ponto de dano infligido, até Fome 5.",
        duracao: "Um turno"
      }
    ]
  },

  // ─────────────────────────────────────────────
  // OFUSCAÇÃO
  // ─────────────────────────────────────────────
  ofuscacao: {
    descricao: "Ofuscação funciona por meio de mesmerismo ambiente de baixo nível — observadores veem o vampiro mas suas mentes escolhem ignorá-lo. A ilusão falha se o vampiro forçar demais a situação ou se engajar em ação violenta.",
    habilidades: [

      // NÍVEL 1
      {
        nivel: 1,
        amalgama: null,
        nome: "Manto de Sombras",
        resumo: "Parado e em silêncio, o usuário se funde às sombras ao redor. Apenas meios mecânicos ou sobrenaturais podem detectá-lo enquanto não se mover.",
        custo: "Grátis",
        dados: "—",
        resist: "—",
        mecanica: "Siga as regras gerais de Ofuscação. O efeito dura até o usuário se mover ou ser detectado por outros meios. Requer algum tipo de cobertura visual.",
        duracao: "Uma cena"
      },
      {
        nivel: 1,
        amalgama: null,
        nome: "Silêncio da Morte",
        resumo: "Silencia completamente o usuário, anulando todos os sons produzidos por ele — popular entre os Banu Haqim.",
        custo: "Grátis",
        dados: "—",
        resist: "—",
        mecanica: "O usuário silencia seus passos, roupas, pequenas colisões e demais sons de sua pessoa. Torna o vampiro indetectável a observadores que só poderiam notá-lo pelo som (ex.: outro andar de uma casa). Não elimina sons que o usuário produz além de seu espaço pessoal (atirar ou derrubar objetos, bater portas etc.). Ao contrário de outras habilidades de Ofuscação, funciona somente para o sentido da audição — mas opera de forma mais robusta. Falha nisso: apenas Sentir o Invisível (Auspício 1) pode detectar o usuário.",
        duracao: "Uma cena"
      },

      // NÍVEL 2
      {
        nivel: 2,
        amalgama: null,
        nome: "Passagem Invisível",
        resumo: "O vampiro pode agora se mover enquanto permanece oculto — funcionalmente invisível dentro das limitações normais de Ofuscação.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Enquanto o usuário não emitir odores avassaladores e nenhum som além de um sussurro, o poder funciona automaticamente. Apenas se a atenção de um observador for diretamente atraída para o usuário é que ele pode tentar uma jogada de detecção. Não pode ser usado para desaparecer enquanto está sendo observado ativamente — falha automaticamente nesse caso. Sentir o Invisível (Auspício 1) também pode detectar o vampiro oculto.",
        duracao: "Uma cena ou até ser detectado"
      },
      {
        nivel: 2,
        amalgama: "Presença 1",
        nome: "Quimerstria",
        resumo: "O vampiro cria alucinações breves mas vívidas, distraindo e atraindo a atenção dos afetados — um único sentido de cada vez.",
        custo: "Uma Checagem de Sangue",
        dados: "Manipulação + Ofuscação vs. Autocontrole + Raciocínio",
        resist: "Autocontrole + Raciocínio",
        mecanica: "O vampiro joga Manipulação + Ofuscação. Todos despreparados e em linha de visão elegíveis a experimentar a alucinação ficam distraídos, perdendo 2 dados na próxima ação. Além disso, aqueles que falharem em Autocontrole + Raciocínio perdem sua próxima ação ativa (mas ainda podem se defender e resistir, com penalidade de −2 dados). Ao contrário de outros poderes de Presença, pode ser usado durante conflito físico como combate — mas alvos só podem ser afetados uma vez por conflito. A alucinação nunca pode ser gravada ou transmitida (ex.: via Fantasma na Máquina).",
        duracao: "Um turno"
      },

      // NÍVEL 3
      {
        nivel: 3,
        amalgama: null,
        nome: "Fantasma na Máquina",
        resumo: "O usuário pode transmitir os efeitos de Ofuscação através de mídia eletrônica, aparecendo invisível ou mascarado em transmissões ao vivo.",
        custo: "Sem custo adicional",
        dados: "—",
        resist: "—",
        mecanica: "Nenhuma jogada adicional ao ser visualizado em transmissão ao vivo — observadores são tratados como se estivessem presentes. O observador adiciona +3 à sua Dificuldade em testes para identificar o usuário em filme, vídeo, fotos ou similares tirados durante Ofuscação ativa. O usuário também ganha 3 dados extras em pools usadas para contornar vigilância eletrônica automatizada.",
        duracao: "Conforme o poder usado"
      },
      {
        nivel: 3,
        amalgama: null,
        nome: "Máscara dos Mil Rostos",
        resumo: "Em vez de desaparecer, o vampiro passa a parecer um desconhecido discreto — alguém esperado a estar na área — permitindo interação social sem levantar suspeitas.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Sem teste. Qualquer um que veja o vampiro enxerga um rosto anônimo e inesquecível do mesmo gênero e estatura aproximada. As roupas assumem a blandeza adequada ao ambiente. Não fornece identificação específica nem enganar verificações de identidade. Não funciona contra pessoas que não esperariam ver ninguém ou que seriam hostis a qualquer desconhecido. Sentir o Invisível (Auspício 1) pode romper o poder normalmente.",
        duracao: "Uma cena"
      },
      {
        nivel: 3,
        amalgama: "Presença 2",
        nome: "Fata Morgana",
        resumo: "O vampiro cria alucinações elaboradas que afetam qualquer sentido — todos ao alcance veem, ouvem e sentem o que o usuário imaginar.",
        custo: "Uma Checagem de Sangue",
        dados: "Manipulação + Ofuscação",
        resist: "Inteligência + Percepção (vs. Manipulação + Presença para desacreditar)",
        mecanica: "Jogue Manipulação + Ofuscação contra Dificuldade igual a 1 mais o número de sentidos que a alucinação visa (alucinação audio-visual = Dificuldade 3; experiência de cinco sentidos = 6). Alucinações visuais pequenas/discretas são mais fáceis; tamanho de cômodo aumenta a Dificuldade em 1; tamanho de casa em 2; e assim por diante. Não há limite de vítimas simultâneas, mas o alvo deve conseguir ver o usuário (ou vice-versa). Vampiros e sobrenaturais podem tentar não acreditar (Inteligência + Percepção vs. Manipulação + Presença). Qualquer tentativa de interagir com a alucinação a rompe para todos. Os efeitos NÃO podem bloquear linha de visão, cegar, ensurdecer, causar dano físico real, ser gravados por câmeras, nem ocorrer fora das leis físicas aparentes do ambiente. Alucinações que poderiam causar Frenesi aplicam o mesmo teste com Dificuldade 1 mais baixa que o real.",
        duracao: "Uma cena, a menos que o vampiro opte por encerrá-la antes"
      },
      {
        nivel: 3,
        amalgama: "Dominação 1",
        nome: "Labirinto Mental",
        resumo: "Remove todo senso de direção e localização de uma vítima, aprisionando-a efetivamente em seu ambiente atual — seja uma casa, uma boate ou o porão do vampiro.",
        custo: "Uma ou Três Checagens de Sangue",
        dados: "Carisma + Ofuscação vs. Raciocínio + Determinação",
        resist: "Raciocínio + Determinação",
        mecanica: "O vampiro estabelece contato visual e joga a disputa (vampiros de geração mais baixa podem negar com Vontade como em Dominação). Vitória: a vítima encontra dificuldade em sair do prédio onde está. Duas Checagens de Sangue adicionais permitem usar o poder em um único cômodo ou ambiente externo denso (canteiro de obras, floresta). Mortais não podem tentar escapar. Criaturas sobrenaturais podem fazer Determinação + Percepção por cena usando os sucessos iniciais do vampiro como Dificuldade, sofrendo 1 ponto de dano Superficial de Vontade por sucesso faltante. Esse teste não pode se beneficiar de Trabalho em Equipe. O poder termina se o ambiente se tornar perigoso (ex.: pega fogo), a menos que o vampiro tenha Terminal Decretado.",
        duracao: "Uma noite"
      },
      {
        nivel: 3,
        amalgama: "Dominação 2",
        nome: "Máscara Mental",
        resumo: "O vampiro cria a ilusão de uma persona completamente diferente, ocultando seus verdadeiros pensamentos e sentimentos de qualquer um que use poderes sobrenaturais para ler sua mente, aura ou estado mental.",
        custo: "Uma Checagem de Sangue",
        dados: "Inteligência + Ofuscação",
        resist: "—",
        mecanica: "O usuário joga Inteligência + Ofuscação contra Dificuldade de 1 a 3 (ou mais), dependendo da sofisticação do disfarce: 1 representa simples mascaramento do estado emocional; 3 ou mais cria personas alternativas elaboradas com pensamentos e memórias falsas. A margem da vitória é adicionada como Dificuldade a qualquer tentativa de 'ler' o usuário. Falhar em atingir a Dificuldade adicional faz o leitor ver apenas a personalidade falsa criada pelo usuário, sem qualquer indício de que está sendo enganado.",
        duracao: "Uma cena"
      },

      // NÍVEL 4
      {
        nivel: 4,
        amalgama: "Auspício 3",
        nome: "Ocultar",
        resumo: "Oculta um objeto inanimado — uma porta, um carro ou uma pequena casa — criando um efeito hipnótico duradouro que faz as pessoas simplesmente ignorá-lo.",
        custo: "Uma Checagem de Sangue",
        dados: "Inteligência + Ofuscação",
        resist: "Raciocínio + Auspício vs. Inteligência + Ofuscação do usuário (para detectar com Sentir o Invisível)",
        mecanica: "O vampiro toca o objeto e joga Inteligência + Ofuscação contra Dificuldade 2 (ocultar um anel em gaveta cheia de bijuterias) até 6 (ocultar uma casa no meio de uma praça aberta), conforme tamanho e localização do alvo. O poder dura uma noite; cada ponto de margem oculta o objeto por uma noite adicional. Também oculta qualquer pessoa ou coisa dentro do objeto (ex.: pessoas em um carro ou galpão) enquanto o observador permanecer do lado de fora. Não funciona em objetos maiores que uma casa de dois andares ou em qualquer objeto em movimento por meios próprios (como um carro em movimento).",
        duracao: "Uma noite + uma noite por ponto de margem"
      },
      {
        nivel: 4,
        amalgama: null,
        nome: "Desaparecer",
        resumo: "O vampiro pode ativar Manto de Sombras e Passagem Invisível mesmo sob observação direta — parecendo sumir num piscar de olhos, com até a memória tornando-se vaga e indistinta.",
        custo: "Conforme o poder aumentado",
        dados: "Raciocínio + Ofuscação vs. Raciocínio + Percepção",
        resist: "Raciocínio + Percepção",
        mecanica: "Pré-requisito: Manto de Sombras. Ao desaparecer na frente de um mortal, jogue Raciocínio + Ofuscação vs. Raciocínio + Percepção. Vitória: o observador questiona se o vampiro esteve lá; sua memória fica turva sobre o assunto. Vitória crítica: o vampiro desaparece completamente da memória do observador. Não afeta memórias de vampiros, mas qualquer vitória os oculta como se tivessem ativado o poder sem ser observados. Só pode ser usado uma vez por cena.",
        duracao: "Conforme o poder aumentado"
      },

      // NÍVEL 5
      {
        nivel: 5,
        amalgama: null,
        nome: "Ocultar o Bando",
        resumo: "O vampiro estende o manto de Ofuscação sobre companheiros, ocultando um grupo inteiro.",
        custo: "Uma Checagem de Sangue além do custo do poder estendido",
        dados: "—",
        resist: "—",
        mecanica: "O vampiro pode estender seu poder de Ofuscação a um número de sujeitos adicionais disposto a participar igual ao seu nível de Raciocínio, mais um para cada Checagem de Sangue adicional realizada. O poder de Ofuscação usado pode ser qualquer um que o usuário conheça; todos os membros do grupo contam como tendo usado por conta própria, usando o nível de Ofuscação do vampiro ocultante quando necessário. Membros do grupo ainda percebem uns aos outros. Se qualquer membro (exceto o usuário) for revelado, o resto permanece oculto. Se o usuário for revelado, todos são revelados.",
        duracao: "Conforme o poder estendido"
      },
      {
        nivel: 5,
        amalgama: null,
        nome: "Guisa do Impostor",
        resumo: "Com preparação cuidadosa, o vampiro pode parecer um indivíduo específico de qualquer estatura e gênero — incluindo voz e maneirismos.",
        custo: "Uma Checagem de Sangue",
        dados: "Raciocínio + Ofuscação / Manipulação + Performance",
        resist: "—",
        mecanica: "Pré-requisito: Máscara dos Mil Rostos. O usuário deve estudar o rosto a ser copiado por pelo menos 5 minutos, de diferentes ângulos. Mais 10 minutos de observação são necessários para imitar voz e maneirismos. O Narrador faz um teste oculto de Raciocínio + Ofuscação (Dificuldade 4). Falha: a semelhança é pouco convincente e qualquer pessoa próxima ao alvo imitado percebe algo errado automaticamente. Vitória: ilusão convincente, mas o usuário deve fazer Manipulação + Performance para imitar fala e maneirismos. Vitória crítica: ilusão perfeita, sem teste adicional necessário. Sentir o Invisível (Auspício 1) pode romper a máscara.",
        duracao: "Uma cena"
      }
    ]
  },

  // ─────────────────────────────────────────────
  // OBLÍVIO
  // ─────────────────────────────────────────────
  oblivio: {
    descricao: "Oblívio canaliza as artes mais sombrias — sombras e antimorte como armas. Seus praticantes correm o risco de perder a alma e a Humanidade para algo mais sombrio que a morte e duplamente faminto. Cada Checagem de Sangue que resultar em '1' ou '10' causa uma Mancha além de qualquer Fome ganha.",
    habilidades: [

      // NÍVEL 1
      {
        nivel: 1,
        amalgama: null,
        nome: "Cinzas às Cinzas",
        resumo: "Permite ao vampiro destruir um cadáver — fresco ou de longa data — introduzindo seu vitae no corpo.",
        custo: "Uma Checagem de Sangue",
        dados: "Vigor + Oblívio vs. Vigor + Medicina ou Fortitude (se o cadáver estiver animado)",
        resist: "Vigor (ou Vigor + Fortitude para cadáveres animados com Fortitude)",
        mecanica: "O vampiro faz a Checagem de Sangue e introduz o vitae no cadáver. Sem animação: o corpo se desintegra em 3 turnos sem teste. Se animado: jogue Vigor + Oblívio vs. Vigor do cadáver. Vitória: o cadáver se dissolve em 5 turnos menos a margem (mínimo 1; cadáveres em dissolução sofrem Comprometimento físico). Vitória crítica: desintegra imediatamente. Falha total: o cadáver fica imune a este poder de qualquer usuário.",
        duracao: "Variável"
      },
      {
        nivel: 1,
        amalgama: null,
        nome: "O Elo Vinculante",
        resumo: "O vampiro identifica objetos ou locais importantes para fantasmas — 'elos' que os prendem à existência. Elos emanam auras variáveis detectáveis por visão, olfato e outros sentidos.",
        custo: "Grátis",
        dados: "Raciocínio + Oblívio",
        resist: "—",
        mecanica: "Na ativação, os sentidos do usuário sintonizam-se sobrenatural-mente com as energias dos elos, identificando essas auras por visão, olfato e outros sentidos. Enquanto o poder está em uso, o vampiro fica distraído de outras atividades: −2 penalidade em jogadas de Destreza e Raciocínio.",
        duracao: "Uma cena"
      },
      {
        nivel: 1,
        amalgama: null,
        nome: "Visão do Oblívio",
        resumo: "Os olhos do vampiro ficam completamente negros, permitindo ver claramente na escuridão total e perceber fantasmas que não estão ativamente se ocultando.",
        custo: "Grátis",
        dados: "—",
        resist: "—",
        mecanica: "Na ativação, o usuário ignora todas as penalidades de pouca luz, incluindo as de origem sobrenatural. Ainda precisa dos olhos para ver — vendas e similares funcionam normalmente. Fantasmas presentes e não tentando se ocultar tornam-se visíveis. Os olhos completamente negros conferem −2 dados em interações sociais com mortais enquanto ativos.",
        duracao: "Uma cena"
      },
      {
        nivel: 1,
        amalgama: null,
        nome: "Manto de Sombra",
        resumo: "Aplicando sutilmente a influência do Oblívio sobre sombras ambientes, o usuário mascara sua aparência ou parece mais sombrio e ameaçador.",
        custo: "Grátis",
        dados: "—",
        resist: "—",
        mecanica: "O vampiro ganha +2 dados em jogadas de Furtividade, bem como em Intimidação contra mortais.",
        duracao: "Passiva"
      },

      // NÍVEL 2
      {
        nivel: 2,
        amalgama: "Potência 2",
        nome: "Braços de Ahriman",
        resumo: "O vampiro convoca extensões sombreadas de pontos não iluminados da área — sombras locais que se estendem para agarrar ou sufocar vítimas.",
        custo: "Uma Checagem de Sangue",
        dados: "Raciocínio + Oblívio",
        resist: "—",
        mecanica: "O usuário gasta um turno e paga o custo, convocando as extensões. Usando-as, pode realizar ataques de contusão e agarrão contra alvos distantes a cada turno subsequente. Braços adicionais podem ser criados dividindo a pool de dados, permitindo engajar múltiplos oponentes. As sombras usam Raciocínio + Oblívio do vampiro para atacar e causam dano Superficial ou agarrão, adicionando metade do nível de Potência do usuário (arredondado para cima) como bônus de dano. O vampiro não pode fazer mais nada além de controlar as sombras enquanto este poder está ativo. Podem ser usadas para ações simples (abrir portas, puxar alavancas), mas nada tão avançado quanto digitar ou controlar veículos. As extensões têm comprimento (em metros) igual ao dobro dos pontos de Oblívio do usuário (movem-se por superfícies, não pelo ar). Só podem ser dispersas por luz intensa (tocha poderosa ou luz solar) — mas uma Raciocínio + Oblívio bem-sucedida contra Dificuldade 3 permite às sombras evitar a luz por um turno.",
        duracao: "Uma cena ou até ser encerrado ou destruído"
      },
      {
        nivel: 2,
        amalgama: "Auspício 2",
        nome: "Predição Fatal",
        resumo: "O vampiro tece fios invisíveis de entropia a uma vítima mortal, aumentando as chances de ela sofrer dano ou morte dentro de um dia e uma noite.",
        custo: "Uma Checagem de Sangue",
        dados: "Determinação + Oblívio vs. Raciocínio + Ocultismo",
        resist: "Raciocínio + Ocultismo",
        mecanica: "O vampiro faz a disputa contra um alvo mortal em linha de visão. Para cada sucesso na margem, o alvo sofre 1 ponto de dano Agravado em algum momento nas próximas 24 horas. A fonte pode ser qualquer coisa, de doença repentina a acidentes bizarros — mas o vampiro não deve interagir, direta ou indiretamente, com a vítima, sob risco de cancelar o poder. O uso do poder é invisível, embora um observador possa detectar algo de errado com Raciocínio + Ocultismo (Dificuldade 3). Só funciona em mortais (incluindo ghouls) — vampiros já estão mortos e são muito mais resistentes a manipulações de entropia.",
        duracao: "Uma noite e um dia — 24 horas"
      },
      {
        nivel: 2,
        amalgama: null,
        nome: "Projetar Sombra",
        resumo: "O poder extrai a escuridão interior do usuário para projetar uma sombra sobrenatural de seu próprio corpo — de onde manifestar outros poderes, independentemente da iluminação ambiente.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Ativar o poder conjura uma sombra sobrenatural do corpo do vampiro. Enquanto ativo, o usuário projeta essa sombra, que não pode ser removida exceto por luz solar direta. Observadores percebem a sombra projetada sem fonte de luz visível com Raciocínio + Percepção (Dificuldade 3). O vampiro pode direcionar sua sombra, alongando-a ou distorcendo-a (mas não desconectando-a) à vontade — embora às vezes ela aja por conta própria, a critério do Narrador. Para fins de outros poderes como Perspectiva de Sombra, o praticante pode estender a sombra até duas vezes seu nível de Oblívio em metros/jardas. Para qualquer pessoa de pé no alcance da sombra, o dano de Vontade de conflitos sociais aumenta em 1 (após dividir dano Superficial pela metade).",
        duracao: "Uma cena"
      },
      {
        nivel: 2,
        amalgama: null,
        nome: "Onde o Véu se Afina",
        resumo: "Vampiros com afinidade pelo Oblívio podem sentir onde o véu entre o mundo dos vivos e o mundo dos mortos está mais fraco — em locais onde o véu é mais fino, o uso de Oblívio fica facilitado.",
        custo: "Uma Checagem de Sangue",
        dados: "Inteligência + Oblívio (Dificuldade 3)",
        resist: "—",
        mecanica: "Após a Checagem de Sangue, jogue Inteligência + Oblívio. Vitória: determina a densidade do véu em sua área próxima (até um prédio inteiro ou ponto de referência). Vitória crítica: revela se a densidade do véu mudou recentemente. Falha total: o poder sai pela culatra e fornece uma leitura falsa. Sem este poder, usuários de Oblívio não podem se beneficiar de um afinalamento do véu — embora penalidades se apliquem a critério do Narrador.",
        duracao: "Um turno"
      },

      // NÍVEL 3
      {
        nivel: 3,
        amalgama: null,
        nome: "Aura de Decadência",
        resumo: "Cainitas com forte conexão ao Oblívio afetam o mundo ao redor — plantas murcham, animais e humanos adoecem, comida apodrece. Não acelera o apodrecimento de coisas já mortas.",
        custo: "Uma Checagem de Sangue",
        dados: "Vigor + Oblívio (Dificuldade 3) vs. Vigor + Medicina ou Fortitude (para criaturas vivas)",
        resist: "Vigor + Medicina (ou Vigor + Fortitude)",
        mecanica: "Com vitória na jogada de Vigor + Oblívio (Dificuldade 3), material orgânico e inorgânico não-inteligente dentro de 5 metros sofre — plantas enegrecem e morrem, comida apodrece em embalagens, tijolos começam a desmoronar. Materiais afetados podem tornar-se tóxicos se ingeridos (causam 2 de dano Superficial de Saúde na cena seguinte a cada cena até serem tratados com Inteligência + Medicina, Dificuldade 3). Qualquer ser vivo capturado na aura entra em uma disputa de Vigor + Medicina vs. a jogada de ativação do vampiro; para cada ponto de margem do vampiro, a vítima sofre 1 ponto de dano Superficial de Saúde não-dividido, aplicado gradualmente durante a cena. Aplicações repetidas na mesma cena não afetam a Saúde de mortais já afetados. Qualquer um com olfato detecta um odor de apodrecimento emanando do vampiro — −2 dados em qualquer jogada Social do vampiro enquanto o poder está ativo.",
        duracao: "Uma cena"
      },
      {
        nivel: 3,
        amalgama: "Fortitude 2",
        nome: "Banquete de Paixões",
        resumo: "O vampiro pode se alimentar das paixões de wraiths em vez de sangue, reduzindo sua Fome ao absorver as emoções que prendem os mortos à existência.",
        custo: "Grátis",
        dados: "Determinação + Oblívio vs. Determinação + Autocontrole (do wraith)",
        resist: "Determinação + Autocontrole (do wraith)",
        mecanica: "Um vampiro com este poder pode drenar um wraith de sua paixão enquanto estiver a 3 metros ou menos dele. Disputa de Determinação + Oblívio vs. Determinação + Autocontrole do wraith. Vitória: o wraith sofre 1 ponto de dano Agravado de Vontade e a Fome do vampiro é reduzida em 1. Alimentar-se de um wraith pode causar uma Mancha, a critério do Narrador (a paixão consumida embota a razão de ser do wraith, potencialmente enviando-o por um caminho de atos autodestrutivos). O Narrador determina o número de paixões que um wraith possui (embora cinco ou mais seja raro); pode determinar que o wraith se torna um espectro assassino incontrolável ao ter todas as paixões consumidas.",
        duracao: "Passiva"
      },
      {
        nivel: 3,
        amalgama: null,
        nome: "Perspectiva de Sombra",
        resumo: "O vampiro projeta seus sentidos para qualquer sombra em linha de visão, vendo e ouvindo como se estivesse escondido em qualquer parte dela.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Após a Checagem de Sangue, a presença dos sentidos do vampiro na sombra é indetectável por qualquer meio exceto sobrenatural (como Sentir o Invisível). Enquanto ativo, o vampiro percebe tanto seus arredores quanto o que pode ser captado pela Perspectiva de Sombra, como olhar por uma tela ou buraco. Inclui a própria sombra, conforme manipulada por Projetar Sombra.",
        duracao: "Até uma cena"
      },
      {
        nivel: 3,
        amalgama: "Auspício 1",
        nome: "Servo das Sombras",
        resumo: "O vampiro dá vida independente a uma parte de sua própria sombra, usando-a para espionar ou perturbar inimigos.",
        custo: "Uma Checagem de Sangue",
        dados: "Nenhum",
        resist: "—",
        mecanica: "O servo não tem mente própria, mas segue os comandos mentais do criador. Viaja à velocidade de corrida e consegue facilmente deslizar por baixo de portas, escalar paredes ou penetrar em qualquer fresta, embora não possa suportar áreas muito iluminadas. Também pode se agarrar a veículos em movimento; seu alcance é limitado apenas pela distância que consegue percorrer em uma noite. Ouve e vê tudo em suas proximidades e pode transmitir as informações assim que for reabsorvido na sombra do criador. O servo-sombra só pode ser dispersado por luz intensa (tocha poderosa ou luz solar), mas uma Raciocínio + Oblívio bem-sucedida contra Dificuldade 3 permite que o servo evite a luz por um turno.",
        duracao: "Uma cena"
      },
      {
        nivel: 3,
        amalgama: null,
        nome: "Toque do Oblívio",
        resumo: "O vampiro pode danificar e aleijá-lo com um único toque, envelhecendo catastroficamente a parte do corpo afetada — pode murchar um membro, amassar uma garganta ou cegar um par de olhos.",
        custo: "Uma Checagem de Sangue",
        dados: "Força + Briga (para agarrar a vítima resistindo)",
        resist: "—",
        mecanica: "Após a Checagem de Sangue, o vampiro agarra sua vítima (requer Força + Briga se a vítima estiver tentando evitar). Uma vez agarrada, a vítima sofre 2 níveis de dano Agravado e um ferimento incapacitante. Se infligido a um braço ou perna, o membro fica permanentemente inutilizado (mortais precisam de longa reabilitação; vampiros podem curar como dano Agravado normal). Da mesma forma, Toque do Oblívio pode tornar o alvo mudo, surdo ou cego. O Narrador pode decidir que infligir tal mutilação justifica Manchas.",
        duracao: "Um turno"
      },

      // NÍVEL 4
      {
        nivel: 4,
        amalgama: null,
        nome: "Praga Necrótica",
        resumo: "Pelo toque, o vampiro contamina o sangue de uma vítima mortal com uma doença que assola seu corpo — e pode torná-la contagiosa.",
        custo: "Uma Checagem de Sangue",
        dados: "Inteligência + Oblívio vs. Vigor + Vigor ou Fortitude",
        resist: "Vigor (ou Vigor + Fortitude para criaturas com Fortitude)",
        mecanica: "O vampiro faz a Checagem de Sangue e joga Inteligência + Oblívio enquanto toca a vítima mortal. Vítima fraca (bebê, idosa, doente, se recuperando de doença, moribunda, com 3 ou menos caixas de Saúde não marcadas): infectada automaticamente. Vítima saudável: faz um teste de Vigor (com Fortitude pode usar Vigor + Fortitude), resistindo se rolar mais sucessos que o vampiro. Vítimas da doença sofrem 1 ponto de dano Agravado de Saúde no início de cada cena após a infecção. A vítima sofre a doença por um número de cenas igual ao nível de Oblívio do usuário. Esse dano não pode ser tratado medicamente (de origem sobrenatural), mas pode ser curado bebendo vitae. Vitória crítica na ativação: o usuário pode tornar a doença contagiosa por toque, com vítimas subsequentes sofrendo a doença por um turno a menos do que a vítima pela qual foram infectadas.",
        duracao: "Um turno para ativar; duração variável da condição"
      },
      {
        nivel: 4,
        amalgama: null,
        nome: "Mortalha Estigia",
        resumo: "Sombras próximas se expandem e o vampiro envolve a área em uma camada de escuridão — sons ficam abafados, e mortais aprisionados são drenados de sua vitalidade.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "O usuário faz a Checagem de Sangue e passa um turno concentrando-se, espalhando a sombra pelas superfícies desejadas. O efeito cobre uma área circular com raio igual ao dobro do nível de Oblívio do usuário em metros/jardas, centrado no usuário ou em um ponto em sua linha de visão. Qualquer um capturado na Mortalha Estigia recebe −3 dados em todas as jogadas, a menos que possua a habilidade de ver através da escuridão sobrenatural. Qualquer mortal capturado sofre 1 nível de dano Superficial por cada turno que permanecer dentro dela, devido ao sufocamento do poder.",
        duracao: "Uma cena"
      },

      // NÍVEL 5
      {
        nivel: 5,
        amalgama: null,
        nome: "Passo das Sombras",
        resumo: "Entrando em uma sombra próxima, o usuário desaparece e reaparece em outra sombra mais distante — possivelmente tocando brevemente o Labirinto entre os mundos.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "O vampiro deve entrar em uma sombra grande o suficiente para cobri-lo e emerge de outra um turno depois. A sombra alvo deve estar em linha de visão (ou percebida por meios místicos, como Perspectiva de Sombra). É possível levar outra pessoa através da passagem — a menos que seja voluntária, deve ser mantida por um agarrão bem-sucedido. Se uma Mancha for incorrida pelo uso deste poder, o passageiro também recebe uma.",
        duracao: "Um turno"
      },
      {
        nivel: 5,
        amalgama: null,
        nome: "Destino Cumprido",
        resumo: "Este poder permite que o vampiro reintroduza doenças já curadas em vítimas, quebre ossos há muito cicatrizados e revogue a imunidade de envelhecimento de ghouls — tudo à distância.",
        custo: "Duas Checagens de Sangue",
        dados: "Vigor + Oblívio vs. Vigor + Vigor ou Fortitude",
        resist: "Vigor × 2 (ou Vigor + Fortitude)",
        mecanica: "O vampiro faz duas Checagens de Sangue enquanto reveste as palmas e o rosto de sangue, recordando o rosto dos alvos. Em uma disputa bem-sucedida de Vigor + Oblívio vs. Vigor × 2 da vítima (ou Vigor + Fortitude para criaturas com Fortitude), o indivíduo alvo é afetado por uma condição grave que sofreu e se recuperou historicamente (ex.: câncer tratado, osso quebrado, doença — incluindo a obtida por Praga Necrótica), com quaisquer efeitos debilitantes dessa condição ocorrendo imediatamente. Se a vítima for um ghoul, este poder remove sua imunidade ao envelhecimento e elimina qualquer vitae em seu sistema — ghouls mais velhos podem morrer ou até desintegrar no local. Vitória crítica: pode matar a vítima parando completamente seu coração, se o usuário desejar. Falha total: o vampiro não pode mais usar este poder contra aquele indivíduo.",
        duracao: "Variável, dependendo se a condição é tratável"
      },
      {
        nivel: 5,
        amalgama: null,
        nome: "Avatar Tenebroso",
        resumo: "O vampiro transforma sua própria substância na de uma sombra — uma mancha bidimensional de escuridão capaz de deslizar por qualquer superfície e através de frestas minúsculas.",
        custo: "Duas Checagens de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "A transformação leva um turno (durante o qual o vampiro não pode fazer nada mais). Concluída, o vampiro pode mover-se à velocidade de caminhada por qualquer superfície ou parede, impedido apenas por barreiras hermeticamente seladas. Vampiros usando Avatar Tenebroso podem envolver vítimas, causando −3 em todas as pools de dados da vítima e sufocando mortais como em Mortalha Estigia. Se envolvendo um mortal, o vampiro pode se alimentar dele sem penetrar a pele com as presas. Praticantes deste poder não sofrem dano de fontes físicas, mas podem ser afetados por fogo e luz solar normalmente. Disciplinas Mentais ainda podem ser usadas a critério do Narrador.",
        duracao: "Uma cena ou até ser encerrado"
      }
    ],

    // ── Cerimônias ────────────────────────────────
    cerimonias_intro: "Cerimônias são o equivalente do Oblívio aos Rituais de Feitiçaria de Sangue, funcionando de forma similar com as exceções abaixo. Salvo indicação contrária, realizar uma Cerimônia exige uma Checagem de Sangue, cinco minutos por nível para executar, e uma vitória no teste de Determinação + Oblívio (Dificuldade = nível da Cerimônia + 1). Cerimônias geralmente requerem ingredientes ou sacrifícios adicionais para misturar ao vitae do executante. Ghouls de praticantes de Oblívio, ou sangues-finos, podem obter acesso temporário a poderes de Oblívio, mas não a Cerimônias. Cada Cerimônia tem um poder de Oblívio como pré-requisito. Na criação do personagem, o jogador pode escolher uma Cerimônia de Nível 1 se possuir ao menos um poder de Oblívio listado como pré-requisito daquela Cerimônia. Personagens podem comprar novas Cerimônias ao custo de nível da Cerimônia × 3 pontos de experiência, desde que atendam ao pré-requisito de poder. Aprender novas Cerimônias durante o jogo requer tanto experiência quanto tempo, além de um professor que já conheça a Cerimônia. Espere que uma Cerimônia leve pelo menos o quadrado de seu nível em semanas para ser aprendida.",

    cerimonias: [

      // NÍVEL 1
      {
        nivel: 1,
        nome: "Dom da Falsa Vida",
        prerequisito: "Cinzas às Cinzas",
        resumo: "O vampiro anima um cadáver — ou um grupo deles — para realizar tarefas simples, únicas ou repetitivas.",
        ingredientes: "Um corpo humano (ou múltiplos), uma pequena mistura de sangue, fleuma e bile.",
        processo: "Após aplicar a mistura no(s) cadáver(es) e realizar a Cerimônia, os corpos animam em uma forma de falsa vida. Seguem um único comando simples do vampiro — desde que o cadáver seja fisicamente capaz de executá-lo, como 'varra o chão', 'segure esta porta fechada' ou 'caminhe pelo perímetro da casa'. Não têm capacidade de pensar ou calcular; comandos condicionais ou complexos como 'ataque a próxima pessoa a entrar por este arco', 'dirija este carro' ou 'construa um casebre' não funcionam. Podem ser direcionados a um alvo específico se o usuário apontar para ele.",
        mecanica: "O vampiro faz o teste de Cerimônia. Com vitória: anima um número de cadáveres igual ao seu nível de Oblívio, ou ao número de corpos preparados (o que for menor). Vitória crítica: dobra o nível de Oblívio para fins de determinar cadáveres animados. A animação do cadáver inconsciente termina quando é destruído ou conclui sua tarefa. Esses cadáveres não se defendem de ataques e apodrecem normalmente — a Cerimônia não lhes concede imunidade aos elementos ou ao tempo.",
        custo: "Uma Checagem de Sangue",
        dados: "Determinação + Oblívio (Dificuldade 2)",
        resist: "—",
        duracao: "Até o cadáver ser destruído ou concluir sua tarefa"
      },
      {
        nivel: 1,
        nome: "Invocar Espírito",
        prerequisito: "O Elo Vinculante",
        resumo: "Convoca um espírito do Submundo para a presença do vampiro.",
        ingredientes: "Um dos elos do wraith alvo (ver O Elo Vinculante), uma foto ou outra representação visual do wraith ou seu nome assinado, e o vitae do executante.",
        processo: "O necromante derrama seu vitae sobre o elo de um wraith e, estudando a foto ou assinatura, chama o nome do wraith em voz alta. O wraith sente o chamado de seu elo e inicia uma jornada de seu local no Submundo até o do executante. Embora a geografia tenha escalas diferentes no Submundo, uma jornada ainda pode levar várias noites se o espírito estiver do outro lado do mundo. Se o véu for fino o suficiente no local de invocação, o wraith é puxado através dele pela força do elo. O wraith invocado não tem obrigação de servir ao vampiro ao ser chamado — pode agir com hostilidade se sentir que o vampiro ameaça seu elo, ou pode ser grato pela invocação e pela possibilidade de companhia.",
        mecanica: "O executante aplica o vitae no elo e faz o teste de Cerimônia de Oblívio. O wraith não pode atravessar o véu se ele for impenetrável no local da Cerimônia. Mover o elo após a Cerimônia não ajuda — a capacidade do wraith de atravessar o véu desaparece se o elo deixar o local. O wraith desaparece ao final da cena a menos que uma Cerimônia separada seja usada para compeli-lo ou vinculá-lo. Wraiths invocados desta forma não se manifestam fisicamente, mas como sombras nas paredes — silhuetas vacilantes de suas formas em vida, das quais podem emergir vozes. Wraiths falam as mesmas línguas que falavam em vida.",
        custo: "Uma Checagem de Sangue",
        dados: "Determinação + Oblívio",
        resist: "—",
        duracao: "Até o final da cena, a menos que compelido ou vinculado"
      },

      // NÍVEL 2
      {
        nivel: 2,
        nome: "Despertar o Servo Homúnculo",
        prerequisito: "Onde o Véu se Afina",
        resumo: "O vampiro cria servos e espiões a partir de partes do corpo — mãos, crânios — ou pequenos animais mortos como ratos ou raposas.",
        ingredientes: "A parte do corpo ou carcaça do animal, a arma usada para cortá-la/matá-la, uma pequena mistura de urina, fezes e sêmen.",
        processo: "O executante reveste uma lâmina (ou outro dispositivo adequado) no nojento coquetel de fluidos corporais e usa-a para cortar o apêndice alvo de seu membro ou corpo de origem, ou mata o pequeno animal (não pode ser maior que um cão pequeno e não pode voar, independentemente de ter asas). Após massagear vitae no alvo, ele ganha vida como um servo homúnculo, incondicionalmente leal ao seu mestre.",
        mecanica: "O necromante faz o teste de Cerimônia de Oblívio. Com vitória: ganha um servo homúnculo que espia, segue ou intimida por comando do necromante. Se se afastar mais de 100 metros do vampiro, fica inerte, acordando apenas quando o vampiro entrar nesse raio. Permanece ativo por um número de noites igual ao número de sucessos. Vitória crítica: mantém o servo ativo para sempre. Falha total: destrói todos os componentes da Cerimônia. A maioria dos homúnculos pode escalar paredes, saltar (mesmo sem membros) e se ocultar com eficácia. Não pode falar nem realizar ações que exijam pensamento profundo, mas pode comunicar telepaticamente imagens únicas, odores ou sons ao criador.",
        custo: "Uma Checagem de Sangue",
        dados: "Determinação + Oblívio",
        resist: "—",
        duracao: "Uma noite por sucesso, ou permanentemente com vitória crítica"
      },
      {
        nivel: 2,
        nome: "Compelir Espírito",
        prerequisito: "Onde o Véu se Afina",
        resumo: "Permite ao vampiro dobrar um wraith à sua vontade, forçando-o a realizar tarefas.",
        ingredientes: "O elo de um wraith, o vitae do executante, e um item (ou ameaça) suficiente para danificar o elo.",
        processo: "O vampiro deve estar em proximidade com um wraith — tipicamente através de Invocar Espírito. O necromante joga um punhado de seu próprio vitae na direção do wraith enquanto encosta um item destrutivo no elo (uma faca, um martelo, uma arma) ou profere ameaças verbais que o wraith acredita. O vampiro e o wraith travam um duelo de vontades.",
        mecanica: "Faça um teste de Cerimônia de Oblívio vs. Determinação + Autocontrole do wraith. Se o vampiro não tiver como ameaçar fisicamente o elo, também faça Manipulação + Intimidação (Dificuldade = Determinação + Autocontrole do wraith). Se o necromante vencer ambas as jogadas: pode comandar o wraith a realizar um número de tarefas moderadamente difíceis (espionar, pesquisar, responder perguntas com honestidade etc.) igual ao número de sucessos na jogada de Cerimônia. A cada dois sucessos, pode ordenar uma tarefa difícil (atacar alguém, fazer algo repugnante etc.). Vitória crítica: pode exigir qualquer ação do wraith. O wraith permanece a serviço do vampiro até o final da crônica ou até cumprir os comandos, momento em que retorna ao Submundo com inimizade eterna pelo necromante. Se o wraith vencer qualquer disputa, o vampiro sofre a margem em dano Superficial de Saúde e o wraith retorna ao Submundo. A compulsão sobre o wraith termina imediatamente se o vampiro o atacar. Se o vampiro danificar o elo ameaçado, o wraith sofre 1 a 3 de dano Agravado de Vontade e é enviado de volta ao Submundo como um espectro assassino.",
        custo: "Uma Checagem de Sangue",
        dados: "Determinação + Oblívio vs. Determinação + Autocontrole do wraith",
        resist: "Determinação + Autocontrole do wraith",
        duracao: "Até o final da crônica ou até os comandos serem cumpridos"
      },

      // NÍVEL 3
      {
        nivel: 3,
        nome: "Hospedar Espírito",
        prerequisito: "Aura de Decadência",
        resumo: "O vampiro abre seu próprio corpo à possessão por um wraith — ganhando físico aprimorado, acesso a memórias e os conselhos da voz do espírito em sua mente.",
        ingredientes: "Um presente como tributo ao wraith (se o wraith o valoriza depende do indivíduo), um inseto parasita e dois dentes extraídos da boca do vampiro.",
        processo: "O vampiro deve estar em proximidade com um wraith — tipicamente através de Invocar Espírito. O necromante apresenta um tributo ao wraith (álcool derramado no túmulo, uma bolsa de moedas enterrada, ou até a cabeça recém-decapitada de um inimigo do wraith). O vampiro então arranca dois dentes da própria boca — geralmente com alicate — e morde um parasita com os dentes restantes. O vampiro então abre a boca e o wraith pode escolher entrar, habitando o corpo do vampiro.",
        mecanica: "Faça um teste bem-sucedido de Cerimônia de Oblívio. Se o wraith concordar, entra no corpo do vampiro e pode permanecer por um número de cenas igual aos sucessos. Com o wraith dentro, o vampiro ganha +2 dados em todas as jogadas de Atributo Físico e +2 Saúde até o wraith partir. O vampiro pode ouvir o wraith em sua mente oferecendo conselhos e pode substituir as Perícias do wraith pelas suas, a critério do Narrador. Um wraith pode escolher afirmar sua possessão em vez de agir como passageiro. Se o vampiro resistir, faz Determinação + Autocontrole vs. Determinação + Autocontrole do wraith. Com sucesso: rejeita a influência do wraith. Com falha: o wraith controla o vampiro até o final da cena, embora não possa fazê-lo fazer nada autodestrutivo.",
        custo: "Uma Checagem de Sangue",
        dados: "Determinação + Oblívio",
        resist: "Determinação + Autocontrole (para resistir à possessão do wraith)",
        duracao: "Um número de cenas igual aos sucessos"
      },
      {
        nivel: 3,
        nome: "Hordas de Mortos-Vivos",
        prerequisito: "Aura de Decadência",
        resumo: "O vampiro levanta um grupo de mortos-vivos agressivos e ambulantes para servi-lo — minions que não apodrece e atacam qualquer um que não seja seu mestre.",
        ingredientes: "Um cadáver mortal (ou múltiplos) e um sacrifício mortal fresco.",
        processo: "O vampiro precisa ter um cadáver separado além de um mortal preparado para sacrifício. O vampiro mata a vítima sacrificial, derramando seu sangue sobre o(s) cadáver(es) destinados à animação. Se a Cerimônia for bem-sucedida, os cadáveres se erguem (o sacrifício recente não) e servem aos comandos do vampiro.",
        mecanica: "Devido à quantidade de sangue derramado, o executante primeiro deve testar para resistir ao frenesi de fome (Dificuldade 2). Faça o teste de Cerimônia, possivelmente incorrendo em Manchas dependendo dos Princípios da crônica. Com vitória: um número de mortos agressivos igual ao nível de Oblívio do necromante ou ao número de corpos preparados (o que for menor) recebe o dom da animação. Cadáveres animados assim não apodrecem e só entram em repouso se comandados pelo vampiro, se o vampiro encontrar a Morte Final, ou se forem destruídos. Os cadáveres animados podem processar ordens moderadamente complexas como 'mate todo mundo que entrar', 'gema se ver alguém passar por aqui' ou 'aterrorize aquele bairro'. Ao contrário dos cadáveres do Dom da Falsa Vida, esses mortos não ficam ociosos sem comandos — em vez disso, atacam qualquer um ao redor exceto seu mestre.",
        custo: "Uma Checagem de Sangue + possível Mancha",
        dados: "Determinação + Oblívio",
        resist: "—",
        duracao: "Permanente até serem destruídos ou o vampiro morrer"
      },

      // NÍVEL 4
      {
        nivel: 4,
        nome: "Vincular o Espírito",
        prerequisito: "Praga Necrótica",
        resumo: "O vampiro acorrenta um wraith a locais ou pessoas específicas, criando uma assombração permanente cujo estado emocional afeta todos ao redor.",
        ingredientes: "O elo de um wraith, o sacrifício de um mortal inocente e sal suficiente para circundar uma propriedade ou indivíduo. Se o alvo for um indivíduo, o necromante deve possuir algo de seu corpo (unhas, cabelo, sangue ou pele).",
        processo: "O vampiro deve já ter um wraith sob controle usando Compelir Espírito. O vampiro mata um mortal inocente perto do local ou pessoa que deseja assombrar. Em seguida, mistura seu vitae com sal suficiente para circundar o alvo, pinta um círculo com a mistura e coloca o elo do wraith dentro do local ou na posse do alvo.",
        mecanica: "Após as etapas da Cerimônia, o vampiro pode incorrer em Manchas pelo assassinato dependendo dos Princípios da crônica. Faz um teste de Cerimônia de Oblívio que não pode ser resistido (o wraith já deve estar compelido). O wraith fica vinculado ao local ou indivíduo alvo sem duração aplicada. Qualquer emoção que o wraith sinta intensamente durante a vinculação afeta os habitantes do local ou o indivíduo ao qual está vinculado — cada pessoa afetada sofre −2 dados em todas as jogadas para resistir a agir ou sentir como o wraith sente. Um wraith irado pode tornar vampiros mais propensos ao Frenesi; um wraith deprimido pode fazer um mortal parar de se cuidar. O wraith fica vinculado para sempre ao alvo a menos que o vampiro cancele a Cerimônia, o elo se mova da posse do local ou indivíduo, ou o wraith seja destruído. O vínculo também termina se o necromante atacar o wraith.",
        custo: "Uma Checagem de Sangue + possível Mancha",
        dados: "Determinação + Oblívio",
        resist: "—",
        duracao: "Permanente"
      },
      {
        nivel: 4,
        nome: "Rasgar o Véu",
        prerequisito: "Praga Necrótica",
        resumo: "O vampiro cria uma rasgadura no véu pela qual os wraiths podem passar — trazendo espíritos para o mundo dos vivos para assombrar, possuir e indulgir suas paixões.",
        ingredientes: "Uma lâmina usada para cortar alguém vivo, giz ou carvão, um lençol de seda e um sacrifício humano.",
        processo: "O vampiro pendura um lençol de seda sobre uma parede em um local onde a densidade do véu seja padrão, fina ou desgastada. Realiza um sacrifício humano contra o lençol e, enquanto o sangue o cobre, corta-o aberto com a lâmina. A Cerimônia alarga o portal entre o mundo dos vivos e o mundo dos mortos.",
        mecanica: "O executante realiza o sacrifício, o que pode resultar em Manchas. Devido à quantidade de sangue derramado, o executante deve resistir ao frenesi de fome (Dificuldade 2). Quando corta o lençol de seda, o jogador faz o teste de Cerimônia. Para cada sucesso, a densidade do véu reduz um nível, podendo chegar a ausente. Importante: se a densidade do véu for reduzida a ausente, os wraiths podem se derramar no mundo físico pelo restante da sessão (ou noite). Quando esse período termina, a densidade do véu ausente aumenta para desgastada e o portal fecha.",
        custo: "Uma Checagem de Sangue + possível Mancha",
        dados: "Determinação + Oblívio",
        resist: "—",
        duracao: "Uma sessão/noite se o véu chegar a ausente"
      },

      // NÍVEL 5
      {
        nivel: 5,
        nome: "Bênção Lazarena",
        prerequisito: "Destino Cumprido",
        resumo: "O necromante traz um corpo recém-morto de volta à vida — não como seus parentes e amigos o lembrariam — convidando um wraith a habitá-lo como hospedeiro permanente.",
        ingredientes: "Um sacrifício mortal, incenso, o coração de qualquer mamífero e prata em pó.",
        processo: "O necromante queima incenso para perfumar o ar antes de realizar um ato de sacrifício — cortando o coração da vítima e substituindo pelo coração de outro mamífero (não precisa estar costurado e funcionando para a Cerimônia funcionar). Após derramar pó de prata sobre os olhos abertos do mortal moribundo ou morto, o vampiro convida um wraith a tomar o mortal falecido como hospedeiro. Os wraiths não podem ser forçados a possuir um corpo, mas poucos recusam a oportunidade de andar em sapatos semi-vivos novamente.",
        mecanica: "Matar um mortal para esta Cerimônia pode incorrer em Manchas. Se o coração substituto também foi tirado de alguém que o vampiro assassinou, esse assassinato também pode incorrer em Manchas. Após um teste bem-sucedido de Cerimônia, um wraith pode entrar no corpo recém-morto e viver nele como se fosse o seu. O wraith deve estar presente durante o ato de sacrifício. O cadáver possuído acorda portando os ferimentos que o mataram, mas o coração substituto funciona (independente de origem ou posicionamento) e o corpo cura 1 ponto de dano de Saúde ao ser possuído. O dano de Saúde restante se recupera com o tempo (como cura vampírica). O corpo não ganha resistências especiais a danos além das Disciplinas que possa ter possuído em vida. O corpo possui os mesmos Atributos Físicos, Disciplinas (se ghoul) e Vantagens que tinha em vida. Atributos Sociais e Mentais, Perícias e qualquer forma de classificação de moralidade correspondem aos do wraith. A possessão dura indefinidamente — ou até o corpo possuído morrer novamente ou o wraith ser exorcizado do hospedeiro.",
        custo: "Uma Checagem de Sangue + possível Mancha",
        dados: "Determinação + Oblívio",
        resist: "—",
        duracao: "Indefinida"
      }
    ]

  },

  // ─────────────────────────────────────────────
  // POTÊNCIA
  // ─────────────────────────────────────────────
  potencia: {
    descricao: "Potência é força vitae-amplificada acima e além de qualquer outro vampiro. Mais que apenas bater em coisas, é a habilidade do vampiro de forçar seu corpo a realizar ações impossíveis para mortais.",
    habilidades: [

      // NÍVEL 1
      {
        nivel: 1,
        amalgama: null,
        nome: "Corpo Letal",
        resumo: "O usuário é capaz de causar ferimentos horrendos a mortais, rasgando pele e quebrando ossos com as próprias mãos.",
        custo: "Grátis",
        dados: "—",
        resist: "—",
        mecanica: "Os ataques desarmados do usuário podem causar dano Agravado de Saúde a mortais, se desejado. Também ignoram um nível de armadura por nível de Potência do usuário.",
        duracao: "Passiva"
      },
      {
        nivel: 1,
        amalgama: null,
        nome: "Salto Elevado",
        resumo: "Possuindo força infernal além de braços e punhos, o usuário pode saltar muito mais alto e mais longe do que qualquer mortal.",
        custo: "Grátis",
        dados: "—",
        resist: "—",
        mecanica: "O usuário pode saltar um número de metros igual a três vezes seu nível de Potência verticalmente, e cinco vezes horizontalmente. Não precisa de corrida para realizar esses saltos.",
        duracao: "Passiva"
      },

      // NÍVEL 2
      {
        nivel: 2,
        amalgama: null,
        nome: "Proeza",
        resumo: "Vampiros com Potência ganham força muito maior do seu Sangue do que os que não a possuem.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Quando ativado, adiciona o nível de Potência do usuário ao valor de dano de ataques desarmados e a façanhas de Força.",
        duracao: "Uma cena"
      },
      {
        nivel: 2,
        amalgama: null,
        nome: "Garras Implacáveis",
        resumo: "O aperto do vampiro torna-se impossível de soltar — uma vez que prende algo, é quase impossível desalojá-lo.",
        custo: "Uma Checagem de Sangue",
        dados: "N/A",
        resist: "—",
        mecanica: "O vampiro adiciona seu nível de Potência como sucessos automáticos em qualquer tentativa que envolva segurar algo. Isso inclui tentativas de manter um agarrão — embora o teste inicial de agarrão não se beneficie deste bônus.",
        duracao: "Uma cena"
      },

      // NÍVEL 3
      {
        nivel: 3,
        amalgama: null,
        nome: "Alimentação Brutal",
        resumo: "Conhecida como o 'Beijo Selvagem', este poder permite usar força infernal ao drenar uma vítima — em segundos, o atacante engole torrentes de sangue enquanto a mutila.",
        custo: "Grátis",
        dados: "—",
        resist: "—",
        mecanica: "O vampiro pode drenar um humano completamente em segundos, geralmente em um único turno. Cada ponto de Fome saciado causa 1 ponto de dano Agravado de Saúde à vítima, pois vasos sanguíneos estouram e órgãos se contundem e rompem internamente. Usar Alimentação Brutal em um vampiro causa apenas dano Superficial de Saúde aos seus órgãos mortos e inertes. Em combate, Alimentação Brutal vem imediatamente após um ataque bem-sucedido de Briga usando presas. A vítima sofre primeiro o dano de mordida, depois o dano deste poder. Armadura não protege contra Alimentação Brutal, pois as feridas são (pelo menos inicialmente) principalmente internas.",
        duracao: "Uma alimentação"
      },
      {
        nivel: 3,
        amalgama: "Presença 3",
        nome: "Faísca de Fúria",
        resumo: "Combinando Potência e Presença, o vampiro pode incitar raiva e até Frenesi em espectadores — tão facilmente quanto admiração ou pavor.",
        custo: "Uma Checagem de Sangue",
        dados: "Manipulação + Potência",
        resist: "Autocontrole + Inteligência (para vampiros alvo de Frenesi forçado)",
        mecanica: "Quando ativo, o usuário pode adicionar seu nível de Potência a qualquer tentativa de instigar ou incitar uma pessoa ou multidão à violência. Além disso, o usuário pode ativar este poder e jogar Manipulação + Potência vs. Autocontrole + Inteligência de outro vampiro. Se vencer, o vampiro opositor deve fazer um teste de Frenesi de Fúria com Dificuldade 3.",
        duracao: "Uma cena"
      },
      {
        nivel: 3,
        amalgama: null,
        nome: "Destruidor",
        resumo: "O vampiro é capaz de exercer força violenta e indiscriminada sobre um objeto estático para destroçá-lo, esmigalhá-lo e destruí-lo.",
        custo: "Grátis",
        dados: "N/A",
        resist: "—",
        mecanica: "Pré-requisito: Proeza. O usuário conta seu nível de Potência duas vezes ao usar Proeza para façanhas de força que envolvam dano ou destruição de um objeto inanimado. Enquanto o lead-up para convocar essa força o torna inútil em uma briga, é muito útil quando uma porta barra o caminho, um carro precisa ser imobilizado, ou um exemplo precisa ser dado a uma estátua ofensiva.",
        duracao: "Como Proeza"
      },

      // NÍVEL 4
      {
        nivel: 4,
        amalgama: null,
        nome: "Draught de Força",
        resumo: "O Sangue do vampiro fica saturado com o poder da Potência, transferindo parte desse poder a quem beber diretamente de suas veias.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Beber um volume de Sangue equivalente a uma Checagem de Sangue diretamente do usuário concede ao bebedor Potência temporária igual a metade dos pontos de Potência do doador (arredondado para baixo), incluindo os mesmos poderes até esse nível.",
        duracao: "Uma noite; para vampiros, até a próxima alimentação ou ao atingir Fome 5"
      },
      {
        nivel: 4,
        amalgama: null,
        nome: "Aterrisagem Catastrófica",
        resumo: "Tendo aperfeiçoado suas capacidades, o vampiro agora cai em estilo épico de seu Salto Elevado — parando de forma imparável e causando dano a qualquer um ao redor.",
        custo: "Uma Checagem de Sangue",
        dados: "Força + Potência",
        resist: "Destreza + Atletismo (de cada alvo na área de efeito)",
        mecanica: "Pré-requisito: Salto Elevado. Ao usar Salto Elevado, o vampiro pode ativar Aterrisagem Catastrófica e causar dano em uma pequena área de efeito. Qualquer um dentro de um raio de 3 metros fica sujeito a um ataque de Força + Potência do usuário contra sua Destreza + Atletismo, sofrendo Dano Superficial igual à margem. Qualquer um sofrendo 3 ou mais níveis de dano ou com falha total em seu teste de defesa é derrubado.",
        duracao: "N/A"
      },
      {
        nivel: 4,
        amalgama: null,
        nome: "Garras de Parede",
        resumo: "Concentrando força sobrenatural nos dedos dos pés e das mãos, o vampiro se agarra e enterra suas extremidades em quase qualquer superfície, permitindo-lhe escalar e até pendurar de paredes e tetos.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Um vampiro usando este poder passa automaticamente em qualquer teste de Perícia para escalar uma superfície não-metálica. O usuário também pode escalar revestimento de cobre, bronze ou outros metais mais macios, a critério do Narrador. Superfícies finas de vidro podem quebrar sob a tensão. Da mesma forma, pode pendurar de uma parede ou teto por até uma cena — embora apenas vampiros descalços possam se pendurar pelos pés. A escalada ou pendurar deixa rastros óbvios detectáveis por qualquer um com Inteligência + Investigação (Dificuldade 2). Detectar rastros de Garras de Parede em vidro nem mesmo requer uma jogada.",
        duracao: "Uma cena"
      },

      // NÍVEL 5
      {
        nivel: 5,
        amalgama: null,
        nome: "Toque da Terra",
        resumo: "Sua força uma força elemental, o vampiro pode cravar punho ou pé no chão criando uma onda de choque que derruba oponentes.",
        custo: "Duas Checagens de Sangue",
        dados: "—",
        resist: "Destreza + Atletismo (Dificuldade 3)",
        mecanica: "Nenhum teste adicional necessário para criar a onda de choque (o chão é difícil de errar). Qualquer um dentro de um raio de 5 metros deve fazer Destreza + Atletismo (Dificuldade 3). Vitória crítica: sem efeito. Vitória: desequilíbrado — perde a ação atual. Falha: cai de bruços — perde a ação atual; deve gastar um turno se levantando. Qualquer um preparado para o Toque da Terra (como companheiros do usuário) pode deslocar seus resultados um nível para cima. Este poder causa dano colateral significativo. Se usado no chão, a terra racha. Se usado internamente, móveis quebram e espelhos estilhaçam. Em qualquer coisa além do andar térreo, o assoalho pode quebrar, fazendo todos no raio cair para o andar de baixo. Este poder só pode ser usado uma vez por cena.",
        duracao: "Um uso"
      },
      {
        nivel: 5,
        amalgama: null,
        nome: "Punho de Caim",
        resumo: "As mãos nuas do vampiro podem infligir ferimentos gravíssimos, letais tanto a mortais quanto a vampiros — capazes de desmembrar, empalar, decapitar e até arrancar corações.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Por uma cena, o usuário pode infligir dano Agravado de Saúde a mortais e sobrenaturais igualmente durante ataques de Briga, literalmente rasgando a carne e arrancando os membros dos oponentes com as próprias mãos.",
        duracao: "Uma cena"
      },
      {
        nivel: 5,
        amalgama: null,
        nome: "Martelo Sutil",
        resumo: "Impregnado de proeza inumana, cada parte do corpo do vampiro torna-se capaz de projetar a soma de sua força — um estalar de dedo pode transmitir o poder de um soco completo.",
        custo: "Grátis",
        dados: "N/A",
        resist: "—",
        mecanica: "Realizar ataques corpo-a-corpo desarmados ou façanhas de força agora conta como ações menores de 2 dados (ver Ações Menores no corebook, p. 298). Um personagem só pode realizar uma ação menor de Martelo Sutil por turno, e não pode fazer mais ataques no mesmo turno. A capacidade de concentrar toda a própria força em qualquer parte do corpo também tem outros benefícios: qualquer façanha de força onde o movimento do usuário seja limitado (como quebrar algemas) recebe +4 dados ou mais, a critério do Narrador.",
        duracao: "Passiva"
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PRESENÇA
  // ─────────────────────────────────────────────
  presenca: {
    descricao: "Presença afeta as emoções dos sujeitos — não as mentes. As vítimas são cônscias (ao contrário da Dominação) mas imprevisíveis. O efeito não se transmite eletronicamente a menos que o usuário possua Magnetismo Estelar. Em combate, apenas Olhar Pavoroso e Majestade têm efeito.",
    habilidades: [

      // NÍVEL 1
      {
        nivel: 1,
        amalgama: null,
        nome: "Fascínio",
        resumo: "Qualquer um na presença do vampiro sente atenção inexplicavelmente atraída para ele — seus argumentos se tornam mais convincentes e pontos de vista alheios cedem.",
        custo: "Grátis",
        dados: "Manipulação + Presença vs. Autocontrole + Inteligência",
        resist: "Autocontrole + Inteligência",
        mecanica: "Adiciona o nível de Presença a qualquer jogada de Perícia envolvendo Persuasão ou Performance, além de outras jogadas de Carisma a critério do Narrador. Qualquer um ciente de que está sendo afetado pode resistir com Autocontrole + Inteligência vs. Manipulação + Presença do usuário. Vitória: o alvo resiste por uma cena. Vitória crítica: imune pela noite inteira. Quando o poder expira, as vítimas revertem para suas opiniões anteriores. Efeitos de Presença não se acumulam — usar Fascínio e Encantamento no mesmo sujeito só adiciona o nível de Presença uma vez para quaisquer jogadas de Persuasão baseadas em Social.",
        duracao: "Uma cena ou até ser intencionalmente encerrado"
      },
      {
        nivel: 1,
        amalgama: null,
        nome: "Intimidar",
        resumo: "Em vez de atrair, o vampiro usa a Presença para repelir — parecendo ameaçador e exalando uma aura de menace suficiente para fazer a maioria dos mortais evitar sua atenção.",
        custo: "Grátis",
        dados: "—",
        resist: "Determinação + Autocontrole (Dificuldade 2 para atacar o usuário)",
        mecanica: "Adiciona o nível de Presença do usuário a qualquer jogada de Intimidação. Atacar o usuário requer uma jogada de Determinação + Autocontrole (Dificuldade 2). Vampiros não podem usar Fascínio e Intimidar simultaneamente.",
        duracao: "Uma cena ou até ser intencionalmente encerrado"
      },
      {
        nivel: 1,
        amalgama: "Protean 1",
        nome: "Olhos da Serpente",
        resumo: "Os olhos do vampiro se transformam em orbes fendados e serpentinos — capazes de congelar no lugar mortais que cruzem o olhar com o vampiro.",
        custo: "Grátis",
        dados: "Carisma + Presença vs. Raciocínio + Autocontrole (para vampiros)",
        resist: "Raciocínio + Autocontrole (apenas para vampiros)",
        mecanica: "Ao capturar o olhar de um mortal (ver p. 255 do corebook), o vampiro pode imobilizá-lo, mantendo-o congelado enquanto o próprio vampiro mantiver contato visual. O efeito só pode ser mantido em uma vítima por vez, e termina se ela sofrer dano ou for removida à força. A vítima ainda pode falar, mas não gritar. Para paralisar um vampiro, o usuário deve vencer uma disputa de Carisma + Presença vs. Raciocínio + Autocontrole. O vampiro vítima pode escapar da paralisia em qualquer turno após o primeiro gastando um ponto de Vontade.",
        duracao: "Até o contato visual ser quebrado ou a cena terminar"
      },

      // NÍVEL 2
      {
        nivel: 2,
        amalgama: null,
        nome: "Beijo Duradouro",
        resumo: "O Beijo do vampiro já induz quase-êxtase em mortais, mas este poder transforma a experiência em vício — os alimentados ficam obcecados e chegam a buscar o vampiro para novas alimentações.",
        custo: "Grátis",
        dados: "—",
        resist: "Vontade (Dificuldade = nível de Presença do usuário)",
        mecanica: "O vampiro pode optar por usar ou não este poder em cada alimentação. O usuário adiciona dados iguais ao seu nível de Presença a qualquer pool subsequente assistida pelo Atributo Carisma contra o sujeito mordido. Um mortal alimentado com este poder pode fazer um teste de Vontade (Dificuldade = nível de Presença do usuário) toda semana para resistir. Vencer por três semanas consecutivas quebra o efeito — assim como uma única vitória crítica.",
        duracao: "Até ser resistido com sucesso"
      },
      {
        nivel: 2,
        amalgama: null,
        nome: "Melpominee",
        resumo: "A voz do usuário torna-se como a de uma sereia — capaz de encantar ou aterrorizar por si só, sem o usuário precisar estar presente, apenas ao alcance do ouvido.",
        custo: "Grátis",
        dados: "N/A",
        resist: "—",
        mecanica: "O vampiro é capaz de usar Fascínio, Intimidar, Olhar Pavoroso, Encantamento e Majestade através da voz sozinha. Não precisa ver o alvo, e o alvo não precisa estar em sua presença — apenas perto o suficiente para ouvir sua voz. A voz não retém sua habilidade se gravada ou transmitida eletronicamente.",
        duracao: "N/A"
      },

      // NÍVEL 3
      {
        nivel: 3,
        amalgama: null,
        nome: "Olhar Pavoroso",
        resumo: "Expondo brevemente sua natureza vampírica, o usuário infunde um único sujeito com terror absoluto — mortais são subjugados ou fogem apavorados; vampiros se submetem como cães apaleados ou fogem em Rötshreck.",
        custo: "Uma Checagem de Sangue",
        dados: "Carisma + Presença vs. Autocontrole + Determinação",
        resist: "Autocontrole + Determinação",
        mecanica: "Exibindo presas e um trejeito predatório, jogue a disputa. Falha: mortais ficam impossibilitados de agir exceto em sua própria defesa, recuando por um turno. Vampiros: sem efeito. Vitória: mortais fogem com medo. Vampiros: incapazes de agir exceto em sua própria defesa por um turno, a menos que gastem Vontade igual à margem de vitória do usuário (mínimo 1). Vitória crítica: mortais congelam ou se curvam em posição fetal. Vampiros devem fazer um teste de Frenesi de terror (Dificuldade 3) — se vencerem, ainda sofrem o efeito de vitória normal.",
        duracao: "Um turno"
      },
      {
        nivel: 3,
        amalgama: "Auspício 1",
        nome: "Voz Projetada",
        resumo: "O vampiro pode fazer sua voz emanar de qualquer ponto em linha de visão — seja sussurro ou grito — e até deixá-la em um local para continuar atraindo ou aterrorizando quem se aproximar.",
        custo: "Uma Checagem de Sangue",
        dados: "N/A",
        resist: "—",
        mecanica: "Nenhuma jogada necessária, além da Checagem de Sangue. Se usar este poder em combinação com Voz Irresistível, Melpominee ou poderes similares, deve jogar normalmente. A voz pode ser deixada em uma localização, continuando a atrair ou aterrorizar aqueles que se aproximam, dependendo do poder usado.",
        duracao: "Uma cena"
      },

      // NÍVEL 4
      {
        nivel: 4,
        amalgama: null,
        nome: "Encantamento",
        resumo: "O vampiro foca seu fascínio sobrenatural em uma única pessoa, instilando nela fascinação ou infatuação semelhante ao apaixonamento ou ao encontro com um ídolo de vida inteira.",
        custo: "Uma Checagem de Sangue",
        dados: "Carisma + Presença vs. Autocontrole + Raciocínio",
        resist: "Autocontrole + Raciocínio",
        mecanica: "O vampiro só precisa chamar a atenção do sujeito e vencer a disputa. O efeito dura aproximadamente 1 hora mais 1 por ponto de margem. O vampiro pode renovar o efeito indefinidamente, mas uma falha encerra o efeito e torna o sujeito imune pelo resto da noite. Após o sucesso, o usuário adiciona dados iguais ao seu nível de Presença a qualquer pool de dados Social contra o sujeito encantado. Pedidos que resultem em dano óbvio ao sujeito ou seus entes queridos, ou que se oponham aos Princípios do sujeito, falham automaticamente e exigem um teste imediato de disputa de poderes — ou o Encantamento falha imediatamente.",
        duracao: "1 hora + 1 por ponto de margem"
      },
      {
        nivel: 4,
        amalgama: "Dominação 1",
        nome: "Voz Irresistível",
        resumo: "A Presença do usuário torna-se um conduto para a Dominação — o vampiro agora só precisa que sua voz seja ouvida para empregar poderes de Dominação.",
        custo: "Sem custo adicional",
        dados: "—",
        resist: "—",
        mecanica: "A voz do usuário por si só é agora suficiente para Dominar um alvo. Isso não se aplica a vozes transmitidas por meios eletrônicos como telefones, televisão ou interfones de apartamentos.",
        duracao: "Passiva"
      },
      {
        nivel: 4,
        amalgama: null,
        nome: "Permear o Edifício",
        resumo: "Enquanto presente em um prédio ou local similar, o vampiro pode estender os poderes de Fascínio, Intimidar e Majestade pela própria estrutura do edifício — todos no prédio são afetados como se o vampiro estivesse presente.",
        custo: "N/A",
        dados: "Conforme o poder transmitido",
        resist: "—",
        mecanica: "Qualquer um que veja o prédio de fora ou que esteja presente dentro precisa resistir ao poder usado como se o vampiro estivesse presente — a menos que o vampiro esteja à vista, caso em que ele próprio se torna o foco. Como um prédio geralmente não faz jogadas de Perícia, aplique os bônus a qualquer reação que a vítima tiver ao lugar. Uma boate sob influência de Fascínio terá filas pelo quarteirão; um refúgio sob Intimidar afastará todos exceto os investigadores mais obstinados. O uso de Majestade deve ser feito com extrema cautela, pois os resultados podem ser espetaculares e voláteis.",
        duracao: "Conforme o poder transmitido"
      },

      // NÍVEL 5
      {
        nivel: 5,
        amalgama: null,
        nome: "Convocar",
        resumo: "O vampiro pode chamar para si qualquer pessoa — mortal ou vampiro — sobre quem já usou Fascínio, Encantamento ou Majestade, ou que tenha provado seu Sangue ao menos uma vez.",
        custo: "Uma Checagem de Sangue",
        dados: "Manipulação + Presença vs. Autocontrole + Inteligência",
        resist: "Autocontrole + Inteligência",
        mecanica: "O vampiro precisa se concentrar por 5 minutos pensando na pessoa a ser convocada, depois joga a disputa. Vitória: o alvo ouve a convocação mas pode ou não atendê-la. Vitória crítica: o alvo chega tão rapidamente quanto possível, exceto em caso de risco imediato ao bem-estar. O alvo sabe quem o está convocando e a localização atual do usuário. A convocação dura uma noite; o vampiro pode repeti-la noite após noite se necessário. Qualquer Convocado sente uma atração ao convocador e tenta alcançá-lo — mas sem se colocar em risco físico ou financeiro real.",
        duracao: "Uma noite"
      },
      {
        nivel: 5,
        amalgama: null,
        nome: "Majestade",
        resumo: "No pináculo da Disciplina, o vampiro amplifica seu porte a níveis sobrenaturais — seja de beleza dilacerante, terror monstruoso ou comando absoluto. Todos que o veem ficam paralisados ou curvam a cabeça em submissão.",
        custo: "Duas Checagens de Sangue",
        dados: "Carisma + Presença vs. Autocontrole + Determinação",
        resist: "Autocontrole + Determinação",
        mecanica: "Pessoas na presença do usuário só podem encarar, boquiabertas, ou desviar os olhos com medo ou submissão. Qualquer um que queira agir de qualquer forma em oposição ao usuário — exceto por autopreservação — deve vencer uma disputa de Autocontrole + Determinação vs. Carisma + Presença do vampiro. Vitória: permite um turno de liberdade mais um turno por ponto de margem; somente uma vitória crítica resiste ao efeito para a cena inteira.",
        duracao: "Uma cena"
      },
      {
        nivel: 5,
        amalgama: null,
        nome: "Magnetismo Estelar",
        resumo: "Os poderes de Presença do usuário agora afetam pessoas que o visualizam em transmissões ao vivo ou ouvem sua voz pelo telefone — mas imagens e mensagens gravadas não retêm o efeito.",
        custo: "Uma Checagem de Sangue adicional",
        dados: "—",
        resist: "—",
        mecanica: "Fascínio, Intimidar e Encantamento podem ser transmitidos por transmissões ao vivo através de telas ou telefones. Se Encantamento for usado, o nome da vítima deve ser pronunciado claramente, pois este poder só afeta uma pessoa por vez. Qualquer outra pessoa assistindo à mesma transmissão apenas acha o usuário charmoso, mas não de forma sobrenatural.",
        duracao: "Conforme o poder usado"
      }
    ]
  },

  // ─────────────────────────────────────────────
  // PROTEANISMO
  // ─────────────────────────────────────────────
  proteanismo: {
    descricao: "Proteanismo permite ao vampiro mutar, mudar de forma e tornar-se um predador cada vez mais letal. Os poderes que transformam o corpo também afetam roupas, itens ingeridos e pequenos acessórios — por isso os praticantes tendem a viajar leve.",
    habilidades: [

      // NÍVEL 1
      {
        nivel: 1,
        amalgama: null,
        nome: "Olhos da Besta",
        resumo: "O vampiro imana um brilho sobrenatural vermelho aos olhos, concedendo visão perfeita mesmo na ausência total de luz.",
        custo: "Grátis",
        dados: "—",
        resist: "—",
        mecanica: "Nenhuma jogada necessária para ativar. Enquanto ativo, o usuário ignora qualquer penalidade de visão imposta pela escuridão — incluindo sobrenatural. A aparência inumana dos olhos confere +2 dados em pools de Intimidação contra mortais.",
        duracao: "Enquanto desejado"
      },
      {
        nivel: 1,
        amalgama: null,
        nome: "Peso da Pena",
        resumo: "O vampiro pode reduzir sua massa e densidade efetivas, tornando-se quase sem peso — evitando sensores de pressão e dano de quedas, colisões ou ser arremessado.",
        custo: "Grátis",
        dados: "Raciocínio + Sobrevivência",
        resist: "—",
        mecanica: "Se o vampiro tiver tempo para se preparar, nenhuma jogada é necessária. Como reação (ex.: durante uma queda súbita), ativar o poder requer Raciocínio + Sobrevivência (Dificuldade 3). Enquanto ativo, o vampiro é imune a dano de quedas, colisões e ser arremessado. O usuário também evita ativar dispositivos que dependem de pressão, a critério do Narrador. Não pode ser usado para saltos mais longos, pois a força do vampiro é proporcionalmente reduzida.",
        duracao: "Enquanto desejado"
      },

      // NÍVEL 2
      {
        nivel: 2,
        amalgama: null,
        nome: "Armas Selvagens",
        resumo: "O vampiro pode estender suas armas naturais a proporções monstruosas — unhas que se tornam garras terríveis ou presas que se alongam como punhais.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Nenhuma jogada necessária para ativar. Quando ativado, o vampiro adiciona um modificador de +2 ao dano de Briga e causa dano Agravado de Saúde a mortais. O dano Superficial infligido por Armas Selvagens não é dividido pela metade.",
        duracao: "Uma cena"
      },
      {
        nivel: 2,
        amalgama: "Dominação 2",
        nome: "Vicissitude",
        resumo: "Raro fora do Clã Tzimisce, este poder permite ao vampiro moldar pele, músculos e até ossos à vontade — o resultado às vezes é perturbadoramente belo, às vezes monstruoso.",
        custo: "Uma Checagem de Sangue",
        dados: "Determinação + Protean",
        resist: "—",
        mecanica: "Jogue Determinação + Protean. Cada sucesso permite uma única alteração de Vicissitude — mas o total de alterações não pode exceder o nível de Protean do usuário, independentemente do número de aplicações ou sucessos. Cada alteração causa a perda de 1 ponto de Atributo Físico do usuário (nenhum Atributo pode ser reduzido abaixo de 1). Cada uso leva um turno inteiro. Alterações possíveis incluem: Redistribuição (adiciona 1 ponto a qualquer Atributo Físico, máx. 5; mudanças são visíveis mas não ameaçam a Máscara), Armas (única por sujeito; ganha arma equivalente a leve perfurante ou contundente pesado [+2 de Dano]), Armadura (converte pontos em armadura: 1 ponto = 2 pontos de valor de armadura, máx. 6), Aparência (levar uma cena inteira e teste de Destreza + Habilidade; Dificuldade 3 para ocultar identidade, 4 para melhorar Aparência, 5 para imitar pessoa específica). Alterações são curadas como dano Agravado, com cada alteração equivalente a um nível de dano.",
        duracao: "Permanente"
      },

      // NÍVEL 3
      {
        nivel: 3,
        amalgama: null,
        nome: "Fundir-se à Terra",
        resumo: "Tornando-se um com o solo, o vampiro afunda na terra — permanecendo ciente de seus arredores (exceto durante o sono diurno) e emergindo na noite seguinte, a menos que esteja em torpor.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Nenhum teste necessário, mas o vampiro deve estar em superfície natural: rochas, terra bruta, grama etc. Não funciona em concreto, asfalto ou outras superfícies artificiais. Leva um turno para afundar na terra, deixando para trás objetos carregados no topo do solo. Na terra, o vampiro está ciente de seus arredores — exceto durante o sono diurno, quando perturbações (escavação, barulhos altos) podem acordá-lo ou não como todos os vampiros.",
        duracao: "Um dia ou mais, ou até ser perturbado"
      },
      {
        nivel: 3,
        amalgama: "Dominação 2",
        nome: "Fabricar Carne",
        resumo: "Estendendo o domínio sobre a carne, o vampiro pode infligir suas manipulações nos corpos alheios — temido por sua reputação de tortura inumana, embora alguns o usem para aprimorar servos e aliados.",
        custo: "Uma Checagem de Sangue",
        dados: "Determinação + Protean vs. Vigor + Determinação (sujeito não-disposto)",
        resist: "Vigor + Determinação (sujeito não-disposto)",
        mecanica: "Pré-requisito: Vicissitude. Para usar este poder, o usuário deve trabalhar sem interrupção no sujeito, que portanto deve estar disposto ou contido. Para sujeito disposto, siga o mesmo sistema de Vicissitude. Sujeito não-disposto pode resistir com Vigor + Determinação — a margem do usuário conta como sucessos de Vicissitude. Cada uso leva uma cena inteira. O total de alterações não pode exceder o nível de Protean do usuário, independentemente do número de aplicações ou sucessos. Em caso de múltiplos usuários trabalhando em um único sujeito, conte apenas o nível de Protean mais alto.",
        duracao: "Permanente"
      },
      {
        nivel: 3,
        amalgama: null,
        nome: "Metamorfose",
        resumo: "O vampiro assume a forma de um animal de tamanho aproximado à sua massa original, ganhando atributos e sentidos naturais da criatura.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Nenhum teste necessário. A transformação leva um turno (durante o qual o usuário não pode fazer outras ações). O vampiro pode assumir apenas um tipo de animal (geralmente lobo, às vezes um grande felino ou uma cobra gigante), geralmente associado a seu clã ou ao tipo de presa mais comum. O animal, embora geralmente um exemplar espetacular da espécie, não mostra sinais de natureza sobrenatural a um observador comum. Ao transformar: ganha Atributos Físicos, sentidos e Perícias nativas do animal, além dos limites naturais de comunicação e manipulação daquela criatura. O vampiro pode usar outras Disciplinas (Auspício, Animalismo, Celeridade, Fortitude, Potência e Protean; Dominação, Ofuscação e Presença apresentam problemas; Feitiçaria de Sangue não está disponível).",
        duracao: "Uma cena, a menos que encerrada voluntariamente antes"
      },

      // NÍVEL 4
      {
        nivel: 4,
        amalgama: null,
        nome: "Metamorfose Avançada",
        resumo: "Este poder concede uma forma animal adicional ao usuário, desta vez permitindo também alterar o próprio tamanho — vampiros comumente se transformam em morcegos, ratos ou insetos.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Pré-requisito: Metamorfose. Mesmo sistema de Metamorfose.",
        duracao: "Uma cena, a menos que encerrada voluntariamente antes"
      },
      {
        nivel: 4,
        amalgama: "Dominação 2",
        nome: "Forma Horrível",
        resumo: "Com tal domínio do corpo que supera as limitações naturais, o vampiro assume uma forma verdadeiramente monstruosa — garras terríveis, presas salientes, músculos cordados e feições distorcidas.",
        custo: "Uma Checagem de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "Pré-requisito: Vicissitude. A Forma Horrível leva um turno inteiro para ativar — durante o qual o vampiro só pode se defender, usando suas pools de dados pré-Forma Horrível. Então concede ao vampiro um número de alterações gratuitas de Vicissitude (nenhum ponto de Atributo é perdido) igual ao seu nível de Protean. Podem ser gastas em Redistribuição, Armas e Armadura. Com a Besta tão perto da superfície, quaisquer críticos rolados enquanto usando Forma Horrível para qualquer razão são considerados críticos sujos, e qualquer teste de frenesi realizado é em Dificuldade +2. O vampiro também assume uma aparência inegavelmente inumana e é incapaz de comunicar-se além de grunhidos, silvos e rugidos.",
        duracao: "Uma cena, a menos que encerrada voluntariamente antes"
      },

      // NÍVEL 5
      {
        nivel: 5,
        amalgama: null,
        nome: "Forma de Névoa",
        resumo: "O vampiro adquire o poder lendário de se transformar em nuvem de névoa — perceptível ao olho mas intocável por qualquer coisa exceto fogo, luz solar e agressão sobrenatural.",
        custo: "Um a três Checagens de Sangue",
        dados: "—",
        resist: "—",
        mecanica: "A transformação leva 3 turnos (pode ser acelerada com Checagens de Sangue adicionais, na proporção de uma Jogada por turno salvo). Na forma de névoa, o vampiro se move à velocidade de caminhada e percebe seus arredores por meios místicos como se estivesse presente normalmente. Não pode fazer contato visual nem falar. Pode usar apenas Disciplinas que não requeiram forma física ou presença, a critério do Narrador. Só pode ser danificado por luz solar, fogo e ataques sobrenaturais imateriais (como certos Rituais). Cabe por tubulações, frestas e rachaduras.",
        duracao: "Uma cena, a menos que encerrada voluntariamente antes"
      },
      {
        nivel: 5,
        amalgama: null,
        nome: "O Coração Desvinculado",
        resumo: "Tendo dominado o Protean, o interior do usuário torna-se maleável — o coração se destaca e se move livremente dentro do peito, tornando o vampiro extremamente difícil de empalar e permitindo libertar-se da paralisia.",
        custo: "Grátis",
        dados: "Força + Determinação (Dificuldade 5, para se libertar da paralisia)",
        resist: "—",
        mecanica: "Aumenta a Dificuldade de qualquer teste não-combativo para empalar o vampiro em 3. Em combate de Armas Brancas, apenas uma vitória crítica do atacante faz a estaca penetrar o coração do usuário. Mesmo se empalado, o usuário pode fazer uma Checagem de Sangue e jogar Força + Determinação (Dificuldade 5) uma vez por hora. Uma vitória significa que ele se liberta da paralisia enquanto a estaca é expulsa do corpo. Não pode tentar essa expulsão de estaca com Fome 5.",
        duracao: "Passiva"
      },
      {
        nivel: 5,
        amalgama: "Animali­smo 2",
        nome: "Um com a Terra",
        resumo: "O Cainita possui tal domínio sobre a própria forma que pode estendê-la ao próprio domínio — não apenas mergulhando na terra, mas mantendo consciência sobrenatural de eventos em até um quilômetro ao redor.",
        custo: "Duas Checagens de Sangue",
        dados: "Raciocínio + Animalismo (para eventos discretos ou ocultos)",
        resist: "Pool de dados oponente relevante (para eventos ocultos)",
        mecanica: "Pré-requisito: Fundir-se à Terra. Como Fundir-se à Terra, exceto que o vampiro não está limitado pela composição da superfície — pode descansar dentro de paredes de mansões, sob tábuas de assoalho ou sob poças de 'água morta'. Adicionalmente, em um raio de aproximadamente um quilômetro a partir de onde o corpo do vampiro fundiu-se à terra, o vampiro pode experimentar qualquer estímulo sensorial nessa área — ouvir conversas, sentir cheiros, etc. O vampiro experimenta esses sentidos através da presença de animais, por menores que sejam, nas proximidades dos eventos. Se eventos forem discretos ou intencionalmente ocultos, é necessário Raciocínio + Animalismo vs. a pool de dados oponente relevante. Emergir deste estado antes do anoitecer do dia seguinte requer Determinação + Protean (Dificuldade 4) e pode levar até uma hora — vitória crítica permite emergir instantaneamente.",
        duracao: "Um dia ou mais, ou até ser fisicamente perturbado"
      }
    ]
  }
};
