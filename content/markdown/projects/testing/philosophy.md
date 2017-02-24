philosophy

notes from [breaking up test suite](http://blog.testdouble.com/posts/2014-05-25-breaking-up-with-your-test-suite.html)

## Confidence and Understanding
Tests should have 1 point of confidence and 1 point of understanding. 

_What will I understand about the code from this file?_

_What confidence will be gained from this file?_


## What is the purpose of our software?
- generate revenue?
- or cut costs

## SAFE tests
**Goals**
- keep the product simple (from the outside)
- verify production is working

SAFE tests is an acronym describing the highest level of technical coverages. The acronym comes from combining terms that all mean the same level of tests. So you can use these terms interchangeably.  _Smoke_, _Acceptance_, _Feature_, and _End to End_ testing. Technically you could use the term _integration_ at this level but the truth is integration is not a useful word.

Five questions to ask
_1. Who is the user?_
This should as close to the a user as possible

_2. What is the confidence?_  
  
_3. What is our understanding?_

_4. What are guidelines when writing these tests?_

(For safe tests it should know any internal API's)

## consumption tests
**goals**
- safely change and refactor
- make our public API easy to use

## contract tests
Speedier feedback
- your needs become part of your consumption suite
- I am the consumer / user of this.

Dependencies that we own behave how we need them to.