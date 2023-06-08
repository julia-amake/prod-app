import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { AppRouteByPathPattern, AppRoutes } from '@/shared/consts/router';

export function useRouteChange() {
    const { pathname } = useLocation();
    const [appRoute, setAppRoute] = useState<AppRoutes>(AppRoutes.MAIN);

    useEffect(() => {
        Object.entries(AppRouteByPathPattern).every(([pattern, route]) => {
            if (matchPath(pattern, pathname)) {
                setAppRoute(route);
                return false;
            }
            return true;
        });
    }, [pathname]);

    return appRoute;
}
