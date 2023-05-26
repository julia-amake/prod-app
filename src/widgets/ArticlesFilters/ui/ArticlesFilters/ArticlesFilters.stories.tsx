import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ArticlesFilters } from './ArticlesFilters';

export default {
    title: 'shared/ArticlesFilters',
    component: ArticlesFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof ArticlesFilters>;

const Template: ComponentStory<typeof ArticlesFilters> = (args) => (
    <ArticlesFilters {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
