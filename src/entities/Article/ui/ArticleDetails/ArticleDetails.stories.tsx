import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { article } from '../../mocks/data';
import { ArticleDetails } from './ArticleDetails';

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        id: '1',
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => (
    <ArticleDetails {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        articleDetails: {
            data: article,
        },
    }),
];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
Loading.decorators = [StoreDecorator({})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
    StoreDecorator({
        articleDetails: {
            error: 'Error',
        },
    }),
];
