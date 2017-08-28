// see http://eslint.org/docs/rules/#ecmascript-6

module.exports = {
  'env': {
    'es6': true
  },
  'rules': {
    'arrow-parens': [1, 'always'],
    'arrow-spacing': [1, { before: true, after: true }],
    'constructor-super': 2,
    // 'generator-star-spacing': [1, 'after'], // https://github.com/eslint/eslint/issues/6274
    'no-class-assign': 1,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-this-before-super': 2,
    'no-var': 2,
    'object-shorthand': [1, 'always'],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-spread': 2,
    'prefer-reflect': 0,
    'prefer-template': 2,
    'require-yield': 2,
    'no-confusing-arrow': 2
  }
};
