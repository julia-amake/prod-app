import {lazy} from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // todo: удалить временную искусственную задержку
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));