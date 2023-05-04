import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import Sidebar from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    decorators: [
        StoreDecorator({ user: { authData: { id: '1', username: 'user' } } }),
        RouterDecorator(),
    ],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {

};

export const NoAuth = Template.bind({});
NoAuth.args = {

};
NoAuth.decorators = [StoreDecorator({})];
