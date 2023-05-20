import { Project } from 'ts-morph';

const project = new Project();
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

function isAbsolutePath(value: string) {
    const layers = [
        'app',
        'pages',
        'layouts',
        'widgets',
        'features',
        'entities',
        'shared',
    ];

    return layers.some((layer) => value.startsWith(layer));
}

const files = project.getSourceFiles();

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        if (isAbsolutePath(value)) {
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.save();
