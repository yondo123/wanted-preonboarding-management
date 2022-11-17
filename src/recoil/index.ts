import { atom } from 'recoil';
import type { Column } from '../types/index';

export const modalState = atom({
  key: 'modalState',
  default: { show: false, message: '' },
});

export const listColumnState = atom<Column[]>({
  key: 'listColumnState',
  default: [],
});

export const pageState = atom({
  key: 'pageState',
  default: 1,
});
