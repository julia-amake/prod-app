import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AppImage } from './AppImage';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        src: 'https://habrastorage.org/webt/wt/uv/mp/wtuvmpgmivrxsgeea6eks1eobfe.png',
    },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => (
    <AppImage
        {...args}
        style={{ width: '100%', height: 300, objectFit: 'cover' }}
    />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Broken = Template.bind({});
Broken.args = {
    src: '',
    errorFallback: <img src="/img/NoImageH.svg" alt="" />,
};
