import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Image } from './Image';

export default {
    title: 'shared/Image',
    component: Image,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/727/f54/666/727f54666075840f2c6a6d521f39e8f1.jpeg',
    },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => (
    <Image {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
