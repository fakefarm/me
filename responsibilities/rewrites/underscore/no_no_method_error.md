I am building `_.find` and it is failing saying `TypeError: keyFinder is not a function `. It is not a helpful error and low and behold it's because the dependencies that `_.find` uses are not completely built out. I know that's my fault, but it helped me realize that error messages may not show you the problem. I suppose I was assuming I'd receive something like 'no method error' that Ruby provides. Rather, the way this works is that no matter the importance of a property's value, it just returns undefined. I just had a hunch that one of the intricacies of the function was not built out yet and sure enough, I dind't build `sortedIndex` yet.

Which then lead me to another observation about JS functions and architecture...

_.sortedIndex = function(array, obj, iteratee, context) {}

- _.sortedIndex is a property on _

- It has been assigned a function
- that function has 4 arguments

- Which means, _.sortedIndex is now a function with four arguments. At this point I don't know which ones are required (technically, js doesn't fail when you don't pass them - but the structure of the function, does it require all four to produce expected results?), but just that there are 4 argument options.
