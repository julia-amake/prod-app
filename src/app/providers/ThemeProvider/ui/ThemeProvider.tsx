import React, { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/consts/localstorage';
import { Theme } from '@/shared/consts/theme';
import { useJsonSettings } from '@/entities/User';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const fallBackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, initialTheme } = props;
    const { theme: defaultTheme } = useJsonSettings();
    const [isThemeInited, setIsThemeInited] = useState(false);
    const [theme, setTheme] = useState<Theme>(
        initialTheme || fallBackTheme || Theme.LIGHT,
    );

    useEffect(() => {
        if (!isThemeInited && defaultTheme) {
            setTheme(defaultTheme);
            setIsThemeInited(true);
        }
    }, [defaultTheme, isThemeInited]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    useEffect(() => {
        const classNames = document.body.classList;
        if (classNames.contains(theme)) return;
        if (theme === Theme.LIGHT) {
            classNames.remove(Theme.DARK);
            classNames.remove(Theme.COLORED);
        } else if (theme === Theme.DARK) {
            classNames.remove(Theme.LIGHT);
            classNames.remove(Theme.COLORED);
        } else {
            classNames.remove(Theme.LIGHT);
            classNames.remove(Theme.DARK);
        }
        classNames.add(theme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
