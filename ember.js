// Exposes ember rules

var merge = require('lodash.merge');

module.exports = merge({}, require('./base'), require('./rules/es6'), {
    'ecmaFeatures': {
        'modules': true
    },
    'parser': 'babel-eslint'
});
