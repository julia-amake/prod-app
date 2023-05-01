import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AVATAR } from '@/shared/consts/tests';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    args: {
        data: {
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
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    readOnly: true,
    isLoading: false,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    readOnly: true,
    isLoading: false,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Editable = Template.bind({});
Editable.args = {
    readOnly: false,
    isLoading: false,
};

export const WithLoading = Template.bind({});
WithLoading.args = {
    readOnly: true,
    isLoading: true,
};

export const WithError = Template.bind({});
WithError.args = {
    readOnly: true,
    isLoading: false,
    error: 'Ошибка',
};
