import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/consts/theme';

import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: (
            <>
                <h1>Заголовок</h1>
                <p>Текст модалки</p>
            </>
        ),
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Modal {...args} />
);

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
};
export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
