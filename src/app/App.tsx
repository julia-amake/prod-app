import React from 'react';
import 'normalize.css';
import './styles/index.scss';
import {cn} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgets/Navbar';

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={cn('app', {[theme]: true}, [])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;
