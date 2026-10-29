// Предпросмотр рамки в разделе «Фоторамки» HA (/photoframe/?preview=1 во встроенном окне размером с экран рамки):
// приложение не регистрируется в HA как ещё одна рамка, не держит экран и сразу открывает дашборд.
// Флаг держится и после входа через страницу HA (она возвращает на адрес без параметров).
const KEY = 'photoframe.preview';

export const PREVIEW = (() => {
  const asked = /[?&]preview=1\b/.test(location.search);
  try {
    if (asked) sessionStorage.setItem(KEY, '1');
    return sessionStorage.getItem(KEY) === '1';
  } catch (e) {
    return asked;
  }
})();
