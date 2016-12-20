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

- 422
unprocessable entity - means the issue is result of a client error.

### authenticity tokens
can be bypassed in a pure API because the requests will be accompanied by auth tokens which API users are approved with before signing up.

