import { Route, Routes } from 'react-router-dom';
import { memo, useCallback } from 'react';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

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
