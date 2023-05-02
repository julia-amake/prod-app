import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cn } from '@/shared/lib/classNames/classNames';
import { ContentLoader } from '@/shared/ui';

import { getUserIsInitialized, userActions } from '@/entities/User';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';

function App() {
    const dispatch = useDispatch();
    const isUserInitialized = useSelector(getUserIsInitialized);

    // берем юзера из local storage
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={cn('app', {}, [])}>
            <Suspense fallback={<ContentLoader />}>
                <div className="wrapper">
                    <Sidebar />
                    <div className="main">
                        <Navbar />
                        <Suspense fallback={<ContentLoader />}>
                            {isUserInitialized ? <AppRouter /> : null}
                        </Suspense>
                    </div>
                </div>
            </Suspense>
        </div>
    );
}

export default App;
