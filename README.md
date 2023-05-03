# Блог с авторизацией

Pet проект ...в разработке 👩‍💻

----

## Демо

[https://amake-prod-app.netlify.app](https://amake-prod-app.netlify.app)

----

## Основной стек

- [TypeScript](https://www.typescriptlang.org) – строго типизированный язык программирования, расширяющий возможности JavaScript
- [React](https://react.dev) – JavaScript-библиотека для создания внешних пользовательских интерфейсов
- [Redux, Redux Toolkit, RTK Query](https://redux-toolkit.js.org) – JavaScript-библиотека для управления состоянием приложения, набор инструментов, облегчающих работу с ней и мощный инструмент для получения и кэширования данных

----

## Установка

Убедитесь, что у вас установленны node.js и npm.

Скопируйте проект к себе на компьютер:
```
git clone https://github.com/julia-amake/prod-app.git
```

Установите зависимости
```
npm install
```

## Начало работы

В проекте используется json-server для имитации бэкенда. Сервер запускается сразу с frontend-проектом в dev-режиме, запустить можно на webpack или vite.

Для запуска на webpack используйте команду:

```
npm run start:dev
```

Для запуска на vite используйте команду:

```
npm run start:dev:vite
```

----

## Скрипты

- `npm run start` – запуск frontend-проекта на webpack dev server
- `npm run start:vite` – запуск frontend-проекта на vite
- `npm run start:dev` – запуск frontend-проекта на webpack dev server + backend
- `npm run start:dev:vite` – запуск frontend-проекта на vite + backend
- `npm run start:dev:server` – запуск json-сервера
- `npm run build:prod` – сборка в prod режиме
- `npm run build:dev` – сборка в dev режиме (не минимизирован)
- `npm run lint:ts` – проверка ts файлов линтером
- `npm run lint:ts:fix` – исправление ts файлов линтером
- `npm run lint:scss` – проверка scss файлов style линтером
- `npm run lint:scss:fix` – исправление scss файлов style линтером
- `npm run test:unit` – запуск unit тестов с jest
- `npm run test:ui` – запуск скриншотных тестов с loki
- `npm run test:ui:ok` – подтверждение новых скриншотов
- `npm run test:ui:ci` – запуск скриншотных тестов в CI
- `npm run test:ui:report` – генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` – генерация json отчета для скриншотных тестов
- `npm run test:ui:html` – генерация HTML отчета для скриншотных тестов
- `npm run storybook` – запуск Storybook
- `npm run storybook:build` – сборка storybook билда
- `npm run prepare` – прекоммит хуки
- `npm run generate:slice` – скрипт для генерации FSD-слайсов

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature-Sliced Design (FSD)

Документация – [https://feature-sliced.design](https://feature-sliced.design)

----

## Работа с переводами

Для работы с переводами в проекте используется библиотека i18next.
Файлы с переводами хранятся в `public/locales`.

Документация – [https://react.i18next.com/](https://react.i18next.com/)

----

## Тесты

В проекте используются 4 вида тестов:
1) Unit-тесты на Jest – `npm run test:unit`
2) Тесты на компоненты с React Testing Library –`npm run test:unit`
3) Скриншотное тестирование с Loki – `npm run test:ui`
4) e2e тестирование с Cypress – `npm run test:e2e`

[Подробнее о тестах ⟶](/docs/tests.md)

----

## Линтинг

В проекте используется ESLint для проверки Typescript-кода и StyleLint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется кастомный ESLint plugin *[eslint-plugin-amake-plugin](https://www.npmjs.com/package/eslint-plugin-amake-plugin)*,
который содержит 3 правила:
1) path-checker – запрещает использовать абсолютные импорты в рамках одного модуля
2) layer-imports – проверяет корректность использования слоев с точки зрения FSD
   (например, widgets нельзя использовать в features и entities)
3) public-api-imports – разрешает импорт из других модулей только через public API. Имеет autofix.

##### Запуск линтеров
- `npm run lint:ts` _ проверка ts-файлов линтером
- `npm run lint:ts:fix` – исправление ts-файлов линтером
- `npm run lint:scss` _ проверка scss-файлов style-линтером
- `npm run lint:scss:fix` – исправление scss-файлов style-линтером

----
## Дизайн-система

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


----

## Конфигурация проекта

Для режима разработки проект содержит 2 конфига:
1. Webpack – ./config/build
2. Vite – vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config
- /config/babel – babel
- /config/build – конфигурация webpack
- /config/jest – конфигурация тестовой среды
- /config/storybook – конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

----

## CI pipeline и pre-commit хуки

Конфигурация Github Actions находится в `/.github/workflows`  
В CI прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в `/.husky`

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью Redux Toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

## Production-сборка проекта
````
npm run build:prod
````