import webpack from 'webpack';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = buildSvgLoader();
    const { isDev } = options;

    const codeBabelLoader = buildBabelLoader({ ...options, isTSX: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTSX: true });

    const scssLoader = buildCssLoader(isDev);

    const fontsLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    // Если бы не было TS-лоудера, нужно было бы добавить babel-loader
    // И когда в проекте уже есть babel-loader, то нужно настроить для TS именно его, тк сборка будет сильно быстрее
    // const tsLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    return [
        fileLoader,
        svgLoader,
        fontsLoader,
        // babelLoader,
        // tsLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        scssLoader,
    ];
}

// лоудеры для файлов, которые выходят за рамки js (ts, css, картинки и прочее – все что не js)
