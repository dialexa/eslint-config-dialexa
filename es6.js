// Exposes es6 rules

const merge = require('lodash.merge');

module.exports = merge({}, require('./base'), require('./rules/es6'), {
  'parser': 'babel-eslint',
  'ecmaFeatures': {
    'modules': true
  }
});
