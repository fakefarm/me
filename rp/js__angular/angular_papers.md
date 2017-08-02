# Angular papers

## About
Angular is html for webapps. It uses JS inline and know of the page's state. it handles lists, and is aware of the current data and data that is to come.

## ng-model
all of angular is housed in the `ng` module that is auto-loaded with `ng-app`. 

## modules
angular is based off of 

## filters

## $scope
When building with scopes, use objects instead of primitives. 

    $scope.user =  'Dave'         // bad
    $scope.user = { name: 'Dave'} // good

## the power of dependency injection


### Angular and the outside world.
Angular doesn't know how to talk with the non-angular world, so you need to learn how they talk with each other.

## Controllers
Note that controllers should not manage state. They should be passing that responsibility to a Service. 
Use the `as` syntax, like "MainController as main"

## Routes
Need $routeParams
.when()
.otherwise()
use `ng-view` to show the route
angular uses paths with colon's (/:id )

## Digest Loop

## caching

## Declarative programming

## Questions
what's the difference between $broadcast & $watch?
$watch vs. $on?
what's the difference between a provider and service?
(I think it's that a provider is designed to be run at config)
What's the level of status codes?
Do I pass function arguments into directives as attributes? 

<div myThing='is_this_a_function_arg?'></div>

### Service/factory syntax
- when should I be using 'this' with the variable? (I think it's with the Service) since it's a Constructor. Yeah?
- when do I use the return value?
- when do I know to add another function?

## Events
Angular has built in events like. 
$locationChangeStart

## Services
Services are how controllers communicate with each other, as well as how controllers work with directives. 
$attrs
$anchorScroll
$templateCache
$cookieSTore
$cacheFactory
$location
$http
$q
$window
$log
$interpolate
$setPristine (to reset forms)
$eval
$exceptionHandler
$parent
$new (creates a new child scope)
$rootScope
$parse (for expressions)
$interpolate (for fragments)
$compileProvider

### $injector (and the .invoke() function)
Injector happens once per app. In doing so, it runs $compile
### $compile 
mostly used in directives,
$compile converts templates into html and binds to scope.
Somehow related to `compositeLink()`

### $digest
`$digest` It is connected to `$rootScope` and is the angular event loop. This is watching all of the $watches on Angular. But, don't use $digest, use `$apply` instead. Here is the flow;

- $apply calls $digest
- $digest reviews the $watchList
- $watchList manages all the $watches

**Note, there is some discussion about using `$observe` instead of $watch when you don't need continual upates. (more on that soon.)

### $apply
wrapper around `$rootScope.$digest`


### Message passing with $broadcast and emit
This is for communication across controllers. But this is a smell if there is a lot of it. Rather we shoudl ???????



### $watch
takes 2 parameters, what to watch, and the callback. Example;

    $scope.$watch(function(){
        return $scope.filter.length;
      },
      function(){
          // callback actions...
      }
    })

There are 3 different ways to watch. 
- The standard, 'shallow' watch 
- 'Deep' watch, by adding 'true' as 3rd argument.
- $watchCollection

#### $watchList

### $on
Use to subscribe to events
you can use the `unregister()` to stop listening.

### $httpProvider
#### Interceptors
This is where you catch the request and response. This of primary interest with dealing with a rails app. Since rails has a built in csrf_forgery method, we need to connect to that. There are some gems that manage this, but it is also profitable to know where and what is happening sine it's fairly simple.

Interceptor has 4 methods.

return {
    response:
    responseError:
    request:
    requestError:
}

##### request.herader['X-xsrf-token']
This will be the one we deal with. 


### $q
#### consuming a promise
.then()
.catch()
.finally()

#### making a promise
start with .defer()
success .resolve()
fail .reject()
return .promise()

## Rails Components
These are things to study that are related to both fullstack and angular

**Study these gems**
- angular_devise
- angular_rails_csrf
- devise
- warden

### status methods
:created
:unprocessable_entity
:ok
:not_found

## Misc Topics to study
- bourbon
- sass 3.3 & 3.4
- neat
- bitters

## Directives
DOM manipulation should happen in directives. This is either ng or our own custom directives. Directives describe behavior.

### Custom

#### transclusion:true
This is the ability to have a directive wrap content that you want to remain in the DOM. By default, directives will remove any inside content.
#### Compile and Link

##### compile
Compile happens once, and is the stage that builds the template to use. Note, a template is the html with the unprocessed expressions. For example, your html would look like this;

    <div>{{ something here later}}</div>

Compile's callback will be the link function.
Note, that compile does not have or manage scope.
It's arguments in the function are conventionally called tElements, tAttrs.
Note, that `tElement` refers to the directive you are building. It's also a jQuery object out of the box. 

##### link
Link has two stages. There's a pre and post link. The default link phase is `post` link. The difference between the two is how they relate to the parent and child scopings. 

Link has access to scope, where compile doesn't.

`pre:` will start with the parent and work down.
`post:` works from the children scope and moves up.

### Questions
what does '@' and '=' do?

### Built In
In addition to expanding html with custom elements and attributes, Angular takes the liberty of overriding certain tags like, form and a.
ng-include
ng-cloak (prevents the white flash)
ng-class
ng-bind (vs {{ }})
ng-bing-html (uses $sce)
ng-if
ng-switch
ng-include

#### Forms


##### CSS Classes
_All forms come with the following classes;_
ng-pristine
ng-dirty
ng-valid
ng-invalid
ng-disabled

##### Select
ng-options

##### State properties
$error
$invalid


#### Events
ng-blue
ng-focus

## Tools
### CURL
-- header
-- accept:application/json
-- "content-type: application/json"

## Testing
### Rails
RSpec
Capybara

### Angular
Jasmine
Karma
Protractor

## Javasscript
Angular does not shield you from javascript, the way rails might attempt to do so from Ruby. You need to continue learning and mastering Javascript.

### Functions
array.split()


### Libraries
lodash / underscore

## Tutorials
angular lynda
ang homepage
fullstack.io
ng-book
dave copeland's tutorial
wintellect
ng-newsletter
