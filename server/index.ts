import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import { streamSSE, type SSEStreamingApi } from 'hono/streaming';
import { existsSync, unlinkSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { randomUUID } from 'node:crypto';
import { DATA_DIR, PHOTO_DIR, addPhoto, deleteKey, getKey, listPhotos, removePhoto, setKey, type Stored } from './db.ts';
import { MAIN_HOME, attachHaProxy, cameraStream, dropHaConnections, homes, picture, type Home } from './ha.ts';

// Мини-сервис рамок: хранит настройки, раскладку и альбом в SQLite,
// раздаёт PWA и рассылает изменения всем рамкам через Server-Sent Events.

// Не PORT: его выставляют dev-раннеры для Vite.
const PORT = Number(process.env.SERVICE_PORT || 8787);
const DIST = join(import.meta.dirname, '..', 'dist');
const app = new Hono();

// ── Синхронизация ─────────────────────────────────────
const clients = new Set<SSEStreamingApi>();

function broadcast(event: Record<string, unknown>) {
  const data = JSON.stringify(event);
  clients.forEach((s) => { s.writeSSE({ data }).catch(() => clients.delete(s)); });
}

app.get('/api/events', (c) => streamSSE(c, async (stream) => {
  clients.add(stream);
  stream.onAbort(() => { clients.delete(stream); });
  await stream.writeSSE({ data: JSON.stringify({ type: 'hello' }) });
  // Пинг держит соединение живым через прокси и Wi-Fi-роутеры.
  while (!stream.aborted) {
    await stream.sleep(25000);
    await stream.writeSSE({ event: 'ping', data: '' });
  }
}));

// ── Состояние ─────────────────────────────────────────
function photos() {
  return listPhotos().map((p) => ({ id: p.id, url: '/photos/' + p.file }));
}

// Первый запуск: адрес и токен HA можно подложить из .env.local, дальше всё правится из интерфейса.
const envUrl = process.env.HA_URL || process.env.VITE_HA_URL;
if (!getKey('settings') && envUrl) {
  setKey('settings', { haUrl: envUrl, token: process.env.HA_TOKEN || process.env.VITE_HA_TOKEN || '' });
}

type SettingsValue = { haUrl?: string; token?: string } & Record<string, unknown>;

// Токен наружу не отдаём — только признак, что он задан.
function publicSettings(s: Stored<SettingsValue> | null) {
  if (!s) return null;
  return { ...s, value: { ...s.value, token: '', hasToken: !!s.value.token } };
}

// Раскладка главного дома лежит под старым ключом 'layout', остальных — 'layout:<id>'.
const layoutKey = (home: string) => (home === MAIN_HOME ? 'layout' : 'layout:' + home);

// Наружу — без токенов: только есть ли свой HA и задан ли токен.
function publicHomes() {
  return homes().map((h) => ({ id: h.id, name: h.name, haUrl: h.haUrl || '', hasToken: !!h.token }));
}

app.get('/api/state', (c) => {
  const layouts: Record<string, unknown> = {};
  homes().forEach((h) => { layouts[h.id] = getKey(layoutKey(h.id)); });
  return c.json({
    settings: publicSettings(getKey<SettingsValue>('settings')),
    homes: publicHomes(),
    layouts,
    // Совместимость со старыми рамками, которые знают только один дом.
    layout: layouts[MAIN_HOME],
    photos: photos(),
  });
});

app.put('/api/homes', async (c) => {
  const prev = homes();
  const next = (await c.req.json<Home[]>())
    .filter((h) => h && /^[a-z0-9_-]{1,40}$/i.test(h.id))
    .map((h) => {
      const old = prev.filter((p) => p.id === h.id)[0];
      const home: Home = { id: h.id, name: String(h.name || 'Дом').slice(0, 60) };
      if (h.id !== MAIN_HOME && h.haUrl) {
        home.haUrl = h.haUrl;
        // Пустой токен — «не менять».
        home.token = h.token || (old && old.haUrl === h.haUrl ? old.token : '') || '';
      }
      return home;
    });
  if (!next.some((h) => h.id === MAIN_HOME)) next.unshift({ id: MAIN_HOME, name: 'Дом' });
  setKey('homes', next);
  prev.filter((p) => !next.some((h) => h.id === p.id)).forEach((p) => deleteKey(layoutKey(p.id)));
  dropHaConnections();
  broadcast({ type: 'homes', source: c.req.header('x-client-id') || '', homes: publicHomes() });
  return c.json(publicHomes());
});

app.put('/api/settings', async (c) => {
  const prev = getKey<SettingsValue>('settings');
  const next = await c.req.json<SettingsValue>();
  delete next.hasToken;
  // Пустой токен — «не менять»: рамки сохраняют настройки, не зная токена.
  if (!next.token && prev && prev.value.token) next.token = prev.value.token;
  const stored = setKey('settings', next) as Stored<SettingsValue>;
  if (!prev || prev.value.haUrl !== next.haUrl || prev.value.token !== next.token) dropHaConnections();
  const pub = publicSettings(stored);
  broadcast({ type: 'settings', source: c.req.header('x-client-id') || '', ...pub });
  return c.json(pub);
});

app.put('/api/layout', async (c) => {
  const home = c.req.query('home') || MAIN_HOME;
  if (!homes().some((h) => h.id === home)) return c.json({ error: 'unknown home' }, 404);
  const stored = setKey(layoutKey(home), await c.req.json());
  broadcast({ type: 'layout', home, source: c.req.header('x-client-id') || '', ...stored });
  return c.json(stored);
});

// ── Home Assistant через сервис ───────────────────────
app.get('/api/ha/camera/:entity', (c) => cameraStream(c.req.param('entity'), c.req.query('home') || MAIN_HOME, c.req.raw.signal));
app.get('/api/ha/picture', (c) => picture(c.req.query('path') || '', c.req.query('home') || MAIN_HOME, c.req.raw.signal));

// ── Альбом ────────────────────────────────────────────
// Рамка сама ужимает фото до 1920px и шлёт JPEG как dataURL — так проще для старых WebView, чем multipart.
app.post('/api/photos', async (c) => {
  const { data } = await c.req.json<{ data: string }>();
  const m = /^data:image\/(jpeg|png|webp);base64,(.+)$/.exec(data || '');
  if (!m) return c.json({ error: 'expected data:image/*;base64' }, 400);
  const file = randomUUID() + '.' + (m[1] === 'jpeg' ? 'jpg' : m[1]);
  writeFileSync(join(PHOTO_DIR, file), Buffer.from(m[2], 'base64'));
  const id = addPhoto(file);
  broadcast({ type: 'photos', photos: photos() });
  return c.json({ id, url: '/photos/' + file });
});

app.delete('/api/photos/:id', (c) => {
  const row = removePhoto(Number(c.req.param('id')));
  if (row && existsSync(join(PHOTO_DIR, row.file))) unlinkSync(join(PHOTO_DIR, row.file));
  broadcast({ type: 'photos', photos: photos() });
  return c.json({ ok: true });
});

app.use('/photos/*', serveStatic({
  root: relative(process.cwd(), DATA_DIR),
  onFound: (_path, c) => { c.header('Cache-Control', 'public, max-age=31536000, immutable'); },
}));

// ── PWA ───────────────────────────────────────────────
if (existsSync(DIST)) {
  app.use('/*', serveStatic({ root: relative(process.cwd(), DIST) }));
}

const server = serve({ fetch: app.fetch, port: PORT, hostname: '0.0.0.0' }, (info) => {
  console.log('Smart Frame service: http://localhost:' + info.port + '  (данные: ' + DATA_DIR + ')');
});
attachHaProxy(server as unknown as import('node:http').Server);
