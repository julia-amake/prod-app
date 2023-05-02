import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

import { article } from '../../mocks/data';
import { ArticleType, ArticleView } from '../../model/consts/consts';

import { ArticleListItem } from './ArticleListItem';

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        article,
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
    <ArticleListItem {...args} />
);

export const Grid = Template.bind({});
Grid.args = {
    view: ArticleView.GRID,
};

export const GridOneCategory = Template.bind({});
GridOneCategory.args = {
    view: ArticleView.GRID,
    article: { ...article, type: [ArticleType.ECONOMIC] },
};

export const List = Template.bind({});
List.args = {
    view: ArticleView.LIST,
};
