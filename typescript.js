const rules = [
  './rules/best-practices',
  './rules/deprecated',
  './rules/errors',
  './rules/es6',
  './rules/node',
  './rules/styling',
  './rules/variables',
].map(require.resolve);

module.exports = {
  extends: rules,
  env: {
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};
