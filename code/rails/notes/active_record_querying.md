# Active Record Query Interface

## .find

The primary operation of `Model.find(options)` can be summarized as:

- Convert the supplied options to an equivalent SQL query.
- Fire the SQL query and retrieve the corresponding results from the database.
- Instantiate the equivalent Ruby object of the appropriate model for every resulting row.
- Run after_find and then after_initialize callbacks, if any.

You can use `find` to query for multiple objects. Call the find method and pass in an array of primary keys. like so `clients = Client.find([1, 10])`. Note the `find` method will raise an `ActiveRecord::RecordNotFound` exception unless a matching record is found for all of the supplied primary keys.

## Finding on large data sets

If we have a large number of records, the entire collection may exceed the amount of memory available. `User.all.each` instructs Active Record to fetch the entire table in a single pass, build a model object per row, and then keep the entire array of model objects in memory.

`find_each`, retrieves a batch of records and then yields each record to the block individually as a model.

`find_in_batches`, retrieves a batch of records and then yields the entire batch to the block as an array of models.

## Consider this

The visible_articles method below is expected to return a Relation.
 
```
@articles = current_user.visible_articles.where(name: params[:name])

def visible_articles
  case role
  when 'Country Manager'
    Article.where(country: country)
  when 'Reviewer'
    Article.published
  when 'Bad User'
    Article.none # => returning [] or nil breaks the caller code in this case
  end
end
```

## Joins in associations

Active Record lets you use the names of the associations defined on the model as a shortcut for specifying JOIN clauses for those associations when using the joins method.

`Category.joins(:articles)`

This produces:

```
SELECT categories.* FROM categories
  INNER JOIN articles ON articles.category_id = categories.id
```

Or, in English: "return a Category object for all categories with articles". Note that you will see duplicate categories if more than one article has the same category.

If you want unique categories, you can use `Category.joins(:articles).distinct`.


## Solution to N + 1 queries problem

Active Record lets you specify in advance all the associations that are going to be loaded by specifying the `includes` method. `includes` ensures that all of the specified associations are loaded using the minimum possible number of queries. The following code will execute 2 queries as opposed to 11.

```
clients = Client.includes(:address).limit(10)
 
clients.each do |client|
  puts client.address.postcode
end
```


## Using conditionals in scopes

Your scope can utilize conditionals:
```
class Article < ApplicationRecord
  scope :created_before, ->(time) { where("created_at < ?", time) if time.present? }
end
```

Like the other examples, this will behave similarly to a class method.

```
class Article < ApplicationRecord
  def self.created_before(time)
    where("created_at < ?", time) if time.present?
  end
end
```

However, there is one important caveat: A scope will always return an `ActiveRecord::Relation` object, even if the conditional evaluates to `false`, whereas a class method, will return `nil`. This can cause `NoMethodError` when chaining class methods with conditionals, if any of the conditionals return false.

## connection#select_all

`connection#select_all` will retrieve objects from the database using custom SQL just like find_by_sql but will not instantiate them. Instead, you will get an array of hashes where each hash indicates a record.

```
Client.connection.select_all("SELECT first_name, created_at FROM clients WHERE id = '1'")
# => [
#   {"first_name"=>"Rafael", "created_at"=>"2012-11-10 23:23:45.281189"},
#   {"first_name"=>"Eileen", "created_at"=>"2013-12-09 11:22:35.221282"}
# ]
```
