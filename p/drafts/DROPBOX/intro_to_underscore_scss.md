## background

[@jaredcunha](https://github.com/jaredcunha) I originally planned to fork and submit PR's to improve [responsive-ls](https://github.com/jaredcunha/responsive-ls), I'd prefer to stick to the backend stuff I know (ie. `ruby / middleman, gems, bourbon, neat, erb, scss`).

## underscore mvp (0.0.1)

So I decided to venture out and try something different for my frontend too. I have 3 premises that 

- html is easy to write but hard to maintain
- manage specificity and style separately.

### html is a pilot's dashboard

#### HTML
- whitespace is allowed
- you can have lots of classes
- css is easier to read and write vertically, why don't we do the same with html?
- the '_' underscore is allowed class name
- html is markup, not content (ie, copy, text, information)
- html works great with ruby with `erb` - `index.html.erb`

#### the CSSVI

html is a great way to inform the css of the markup it is intended to represent. including a growinig list of at least 6 items. I've added a 6 but I envision css could become CSSVII(7), CSSVIII(8), or even consolidated down to CSSV(5) with five primary uses of css. 

So html is the perfect way to translate css classes through, well classes. but since there are multiple items of interest, consider how Javascript hash is named inside the class="_property_ value". Thus the '_underscored_' items become a pilot's dashboard to understand the specific use of this markup. While this lengthy description and the idea of managing all those classes seems impossible, I argue it's faster than the current solution. For one, using a modern text editor like [Sublime Text]() developers can create `snippets` ([example below]()) in the form of a **boilerplate template* that is easily tabbed through. Second, while current uses of classes in HTML is easy to write, it's hard to maintain. What if we flipped the _hard part_ to the time when the assignment is tasked to you today - rather than a bug fix 90 days from now? One of SCSS's best benefits over CSS is the ability to single out specificity you can recognize there is an outline of content that needs to be represented as _first class_ `classes`. That will enable me to manage styles in more of a 'pilot's dashboard' approach.

### `_scope_`

![](images/scope.jpg)

`_scope_` is the range of influence, or reach for these CSS classes.

#### app 
this is the area at the higest level of range. classes of scope at this level could be considered a `$global_variable` in Ruby.

#### page

this is the specific page be it a `show` or `index` page. The concept is for page styling specific to this page to be managed here.

#### collection

A collection is merely `N+1` nested items. If you have two, currently SCSS needs to know at this level 

#### unit
CSS uses the term 'atomic unit'. I feel the author chose to shorten his approch to 'atomic' css. where this approach has a similar philosophy, I don't want to share vocabulary at the risk of confusing the developer.

### `_instance_`

An instance is the single unit of common pattern that requires an override of some sort. for example; `text-left`

#### generic

means this instance like all the others

#### instance_name

an instance is something specific about this. is it on top or margin right or soemthing very specific about this markup

### `_state_`

one of the truly remarkable parts of html is the ability to write code in expectation of it's timing. we call this `state` and that state is either visible, waiting to alert you, or only visible when relevant. 

#### inherit

Sometimes state is nested inside an li or something to which `state` is simply inherited from it's parent markup.

#### visible

visible is the default state

#### alert

an alarm section where content will be red or in a flash before it disappears

### reveal-on-click

An example of how you might build your own custom states

### `_columns_`
this is the opposite of mobile first. At a markups most expanded screen, how many columns will this markup overlap?

#### one

#### two

#### three


### `_animation_`

animation is becoming more common and with the introduciton of `key frames` and complex animation rules it's better to manage this in iscolation

####none
default

####fadeIn
exmple

####slideDown
example


### `_pattern_`
this is an attomic unit or a pttern in refills

####gallery
this is a box shaped ideal

####title

a main header

####button

buttons

####paragraph

####image

####list

####wrap

wraps can become patterns with the amount of padding, folding, collapsing, etc. (ideally connect to a `_scope_ collection`)

## snippet example

_scope_ app  page  collection  unit 
_instance_ generic instance_name
_state_ visible  inherit  alert  reveal-on-click
_columns_ one  two  three
_animation_ none  fadeIn  slideDown
_pattern_ gallery  title  button  paragraph  image  list  wrap
"
data-content="generic instance_name"
data-click="generic instance_name"
data-position="generic instance_name"
data-ga="generic instance_name"
>
<%= data.copy.generic instance_name %>
</element - div  header  nav  section  article  footer > <!-- app  page  collection  unit  gallery  title  button  paragraph  image  list  wrap generic instance_name -->
