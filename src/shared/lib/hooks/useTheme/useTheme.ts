import { useContext } from 'react';
import { Theme } from '@/shared/consts/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface useThemeResult {
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
    theme: Theme;
}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
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
        saveAction?.(newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
