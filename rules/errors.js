module.exports = {
  rules: {
    /* Errors */
    'for-direction': ['error'],
    'getter-return': ['error'],
    'no-async-promise-executor': ['error'],
    'no-await-in-loop': ['error'],
    'no-compare-neg-zero': ['error'],
    'no-cond-assign': ['error'],
    'no-constant-condition': ['error'],
    'no-debugger': ['error'],
    'no-dupe-args': ['error'],
    'no-dupe-else-if': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': ['error'],
    'no-empty': ['error'],
    'no-empty-character-class': ['error'],
    'no-ex-assign': ['error'],
    'no-extra-boolean-cast': ['error'],
    'no-func-assign': ['error'],
    'no-import-assign': ['error'],
    'no-inner-declarations': ['error', 'both'],
    'no-invalid-regexp': ['error', { allowConstructorFlags: ['u', 'y'] }],
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipTemplates: true,
        skipRegExps: false,
        skipComments: false,
      },
    ],
    'no-misleading-character-class': ['error'],
    'no-obj-calls': ['error'],
    'no-prototype-builtins': ['error'],
    'no-regex-spaces': ['error'],
    'no-setter-return': ['error'],
    'no-sparse-arrays': ['error'],
    'no-unreachable': ['error'],
    'no-unsafe-finally': ['error'],
    'no-unsafe-negation': ['error'],
    'require-atomic-updates': ['error'],
    'use-isnan': ['error'],
    'valid-typeof': ['error'],
    /* Warnings */
    'no-console': ['warn'],
    /* Disabled */
    'no-control-regex': ['off'],
    'no-template-curly-in-string': ['off'],
  },
};

/*
Controlled by Prettier:
  - no-extra-parens
  - no-extra-semi
  - no-unexpected-multiline
*/
