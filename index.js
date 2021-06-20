const { parsers } = require("prettierx/src/language-js/parser-babel");

const {
  options,
  printers: { estree }
} = require("prettierx/src/language-js");

// match configuration of formatting options in:
// https://github.com/brodybits/prettier-config-x-standard/blob/main/index.js
let opts = { ...options };
opts.arrowParens.default = "avoid";
opts.semi.default = false;
opts.singleQuote.default = true;
opts.jsxSingleQuote.default = true;
opts.trailingComma.default = "none";
opts.generatorStarSpacing.default = true;
opts.offsetTernaryExpressions.default = true;
opts.spaceBeforeFunctionParen.default = true;
opts.yieldStarSpacing.default = true;

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
      ...parsers["babel-ts"],
      astFormat: "x-babel-estree"
    }
  },
  options: opts,
  printers: {
    "x-babel-estree": estree
  }
};
