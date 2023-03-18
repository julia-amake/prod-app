import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Paragraph, ParagraphMargin, ParagraphSize } from './Paragraph';

export default {
    title: 'shared/Paragraph',
    component: Paragraph,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        content: 'Здесь тестовый текст для параграфов больших и маленьких, жирных и худых, c отступами и без',
    },
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
    <div style={{ overflow: 'hidden' }}>
        <Paragraph {...args} />
        <Paragraph {...args} />
    </div>
);

export const SizeXS = Template.bind({});
SizeXS.args = {
    size: ParagraphSize.XS,
};

export const SizeS = Template.bind({});
SizeS.args = {
    size: ParagraphSize.S,
};

export const SizeM = Template.bind({});

export const SizeL = Template.bind({});
SizeL.args = {
    size: ParagraphSize.L,
};

export const Bold = Template.bind({});
Bold.args = {
    isBold: true,
};

export const MarginNone = Template.bind({});
MarginNone.args = {
    margin: ParagraphMargin.NONE,
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
