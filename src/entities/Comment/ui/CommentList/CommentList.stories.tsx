import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

import { CommentList } from './CommentList';

const user = {
    id: '1',
    username: 'user',
    avatar: 'https://avatars.githubusercontent.com/u/11091224',
};

const comment = {
    id: '1',
    text: 'Коммент #1',
    articleId: '1',
    user,
};

export default {
    title: 'entities/comments/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const One = Template.bind({});
One.args = { comments: [comment] };

export const Few = Template.bind({});
Few.args = {
    comments: [comment, comment],
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const Empty = Template.bind({});
Empty.args = {
    comments: [],
};
