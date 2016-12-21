# Testing for zombies

Testing is about 
- mentality. 
when just starting to code there is to much to learn so testing unfortunately falls off. But as things start to make more sense you should work to improve your mentality and process about code. Which means, learning to test first. 

- syntax
in ruby the two main winners are RSpec and Minitest. However Rails has it's own flavor of Mintest. Rails actually started with Test::Unit. Minitest has both expecation and assertion syntax

- setup
you need to learn to wire up your code, test, and how to run it. That is a skill in itself. 

- tests
you test with assertions which can take a different points of view about your tests. Ultimately though, you are only testing for a few specific, simple ideas - if something returns (or is) true, if it exists, or the content matches what you want.



## Expectations

When testing for a `raise` you need to wrap assert in parens and the test needs to be in a block.

    assert_raise(RuntimeError) { z.zombify }

## Testing updates
when testing that an attribute has been updated, be aware that in some situations you will need to use `#reload` to make sure the change occurred b/n the setup version and the version changed in the test.