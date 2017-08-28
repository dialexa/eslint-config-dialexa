// Extends individual components
var merge = require('lodash.merge');

module.exports = merge({},
  require('./rules/best_practices'),
  require('./rules/errors'),
  require('./rules/node'),
  require('./rules/style'),
  require('./rules/variables'),
  {
    'env': {
      'mocha': true,
      'browser': true
    }
  });
