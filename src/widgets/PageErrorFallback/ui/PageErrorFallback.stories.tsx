import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import PageErrorFallback from './PageErrorFallback';

export default {
    title: 'widget/PageErrorFallback',
    component: PageErrorFallback,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
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
