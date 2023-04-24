import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        buildLocales: '',
        locales: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve!.modules = [
        path.resolve(paths.src),
        'node_modules',
    ];
    config.resolve!.extensions!.push('.ts', '.tsx');
    config.resolve!.alias = { '@': paths.src };
    // @ts-ignore
    config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.svg$/i,
            };
        }
        return rule;
    });
    config.module!.rules.push(buildSvgLoader());
    config.module!.rules.push(buildCssLoader(true));
    config.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://test.api'),
        __PROJECT__: JSON.stringify('storybook'),
    }));
    return config;
};
