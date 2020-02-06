module.exports = {
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
  rules: {
    /* Errors */
    'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
    'jest/expect-expect': ['error'],
    'jest/lowercase-name': ['error', { ignore: ['describe'] }],
    'jest/no-expect-resolves': ['error'],
    'jest/no-empty-title': ['error'], // Deprecated after version 23
    'jest/no-export': ['error'],
    'jest/no-focused-tests': ['error'],
    'jest/no-identical-title': ['error'],
    'jest/no-if': ['error'],
    'jest/no-jasmine-globals': ['error'],
    'jest/no-jest-import': ['error'],
    'jest/no-mocks-import': ['error'],
    'jest/no-standalone-expect': ['error'],
    'jest/no-test-callback': ['error'],
    'jest/no-test-prefixes': ['error'],
    'jest/no-test-return-statement': ['error'],
    'jest/no-truthy-falsy': ['error'],
    'jest/no-try-expect': ['error'],
    'jest/require-top-level-describe': ['error'],
    'jest/valid-describe': ['error'],
    'jest/valid-expect-in-promise': ['error'],
    'jest/valid-expect': ['error'],
    'jest/valid-title': ['error'],
    /* Warnings */
    'jest/prefer-called-with': ['warn'],
    'jest/prefer-hooks-on-top': ['warn'],
    'jest/prefer-spy-on': ['warn'],
    'jest/prefer-strict-equal': ['warn'],
    'jest/prefer-to-be-null': ['warn'],
    'jest/prefer-to-be-undefined': ['warn'],
    'jest/prefer-to-contain': ['warn'],
    'jest/prefer-to-have-length': ['warn'],
    'jest/require-tothrow-message': ['warn'], // Deprecated after version 23
    /* Disabled */
    'jest/no-alias-methods': ['off'],
    'jest/no-commented-out-tests': ['off'],
    'jest/no-disabled-tests': ['off'],
    'jest/no-hooks': ['off'],
    'jest/no-large-snapshots': ['off'],
    'jest/prefer-expect-assertions': ['off'],
    'jest/prefer-inline-snapshots': ['off'],
    'jest/prefer-todo': ['off'],
    /* Removed - will enable after v23+ is installed */
    // 'jest/no-duplicate-hooks': ['error'],
    // 'jest/require-to-throw-message': ['warn'],
  },
};
