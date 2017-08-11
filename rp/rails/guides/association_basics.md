# Active Record Associations

## Polymorphic Associations
A slightly more advanced twist on associations is the polymorphic association. With polymorphic associations, a model can belong to more than one other model, on a single association. For example, you might have a picture model that belongs to either an employee model or a product model. Here's how this could be declared:

```
class Picture < ApplicationRecord
  belongs_to :imageable, polymorphic: true
end
 
class Employee < ApplicationRecord
  has_many :pictures, as: :imageable
end
 
class Product < ApplicationRecord
  has_many :pictures, as: :imageable
end
```

You can think of a polymorphic `belongs_to` declaration as setting up an interface that any other model can use. From an instance of the Employee model, you can retrieve a collection of pictures: `@employee.pictures`.

Similarly, you can retrieve `@product.pictures`.

If you have an instance of the Picture model, you can get to its parent via `@picture.imageable`. To make this work, you need to declare both a foreign key column and a type column in the model that declares the polymorphic interface:

```
class CreatePictures < ActiveRecord::Migration[5.0]
  def change
    create_table :pictures do |t|
      t.string  :name
      t.integer :imageable_id
      t.string  :imageable_type
      t.timestamps
    end
 
    add_index :pictures, [:imageable_type, :imageable_id]
  end
end
This migration can be simplified by using the t.references form:

class CreatePictures < ActiveRecord::Migration[5.0]
  def change
    create_table :pictures do |t|
      t.string :name
      t.references :imageable, polymorphic: true, index: true
      t.timestamps
    end
  end
end
```


## Self Joins

In designing a data model, you will sometimes find a model that should have a relation to itself. For example, you may want to store all employees in a single database model, but be able to trace relationships such as between manager and subordinates. This situation can be modeled with self-joining associations:

```
class Employee < ApplicationRecord
  has_many :subordinates, class_name: "Employee",
                          foreign_key: "manager_id"
 
  belongs_to :manager, class_name: "Employee"
end
With this setup, you can retrieve @employee.subordinates and @employee.manager.
```

In your migrations/schema, you will add a references column to the model itself.

```
class CreateEmployees < ActiveRecord::Migration[5.0]
  def change
    create_table :employees do |t|
      t.references :manager, index: true
      t.timestamps
    end
  end
end
```

## Updating the Schema

Developers are responsible for maintaining your database schema to match your associations. In practice, this means two things, depending on what sort of associations you are creating.
For `belongs_to` associations you need to create foreign keys, and for  `has_and_belongs_to_many` associations you need to create the appropriate join table.

### has_and_belongs_to_many table

We pass id: false to create_table because that table does not represent a model. That's required for the association to work properly. If you observe any strange behavior in a has_and_belongs_to_many association like mangled model IDs, or exceptions about conflicting IDs, chances are you forgot that bit.

```
class CreateAssembliesPartsJoinTable < ActiveRecord::Migration[5.0]
  def change
    create_table :assemblies_parts, id: false do |t|
      t.integer :assembly_id
      t.integer :part_id
    end
 
    add_index :assemblies_parts, :assembly_id
    add_index :assemblies_parts, :part_id
  end
end
```

You can also use the method create_join_table

```
class CreateAssembliesPartsJoinTable < ActiveRecord::Migration[5.0]
  def change
    create_join_table :assemblies, :parts do |t|
      t.index :assembly_id
      t.index :part_id
    end
  end
end
```


## Controlling Association Scope

By default, associations look for objects only within the current module's scope. This can be important when you declare Active Record models within a module. For example:

```
module MyApplication
  module Business
    class Supplier < ApplicationRecord
       has_one :account
    end
 
    class Account < ApplicationRecord
       belongs_to :supplier
    end
  end
end
```

This will work fine, because both the Supplier and the Account class are defined within the same scope.

To associate a model with a model in a different namespace, you must specify the complete class name in your association declaration:

```
module MyApplication
  module Business
    class Supplier < ApplicationRecord
       has_one :account,
        class_name: "MyApplication::Billing::Account"
    end
  end
 
  module Billing
    class Account < ApplicationRecord
       belongs_to :supplier,
        class_name: "MyApplication::Business::Supplier"
    end
  end
end
```

## Bi-directional Associations (using `inverse_of`)

It's normal for associations to work in two directions, requiring declaration on two different models:

```
class Author < ApplicationRecord
  has_many :books
end
 
class Book < ApplicationRecord
  belongs_to :author
end
```

Active Record will attempt to automatically identify that these two models share a bi-directional association based on the association name. In this way, Active Record will only load one copy of the Author object, making your application more efficient and preventing inconsistent data:

```
a = Author.first
b = a.books.first
a.first_name == b.author.first_name # => true
a.first_name = 'David'
a.first_name == b.author.first_name # => true
```

Active Record supports automatic identification for most associations with standard names. However, Active Record will not automatically identify bi-directional associations that contain any of the following options:

- :conditions
- :through
- :polymorphic
- :class_name
- :foreign_key

For example, consider the following model declarations:

```
class Author < ApplicationRecord
  has_many :books
end
 
class Book < ApplicationRecord
  belongs_to :writer, class_name: 'Author', foreign_key: 'author_id'
end
```

Active Record will no longer automatically recognize the bi-directional association:

```
a = Author.first
b = a.books.first
a.first_name == b.writer.first_name # => true
a.first_name = 'David'
a.first_name == b.writer.first_name # => false

```
Active Record provides the `:inverse_of `option so you can explicitly declare bi-directional associations:

