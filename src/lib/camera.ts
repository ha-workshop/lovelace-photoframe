import { useEffect, useState } from 'preact/hooks';

// Камера для полноэкранного просмотра: сущность и подпись. Поток открывается только для текущей камеры —
// остальные в списке не загружаются, поэтому память не занята несколькими стримами сразу.
export interface CameraFeed {
  entity: string;
  name: string;
}

// Следующая/предыдущая камера по кругу.
export function stepCamera(index: number, dir: number, count: number) {
  return count > 0 ? (index + dir + count) % count : 0;
}

// Готовность потока. Буферизации у <img> нет, но первый кадр MJPEG обычно приходит быстро;
// onLoad у такого потока срабатывает не всегда — поэтому через пару секунд считаем его живым.
const READY_FALLBACK = 2500;

// Снимок обновляем раз в 10 секунд: на кадре видно, что происходит, а трафик — как у обычной картинки.
const STILL_REFRESH = 10000;

// Адрес снимка с меткой обновления: браузер не отдаёт один и тот же кадр из кэша.
export function useStill(url: string, enabled: boolean) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (!enabled || !url) return;
    const id = window.setInterval(() => setTick((n) => n + 1), STILL_REFRESH);
    return () => clearInterval(id);
  }, [url, enabled]);
  if (!url || !tick) return url;
  return url + (url.indexOf('?') === -1 ? '?' : '&') + '_=' + tick;
}

// Прозрачный 1×1: подставляем вместо потока, когда камеру скрыли или она не отвечает.
// Смена src у того же <img> обрывает предыдущий поток — так в памяти всегда только один.
export const NO_STREAM = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export function useStreamState(entity: string) {
  // Состояние привязано к камере: после переключения сразу «загрузка», без кадра от прошлой.
  const [ready, setReady] = useState<{ entity: string; state: 'loading' | 'ready' | 'error' }>({ entity, state: 'loading' });
  const state = ready.entity === entity ? ready.state : 'loading';
  useEffect(() => {
    setReady({ entity, state: 'loading' });
    const id = window.setTimeout(() => setReady((s) => (s.entity === entity && s.state === 'loading' ? { entity, state: 'ready' } : s)), READY_FALLBACK);
    return () => clearTimeout(id);
  }, [entity]);
  return {
    state,
    img: {
      onLoad: () => setReady({ entity, state: 'ready' }),
      onError: () => setReady({ entity, state: 'error' }),
    },
  };
}
