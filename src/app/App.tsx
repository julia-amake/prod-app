import React from 'react';
import 'normalize.css';
import './styles/index.scss';
import {Link} from 'react-router-dom';
import {cn} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from 'app/providers/router';

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={cn('app', {[theme]: true}, [])}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter/>
        </div>
    );
};

export default App;
