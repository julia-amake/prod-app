import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        tabs: [
            { value: 'tab 1', content: 'tab 1' },
            { value: 'tab 2', content: 'tab 2' },
            { value: 'tab 3', content: 'tab 3' },
        ],
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
    <Tabs {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
