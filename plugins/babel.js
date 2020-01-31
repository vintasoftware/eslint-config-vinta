module.exports = {
  extends: ['prettier/babel'],
  plugins: ['babel'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
  },
  rules: {
    // Disabled ESLint rules that are replaced by babel's ones
    camelcase: ['off'],
    'new-cap': ['off'],
    'no-invalid-this': ['off'],
    'no-unused-expressions': ['off'],
    'valid-typeof': ['off'],
    /* Errors */
    'babel/camelcase': ['error', { ignoreDestructuring: true }],
    'babel/new-cap': ['error', { capIsNew: false, newIsCap: true }],
    'babel/no-invalid-this': ['error'],
    'babel/no-unused-expressions': ['error'],
    'babel/valid-typeof': ['error'],
  },
};

/*
Controlled by Prettier:
  - babel/object-curly-spacing
  - babel/quotes
  - babel/semi
*/
