import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { ArticleView } from '../../model/consts/consts';
import { articles } from '../../mocks/data';
import { ArticleList } from './ArticleList';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        articles,
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
    <ArticleList {...args} />
);

export const Grid = Template.bind({});
Grid.args = {
    view: ArticleView.GRID,
};

export const GridLoading = Template.bind({});
GridLoading.args = {
    view: ArticleView.GRID,
    isLoading: true,
};

export const List = Template.bind({});
List.args = {
    view: ArticleView.LIST,
};
