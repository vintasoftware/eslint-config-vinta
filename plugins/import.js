module.exports = {
  plugins: ['import'],
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.mjs', '.json'],
  },
  rules: {
    /* Errors */
    'import/export': ['error'],
    'import/exports-last': ['error'], // TODO: Validate
    'import/extensions': ['error', 'ignorePackages', { js: 'never', jsx: 'never' }],
    'import/first': ['error'],
    'import/named': ['error'],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-absolute-path': ['error'],
    'import/no-amd': ['error'],
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    'import/no-cycle': ['error'],
    'import/no-duplicates': ['error'],
    'import/no-dynamic-require': ['error'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          // TODO: Validate
          '**/tests/**',
          '**/test/**',
          '**/specs/**',
          '**/spec/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          '**/webpack.*',
          '**/jest.*',
        ],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/no-mutable-exports': ['error'],
    'import/no-named-as-default-member': ['error'],
    'import/no-named-as-default': ['error'],
    'import/no-named-default': ['error'],
    'import/no-self-import': ['error'],
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/no-unused-modules': ['error', { unusedExports: true, missingExports: true }],
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    'import/no-webpack-loader-syntax': ['error'],
    'import/order': [
      'error',
      {
        // TODO: Validate
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    /* Warnings */
    'import/no-deprecated': ['warn'],
    /* Disabled */
    'import/default': ['off'],
    'import/dynamic-import-chunkname': ['off'],
    'import/group-exports': ['off'],
    'import/max-dependencies': ['off'],
    'import/namespace': ['off'],
    'import/no-commonjs': ['off'],
    'import/no-default-export': ['off'],
    'import/no-internal-modules': ['off'],
    'import/no-named-export': ['off'],
    'import/no-namespace': ['off'],
    'import/no-nodejs-modules': ['off'],
    'import/no-relative-parent-imports': ['off'],
    'import/no-restricted-paths': ['off'],
    'import/no-unassigned-import': ['off'],
    'import/prefer-default-export': ['off'],
    'import/unambiguous': ['off'],
  },
};
