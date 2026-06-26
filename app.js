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

window.showClan  = showClan;
window.showDisc  = showDisc;
window.showIntro = showIntro;
window._btnDisc  = _btnDisc;

// Armazena pares [discKey, clanId] indexados por inteiro simples
const _btnMap = [];

function _btnDisc(idx) {
  const [discKey, clanId] = _btnMap[idx];
  showDisc(discKey, clanId);
}

function buildNav() {
  $('clanNav').innerHTML = CLANS.map(c => `
    <div class="clan-nav-item ${currentClan?.id === c.id ? 'active' : ''}"
         onclick="showClan('${c.id}')">
      <span class="nav-symbol">${c.simbolo}</span>
      <span class="nav-name">${c.nome}</span>
      <span class="nav-arrow">›</span>
    </div>`).join('');
}

function renderIntro() {
  $('introPage').innerHTML = `
    <div class="intro-page">
      <div class="page-eyebrow">Sangue &amp; Safira · Campanha</div>
      <h1 class="intro-title">Guia dos Clãs</h1>
      <div class="intro-subtitle">Vampiro: A Máscara · 5ª Edição</div>
      <div class="blood-divider"><span class="blood-divider-icon">✦</span></div>
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
      <div class="disc-page-body">${levelsHTML}${cerimoniaHTML}</div>
      <div class="ornament" style="padding:32px 0">✦ ✦ ✦</div>
    </div>`;

  $('main').scrollTo(0, 0);
}

function showIntro() {
  currentClan = null;
  currentDisc = null;
  buildNav();
  $('introPage').style.display  = 'block';
  $('clanDetail').style.display = 'none';
  $('discDetail').style.display = 'none';
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
