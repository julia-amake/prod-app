module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
        'plugin:storybook/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks', 'amake-plugin', 'unused-imports'],
    rules: {
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', 'tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
        'react/require-default-props': 'off',
        'no-shadow': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-no-useless-fragment': 'warn',
        'react/jsx-max-props-per-line': ['error', { maximum: 3, when: 'multiline' }],
        'react/function-component-definition': 'off',
        'react/no-unstable-nested-components': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/prop-types': 'off',
        'import/extensions': 'off',
        'no-param-reassign': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'max-len': [
            'error',
            {
                ignoreComments: true,
                ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
                code: 130,
            },
        ],
        'no-console': 'warn',
        'no-undef': 'off',
        'i18next/no-literal-string': [
            2,
            {
                markupOnly: true,
                ignoreComponent: ['ButtonThrow'],
                onlyAttribute: [''],
            },
        ],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-autofocus': 'warn',
        'amake-plugin/path-checker': ['error', { alias: '@' }],
        'amake-plugin/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: ['**/*.test.*', '**/*.stories.*', '**/StoreDecorator.tsx'],
            },
        ],
        'amake-plugin/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
        'unused-imports/no-unused-imports': 'error',
        'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
        'import/order': [
            'error',
            {
                pathGroups: [
                    {
                        pattern: '@/shared/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@/entities/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@/features/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@/widgets/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@/pages/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@/app/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '../+**',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: './**.module.*',
                        group: 'internal',
                        position: 'after',
                    },
                ],
                'newlines-between': 'never',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: false,
                },
            },
        ],
        'import/no-cycle': 'warn',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
        React: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}', '**/src/**/*.stories.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
