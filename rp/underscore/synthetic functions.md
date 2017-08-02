# synthetic functions
Real functions are the ones that are defined. Synthetic functions, as I call them are a function and act like a function but the name is a variable. Meaning, the function being invoked could simply be a variable name.

## real function
function foo () { return function() {} }
call foo()
var bar = function(){}
call bar()

## synthetic function
baz is a variable that can be callsed 
var baz = foo()
call baz()

var bee = bar
call bee()

