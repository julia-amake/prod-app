import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationsItem } from './NotificationsItem';

export default {
    title: 'shared/NotificationsItem',
    component: NotificationsItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof NotificationsItem>;

const Template: ComponentStory<typeof NotificationsItem> = (args) => (
    <NotificationsItem {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
