import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { article } from 'entities/Article/mocks/data';
import withMock from 'storybook-addon-mock';
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
        ],
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
