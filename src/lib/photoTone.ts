import { useEffect, useState } from 'preact/hooks';

// Для каждого фото считаем миниатюру 48px и средний цвет.
// Миниатюра, растянутая на весь экран, даёт «размытый» фон без CSS blur — дёшево даже для Android 5.
// Цвет становится акцентом интерфейса.
export interface Tone { thumb: string; accent: string; accentSoft: string }

const cache: Record<string, Tone | null> = {};

function toHsl(r: number, g: number, b: number) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  const h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return [h * 60, s, l];
}

function analyze(url: string): Promise<Tone | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      try {
        const k = 48 / Math.max(img.width, img.height);
        const c = document.createElement('canvas');
        c.width = Math.max(1, Math.round(img.width * k));
        c.height = Math.max(1, Math.round(img.height * k));
        const ctx = c.getContext('2d')!;
        ctx.drawImage(img, 0, 0, c.width, c.height);
        const px = ctx.getImageData(0, 0, c.width, c.height).data;
        let r = 0, g = 0, b = 0, n = 0;
        for (let i = 0; i < px.length; i += 4) { r += px[i]; g += px[i + 1]; b += px[i + 2]; n++; }
        const hsl = toHsl(r / n, g / n, b / n);
        // Нормализуем: акцент всегда читаемый — достаточно насыщенный и светлый.
        const h = Math.round(hsl[0]);
        const s = Math.round(Math.min(Math.max(hsl[1], 0.45), 0.85) * 100);
        resolve({
          thumb: c.toDataURL('image/jpeg', 0.7),
          accent: 'hsl(' + h + ',' + s + '%,68%)',
          accentSoft: 'hsla(' + h + ',' + s + '%,60%,0.22)',
        });
      } catch (e) {
        resolve(null); // canvas «испачкан» чужим доменом
      }
    };
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

export function useTone(url: string | undefined) {
  const [tone, setTone] = useState<Tone | null>(url ? cache[url] || null : null);
  useEffect(() => {
    // Пока новый кадр не разобран (или его не удалось разобрать), остаётся прежний тон —
    // иначе фон и акцент на мгновение пропадают.
    if (!url) return;
    if (url in cache) { if (cache[url]) setTone(cache[url]); return; }
    let alive = true;
    analyze(url).then((t) => { cache[url] = t; if (alive && t) setTone(t); });
    return () => { alive = false; };
  }, [url]);
  return tone;
}
