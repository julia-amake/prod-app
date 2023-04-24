import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import Preloader from './Preloader';

export default {
    title: 'shared/Preloader',
    component: Preloader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {

    },
} as ComponentMeta<typeof Preloader>;

const Template: ComponentStory<typeof Preloader> = (args) => (
    <Preloader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {

};

export const DarkTheme = Template.bind({});
DarkTheme.args = {

};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
