// iOS «на домашний экран»: после клавиатуры (а иногда и просто так) WebKit вычитает из window.innerHeight
// высоту статус-бара — ~59 pt на iPhone, ~24–32 на iPad — и не возвращает её до перезапуска приложения.
// Снизу остаётся чёрная полоса, фото и панель не доходят до края экрана. Поворот туда-обратно это лечит:
// WebKit заново измеряет вьюпорт. Делаем то же самое — на миг прячем полноэкранный #app и возвращаем его
// (с синхронным reflow), тогда innerHeight снова равен экрану. Вызываем, когда клавиатура закрылась,
// и при возврате в приложение: на фото ничего не печатают, так что мигания не видно.
function standalone(): boolean {
  const nav = navigator as Navigator & { standalone?: boolean };
  if (nav.standalone === true) return true;
  // Safari iOS 26 умеет не выставлять navigator.standalone — смотрим режим отображения из манифеста.
  const mq = window.matchMedia;
  return !!mq && (mq('(display-mode: standalone)').matches || mq('(display-mode: fullscreen)').matches);
}

// Нормальная высота окна — самая большая, какую видели, отдельно для каждой ориентации: в ландшафте окно
// ниже, чем в портрете, и это не полоса. Сравнивать с экраном нельзя: со строкой состояния окно
// законно короче экрана на её высоту.
const seen: Record<'landscape' | 'portrait', number> = { landscape: 0, portrait: 0 };
let timer = 0;

function orientation(): 'landscape' | 'portrait' {
  return window.innerHeight >= window.innerWidth ? 'portrait' : 'landscape';
}

function remember() {
  const o = orientation();
  seen[o] = Math.max(seen[o], window.innerHeight);
}

function typing(): boolean {
  const el = document.activeElement;
  return !!el && /^(INPUT|TEXTAREA)$/.test(el.tagName);
}

// Насколько окно короче нормального для этой ориентации: 4 pt — запас на округления, больше — та самая полоса.
function shortBy(): number {
  return seen[orientation()] - window.innerHeight;
}

function heal() {
  const app = document.getElementById('app');
  if (!app) return;
  const display = app.style.display;
  app.style.display = 'none';
  void app.offsetHeight;
  app.style.display = display;
}

function check(delay: number) {
  if (!standalone()) return;
  clearTimeout(timer);
  timer = window.setTimeout(() => {
    // Клавиатура ещё открыта — не трогаем: сначала пусть закроется (blur придёт ещё раз).
    if (typing()) return;
    if (shortBy() <= 4) { remember(); return; }
    heal();
    // WebKit иногда пересчитывает не с первого раза — пробуем ещё раз.
    window.setTimeout(() => { if (!typing() && shortBy() > 4) heal(); }, 250);
  }, delay);
}

export function watchIosViewport() {
  if (!standalone()) return;
  remember();
  // Закрыли клавиатуру после ввода — обычный случай: ждём, пока она уедет, и лечим.
  window.addEventListener('focusout', (e) => {
    const el = e.target as HTMLElement | null;
    if (el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) check(400);
  }, true);
  // Вернулись в приложение или развернули — проверяем ещё раз.
  document.addEventListener('visibilitychange', () => { if (!document.hidden) check(300); });
  window.addEventListener('pageshow', () => check(300));
  window.addEventListener('orientationchange', () => check(600));
  // Размер поменялся не из-за клавиатуры (поворот, разделение экрана на iPad) — это и есть новая норма.
  window.addEventListener('resize', () => { if (!typing()) remember(); });
  // Открыли приложение уже с полосой (например, после прошлой сессии) — лечим сразу.
  check(600);
}
