// see http://eslint.org/docs/rules/#nodejs-and-commonjs

module.exports = {
  'env': {
    'node': true
  },
  'rules': {
    'callback-return': 0,
    'handle-callback-err': 0,
    'no-mixed-requires': [0, false],
    'no-new-require': 0,
    'no-path-concat': 1,
    'no-process-exit': 0,
    'no-restricted-modules': 0,
    'no-sync': 0,
    'require-await': 1
  }
};
