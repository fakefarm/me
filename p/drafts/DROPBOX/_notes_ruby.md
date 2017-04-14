### General lessons to 
Beware of magic numbers


Procs

When there is a line in your array that you don't want to read, use;

    next if =~ / reg ex / 


limit the arguments.


chain methods together when appropriate

The initialize method is a kickstarter

### Include vs. Extend

You can extend into objects but you cannot include into objects

#### Include
brings methods into instance of class

#### Extend
puts methods into class instead of instances



## A description of a line:

    $:.unshift File.expand_path(File.dirname(__FILE__) + '/..')

###$:
Global varaible

###.unshift

method on the array

###File

Ruby Class

### .expand_path()
Method called on File Class to do...?

### File.dirname()

Method called on File Class
### __FILE__

?: Current position of File

### + '/..'
?: Add this to move up a directory