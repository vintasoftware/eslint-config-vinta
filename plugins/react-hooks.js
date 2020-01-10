module.exports = {
  plugins: ['react-hooks'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    /* Errors */
    'react-hooks/rules-of-hooks': ['error'],
    /* Warnings */
    'react-hooks/exhaustive-deps': ['warn'],
  },
};
