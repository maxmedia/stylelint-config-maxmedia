module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'at-rule-empty-line-before': 'always',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true
  }
};