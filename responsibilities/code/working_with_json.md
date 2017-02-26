# Working with JSON
Applications will either render HTML or JSON. JSON should be viewed as a first class citizen. As such, there are some tools to help it be as so while keeping code DRY. There are a variety of use cases with JSON so these are general notes to know about managing JSON. 

There are times when JSON is a direct match to HTML content. Other times though, you might need to limit, expand, or alter the content provided as JSON because the data is consumed for other purposes. 

Rails provides a few concepts out of the box; `respond_to` block and the `respond_with` method if `respond_to` is set at the class level. Also, rails comes with `jbuilder` which is a special DSL for managing JSON. 

However, if JSON is to be a first class citizen, you should consider using the ActiveModel Serializer gem. 

## Introducing ActiveModel Serializer
Aka (AMS) gem to help manage JSON in an Object oriented way. Serializers will be consolidated in `/app/serializers` and receive some content provided in the controller (and model) they are supporting. For example, AMS objects will be given the `current_user` method since that name is a convention. Of course, you can use another method like `current_session` but you will assign it to serialization_scope, like so

	class ApplicationController < ActionController::Base
	  serialization_scope :current_session
	end


## Special methods
AMS has some methods to be aware of.

### object
`object` is the method that is what is passed in.

### attributes
`attributes` is the high level of the object’s attributes. SOmetimes you will want to override this.

### JSON.parse
Keys are returned as a string. but if you want them to be symbols like a traditional hash then you should pass the option `symbolize_names: true` like so;

    response = JSON.parse(response.body, symbolize_names: true)