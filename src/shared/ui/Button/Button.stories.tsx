import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Button, { ButtonShape, ButtonSize, ButtonTheme } from './Button';

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
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.ROUND,
    size: ButtonSize.S,
};

export const PrimaryRoundedM = Template.bind({});
PrimaryRoundedM.args = {
    label: 'Button',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.ROUND,
    size: ButtonSize.M,
};

export const PrimaryRoundedL = Template.bind({});
PrimaryRoundedL.args = {
    label: 'Button',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.ROUND,
    size: ButtonSize.L,
};

export const PrimarySquaredS = Template.bind({});
PrimarySquaredS.args = {
    label: 'Button',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.S,
};

export const PrimarySquaredM = Template.bind({});
PrimarySquaredM.args = {
    label: 'Button',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.M,
};

export const PrimarySquaredL = Template.bind({});
PrimarySquaredL.args = {
    label: 'Button',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.L,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    label: 'Button',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.ROUND,
    size: ButtonSize.M,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlinedRoundedS = Template.bind({});
OutlinedRoundedS.args = {
    label: 'Button',
    theme: ButtonTheme.OUTLINED,
    shape: ButtonShape.ROUND,
    size: ButtonSize.S,
};

export const OutlinedRoundedM = Template.bind({});
OutlinedRoundedM.args = {
    label: 'Button',
    theme: ButtonTheme.OUTLINED,
    shape: ButtonShape.ROUND,
    size: ButtonSize.M,
};

export const OutlinedRoundedL = Template.bind({});
OutlinedRoundedL.args = {
    label: 'Button',
    theme: ButtonTheme.OUTLINED,
    shape: ButtonShape.ROUND,
    size: ButtonSize.L,
};

export const OutlinedSquaredS = Template.bind({});
OutlinedSquaredS.args = {
    label: 'Button',
    theme: ButtonTheme.OUTLINED,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.S,
};

export const OutlinedSquaredM = Template.bind({});
OutlinedSquaredM.args = {
    label: 'Button',
    theme: ButtonTheme.OUTLINED,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.M,
};

export const OutlinedSquaredL = Template.bind({});
OutlinedSquaredL.args = {
    label: 'Button',
    theme: ButtonTheme.OUTLINED,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.L,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    label: 'Button',
    theme: ButtonTheme.OUTLINED,
    shape: ButtonShape.ROUND,
    size: ButtonSize.M,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearRoundedS = Template.bind({});
ClearRoundedS.args = {
    label: 'Button',
    theme: ButtonTheme.CLEAR,
    shape: ButtonShape.ROUND,
    size: ButtonSize.S,
};

export const ClearRoundedM = Template.bind({});
ClearRoundedM.args = {
    label: 'Button',
    theme: ButtonTheme.CLEAR,
    shape: ButtonShape.ROUND,
    size: ButtonSize.M,
};

export const ClearRoundedL = Template.bind({});
ClearRoundedL.args = {
    label: 'Button',
    theme: ButtonTheme.CLEAR,
    shape: ButtonShape.ROUND,
    size: ButtonSize.L,
};

export const ClearSquaredS = Template.bind({});
ClearSquaredS.args = {
    label: 'Button',
    theme: ButtonTheme.CLEAR,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.S,
};

export const ClearSquaredM = Template.bind({});
ClearSquaredM.args = {
    label: 'Button',
    theme: ButtonTheme.CLEAR,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.M,
};

export const ClearSquaredL = Template.bind({});
ClearSquaredL.args = {
    label: 'Button',
    theme: ButtonTheme.CLEAR,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.L,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    label: 'Button',
    theme: ButtonTheme.CLEAR,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.L,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Button',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.ROUND,
    size: ButtonSize.M,
    disabled: true,
};
