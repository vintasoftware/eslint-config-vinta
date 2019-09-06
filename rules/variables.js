const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    /* Errors */
    'no-delete-var': ['error'],
    'no-label-var': ['error'],
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'no-shadow-restricted-names': ['error'],
    'no-undef': ['error'],
    'no-undef-init': ['error'],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    /* Disabled */
    'init-declarations': ['off'],
    'no-shadow': ['off'],
    'no-undefined': ['off'],
    'no-use-before-define': ['off'],
  },
};
