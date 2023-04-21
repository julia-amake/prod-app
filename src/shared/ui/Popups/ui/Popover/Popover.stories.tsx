import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args}>Контент</Popover>
);

export const Normal = Template.bind({});
Normal.args = {};
