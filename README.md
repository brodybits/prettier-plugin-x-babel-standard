# prettier-plugin-x-babel-standard

[![LICENSE](https://img.shields.io/npm/l/prettier-plugin-x-babel-standard?color=green&style=flat-square)](./LICENSE.md)
[![npm package](https://img.shields.io/npm/v/prettier-plugin-x-babel-standard?color=blue&style=flat-square)](https://www.npmjs.com/package/prettier-plugin-x-babel-standard)

Fork of [`prettier-plugin-x-babel`](https://github.com/brodybits/prettier-plugin-x) / [`prettier-plugin-x-babel`](https://github.com/brodybits/prettier-plugin-x-babel) / [`prettier-plugin-x-standard`](https://github.com/brodybits/prettier-plugin-x-standard),
with defaults updated to match **["Standard JS"](https://standardjs.com/)** formatting standards,
using **[Babel](https://babeljs.io/)** and **[prettierX](https://github.com/brodybits/prettierx)**
by default for ES languages JavaScript, Flow, and TypeScript, all in a
**[Prettier plugin](https://prettier.io/docs/en/plugins.html)**.

Sample formatting according to **["Standard JS"](https://standardjs.com/)**:

```js
function * a () {}

console.log(typeof a)
```

## Installation

with Yarn (recommended):

```console
yarn add --dev prettier-plugin-x-babel
```

or with npm:

```console
npm install --save-dev prettier-plugin-x-babel
```

## Sample usage

```console
prettier --check sample.js
```

to specify TypeScript via `babel-ts` parser:

```console
prettier --parser=typescript --check sample.js
```

or:

```console
prettier --parser=babel-ts --check sample.js
```

to specify Flow via `babel-flow` parser:

```console
prettier --parser=flow --check sample.js
```

or:

```console
prettier --parser=babel-flow --check sample.js
```

## Thanks and credits

- Based on: [`prettier-plugin-x`](https://github.com/brodybits/prettier-plugin-x)
- Thanks to **<https://github.com/prettier/plugin-php>** for an easy-to-understand Prettier plugin,
  which helped with the initial structure of this Prettier plugin.
