module.exports = {
  configBasedir: 'node_modules',
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'at-rule-empty-line-before': null,
    // 'at-rule-empty-line-before': [ 'always', { except: 'after-same-name' } ],

    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'no-descending-specificity': [ true, { severity: 'warning' } ],
    'color-hex-case': null,

    'selector-list-comma-newline-after': null,
    'no-empty-source': [ true, { severity: 'warning' } ]
  }
};
