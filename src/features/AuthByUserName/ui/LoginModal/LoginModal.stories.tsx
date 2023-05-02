import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import LoginModal from './LoginModal';

export default {
    title: 'features/LoginModal',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        isOpen: true,
    },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => (
    <LoginModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {

};
Primary.decorators = [
    StoreDecorator({}),
];
