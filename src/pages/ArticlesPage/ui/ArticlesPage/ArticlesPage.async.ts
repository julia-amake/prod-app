import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // todo: удалить временную искусственную задержку
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));
