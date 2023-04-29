import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { NotificationsList } from './NotificationsList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const notification = {
    id: '1',
    title: 'Заголовок уведомления',
    description: 'Описание к уведомлению',
    userId: '1',
    image: 'https://mir-cdn.behance.net/v1/rendition/project_modules/'
        + '1400_opt_1/24ffbc128582189.615974e3d023b.jpg',
};

export default {
    title: 'entities/Notifications/NotificationsList',
    component: NotificationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
    decorators: [
        StoreDecorator({}),
        withMock,
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    notification,
                    notification,
                    notification,
                    notification,
                    notification,
                    notification,
                ],
                delay: 2000,
            },
        ],
    },
} as ComponentMeta<typeof NotificationsList>;

const Template: ComponentStory<typeof NotificationsList> = (args) => (
    <NotificationsList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    isShort: false,
};
export const Short = Template.bind({});
Short.args = {
    isShort: true,
};

export const Empty = Template.bind({});
Empty.args = {
    isShort: true,
};
Empty.parameters = {
    mockData: [],
};
