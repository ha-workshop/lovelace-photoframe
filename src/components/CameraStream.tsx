import { useEffect, useRef } from 'preact/hooks';
import { NO_STREAM } from '../lib/camera';

// Кадр камеры. Пока элемент в дереве и не на паузе — идёт ровно один поток (смена src обрывает прошлый).
// При размонтировании отцепляем поток явно: браузер не всегда закрывает MJPEG-соединение сам,
// и трафик с камеры продолжался бы уже на экране с фото.
//
// Пауза: снимаем последний показанный кадр в картинку и оставляем его на экране.
// Так после ухода курсора видно то место, где остановились, а не кадр, снятый при открытии страницы.

function grab(img: HTMLImageElement): string | null {
  const w = img.naturalWidth;
  const h = img.naturalHeight;
  if (!w || !h) return null;
  try {
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.drawImage(img, 0, 0, w, h);
    return canvas.toDataURL('image/jpeg', 0.85);
  } catch (e) {
    // Поток мог не отдать готовый кадр — тогда останется снимок из HA.
    return null;
  }
}

export function CameraStream(props: { src: string; poster?: string; paused?: boolean; onLoad?: () => void; onError?: () => void }) {
  const ref = useRef<HTMLImageElement | null>(null);
  // Последний кадр и адрес потока, к которому он относится: при смене камеры старый кадр не показываем.
  const held = useRef<string | null>(null);
  const heldFor = useRef('');
  const seen = useRef('');

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    // Другая камера — кадр прошлой не оставляем.
    if (seen.current !== props.src) {
      seen.current = props.src;
      held.current = null;
      heldFor.current = '';
    }
    if (!props.paused) {
      node.src = props.src || NO_STREAM;
      heldFor.current = props.src;
      return;
    }
    // Только что поставили на паузу этот же поток — запоминаем кадр, на котором остановились.
    if (props.src && heldFor.current === props.src) {
      const shot = grab(node);
      if (shot) held.current = shot;
      heldFor.current = '';
    }
    node.src = held.current || props.poster || NO_STREAM;
  }, [props.src, props.poster, props.paused]);

  useEffect(() => {
    const node = ref.current;
    return () => {
      if (node) node.src = NO_STREAM;
    };
  }, []);

  return (
    <img ref={ref} src={NO_STREAM} alt="" draggable={false}
      onLoad={props.onLoad} onError={props.onError} />
  );
}
