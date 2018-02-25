# Active Record Validations

Take time to think about the kind of data allowed in the application. It's kind, submission, characteristics, and content. It's better to be limited in data options than to be casual and have to clean up a huge mess later.

## Summary

Model-level validations are the best way to ensure that only valid data is saved into your database. They are database agnostic, cannot be bypassed by end users, and are convenient to test and maintain. 

## Validation Alternatives

- database constraints
- client-side validations
- controller-level validations

Database constraints and/or stored procedures make the validation mechanisms database-dependent and can make testing and maintenance more difficult. However, if your database is used by other applications, it may be a good idea to use some constraints at the database level. Additionally, database-level validations can safely handle some things (such as uniqueness in heavily-used tables) that can be difficult to implement otherwise.

Client-side validations can be useful, but are generally unreliable if used alone. If they are implemented using JavaScript, they may be bypassed if JavaScript is turned off in the user's browser. However, if combined with other techniques, client-side validation can be a convenient way to provide users with immediate feedback as they use your site.

Controller-level validations can be tempting to use, but often become unwieldy and difficult to test and maintain. Whenever possible, it's a good idea to keep your controllers skinny, as it will make your application a pleasure to work with in the long run.

## two types of AR objects

Active Record uses the `new_record?` instance method to determine whether an object is already in the database or not. 

There are two kinds of Active Record objects: those that correspond to a row inside your database and those that do not. When you create a fresh object, for example using the new method, that object does not belong to the database yet. Once you call save upon that object it will be saved into the appropriate database table.

## Triggering validations

The following methods trigger validations, and will save the object to the database only if the object is valid:

- create -  returns the object
- create! - raise an exception if the record is invalid.   
- save - returns true or false
- save! - raise an exception if the record is invalid
- update - returns true or false
- update! - raise an exception if the record is invalid

## Skipping Validations
The following methods skip validations, and will save the object to the database regardless of its validity. They should be used with caution.

- decrement!
- decrement_counter
- increment!
- increment_counter
- toggle!
- touch
- update_all
- update_attribute
- update_column
- update_columns
- update_counters

Note that save also has the ability to skip validations if passed validate: false as an argument. This technique should be used with caution.

`save(validate: false)`

## valid? and invalid?  

Both methods trigger validations. returning true if any errors were found in the object, and false otherwise. `invalid?` is simply the inverse of `valid?`.

## errors.details
To check which validations failed on an invalid attribute, you can use errors.details[:attribute]. It returns an array of hashes with an :error key to get the symbol of the validator:

```
class Person < ApplicationRecord
  validates :name, presence: true
end
 
>> person = Person.new
>> person.valid?
>> person.errors.details[:name] # => [{error: :blank}]
```

## validation helpers

Each helper accepts an arbitrary number of attribute names, so with a single line of code you can add the same kind of validation to several attributes.

## validation options

### :on

The `:on` option lets you specify when the validation should happen. The default behavior for all the built-in validation helpers is to be run on save (both when you're creating a new record and when you're updating it). 

If you want to change it, you can use on: :create to run the validation only when a new record is created or on: :update to run the validation only when a record is updated.

```
class Person < ApplicationRecord
  # it will be possible to update email with a duplicated value
  validates :email, uniqueness: true, on: :create
 
  # it will be possible to create the record with a non-numerical age
  validates :age, numericality: true, on: :update
 
  # the default (validates on both create and update)
  validates :name, presence: true
end
```

You can also use on: to define custom context. Custom contexts need to be triggered explicitly by passing name of the context to valid?, invalid? or save.

```
class Person < ApplicationRecord
  validates :email, uniqueness: true, on: :account_setup
  validates :age, numericality: true, on: :account_setup
end

person = Person.new
person.valid?(:account_setup)
``` 

executes both the validations without saving the model. 

And `person.save(context: :account_setup)` validates person in account_setup context before saving. On explicit triggers, model is validated by validations of only that context and validations without context.

## Conditional Validation

Sometimes it will make sense to validate an object only when a given predicate is satisfied. You can do that by using the :if and :unless options, which can take a symbol, a string, a Proc or an Array. You may use the :if option when you want to specify when the validation should happen. If you want to specify when the validation should not happen, then you may use the :unless option.

You can associate the `:if` and `:unless` options with a symbol corresponding to the name of a method that will get called right before validation happens. This is the most commonly used option.

```
class Order < ApplicationRecord
  validates :card_number, presence: true, if: :paid_with_card?
 
  def paid_with_card?
    payment_type == "card"
  end
end
```

