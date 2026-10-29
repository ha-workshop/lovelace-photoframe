import { useEffect, useState } from 'preact/hooks';
import type { JSX } from 'preact';
import { ChevronDown, ChevronRight, Folder, FolderOpen } from 'lucide-preact';
import { Modal } from './Modals';
import { store } from '../lib/store';
import type { FrameFolder } from '../lib/cardBackend';
import { t } from '../i18n';

// Выбор папки медиатеки для рамки: дерево подпапок папки фото.
// Хранится у устройства рамки в HA (как альбом), поэтому на другой рамке может быть другая папка.
interface Node {
  name: string;
  path: string;
  count: number;
  total: number;
  children: Node[];
}

// Плоский список путей → дерево. Корень — сама папка фото («вся папка»).
function buildTree(list: FrameFolder[]): Node {
  const root: Node = { name: '', path: '', count: 0, total: 0, children: [] };
  const map: Record<string, Node> = { '': root };
  list.forEach((f) => {
    if (!f.path) {
      root.count = f.count;
      root.total = f.total;
      return;
    }
    const parts = f.path.split('/').filter(Boolean);
    let parent = root;
    let acc = '';
    parts.forEach((name, i) => {
      acc = acc ? acc + '/' + name : name;
      let node = map[acc];
      if (!node) {
        node = { name, path: acc, count: 0, total: 0, children: [] };
        map[acc] = node;
        parent.children.push(node);
      }
      if (i === parts.length - 1) {
        node.count = f.count;
        node.total = f.total;
      }
      parent = node;
    });
  });
  return root;
}

export function FolderPicker(props: { onPick: (path: string) => void; onClose: () => void }) {
  const [tree, setTree] = useState<Node | null>(null);
  const [error, setError] = useState('');
  // '' — вся папка фото.
  const [sel, setSel] = useState(store.card && store.card.album && store.card.album !== 'all' ? store.card.album : '');
  // Раскрытые ветки: корень всегда открыт, ветки до выбранной папки тоже.
  const [open, setOpen] = useState<Record<string, boolean>>({ '': true });

  useEffect(() => {
    const card = store.card;
    if (!card) {
      setTree({ name: '', path: '', count: 0, total: 0, children: [] });
      return;
    }
    card.folderTree().then((list) => {
      setTree(buildTree(list));
      const next: Record<string, boolean> = { '': true };
      let acc = '';
      String(card.album || '').split('/').filter(Boolean).forEach((part) => {
        acc = acc ? acc + '/' + part : part;
        next[acc] = true;
      });
      setOpen(next);
    }, (e: Error) => {
      setTree({ name: '', path: '', count: 0, total: 0, children: [] });
      setError(e.message || String(e));
    });
  }, []);

  const toggle = (path: string) => setOpen({ ...open, [path]: !open[path] });

  const row = (node: Node, depth: number): JSX.Element => {
    const hasKids = node.children.length > 0;
    const isOpen = node.path === '' || !!open[node.path];
    return (
      <div key={node.path || '/'}>
        <div class="folder-row" style={{ paddingLeft: depth * 16 + 'px' }}>
          {hasKids
            ? <button class="folder-toggle" onClick={() => toggle(node.path)} aria-label={node.name || t('photos.folder_all')}>
                {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>
            : <span class="folder-toggle" />}
          <button class={'folder-name' + (sel === node.path ? ' active' : '')} onClick={() => setSel(node.path)}>
            {hasKids && isOpen ? <FolderOpen size={16} /> : <Folder size={16} />}
            <span>{node.path ? node.name : t('photos.folder_all')}</span>
            <em>{t('photos.folder_count', { n: node.total })}</em>
          </button>
        </div>
        {hasKids && isOpen && node.children.map((child) => row(child, depth + 1))}
      </div>
    );
  };

  return (
    <Modal
      title={t('photos.folder_title')}
      onClose={props.onClose}
      wide
      footer={<>
        <button class="btn btn-ghost" onClick={props.onClose}>{t('common.cancel')}</button>
        <button class="btn btn-accent" onClick={() => props.onPick(sel || 'all')}>{t('common.done')}</button>
      </>}>
      <p class="hint">{t('photos.folder_hint')}</p>
      {!tree && <div class="folder-loading"><i class="cam-spinner" /><span>{t('photos.folder_loading')}</span></div>}
      {error && <p class="hint c-red">{error}</p>}
      {tree && <div class="folder-tree">{row(tree, 0)}</div>}
      {tree && !error && !tree.children.length && <p class="hint muted">{t('photos.folder_empty')}</p>}
    </Modal>
  );
}
