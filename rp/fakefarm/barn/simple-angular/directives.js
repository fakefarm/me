'use strict';

var app = angular.module('bio');

app.directive("myWife", function() {
  return {
    restrict: 'E',
    templateUrl: "wife_info.html"
  };
});

app.directive('mainNav', function(){
  return {
    restrict: 'E',
    templateUrl: 'main_nav.html'
  }
})

app.directive('toDo', function(){
  return {
    restrict: 'AE',
    template: '<li>this is a todo</li>'
  }
})
