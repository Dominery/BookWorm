module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['alloy', 'alloy/typescript'],
  globals: {
    JSX: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      strict: true,
    },
    ecmaVersion: 2016,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    quotes: ['error', 'single'],
    semi: ['warn', 'never'],
    'no-unused-vars': 1,
    'linebreak-style': ['error', 'windows'],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
}
