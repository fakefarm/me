# Tyler on Mobile


## overview

## mustache
No work in view file, just displaying stuff
do work in context.

Can't call ruby methods from M.
{{# if }}
{{/ if }}

{{^ not if }}
{{/ not if }}

### partials

 {{>urgency}}

### Mustasch-rails gem
- figures 

### Gotchas
if you're using a method in the view and don't have a cooresponding method in context, it won't raise an error - just won't work. (The section of page will gone.)


## The View

View should only be display 

### We don't have helpers,
Can't call helpers from views
M is more of a pure MVC
In _rails_ you have access to all @ from controller, in view

Mustache has separation of views and data.
Gets paired with a context object that you use in the mustache template. 

What you have to do is setup 

### has 2 Layouts
- layout for context (application.rb)
- application.html.erb

## Context objects
- has all action view helpers from rails (like stylesheet_link_tag, etc, link_to, time_ago)
- Similar to decorators/presenter)
- 1 context per view
- separation is stronger
- most inherit from Layouts::Application, which has all basic methos for layout to work. meta tags, etc.
- dont need a context if you decide to render json, text, non-html
- Re: testing contexts can be tested without controller

- object per controller action.
- just like views deal show 
- context/deals/show.rb gets paird up with views/deals/show.html.mustache
- we call method from view but can't pass args to method.


### Context sets on top of Controller



## testing

## gotchas
