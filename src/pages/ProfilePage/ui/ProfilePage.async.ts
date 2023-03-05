import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // todo: удалить временную искусственную задержку
    // @ts-ignore
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
