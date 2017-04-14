---
layout: post
title: "Debugging Rails Applications"
description: ""
category: software
tags: []
---

Notes from [Rails Guides](http://guides.rubyonrails.org/debugging_rails_applications.html)

## View Helpers

debug

    debug @post

to_yaml

    @post.to_yaml

Use the `simple_format` helper to render each line as is in the console

    simple_format @post.to_yaml

inspect

converts values to strings.

    @post.inspect


## The Logger
Save information to log files at runtime. There are 5 log levels;
:debug, :info, :warn, :error, :fatal, :unknown

Default level for development is :debug, and :info for production

Here's an example of a method instrumented with extra logging:

    class PostsController < ApplicationController
      # ...

      def create
        @post = Post.new(params[:post])
        logger.debug "New post: #{@post.attributes.inspect}"
        logger.debug "Post should be valid: #{@post.valid?}"

        if @post.save
          flash[:notice] = 'Post was successfully created.'
          logger.debug "The post was saved and now the user is going to be redirected..."
          redirect_to(@post)
        else
          render action: "new"
        end
      end

      # ...
    end

### Action items
- Practice using logger

## Debugging w/ debugger gem

Install with debugger gem;

Need to fire w/ a flag

    $ rails server --debugger

use help to see list of commands

    $ help

see where you're at with

    $ list

There are shortcuts `l`, and `l-` to see next/previous 10 lines.

Get context with the

    $ where

command. That command will spit out a whole bunch of #'d lines. You can go to a specific one with

    $ frame 5

which will produce the '5th' line, in the stack trace.

### Thread management
Threads can be managed, but still off from my current knowledge!


### Inspecting variables

use the

    $ inspect_variables

you can also see what variables made it to next stack trace by simpl hitting `next` to move to next layer.

    (rdb:11) instance_variables.include? "@posts"
    true

#### The Var method

The `var` method will provide a list of global, instance, and local variables.

    $ var global (or) v g
    $ var instance (or) v i
    $ var local

You can also inspect an object this way;

    $ var instance Post.new

### In the console

Use debugger in the console by requiring it

    $ rails console
    $ require "debugger"

<hr>
## Action Item;
- Finish taking notes from 3.7...
<hr>

## Memeory Leaks


## Plugins

## Gems
- Xray
- Pry
- Better errors

## References
