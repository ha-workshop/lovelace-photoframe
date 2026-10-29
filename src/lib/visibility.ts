import { useLayoutEffect, useState } from 'preact/hooks';

// Держим интерфейс в дереве только пока он виден (и короткое время после скрытия — чтобы доиграл переход).
// Скрытый слой остаётся пустым контейнером: его содержимое не рендерится и не держит подписки/таймеры.
export function useLinger(visible: boolean, ms = 520) {
  const [alive, setAlive] = useState(visible);
  useLayoutEffect(() => {
    if (visible) { setAlive(true); return; }
    const t = window.setTimeout(() => setAlive(false), ms);
    return () => clearTimeout(t);
  }, [visible, ms]);
  return visible || alive;
}
