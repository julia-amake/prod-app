import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { NotificationButton } from './NotificationButton';

export default {
    title: 'features/Notifications/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => (
    <NotificationButton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
