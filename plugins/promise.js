module.exports = {
  plugins: ['promise'],
  rules: {
    /* Errors */
    'promise/always-return': ['error'],
    'promise/no-nesting': ['error'],
    'promise/no-new-statics': ['error'],
    'promise/no-return-in-finally': ['error'],
    'promise/no-return-wrap': ['error'],
    'promise/param-names': ['error'],
    'promise/valid-params': ['error'],
    /* Warnings */
    'promise/no-callback-in-promise': ['warn'],
    'promise/no-promise-in-callback': ['warn'],
    /* Disabled */
    'promise/avoid-new': ['off'],
    'promise/catch-or-return': ['off'],
    'promise/no-native': ['off'],
    'promise/prefer-await-to-callbacks': ['off'],
    'promise/prefer-await-to-then': ['off'],
  },
};
