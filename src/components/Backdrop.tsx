import { useEffect, useRef, useState } from 'preact/hooks';
import type { RefObject } from 'preact';
import type { Tone } from '../lib/photoTone';
import { preparePhoto } from '../lib/quality';

interface Props {
  urls: string[];
  index: number;
  tone: Tone | null;
  soft: boolean;
  softRef: RefObject<HTMLDivElement>;
  // Какой кадр (уже уменьшенный) сейчас на экране — по нему считается цвет интерфейса.
  onShow: (url: string) => void;
}

interface Layer { id: number; url: string; on: boolean }

// В памяти только два слоя: текущий кадр и уходящий (для плавной смены). Следующий кадр заранее
// готовится уменьшенным под экран — раньше альбом целиком висел слоями и съедал память слабых рамок.
// В режиме управления поверх ложится растянутая миниатюра кадра — выглядит как размытие, но ничего не стоит.
export function Backdrop({ urls, index, tone, soft, softRef, onShow }: Props) {
  const [layers, setLayers] = useState<Layer[]>([]);
  const seq = useRef(0);
  const n = urls.length;
  const src = n ? urls[index % n] : '';

  useEffect(() => {
    if (!src) { setLayers([]); return; }
    let alive = true;
    preparePhoto(src).then((url) => {
      if (!alive) return;
      const id = ++seq.current;
      setLayers((prev) => prev.slice(-1).map((l) => ({ ...l, on: false })).concat({ id, url, on: false }));
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
      {layers.map((l) => (
        <div key={l.id} class={'slide' + (l.on ? ' active' : '')} style={{ backgroundImage: 'url(' + l.url + ')' }} />
      ))}
      <div ref={softRef} class={'soft' + (soft ? ' on' : '')} style={tone ? { backgroundImage: 'url(' + tone.thumb + ')' } : undefined} />
      <div class={'shade' + (soft ? ' deep' : '')} />
    </div>
  );
}
