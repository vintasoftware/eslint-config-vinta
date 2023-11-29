const plugins = [
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
  extends: [
    'plugin:@typescript-eslint/recommended',
    './.eslintrc.js',
    ...plugins,
    'plugin:prettier/recommended',
  ],
  env: {
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};
