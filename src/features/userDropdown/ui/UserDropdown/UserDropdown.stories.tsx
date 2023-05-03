import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { UserRole } from '@/entities/User';

import { UserDropdown } from './UserDropdown';

export default {
    title: 'features/UserDropdown',
    component: UserDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
    decorators: [
        (Story) => <div style={{ marginLeft: 'auto', width: 'fit-content' }}><Story /></div>,
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    roles: [UserRole.ADMIN],
                },
            },
        })],
} as ComponentMeta<typeof UserDropdown>;

const Template: ComponentStory<typeof UserDropdown> = (args) => (
    // @ts-ignore
    <UserDropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
