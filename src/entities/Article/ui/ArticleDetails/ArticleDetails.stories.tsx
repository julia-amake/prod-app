import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleBlockType, ArticleType } from '../../model/types/article';
import { ArticleDetails } from './ArticleDetails';

const article = {
    id: '1',
    title: '12 приемов работы с&nbsp;JavaScript',
    subtitle: 'Приемы, которых нет в&nbsp;большинстве туториалов',
    image: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/727/f54/666/727f54666075840f2c6a6d521f39e8f1.jpeg',
    views: 1052,
    createdAt: '16.03.2023',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            paragraphs: [
                'Когда я начал изучать JavaScript, то первым делом составил список приемов, которые помогали мне '
                + 'экономить время. Я подсмотрел их у&nbsp;других программистов, на&nbsp;разных сайтах и&nbsp;в&nbsp;'
                + 'мануалах.',
                'В&nbsp;этой статье я покажу 12&nbsp;отличных способов улучшить и&nbsp;ускорить свой JavaScript-код. '
                + 'В&nbsp;большинстве случаев они универсальны.',
            ],
        },
        {
            id: '3',
            type: ArticleBlockType.TEXT,
            title: 'Фильтрация уникальных значений',
            paragraphs: [
                'Тип объекта Set был введен в ES6, вместе с ..., spread-оператором, мы можем использовать его для '
                + 'создания нового массива, в котором содержатся лишь уникальные значения.',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: 'const array = [1, 1, 2, 3, 5, 5, 1]\nconst uniqueArray = [...new Set(array)];\n \nconsole.log'
                + '(uniqueArray); // Result: [1, 2, 3, 5]',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            paragraphs: [
                'В&nbsp;обычной ситуации для выполнения той же операции нужно гораздо больше кода.',
                'Этот прием работает для массивов, содержащих примитивные типы: undefined, null, boolean, string '
                + 'и&nbsp;number. Если вы работаете с&nbsp;массивом, содержащим объекты, функции или дополнительные '
                + 'массивы, вам понадобится другой подход.',
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.DIVIDER,
        },
        {
            id: '6',
            type: ArticleBlockType.IMAGE,
            title: 'Чуваки из Силиконовой Долины',
            src: 'https://furyosa.com/wp-content/uploads/2018/10/Silicon-Valley-furyosa-main.jpg',
        },
    ],
};

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => (
    <ArticleDetails {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    articleDetails: {
        data: article,
    },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    articleDetails: {
        isLoading: true,
    },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
    articleDetails: {
        error: 'Error',
    },
})];
