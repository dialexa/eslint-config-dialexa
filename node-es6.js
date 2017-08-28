// Exposes es6 and node rules

var merge = require('lodash.merge');

module.exports = merge({}, require('./base'), require('./rules/node'), require('./rules/es6'), {
  'parserOptions': {
    'ecmaVersion': 2017
  }
});
