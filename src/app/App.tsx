import React, {Suspense} from 'react';
import 'normalize.css';
import './styles/index.scss';
import {Link, Route, Routes} from 'react-router-dom';
import {cn} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={cn('app', {[theme]: true}, [])}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
