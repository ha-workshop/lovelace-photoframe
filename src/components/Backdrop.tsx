import type { RefObject } from 'preact';
import type { Tone } from '../lib/photoTone';

interface Props { urls: string[]; index: number; tone: Tone | null; soft: boolean; softRef: RefObject<HTMLDivElement> }

// Слои фото с кроссфейдом и Ken Burns. В режиме управления поверх ложится
// растянутая миниатюра того же кадра — выглядит как размытие, но ничего не стоит.
export function Backdrop({ urls, index, tone, soft, softRef }: Props) {
  return (
    <div class="backdrop">
      {urls.length === 0 && <div class="slide active aurora" />}
      {urls.map((u, i) => (
        <div key={u.length > 200 ? i : u} class={'slide' + (i === index ? ' active' : '')} style={{ backgroundImage: 'url(' + u + ')' }} />
      ))}
      <div ref={softRef} class={'soft' + (soft ? ' on' : '')} style={tone ? { backgroundImage: 'url(' + tone.thumb + ')' } : undefined} />
      <div class={'shade' + (soft ? ' deep' : '')} />
    </div>
  );
}
