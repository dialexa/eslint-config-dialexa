// Exposes es6 rules

var merge = require('lodash.merge');

module.exports = merge({}, require('./base'), require('./rules/es6'));