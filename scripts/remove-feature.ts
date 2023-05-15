import { Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2]; // example: isArticleRatingEnabled
const featureState = process.argv[3]; // // example: on | off

if (!removedFeatureName) {
    throw new Error('Укажите название feature-флага');
}

if (!featureState) {
    throw new Error('Укажите состояние фичи (on или off)');
}

if (featureState !== 'on' && featureState !== 'off') {
    throw new Error('Состояние фичи должно быть on или off');
}

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFeatures(node: Node) {
    let isToggle = false;
    // проходимся по всем детям ноды
    node.forEachChild((child) => {
        // проверяем, что тип ребенка - это js-идентификатор
        // c названием toggleFeatures
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === 'toggleFeatures'
        ) {
            isToggle = true;
        }
    });

    return isToggle;
}

files.forEach((sourceFile) => {
    // обходим все ноды, включая потомков
    sourceFile.forEachDescendant((node) => {
        // находим ноду с типом CallExpression
        // и проверяем, что это в ней есть ребенок toggleFeatures
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFeatures(node)) {
            // выбираем объект с опциями name, on, off
            const objOptions = node.getFirstDescendantByKind(
                SyntaxKind.ObjectLiteralExpression,
            );

            if (!objOptions) return;

            // находим эти свойства:
            // name: 'isCounterEnabled'
            const featureNameProperty = objOptions.getProperty('name');

            // on: () => <Component />
            const onFuncProperty = objOptions.getProperty('on');
            const offFuncProperty = objOptions.getProperty('off');

            // Получаем название фичи и обрезаем кавычки
            const featureName = featureNameProperty
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1);

            // Получаем сами функции () => <Component />
            const onFunction = onFuncProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );
            const offFunction = offFuncProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );

            if (featureName !== removedFeatureName) return;

            // заменяем всю функцию toggleFeatures на компонент из on-свойства
            if (featureState === 'on') {
                node.replaceWithText(onFunction?.getBody().getText() ?? '');
            }

            // заменяем всю функцию toggleFeatures на компонент из off-свойства
            if (featureState === 'off') {
                node.replaceWithText(offFunction?.getBody().getText() ?? '');
            }
        }
    });
});

project.save();
