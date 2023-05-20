import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { AppLink } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
        children: 'Link',
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args}>Link</AppLink>
);

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
};

export const Danger = Template.bind({});
Danger.args = {
    variant: 'danger',
};

export const Clear = Template.bind({});
Clear.args = {
    variant: 'clear',
};
