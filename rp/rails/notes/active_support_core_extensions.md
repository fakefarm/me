# Active Support Core Extensions

Active Support is a collection of helpful methods to Ruby. It is overwhelming and not very effective for me to simply read the list of capabilities without a sense of context when or how I might use them. So, I'm going through each section with an attempt to articulate when I might use these particular methods. Of course, these scenarios are not the only way to use them and in fact, they may even be wrong. However, I would rather remember methods for a bad reason than not remember them for a good one.

## List of extensions to go through

[x] All Objects
[x] Module
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
### class_eval(\*args, &block)

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

## Scenario 10 - better app DSL

### alias_attribute

Model attributes have a reader, a writer, and a predicate. You can alias a model attribute having the corresponding three methods defined for you in one shot. For example, this can be meaningful for authentication code.

```
class User < ApplicationRecord
  # refer to the email attribute as "login".
  alias_attribute :login, :email
end
```

## Scenario 11 - breaking up big objects with Method Delegation


### delegate

The macro delegate offers an easy way to forward methods.

Let's imagine that users in some application have login information in the User model but name and other data in a separate Profile model:

```
class User < ApplicationRecord
  has_one :profile
end
```

With that configuration you get a user's name via their profile, user.profile.name, but it could be handy to still be able to access such attribute directly:

```
class User < ApplicationRecord
  has_one :profile
 
  def name
    profile.name
  end
end
```

That is what delegate does for you:

```
class User < ApplicationRecord
  has_one :profile
 
  delegate :name, to: :profile
end
```

It is shorter, and the intention more obvious.

The method must be public in the target.

The delegate macro accepts several methods:

`delegate :name, :age, :address, :twitter, to: :profile`

#### using nil

By default, if the delegation raises NoMethodError and the target is nil the exception is propagated. You can ask that nil is returned instead with the `:allow_nil` option:

`delegate :name, to: :profile, allow_nil: true`

With `:allow_nil` the call `user.name` returns `nil` if the `user` has no profile.

#### prefix for clarity

The option `:prefix` adds a prefix to the name of the generated method. This may be handy for example to get a better name:

`delegate :street, to: :address, prefix: true`

The previous example generates `address_street` rather than `street`.

Since in this case the name of the generated method is composed of the target object and target method names, the :to option must be a method name.


### delegate_missing_to

Imagine you would like to delegate everything missing from the User object, to the Profile one. The delegate_missing_to macro lets you implement this in a breeze:

```
class User < ApplicationRecord
  has_one :profile
 
  delegate_missing_to :profile
end
```
