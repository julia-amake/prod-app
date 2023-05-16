import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ContentLoader } from '@/shared/ui';
import { Preloader } from '@/shared/ui/Preloader';
import { getUserIsInitialized, initAuthData } from '@/entities/User';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/router';

function App() {
    const dispatch = useAppDispatch();
    const isUserInitialized = useSelector(getUserIsInitialized);

    // берем юзера из local storage
    useEffect(() => {
        dispatch(initAuthData());
    }, [dispatch]);

    // TODO: сделать нормальный прелоадер
    if (!isUserInitialized) return <Preloader />;

    return (
        <div className={cn('app', {}, [])}>
            <Suspense fallback={<ContentLoader />}>
                <div className="wrapper">
                    <Sidebar />
                    <div className="main">
                        <Navbar />
                        <Suspense fallback={<ContentLoader />}>{isUserInitialized ? <AppRouter /> : null}</Suspense>
                    </div>
                </div>
            </Suspense>
        </div>
    );
}

export default App;
