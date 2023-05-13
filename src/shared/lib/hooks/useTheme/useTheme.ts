import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/consts/localstorage';
import { Theme } from '@/shared/consts/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface useThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const getTheme = () => {
            switch (theme) {
                case Theme.DARK:
                    return Theme.LIGHT;
                case Theme.LIGHT:
                    return Theme.COLORED;
                case Theme.COLORED:
                    return Theme.DARK;
                default:
                    return Theme.LIGHT;
            }
        };

        const newTheme: Theme = getTheme();

        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
