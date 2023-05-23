import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        trigger: <div>Триггер</div>,
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args}>Контент</Popover>
);

export const Normal = Template.bind({});
Normal.args = {};
