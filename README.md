# O3 World JavaScript Style Guide

A guide to writing and linting ES6+ JavaScript.

## Tools
- [ESLint](http://eslint.org/)
- Node +4
- npm


## Installing O3 World ESLint Config
1. install package (must have ssh setup and repo read access)

  `npm install eslint-config-o3-world --save-dev`

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

[See Overrides](https://github.com/o3world/js-styleguide/blob/master/index.js#L12-L74)

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


### Commit conventions and publishing to NPM
This project uses circle CI and [Semantic Release](https://github.com/semantic-release/) to auto tag releases, and publish new versions to NPM. Commits to master will automatically publish a new release. The version number will be determined by the structure of the message:
1. git commit -m "fix(thing): fixing thing" = 1.0.0 -> 1.0.1
2. git commit -m "feat(thing): adding thing" = 1.0.0 -> 1.1.0
3. git commit -m "BREAKING CHANGE: totally breaking old versions" = 1.0.0 -> 2.0.0
