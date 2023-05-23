import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Heading } from './Heading';

export default {
    title: 'shared/Heading',
    component: Heading,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        content: 'Заголовок',
    },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Heading {...args} />
);

export const SizeS = Template.bind({});
SizeS.args = {
    size: 's',
};

export const SizeM = Template.bind({});
SizeM.args = {
    size: 'm',
};

export const SizeMCentered = Template.bind({});
SizeMCentered.args = {
    size: 'm',
    position: 'center',
};
