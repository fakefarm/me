# Function relationships

look how these functions relate to one another…

```
  _.find = _.detect = function (obj, predicate, context) {
    var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;
    var key = keyFinder(obj, predicate, context);
    if (key !== void 0 && key !== -1) return obj[key];
  };
```


// 1. pass the obj

`_.find = function (obj, predicate, context) {`

// 2. pass obj to ternary to determine which solution will be used to find keys

`var keyFinder = isArrayLike(obj) ? _.findIndex : _.findKey;`

// 3. the keyFinder is a variable that wraps a function that was selected based on the ternary. We don’t know or care which implementation is being used, just that we can treat it as a function that will return us a key. only at this place do we use the predicate and context parameters

`var key = keyFinder(obj, predicate, context);`

// 4. the return of the key based on the work of keyFinder’s function will return one of 3 values; undefined (if it’s an object), a -1 (if it’s an array), or the content of the key based on the initial object and the key inside.

`if (key !== void 0 && key !== -1) return obj[key];`

