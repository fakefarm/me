Learing to read code.

Learning Javascript has increased my attention to detail significantly. While learning Ruby, I was able to be more casual.

I was studying the reduce method and it occured to me that there are several layers at play. These layers are built from using words that represent several different things.

Take a look at the following function. What do you see? 
I'm not talking about how it works but what 'kind of words' are below? 
For example, are there nouns, verbs, adjactives?

```javascript
function reduce(array, start, callback) {
  // javascript, and all of programming often needs variables to contain state.
  var current = start, 
      freq = array.length; 
      

  for (var i = 0; i < freq; i++){
    // how much of learning is problem solving vs. syntax?
    current = callback(current, array[i]); 
  }
  // as a function runs, it will need to return to it's transitionary value
  return current; 
}

reduce(
  [1, 2, 3, 4], 
  0, 
  function(a, b) { return a + b;}
)
=> 10

```

This is not a grammar lesson, but just as an English sentence needs verbs, nouns, and adjectives to be a complete sentence, programming needs various types of words.

When first looking at the above code, I am a deer in the headlights because I don't know what I'm looking at, or for. 

But, this method gave me a realization that it's comprised of several words that are going to have specific purpose. Where in English, the word is the meaning, in programming, a  word's use is the meaning. 

## The 4 words

### variables
As you learn about programming a variable is something that's easily identified. But recognizing it's importance in the life of a function is the importance. Not only is the point of a variable to store something, it's probably better to ask 'why is this variable relevant?' or 'what is this variable's purpose?''

when I first started learnign about variables, I underestimated their purpose.
```
    x = 5
```

I saw their value as a placeholder for a look, like the particular item in an array. 

I didn't see that they will have much more relevant use in computations and play an important role of transitional state in a program. 

Take that reduce's use of the `current` variable. It's a vital part of how reduce will work because it holds a necessary, transitionary state.
I hadn't thought of variables in that way before.

### arguments
Arguments are similar to variables
### key words
return, if, for, var
These are telling you things about the workflow of the project

### syntax
Syntax will help you know how something is being used. 
So, a word that is followed with () will show you that this is setup to be a function.

This realization has helped me by how I start reading a new function. I am not looking at the words, but what the words are representing. 

What do these words mean? arguments, variables, key words, and/or syntax.

Then, by understanding their role in the function will privide clarity based on their name. 

Separate what it says vs. what it is.
1. what is it?
(arg, keyword, syntax, variable)
2. what is it for?

