// Extends individual components

module.exports = {
  'extends': [
    'eslint-config-dialexa/rules/best-practices',
    'eslint-config-dialexa/rules/errors',
    'eslint-config-dialexa/rules/node',
    'eslint-config-dialexa/rules/style',
    'eslint-config-dialexa/rules/variables',
    'eslint-config-dialexa/rules/es6'
  ],
  'env': {
    'node': true,
    'mocha': true
  }
};
