import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

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

export const Circle = Template.bind({});
Circle.args = {
    width: 100,
    height: 100,
    borderRadius: '50%',
};
