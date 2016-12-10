rails 4 updates

thread configurations (request to use puma)

updates to routes and removing duplication using concerns
prefer us not to use match (which makes me wonder how it got in to begin with)

## New Methods
### #find_by

    params = {title: 'books', author: 'dave'}
    Post.find_by(params)
    

### #find_or_create_by

    Post.find_or_create_by(title: 'book')

### #find_or_initialize_by

### #update
rails 4 version of `#update_attributes`

### #update_columns
rails 4 version of `#update_attribute` `#update_column`. `#update_columns` skips all validations

### #all
All is now an ActiveRecord::Relation and can have chainable methods

### #none
Use `#none` instead of `[]` in order to keep the class the same. This will keep your code from being cluttered with extra conditionals

### #note

`Post.where.not(author: author)`

### #order
In rails 3 `default_scope` took precedence but in Rails 4, new calls are prefixed. 

You can also pass a hash for options

`User.order(:name, created_at: :desc)`

### #references
In relational references you need to explicitly call `references` if you are referencing a table in the string.

    Post.includes(:comments)
        .where("comments.name = 'foo'")
        .references(:comments)

But if you are referncing with a hash, you don't need to use `references`    

    Post.includes(:comments)
        .where(comments: {name: 'foo'})

    Post.includes(:comments)
        .where('comments.name' => 'foo')


## Scopes

Syntax uses procs now

`scope :sold, -> { where(price: 5) }`

**chaining scopes**

don't forget you can chain scopes

`scope :bulk_sold, -> { sold.where(amt: 10) }`

**Default scopes**
Can use either procs or blocks

    default_scope, -> { where(completed: false) }
    default_scope, { where(completed: false) }
    


## ActiveModel::Model

`include ActiveModel::Model` to be able to have your PORO's act like `ActiveRecord` objects without being attached to `ActiveRecord`. _Nice!_