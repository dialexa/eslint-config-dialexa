// see http://eslint.org/docs/rules/#variables

module.exports = {
  'rules': {
    'init-declarations': 0,
    'no-catch-shadow': 0,
    'no-delete-var': 2,
    'no-label-var': 0,
    'no-shadow-restricted-names': 2,
    'no-shadow': 2,
    'no-undef-init': 0,
    'no-undef': 2,
    'no-undefined': 0,
    'no-unused-vars': [2, { 'vars': 'local', 'args': 'after-used' }],
    'no-use-before-define': 2
  }
};
