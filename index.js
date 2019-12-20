module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "jquery": true,
    "jasmine": true,
    "mocha": true
  },
  "globals": {
    "angular": true
  },
  "rules": {
    "arrow-parens": ["error", "as-needed", {
      "requireForBlockBody": true
    }],
    "eol-last": "off",
    "func-names": "off",
    "guard-for-in": "off",
    "implicit-arrow-linebreak": "off",
    "keyword-spacing": "warn",
    "lines-between-class-members": "off",
    "max-len": [
      "error", 100, 2, {
        "ignoreUrls": true,
        "ignoreComments": false,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreUrls": true,
        "ignorePattern": "^\\s*(function|.factory|.service|.controller|.config|.run|.filter|.component|constructor)"
      }
    ],
    "no-console": "warn",
    "no-multiple-empty-lines": [
      "error", {
        "max": 4,
        "maxEOF": 2
      }
    ],
    "no-param-reassign": [
      "error", {
        "props": false
      }
    ],
    "no-restricted-syntax": "warn",
    "no-trailing-spaces": [
      "error", {
        "skipBlankLines": true
      }
    ],
    "no-use-before-define": [
      "error", {
        "functions": false,
        "classes": false
      }
    ],
    "object-curly-newline": "off",
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-tag-spacing": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/no-did-update-set-state": "off",
    "react/sort-comp": "off",
    "react/state-in-constructor": "off"
  }
}
