module.exports = {
  '*.{css,html,js,jsx,json,md,scss,ts,tsx,yml}': ['npm run format'],
  '*.{css,scss}': ['npm run lint:stylelint'],
  '*.{js,jsx,ts,tsx}': ['npm run lint:eslint'],
};
