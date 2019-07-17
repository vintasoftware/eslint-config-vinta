module.exports = {
  plugins: ['promise'],
  rules: {
    /* Errors */
    'promise/no-return-wrap': ['error'],
    'promise/param-names': ['error'],
    'promise/always-return': ['error'],
    'promise/no-native': ['error'],
    'promise/no-nesting': ['error'],
    'promise/no-new-statics': ['error'],
    'promise/no-return-in-finally': ['error'],
    'promise/valid-params': ['error'],
    /* Warnings */
    'promise/no-promise-in-callback': ['warn'],
    'promise/no-callback-in-promise': ['warn'],
    /* Disabled */
    'promise/catch-or-return': ['off'],
    'promise/avoid-new': ['off'],
    'promise/prefer-await-to-then': ['off'],
    'promise/prefer-await-to-callbacks': ['off'],
  },
};
