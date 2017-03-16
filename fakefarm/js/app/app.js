"use strict";

var app = angular.module("fakeFarmApp", ['ui.router']);

app.directive('ffArticle', function() {
  return {
    scope: {},
    restrict: 'E',
    templateUrl: 'partials/article.html',
    controller: function($scope, posts){
      $scope.posts = posts.all();
    }
  };
});

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/card-view");
  //
  // Now set up the states
  $stateProvider
    .state('card-view', {
      url: "/card-view",
      templateUrl: "partials/card-view.html"
    })
    .state('list-view', {
      url: '/list-view',
      templateUrl: 'partials/list-view.html',
      controller: function($scope, posts) {
        $scope.posts = posts.all();
      }
    });
});
