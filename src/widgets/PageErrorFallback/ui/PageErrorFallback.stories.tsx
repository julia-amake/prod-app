import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/consts/theme';

import PageErrorFallback from './PageErrorFallback';

export default {
    title: 'widgets/PageErrorFallback',
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
