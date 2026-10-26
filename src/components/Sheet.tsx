import { useEffect, useLayoutEffect, useRef, useState } from 'preact/hooks';
import { X } from 'lucide-preact';
import { useHA } from '../lib/hooks';
import type { Tone } from '../lib/photoTone';
import type { Card } from '../lib/layout';
import { CardAside, CardBody, cardTitle } from './CardView';

interface Props { card: Card; tone: Tone | null; onCamera: (url: string) => void; onClose: () => void }

// «Матовое стекло»: растянутая миниатюра кадра, выровненная по экрану так, чтобы совпадать с фото под карточкой.
// background-attachment: fixed не подходит — Chrome не рисует его, пока на карточке идёт transform-анимация.
// Позиция берётся из offsetLeft/Top: они не зависят от transform, так что выравнивание верно и во время анимации.
function Glass({ thumb, sheet }: { thumb: string | undefined; sheet: HTMLElement | null }) {
  const [pos, setPos] = useState({ x: 0, y: 0, w: window.innerWidth, h: window.innerHeight });
  // Предыдущий кадр остаётся снизу, новый проявляется поверх.
  const [layers, setLayers] = useState<string[]>(thumb ? [thumb] : []);

  useLayoutEffect(() => {
    if (!sheet) return;
    const measure = () => setPos({ x: sheet.offsetLeft, y: sheet.offsetTop, w: window.innerWidth, h: window.innerHeight });
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [sheet]);

  useEffect(() => {
    if (thumb && layers[layers.length - 1] !== thumb) setLayers(layers.slice(-1).concat(thumb));
  }, [thumb]);

  // Как и .soft за панелью: кадр на 10% больше экрана и по центру.
  const style = {
    left: -pos.x - pos.w * 0.05,
    top: -pos.y - pos.h * 0.05,
    width: pos.w * 1.1,
    height: pos.h * 1.1,
  };
  return (
    <div class="sheet-glass">
      {layers.map((t, i) => (
        <div key={t.length + ':' + t.slice(-32)} class={'glass-layer' + (i > 0 ? ' fresh' : '')} style={{ ...style, backgroundImage: 'url(' + t + ')' }} />
      ))}
      <div class="sheet-tint" />
    </div>
  );
}

// Карточка поверх фото: слайдшоу продолжает идти, рамка не уходит в режим управления.
export function Sheet({ card, tone, onCamera, onClose }: Props) {
  const ha = useHA();
  const sheetRef = useRef<HTMLDivElement>(null);
  const [sheetEl, setSheetEl] = useState<HTMLDivElement | null>(null);
  useLayoutEffect(() => { setSheetEl(sheetRef.current); }, []);
  const wide = ['switches', 'scenes', 'cameras', 'ac', 'speakers', 'tv', 'weather'].indexOf(card.type) !== -1;

  return (
    <div class="sheet-layer" onClick={onClose}>
      <div ref={sheetRef} class={'sheet sheet-' + card.type + (wide ? ' sheet-wide' : '') + (card.color ? ' tint-' + card.color : '')} onClick={(e) => e.stopPropagation()}>
        <Glass thumb={tone ? tone.thumb : undefined} sheet={sheetEl} />
        <div class="sheet-inner">
          <div class="panel-head">
            <h2>{cardTitle(ha, card)}</h2>
            <div class="sheet-actions">
              <CardAside card={card} />
              <button class="sheet-close" onClick={onClose}><X size={18} /></button>
            </div>
          </div>
          <CardBody card={card} size={{ w: wide ? 600 : 420, h: 600 }} onCamera={onCamera} />
        </div>
      </div>
    </div>
  );
}
