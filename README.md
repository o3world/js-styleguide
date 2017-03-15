# O3 World JavaScript Style Guide

A guide to writing and linting JavaScript.

## Tools
[eslint](https://github.com/eslint/eslint)

## Installing O3 World Eslint Config
1. install package (must have ssh setup and repo read access)

  `npm install git+https://github.com/o3world/js-styleguide.git --save-dev`

2. install peer dependencies for `eslint-config-airbnb-base` package ([more explanation here](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base#eslint-config-airbnb-base-1))

  ```sh
   (
     export PKG=eslint-config-airbnb-base;
     npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
   )
   ```


 3. add `.eslint.json` file in project root and extend `o3-world`,

 ```
 {
   "extends": "o3-world",
   ... project specific config here
 }
 ```


## Rules
JavaScript written by O3 World developers should aim to adhere to the [Airbnb Styleguide](https://github.com/airbnb/javascript).

As we transition towards this stricter set of rules, O3's eslint config has been setup as a subset of the Airbnb rules, with some of the more strict rules turned off, and others switched from errors to warnings:

- Turned off:
  - "eol-last"
  - "func-names"
  - "guard-for-in"
  - "no-tabs"
- Switched to warning:
  - "max-len"
  - "keyword-spacing"
  - "no-console"
  - "no-multiple-empty-lines"
  - "no-restricted-syntax",
  - "no-use-before-define"
- Modified
  - "no-trailing-spaces" (can skip blank lines)
  - "no-param-reassign" (allow param property reassign)
