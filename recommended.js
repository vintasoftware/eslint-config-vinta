const plugins = [
  './plugins/babel',
  './plugins/import',
  './plugins/jest',
  './plugins/jsx-a11y',
  './plugins/promise',
  './plugins/react',
  './plugins/react-hooks',
  './plugins/sonar',
  './plugins/unicorn',
].map(require.resolve);

module.exports = {
  extends: ['plugin:prettier/recommended', './.eslintrc.js'].concat(plugins),
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
