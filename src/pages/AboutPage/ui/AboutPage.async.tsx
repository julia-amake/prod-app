import {lazy} from 'react';

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // todo: удалить временную искусственную задержку
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
