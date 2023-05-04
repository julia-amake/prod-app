import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Preloader } from './Preloader';

export default {
    title: 'shared/Preloader',
    component: Preloader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {

    },
} as ComponentMeta<typeof Preloader>;

const Template: ComponentStory<typeof Preloader> = (args) => (
    <Preloader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {

};
