const rules = [
  './rules/best-practices',
  './rules/errors',
  './rules/es6',
  './rules/node',
  './rules/styling',
  './rules/plugins/babel',
  './rules/plugins/imports',
  './rules/plugins/jest',
  './rules/plugins/jsx-a11y',
  './rules/plugins/promise',
  './rules/plugins/react',
  './rules/plugins/sonar',
  './rules/variables',
].map(require.resolve)

module.exports = {
  extends: [
    'plugin:prettier/recommended',
    ...rules
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  }
};
