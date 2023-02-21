import React, { Suspense } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { ContentLoader } from 'shared/ui';

function App() {
    return (
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
    );
}

export default App;
