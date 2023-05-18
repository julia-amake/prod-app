import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { MainLayout } from './MainLayout';

export default {
    title: 'shared/MainLayout',
    component: MainLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => <MainLayout {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
