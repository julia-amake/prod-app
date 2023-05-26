import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { StickyContentLayout } from './StickyContentLayout';

export default {
    title: 'shared/StickyContentLayout',
    component: StickyContentLayout,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof StickyContentLayout>;

const Template: ComponentStory<typeof StickyContentLayout> = (args) => (
    <StickyContentLayout {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
