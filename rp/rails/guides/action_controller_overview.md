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


## Sessions, Cookies

Rails gives us session and cookie management for free. Both of which are hashes and are managed as such. Cookies are stored in `cookies`. Sessions are stored in `session`

### Deleting sessions and cookies

Note that while for session values you set the key to `nil`, to delete a cookie value you should use `cookies.delete(:key)`.

### flash

Flash messages are apart of the session with a convenient syntax, `flash`
Flash messages will only remain during the next request. However, if you want a flash message to occur in the current request, for example a save error. use `flash.now`

```
  # snippet..
  else
    flash.now[:error] = "Could not save client"
    render action: "new"
  end
```


## Form Authenticity tokens

Rails adds this token to every form that's generated using the form helpers, so most of the time you don't have to worry about it. If you're writing a form manually or need to add the token for another reason, it's available through the method `form_authenticity_token`:

The `form_authenticity_token` generates a valid authentication token. That's useful in places where Rails does not add it automatically, like in custom Ajax calls.

## request object

The `request` object contains a lot of useful information about the request coming in from the client. Among the properties that you can access on this object are:

- host
- domain(n=2)
- format
- method
- get?, post?, patch?, put?, delete?, head?
- headers
- port
- protocol
- query_string
- remote_ip
- url

## path_parameters, query_parameters, and request_parameters

Rails collects all of the parameters sent along with the `request` in the params hash, whether they are sent as part of the query string or the post body. The `request` object has three accessors that give you access to these parameters depending on where they came from. The `query_parameters` hash contains parameters that were sent as part of the query string while the `request_parameters` hash contains parameters sent as part of the post body. The `path_parameters` hash contains parameters that were recognized by the routing as being part of the path leading to this particular controller and action.

## response object

The `response` object is not usually used directly, but is built up during the execution of the action and rendering of the data that is being sent back to the user. Some helpful properties include;

- body
- status
- location
- content_type
- charset
- header
