# eslint-config-vinta

Vinta's [ESLint](http://eslint.org) and [Prettier](https://prettier.io/) shareable configs.

> This repository is under development and both ESLint and Prettier rules applied here are subject to change.

## Install

```bash
npm install eslint-config-vinta --save-dev
```

### Peer dependencies

Depending on the configurations you choose to use, you may not need to install every dependency listed here.

```bash
npm install \
  @babel/eslint-parser@~7.16.5 \
  @babel/eslint-plugin@~7.16.5 \
  eslint@~8.8.0 \
  eslint-config-prettier@~8.3.0 \
  eslint-plugin-import@~2.20.1 \
  eslint-plugin-jest@~26.0.0 \
  eslint-plugin-jsx-a11y@~6.5.1 \
  eslint-plugin-prettier@~4.0.0 \
  eslint-plugin-promise@~6.0.0 \
  eslint-plugin-react@~7.28.0 \
  eslint-plugin-react-hooks@~4.3.0 \
  eslint-plugin-sonarjs@~0.11.0 \
  eslint-plugin-unicorn@~40.1.0 \
  prettier@~2.5.1 \
  --save-dev
```

## Usage

This repository contains the configurations for both `ESLint` and `Prettier`, and each one of them handles shareable configurations differently.

### ESLint

For ESLint, your `.eslintrc` file should look (at least) like this:

> Keep in mind that ESLint ignores the `eslint-config-` prefix, so all you need to write is `vinta`.

```js
module.exports = {
  extends: ['vinta'],
};
```

If you're already using ESLint on your project, just add `'vinta'` to the `extends` property.

We also have a recommended configuration. It extends all plugins from the `plugins` folder and all the rules defined in the `rules` folder.

```js
module.exports = {
  extends: ['vinta/recommended'],
};
```

#### Selecting Plugins

If you're not using the recommended configuration (which includes all plugins), you can easily select your desired plugins:

```js
module.exports = {
  extends: ['vinta', 'vinta/plugins/react', 'vinta/plugins/jest'],
};
```

*The base `vinta` configuration includes all ESLint rules, but no plugins.*

Possible plugin options:

- **vinta/plugins/babel** (from [@babel/eslint-plugin](https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin))
- **vinta/plugins/import** (from [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import))
- **vinta/plugins/jest** (from [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest))
- **vinta/plugins/jsx-a11y** (from [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y))
- **vinta/plugins/promise** (from [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise))
- **vinta/plugins/react** (from [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react))
- **vinta/plugins/react-hooks** (from [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks))
- **vinta/plugins/sonar** (from [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs))
- **vinta/plugins/unicorn** (from [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn))

You can learn more about ESLint's shareable configs [here](http://eslint.org/docs/developer-guide/shareable-configs).

### Prettier

For Prettier, add the following line to your `package.json` file:

```json
"prettier": "eslint-config-vinta/prettier",
```

And be sure to have the following packages installed:

```bash
npm install \
  eslint-config-prettier@~8.3.0 \
  eslint-plugin-prettier@~4.0.0 \
  prettier@~2.5.1 \
  --save-dev
```

If you already have a working configuration for your project, you can either ignore this step or extend our config in your `.prettierrc` file:

```js
{
  ...require('eslint-config-vinta/prettier'),
  semi: false,
  bracketSpacing: false,
};
```

You can learn more about Prettier's shareable configs [here](https://github.com/prettier/prettier/blob/master/docs/configuration.md#sharing-configurations).

## Versioning

See the [VERSIONING.md](VERSIONING.md) file.
