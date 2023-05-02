import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/consts/theme';

import NotFoundPage from './NotFoundPage';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator({})];

export const DarkTheme = Template.bind({});
DarkTheme.args = {};
DarkTheme.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
