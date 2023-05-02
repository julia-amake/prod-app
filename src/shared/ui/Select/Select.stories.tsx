import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        name: 'test',
        options: [
            { value: 'option1', content: 'Option 1' },
            { value: 'option2', content: 'Option 2' },
        ],
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Select {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    label: 'Select',
    id: 'select',
};
