# Notes
_5/18/14_

## Ruby file join

    $LOAD_PATH << File.join(File.dirname(__FILE__), "..", "app", "controllers")
    require "quotes_controller"

`$LOAD_PATH` shows all the paths that are loaded into current environment.
We're pushing the file

`File.join()` is used to mash files together.

`File.dirname` tells current directory of script being run.

We are starting with the load path (`$LOAD_PATH`) and adding something to it with `<< File.join`. We start with current location `File.dirname(__FILE__)` and navigat there with known, absolute paths (`'..', 'app', 'controllers'`). Once our load path has a new path on it, we can require the files inside the added directory with `require 'quotes_controller'`.

_5/17/14_

## user interface
- lists
- grids
- hero images
- headlines
- buttons
- sections
- content
- backgrounds
- navigation

## user experience
- loading
- scrolling
- navigating
- showing
- hiding
- active state
- inactive state
- tabbing
- alerting

## types of learning
### informative
learning to get a broad understanding. Learning to keep sharp, but doesn't have a direct application

### solution
working on task and encounter a problem. In finding a solution, you leanr something new in the process.

### practice
simply applying existing knowledge will permit me to get better, more creative, and learn a new approach

### exploration
knowing how something works, and trying to find a new way to apply current knowledge

### application
taking what i've learned up to this point and applying it.


_5/16/14_

Q - how do I add an argument to a coffee class? `#coffee`

## CSS Animations
[view demo](animations.html)

### animation fill mode
- none
- forwards
#### fill mode
![](images/fill-mode.png)
