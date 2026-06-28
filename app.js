const $ = id => document.getElementById(id);
let currentClan = null;
let currentDisc = null;

document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  renderIntro();
  setupMobile();

  // Diagnóstico: loga todas as chaves disponíveis no console
  console.log('[S&S] DISCIPLINES carregado:', typeof DISCIPLINES !== 'undefined' ? Object.keys(DISCIPLINES) : 'NÃO DEFINIDO');
  console.log('[S&S] CLANS carregado:', typeof CLANS !== 'undefined' ? CLANS.map(c=>c.id) : 'NÃO DEFINIDO');
});

window.showClan      = showClan;
window.showDisc      = showDisc;
window.showIntro     = showIntro;
window.showPredador  = showPredador;
window._btnDisc      = _btnDisc;

// Armazena pares [discKey, clanId] indexados por inteiro simples
const _btnMap = [];

function _btnDisc(idx) {
  const [discKey, clanId] = _btnMap[idx];
  showDisc(discKey, clanId);
}

// ── Discipline quick-access list (key → display name) ──────────
const DISC_LIST = [
  {key:'animalismo',  nome:'Animalismo'},
  {key:'auspicio',    nome:'Auspício'},
  {key:'celeridade',  nome:'Celeridade'},
  {key:'dominacao',   nome:'Dominação'},
  {key:'feiticaria',  nome:'Feitiçaria de Sangue'},
  {key:'fortitude',   nome:'Fortitude'},
  {key:'oblivio',     nome:'Oblívio'},
  {key:'ofuscacao',   nome:'Ofuscação'},
  {key:'potencia',    nome:'Potência'},
  {key:'presenca',    nome:'Presença'},
  {key:'proteanismo', nome:'Proteanismo'},
];