```
class Author < ApplicationRecord
  has_many :books, inverse_of: 'writer'
end
 
class Book < ApplicationRecord
  belongs_to :writer, class_name: 'Author', foreign_key: 'author_id'
end
```

By including the `:inverse_of` option in the has_many association declaration, Active Record will now recognize the bi-directional association:

```
a = Author.first
b = a.books.first
a.first_name == b.writer.first_name # => true
a.first_name = 'David'
a.first_name == b.writer.first_name # => true
```
There are a few limitations to `:inverse_of` support:

- They do not work with `:through` associations.
- They do not work with `:polymorphic` associations.
- They do not work with `:as` associations.

## reload_association

If the associated object has already been retrieved from the database for this object, the cached version will be returned. To override this behavior (and force a database read), call `#reload_association` on the parent object.

`@author = @book.reload_author`

## belongs_to options

The `belongs_to` association supports these options:

- :autosave
- :class_name
- :counter_cache
- :dependent
- :foreign_key
- :primary_key
- :inverse_of
- :polymorphic
- :touch
- :validate
- :optional


### counter_cache

With these declarations, asking for the value of `@author.books.size` requires making a call to the database to perform a COUNT(\*) query. To avoid this call, you can add a counter cache to the belonging model:

```
class Book < ApplicationRecord
  belongs_to :author, counter_cache: true
end
class Author < ApplicationRecord
  has_many :books
end
With this declaration, Rails will keep the cache value up to date, and then return that value in response to the size method.
```

Although the `:counter_cache` option is specified on the model that includes the `belongs_to` declaration, the actual column must be added to the associated (`has_many`) model. In the case above, you would need to add a column named **books_count** to the `Author` model.

### inverse_of

The `:inverse_of` option specifies the name of the `has_many` or `has_one` association that is the inverse of this association. Does **not work in combination with the :polymorphic options.**

```
class Author < ApplicationRecord
  has_many :books, inverse_of: :author
end
 
class Book < ApplicationRecord
  belongs_to :author, inverse_of: :books
end
```

More from [this post](https://www.viget.com/articles/exploring-the-inverse-of-option-on-rails-model-associations)

It turns out that associated objects do not point to the same in-memory objects by default. To illustrate:

```
prison = Prison.create(name: 'Bad House')
criminal = prison.criminals.create(name: 'Krazy 8')

# Without :inverse_of
criminal.prison == prison
# Prison Load (0.1ms) SELECT "prisons".* FROM "prisons" WHERE "prisons"."id" = 2 LIMIT 1
# => true

# With :inverse_of
criminal.prison == prison
# => true
```

When we call `criminal.prison` without `:inverse_of` on both the `:belongs_to` and `:has_many` associations, it will hit the database. With `:inverse_of`, if we already have that prison record in memory then `criminal.prison` will point to the same prison.

### includes (a scope)
 
You can use the includes method to specify second-order associations that should be eager-loaded when this association is used. For example, consider these models:

```
class Supplier < ApplicationRecord
  has_one :account
end
 
class Account < ApplicationRecord
  belongs_to :supplier
  belongs_to :representative
end
 
class Representative < ApplicationRecord
  has_many :accounts
end
```

If you frequently retrieve representatives directly from suppliers (@supplier.account.representative), then you can make your code somewhat more efficient by including representatives in the association from suppliers to accounts:

```
class Supplier < ApplicationRecord
  has_one :account, -> { includes :representative }
end
 
class Account < ApplicationRecord
  belongs_to :supplier
  belongs_to :representative
end
 
class Representative < ApplicationRecord
  has_many :accounts
end
```

## has_many options

### group (scope)

The group method supplies an attribute name to group the result set by, using a GROUP BY clause in the finder SQL.

```
class Author < ApplicationRecord
  has_many :line_items, -> { group 'books.id' },
                             through: :books
end
```


##  Single Table Inheritance

Sometimes, you may want to share fields and behavior between different models. Let's say we have Car, Motorcycle and Bicycle models. We will want to share the color and price fields and some methods for all of them, but having some specific behavior for each, and separated controllers too.

Rails makes this quite easy. First, let's generate the base Vehicle model:

`$ rails generate model vehicle type:string color:string price:decimal{10.2}`

Did you note we are adding a "type" field? Since all models will be saved in a single database table, Rails will save in this column the name of the model that is being saved. In our example, this can be "Car", "Motorcycle" or "Bicycle." STI won't work without a "type" field in the table.

Next, we will generate the three models that inherit from Vehicle. For this, we can use the `--parent=PARENT` option, which will generate a model that inherits from the specified parent and without equivalent migration (since the table already exists).

For example, to generate the Car model:

`$ rails generate model car --parent=Vehicle`

The generated model will look like this:

```
class Car < Vehicle
end
```

This means that all behavior added to Vehicle is available for Car too, as associations, public methods, etc.

Creating a car will save it in the vehicles table with "Car" as the type field:

```
Car.create(color: 'Red', price: 10000)

> INSERT INTO "vehicles" ("type", "color", "price") VALUES ('Car', 'Red', 10000)
Querying car records will just search for vehicles that are cars:
```

```
Car.all

# will run a query like:

SELECT "vehicles".* FROM "vehicles" WHERE "vehicles"."type" IN ('Car')
```
