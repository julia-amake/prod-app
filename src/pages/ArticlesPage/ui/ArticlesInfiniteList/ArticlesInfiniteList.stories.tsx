import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { article } from '@/entities/Article/testing';
import { ArticlesInfiniteList } from './ArticlesInfiniteList';

export default {
    title: 'pages/ArticlesPage/ArticlesInfiniteList',
    component: ArticlesInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
    decorators: [
        StoreDecorator({
            articlesPage: {
                _isInitialized: true,
                page: 1,
                limit: 6,
                ids: ['1', '2', '3'],
                entities: {
                    1: article,
                    2: { ...article, id: '2' },
                    3: { ...article, id: '3' },
                },
                type: ArticleType.ALL,
                sort: ArticleSortField.TITLE,
                view: ArticleView.GRID,
                order: 'asc',
                search: '',
            },
        }),
        RouterDecorator('/article'),
    ],
} as ComponentMeta<typeof ArticlesInfiniteList>;

const Template: ComponentStory<typeof ArticlesInfiniteList> = (args) => (
    <ArticlesInfiniteList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
