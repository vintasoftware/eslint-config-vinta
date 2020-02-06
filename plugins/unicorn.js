module.exports = {
  extends: ['prettier/unicorn'],
  plugins: ['unicorn'],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  rules: {
    /* Errors */
    'unicorn/error-message': ['error'],
    'unicorn/escape-case': ['error'],
    'unicorn/import-index': ['error'],
    'unicorn/new-for-builtins': ['error'],
    'unicorn/no-abusive-eslint-disable': ['error'],
    'unicorn/no-array-instanceof': ['error'],
    'unicorn/no-console-spaces': ['error'],
    'unicorn/no-for-loop': ['error'],
    'unicorn/no-hex-escape': ['error'],
    'unicorn/no-new-buffer': ['error'],
    'unicorn/no-process-exit': ['error'],
    'unicorn/no-unreadable-array-destructuring': ['error'],
    'unicorn/prefer-add-event-listener': ['error'],
    'unicorn/prefer-event-key': ['error'],
    'unicorn/prefer-exponentiation-operator': ['error'],
    'unicorn/prefer-flat-map': ['error'],
    'unicorn/prefer-includes': ['error'],
    'unicorn/prefer-modern-dom-apis': ['error'],
    'unicorn/prefer-negative-index': ['error'],
    'unicorn/prefer-node-append': ['error'],
    'unicorn/prefer-node-remove': ['error'],
    'unicorn/prefer-reflect-apply': ['error'],
    'unicorn/prefer-spread': ['error'],
    'unicorn/prefer-starts-ends-with': ['error'],
    'unicorn/prefer-string-slice': ['error'],
    'unicorn/prefer-text-content': ['error'],
    'unicorn/prefer-trim-start-end': ['error'],
    'unicorn/prefer-type-error': ['error'],
    'unicorn/regex-shorthand': ['error'],
    'unicorn/throw-new-error': ['error'],
    /* Disabled */
    'unicorn/catch-error-name': ['off'],
    'unicorn/consistent-function-scoping': ['off'],
    'unicorn/custom-error-definition': ['off'],
    'unicorn/expiring-todo-comments': ['off'],
    'unicorn/explicit-length-check': ['off'],
    'unicorn/filename-case': ['off'],
    'unicorn/no-fn-reference-in-iterator': ['off'],
    'unicorn/no-keyword-prefix': ['off'],
    'unicorn/no-unsafe-regex': ['off'],
    'unicorn/no-unused-properties': ['off'],
    'unicorn/no-zero-fractions': ['off'],
    'unicorn/prefer-dataset': ['off'],
    'unicorn/prefer-query-selector': ['off'],
    'unicorn/prevent-abbreviations': ['off'],
  },
};

/*
Controlled by Prettier:
- unicorn/no-nested-ternary
- unicorn/number-literal-case
*/
