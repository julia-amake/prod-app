import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Page } from './Page';

export default {
    title: 'widgets/Page',
    component: Page,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
    decorators: [StoreDecorator({}), RouterDecorator()],
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = () => <Page>Content</Page>;

export const Normal = Template.bind({});
Normal.args = {};
