import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import NightOff from '@/shared/assets/icons/NightOff.svg';
import NightOn from '@/shared/assets/icons/NightOn.svg';
import ThemeIcon from '@/shared/assets/icons/redesigned/Theme.svg';
import { Theme } from '@/shared/consts/theme';
import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { saveJsonSettings } from '@/entities/User';
import s from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
    isInvertedColor?: boolean;
}

const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className = '', isInvertedColor = false } = props;
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onToggle = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button
                    variant="clear"
                    className={cn(s.switcherRedesigned, {}, [className])}
                    onClick={onToggle}
                    title={t('Переключить тему')}
                    icon={{
                        element: ThemeIcon,
                        className: s.iconRedesigned,
                    }}
                />
            }
            off={
                <ButtonDeprecated
                    theme={ButtonTheme.CLEAR}
                    className={cn(s.switcher, {}, [className])}
                    onClick={onToggle}
                    title={t('Переключить тему')}
                    icon={{
                        element: theme === Theme.DARK ? NightOff : NightOn,
                        className: cn('', { [s.inverted]: isInvertedColor }, [
                            s.icon,
                        ]),
                    }}
                />
            }
        />
    );
});

export default ThemeSwitcher;
