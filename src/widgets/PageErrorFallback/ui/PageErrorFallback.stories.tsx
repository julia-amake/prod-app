import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import PageErrorFallback from './PageErrorFallback';

export default {
    title: 'widget/PageErrorFallback',
    component: PageErrorFallback,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof PageErrorFallback>;

const Template: ComponentStory<typeof PageErrorFallback> = (args) => (
    <PageErrorFallback {...args} />
);

export const Light = Template.bind({});
Light.args = {

};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {

};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
