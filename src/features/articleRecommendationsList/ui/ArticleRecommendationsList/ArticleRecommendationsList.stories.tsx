import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { article } from '@/entities/Article/testing';
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
    decorators: [StoreDecorator({}), RouterDecorator('/article/1', '/article/:id')],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=3&id_ne=1`,
                method: 'GET',
                status: 200,
                response: [article, { ...article, id: '2' }, { ...article, id: '3' }],
            },
        ],
    },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
    <ArticleRecommendationsList {...args} />
);

export const Normal = Template.bind({});
