# O3 World JavaScript Style Guide

A guide to writing and linting JavaScript.

## Tools
[eslint](https://github.com/eslint/eslint)

## Installing O3 World Eslint Config
1. install package (must have ssh setup and repo read access)

  `npm install git+https://github.com/o3world/js-styleguide.git --save-dev`

2. add `.eslintrc.json` file in project root and extend `o3-world`,

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
  - [eol-last](https://github.com/airbnb/javascript#whitespace--newline-at-end)
  - [func-names](http://eslint.org/docs/rules/func-names)
  - [guard-for-in](http://eslint.org/docs/rules/guard-for-in)
  - [no-tabs](http://eslint.org/docs/rules/no-tabs)
- Switched to warning:
  - [keyword-spacing](https://github.com/airbnb/javascript#whitespace--around-keywords)
  - [no-console](http://eslint.org/docs/rules/no-console)
  - [no-restricted-syntax](https://github.com/airbnb/javascript#iterators--nope),
- Modified
  - [max-len](https://github.com/airbnb/javascript#whitespace--max-len) - allow longer lines for function params or angular module methods (.component, .service, etc)
  - [no-multiple-empty-lines](http://eslint.org/docs/rules/no-multiple-empty-lines) - modified to allow up to 4 empty lines
  - [no-param-reassign](https://github.com/airbnb/javascript#functions--mutate-params) - allow param property reassign
  - [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces) - empty lines can have trailing spaces (IDEs often do this by default after a return)
  - [no-use-before-define](http://eslint.org/docs/rules/no-use-before-define) - allow function and class use before define