// ── Predator types data ────────────────────────────────────────
const PREDADOR_TYPES = [
  {
    id: 'gato-de-beco',
    nome: 'Gato de Beco',
    icone: '🐱',
    pool: 'Força + Briga / Raciocínio + Sagacidade',
    descricao: 'Para estes Cainitas, a violência é o caminho mais curto. O Gato de Beco se alimenta pela força bruta, atacando quem pode quando pode. Intimidação e Dominação mantêm as vítimas em silêncio.',
    ganhos: ['Especialização em Intimidação (Assaltos) ou Briga (Agarramentos)', 'Um ponto em Celeridade ou Potência', 'Três pontos de Contatos Criminosos'],
    perdas: ['Perde um ponto de Humanidade']
  },
  {
    id: 'coletor-de-bolsas',
    nome: 'Coletor de Bolsas',
    icone: '🩸',
    pool: 'Inteligência + Sagacidade',
    descricao: 'O melhor sangue nem sempre vem de um corpo vivo. O Coletor de Bolsas consome sangue preservado, deteriorado ou de cadáveres, graças ao Mérito Estômago de Ferro. Hospitais, bancos de sangue e mercado negro são seus territórios. Ventrue não podem escolher este tipo.',
    ganhos: ['Especialização em Ladroagem (Arrombamento) ou Sagacidade (Mercado Negro)', 'Um ponto em Feitiçaria de Sangue (apenas Tremere/Banu Haqim), Oblívio (apenas Hecata) ou Ofuscação', 'Mérito de Alimentação (•••) Estômago de Ferro'],
    perdas: ['Defeito Inimigo (••) — alguém que acredita que este vampiro lhe deve algo']
  },
  {
    id: 'sanguessuga',
    nome: 'Sanguessuga',
    icone: '🦷',
    pool: '— (não é abstraído em rolagem)',
    descricao: 'Alguns Cainitas rejeitam o sangue mortal e se alimentam do vitae de outros vampiros — por caça, coerção ou como forma de pagamento. Uma prática de alto risco que a maioria da sociedade vampírica condena.',
    ganhos: ['Especialização em Briga (Cainitas) ou Furtividade (Contra Cainitas)', 'Um ponto em Celeridade ou Proteanismo', 'Potência de Sangue aumentada em um'],
    perdas: ['Perde um ponto de Humanidade', 'Defeito Segredo Sombrio: Diablerie (••) ou Defeito Rejeitado (••)', 'Defeito de Alimentação (••): Exclusão de Presa (Mortais)']
  },
  {
    id: 'acougueiro',
    nome: 'Açougueiro',
    icone: '🏠',
    pool: 'Manipulação + Subterfúgio',
    descricao: 'O Açougueiro se alimenta de família e amigos próximos — os seus ou os de outros — mantendo os laços enquanto drena discretamente. A Camarilla proíbe esta prática por ser uma brecha à Máscara esperando para acontecer.',
    ganhos: ['Especialização em Persuasão (Gaslighting) ou Subterfúgio (Encobrimentos)', 'Um ponto em Dominação ou Animalismo', 'Vantagem Rebanho (••)'],
    perdas: ['Defeito Segredo Sombrio (•): Açougueiro']
  },
  {
    id: 'consensualista',
    nome: 'Consensualista',
    icone: '🤝',
    pool: 'Manipulação + Persuasão',
    descricao: 'O Consensualista jamais se alimenta contra a vontade da vítima — seja fingindo uma coleta de sangue, explorando a comunidade kink ou admitindo abertamente o que é. Para a Camarilla, a última abordagem é uma violação da Máscara.',
    ganhos: ['Especialização em Medicina (Flebotomia) ou Persuasão (Recipientes)', 'Um ponto em Auspício ou Fortitude', 'Um ponto de Humanidade'],
    perdas: ['Defeito Segredo Sombrio (•): Violador da Máscara', 'Defeito de Alimentação (•): Exclusão de Presa (Não-Consentindo)']
  },
  {
    id: 'fazendeiro',
    nome: 'Fazendeiro',
    icone: '🌿',
    pool: 'Autocontrole + Empatia com Animais',
    descricao: 'O Fazendeiro se alimenta exclusivamente de animais. A Besta range de fome, mas ele se recusa a matar mortais — exceto nas piores noites. Ventrue e vampiros com Potência de Sangue 3 ou mais não podem escolher este tipo.',
    ganhos: ['Especialização em Empatia com Animais (animal específico) ou Sobrevivência (Caça)', 'Um ponto em Animalismo ou Proteanismo', 'Um ponto de Humanidade'],
    perdas: ['Defeito de Alimentação (••): Fazendeiro']
  },
  {
    id: 'osiris',
    nome: 'Osíris',
    icone: '👁️',
    pool: 'Manipulação + Subterfúgio / Intimidação + Fama',
    descricao: 'Músicos, escritores, líderes de culto — o Osíris é uma celebridade que se alimenta de seus fãs e adoradores. Acesso fácil ao sangue, mas seguidores atraem problemas com autoridades locais e rivais.',
    ganhos: ['Especialização em Ocultismo (tradição específica) ou Performance (área específica)', 'Um ponto em Feitiçaria de Sangue (apenas Tremere/Banu Haqim) ou Presença', 'Três pontos entre Fama e Rebanho'],
    perdas: ['Dois pontos entre Defeitos de Inimigos e Defeitos Míticos']
  },
  {
    id: 'homem-de-areia',
    nome: 'Homem de Areia',
    icone: '😴',
    pool: 'Destreza + Furtividade',
    descricao: 'O Homem de Areia caça mortais enquanto dormem. Usa furtividade e Disciplinas para se alimentar sem ser percebido. Raramente é pego — mas quando é, os problemas são certos.',
    ganhos: ['Especialização em Medicina (Anestésicos) ou Furtividade (Arrombamento)', 'Um ponto em Auspício ou Ofuscação', 'Um ponto em Recursos'],
    perdas: []
  },
  {
    id: 'rainha-da-cena',
    nome: 'Rainha da Cena',
    icone: '👑',
    pool: 'Manipulação + Persuasão',
    descricao: 'Semelhante ao Osíris, mas voltado a uma subcultural específica — moda, street art, música underground. As vítimas o adoram por seu status. Quem suspeita do que ele é simplesmente não é acreditado.',
    ganhos: ['Especialização em Etiqueta, Liderança ou Sagacidade (cena específica)', 'Um ponto em Dominação ou Potência', 'Vantagem Fama (•)', 'Vantagem Contato (•)'],
    perdas: ['Defeito de Influência (•): Desprezado (fora de sua subcultural) ou Defeito de Alimentação (•): Exclusão de Presa']
  },
  {
    id: 'sereia',
    nome: 'Sereia',
    icone: '💋',
    pool: 'Carisma + Subterfúgio',
    descricao: 'A Sereia usa sedução e Disciplinas para atrair presas, alimentando-se sob o pretexto de atos sexuais. Clubes e encontros casuais são seu território natural. No fundo de seus momentos mais sombrios, reconhece o que isso significa.',
    ganhos: ['Especialização em Persuasão (Sedução) ou Subterfúgio (Sedução)', 'Um ponto em Fortitude ou Presença', 'Mérito Aparência (••): Belo/Bela'],
    perdas: ['Defeito Inimigo (•): Um amante rejeitado ou parceiro ciumento']
  },
  {
    id: 'extorsionista',
    nome: 'Extorsionista',
    icone: '💼',
    pool: 'Força/Manipulação + Intimidação',
    descricao: 'O Extorsionista obtém sangue em troca de serviços — proteção, segurança, vigilância. Às vezes o serviço é genuíno; muitas vezes é construído sobre informação fabricada para tornar o acordo mais atraente.',
    ganhos: ['Especialização em Intimidação (Coerção) ou Ladroagem (Segurança)', 'Um ponto em Dominação ou Potência', 'Três pontos entre Contatos e Recursos'],
    perdas: ['Defeito Inimigo (••): A polícia ou uma vítima que escapou e quer vingança']
  },
  {
    id: 'saqueador-de-tumulos',
    nome: 'Saqueador de Túmulos',
    icone: '⚰️',
    pool: 'Determinação + Medicina / Manipulação + Percepção',
    descricao: 'Semelhante ao Coletor de Bolsas, o Saqueador de Túmulos não desperdiça sangue — mesmo o de cadáveres. Trabalha em necrotérios, hospitais ou se alimenta de enlutados em cemitérios.',
    ganhos: ['Especialização em Ocultismo (Rituais Funerários) ou Medicina (Cadáveres)', 'Um ponto em Fortitude ou Oblívio', 'Mérito de Alimentação (•••): Estômago de Ferro', 'Vantagem Refúgio (•)'],
    perdas: ['Defeito de Rebanho (••): Predador Óbvio']
  },
  {
    id: 'assassino-de-estrada',
    nome: 'Assassino de Estrada',
    icone: '🛣️',
    pool: 'Destreza/Carisma + Condução',
    descricao: 'Nunca fica em um lugar por muito tempo. O Assassino de Estrada está sempre em movimento, caçando aqueles que não serão notados caso desapareçam. O risco vale a recompensa.',
    ganhos: ['Especialização em Sobrevivência (A Estrada) ou Investigação (Jargão Vampírico)', 'Um ponto em Fortitude ou Proteanismo', 'Dois pontos adicionais de Rebanho Migrante'],
    perdas: ['Defeito de Alimentação: Exclusão de Presa (Locais)']
  },
  {
    id: 'ceifador',
    nome: 'Ceifador',
    icone: '🏥',
    pool: 'Inteligência + Percepção/Medicina',
    descricao: 'Caça dentro de hospices, asilos e locais onde os moribundos residem. O Ceifador está em movimento constante em busca de novas vítimas próximas do fim de sua vida — e pode desenvolver um paladar para doenças específicas.',
    ganhos: ['Especialização em Percepção (Morte) ou Ladroagem (Falsificação)', 'Um ponto em Auspício ou Oblívio', 'Um ponto em Aliados ou Influência na comunidade médica', 'Um ponto de Humanidade'],
    perdas: ['Defeito de Alimentação (•): Exclusão de Presa (Mortais Saudáveis)']
  },
  {
    id: 'monteiro',
    nome: 'Monteiro',
    icone: '🎯',
    pool: 'Inteligência + Furtividade / Determinação + Furtividade',
    descricao: 'Carrega uma tradição aristocrática espanhola: usa lacaios para conduzir as presas até ele, seja via golpes longos, flash mobs ou perseguições. A caça não é sempre literal, mas sempre é organizada.',
    ganhos: ['Especialização em Liderança (Alcateia de Caça) ou Furtividade (Vigilância)', 'Um ponto em Dominação ou Ofuscação', 'Dois pontos de Lacaios'],
    perdas: ['Perde um ponto de Humanidade']
  },
  {
    id: 'perseguidor',
    nome: 'Perseguidor',
    icone: '🔍',
    pool: 'Inteligência + Investigação / Vigor + Furtividade',
    descricao: 'Estuda seus alvos com paciência — hábitos, rotinas, se serão notados caso sumam. O Perseguidor age no momento certo, quando a fome e a oportunidade se alinham perfeitamente.',
    ganhos: ['Especialização em Investigação (Perfilamento) ou Furtividade (Vigilância)', 'Um ponto em Animalismo ou Auspício', 'Mérito (•): Farejador', 'Um ponto de Contato entre moradores moralmente flexíveis da área de caça'],
    perdas: ['Perde um ponto de Humanidade']
  },
  {
    id: 'alçapao',
    nome: 'Alçapão',
    icone: '🕸️',
    pool: 'Carisma + Furtividade / Destreza + Furtividade / Raciocínio + Percepção + pontos de Refúgio',
    descricao: 'Como a aranha, o Alçapão constrói um ninho e atrai presas para dentro. Um parque de diversões, uma casa abandonada, um clube subterrâneo — a vítima vem até ele. Pode apenas aterrorizar, drenar lentamente ou dar uma bebida profunda e deixar ir.',
    ganhos: ['Especialização em Persuasão (Marketing) ou Furtividade (Emboscadas)', 'Um ponto em Proteanismo ou Ofuscação', 'Um ponto de Refúgio', 'Um ponto adicional em Lacaios, Rebanho ou um segundo ponto de Refúgio'],
    perdas: ['Defeito de Refúgio (•): Assustador ou Mal-Assombrado']
  },
  {
    id: 'cobrador-de-dizimos',
    nome: 'Cobrador de Dízimos',
    icone: '⚖️',
    pool: '—',
    descricao: 'Detém poder suficiente para que outros Cainitas lhe paguem tributo na forma de recipientes selecionados, entregues regularmente ou sob demanda. A Máscara é problema de todos os outros.',
    ganhos: ['Especialização em Intimidação (Cainitas) ou Liderança (Cainitas)', 'Um ponto em Dominação ou Presença', 'Três pontos entre Domínio ou Status'],
    perdas: ['Defeito Adversário (••)']
  }
];

