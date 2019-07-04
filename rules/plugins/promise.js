module.exports = {
  plugins: ['promise'],
  rules: {
    /* Errors */
    'promise/catch-or-return': ['error'],
    'promise/no-return-wrap': ['error'],
    'promise/param-names': ['error'],
    'promise/always-return': ['error'],
    'promise/no-native': ['error'],
    'promise/no-nesting': ['error'],
    'promise/no-promise-in-callback': ['error'],
    'promise/no-new-statics': ['error'],
    'promise/no-return-in-finally': ['error'],
    'promise/valid-params': ['error'],
    /* Disabled */
    'promise/no-callback-in-promise': ['off'],
    'promise/avoid-new': ['off'],
    'promise/prefer-await-to-then': ['off'],
    'promise/prefer-await-to-callbacks': ['off'],
  },
};
