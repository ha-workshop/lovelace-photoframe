import { useEffect, useRef } from 'preact/hooks';
import { NO_STREAM } from '../lib/camera';

// Кадр камеры. Пока элемент в дереве и не на паузе — идёт ровно один поток (смена src обрывает прошлый).
// При размонтировании отцепляем поток явно: браузер не всегда закрывает MJPEG-соединение сам,
// и трафик с камеры продолжался бы уже на экране с фото.
// paused — карточка закрыта окном или панелью: поток не нужен, пока её не видно.
export function CameraStream(props: { src: string; paused?: boolean; onLoad?: () => void; onError?: () => void }) {
  const ref = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    const node = ref.current;
    return () => {
      if (node) node.src = NO_STREAM;
    };
  }, []);
  return (
    <img ref={ref} src={props.paused ? NO_STREAM : props.src} alt="" draggable={false}
      onLoad={props.onLoad} onError={props.onError} />
  );
}
