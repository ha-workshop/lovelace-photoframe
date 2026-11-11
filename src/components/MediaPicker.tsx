import { useEffect, useState } from 'preact/hooks';
import { ChevronRight, Folder, Image as ImageIcon, RefreshCw } from 'lucide-preact';
import { Modal } from './Modal';
import { MEDIA_ROOT, type MediaNode } from '../lib/cardBackend';
import { t } from '../i18n';

// Выбор папки в медиатеке Home Assistant: источники, папки и кадры любых интеграций
// (Google Photos, SMB-диск, «Мои медиа», камера и т.п.). Компонент не знает, откуда брать данные:
// в приложении — через интеграцию, в разделе «Фоторамки» — через hass.callWS.
interface Props {
  browse: (id: string) => Promise<MediaNode>;
  onPick: (id: string, title: string) => void;
  onClose: () => void;
  // Текущий выбор: открываем сразу эту папку.
  value?: string;
  title?: string;
  // Вернуть обычную папку Photo Frame (показываем, только когда есть что сбрасывать).
  onReset?: () => void;
}

const ROOT: MediaNode = { id: MEDIA_ROOT, title: '', class: 'directory', expand: true, play: false };

function isFolder(node: MediaNode) {
  return node.expand || node.class === 'directory' || node.class === 'album' || node.class === 'channel';
}

function isImage(node: MediaNode) {
  return node.class === 'image' || node.class === 'photo';
}

export function MediaPicker(props: Props) {
  const [stack, setStack] = useState<MediaNode[]>(() =>
    props.value && props.value !== MEDIA_ROOT
      ? [ROOT, { id: props.value, title: '', class: 'directory', expand: true, play: false }]
      : [ROOT],
  );
  const [view, setView] = useState<MediaNode | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [tick, setTick] = useState(0);
  const current = stack[stack.length - 1];

  // Один уровень за раз: HA отдаёт содержимое папки, а не всё дерево.
  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError('');
    props.browse(current.id).then(
      (item) => {
        if (!alive) return;
        setView(item);
        setLoading(false);
        // Заголовок папки, открытой по сохранённому значению, узнаём только из ответа.
        setStack((list) => list.map((n, i) => (i === list.length - 1 && !n.title ? { ...n, title: item.title } : n)));
      },
      (e: Error) => {
        if (!alive) return;
        setView(null);
        setError(e.message || String(e));
        setLoading(false);
      },
    );
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current.id, tick]);

  const open = (node: MediaNode) => setStack([...stack, { ...node, title: node.title }]);
  const crumb = (index: number) => setStack(stack.slice(0, index + 1));

  const children = (view?.children || [])
    .filter((c) => isFolder(c) || isImage(c))
    .slice()
    .sort((a, b) => Number(isFolder(b)) - Number(isFolder(a)) || a.title.localeCompare(b.title));

  const rootTitle = t('photos.media_root');
  const canPick = current.id !== MEDIA_ROOT && !loading && !error;

  return (
    <Modal
      title={props.title || t('photos.source_title')}
      onClose={props.onClose}
      wide
      footer={<>
        <button class="btn btn-ghost" onClick={props.onClose}>{t('common.cancel')}</button>
        {props.onReset && props.value && (
          <button class="btn btn-ghost" onClick={props.onReset}>{t('photos.source_default')}</button>
        )}
        <button class="btn btn-accent" disabled={!canPick} onClick={() => props.onPick(current.id, current.title || current.id)}>
          {t('photos.source_pick')}
        </button>
      </>}>
      <p class="hint">{t('photos.source_hint')}</p>
      <div class="media-crumbs">
        {stack.map((node, i) => (
          <span key={node.id + i} class="media-crumb-item">
            {i > 0 && <ChevronRight size={14} class="media-crumb-sep" />}
            <button class={'media-crumb' + (i === stack.length - 1 ? ' on' : '')} onClick={() => crumb(i)}>
              {i === 0 ? rootTitle : node.title || t('photos.media_folder')}
            </button>
          </span>
        ))}
        <button class="icon-btn media-refresh" onClick={() => setTick(tick + 1)} title={t('common.refresh')} aria-label={t('common.refresh')}>
          <RefreshCw size={15} />
        </button>
      </div>
      <p class="hint small media-path">{current.id}</p>
      {loading && <div class="folder-loading"><i class="cam-spinner" /><span>{t('photos.folder_loading')}</span></div>}
      {error && <p class="hint c-red">{error}</p>}
      {!loading && !error && (
        <div class="media-list">
          {children.map((node) => isFolder(node) ? (
            <button key={node.id} class="media-row" onClick={() => open(node)}>
              <Folder size={18} />
              <span class="media-row-title">{node.title}</span>
              <ChevronRight size={16} class="media-row-arrow" />
            </button>
          ) : (
            <div key={node.id} class="media-row static">
              {node.thumb
                ? <img src={node.thumb} alt="" loading="lazy" />
                : <ImageIcon size={18} />}
              <span class="media-row-title">{node.title}</span>
            </div>
          ))}
          {!children.length && <p class="hint muted">{t('photos.media_empty')}</p>}
          {!!view?.notShown && <p class="hint muted">{t('photos.media_more', { n: view.notShown })}</p>}
        </div>
      )}
    </Modal>
  );
}
