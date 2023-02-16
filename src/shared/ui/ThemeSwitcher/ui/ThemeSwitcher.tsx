import React from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import NightOn from 'shared/assets/icons/NightOn.svg';
import NightOff from 'shared/assets/icons/NightOff.svg';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import s from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;

    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={cn(s.switcher, {}, [className])}
            onClick={toggleTheme}
            title={t('Переключить тему')}
        >
            {theme === Theme.DARK
                ? <NightOff className={s.icon} />
                : <NightOn className={s.icon} />}
        </Button>
    );
};

export default ThemeSwitcher;
