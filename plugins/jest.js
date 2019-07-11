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
    'jest/valid-describe': ['error'],
    'jest/valid-expect-in-promise': ['error'],
    'jest/valid-expect': ['error'],
    /* Warnings */
    'jest/prefer-spy-on': ['warn'],
    'jest/prefer-strict-equal': ['warn'],
    'jest/prefer-to-be-null': ['warn'],
    'jest/prefer-to-be-undefined': ['warn'],
    'jest/prefer-to-contain': ['warn'],
    'jest/prefer-to-have-length': ['warn'],
    'jest/prefer-inline-snapshots': ['warn'],
    /* Disabled */
    'jest/no-alias-methods': ['off'],
    'jest/no-disabled-tests': ['off'],
    'jest/no-commented-out-tests': ['off'],
    'jest/no-hooks': ['off'],
    'jest/no-large-snapshots': ['off'], // TODO: Validate
    'jest/no-truthy-falsy': ['off'], // TODO: Validate
    'jest/prefer-expect-assertions': ['off'], // TODO: Validate
    'jest/require-tothrow-message': ['off'], // TODO: Validate
    'jest/prefer-todo': ['off'], // TODO: Validate
    'jest/prefer-called-with': ['off'], // TODO: Validate
  },
};
