module.exports = {
  rules: {
    /* Errors */
    'global-require': ['error'],
    'no-buffer-constructor': ['error'],
    'no-mixed-requires': ['error'],
    'no-new-require': ['error'],
    'no-path-concat': ['error'],
    /* Disabled */
    'callback-return': ['off'],
    'handle-callback-err': ['off'],
    'no-process-env': ['off'],
    'no-process-exit': ['off'],
    'no-restricted-modules': ['off'],
    'no-sync': ['off'],
  },
};
