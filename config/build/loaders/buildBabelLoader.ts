import { BuildOptions } from '../types/config';
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

interface BuildBabelLoaderProps extends BuildOptions {
    isTSX?: boolean;
}

export const buildBabelLoader = (props: BuildBabelLoaderProps) => {
    const { isTSX, isDev } = props;

    return {
        test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
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
                    ['@babel/plugin-transform-typescript', {
                        ...isTSX ? { isTSX: true, allExtensions: true } : { isTSX: false },
                    }],
                    '@babel/plugin-transform-runtime',
                    isTSX && !isDev && [
                        babelRemovePropsPlugin,
                        {
                            props: ['data-testid'],
                        },
                    ],
                ].filter(Boolean),
            },
        },
    };
};
