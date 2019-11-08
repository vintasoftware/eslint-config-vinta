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
    'jest/no-empty-title': ['error'],
    'jest/no-focused-tests': ['error'],
    'jest/no-identical-title': ['error'],
    'jest/no-jasmine-globals': ['error'],
    'jest/no-jest-import': ['error'],
    'jest/no-mocks-import': ['error'],
    'jest/no-test-callback': ['error'],
    'jest/no-test-prefixes': ['error'],
    'jest/no-test-return-statement': ['error'],
    'jest/no-truthy-falsy': ['error'],
    'jest/valid-describe': ['error'],
    'jest/valid-expect-in-promise': ['error'],
    'jest/valid-expect': ['error'],
    /* Warnings */
    'jest/prefer-called-with': ['warn'],
    'jest/prefer-spy-on': ['warn'],
    'jest/prefer-strict-equal': ['warn'], // Should be 'off' for Jest versions below 23
    'jest/prefer-to-be-null': ['warn'],
    'jest/prefer-to-be-undefined': ['warn'],
    'jest/prefer-to-contain': ['warn'],
    'jest/prefer-to-have-length': ['warn'],
    'jest/require-tothrow-message': ['warn'],
    /* Disabled */
    'jest/no-alias-methods': ['off'],
    'jest/no-disabled-tests': ['off'],
    'jest/no-commented-out-tests': ['off'],
    'jest/no-hooks': ['off'],
    'jest/no-large-snapshots': ['off'],
    'jest/prefer-expect-assertions': ['off'],
    'jest/prefer-inline-snapshots': ['off'],
    'jest/prefer-todo': ['off'],
  },
};
