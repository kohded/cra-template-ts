module.exports = {
  '*.{css,html,js,jsx,json,less,md,scss,ts,tsx,yml}':
    'prettier --config ./template/.prettierrc.js --debug-check --ignore-path=template/.prettierignore -c',
  '*.{css,less,scss}': 'stylelint --config ./template/.stylelintrc.js',
  '*.{js,jsx,ts,tsx}': [
    () => 'eslint -c ./template/.eslintrc.js',
    // "cross-env CI=true react-scripts test --bail --findRelatedTests --passWithNoTests",
  ],
};
