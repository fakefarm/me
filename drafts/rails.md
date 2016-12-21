# RAILS NOTES  

# Questions

_notes from code school api's on rails course_

```
class ListingHumansTest < ActionDispatch::IntegrationTest
  setup { host! 'api.example.com' } # 1

  test 'returns human by id' do
    h = Human.create!(name: 'Ash') # 2
    get "humans/#{h.id}" # 3
    assert_equal 200, response.status # 4
    
    resp = JSON.parse(response.body, sybolize_name: true) # 5
    assert_equal h.name, resp[:name] # 6
  end
end
```

## Six things going on in this test

1. In order to test a subdomain we must override `example.com`

2. create the human you want to be

3. `get` is a testing method to make a call to the endpoint as a string, or `action`, or even another rack appliction

4. `response` is a testing method that we get and can see it's status and body

5. the response we receive is formatted as `json` since it's over the wire, so we need to parse it back into a ruby `hash`. Pass the `sybolize_name:` flag so that the keys become sybols

6. test that the data we created is also the data that is in the response to demonstrate we took a full lap.

## generate controller without tests

`rails g controller new —no-test-framework`

adding `—no-test-framework` will prevent the generator from creating view and controller specs. We are going to focus on feature and model specs. 


Rails 4 Zombie Outlaws notes

## Error messages
Don't be afraid to google the error. 

## Configuration
Recognize that all the configs you are not to be memorized - rather discovered when they are needed.

## before actions
Before actions are typically used to dry up the task of gathering variable or various forms of authentication.

## Flash syntax improvement
Flashes might feel like a novelty concept but they do come in handy for providing users with temporary information. Rails 4 introduced a new syntax for showing flash messages. In Rails 3 we had to use `<%= flash[:success] %>` but in Rails 4 we can now just type `<%= success %>`. 

If we want to use our own custom flash types with this syntax, then we simply need to register them in the controller, (most likely ApplicationController) with `add_flash_types :sunshine`

## collection_radio_buttons and collection_check_boxes
new with rails 4

    <%= collection_radio_buttons(:object, 
                                 :method, 
                                 :collection, 
                                 :value_method, 
                                 :text_method) %>

    <%= collection_check_boxes(:object, 
                               :method, 
                               :collection, 
                               :value_method, 
                               :text_method) %> 
## creating JSON with pure ruby
rather than build with jbuilder, we can create with pure ruby now. file just needs to end wih `.ruby`

## performance testing
Rails used to have performance testing installed but decided to remove it. If I want to add it, then look into it. It requires two gems which will then provide a generator.


## Memcache now uses Dalli


# Caching

Caching is a collection of techniques to ensure your app can run as fast as possible. Those include ETags, cache blocks in views, and `finish_when` methods inside controller actions.

## Controller parts 

### ETags
ETags help identify if a page has modified. When sending the ETAG Back, the name is changed from `ETAG` to `If-None-Match`

#### declarative etags
You can DRY up the controller by setting etags up top of controller. YOu're not bound by one. You can have as many as needed

    etag { current_user.id }
    etag { current_user.age}    


### Fresh_when
- creates an etag for us
- checks if client has sent an etag with request that matches ETag is just created.

You can add a `fresh_when` method inside a controller to let the server know what is important for checking page freshness

## View parts

in a view you wrap partials and views with cache blocks;

    <% cache [object] do %>
        <%= render [partial] %>
    <% end %>
    
    

## Model parts

Models which have a relationship that is cached you need to add the `touch: true` to associations

    class Zombie < ActiveRecord::Base
      belongs_to :weapon, touch: true
    end

# Turbolinks
For the most part, Turbolinks is a technology we get for essentially free. The term free should make you pause because nothing in life is free. The cost is primarily an awareness of how it works becuase it is a gain from using existing technology. Turbolinks is built on AJAX and if you understand that then you should feel comfortable. And by essentially free, you need to be aware that Turbolinks uses a few different JavaScript events which you should switch to using if you truly commit to using Turbolinks. Other than that, the page will be all turbolinks and you will need to opt out of it using a `'data-no-turbolink' => true` attribute for the divs you don't want it to be used.

## Events
Use these events instead
- `page:load` instead of `load`
- `page:fetch`
- `page:change`

# Helpful methods

## transaction block

    self.class.transaction do
      self.update!
      self.items.each {…}
    end

using the `transaction` method ensures that each line in the block is done and passes. It's a way to group all the required content and ensure all passes for the transaction to save. If any of the items in the `transaction` block fails then the record is not saved.

## Using PORO's
Using a PORO is a great way to abstract data out of AR objects. In order to use these, you will typically pass in an AR object and do actions on it. That object can't necssarily `save` or `crate` so you will bring that final call from the controller. (I think..)

Some common examples of doing so include;
- UserRegistration
- PlanSubscription
- CreditCardCharge
- ShoppingCart


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

##  Rails progress updates (12/14/16)
- overrode the STI to use `type`
- pre-populated a migration
- rolled back the migration with `step=1` flag
- figured out some more ransack and how to break it open. It helped me see how to present a _hack_ that helped derive the solution, which was to pre-populate the db. 
- [logger.info](http://guides.rubyonrails.org/debugging_rails_applications.html#console)


## #pluck method
A performance optimization technique is to use pluck for situations when you want to avoid the memory consumption of generating unnecessary ActiveRecord Objects. 

## Filtering sensitive data

To filter sensetive data from logs the same way passwords are filtered, simply append the items in `config/application.rb` like so;

		config.filter_parameters = [:password, :ssn]

## abstract! method
When dealing with inheritance in Rails you can notify other developers from calling methods by placing the `abstract!` up top of the file. It is used to indicate that a parent class's methods should not be used directly.

