import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleType, ArticleView } from '../../model/types/article';
import { ArticleListItem } from './ArticleListItem';
import { article } from '../../mocks/data';

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        article,
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
    <ArticleListItem {...args} />
);

export const Grid = Template.bind({});
Grid.args = {};

export const GridOneCategory = Template.bind({});
GridOneCategory.args = {
    article: { ...article, type: [ArticleType.ECONOMIC] },
};

export const List = Template.bind({});
List.args = {
    view: ArticleView.LIST,
};
