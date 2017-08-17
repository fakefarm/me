# Layouts and Rendering in Rails

## render_to_string

If you want to see the exact results of a call to render without needing to inspect it in a browser, you can call render_to_string. This method takes exactly the same options as render, but it returns a string instead of sending a response back to the browser.

## Options for render

Calls to the render method generally accept five options:

- :content_type
- :layout
- :location
- :status
- :formats

## Finding Layouts

To find the current layout, Rails first looks for a file in `app/views/layouts` with the same base name as the controller. For example, rendering actions from the `PhotosController` class will use `app/views/layouts/photos.html.erb`

If there is no such controller-specific layout, Rails will use `app/views/layouts/application.html.erb` or `app/views/layouts/application.builder`. If there is no `.erb` layout, Rails will use a `.builder` layout if one exists.

## render vs redirect_to

`render` tells Rails which view (or other asset) to use in constructing a response. The `redirect_to` tells the browser to send a new request for a different URL.

# partials

## Partial Layouts

A partial can use its own layout file, just as a view can use a layout. For example, you might call a partial like this:

```
<%= render partial: "link_area", layout: "graybar" %>
```

This would look for a partial named `_link_area.html.erb` and render it using the layout `_graybar.html.erb`. Note that layouts for partials follow the same leading-underscore naming as regular partials, and are placed in the same folder with the partial that they belong to (not in the master layouts folder).

Also note that explicitly specifying `:partial` is required when passing additional options such as `:layout`.

## `local_assigns`

To pass a local variable to a partial in only specific cases use the local_assigns.

```
# index.html.erb

<%= render user.articles %>
```

```
# show.html.erb

<%= render article, full: true %>
```

```
# _article.html.erb

<h2><%= article.title %></h2>
<% if local_assigns[:full] %>
  <%= simple_format article.body %>
<% else %>
  <%= truncate article.body %>
<% end %>
```
This way it is possible to use the partial without the need to declare all local variables.


## automatic variables

Every partial also has a local variable with the same name as the partial (minus the underscore).

### :object option

You can pass an object in to a partials 'automatic' local variable via the :object option:

```
<%= render partial: "customer", object: @new_customer %>
```

Within the customer partial, the `customer` variable will refer to `@new_customer` from the parent view.


## partial shorthand syntax

If you have an instance of a model to render into a partial, you can use a shorthand syntax:

```
<%= render @customer %>
```

Assuming that the `@customer` instance variable contains an instance of the `Customer` model, this will use `_customer.html.erb` to render it and will pass the local variable, `customer`, into the partial which will refer to the `@customer` instance variable in the parent view.

## \_counter variable

A counter variable is available within a partial called by the collection, named after the member of the collection followed by `_counter`.

For example, if you're rendering `@products`, within the partial you can refer to `product_counter` to tell you how many times the partial has been rendered.

NOTE - This does not work in conjunction with the  as: :value option.

## Spacer Templates
`<%= render partial: @products, spacer_template: "product_ruler" %>`

Rails will render the `_product_ruler` partial (with no data passed in to it) between each pair of `_product partials`.

## Rendering Collections

Partials are very useful in rendering collections. When you pass a collection to a partial via the :collection option, the partial will be inserted once for each member in the collection:

`index.html.erb`

```
<h1>Products</h1>
<%= render partial: "product", collection: @products %>
```

\_product.html.erb

```
<p>Product Name: <%= product.name %></p>
```

When a partial is called with a pluralized collection, then the individual instances of the partial have access to the member of the collection being rendered via a variable named after the partial. In this case, the partial is `_product`, and within the `_product` partial, you can refer to product to get the instance that is being rendered.

There is also a shorthand for this. Assuming `@products` is a collection of product instances, you can simply write this in the `index.html.erb` to produce the same result:

```
<h1>Products</h1>
<%= render @products %>
```

Rails determines the name of the partial to use by looking at the model name in the collection. In fact, you can even create a heterogeneous collection and render it this way, and Rails will choose the proper partial for each member of the collection:

index.html.erb

```
<h1>Contacts</h1>
<%= render [customer1, employee1, customer2, employee2] %>
```

customers/\_customer.html.erb

```
<p>Customer: <%= customer.name %></p>
```

employees/\_employee.html.erb

```
<p>Employee: <%= employee.name %></p>
```

In this case, Rails will use the customer or employee partials as appropriate for each member of the collection.

In the event that the collection is empty, render will return nil, so it should be fairly simple to provide alternative content.

```
<h1>Products</h1>
<%= render(@products) || "There are no products available." %>
```

## TODO

Better understand how collections work with partials (Section - 3.4.5 Rendering Collections)
