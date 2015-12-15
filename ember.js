// Exposes ember rules

var merge = require('lodash.merge');

module.exports = merge({}, require('./base'), require('./rules/es6'), require('./rules/ember.js'));