function showPredador() {
  currentClan = null;
  currentDisc = null;
  buildNav();
  $('introPage').style.display    = 'none';
  $('clanDetail').style.display   = 'none';
  $('discDetail').style.display   = 'none';
  $('predadorPage').style.display = 'block';

  const cardsHTML = PREDADOR_TYPES.map(p => `
    <div class="pred-card">
      <div class="pred-card-header">
        <span class="pred-icone">${p.icone}</span>
        <span class="pred-nome">${p.nome}</span>
      </div>
      <p class="pred-pool"><span class="pred-pool-label">Pool</span> ${p.pool}</p>
      <p class="pred-desc">${p.descricao}</p>
      <div class="pred-efeitos">
        ${p.ganhos.length ? `<div class="pred-col"><div class="pred-col-title pred-gain-title">Ganhos</div><ul class="pred-list pred-gain-list">${p.ganhos.map(g=>`<li>${g}</li>`).join('')}</ul></div>` : ''}
        ${p.perdas.length ? `<div class="pred-col"><div class="pred-col-title pred-loss-title">Perdas</div><ul class="pred-list pred-loss-list">${p.perdas.map(l=>`<li>${l}</li>`).join('')}</ul></div>` : ''}
      </div>
    </div>`).join('');

  $('predadorPage').innerHTML = `
    <div class="pred-page">
      <div class="clan-nav-bar">
        <button class="back-btn" onclick="showIntro()">← Início</button>
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-current">Tipos de Predador</span>
      </div>
      <div class="disc-page-header">
        <div class="disc-page-inner">
          <div class="disc-page-sub">Criação de Personagem</div>
          <h2 class="disc-page-title">Tipos de Predador</h2>
          <p style="margin-top:14px;font-size:17px;color:var(--text2);line-height:1.8;font-style:italic;max-width:700px">Cada vampiro tem seu método preferido. A escolha do Tipo de Predador molda especializações, Disciplinas, Méritos e Defeitos iniciais — pois a experiência de caçar sangue define quem o Cainita se torna. O Narrador pode permitir pools alternativos dependendo da abordagem.</p>
        </div>
      </div>
      <div class="disc-page-body pred-grid">
        ${cardsHTML}
      </div>
      <div class="ornament" style="padding:32px 0">✦ ✦ ✦</div>
    </div>`;

  $('main').scrollTo(0, 0);
  $('sidebar').classList.remove('open');
  $('overlay').classList.remove('open');
}

