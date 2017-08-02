This line

`lastKey = _.keys(object).pop()`

caught my attention so I moved it into the console.

It was interesting to see that same set of function calls can return different results depending on when and how they are called. Not only were the values different, their types were different. Just something to be aware of - that is a reality when coding.


```
  // setup
  Object {1: "b", 2: "a"}

  // version 1
  // .pop() is added to end.
  lastKey = _.keys(object).pop()

  lastKey
  > "2"

  typeof lastKey
  > "string"

  // version 2
  // pop comes later.

  lastKey = _.keys(object)
  lastKey
  > ["1", "2"]

  lastKey.pop()
  > "2"

  lastKey
  > ["1"]

  typeof lastKey
  > "object"
```
