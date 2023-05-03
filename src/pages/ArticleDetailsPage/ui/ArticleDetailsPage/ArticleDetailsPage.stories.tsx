import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import withMock from 'storybook-addon-mock';

import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { article } from '@/entities/Article/testing';

import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
    decorators: [
        withMock,
        StoreDecorator({ articleDetails: { data: article } }),
        RouterDecorator('/articles/1', '/articles/:id'),
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=3&id_ne=1`,
                method: 'GET',
                status: 200,
                response: [
                    article,
                    { ...article, id: '2' },
                    { ...article, id: '3' },
                ],
            },
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [],
            },
        ],
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
