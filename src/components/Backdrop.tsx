import { useEffect, useRef, useState } from 'preact/hooks';
import type { RefObject } from 'preact';
import type { Tone } from '../lib/photoTone';
import { preparePhoto, shouldContain, usePhotoFit } from '../lib/quality';

interface Props {
  urls: string[];
  index: number;
  tone: Tone | null;
  soft: boolean;
  softRef: RefObject<HTMLDivElement>;
  // Какой кадр (уже уменьшенный) сейчас на экране — по нему считается цвет интерфейса.
  onShow: (url: string) => void;
}

// contain — кадр другой ориентации, чем экран: показываем целиком, а по краям — подсветка (glow) из него же.
interface Layer { id: number; url: string; on: boolean; w: number; h: number; glow: string }

// Размер кадра и его крошечная копия (48 px) для подсветки по краям. Растянутая на экран, она сама выглядит
// размытой — фильтр blur не нужен (на «Красиво» он добавляется для мягкости).
function measure(url: string): Promise<{ w: number; h: number; glow: string }> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onerror = () => resolve({ w: 0, h: 0, glow: '' });
    img.onload = () => {
      let glow = '';
      try {
        const k = 48 / Math.max(img.naturalWidth, img.naturalHeight);
        const c = document.createElement('canvas');
        c.width = Math.max(1, Math.round(img.naturalWidth * k));
        c.height = Math.max(1, Math.round(img.naturalHeight * k));
        c.getContext('2d')!.drawImage(img, 0, 0, c.width, c.height);
        glow = c.toDataURL('image/jpeg', 0.7);
      } catch (e) { /* чужой домен — без подсветки, просто тёмные поля */ }
      resolve({ w: img.naturalWidth, h: img.naturalHeight, glow });
    };
    img.src = url;
  });
}

// В памяти только два слоя: текущий кадр и уходящий (для плавной смены). Следующий кадр заранее
// готовится уменьшенным под экран — раньше альбом целиком висел слоями и съедал память слабых рамок.
// В режиме управления поверх ложится растянутая миниатюра кадра — выглядит как размытие, но ничего не стоит.
export function Backdrop({ urls, index, tone, soft, softRef, onShow }: Props) {
  // Перерисовываться, когда на устройстве поменяли «Как показывать фото».
  usePhotoFit();
  const [layers, setLayers] = useState<Layer[]>([]);
  const seq = useRef(0);
  const n = urls.length;
  const src = n ? urls[index % n] : '';

  useEffect(() => {
    if (!src) { setLayers([]); return; }
    let alive = true;
    preparePhoto(src).then((url) => measure(url).then((m) => ({ url, m }))).then(({ url, m }) => {
      if (!alive) return;
      const id = ++seq.current;
      setLayers((prev) => prev.slice(-1).map((l) => ({ ...l, on: false })).concat({ id, url, on: false, w: m.w, h: m.h, glow: m.glow }));
      // Сначала кадр появляется прозрачным, на следующем кадре анимации — проявляется.
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (alive) setLayers((prev) => prev.map((l) => (l.id === id ? { ...l, on: true } : l)));
      }));
      onShow(url);
    });
    // Следующий кадр готовим заранее, пока показывается этот.
    if (n > 1) preparePhoto(urls[(index + 1) % n]);
    return () => { alive = false; };
  }, [src]);

  return (
    <div class="backdrop">
      {n === 0 && <div class="slide active aurora" />}
      {/* Фото не растягиваем. Как вписать — настройка устройства (Настройки → Фото): по умолчанию во весь экран,
          а кадр другой ориентации — целиком, с подсветкой по краям. */}
      {layers.map((l) => (shouldContain(l.w, l.h) ? (
        <div key={l.id} class={'slide contain' + (l.on ? ' active' : '')}>
          {l.glow && <div class="slide-glow" style={{ backgroundImage: 'url(' + l.glow + ')' }} />}
          <div class="slide-photo" style={{ backgroundImage: 'url(' + l.url + ')' }} />
        </div>
      ) : (
        <div key={l.id} class={'slide' + (l.on ? ' active' : '')} style={{ backgroundImage: 'url(' + l.url + ')' }} />
      )))}
      <div ref={softRef} class={'soft' + (soft ? ' on' : '')} style={tone ? { backgroundImage: 'url(' + tone.thumb + ')' } : undefined} />
      <div class={'shade' + (soft ? ' deep' : '')} />
    </div>
  );
}
