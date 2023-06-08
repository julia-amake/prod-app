import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppLoaderLayout, MainLayout } from '@/shared/layouts';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { ContentLoader } from '@/shared/ui';
import { Preloader } from '@/shared/ui/deprecated/Preloader';
import { getUserIsInitialized, initAuthData } from '@/entities/User';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
// eslint-disable-next-line amake-plugin/layer-imports
import { useAppToolbar } from '@/app/lib/useAppToolbar';
// eslint-disable-next-line amake-plugin/layer-imports
import { AppRouter } from '@/app/providers/router';

function App() {
    const dispatch = useAppDispatch();
    const isUserInitialized = useSelector(getUserIsInitialized);
    const { theme } = useTheme();
    const toolbar = useAppToolbar();

    // берем юзера из local storage
    useEffect(() => {
        if (!isUserInitialized) {
            dispatch(initAuthData());
        }
    }, [isUserInitialized, dispatch]);

    if (!isUserInitialized)
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div id="app" className={cn('app_redesigned', {}, [theme])}>
                        <AppLoaderLayout />
                    </div>
                }
                off={<Preloader />}
            />
        );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <MainLayout
                    content={<AppRouter />}
                    header={<Navbar />}
                    sidebar={<Sidebar />}
                    toolbar={toolbar}
                    className="app_redesigned"
                    id="app"
                />
            }
            off={
                <div className={cn('app', {}, [])} id="app">
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
