# api's on rails

all good responses require at least 3 things;

- content

- status

- location

**content**
the content is what you send back. It can be nothing, or it can be a representation of the newly created data.

**status**
the status is the code to inform what happened in a 'tl;dr' format.

**location** 
this is where the content lives.

## query params

there are 3 times to use query params; 
- search
- 
- 


## controllers
**render**

### errors
if there are errors, use `422` as the status code

## routes.rb

**with options**

a way to clean up duplcation

```
SurvivingRails::Application.routes.draw do
  with_options only: :index do |list_only|
    list_only.resources :zombies
    list_only.resources :humans
    list_only.resources :medical_kits
    list_only.resources :broadcasts
  end
  
end
```

**namespace**

```
  namespace :api, path: '/', contraints: { subdomain: 'api' }  do
    resources :zombies
   resources :humans
  end
```
notice we can make the namespace stay clean yet at the url '/' rather than '.com/api/' by using the path. contraints will explain that we're headed to an `api.eamples.com`


## testing



**response method**
after issuing a `get`, `post` or other HTTP method in your test you will be provided with a `response` object that has the following methods on it;

**location**
this is where the resource will be found.

**status**
This will inform of the status codes as symbols or strings; 200, 201, ok, etc.

**body**
For example, if we know we'll use json to render the repsonse, then we want to expect json our way in testing. it will be found in the `response.body` which we want to parse in order to use our own data. This is when `JSON.parse` comes in handy to convert our json back into ruby. JSON will make the ruby hash keys as 'strings' but we want them to be symbols so we also pass `symbolize_names: true` to coerce the data one more time. like so;

```
 humans = JSON.parse(response.body, symbolize_names: true)
```

then, humans becomes a `#hash` that we can run some specs on that response body like; 

```
  names = humans.collect { |human| human[:name] }
  assert_includes names, 'John'
  refute_includes names, 'Allan'
```


**content_type**
The content type is part of headers.

for example; `assert_equal Mime::JSON, response.content_type`



## assertions

**assert_equal**
**assert_inclues**
**refute_empty**
**refute_inclues**

### content headers

When testing content headers using methods like `get`, the arguments are the following

```
    get '/humans', {}, {'Accept' => Mime::JSON }
```

The 3rd argument in that is the header info.


## TODO

- jbuilder
- use locales and header key 'Accept-lanugage' to do other languages (more on this later)

## Questions

`{ 'Accept' => Mime::JSON, 'Content-Type' => Mime::JSON.to_s }`

what's the difference or reason for passing both? I just need to remember that the headers have these weird technical configurations to look up.