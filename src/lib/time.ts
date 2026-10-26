import { useEffect, useState } from 'preact/hooks';
import { t, tList } from '../i18n';

export function useNow(stepMs = 1000) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), stepMs);
    return () => clearInterval(t);
  }, [stepMs]);
  return now;
}

function pad(n: number) { return n < 10 ? '0' + n : String(n); }

export function formatTime(d: Date, withSeconds = false) {
  return pad(d.getHours()) + ':' + pad(d.getMinutes()) + (withSeconds ? ':' + pad(d.getSeconds()) : '');
}

// toLocaleDateString с опциями в старых WebView может игнорировать локаль — названия берём из переводов.
export function formatDate(d: Date) {
  return t('date.full', { weekday: tList('date.weekdays')[d.getDay()], day: d.getDate(), month: tList('date.months')[d.getMonth()] });
}
