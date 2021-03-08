module.exports = {
  '*.{js,jsx,ts,tsx}': [() => 'eslint -c ./template/.eslintrc.js'],
  '*.{css,less,scss}': 'stylelint --config ./template/.stylelintrc.js',
  '*.{css,html,js,jsx,json,less,md,scss,ts,tsx,yml}':
    'prettier --config ./template/.prettierrc.js --debug-check --ignore-path=template/.prettierignore -c',
};
