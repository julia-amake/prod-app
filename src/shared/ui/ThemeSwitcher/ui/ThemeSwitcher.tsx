import React, { memo } from 'react';
import { cn } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import NightOn from 'shared/assets/icons/NightOn.svg';
import NightOff from 'shared/assets/icons/NightOff.svg';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import s from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
    isInvertedColor?: boolean;
}

const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const {
        className = '',
        isInvertedColor = false,
    } = props;

    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={cn(s.switcher, {}, [className])}
            onClick={toggleTheme}
            title={t('Переключить тему')}
            icon={{
                element: theme === Theme.DARK ? NightOff : NightOn,
                className: cn('', { [s.inverted]: isInvertedColor }, [s.icon]),
                size: ButtonSize.M,
            }}
        />
    );
});

export default ThemeSwitcher;
