import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { ContentLoader } from 'shared/ui';

const AppRouter = () => (
    <Suspense fallback={<ContentLoader />}>
        <Routes>
            {Object.values(routeConfig)
                .map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
