module.exports = {
  extends: [
    'plugin:prettier/recommended',
    './.eslintrc.js',
    './plugins/babel',
    './plugins/import',
    './plugins/jest',
    './plugins/jsx-a11y',
    './plugins/promise',
    './plugins/react',
    './plugins/sonar',
    './plugins/unicorn',
  ],
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
