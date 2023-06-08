// объект-сопоставление – в зависимости от роута возвращает необходимый тулбар
import { ReactElement } from 'react';
import { AppRoutes } from '@/shared/consts/router';
import { useRouteChange } from '@/shared/lib/router/useRouteChange/useRouteChange';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';

export function useAppToolbar() {
    const appRoute = useRouteChange();

    const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
    };

    return toolbarByAppRoute[appRoute];
}
