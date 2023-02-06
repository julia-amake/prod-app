import React from 'react';
import 'normalize.css';
import './styles/index.scss';
import {cn} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={cn('app', {[theme]: true}, [])}>
            <Sidebar/>
            <div className="main">
                <Navbar/>
                <AppRouter/>
            </div>
        </div>
    );
};

export default App;
