import { syncVars } from './iosViewport';
// Дашборд в браузере и в приложении с экрана «Домой» прокручивается самой страницей, а не блоком внутри неё:
// только так Safari на iPhone пускает карточки под строку состояния и под плавающую нижнюю панель и
// сворачивает её при прокрутке (как обычные сайты). Включается, пока открыта панель (на экране с фото
// прокручивать нечего). В APK рамки и в карточке на дашборде HA — как раньше: прокручивается сетка.
const inApk = /SmartFrame\//.test(navigator.userAgent);

export function docScrollAllowed() {
  return !inApk && document.documentElement.classList.contains('pwa');
}

export function setDocScroll(on: boolean) {
  const html = document.documentElement;
  const want = on && docScrollAllowed();
  if (want === html.classList.contains('doc-scroll')) return;
  if (want) { syncVars(); html.classList.add('doc-scroll'); }
  else {
    html.classList.remove('doc-scroll');
    window.scrollTo(0, 0);
  }
}

export function docScrollOn() {
  return document.documentElement.classList.contains('doc-scroll');
}

// ── Экран с фото в Safari ────────────────────────────
// Safari сжимает свою нижнюю панель и пускает страницу под панели, только когда страница прокручена.
// Экран с фото не прокручивается — поэтому страницу делаем чуть выше экрана и прокручиваем на 1 px:
// всё видимое закреплено (position: fixed), сдвига не видно. Только в браузере: в приложении с экрана
// «Домой» и в APK панелей браузера нет.
function standalone() {
  const nav = navigator as Navigator & { standalone?: boolean };
  return nav.standalone === true || (!!window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);
}

// Сворачивать панели прокруткой умеет только Safari на iPhone и iPad. В Chromium (Electron на Windows и
// macOS, Chrome, Android WebView) панелей Safari нет, а страница на 1 px выше экрана даёт вертикальную
// полосу прокрутки — на Windows она ещё и отнимает место справа.
function iosSafari() {
  const ua = navigator.userAgent;
  const iOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  // Chrome, Firefox, Edge и Opera на iOS — тоже WebKit, но панелей Safari не сворачивают.
  return iOS && !/CriOS|FxiOS|EdgiOS|OPiOS/.test(ua);
}

export function setPhotoPeek(on: boolean) {
  const html = document.documentElement;
  const want = on && iosSafari() && docScrollAllowed() && !standalone();
  if (want) {
    html.classList.add('photo-peek');
    // После раскладки: страница уже выше экрана — прокручиваем на 1 px.
    window.setTimeout(() => { if (html.classList.contains('photo-peek') && window.pageYOffset < 1) window.scrollTo(0, 1); }, 60);
  } else {
    html.classList.remove('photo-peek');
  }
}

// Открыто окно или карточка поверх — фон (страница) не прокручивается. На iOS overflow: hidden у body этого
// не держит, поэтому body закрепляем на месте (с тем же сдвигом), а после закрытия возвращаем прокрутку.
let lockedY = 0;
export function lockScroll(on: boolean) {
  const html = document.documentElement;
  const body = document.body;
  if (on === html.classList.contains('scroll-lock')) return;
  if (on) {
    lockedY = window.pageYOffset;
    body.style.top = -lockedY + 'px';
    html.classList.add('scroll-lock');
  } else {
    html.classList.remove('scroll-lock');
    body.style.top = '';
    window.scrollTo(0, lockedY);
  }
}
