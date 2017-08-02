---
layout: post
title: "Angular so far"
description: ""
category: software
tags: []
---

I'm learning to build web apps with [Angular](http://angularjs.org/). It's a front-end framework by Google that excels in building apps like Gmail and Google Maps without a page refresh.

My goal is to use it on top of Rails. (That is, until I can have time to learn Node.js). This post is a working post, so I will be adding more detail as I understand the concepts.

## The Framework
Angular has the following buzzwords

### Services
Services are a generic way of describing your app's needs to function. So far, the two main purposes I've found are preventing global scope and connecting to backeend routes.
_Examples of services include: `$scope`, `$resource`, `$routeProvider`_

### Factories
Factories are ways to define specifics of the services.

### Controllers
A controller is the place where data is manipulated. Controllers use the `$scope` service to encapsulate their data.

    function UserCtrl ($scope){
      $scope.hello = "Hello, World!";
    }


### Modules
Modules are ways to create name spaces. I hear there are more reasons, but I haven't encountered them yet. Here's what a module looks like;

    angular.module('nameOfModule', [])

Use Angular's words of `angular` and `module`, then the two arguments are the name of your module, and any dependencies. Currently, you need to put an empty array if there are no dependencies.

Then, taking the same UserCtrl and putting it in a module would use Angular's `.controller` method and give it a name and function. This code is chained together...

    .controller('UserCtrl', function($scope){
      $scope.hello = "Hello, World!";
    });

Yes, it's a little noisy, but I don't think it will be so much in future versions, says [This guy](https://docs.google.com/presentation/d/1Gv-dvU-yy6WY7SiNJ9QRo9XayPS6N2jtgWezdRpoI04/edit#slide=id.g108668b30_040)

### Directives

Directives are the HTML attributes with special powers. The built in directives start with "ng-", but these special directives can be named anything.

    <div ng-controller="UserCtrl"></div>

### Data Bindings

The way to insert dynamic content is with double braces. `<p>{{ like so. }}</p>`

### Filters
Filters are the way to manipulate the presentation of the data. `<p>{{ 400 | currency }}</p>`

### Q/Promise
This is a new concept and how I am beginning to understand the mechanics of asynchronous programming.

## Integrating with Rails
So far, I am not encountering as much duplication as I anticipated between the two frameworks. Rails is perfectly content rendering JSON and Angular is looking for that service. So far it looks as though there is an added view layer, but housed in either `app/assets/templates`, or `public/templates` directory.


## Resources so far

Videos - [Egghead](https://egghead.io/)

Course - [Lynda's Angular course](http://www.lynda.com/course20/AngularJS-tutorials/Up-Running-AngularJS/133318-2.html)

Book - [Mastering Web Application Development with AngularJS](http://www.packtpub.com/angularjs-web-application-development/book)

Ebook - [Riding Rails w/ Angular](http://www.fullstack.io/edu/angular/rails/)

Blog - [Bootstrapping an AngularJS app in Rails 4.0](http://asanderson.org/posts/2013/06/03/bootstrapping-angular-rails-part-1.html)

Email - [Angular JS daily](http://www.angularjsdaily.com/)


## Current Questions

**Q - ** Now that I've moved view templates out of rails, how do I locate backend data, and pass it into the view?

**Idea - ** Need to add a dependent service and use the $resource service to query.



1. How can I see the necessary Model Associations, the way I can in a rails model.rb file?

2. How to find out what data is tied to what service. For example ProjectPost - what are the attributes I can use there.



