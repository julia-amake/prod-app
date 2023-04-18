import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { AVATAR } from 'shared/consts/tests';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        id: '1',
    },
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
    })],
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const Normal = Template.bind({});
