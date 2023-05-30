import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import SettingsPage from './SettingsPage';

export default {
    title: 'pages/SettingsPage',
    component: SettingsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SettingsPage>;

const Template: ComponentStory<typeof SettingsPage> = () => <SettingsPage />;

export const Normal = Template.bind({});
Normal.args = {};
