Working with API's

## Headers
Checking the response headers when debugging is really helpful because you can see what is being passed between client and server. 

### Mime::SET
Check this constant to view the 21 media types that Rails ships with.

### Important headers
- content type
Even though rails has a `respond_to` block that serves content based on the dot notation (.json, .xml) it's not universally supported. The way servers know which type of content to send is based on the MimeType (aka 'media type') you send in the accept header. The browser will respond to with the content type in the header of a text based on which format. for example `Content-Type: application/json`
- accept
- 

### status codes
- 200

- 201 
post was successful

- 204
success but not expecting a response body.

- 401
unauthorized - meaning request requires authentication

- 422
unprocessable entity - means the issue is result of a client error.

### authenticity tokens
can be bypassed in a pure API because the requests will be accompanied by auth tokens which API users are approved with before signing up.


## Versioning 
Versioning helps ensure that you do not accidentally create breaking changes to client's consumption. Which makes me wonder if this is another way in which the open-closed principal is applied. 

### Two Approaches
There are two approaches to managing versioning. One is through the URI and the other is through the accept headers. 

#### URI
Rails makes versioning easy with use of `namespace` method in routes and wrapping controllers with modules and placing them in similarly named directories.

#### Headers

## Authentication
### Basic auth
Basic auth is supported by rails, http, and even curl. But it is not secure. So you will need to decide if it's enough security or in need of more. 

Credentials must be provided using the `Authorization` header which is the combination of the term `Basic` plus a Base64 encoded

Rails supports basic authentication out of the box. It does so by providing a method `authenticat_or_request_with_basic` which reads and decodes username and password from `Authorization` header like so;


