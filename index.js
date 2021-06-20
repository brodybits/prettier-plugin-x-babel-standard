const { parsers } = require("prettierx/src/language-js/parser-babel");

const {
  parsers: { typescript }
} = require("prettier/parser-typescript");

const {
  options,
  printers: { estree }
} = require("prettierx/src/language-js");

module.exports = {
  parsers: {
    babel: {
      ...parsers.babel,
      astFormat: "x-babel-estree"
    },
    "babel-flow": {
      ...parsers["babel-flow"],
      astFormat: "x-babel-estree"
    },
    "babel-ts": {
      ...parsers["babel-ts"],
      astFormat: "x-babel-estree"
    },
    flow: {
      ...parsers["babel-flow"],
      astFormat: "x-babel-estree"
    },
    typescript: {
      ...typescript,
      astFormat: "x-babel-estree"
    }
  },
  options,
  printers: {
    "x-babel-estree": estree
  }
};
