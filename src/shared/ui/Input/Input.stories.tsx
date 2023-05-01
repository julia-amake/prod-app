import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Input {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    label: 'Input',
    placeholder: 'Placeholder',
};

export const PrimaryLabelOnly = Template.bind({});
PrimaryLabelOnly.args = {
    label: 'Input',
};

export const PrimaryPlaceholderOnly = Template.bind({});
PrimaryPlaceholderOnly.args = {
    placeholder: 'Placeholder',
};

export const PrimaryEmpty = Template.bind({});
