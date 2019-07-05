const rules = [
  './rules/best-practices',
  './rules/deprecated',
  './rules/errors',
  './rules/es6',
  './rules/node',
  './rules/styling',
  './rules/variables',
  './rules/plugins/babel',
  './rules/plugins/imports',
  './rules/plugins/jest',
  './rules/plugins/jsx-a11y',
  './rules/plugins/promise',
  './rules/plugins/react',
  './rules/plugins/sonar',
].map(require.resolve)

module.exports = {
  extends: [
    'plugin:prettier/recommended',
    ...rules,
  ],
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    parser: 'babel-eslint',
  }
};
