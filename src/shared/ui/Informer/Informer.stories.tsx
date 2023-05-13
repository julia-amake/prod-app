import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Informer, InformerStatuses } from './Informer';

export default {
    title: 'shared/Informer',
    component: Informer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        status: InformerStatuses.INFO,
    },
} as ComponentMeta<typeof Informer>;

const Template: ComponentStory<typeof Informer> = (args) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Informer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    title: 'Заголовок',
    text:
        'Этот текст показывает, как можно использовать файл.map ' +
        'для отображения объектов в HTML. Это не относится к типу объекта, ' +
        'это относится к тому, какой объект отображается в файле.map.',
};

export const PrimaryOnlyTitleCentered = Template.bind({});
PrimaryOnlyTitleCentered.args = {
    title: 'Заголовок',
    isCentered: true,
};

export const PrimaryOnlyText = Template.bind({});
PrimaryOnlyText.args = {
    text:
        'Этот текст показывает, как можно использовать файл.map ' +
        'для отображения объектов в HTML. Это не относится к типу объекта, ' +
        'это относится к тому, какой объект отображается в файле.map.',
};

export const withoutIcon = Template.bind({});
withoutIcon.args = {
    title: 'Заголовок',
    text:
        'Этот текст показывает, как можно использовать файл.map ' +
        'для отображения объектов в HTML. Это не относится к типу объекта, ' +
        'это относится к тому, какой объект отображается в файле.map.',
    showIcon: false,
};

export const Error = Template.bind({});
Error.args = {
    title: 'Заголовок',
    text:
        'Этот текст показывает, как можно использовать файл.map ' +
        'для отображения объектов в HTML. Это не относится к типу объекта, ' +
        'это относится к тому, какой объект отображается в файле.map.',
    status: InformerStatuses.ERROR,
};
