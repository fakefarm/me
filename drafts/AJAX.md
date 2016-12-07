# AJAX

## WITH JQUERY

helpful to know the important options that are needed.

`dataType: 'JSON'`

for us to handle json response

`type: 'POST'`

when posting for a form

`contentType: 'application/json'`

for the server to know we want json

`context: foo`
declaring a name for `this` inside ajax object

`data` 

the params object

`serialize()` method sends all the content of the form in one swoop

## promises

JQuery's AJAX object is actually a Promise object. (TODO- see if  promises have made it into true javascript) 

Promises have a `done` method to use rather than `success`

### custom promises

use `$.Deferred()` to create a custom promise. Then, on success, use the `resolve` method (on Deferred) to trigger the done. 

```
var Weather = {
  today: function() {location} {
    var promise = $.Deferred();
    $.ajas('/weather', {
      data: {q: location},
      success: function(result) }
        promise.resolve(result.weather);
      }
    });
    return promise;
  }
}
```      

#### use case
Custom promises can handle the ajax call and parsing the data.


Lots going on here...

```
var Vacation = { // js object
  getPrice: function(location){ // function w/ argument
   var promise = $.Deferred(); // Deferred is method for creating custom promises. Create and assign to var for later use.
   $.ajax('/vacation/prices', { // make an ajax call
     data: {q: location}, // query params attached to uri
     success: function(result) { // setting method attached to ajax
       promise.resolve(result.price); // Deferred comes with a method called resolve which is what we want to pass _parsed_ content into
     }
   });
   return promise; // the promise we created must be returned after it has been worked on inside AJAX. This is a great example why explicit returns need to be paid attention to. How would JS know which concept inside my function needs to be returned? 
  }
}
```

### $.when() & $.then()

Ajax content never returns at the same time because the content is traveling from 2 different places over the wire as two different calls. 

In order to make sure things present on the page as expected, you need to use the `$.when(<promise1>, <promise2>)` and `$.then(promise1Data, promise2Data)` callbacks

```
$(document).ready(function() {
  $('button').on('click', function(){
    var tour = $(this).parent();
    var location = tour.data('location');
    var resultDiv = tour.find('.results').empty();
    $.when(
      Vacation.getPrice(location),
      Photo.getPhoto(location)
    ).$then(function(priceResult, photoResult){
        $('<p>$'+priceResult+'</p>').appendTo(resultDiv);
        $('<img />').attr('src', photoResult).appendTo(resultDiv);

    });
  });
});
```

Notice that `then` is the success method. The content inside does not need to make any additional `done` or `success` calls






good
- Enjoyed working on support. gave me an understanding of shredder and sysops. 
- Enjoyed helping QA to get a sense of how they work. I would like to learn some of Rich's magic tricks.

meh
-  I don't have a good understanding of ransack because it's a complex tool. I would like to have some time to understand it. 
- Good team work on tickets
- New to a tool we use called jquery multi-select and I didn't have a chance to research it before knowing it so I hit a bug.

bad
- either we yank ransack or I need to learn it if it's being used.