# Vue is feature-rich
computed properties
syncing
events
outputting data
developer tools
filters
watchers
components
lists
forms
conditionals
mixins
reactivity
directives
dynamic styles

# Dom interaction

Vue uses a shadow dom which is a layer between the templates we create and the actual DOM that is presented. Vue adds some niceties, like not needing to use `this` or a variable when the `data` or `methods` are called within the Vue instance.

## Using curly braces

You can only use curly braces in text, not in html attributes.
For exmaple

This doesn't work..

`<a href="{{link}}">google</a> `

But this does...

`<a v-bind:href="link">google</a>`

A directive is instruction placed in code.

There only a few of them but they are powerful.

v-bind:[attribute]="[property/function]"

## Vue built in directives

### v-bind

    v-bind:[attribute]="[property/function]"

### v-once

### v-on

    v-on:[default_event]='[function]'

#### shorthand
@click is same as v-on:click=
@keydown is same as v-on:keydown

### v-html

    v-html="[property/function]"

Output normal html through vue. but be careful because it is not safe. You must trust your html source

## VueJS instance lifecycle

new Vue()

`beforeCreate()`

Initialize Data and Events

Instance Created

`created()`

Compile template or el's template

`beforeMount()`

Replace el with compiled template

Mounted to DOM

`beforeUpdate()`
`updated()`
`beforeDestroy()`
`destroyed()`
