import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        onSendComment: action('onSendComment'),
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        addCommentForm: {
            text: 'Some',
        },
    }),
];

export const Disabled = Template.bind({});
Disabled.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = { isLoading: true };
Loading.decorators = [StoreDecorator({})];
