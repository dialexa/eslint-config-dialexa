// Exposes react rules

const merge = require('lodash.merge');

module.exports = merge({}, require('./base'), require('./rules/es6'), require('./rules/react.js'));
