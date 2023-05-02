import React, {
    FC, ReactNode, useEffect, useMemo, useState,
} from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/consts/localstorage';
import { Theme } from '@/shared/consts/theme';

import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';

const defaultTheme = localStorage
    .getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
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
