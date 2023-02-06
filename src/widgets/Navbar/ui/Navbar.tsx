import React from 'react';
import {cn} from 'shared/lib/classNames/classNames';
import AppLink, {AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import s from './Navbar.module.scss';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
    className?: string;
}

const Navbar: React.FC<NavbarProps> = (props) => {
    const {className} = props;

    return (
        <div className={cn(s.navbar, {}, [className])}>
            <AppLink
                to={'/'}
                theme={AppLinkTheme.SECONDARY}
                className={s.link}
            >
                Главная
            </AppLink>
            <AppLink
                to={'/about'}
                theme={AppLinkTheme.SECONDARY}
                className={s.link}
            >
                О сайте
            </AppLink>
            <ThemeSwitcher/>
        </div>
    );
};

export default Navbar;
