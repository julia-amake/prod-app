import {ResolveOptions} from 'webpack';

export function buildResolvers(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    };
}

//extensions – расширения файлов, у которых при импорте можно будет в пути не указывать расширение