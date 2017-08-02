_Notes from [Eloquent JavaScript](http://eloquentjavascript.net/06_object.html)_

## Object
[grasp this](http://eloquentjavascript.net/06_object.html#p_4sWuvx6wkg)

defineProperty()

#### Object.create()

Why use Object.create verse just normal {}?
You can use Object.create to create an object with a specific prototype.

We saw the Object.create function, which allows us to create an object with a specific prototype. You are allowed to pass null as the prototype to create a fresh object with no prototype. For objects like map, where the properties could be anything, this is exactly what we want.

```
var map = Object.create(null);
map["pizza"] = 0.069;
console.log("toString" in map);
// → false
console.log("pizza" in map);
// → true
```

Now we can safely use for/in loops, no matter what people have been doing to Object.prototype.

#### getPrototypeOf()

```
console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null
```

As you might expect, the Object.getPrototypeOf function returns the prototype of an object.

The prototype relations of JavaScript objects form a tree-shaped structure, and at the root of this structure sits Object.prototype. It provides a few methods that show up in all objects, such as toString, which converts an object to a string representation.


Starting to notice that JavaScript needs me to interact with the Object parent to obtain certain information.

### Object.prototoype vs. Function.prototype

### for/in vs. in return values.

```
var user = {
  nazme: 'dave',
  age: 37,
  blam: function(){}
}
```

#### for / in 
returns a loop.

```
for (p in user) {
  console.log(p);
  console.log(user[p]);
}
```
#### in

is a boolean. *NOTE* all properties are checked as a string.

```
var c = 'blam' in user;  // blam is a function
console.log(c);
```

[quirks explained here](http://eloquentjavascript.net/06_object.html#p_FtECKQ2UPV)

### Enumerable vs. NonEnumerable

JavaScript distinguishes between enumerable and nonenumerable properties.

All properties that we create by simply assigning to them are enumerable. The standard properties in `Object.prototype` are all nonenumerable, which is why they do not show up in such a for/in loop.

It is possible to define our own nonenumerable properties by using the `Object.defineProperty` function, which allows us to control the type of property we are creating.

```    
Object.defineProperty(Object.prototype, "hiddenNonsense", {enumerable: false, value: "hi"});
for (var name in map)
  console.log(name);
// → pizza
// → touched tree
console.log(map.hiddenNonsense);
// → hi
```

So now the property is there, but it won’t show up in a loop. That’s good. But we still have the problem with the regular in operator claiming that the Object.prototype properties exist in our object. For that, we can use the object’s hasOwnProperty method.

#### hasOwnProperty()
This method tells us whether the object itself has the property, without looking at its prototypes. This is often a more useful piece of information than what the in operator gives us.

When you are worried that someone (some other code you loaded into your program) might have messed with the base object prototype, I recommend you write your for/in loops like this:

```
for (var name in map) {
  if (map.hasOwnProperty(name)) {
    // ... this is an own property
  }
}
```

#### Object.keys() 
Returns an array of property names in an object.

#### get and set

```
var pile = {
  elements: ["eggshell", "orange peel", "worm"],
  get height() {
    return this.elements.length;
  },
  set height(value) {
    console.log("Ignoring attempt to set height to", value);
  }
};

console.log(pile.height);
// → 3
pile.height = 100;
// → Ignoring attempt to set height to 100
```

In object literal, the `get` or `set` notation for properties allows you to specify a function to be run when the property is read or written. 

#### instanceof 

A binary operator useful to know whether an object was derived from a specific constructor. 

```
[1] instanceof Array;
// → true
```

Almost every object is an instance of Object so be aware


