---
layout: post
title: "i was using scss wrong"
description: ""
category:
tags: []
---

## To Do
- type intro
- explain the lessons learned
- add a link to where I learned it.

While building destroy all tasks, I didn't really style a web app before. So I fell into the trap of deep nesting and abusing scss.
I didn't realize the trouble until I tried to make some changes. One thing made other things worse.

So, I set out to figure out some best naming conventions and found an awesome website called 'the sass way'. I ended up reading all of their articles from beginner to advanced in about 2 hours.

Here are the 18 things I learned from reading.

- I wasn't using enough classes

- Style in terms of page context, not specific pieces.

- think of things as objects

- The inception rule - no more than 2 nests

- use mixins

- make variable defaults

- there's a naming convention called BEM

- trailing &

- reasons to use @if / @conditionals

- @functions

- namespacing techniques - parent-child / plural parent

- a simple use for @extend in maintining a class only approach

- setting globals for the one offs

- name modules as plural objects

- roll your own styles - use reset and not normalize

- style everything in classes

- pea.rs

- typography approach


------------

Layout files hold media queries.
Those media queries hold the mixins, which are names of classes that descibe the kind of module.


# Layouts
Writing maintainable code for a responsive site requires adherance to a philosophy like smacss, and the use of advanced scss tools.
1. layouts must be responsive
2. responsive design changes page layout
3. design must be organized by proper names that do not become out of
4. naming can be managed by mixins so not to bloat a file.
5. mixins don't leave unless it hits a max-breakpoint.
