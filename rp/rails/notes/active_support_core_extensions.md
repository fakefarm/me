# Active Support Core Extensions

Active Support is a collection of helpful methods to Ruby. It is overwhelming and not very effective for me to simply read the list of capabilities without a sense of context when or how I might use them. So, I'm going through each section with an attempt to articulate when I might use these particular methods. Of course, these scenarios are not the only way to use them and in fact, they may even be wrong. However, I would rather remember methods for a bad reason than not remember them for a good one.

## List of extensions to go through

[x] All Objects
[ ] Module
[ ] Class
[ ] String
[ ] Numeric
[ ] Integer
[ ] BigDecimal
[ ] Enumerable
[ ] Array
[ ] Hash
[ ] Regexp
[ ] Range
[ ] Date
[ ] DateTime
[ ] Time
[ ] File
[ ] Marshal
[ ] NameError
[ ] LoadError


## Scenario 1: checking the contents

### blank? and present?

The following values are considered to be blank in a Rails application:

- nil and false,
- strings composed only of whitespace (see note below),
- empty arrays and hashes, and
- any other object that responds to empty? and is empty.

Note that numbers are not mentioned. In particular, 0 and 0.0 are not blank.

The method present? is equivalent to !blank?.

### presence

## Scenario 2: duplicating objects

### duplicable?
### deep_dup

## Scenario 3 - working with unstable data, casual data
### try

## Scenario 4 - when would I use class eval?
### class_eval(*args, &block)

## Scenario 5 - type checking?
### acts_like?(duck)

## Scenario 6 - using pretty params

### to_param

### to_query

## Scenario 7 - Drying up code

### with_options

## Scenario 8 - Working with JSON

### JSON support

## Scenario 9 - debugging help

### Instance Variables

## Instance_values

The method `instance_values` returns a hash that maps instance variable names without "@" to their corresponding values. Keys are strings:

```
class C
  def initialize(x, y)
    @x, @y = x, y
  end
end
```
 
`C.new(0, 1).instance_values # => {"x" => 0, "y" => 1}`

### Silencing Warnings and Exceptions

### in?
