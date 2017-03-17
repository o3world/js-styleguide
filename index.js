module.exports = {
  "extends": "airbnb-base",
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
    "eol-last": "off",
    "func-names": "off",
    "guard-for-in": "off",
    "max-len": ["error", { "ignorePattern": "^(function|.factory|.service|.controller|.config|.run|.filter|.component|contstructor)" }],
    "keyword-spacing": "warn",
    "no-console": "warn",
    "no-multiple-empty-lines": ["error", { "max": 4, "maxEOF": 2 }],
    "no-param-reassign": ["error", { "props": false }],
    "no-restricted-syntax": "warn",
    "no-tabs": "off",
    "no-trailing-spaces": ["error", { "skipBlankLines": true }],
    "no-use-before-define": ["error", { "functions": false, "classes": false } ],
    "padded-blocks": "off"
  }
}
