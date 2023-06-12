import React, { ComponentType } from 'react';
import { useJsonSettings } from '@/entities/User';
import ThemeProvider from './ThemeProvider';

export const withTheme = (Component: ComponentType) => () => {
    const { theme: defaultTheme } = useJsonSettings();
    return (
        <ThemeProvider initialTheme={defaultTheme}>
            <Component />
        </ThemeProvider>
    );
};
