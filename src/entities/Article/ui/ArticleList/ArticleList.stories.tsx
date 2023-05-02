import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

import { articles } from '../../mocks/data';
import { ArticleView } from '../../model/consts/consts';

import { ArticleList } from './ArticleList';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
    <ArticleList {...args} />
);

export const Grid = Template.bind({});
Grid.args = {
    view: ArticleView.GRID,
    articles,
};

export const GridLoading = Template.bind({});
GridLoading.args = {
    view: ArticleView.GRID,
    isLoading: true,
};

export const List = Template.bind({});
List.args = {
    view: ArticleView.LIST,
    articles,
};
