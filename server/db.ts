import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Одна SQLite-база на дом: настройки, раскладка и альбом.
// Сами фото лежат файлами рядом (data/photos), в базе — только их список.

export const DATA_DIR = process.env.DATA_DIR || join(import.meta.dirname, '..', 'data');
export const PHOTO_DIR = join(DATA_DIR, 'photos');
mkdirSync(PHOTO_DIR, { recursive: true });

const db = new DatabaseSync(join(DATA_DIR, 'frame.db'));
db.exec(`
  PRAGMA journal_mode = WAL;
  CREATE TABLE IF NOT EXISTS kv (
    key        TEXT PRIMARY KEY,
    value      TEXT NOT NULL,
    version    INTEGER NOT NULL DEFAULT 1,
    updated_at INTEGER NOT NULL
  );
  CREATE TABLE IF NOT EXISTS photos (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    file       TEXT NOT NULL,
    created_at INTEGER NOT NULL
  );
`);

export interface Stored<T = unknown> { value: T; version: number; updatedAt: number }

export function getKey<T>(key: string): Stored<T> | null {
  const row = db.prepare('SELECT value, version, updated_at FROM kv WHERE key = ?').get(key) as
    { value: string; version: number; updated_at: number } | undefined;
  return row ? { value: JSON.parse(row.value), version: row.version, updatedAt: row.updated_at } : null;
}

export function setKey(key: string, value: unknown): Stored {
  const now = Date.now();
  db.prepare(`
    INSERT INTO kv (key, value, version, updated_at) VALUES (?, ?, 1, ?)
    ON CONFLICT(key) DO UPDATE SET value = excluded.value, version = kv.version + 1, updated_at = excluded.updated_at
  `).run(key, JSON.stringify(value), now);
  return getKey(key)!;
}

export function deleteKey(key: string) {
  db.prepare('DELETE FROM kv WHERE key = ?').run(key);
}

export interface PhotoRow { id: number; file: string; created_at: number }

export function listPhotos(): PhotoRow[] {
  return db.prepare('SELECT id, file, created_at FROM photos ORDER BY id').all() as unknown as PhotoRow[];
}

export function addPhoto(file: string): number {
  const r = db.prepare('INSERT INTO photos (file, created_at) VALUES (?, ?)').run(file, Date.now());
  return Number(r.lastInsertRowid);
}

export function removePhoto(id: number): PhotoRow | undefined {
  const row = db.prepare('SELECT id, file, created_at FROM photos WHERE id = ?').get(id) as PhotoRow | undefined;
  if (row) db.prepare('DELETE FROM photos WHERE id = ?').run(id);
  return row;
}
