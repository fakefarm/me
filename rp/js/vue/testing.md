Testing Vue

## terms

### Mocha
Mocha is a test framework. You define tests in a file and run them from the command line with mocha. Mocha detects tests that throw errors and reports them to you.

### Chai
Chai is an assertion library. It asserts that a value meets another value and throws an error if it does not.

### avoriaz
avoriaz is a vue test utilities library.

### babel-loader
babel-loader is a webpack loader to transpile our JS with babel.

### babel-core
babel-core is used by babel-loader to transpile.

### babel-preset-2015
babel-preset-2015 lets babel compile es2015.

### css-loader
css-loader is a dependency of vue-loader,

### mocha-webpack
mocha-webpack compiles files with webpack before running them in mocha.

### vue-loader
vue-loader is a plugin for webpack that compiles Vue files.

### vue-template-compiler
vue-template-compiler is a dependency of vue-loader that compiles vue templates into JavaScript.

### webpack
webpack is a build tool that compiles our code.

## setup
- install libs
- edit package.json to know test path AND that we're using mocha-webpack
- run with npm run test
- create webpack.config.js
- jsDom (headless testing)

## avoriaz methods
### is
### find
### trigger

## avoriaz options
### propsData
