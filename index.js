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
    "max-len": "warn",
    "keyword-spacing": "warn",
    "no-console": "off",
    "no-multiple-empty-lines": "warn",
    "no-param-reassign": ["error", { "props": false }],
    "no-restricted-syntax": "warn",
    "no-tabs": "off",
    "no-trailing-spaces": ["error", { "skipBlankLines": true }],
    "no-use-before-define": "warn"
  }
}
