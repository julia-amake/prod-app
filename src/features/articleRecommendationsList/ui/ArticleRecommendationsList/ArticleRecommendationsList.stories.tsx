import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { article } from 'entities/Article/mocks/data';
import withMock from 'storybook-addon-mock';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    args: {
        id: '1',
    },
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock,
        StoreDecorator({}),
        RouterDecorator('/articles/1', '/articles/:id')],
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
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const Normal = Template.bind({});
