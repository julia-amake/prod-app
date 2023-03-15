import React, {
    FC, useEffect, useMemo, useState,
} from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage
    .getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        children,
        initialTheme,
    } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

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
    }, [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
