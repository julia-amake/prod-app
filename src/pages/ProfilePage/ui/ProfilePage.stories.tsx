import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { AVATAR } from '@/shared/consts/tests';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    args: {},
    decorators: [
        StoreDecorator({
            profile: {
                formData: {
                    name: 'Имя',
                    lastname: 'Фамилия',
                    age: 30,
                    currency: Currency.EUR,
                    country: Country.UKRAINE,
                    city: 'Город',
                    username: 'admin',
                    avatar: AVATAR,
                },
            },
        }),
        RouterDecorator('/profile/1', '/profile/:id'),
    ],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ProfilePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
