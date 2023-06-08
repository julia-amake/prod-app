import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ScrollToolbar } from './ScrollToolbar';

export default {
    title: 'shared/ScrollToolbar',
    component: ScrollToolbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof ScrollToolbar>;

const Template: ComponentStory<typeof ScrollToolbar> = (args) => (
    <ScrollToolbar {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
