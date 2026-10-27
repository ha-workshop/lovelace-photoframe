// Качество отображения на этом устройстве: «Красиво» для iPad и компьютеров, «Лёгкое» для старых рамок.
// Выбор свой у каждого устройства (localStorage); «Авто» решает по памяти и типу устройства.
import { useEffect, useState } from 'preact/hooks';

export type QualityPref = 'auto' | 'full' | 'lite';
export type Quality = 'full' | 'lite';

const KEY = 'photoframe.quality';
const listeners: Array<() => void> = [];

export function qualityPref(): QualityPref {
  try { return (localStorage.getItem(KEY) as QualityPref) || 'auto'; } catch (e) { return 'auto'; }
}

export function setQualityPref(v: QualityPref) {
  try { localStorage.setItem(KEY, v); } catch (e) { /* ignore */ }
  listeners.forEach((l) => l());
}

// Слабое устройство: браузер сообщает о памяти ≤ 2 ГБ (Chrome), либо это Android с ≤ 4 ядрами.
// Старые WebView не сообщают ничего — на Android без этих данных тоже считаем устройство слабым.
export function autoQuality(): Quality {
  const nav = navigator as Navigator & { deviceMemory?: number };
  const android = /Android/i.test(navigator.userAgent);
  if (typeof nav.deviceMemory === 'number') return nav.deviceMemory <= 2 ? 'lite' : 'full';
  if (android) return !navigator.hardwareConcurrency || navigator.hardwareConcurrency <= 4 ? 'lite' : 'full';
  return 'full';
}

export function quality(): Quality {
  const p = qualityPref();
  return p === 'auto' ? autoQuality() : p;
}

export function useQuality(): Quality {
  const [q, setQ] = useState(quality());
  useEffect(() => {
    const fn = () => setQ(quality());
    listeners.push(fn);
    return () => { listeners.splice(listeners.indexOf(fn), 1); };
  }, []);
  return q;
}

// Как часто перерисовываться по событиям HA: на слабых устройствах — реже.
export function updateIntervalMs() {
  return quality() === 'lite' ? 800 : 150;
}

// ── Фото под размер экрана ─────────────────────────────
// Фото из медиатеки HA приходят оригиналами: 12 Мп в памяти — ~48 МБ. Уменьшаем кадр под экран
// и держим уже маленький JPEG. Декодируем обычным <img> и рисуем на холст: createImageBitmap
// с resizeWidth на iPad и части Android отдаёт зелёный кадр. Кадр не больше экрана не трогаем.

const cache: Record<string, Promise<string>> = {};
const order: string[] = [];
const KEEP = 4;

// Ширина кадра для этого экрана — её же рамка просит у интеграции (готовые кадры с сервера).
export function targetWidth() {
  const dpr = quality() === 'lite' ? 1 : Math.min(window.devicePixelRatio || 1, 2);
  const w = Math.max(screen.width, screen.height) * dpr;
  return Math.round(Math.min(quality() === 'lite' ? 1280 : 2560, w));
}

function shrink(url: string, width: number): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onerror = () => resolve(url);
    img.onload = () => {
      const side = Math.max(img.naturalWidth, img.naturalHeight);
      if (!side || side <= width) { resolve(url); return; }
      const k = width / side;
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.naturalWidth * k);
      canvas.height = Math.round(img.naturalHeight * k);
      try {
        canvas.getContext('2d')!.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((b) => {
          canvas.width = canvas.height = 0;
          resolve(b ? URL.createObjectURL(b) : url);
        }, 'image/jpeg', 0.85);
      } catch (e) {
        // Холст «испорчен» чужим доменом или не хватило памяти — показываем оригинал.
        resolve(url);
      }
    };
    img.src = url;
  });
}

export function preparePhoto(url: string): Promise<string> {
  if (!url || /^(data|blob):/.test(url) || !HTMLCanvasElement.prototype.toBlob) return Promise.resolve(url);
  // Кадр от интеграции уже нужной ширины — сервер уменьшил его сам.
  if (url.indexOf('/api/photoframe/photo/') !== -1) return Promise.resolve(url);
  const width = targetWidth();
  const key = url + '@' + width;
  if (key in cache) return cache[key];
  const job = shrink(url, width);
  cache[key] = job;
  order.push(key);
  // Держим только последние несколько подготовленных кадров — остальные отпускаем.
  while (order.length > KEEP) {
    const old = order.shift()!;
    const p = cache[old];
    delete cache[old];
    p.then((u) => { if (/^blob:/.test(u)) URL.revokeObjectURL(u); });
  }
  return job;
}

// ── Как показывать фото (своё у каждого устройства) ─────
// auto — во весь экран, а кадр другой ориентации, чем экран, — целиком с подсветкой по краям;
// contain — всегда целиком (без обрезки), с подсветкой; cover — всегда во весь экран, края обрезаются.
export type PhotoFit = 'auto' | 'contain' | 'cover';
const FIT_KEY = 'photoframe.fit';

export function photoFit(): PhotoFit {
  try { return (localStorage.getItem(FIT_KEY) as PhotoFit) || 'auto'; } catch (e) { return 'auto'; }
}

export function setPhotoFit(v: PhotoFit) {
  try { localStorage.setItem(FIT_KEY, v); } catch (e) { /* ignore */ }
  listeners.forEach((l) => l());
}

export function usePhotoFit(): PhotoFit {
  const [fit, setFit] = useState(photoFit());
  useEffect(() => {
    const fn = () => setFit(photoFit());
    listeners.push(fn);
    return () => { listeners.splice(listeners.indexOf(fn), 1); };
  }, []);
  return fit;
}

// Показывать ли кадр w×h целиком на этом экране.
export function shouldContain(w: number, h: number): boolean {
  const fit = photoFit();
  if (!w || !h || fit === 'cover') return false;
  if (fit === 'contain') return true;
  return (w >= h) !== (window.innerWidth >= window.innerHeight);
}

