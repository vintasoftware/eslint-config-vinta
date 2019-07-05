const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    /* Errors */
    'no-delete-var': ['error'],
    'no-label-var': ['error'],
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'no-shadow': ['error', { hoist: 'never' }],
    'no-shadow-restricted-names': ['error'],
    'no-undef': ['error'],
    'no-undef-init': ['error'],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
    /* Disabled */
    'init-declarations': ['off'],
    'no-undefined': ['off'],
  },
};
