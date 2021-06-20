# prettier-plugin-x-standard

[![LICENSE](https://img.shields.io/npm/l/prettier-plugin-x-standard?color=green&style=flat-square)](./LICENSE.md)
[![npm package](https://img.shields.io/npm/v/prettier-plugin-x-standard?color=blue&style=flat-square)](https://www.npmjs.com/package/prettier-plugin-x-standard)

Fork of [`prettier-plugin-x`](https://github.com/brodybits/prettier-plugin-x), with defaults
updated to match **["Standard JS"](https://standardjs.com/)** formatting standards.

Supported parsers:

- **[Babel](https://babeljs.io/)**
- **[Microsoft TypeScript](https://github.com/Microsoft/TypeScript)**

Requires explicit configuration of parser. Recommended configuation helper:

- [`prettier-config-x`](https://github.com/brodybits/prettier-config-x)

Sample formatting according to **["Standard JS"](https://standardjs.com/)**:

```js
function * a () {}

console.log(typeof a)
```

Note that for the non-Babel `x-typescript` parser this plugin uses the TypeScript parser that is bundled with stock Prettier.

## Installation

with Yarn (recommended):

```console
yarn add --dev prettier-plugin-x
```

or with npm:

```console
npm install --save-dev prettier-plugin-x
```

## Sample usage

```console
prettier --parser=x-babel --check sample.js
```

with `babel-ts` parser:

```console
prettier --parser=x-babel-ts --check sample.js
```

or with the TypeScript parser:

```console
prettier --parser=x-typescript --check sample.js
```

with `babel-flow` parser:

```console
prettier --parser=x-babel-flow --check sample.js
```

## Thanks and credits

- Thanks to **[`@prettier/plugin-php`](https://github.com/prettier/plugin-php)**
  for an easy-to-understand Prettier plugin,
  which helped with the initial structure of this Prettier plugin.
