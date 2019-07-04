# eslint-config-vinta

Vinta's [ESLint](http://eslint.org) and [Prettier](https://prettier.io/) shareable configs.

> This repository is under development and the ESLint and Prettier rules applied here are subject to change.

## Install

```
npm install eslint-config-vinta
```

## Usage

This repository hosts the configurations for both `ESLint` and `Prettier`, and each one of them handles shareable configurations differently.

### ESLint

For ESLint, your `.eslintrc` file should look (at least) like this:

> Keep in mind that ESLint ignores the `eslint-config-` prefix, so all you need to write is `vinta`.

```js
module.exports = {
  extends: ['vinta'],
  rules: {},
};
```

If you're already using ESLint on your project, just add `'vinta'` to the `extends` property.

You can learn more about ESLint's shareable configs [here](http://eslint.org/docs/developer-guide/shareable-configs).

### Prettier

For Prettier, add the following line to your `package.json` file:

```json
"prettier": "eslint-config-vinta/prettier",
```

If you already have a working configuration for your project, you can either ignore this step or extend our configs in your `.prettierrc` file:

```js
{
  ...require('eslint-config-vinta/prettier'),
  semi: false,
  bracketSpacing: false,
};
```

You can learn more about Prettier's shareable configs [here](https://github.com/prettier/prettier/blob/master/docs/configuration.md#sharing-configurations).
