module.exports = {
  plugins: ['react-hooks'],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  rules: {
    /* Errors */
    'react-hooks/rules-of-hooks': ['error'],
    /* Disabled */
    'react-hooks/exhaustive-deps': ['off'],
  },
};
