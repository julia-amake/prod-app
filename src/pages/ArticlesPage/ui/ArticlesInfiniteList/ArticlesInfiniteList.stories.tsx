import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesInfiniteList } from './ArticlesInfiniteList';

// todo: Вывести данные

export default {
    title: 'pages/ArticlesPage/ArticlesInfiniteList',
    component: ArticlesInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof ArticlesInfiniteList>;

const Template: ComponentStory<typeof ArticlesInfiniteList> = (args) => (
    <ArticlesInfiniteList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({

})];
