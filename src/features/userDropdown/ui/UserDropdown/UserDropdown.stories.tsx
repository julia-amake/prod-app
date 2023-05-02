import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { UserDropdown } from './UserDropdown';

export default {
    title: 'features/UserDropdown',
    component: UserDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof UserDropdown>;

const Template: ComponentStory<typeof UserDropdown> = (args) => (
    <UserDropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
