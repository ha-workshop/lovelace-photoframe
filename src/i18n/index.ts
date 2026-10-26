// Переводы интерфейса. Каждый язык — файл locales/<код>.json: сообщество добавляет файл, код не трогает.
// Ключи плоские («settings.title»), подстановки — {n}. Нет строки в языке — берём английскую, нет и её — ключ.
import { useEffect, useState } from 'preact/hooks';

type Dict = Record<string, string>;

const files = import.meta.glob('./locales/*.json', { eager: true, import: 'default' }) as Record<string, Dict>;

const dicts: Record<string, Dict> = {};
Object.keys(files).forEach((path) => {
  const code = path.replace(/^.*\/([^/]+)\.json$/, '$1');
  dicts[code] = files[path];
});

const FALLBACK = 'en';
const PREF_KEY = 'photoframe.language';
let lang = FALLBACK;
const listeners: Array<() => void> = [];

// Доступные языки с самоназваниями («Русский», «English») — для выбора в настройках.
export function languages(): Array<{ code: string; name: string }> {
  return Object.keys(dicts).sort().map((code) => ({ code, name: dicts[code]['_language'] || code }));
}

// ru-RU → ru, pt-BR → pt-BR если есть такой файл, иначе pt.
function pick(code: string | undefined): string | null {
  if (!code) return null;
  if (dicts[code]) return code;
  const base = code.split(/[-_]/)[0].toLowerCase();
  return dicts[base] ? base : null;
}

// Выбор на этом устройстве ('' — автоматически).
export function preferredLanguage(): string {
  try { return localStorage.getItem(PREF_KEY) || ''; } catch (e) { return ''; }
}

export function setPreferredLanguage(code: string) {
  try { localStorage.setItem(PREF_KEY, code); } catch (e) { /* ignore */ }
}

// auto — язык пользователя HA (в карточке) или браузера (в PWA). Без аргумента — последняя подсказка.
let lastAuto: string | undefined;

export function applyLanguage(auto?: string) {
  if (auto) lastAuto = auto;
  const next = pick(preferredLanguage()) || pick(lastAuto) || pick(navigator.language) || FALLBACK;
  if (next === lang) return;
  lang = next;
  listeners.forEach((l) => l());
}

export function currentLanguage() {
  return lang;
}

export function t(key: string, vars?: Record<string, string | number>): string {
  let s = (dicts[lang] && dicts[lang][key]) || (dicts[FALLBACK] && dicts[FALLBACK][key]) || key;
  if (vars) Object.keys(vars).forEach((k) => { s = s.split('{' + k + '}').join(String(vars[k])); });
  return s;
}

// Списки (дни недели, месяцы) хранятся строкой через запятую.
export function tList(key: string): string[] {
  return t(key).split(',').map((x) => x.trim());
}

// Сразу при загрузке — язык браузера (или выбранный на устройстве); карточка HA потом уточнит по пользователю HA.
applyLanguage();

// Перерисовать компонент при смене языка. Достаточно в корне приложения.
export function useLanguage() {
  const [, tick] = useState(0);
  useEffect(() => {
    const fn = () => tick((n) => n + 1);
    listeners.push(fn);
    return () => { listeners.splice(listeners.indexOf(fn), 1); };
  }, []);
  return lang;
}
