import { memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppRoutesProps } from '@/shared/types/router';

import { routeConfig } from '../config/routeConfig';

import { RequireAuth } from './RequireAuth';

const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => (
        <Route
            key={route.path}
            path={route.path}
            element={route.authOnly
                // eslint-disable-next-line react/jsx-no-useless-fragment
                ? <RequireAuth roles={route.roles}><>{route.element}</></RequireAuth>
                : route.element}
        />
    ), []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
});

export default AppRouter;
