import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { PageSection } from './PageSection';

export default {
    title: 'shared/PageSection',
    component: PageSection,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof PageSection>;

const Template: ComponentStory<typeof PageSection> = (args) => (
    <PageSection {...args}>Контент</PageSection>
);

export const Normal = Template.bind({});
Normal.args = {};