function buildNav() {
  const clansOpen = _navState.clans;
  const discsOpen = _navState.discs;

  const clansHTML = CLANS.map(c => `
    <div class="clan-nav-item ${currentClan?.id === c.id ? 'active' : ''}"
         onclick="showClan('${c.id}')">
      <span class="nav-symbol">${c.simbolo}</span>
      <span class="nav-name">${c.nome}</span>
      <span class="nav-arrow">›</span>
    </div>`).join('');

  const discsHTML = DISC_LIST.map(d => `
    <div class="disc-nav-item ${currentDisc === d.key ? 'active' : ''}"
         onclick="showDisc('${d.key}', null)">
      <span class="nav-symbol">⬥</span>
      <span class="nav-name">${d.nome}</span>
      <span class="nav-arrow">›</span>
    </div>`).join('');

  $('clanNav').innerHTML = `
    <div class="nav-group">
      <div class="nav-group-header ${clansOpen ? 'open' : ''}" onclick="_toggleNav('clans')">
        <span class="nav-group-icon">🩸</span>
        <span class="nav-group-label">Clãs</span>
        <span class="nav-group-arrow">${clansOpen ? '▾' : '›'}</span>
      </div>
      <div class="nav-group-body" style="display:${clansOpen ? 'block' : 'none'}">
        ${clansHTML}
      </div>
    </div>
    <div class="nav-group">
      <div class="nav-group-header ${discsOpen ? 'open' : ''}" onclick="_toggleNav('discs')">
        <span class="nav-group-icon">✦</span>
        <span class="nav-group-label">Disciplinas</span>
        <span class="nav-group-arrow">${discsOpen ? '▾' : '›'}</span>
      </div>
      <div class="nav-group-body" style="display:${discsOpen ? 'block' : 'none'}">
        ${discsHTML}
      </div>
    </div>
    <div class="nav-group nav-group--single">
      <div class="nav-group-header nav-group-header--single" onclick="showPredador()">
        <span class="nav-group-icon">🦴</span>
        <span class="nav-group-label">Tipos de Predador</span>
        <span class="nav-group-arrow">›</span>
      </div>
    </div>`;
}

