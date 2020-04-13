module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  ignoreFiles: ['build/**'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
      },
    ],
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['else', 'if'],
      },
    ],
  },
};
