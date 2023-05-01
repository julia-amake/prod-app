import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AVATAR } from '@/shared/consts/tests';
import Avatar from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    args: {
        src: AVATAR,
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
    <Avatar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {

};

export const CustomSize = Template.bind({});
CustomSize.args = {
    size: 48,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {

};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
