// Exposes ember rules

const merge = require('lodash.merge');

module.exports = merge({}, require('./base'), require('./rules/es6'), require('./rules/ember.js'));
