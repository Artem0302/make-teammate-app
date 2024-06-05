module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    '@feature-sliced',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-unstable-nested-components': 'off',
    'react-refresh/only-export-components': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-children-prop': 'off',
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'react-native/no-inline-styles': 'off',
    'comma-dangle': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'import/no-internal-modules': [
      'error',
      {
        allow: [
          '**/react-native-screens/**',
          '**/assets/**',
          '**/zustand/**',
          '**/date-fns/*',
          '**/crypto-js/**',
          '**/@react-native-firebase/**',
          '**/firebase/**',
        ],
      },
    ],
    'no-debugger': 'warn',
    curly: 'warn',
    semi: 'off',
    'react/display-name': 'off',
    // new from Andry,
    'no-console': 'warn',
    'react/jsx-newline': ['warn', {prevent: true, allowMultilines: true}],
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'block',
          'block-like',
          'multiline-const',
          'multiline-let',
          'case',
          'expression',
          'return',
        ],
      },
      {
        blankLine: 'always',
        prev: [
          'block',
          'block-like',
          'multiline-const',
          'multiline-let',
          'case',
          'expression',
          'return',
        ],
        next: '*',
      },
      {
        blankLine: 'never',
        prev: 'case',
        next: ['default', 'case'],
      },
    ],
    '@typescript-eslint/padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: ['interface', 'type'],
      },
      {
        blankLine: 'always',
        prev: ['interface', 'type'],
        next: '*',
      },
    ],
  },
};
