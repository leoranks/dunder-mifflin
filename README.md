# Dunder-Mifflin 

SPA demo using AngularJS, Webpack, Karma, Jasmine, Protractor, ngDocs, Babel, and a little bit of ES6.

## Getting started

1. Clone or download the repo
2. Install deps with `npm install`
3. E2E specific: you'll need to install Protractor globally via: "npm install -g protractor" then do "webdriver-manager update" (and you'll need a recent JDK installed on your machine)

## Scripts

All scripts are run with `npm run [script]`, for example: `npm run test`.

* `serve:dev` - start dev server, see it at `http://localhost:9000`

* `build` - create production build, check `build` directory

* `ngdocs` - generate ngdocs, check `docs` directory

* `test` - run unit tests with Jasmine / Karma

* `e2e` - run e2e tests with Protractor (note: to avoid potential issues you'll need to run `npm run serve:dev` in one terminal, `webdriver-manager start` in another, and `npm run e2e` in yet another. Fun!!!)
