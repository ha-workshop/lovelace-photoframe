// Font Awesome (обычные и контурные) — отдельным файлом: около 150 kB путей SVG, а на экране обычно пара
// значков. Грузится по первому значку fa-/far- или при открытии выбора иконки (lib/icons).
import { FA_SOLID, FA_SOLID_GROUPS } from './fa-solid';
import { FA_REGULAR, FA_REGULAR_GROUPS } from './fa-regular';

export const FA = { ...FA_SOLID, ...FA_REGULAR };
export const FA_GROUPS = [...FA_SOLID_GROUPS, ...FA_REGULAR_GROUPS];
