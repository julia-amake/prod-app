import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTSX?: boolean;
}

export const buildBabelLoader = (props: BuildBabelLoaderProps) => {
    const { isTSX, isDev } = props;
    const isProd = !isDev;

    return {
        test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env'],
                plugins: [
                    ['@babel/plugin-transform-typescript', {
                        ...isTSX ? { isTSX: true, allExtensions: true } : { isTSX: false },
                    }],
                    '@babel/plugin-transform-runtime',
                    isTSX && isProd && [
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
