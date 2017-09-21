# start js

let's build a starter kit for js

## editor config

.editorconfig

http://editorconfig.org/

## Node Security

checks your package.json known vulnerabilities

run `nsp check`

## Express

We'll use Express as both development and production server. Configuration is found in `build
Scripts/srcServer.js`

## Use LocalTunnel

Local Tunnel for quick live sharing...

`npm install localtunnel -g`

to activate
1. make sure my app is live

2. run `lt --port 3001 --subdomain foo` to create a live url!

## NPM Scripts for build tools

Use the tools directly instead of going through a build tool, like gulp or grunt.

Allows you to;
- call separate scripts that use node
- make command line calls
- utilize other scripts

Scripts are managed in `package.json` in the scripts key word. There is a start script which begins the server, which can be run as `npm start`. Typically, you need to type `npm run [script]` but npm knows `start` and eliminates `run` in this and for `test` situation.

### hooks

Adding a `"pre[script-name]"` script will auto run before the script with same name. and any scripts run `"post[script-name]"` will auto run after same script name.

## Chalk for output

Use chalk to color messages in the console.

## Babel

Babel transpiles JavaScript.

two options to config; `.babelrc` or `package.json`. We're going to go with `.babelrc`

Babel comes with presets. There are many different presets and plugins, but the only one we need to set is `"latest"` so we keep with the latest ES.

As a simple example of Babel's influence, notice the commit history when we add Babel in that we change the chalk from Common JS require into ES6 `import` syntax.

Notice also the introduction of `babel-node` which transpiles code.

## Webpack

Webpack is a Bundler. Bundlers manage importing and requiring code as needed. The current popular options are browserify, webpack, rollup, and jspm.

The benefit of webpack is it can bundle more than js. It can also manage CSS, images, and fonts. Webpack's target is the web and rolling up all js files into a single file.

We'll have webpack.config.js files for each environment. Currently we only have `webpack.config.js`. This is how we configure Webpack accordingly.

Once a webpack loader is defined, the next step is to reference it in the entry file. In this current situation, we have `index.css` and it is imported in `index.js` as `import './index.css'`. Pretty slick!

### Development memory file
In `webpack.config.js` there is a file named `bundle.js`. It is not an actual file in the directory tree, but a file created in memory during development. It is used for development.

## numeral module

A javascript library for formatting and manipulating numbers.

http://numeraljs.com/

http://adamwdraper.github.com/Numeral-js/

## ES6 (2015) additions
- const instead of let
- import [Module] from '.filepath'
- backticks and `${}` for string interpolation

## source maps

sourcemaps map bundled, transpiled, and minified code back to the original source! They are part of the build. They are only downloaded if you open developer tools because they are big files!

`devtool` is the entry point for creating source maps and there are many options. According to Vue template, `#cheap-module-eval-source-map` is faster for development

## Linters
Linters review code for errors and adherence to enforce consistency and avoid mistakes.  ESLint is highly configurable with decisions to be made around the following topics;

### File configuration format

There are 5 different file formats that can be used for configuration in addition to writing it inside package.json. They are all named `.eslintrc` but the decision comes in which file extention to use. We'll go with `.eslintrc.json`

###  built-in rules

Decide as a team which rules to follow. Here are the rules!
https://eslint.org/docs/rules/

###  warnings & errors

Warnings can continue development and can be ignored. Errors break the build and cannot be ignored. Base decision on context.

###  plugins

Plugins add additional created functionality for specific environments. This will be a Vue starter kit so it will use https://github.com/vuejs/eslint-plugin-vue

###  amount of presets

There are some common community preset that can be used. Some include AirBnb and Standard JS

## Linting watching files

ESLint does not automatically watch files on save. However, that is a feature we want in our workflow. Time for another piece to the puzzle.

### eslint-loader vs. eslint-watch
There are two options; Eslint-loader is a webpack config. eslint-watch is an npm package that adds file watch and is not tied to webpack. It has better warning/error formatting and displays a clean success message when things are up to par. Eslint-watch also lints tests and build scripts.

### level numbers

ESlint sets levels

0 = ignore
1 = warning
2 = error

## JS observations

It should come as no surprise that JS prefers to be verbose and granular. As such, there are aspects of tasks that are sometimes broken down beyond what may be intuitive. For example, to have eslint-watch to watch files, you need to pass `--watch` as an argument to what you want to watch as we do in the lint:watch script `"lint:watch": "npm run lint -- --watch"`
