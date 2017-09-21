// this file isn't transpiled, so it must use CommonJS and ES5

// Register babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
// index.js imports '.css' files and mocha does not know what to do with those. As such, this overrides that extension with an empty function so not to error out.
require.extensions['.css'] = function () {};
