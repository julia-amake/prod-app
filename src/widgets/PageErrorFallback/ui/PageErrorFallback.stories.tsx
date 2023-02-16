import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
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
export const Dark = Template.bind({});
Dark.args = {

};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
