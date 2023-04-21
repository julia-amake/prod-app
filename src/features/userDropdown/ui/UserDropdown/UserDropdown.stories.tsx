import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserDropdown } from './UserDropdown';

export default {
    title: 'shared/UserDropdown',
    component: UserDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof UserDropdown>;

const Template: ComponentStory<typeof UserDropdown> = (args) => (
    <UserDropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
