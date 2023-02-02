import {BuildOptions} from './types/config';
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    const {port} = options;

    return {
        port: port,
        open: true,
        // historyApiFallback чтобы пути в SPA при обновлении страницы работали, а не показывалась 404 страница
        historyApiFallback: true
    };
}
