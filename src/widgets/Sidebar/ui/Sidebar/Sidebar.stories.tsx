import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import Sidebar from './Sidebar';

export default {
    title: 'widget/Sidebar',
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
export const Dark = Template.bind({});
Dark.args = {

};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const NoAuth = Template.bind({});
NoAuth.args = {

};
NoAuth.decorators = [StoreDecorator({})];
