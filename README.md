# O3 World JavaScript Style Guide

A guide to writing and linting JavaScript.

## Tools
- [ESLint](http://eslint.org/)
- Node +4
- npm


## Installing O3 World ESLint Config
1. install package (must have ssh setup and repo read access)

  `npm install git+https://github.com/o3world/js-styleguide.git --save-dev`

2. add `.eslintrc.json` file in project root and extend `o3-world`,


Example .eslintrc.json file file which switches to using tabs:
 ```
 {
   "extends": "o3-world",
   rules: {
     "tab-tabs": "off",
     "indent": ["error", "tab"]
   }
 }
 ```


## Rules
JavaScript written by O3 World developers should aim to adhere to the [Airbnb Styleguide](https://github.com/airbnb/javascript).

As we transition towards this stricter set of rules, O3's eslint config has been setup as a subset of the Airbnb rules, with some of the more strict rules turned off, and others switched from errors to warnings. Think of this config as Airbnb lite.

- Turned off:
  - [eol-last](https://github.com/airbnb/javascript#whitespace--newline-at-end)
  - [func-names](http://eslint.org/docs/rules/func-names)
  - [guard-for-in](http://eslint.org/docs/rules/guard-for-in)
- Switched to warning:
  - [keyword-spacing](https://github.com/airbnb/javascript#whitespace--around-keywords)
  - [no-console](http://eslint.org/docs/rules/no-console)
  - [no-restricted-syntax](https://github.com/airbnb/javascript#iterators--nope)
- Modified
  - [max-len](https://github.com/airbnb/javascript#whitespace--max-len) - allow longer lines for function params or angular module methods (.component, .service, etc)
  - [no-multiple-empty-lines](http://eslint.org/docs/rules/no-multiple-empty-lines) - modified to allow up to 4 empty lines
  - [no-param-reassign](https://github.com/airbnb/javascript#functions--mutate-params) - allow param property reassign
  - [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces) - empty lines can have trailing spaces (IDEs often do this by default after a return)
  - [no-use-before-define](http://eslint.org/docs/rules/no-use-before-define) - allow function and class use before define


## Usage

### Package.json

Add script to your project's package.json, using ESLints [Command Line Interface](http://eslint.org/docs/user-guide/command-line-interface)

example package.json:
```
{
  "name": "example-site",
  "version": "0.0.1",
  "scripts": {
    "lint": "eslint js/**; exit 0"
  }
```
then in your terminal:
```
npm run lint
```

### Gulp

[gulp-eslint](https://github.com/adametry/gulp-eslint)

```
npm install gulp-eslint
```
```
const eslint = require('gulp-eslint');

gulp.task('lint', () => {
  return gulp.src(['**/*.js','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format());
});
```
[More detailed examples and documentation](https://github.com/adametry/gulp-eslint#usage)

### Webpack

```
npm install eslint-loader --save-dev
```

In your webpack config
```
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          // eslint options (if necessary)
        }
      },
    ],
  },
  // ...
}
```
[More detailed examples and documentation](https://github.com/MoOx/eslint-loader#eslint-loader-)
