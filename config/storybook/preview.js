import { FeatureFlagsDecorator } from '../../src/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { TranslationsDecorator } from '../../src/shared/config/storybook/TranslationsDecorator/TranslationsDecorator';
import { Theme } from '../../src/shared/consts/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: ['app', Theme.LIGHT], color: '#ffffff' },
            { name: 'dark', class: ['app', Theme.DARK], color: '#000000' },
            {
                name: 'colored',
                class: ['app', Theme.COLORED],
                color: '#0544cc',
            },
        ],
    },
};

export const decorators = [
    TranslationsDecorator,
    StyleDecorator,
    SuspenseDecorator,
    FeatureFlagsDecorator({}),
];
