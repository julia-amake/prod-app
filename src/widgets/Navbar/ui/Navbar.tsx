import React from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import s from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: React.FC<NavbarProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className={cn(s.navbar, {}, [className])}>
            <AppLink
                to="/"
                theme={AppLinkTheme.SECONDARY}
                className={s.link}
            >
                {t('Главная')}
            </AppLink>
            <AppLink
                to="/about"
                theme={AppLinkTheme.SECONDARY}
                className={s.link}
            >
                {t('О сайте')}
            </AppLink>
        </div>
    );
};

export default Navbar;
