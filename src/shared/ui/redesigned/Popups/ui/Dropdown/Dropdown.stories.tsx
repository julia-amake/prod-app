import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ArticleLine from '@/shared/assets/icons/ArticleLine.svg';
import HomeLine from '@/shared/assets/icons/HomeLine.svg';
import ProfileLine from '@/shared/assets/icons/ProfileLine.svg';
import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button label="Открыть" size="m" />,
    items: [{ title: 'Первый' }, { title: 'Второй' }, { title: 'Третий' }],
};

export const WithTitle = Template.bind({});
WithTitle.args = {
    title: 'Заголовок',
    trigger: <Button label="Открыть" size="m" />,
    items: [{ title: 'Первый' }, { title: 'Второй' }, { title: 'Третий' }],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
    trigger: <Button label="Открыть" size="m" />,
    items: [
        { title: 'Первый', icon: { element: HomeLine } },
        { title: 'Второй', icon: { element: ProfileLine } },
        { title: 'Третий', icon: { element: ArticleLine } },
    ],
};
