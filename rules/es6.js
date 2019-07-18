module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    /* Errors */
    'constructor-super': ['error'],
    'no-class-assign': ['error'],
    'no-const-assign': ['error'],
    'no-dupe-class-members': ['error'],
    'no-new-symbol': ['error'],
    'no-this-before-super': ['error'],
    'no-useless-computed-key': ['error'],
    'no-useless-constructor': ['error'],
    'no-useless-rename': ['error'],
    'no-var': ['error'],
    'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],
    'prefer-const': ['error'],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: true, object: true },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'prefer-template': ['error'],
    'require-yield': ['error'],
    'symbol-description': ['error'],
    /* Disabled */
    'no-duplicate-imports': ['off'],
    'no-restricted-imports': ['off'],
    'prefer-numeric-literals': ['off'],
    'sort-imports': ['off'],
  },
};

/*
Controlled by Prettier:
  - arrow-body-style
  - arrow-parens
  - arrow-spacing
  - generator-star-spacing
  - no-confusing-arrow
  - prefer-arrow-callback
  - rest-spread-spacing
  - template-curly-spacing
  - yield-star-spacing
*/
