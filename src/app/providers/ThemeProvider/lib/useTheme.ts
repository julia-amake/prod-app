import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface useThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    useEffect(() => {
        const classNames = document.body.classList;
        if (classNames.contains(theme)) return;
        if (theme === Theme.LIGHT) {
            classNames.remove(Theme.DARK);
        } else {
            classNames.remove(Theme.LIGHT);
        }
        classNames.add(theme);
    }, [theme]);

    return {
        toggleTheme, theme,
    };
}
