import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { NotificationsItem } from './NotificationsItem';

export default {
    title: 'entities/Notifications/NotificationsItem',
    component: NotificationsItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof NotificationsItem>;

const Template: ComponentStory<typeof NotificationsItem> = (args) => <NotificationsItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    isLoading: false,
    data: {
        id: '1',
        title: 'Заголовок',
        description: 'Короткое описание',
        userId: '1',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_316/24ffbc128582189.615974e3d023b.jpg',
    },
};

export const WithoutPic = Template.bind({});
WithoutPic.args = {
    isLoading: false,
    data: {
        id: '1',
        title: 'Заголовок',
        description: 'Короткое описание',
        userId: '1',
    },
};

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};
