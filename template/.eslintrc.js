module.exports = {
  env: {
    'shared-node-browser': true,
    browser: true,
    commonjs: true,
    es2020: true,
    jest: true,
    node: true,
    serviceworker: true,
    worker: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:compat/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['build', 'coverage', 'serviceWorkerRegistration.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    'import/prefer-default-export': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': [
      'error',
      // Immer - https://github.com/immerjs/immer/issues/189#issuecomment-703083451
      { props: true, ignorePropertyModificationsForRegex: ['^draft'] },
    ],
    'no-underscore-dangle': ['error', { allow: ['__WB_MANIFEST'] }],
  },
};
