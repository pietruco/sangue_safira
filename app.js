const $ = id => document.getElementById(id);
let currentClan = null;
let currentDisc = null;

document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  renderIntro();
  setupMobile();
});

function buildNav() {
  $('clanNav').innerHTML = CLANS.map(c => `
    <div class="clan-nav-item ${currentClan?.id===c.id?'active':''}" onclick="showClan('${c.id}')">
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
        ${CLANS.map(c=>`
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
  const c = CLANS.find(x=>x.id===id);
  if(!c) return;
  currentClan = c;
  currentDisc = null;
  buildNav();
  $('introPage').style.display='none';
  $('discDetail').style.display='none';
  $('clanDetail').style.display='block';

  const discHTML = c.disciplinas.map(d=>`
    <div class="disc-card">
      <div class="disc-card-nome">${d.nome}</div>
      <div class="disc-card-desc">${d.descricao}</div>
      <button class="disc-card-btn" onclick="showDisc('${d.key}','${c.id}')">Ver Habilidades →</button>
    </div>`).join('');

  const perdicoesHTML = c.perdicoes.map(p=>`
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
            <div class="clan-alcunhas">${c.alcunhas.map(a=>`<span class="alcunha-pill">${a}</span>`).join('')}</div>
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
            <div class="disc-cards">${discHTML}</div>
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

  $('main').scrollTo(0,0);
  const active = document.querySelector('.clan-nav-item.active');
  if(active) active.scrollIntoView({block:'nearest',behavior:'smooth'});
  $('sidebar').classList.remove('open');
  $('overlay').classList.remove('open');
}

function showDisc(discKey, clanId) {
  const disc = DISCIPLINES[discKey];
  if(!disc) { console.error('Discipline not found:', discKey); return; }
  currentDisc = discKey;

  $('introPage').style.display='none';
  $('clanDetail').style.display='none';
  $('discDetail').style.display='block';

  const levels = {};
  disc.habilidades.forEach(h => {
    if(!levels[h.nivel]) levels[h.nivel] = [];
    levels[h.nivel].push(h);
  });

  const levelsHTML = Object.keys(levels).sort((a,b)=>a-b).map(lv => `
    <div class="hab-level-group">
      <div class="hab-level-title">Nível ${lv}</div>
      <div class="hab-cards">
        ${levels[lv].map(h => `
          <div class="hab-card">
            <div class="hab-card-header">
              <div class="hab-card-nome">${h.nome}</div>
              ${h.amalgama&&h.amalgama!=='-'?`<span class="hab-card-amalgama">Amalgama: ${h.amalgama}</span>`:''}
            </div>
            <div class="hab-card-resumo">${h.resumo}</div>
            ${h.mecanica&&h.mecanica!=='-'?`<div class="hab-card-mecanica">${h.mecanica}</div>`:''}
            <div class="hab-card-meta">
              ${h.custo&&h.custo!=='-'?`<div class="hab-meta-item"><span class="hab-meta-label">Custo</span><span class="hab-custo-badge">${h.custo}</span></div>`:''}
              ${h.dados&&h.dados!=='-'?`<div class="hab-meta-item"><span class="hab-meta-label">Dados</span><span class="hab-meta-val">${h.dados}</span></div>`:''}
              ${h.resist&&h.resist!=='-'?`<div class="hab-meta-item"><span class="hab-meta-label">Resistência</span><span class="hab-meta-val">${h.resist}</span></div>`:''}
              ${h.duracao&&h.duracao!=='-'?`<div class="hab-meta-item"><span class="hab-meta-label">Duração</span><span class="hab-meta-val">${h.duracao}</span></div>`:''}
            </div>
          </div>`).join('')}
      </div>
    </div>`).join('');

  $('discDetail').innerHTML = `
    <div class="disc-page">
      <div class="clan-nav-bar">
        <button class="back-btn" onclick="showClan('${clanId}')">← Voltar ao Clã</button>
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-current">${discKey}</span>
      </div>
      <div class="disc-page-header">
        <div class="disc-page-inner">
          <div class="disc-page-sub">Disciplina</div>
          <h2 class="disc-page-title">${discKey}</h2>
          <p style="margin-top:14px;font-size:16px;color:var(--text2);line-height:1.7;font-style:italic;max-width:600px">${disc.descricao}</p>
        </div>
      </div>
      <div class="disc-page-body">${levelsHTML}</div>
      <div class="ornament" style="padding:32px 0">✦ ✦ ✦</div>
    </div>`;

  $('main').scrollTo(0,0);
}

function showIntro() {
  currentClan=null; currentDisc=null;
  buildNav();
  $('introPage').style.display='block';
  $('clanDetail').style.display='none';
  $('discDetail').style.display='none';
  $('main').scrollTo(0,0);
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
