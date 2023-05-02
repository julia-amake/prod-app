import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
    <Flex {...args}>
        <>
            <div>one</div>
            <div>two</div>
            <div>three</div>
        </>
    </Flex>
);

export const Row = Template.bind({});
Row.args = {
    direction: 'row',
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    direction: 'row',
    gap: '8',
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    direction: 'row',
    gap: '16',
};

export const RowGap24 = Template.bind({});
RowGap24.args = {
    direction: 'row',
    gap: '24',
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    direction: 'row',
    gap: '32',
};

export const RowGap40 = Template.bind({});
RowGap40.args = {
    direction: 'row',
    gap: '40',
};

export const RowJustifyCenter = Template.bind({});
RowJustifyCenter.args = {
    direction: 'row',
    justify: 'center',
};

export const RowJustifyBetween = Template.bind({});
RowJustifyBetween.args = {
    direction: 'row',
    justify: 'between',
};

export const Col = Template.bind({});
Col.args = {
    direction: 'col',
};

export const ColGap16 = Template.bind({});
ColGap16.args = {
    direction: 'col',
    gap: '16',
};