// Persistent nav state
const _navState = {clans: false, discs: false};
window._toggleNav = function(key) {
  _navState[key] = !_navState[key];
  buildNav();
};

function renderIntro() {
  $('introPage').innerHTML = `
    <div class="intro-page">
      <h1 class="intro-campaign-title">Sangue &amp; Safira</h1>
      <div class="intro-campaign-sub">Campanha · Vampiro: A Máscara · 5ª Edição</div>

      <div class="blood-divider"><span class="blood-divider-icon">🩸</span></div>

      <a class="btn-barcelona" href="https://docs.google.com/document/d/1c6Z9mkb3h51A4mFp_BryMnWlG1iA8CdnOpftjimxWDo/edit?usp=sharing" target="_blank" rel="noopener">
        ✦ Bem-Vindos à Barcelona ✦
      </a>

      <div class="blood-divider" style="margin-top:56px"><span class="blood-divider-icon">✦</span></div>

      <h2 class="intro-section-title">Nossos Cainitas</h2>


      <div class="cainitas-grid">

        <div class="cainita-card cainita-card--com-foto">
          <div class="cainita-foto-wrap">
            <img src="carmen.png" alt="Carmen" class="cainita-foto"/>
          </div>
          <div class="cainita-nome">Carmen</div>
          <div class="cainita-clan">Ravnos</div>
          <p class="cainita-bio">A arquiteta de tudo. Quarenta anos de aparência e séculos de paciência. Carmen chegou a Barcelona antes de todos os outros e ficou — não por amor à cidade, mas porque viu nela o lugar certo para construir o que vem a seguir. Ela abrigou, empregou, protegeu. Cada favor é um fio que ela segura. Ela nunca mente diretamente. Nunca menciona São Paulo por iniciativa própria. O que ela está construindo tem um nome que ainda não pronunciou em voz alta para todos.</p>
        </div>

        <div class="cainita-card">
          <div class="cainita-symbol">🦅</div>
          <div class="cainita-nome">Adriel</div>
          <div class="cainita-clan">Ravnos</div>

        </div>

        <div class="cainita-card">
          <div class="cainita-symbol">🌹</div>
          <div class="cainita-nome">Flora</div>
          <div class="cainita-clan">Toreador</div>

        </div>

        <div class="cainita-card">
          <div class="cainita-symbol">♜</div>
          <div class="cainita-nome">Xavi A.</div>
          <div class="cainita-clan">Ventrue</div>

        </div>

        <div class="cainita-card">
          <div class="cainita-symbol">🐀</div>
          <div class="cainita-nome">Ronaldo</div>
          <div class="cainita-clan">Nosferatu</div>

        </div>

        <div class="cainita-card">
          <div class="cainita-symbol">🐺</div>
          <div class="cainita-nome">Albert</div>
          <div class="cainita-clan">Gangrel</div>

        </div>

        <div class="cainita-card">
          <div class="cainita-symbol">☽</div>
          <div class="cainita-nome">Catharina Montenegro</div>
          <div class="cainita-clan">Malkavian</div>

        </div>

        <div class="cainita-card">
          <div class="cainita-symbol">⬡</div>
          <div class="cainita-nome">César Rothschild</div>
          <div class="cainita-clan">Banu Haqim</div>
        </div>

      </div>

      <div class="blood-divider" style="margin-top:56px"><span class="blood-divider-icon">✦</span></div>

      <div class="page-eyebrow" style="margin-top:0">Guia dos Clãs</div>
      <p class="intro-text">Na noite eterna de Vampiro: A Máscara, treze clãs dividem o mundo dos mortos-vivos. Cada um carrega séculos de história, filosofia própria e uma maldição singular — a herança de Caim, o Primeiro Assassino.</p>
      <p class="intro-text">Selecione um clã para explorar suas origens, disciplinas, o sabor único de sua fome e a perdição que aguarda no fundo de cada noite.</p>
      <div class="blood-divider"><span class="blood-divider-icon">🩸</span></div>
      <div class="clan-grid">
        ${CLANS.map(c => `
          <div class="clan-thumb" onclick="showClan('${c.id}')">
            <span class="clan-thumb-symbol">${c.simbolo}</span>
            <span class="clan-thumb-name">${c.nome}</span>
            <span class="clan-thumb-nick">${c.alcunhas[0]}</span>
          </div>`).join('')}
      </div>
      <div class="ornament" style="margin-top:60px">✦ ✦ ✦</div>
    </div>`;
}

