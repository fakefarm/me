# Active Record Basics

[active record basics](http://edgeguides.rubyonrails.org/active_record_basics.html)


## Summary

Active Record gives us several mechanisms, the most important being the ability to:

- Represent models and their data.
- Represent associations between these models.
- Represent inheritance hierarchies through related models.
- Validate models before they get persisted to the database.
- Perform database operations in an object-oriented fashion.

Another advantage to using Active Record is that in a Ruby framework which manages more than data, your data is nicely formatted for other responsibilities, like being transported in a Rails Controller or an ERB view.

## additional column features

**created_at** - Automatically gets set to the current date and time when the record is first created.

**updated_at** - Automatically gets set to the current date and time whenever the record is updated.

**lock_version** - Adds optimistic locking to a model.

**type** - Specifies that the model uses Single Table Inheritance.

**(association_name)_type** - Stores the type for polymorphic associations.

**(table_name)_count** - Used to cache the number of belonging objects on associations. For example, a comments_count column in an Article class that has many instances of Comment will cache the number of existent comments for each article.

## Overrides

**override a table name**

```
class Product < ApplicationRecord
  self.table_name = "my_products"
end
```

If you do so, you will have to define manually the class name that is hosting the fixtures (my_products.yml) using the set_fixture_class method in your test definition:

```
class ProductTest < ActiveSupport::TestCase
  set_fixture_class my_products: Product
  fixtures :my_products
  ...
end
```

**override a primary_key**

It's also possible to override the column that should be used as the table's primary key using the ActiveRecord::Base.primary_key= method:

```
class Product < ApplicationRecord
  self.primary_key = "product_id"
end
```

## Exception

Save! and update! are stricter in that they raise the exception `ActiveRecord::RecordInvalid` if validation fails.

## Additional reading

[Martin Fowler's Active Record](https://www.martinfowler.com/eaaCatalog/activeRecord.html)
