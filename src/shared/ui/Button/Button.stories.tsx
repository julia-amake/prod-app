import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { ButtonShape, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

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
    children: 'Button',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.ROUND,
    size: ButtonSize.S,
};

export const PrimaryRoundedSIcon = Template.bind({});
PrimaryRoundedSIcon.args = {
    children: '$',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.ROUND,
    size: ButtonSize.S,
    iconOnly: true,
};

export const PrimaryRoundedM = Template.bind({});
PrimaryRoundedM.args = {
    children: 'Button',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.ROUND,
    size: ButtonSize.M,
};

export const PrimaryRoundedMIcon = Template.bind({});
PrimaryRoundedMIcon.args = {
    children: '$',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.ROUND,
    size: ButtonSize.M,
    iconOnly: true,
};

export const PrimaryRoundedL = Template.bind({});
PrimaryRoundedL.args = {
    children: 'Button',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.ROUND,
    size: ButtonSize.L,
};

export const PrimaryRoundedLIcon = Template.bind({});
PrimaryRoundedLIcon.args = {
    children: '$',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.ROUND,
    size: ButtonSize.L,
    iconOnly: true,
};

export const PrimarySquaredS = Template.bind({});
PrimarySquaredS.args = {
    children: 'Button',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.S,
};

export const PrimarySquaredSIcon = Template.bind({});
PrimarySquaredSIcon.args = {
    children: '$',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.S,
    iconOnly: true,
};

export const PrimarySquaredM = Template.bind({});
PrimarySquaredM.args = {
    children: 'Button',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.M,
};

export const PrimarySquaredMIcon = Template.bind({});
PrimarySquaredMIcon.args = {
    children: '$',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.M,
    iconOnly: true,
};

export const PrimarySquaredL = Template.bind({});
PrimarySquaredL.args = {
    children: 'Button',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.L,
};

export const PrimarySquaredLIcon = Template.bind({});
PrimarySquaredLIcon.args = {
    children: '$',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.L,
    iconOnly: true,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Button',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.ROUND,
    size: ButtonSize.M,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDarkIcon = Template.bind({});
PrimaryDarkIcon.args = {
    children: '$',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.ROUND,
    size: ButtonSize.M,
    iconOnly: true,
};
PrimaryDarkIcon.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlinedRoundedS = Template.bind({});
OutlinedRoundedS.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINED,
    shape: ButtonShape.ROUND,
    size: ButtonSize.S,
};

export const OutlinedRoundedSIcon = Template.bind({});
OutlinedRoundedSIcon.args = {
    children: '$',
    theme: ButtonTheme.OUTLINED,
    shape: ButtonShape.ROUND,
    size: ButtonSize.S,
    iconOnly: true,
};

export const OutlinedRoundedM = Template.bind({});
OutlinedRoundedM.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINED,
    shape: ButtonShape.ROUND,
    size: ButtonSize.M,
};

export const OutlinedRoundedMIcon = Template.bind({});
OutlinedRoundedMIcon.args = {
    children: '$',
    theme: ButtonTheme.OUTLINED,
    shape: ButtonShape.ROUND,
    size: ButtonSize.M,
    iconOnly: true,
};

export const OutlinedRoundedL = Template.bind({});
OutlinedRoundedL.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINED,
    shape: ButtonShape.ROUND,
    size: ButtonSize.L,
};

export const OutlinedRoundedLIcon = Template.bind({});
OutlinedRoundedLIcon.args = {
    children: '$',
    theme: ButtonTheme.OUTLINED,
    shape: ButtonShape.ROUND,
    size: ButtonSize.L,
    iconOnly: true,
};

export const OutlinedSquaredS = Template.bind({});
OutlinedSquaredS.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINED,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.S,
};

export const OutlinedSquaredSIcon = Template.bind({});
OutlinedSquaredSIcon.args = {
    children: '$',
    theme: ButtonTheme.OUTLINED,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.S,
    iconOnly: true,
};

export const OutlinedSquaredM = Template.bind({});
OutlinedSquaredM.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINED,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.M,
};

export const OutlinedSquaredMIcon = Template.bind({});
OutlinedSquaredMIcon.args = {
    children: '$',
    theme: ButtonTheme.OUTLINED,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.M,
    iconOnly: true,
};

export const OutlinedSquaredL = Template.bind({});
OutlinedSquaredL.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINED,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.L,
};

export const OutlinedSquaredLicon = Template.bind({});
OutlinedSquaredLicon.args = {
    children: '$',
    theme: ButtonTheme.OUTLINED,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.L,
    iconOnly: true,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINED,
    shape: ButtonShape.ROUND,
    size: ButtonSize.M,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearRoundedS = Template.bind({});
ClearRoundedS.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
    shape: ButtonShape.ROUND,
    size: ButtonSize.S,
};

export const ClearRoundedM = Template.bind({});
ClearRoundedM.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
    shape: ButtonShape.ROUND,
    size: ButtonSize.M,
};

export const ClearRoundedL = Template.bind({});
ClearRoundedL.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
    shape: ButtonShape.ROUND,
    size: ButtonSize.L,
};

export const ClearSquaredS = Template.bind({});
ClearSquaredS.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.S,
};

export const ClearSquaredM = Template.bind({});
ClearSquaredM.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.M,
};

export const ClearSquaredL = Template.bind({});
ClearSquaredL.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.L,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
    shape: ButtonShape.SQUARE,
    size: ButtonSize.L,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Button',
    theme: ButtonTheme.PRIMARY,
    shape: ButtonShape.ROUND,
    size: ButtonSize.M,
    disabled: true,
};
