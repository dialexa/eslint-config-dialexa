// Exposes es6 and node rules

const merge = require('lodash.merge');

module.exports = merge({}, require('./base'), require('./rules/node'), require('./rules/es6'), {
  'parserOptions': {
    'ecmaVersion': 2017
  }
});
