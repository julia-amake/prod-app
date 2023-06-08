import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AppLoaderLayout } from './AppLoaderLayout';

export default {
    title: 'shared/AppLoaderLayout',
    component: AppLoaderLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof AppLoaderLayout>;

const Template: ComponentStory<typeof AppLoaderLayout> = () => (
    <AppLoaderLayout />
);

export const Normal = Template.bind({});
Normal.args = {};
