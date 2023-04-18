import { PluginItem } from '@babel/core';

const babelRemovePropsPlugin = (): PluginItem => ({
    visitor: {
        Program(path, state) {
            const forbidden = state.opts.props || [];

            path.traverse({
                JSXIdentifier(current) {
                    const nodeName = current.node.name;
                    if (forbidden.includes(nodeName)) {
                        current.parentPath.remove();
                    }
                },
            });
        },
    },
});

export default babelRemovePropsPlugin;
