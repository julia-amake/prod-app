import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { RedesignedAppDecorator } from '@/shared/config/storybook/RedesignedAppDecorator/RedesignedAppDecorator';
import { AVATAR } from '@/shared/consts/tests';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
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

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = {
    readOnly: true,
    isLoading: false,
};
PrimaryRedesigned.decorators = [RedesignedAppDecorator];

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
