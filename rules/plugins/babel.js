/*
Controlled by Prettier:
  - babel/object-curly-spacing
  - babel/quotes
  - babel/semi
*/

module.exports = {
  extends: ['prettier/babel'],
  plugins: ['babel'],
  rules: {
    'babel/new-cap': ['error'],
    'babel/camelcase': ['error'],
    'babel/no-invalid-this': ['error'],
    'babel/no-unused-expressions': ['error'],
    'babel/valid-typeof': ['error'],
  },
};
