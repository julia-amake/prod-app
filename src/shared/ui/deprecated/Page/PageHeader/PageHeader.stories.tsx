import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { PageHeader } from './PageHeader';

export default {
    title: 'shared/PageHeader',
    component: PageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => (
    <PageHeader {...args}>Header</PageHeader>
);

export const Normal = Template.bind({});
Normal.args = {};
