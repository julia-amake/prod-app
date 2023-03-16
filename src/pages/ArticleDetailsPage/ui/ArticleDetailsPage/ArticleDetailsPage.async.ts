import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // todo: удалить временную искусственную задержку
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));
