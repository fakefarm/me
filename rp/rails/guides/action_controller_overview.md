# Action Controller Overview

## Array Parameters

To send an array of values, append an empty pair of square brackets "[]" to the key name:

```
GET /clients?ids[]=1&ids[]=2&ids[]=3
```

The value of params[:ids] will now be ["1", "2", "3"]. Note that parameter values are always strings.

## Hash Parameters

To send a hash, you include the key name inside the brackets:

```
<form accept-charset="UTF-8" action="/clients" method="post">
  <input type="text" name="client[name]" value="Acme" />
  <input type="text" name="client[phone]" value="12345" />
  <input type="text" name="client[address][postcode]" value="12345" />
  <input type="text" name="client[address][city]" value="Carrot City" />
</form>
```

When this form is submitted, the value of `params[:client]` will be `{ "name" => "Acme", "phone" => "12345", "address" => { "postcode" => "12345", "city" => "Carrot City" } }`. Note the nested hash in `params[:client][:address]`.

## Dynamic Pretty URLs

Consider a listing of clients where the list can show either active or inactive clients. We can add a route which captures the `:status` parameter in a "pretty" URL:

`get '/clients/:status' => 'clients#index', foo: 'bar'`

In this case, when a user opens the URL `/clients/active`, `params[:status]` will be set to `"active"`. When this route is used, `params[:foo]` will also be set to "bar", as if it were passed in the query string.

### tags

`/tags/:tag`

This would create a simple search where the index would show the tag passed in, or if there is not an associated tag, you could return a 'no tags found with that name'. 
