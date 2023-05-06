import path from 'path';
import { Project } from 'ts-morph';

const project = new Project();
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

// получаем все ts/tsx файлы
const files = project.getSourceFiles();
// получаем путь до shared ui папки
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
// получаем shared ui папку
const sharedUiDirectory = project.getDirectory(uiPath);
// получаем массив вложенных в ui папок
const componentDirs = sharedUiDirectory?.getDirectories();

function isAbsolutePath(value: string) {
    const layers = ['app', 'pages', 'layouts', 'widgets', 'features', 'entities', 'shared'];

    return layers.some((layer) => value.startsWith(layer));
}

// проходимся по всем shared/ui папкам
componentDirs?.forEach((dir) => {
    // получаем путь к index.ts файлу
    const indexFilePath = `${dir.getPath()}/index.ts`;
    // получаем файл index.ts в папке
    const indexFile = dir.getSourceFile(indexFilePath);
    const moduleNamePath = dir.getBaseName();

    // если нет index-файла, создаем
    if (!indexFile) {
        const sourceCode = `export { ${moduleNamePath} } from './${moduleNamePath}';\n`;
        const file = dir.createSourceFile(indexFilePath, sourceCode, { overwrite: true });

        file.save();
    }
});

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');

        const segments = valueWithoutAlias.split('/');
        const isShared = segments?.[0] === 'shared';
        const isUiSlice = segments?.[1] === 'ui';

        if (isAbsolutePath(valueWithoutAlias) && isShared && isUiSlice) {
            const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
            importDeclaration.setModuleSpecifier(`@/${result}`);
        }
    });
});

project.save();
