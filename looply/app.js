// ─── STATE ───────────────────────────────────────────────────────────
let currentUser = JSON.parse(localStorage.getItem('ll_cu') || 'null');
let users = JSON.parse(localStorage.getItem('ll_u') || '{}');

function getState() {
  if (!currentUser) return {totalXP:0,trails:{}};
  return JSON.parse(localStorage.getItem('ll_s_'+currentUser.email) || '{"totalXP":0,"trails":{}}');
}
function saveState(s) {
  if (!currentUser) return;
  localStorage.setItem('ll_s_'+currentUser.email, JSON.stringify(s));
}

// ─── THEME ───────────────────────────────────────────────────────────
function toggleTheme() {
  const html = document.documentElement;
  const dark = html.getAttribute('data-theme') === 'dark';
  const next = dark ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  document.getElementById('tbtn').textContent = next === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('ll_theme', next);
}
(function initTheme() {
  const t = localStorage.getItem('ll_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
  const btn = document.getElementById('tbtn');
  if (btn) btn.textContent = t === 'dark' ? '🌙' : '☀️';
})();

// ─── PAGE ANIMATION ──────────────────────────────────────────────────
(function pageEnter() {
  requestAnimationFrame(() => requestAnimationFrame(() => {
    document.body.classList.add('ready');
  }));
})();

// ─── NAVIGATION ──────────────────────────────────────────────────────
function goTo(page, param) {
  document.body.classList.add('exiting');
  setTimeout(() => {
    if (page === 'landing') location.href = 'index.html';
    else if (page === 'trails') location.href = 'trilhas.html';
    else if (page === 'trail-detail') location.href = 'trilha.html?id=' + (param || '');
    else if (page === 'profile') location.href = 'perfil.html';
  }, 220);
}

function ctaStart() {
  if (currentUser) goTo('trails'); else openAuth('signup');
}
function reqTrails() {
  if (!currentUser) { openAuth('login'); return; }
  goTo('trails');
}

// ─── AUTH ────────────────────────────────────────────────────────────
function openAuth(mode) {
  document.getElementById('auth-ov').classList.add('open');
  renderAuthForm(mode);
}
function closeAuth() { document.getElementById('auth-ov').classList.remove('open'); }

function renderAuthForm(mode) {
  const c = document.getElementById('auth-content');
  if (mode === 'login') {
    c.innerHTML = `<h3>Bem-vindo de volta! 🌿</h3>
    <p class="modal-sub">Entre para continuar sua missão pelo planeta.</p>
    <div class="fg"><label>E-mail</label><input type="email" id="a-em" placeholder="seu@email.com"></div>
    <div class="fg"><label>Senha</label><input type="password" id="a-pw" placeholder="••••••••">
    <div class="a-err" id="a-err">E-mail ou senha incorretos.</div></div>
    <button class="btn-full" onclick="doLogin()">Entrar</button>
    <p class="a-switch">Não tem conta? <span onclick="renderAuthForm('signup')">Cadastre-se grátis</span></p>`;
  } else {
    c.innerHTML = `<h3>Crie sua conta 🌱</h3>
    <p class="modal-sub">Junte-se à missão de proteger o planeta!</p>
    <div class="fg"><label>Nome</label><input type="text" id="a-nm" placeholder="Seu nome"></div>
    <div class="fg"><label>E-mail</label><input type="email" id="a-em" placeholder="seu@email.com"></div>
    <div class="fg"><label>Senha</label><input type="password" id="a-pw" placeholder="Mínimo 6 caracteres">
    <div class="a-err" id="a-err">Dados inválidos ou e-mail já cadastrado.</div></div>
    <button class="btn-full" onclick="doSignup()">Criar Conta Grátis</button>
    <p class="a-switch">Já tem conta? <span onclick="renderAuthForm('login')">Entre aqui</span></p>`;
  }
}

function doLogin() {
  const em = document.getElementById('a-em').value.trim().toLowerCase();
  const pw = document.getElementById('a-pw').value;
  const err = document.getElementById('a-err');
  if (!users[em] || users[em].pw !== btoa(pw)) { err.classList.add('show'); return; }
  err.classList.remove('show');
  currentUser = {email:em, name:users[em].nm};
  localStorage.setItem('ll_cu', JSON.stringify(currentUser));
  closeAuth(); updateNav();
  showToast('🌿 Bem-vindo de volta, ' + currentUser.name + '!');
}

function doSignup() {
  const nm = (document.getElementById('a-nm')||{}).value?.trim()||'';
  const em = document.getElementById('a-em').value.trim().toLowerCase();
  const pw = document.getElementById('a-pw').value;
  const err = document.getElementById('a-err');
  if (!nm || !em || pw.length < 6 || users[em]) { err.classList.add('show'); return; }
  err.classList.remove('show');
  users[em] = {nm, pw: btoa(pw)};
  localStorage.setItem('ll_u', JSON.stringify(users));
  currentUser = {email:em, name:nm};
  localStorage.setItem('ll_cu', JSON.stringify(currentUser));
  closeAuth(); updateNav();
  showToast('🌍 Bem-vindo(a), ' + nm + '! Vamos salvar o planeta!');
}

function logout() {
  currentUser = null;
  localStorage.removeItem('ll_cu');
  goTo('landing');
}

function updateNav() {
  const li = !!currentUser;
  const set = (id, show) => { const e=document.getElementById(id); if(e) e.style.display=show?'':'none'; };
  set('btn-login', !li); set('btn-signup', !li); set('btn-logout', li);
  set('xp-badge', li); set('nl-profile', li); set('ml-profile', li);
  set('m-auth', !li); set('m-user', li);
  if (li) syncXP();
}

function syncXP() {
  const xp = getState().totalXP;
  const d = document.getElementById('xp-disp'); if(d) d.textContent = xp + ' XP';
  const m = document.getElementById('m-xp'); if(m) m.textContent = xp + ' XP';
}

// ─── MOBILE MENU ─────────────────────────────────────────────────────
function toggleMenu() {
  document.getElementById('hbg').classList.toggle('open');
  document.getElementById('mob-menu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('hbg').classList.remove('open');
  document.getElementById('mob-menu').classList.remove('open');
}

// ─── TOAST ───────────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.innerHTML = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ─── SHARED CLOSE HANDLERS ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const authOv = document.getElementById('auth-ov');
  if (authOv) authOv.addEventListener('click', e => { if(e.target===authOv) closeAuth(); });
  updateNav();
});
