import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PageContent } from './PageContent';

export default {
    title: 'shared/PageContent',
    component: PageContent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof PageContent>;

const Template: ComponentStory<typeof PageContent> = (args) => (
    <PageContent {...args}>Page Content</PageContent>
);

export const Normal = Template.bind({});
Normal.args = {};