function showClan(id) {
  const c = CLANS.find(x => x.id === id);
  if (!c) return;
  currentClan = c;
  currentDisc = null;
  buildNav();

  $('introPage').style.display = 'none';
  $('discDetail').style.display = 'none';
  $('clanDetail').style.display = 'block';

  // Registra cada disciplina no _btnMap e usa o índice no onclick
  const discCards = c.disciplinas.map(d => {
    const idx = _btnMap.length;
    _btnMap.push([d.key, c.id]);
    console.log(`[S&S] Botão ${idx}: key="${d.key}" clanId="${c.id}"`);
    return `
      <div class="disc-card">
        <div class="disc-card-nome">${d.nome}</div>
        <div class="disc-card-desc">${d.descricao}</div>
        <button class="disc-card-btn" onclick="_btnDisc(${idx})">Ver Habilidades →</button>
      </div>`;
  }).join('');

  const perdicoesHTML = c.perdicoes.map(p => `
    <div class="perdicao-item">
      <div class="perdicao-nome">${p.nome}</div>
      <p class="perdicao-text">${p.texto}</p>
    </div>`).join('');

  $('clanDetail').innerHTML = `
    <div class="clan-page" style="--clan-color:${c.cor}">
      <div class="clan-nav-bar">
        <button class="back-btn" onclick="showIntro()">← Todos os Clãs</button>
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-current">${c.nome}</span>
      </div>
      <div class="clan-header">
        <div class="clan-header-inner">
          <div class="clan-big-symbol">${c.simbolo}</div>
          <div class="clan-header-text">
            <div class="clan-eyebrow">Clã</div>
            <h2 class="clan-name">${c.nome}</h2>
            <div class="clan-alcunhas">${c.alcunhas.map(a => `<span class="alcunha-pill">${a}</span>`).join('')}</div>
            <blockquote class="clan-quote">${c.citacao}</blockquote>
          </div>
        </div>
      </div>
      <div class="clan-body">
        <div class="clan-main">
          <p class="section-label">Resumo</p>
          <p class="clan-resumo">${c.resumo}</p>
          <div class="blood-divider"><span class="blood-divider-icon">✦</span></div>
          <p class="section-label">Disciplinas</p>
          <div class="disciplinas-destaque">
            <div class="disc-cards">${discCards}</div>
          </div>
          <div class="blood-divider"><span class="blood-divider-icon">✦</span></div>
          <p class="section-label">História</p>
          <p class="clan-historia">${c.historia}</p>
        </div>
        <div class="clan-side">
          <div class="side-card">
            <div class="side-card-title">⚠ Perdições</div>
            ${perdicoesHTML}
          </div>
          <div class="side-card">
            <div class="side-card-title">🩸 Fome — Compulsão</div>
            <div class="fome-nome">${c.fome.nome}</div>
            <p class="fome-text">${c.fome.descricao}</p>
          </div>
        </div>
      </div>
      <div class="ornament" style="padding:32px 0">✦ ✦ ✦</div>
    </div>`;

  $('main').scrollTo(0, 0);
  const active = document.querySelector('.clan-nav-item.active');
  if (active) active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  $('sidebar').classList.remove('open');
  $('overlay').classList.remove('open');
}

