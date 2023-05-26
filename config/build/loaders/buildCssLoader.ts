import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildPaths } from '../types/config';

export function buildCssLoader(isDev: boolean, paths: BuildPaths) {
    return {
        test: /\.(sc|sa|c)ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /.module./,
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'postcss-loader',
            // Compiles Sass to CSS
            {
                loader: 'sass-loader',
                options: {
                    additionalData: '@import "@/app/styles/variables/global.scss";'
                }
            },
        ],
    };
}
