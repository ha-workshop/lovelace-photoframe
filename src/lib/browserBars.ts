// Полосы браузера (Safari на iPhone: строка состояния сверху и место под плавающей панелью снизу; Chrome на
// Android — строка состояния) убрать страница не может — красим их в цвет краёв текущего фото, чтобы они
// сливались с кадром. Safari 26 берёт цвет у элементов, прижатых к краю экрана (theme-color и фон страницы
// он не смотрит), поэтому у верхнего края — полоска нужного цвета. Она лежит под фото (z-index: -1): Safari
// её видит, глазу — нет. Снизу полоски нет: фото уходит под панель само. theme-color — для старых iOS и Chrome.
function strip(id: string): HTMLDivElement {
  let el = document.getElementById(id) as HTMLDivElement | null;
  if (!el) {
    el = document.createElement('div');
    el.id = id;
    el.setAttribute('aria-hidden', 'true');
    const s = el.style;
    s.position = 'fixed';
    s.left = '0';
    s.right = '0';
    s.height = '2px';
    s.pointerEvents = 'none';
    s.zIndex = '-1';
    s.top = '0';
    document.body.appendChild(el);
  }
  return el;
}

export function paintBrowserBars(top: string, bottom: string) {
  // В APK рамки панелей браузера нет, а фото рисует Android под прозрачной страницей: фон у html/body
  // его закрасил бы.
  if (/SmartFrame\//.test(navigator.userAgent)) return;
  let meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'theme-color';
    document.head.appendChild(meta);
  }
  meta.content = top;
  strip('bar-tint-top').style.backgroundColor = top;
  document.documentElement.style.backgroundColor = bottom;
  document.body.style.backgroundColor = bottom;
}
