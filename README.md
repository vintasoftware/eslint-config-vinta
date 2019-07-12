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
npm install
  eslint-config-prettier@^6.0.0 \
  eslint-plugin-babel@^5.3.0 \
  eslint-plugin-import@^2.18.0 \
  eslint-plugin-jest@^22.7.1 \
  eslint-plugin-jsx-a11y@^6.2.3 \
  eslint-plugin-prettier@^3.1.0 \
  eslint-plugin-promise@^4.2.1 \
  eslint-plugin-react-hooks@^1.6.1 \
  eslint-plugin-react@^7.14.2 \
  eslint-plugin-sonarjs@^0.4.0 \
  eslint-plugin-unicorn@^9.1.1 \
  prettier@^1.18.2 \
  eslint@^6.0.1 \
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

If you're not using the recommended configurations (which includes all plugins configurations), you can easily select your desired plugins:

```js
module.exports = {
  extends: ['vinta', 'vinta/plugins/react', 'vinta/plugins/jest'],
};
```

Possible plugin options:

- **vinta/plugin/babel** (from [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel))
- **vinta/plugin/import** (from [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import))
- **vinta/plugin/jest** (from [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest))
- **vinta/plugin/jsx-a11y** (from [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y))
- **vinta/plugin/promise** (from [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise))
- **vinta/plugin/react** (from [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) and [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks))
- **vinta/plugin/sonar** (from [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs))
- **vinta/plugin/unicorn** (from [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn))

You can learn more about ESLint's shareable configs [here](http://eslint.org/docs/developer-guide/shareable-configs).

### Prettier

For Prettier, add the following line to your `package.json` file:

```json
"prettier": "eslint-config-vinta/prettier",
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
