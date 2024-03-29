import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Text, TextMargin, TextSize } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        content:
            'Здесь тестовый текст для параграфов больших и маленьких, жирных и худых, c отступами и без',
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
    <div style={{ overflow: 'hidden' }}>
        <Text {...args} />
        <Text {...args} />
    </div>
);

export const SizeXS = Template.bind({});
SizeXS.args = {
    size: TextSize.XS,
};

export const SizeS = Template.bind({});
SizeS.args = {
    size: TextSize.S,
};

export const SizeM = Template.bind({});

export const SizeL = Template.bind({});
SizeL.args = {
    size: TextSize.L,
};

export const Bold = Template.bind({});
Bold.args = {
    isBold: true,
};

export const MarginNone = Template.bind({});
MarginNone.args = {
    margin: TextMargin.NONE,
};
