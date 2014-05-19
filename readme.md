# Notes

## CSS Animations
_5/19/14_

CSS Animations are a combination of 2 main parts; Keyframes and animation properties.

### Keyframes
Keyframes have a name _('ride' in the following example)_ in order to be used by the animation property. Keyframes specify the specifics of an animation. (The `from` and `to`).

_Example_

     @keyframes ride {
      from { transform: translateX(0px); }
      to   { transform: translateX(450px); }
    }

Anything can be there including

- transforms
- background colors
- translates

### Animation

The Animation property manages the specific execution of the keyframe property. Answering questions like

- when to start?
- how long to animate?
- what happens when over?
- how many times should it animate?

_Example_

    .square {
      animation-name: ride;
      animation-duration: 3s;
      animation-iteration-count: 1;
      animation-direction: alternate;
      animation-delay: 1s;
    }

#### List of animation properties

**animation-name**  Specifies the name of the keyframe you want to bind to the selector
**animation-duration**  Specifies how many seconds or milliseconds an animation takes to complete
**animation-timing-function**   Specifies the speed curve of the animation
**animation-delay** Specifies a delay before the animation will start
**animation-iteration-count**   Specifies how many times an animation should be played
**animation-direction** Specifies whether or not the animation should play in reverse on alternate cycles
**animation-fill-mode** Specifies what values are applied by the animation outside the time it is executing
**animation-play-state**    Specifies whether the animation is running or paused

### Prefixes
Until further notice, we need to use browser prefixes

    -webkit-animation
    -moz-animation
    -o-animation
    animation















## Ruby file join
_5/18/14_

    $LOAD_PATH << File.join(File.dirname(__FILE__), "..", "app", "controllers")
    require "quotes_controller"

`$LOAD_PATH` shows all the paths that are loaded into current environment.
We're pushing the file

`File.join()` is used to mash files together.

`File.dirname` tells current directory of script being run.

We are starting with the load path (`$LOAD_PATH`) and adding something to it with `<< File.join`. We start with current location `File.dirname(__FILE__)` and navigate there with known, absolute paths (`'..', 'app', 'controllers'`). Once our load path has a new path on it, we can require the files inside the added directory with `require 'quotes_controller'`.

## user interface
_5/17/14_

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
_5/17/14_
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
_5/17/14_
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


## CSS Animations
_5/16/14_

Q - how do I add an argument to a coffee class? `#coffee`

[view demo](animations.html)

### animation fill mode
- none
- forwards
#### fill mode
![](images/fill-mode.png)
