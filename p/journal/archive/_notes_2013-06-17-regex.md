---
layout: post
title: "regex"
description: ""
category:
tags: []
---
### \d

Is any digit from 0 .. 9

#### \d*

Any digit, any number of times.

### . (The Dot)

Match any single character

### [square brackets] - Match specific charaters
Only match a single letter inside, not _all_ of them.

### [^abc] - Exclude specific characters using '^' (The hat)

Adding the hat will match any letters except 'abc'

### Chracter Ranges using the '-' (The dash)

#### Examples
[0-6] will match any digit charater from 0 - 6
[^n-p] will match any character except for letters n to p

### Repition

A more convenient way is to specify how many repetitions of each character we want using the curly braces. For example, "a{3}" will match the a character exactly three times. Some implementations, also allow you to specify a range for this value. For example, "a{1,3}" will match the a character no more than 3 times, but no less than once. In Javascript, you can even leave out the second count and just specify a minimum value, for example a{1,} will match 1 or more a's.

#### [abc]+
one or more of any a, b, or c character

### Characters optional (?)

Use the ? to make a letter optional

#### Example
For example, the pattern "ab?c" will match either the strings "abc" or "ac" because the b is considered optional.

### Whitespace

#### Space - _
#### The tab - \t
#### The new line - \n
#### The carriage return - \r
#### A whitespace any - \s

### Starting & Ending

