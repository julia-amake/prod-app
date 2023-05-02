import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    const { port } = options;

    return {
        port,
        open: true,
        // historyApiFallback чтобы пути в SPA при обновлении страницы работали, а не показывалась 404 страница
        historyApiFallback: true,
        hot: true,
    };
}
