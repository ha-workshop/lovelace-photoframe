// Фото, загруженные с устройства, хранятся в IndexedDB как dataURL:
// Blob в IndexedDB появился только в Chrome 38, а строки работают везде.
// Перед сохранением кадр ужимается до MAX_SIDE — у рамок мало памяти.

export interface Photo { id: number; data: string }

const DB_NAME = 'photoframe';
const STORE = 'photos';
const MAX_SIDE = 1920;

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE, { keyPath: 'id', autoIncrement: true });
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function tx<T>(mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return openDb().then((db) => new Promise<T>((resolve, reject) => {
    const req = fn(db.transaction(STORE, mode).objectStore(STORE));
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  }));
}

export function listPhotos(): Promise<Photo[]> {
  // getAll() нет в Chrome 37 — собираем курсором.
  return openDb().then((db) => new Promise<Photo[]>((resolve, reject) => {
    const out: Photo[] = [];
    const req = db.transaction(STORE, 'readonly').objectStore(STORE).openCursor();
    req.onsuccess = () => {
      const cur = req.result;
      if (cur) { out.push(cur.value); cur.continue(); } else resolve(out);
    };
    req.onerror = () => reject(req.error);
  }));
}

export function deletePhoto(id: number) { return tx('readwrite', (s) => s.delete(id)); }
export function clearPhotos() { return tx('readwrite', (s) => s.clear()); }

export function resize(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const k = Math.min(1, MAX_SIDE / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.width * k);
        canvas.height = Math.round(img.height * k);
        canvas.getContext('2d')!.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.85));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

// По одному файлу, чтобы не держать в памяти все исходники разом.
export function addPhotos(files: File[]): Promise<void> {
  return files.reduce<Promise<unknown>>(
    (p, f) => p.then(() => resize(f)).then((data) => tx('readwrite', (s) => s.add({ data }))),
    Promise.resolve(),
  ).then(() => undefined);
}
