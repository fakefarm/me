# reference types vs primitive types

Array and Objects are considered reference types whereas Strings, Numbers, and Booleans are considered primitive types.

When assigning these types to variables, Javascript will copy over primative types but will point to the same object or array in a variable.

For example...

    var fruit = ['apple', 'orange', 'banana']
    var colors = fruit
    colors.push('pear')

    colors
    => ["apple", "orange", "banana", "pear"]

    fruit
    => ["apple", "orange", "banana", "pear"]

    fruit.unshift('grape')

    colors
    =>  ["grape", "apple", "orange", "banana", "pear"]


Notice they are connected. But that is not the case for Primitive types

    var x = 3;
    var y = x;
    x
    => 3
    y
    => 3
    x = 5;
    x
    => 5
    y
    => 3

x is now 5 but y stayed as 3

Something to be aware of.
