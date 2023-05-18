import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { CommentCard } from './CommentCard';

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
    title: 'entities/comments/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment,
};

export const NoAvatar = Template.bind({});
NoAvatar.args = {
    comment: { ...comment, user: { ...user, avatar: '' } },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
