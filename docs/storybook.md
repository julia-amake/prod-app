# Дизайн-система

Для документирования дизайн-системы в проекте используется **[Storybook](/docs/storybook.md)**.

Для каждого компонента описываются story-кейсы. Запросы на сервер мокаются при помощи **storybook-addon-mock**.

Файл со story-кейсами создается рядом с компонентом с расширением **.stories.tsx**

Storybook запускается командой:
```
npm run storybook
```

Пример:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
   args: {
      children: 'Text',
   },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Clear = Template.bind({});
Clear.args = {
    theme: ButtonTheme.CLEAR,
};
```