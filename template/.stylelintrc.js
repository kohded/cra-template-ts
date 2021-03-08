module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-a11y/recommended',
    'stylelint-prettier/recommended',
  ],
  ignoreFiles: ['build/**', 'coverage/**'],
  plugins: [
    'stylelint-high-performance-animation',
    'stylelint-declaration-strict-value',
    'stylelint-no-unsupported-browser-features',
  ],
  rules: {
    'plugin/no-low-performance-animation-properties': true,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
    'scale-unlimited/declaration-strict-value': [['color']],
    'selector-max-id': 1,
  },
};
