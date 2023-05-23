import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryRoundedS = Template.bind({});
PrimaryRoundedS.args = {
    label: 'Button',
    variant: 'primary',
    shape: 'rounded',
    size: 's',
};

export const PrimaryRoundedM = Template.bind({});
PrimaryRoundedM.args = {
    label: 'Button',
    variant: 'primary',
    shape: 'rounded',
    size: 'm',
};

export const PrimaryRoundedL = Template.bind({});
PrimaryRoundedL.args = {
    label: 'Button',
    variant: 'primary',
    shape: 'rounded',
    size: 'l',
};

export const PrimarySquaredS = Template.bind({});
PrimarySquaredS.args = {
    label: 'Button',
    variant: 'primary',
    shape: 'square',
    size: 's',
};

export const PrimarySquaredM = Template.bind({});
PrimarySquaredM.args = {
    label: 'Button',
    variant: 'primary',
    shape: 'square',
    size: 'm',
};

export const PrimarySquaredL = Template.bind({});
PrimarySquaredL.args = {
    label: 'Button',
    variant: 'primary',
    shape: 'square',
    size: 'l',
};

export const OutlinedRoundedS = Template.bind({});
OutlinedRoundedS.args = {
    label: 'Button',
    variant: 'outlined',
    shape: 'rounded',
    size: 's',
};

export const OutlinedRoundedM = Template.bind({});
OutlinedRoundedM.args = {
    label: 'Button',
    variant: 'outlined',
    shape: 'rounded',
    size: 'm',
};

export const OutlinedRoundedL = Template.bind({});
OutlinedRoundedL.args = {
    label: 'Button',
    variant: 'outlined',
    shape: 'rounded',
    size: 'l',
};

export const OutlinedSquaredS = Template.bind({});
OutlinedSquaredS.args = {
    label: 'Button',
    variant: 'outlined',
    shape: 'square',
    size: 's',
};

export const OutlinedSquaredM = Template.bind({});
OutlinedSquaredM.args = {
    label: 'Button',
    variant: 'outlined',
    shape: 'square',
    size: 'm',
};

export const OutlinedSquaredL = Template.bind({});
OutlinedSquaredL.args = {
    label: 'Button',
    variant: 'outlined',
    shape: 'square',
    size: 'l',
};

export const ClearRoundedS = Template.bind({});
ClearRoundedS.args = {
    label: 'Button',
    variant: 'clear',
    shape: 'rounded',
    size: 's',
};

export const ClearRoundedM = Template.bind({});
ClearRoundedM.args = {
    label: 'Button',
    variant: 'clear',
    shape: 'rounded',
    size: 'm',
};

export const ClearRoundedL = Template.bind({});
ClearRoundedL.args = {
    label: 'Button',
    variant: 'clear',
    shape: 'rounded',
    size: 'l',
};

export const ClearSquaredS = Template.bind({});
ClearSquaredS.args = {
    label: 'Button',
    variant: 'clear',
    shape: 'square',
    size: 's',
};

export const ClearSquaredM = Template.bind({});
ClearSquaredM.args = {
    label: 'Button',
    variant: 'clear',
    shape: 'square',
    size: 'm',
};

export const ClearSquaredL = Template.bind({});
ClearSquaredL.args = {
    label: 'Button',
    variant: 'clear',
    shape: 'square',
    size: 'l',
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Button',
    variant: 'primary',
    shape: 'rounded',
    size: 'm',
    disabled: true,
};
