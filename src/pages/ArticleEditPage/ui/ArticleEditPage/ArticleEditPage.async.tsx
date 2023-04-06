import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
    // todo: удалить временную искусственную задержку
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleEditPage')), 400);
}));
