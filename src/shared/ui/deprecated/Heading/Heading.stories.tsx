import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Heading, HeadingPosition, HeadingSize } from './Heading';

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
    size: HeadingSize.S,
};

export const SizeM = Template.bind({});
SizeM.args = {
    size: HeadingSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
    size: HeadingSize.L,
};

export const SizeXL = Template.bind({});
SizeXL.args = {
    size: HeadingSize.XL,
};

export const SizeMCentered = Template.bind({});
SizeMCentered.args = {
    size: HeadingSize.M,
    position: HeadingPosition.CENTER,
};
