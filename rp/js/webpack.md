# webpack

## Reasons for a build process

- combine files
- minification
- file order
- transpilation
- linting

## other solutions
- server-side build tools
- task runners

## webpack
specialized task runner to process input files into output files

## client side
Use NPM not bower

## Use a Module system
Module systems express dependencies between modules, which are usually files.

Module systems make dependencies explicit

There are 3 main module systems but we'll use common js

- amd
- common js
- es6

# Plugins
Plugins are ways to run macro tasks on the project.

## HTML webpack plugin
- Manages index.html files between environments.
- Cache Busting

## Split apart JS files (Common Chunk Plugin)

Split apart vendor files from app files to prevent users from downloading vendor files everytime app is updates.
