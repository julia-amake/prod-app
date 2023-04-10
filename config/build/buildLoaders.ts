import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = buildSvgLoader();
    const { isDev } = options;

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

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
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        fileLoader,
        svgLoader,
        fontsLoader,
        babelLoader,
        tsLoader,
        scssLoader,
    ];
}

// лоудеры для файлов, которые выходят за рамки js (ts, css, картинки и прочее – все что не js)
