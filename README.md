# eslint-config-vinta

Vinta's [ESLint](http://eslint.org) and [Prettier](https://prettier.io/) shareable configs.

> This repository is under development and both ESLint and Prettier rules applied here are subject to change.

## Install

```bash
npm install --save-dev eslint-config-vinta
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

We also have a recommended configuration ready to use. It extends all of the plugins from the `plugins` folder: `babel, import, jest, jsx-a11y, promise, react, sonar, and unicorn` and uses all the rules defined in the `rules` folder.

```js
module.exports = {
  extends: ['vinta/recommended'],
};
```

#### Selecting Plugins

If you're not using the recommended configurations (which includes all plugins configurations), you can easily select your desirable plugins:

```js
module.exports = {
  extends: ['vinta', 'vinta/plugins/react', 'vinta/plugins/jest'],
};

/*
Possible plugin options:
  - vinta/plugin/babel
  - vinta/plugin/import
  - vinta/plugin/jest
  - vinta/plugin/jsx-a11y
  - vinta/plugin/promise
  - vinta/plugin/react
  - vinta/plugin/sonar
  - vinta/plugin/unicorn
*/
```

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

## Rules

The

## Contributing

See the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## Versioning

See the [VERSIONING.md](VERSIONING.md) file.
