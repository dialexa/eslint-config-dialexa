// Exposes es6 rules

var merge = require('lodash.merge');

module.exports = merge({}, require('./base'), require('./rules/es6'), {
  'parser': 'babel-eslint',
  'ecmaFeatures': {
    'modules': true
  }
});
