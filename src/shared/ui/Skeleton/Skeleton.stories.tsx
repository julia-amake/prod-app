import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    width: 200,
    height: 24,
};

export const Dark = Template.bind({});
Dark.args = {
    width: 200,
    height: 24,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Colored = Template.bind({});
Colored.args = {
    width: 200,
    height: 24,
};
Colored.decorators = [ThemeDecorator(Theme.COLORED)];

export const Circle = Template.bind({});
Circle.args = {
    width: 100,
    height: 100,
    borderRadius: '50%',
};
