import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { article } from '@/entities/Article/testing';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
    decorators: [
        StoreDecorator({}),
        RouterDecorator('/articles'),
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_expand=user&_page=2&_limit=6&_sort=createdAt&_order=desc&q=`,
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
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
    <ArticlesPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [];
