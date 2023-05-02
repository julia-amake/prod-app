import webpack from 'webpack';

import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions)
    : webpack.Configuration {
    const { mode, paths, isDev } = options;

    return {
        // mode: 'production' - если уже публикуем, а мы пока разрабатываем, поэтому:
        mode,
        // стартовая точка приложения:
        entry: paths.entry,
        // куда и как будем делать сборку приложения:
        output: {
            // как будет называться файл сборки:
            filename: '[name].[contenthash].js',
            // куда сохранять сборку:
            path: paths.build,
            publicPath: '/',
            // подчищать сборку от лишних/старых файлов
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
