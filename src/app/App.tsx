import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MainLayout } from '@/shared/layouts';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ContentLoader } from '@/shared/ui';
import { Preloader } from '@/shared/ui/deprecated/Preloader';
import { getUserIsInitialized, initAuthData } from '@/entities/User';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
// eslint-disable-next-line amake-plugin/layer-imports
import { AppRouter } from '@/app/providers/router';

function App() {
    const dispatch = useAppDispatch();
    const isUserInitialized = useSelector(getUserIsInitialized);

    // берем юзера из local storage
    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    if (!isUserInitialized) return <Preloader />;

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <MainLayout
                    content={<AppRouter />}
                    header={<Navbar />}
                    sidebar={<Sidebar />}
                    toolbar={<div>...</div>}
                    className="app_redesigned"
                />
            }
            off={
                <div className={cn('app', {}, [])}>
                    <Suspense fallback={<ContentLoader />}>
                        <div className="wrapper">
                            <Sidebar />
                            <div className="main">
                                <Navbar />
                                <Suspense fallback={<ContentLoader />}>
                                    <AppRouter />
                                </Suspense>
                            </div>
                        </div>
                    </Suspense>
                </div>
            }
        />
    );
}

export default App;