function showDisc(discKey, clanId) {
  console.log('[S&S] showDisc chamado com key:', JSON.stringify(discKey), 'clanId:', clanId);
  console.log('[S&S] Chaves em DISCIPLINES:', Object.keys(DISCIPLINES));

  // Busca tolerante: exata → minúsculas → sem acento
  let disc = DISCIPLINES[discKey];
  if (!disc) disc = DISCIPLINES[discKey.toLowerCase()];
  if (!disc) disc = DISCIPLINES[_normalize(discKey)];
  if (!disc) {
    // Tenta encontrar qualquer chave que contenha o discKey normalizado
    const norm = _normalize(discKey);
    const found = Object.keys(DISCIPLINES).find(k => _normalize(k) === norm);
    if (found) disc = DISCIPLINES[found];
  }

  if (!disc) {
    console.error('[S&S] Disciplina NÃO encontrada para key:', JSON.stringify(discKey));
    alert(`Disciplina não encontrada: "${discKey}"\n\nChaves disponíveis:\n${Object.keys(DISCIPLINES).join(', ')}`);
    return;
  }

  currentDisc = discKey;
  $('introPage').style.display  = 'none';
  $('clanDetail').style.display = 'none';
  $('discDetail').style.display = 'block';

  const levels = {};
  disc.habilidades.forEach(h => {
    if (!levels[h.nivel]) levels[h.nivel] = [];
    levels[h.nivel].push(h);
  });

  const clan = CLANS.find(x => x.id === clanId);
  const discNome = clan
    ? (clan.disciplinas.find(d => d.key === discKey)?.nome || _titularize(discKey))
    : _titularize(discKey);

  // Botão de voltar — idx no _btnMap
  const backIdx = _btnMap.length;
  _btnMap.push([null, clanId]); // marcador de "volta"

  const levelsHTML = Object.keys(levels).sort((a, b) => a - b).map(lv => `
    <div class="hab-level-group">
      <div class="hab-level-title">Nível ${lv}</div>
      <div class="hab-cards">
        ${levels[lv].map(h => `
          <div class="hab-card">
            <div class="hab-card-header">
              <div class="hab-card-nome">${h.nome}</div>
              ${h.amalgama && h.amalgama !== '-'
                ? `<span class="hab-card-amalgama">Amalgama: ${h.amalgama}</span>`
                : ''}
            </div>
            <div class="hab-card-resumo">${h.resumo}</div>
            ${h.mecanica && h.mecanica !== '-'
              ? `<div class="hab-card-mecanica">${h.mecanica}</div>`
              : ''}
            <div class="hab-card-meta">
              ${_metaItem('Custo',       h.custo,  true)}
              ${_metaItem('Dados',       h.dados)}
              ${_metaItem('Resistência', h.resist)}
              ${_metaItem('Duração',     h.duracao)}
            </div>
          </div>`).join('')}
      </div>
    </div>`).join('');

  // ── Cerimônias (opcional — apenas Oblívio por ora) ──────────────────────────
  let cerimoniaHTML = '';
  if (disc.cerimonias && disc.cerimonias.length) {
    const cLevels = {};
    disc.cerimonias.forEach(c => {
      if (!cLevels[c.nivel]) cLevels[c.nivel] = [];
      cLevels[c.nivel].push(c);
    });

    const cLevelsHTML = Object.keys(cLevels).sort((a, b) => a - b).map(lv => `
      <div class="hab-level-group">
        <div class="hab-level-title">Nível ${lv}</div>
        <div class="hab-cards">
          ${cLevels[lv].map(c => `
            <div class="hab-card">
              <div class="hab-card-header">
                <div class="hab-card-nome">${c.nome}</div>
                <span class="hab-card-amalgama">Pré-req.: ${c.prerequisito}</span>
              </div>
              <div class="hab-card-resumo">${c.resumo}</div>
              ${c.processo ? `<div class="hab-card-mecanica"><strong class="hab-sublabel">Processo</strong><br>${c.processo}</div>` : ''}
              ${c.mecanica ? `<div class="hab-card-mecanica" style="margin-top:10px"><strong class="hab-sublabel">Sistema</strong><br>${c.mecanica}</div>` : ''}
              <div class="hab-card-meta">
                ${_metaItem('Ingredientes', c.ingredientes)}
                ${_metaItem('Custo',        c.custo, true)}
                ${_metaItem('Dados',        c.dados)}
                ${_metaItem('Resistência',  c.resist)}
                ${_metaItem('Duração',      c.duracao)}
              </div>
            </div>`).join('')}
        </div>
      </div>`).join('');

    cerimoniaHTML = `
      <div class="cerimonia-section">
        <div class="blood-divider" style="margin:48px 0 32px"><span class="blood-divider-icon">☠</span></div>
        <h3 class="cerimonia-title">Cerimônias</h3>
        <p class="cerimonia-intro">${disc.cerimonias_intro}</p>
        ${cLevelsHTML}
      </div>`;
  }

  // ── Rituais (Feitiçaria de Sangue) ──────────────────────────────
  let rituaisHTML = '';
  if (disc.rituais && disc.rituais.length) {
    const rLevels = {};
    disc.rituais.forEach(r => {
      if (!rLevels[r.nivel]) rLevels[r.nivel] = [];
      rLevels[r.nivel].push(r);
    });

    const rIntroHTML = disc.rituais_intro
      ? `<p class="cerimonia-intro" style="margin-bottom:32px">${disc.rituais_intro}</p>`
      : '';

    const rLevelsHTML = Object.keys(rLevels).sort((a, b) => a - b).map(lv => `
      <div class="hab-level-group">
        <div class="hab-level-title">Nível ${lv}</div>
        <div class="hab-cards">
          ${rLevels[lv].map(r => `
            <div class="hab-card">
              <div class="hab-card-header">
                <div class="hab-card-nome">${r.nome}</div>
              </div>
              <div class="hab-card-resumo">${r.resumo}</div>
              ${r.processo ? `<div class="hab-card-mecanica"><strong class="hab-sublabel">Processo</strong><br>${r.processo}</div>` : ''}
              ${r.mecanica ? `<div class="hab-card-mecanica" style="margin-top:10px"><strong class="hab-sublabel">Sistema</strong><br>${r.mecanica}</div>` : ''}
              <div class="hab-card-meta">
                ${_metaItem('Ingredientes', r.ingredientes)}
                ${_metaItem('Custo',        r.custo, true)}
                ${_metaItem('Dados',        r.dados)}
                ${_metaItem('Resistência',  r.resist)}
                ${_metaItem('Duração',      r.duracao)}
              </div>
            </div>`).join('')}
        </div>
      </div>`).join('');

    rituaisHTML = `
      <div class="cerimonia-section">
        <div class="blood-divider" style="margin:48px 0 32px"><span class="blood-divider-icon">⬥</span></div>
        <h3 class="cerimonia-title">Rituais de Feitiçaria de Sangue</h3>
        ${rIntroHTML}
        ${rLevelsHTML}
      </div>`;
  }

  $('discDetail').innerHTML = `
    <div class="disc-page">
      <div class="clan-nav-bar">
        <button class="back-btn" onclick="showClan('${clanId}')">← Voltar ao Clã</button>
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-current">${discNome}</span>
      </div>
      <div class="disc-page-header">
        <div class="disc-page-inner">
          <div class="disc-page-sub">Disciplina</div>
          <h2 class="disc-page-title">${discNome}</h2>
          <p style="margin-top:14px;font-size:16px;color:var(--text2);line-height:1.7;font-style:italic;max-width:600px">${disc.descricao}</p>
        </div>
      </div>
      <div class="disc-page-body">${levelsHTML}${cerimoniaHTML}${rituaisHTML}</div>
      <div class="ornament" style="padding:32px 0">✦ ✦ ✦</div>
    </div>`;

  $('main').scrollTo(0, 0);
}

function showIntro() {
  currentClan = null;
  currentDisc = null;
  buildNav();
  $('introPage').style.display    = 'block';
  $('clanDetail').style.display   = 'none';
  $('discDetail').style.display   = 'none';
  $('predadorPage').style.display = 'none';
  $('main').scrollTo(0, 0);
}

function setupMobile() {
  $('menuToggle').addEventListener('click', () => {
    const open = $('sidebar').classList.toggle('open');
    $('overlay').classList.toggle('open', open);
  });
  $('overlay').addEventListener('click', () => {
    $('sidebar').classList.remove('open');
    $('overlay').classList.remove('open');
  });
}

function _metaItem(label, val, isCusto = false) {
  if (!val || val === '-') return '';
  const inner = isCusto
    ? `<span class="hab-custo-badge">${val}</span>`
    : `<span class="hab-meta-val">${val}</span>`;
  return `<div class="hab-meta-item"><span class="hab-meta-label">${label}</span>${inner}</div>`;
}

function _normalize(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function _titularize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
