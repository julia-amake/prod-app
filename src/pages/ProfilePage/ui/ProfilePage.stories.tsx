import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { AVATAR } from 'shared/consts/tests';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    args: {},
    decorators: [StoreDecorator({
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
    })],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ProfilePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const DarkTheme = Template.bind({});
DarkTheme.args = {};
DarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
