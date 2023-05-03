import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { RatingCard } from './RatingCard';

export default {
    title: 'entities/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => (
    <RatingCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Selected = Template.bind({});
Selected.args = {
    rate: 4,
};

export const WithFeedback = Template.bind({});
WithFeedback.args = {
    hasFeedback: true,
};