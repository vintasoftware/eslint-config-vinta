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
  extends: ['plugin:prettier/recommended'].concat(rules),
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
};
