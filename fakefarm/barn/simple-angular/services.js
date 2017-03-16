'use strict';

var app = angular.module('bio');

app.value('five', 5);

app.service('about', function() {
  return {
    blurb: 'This about was generated from a Service.'
  }
});

app.service('owner', function() {
  return {
    data: {
      name: 'dave',
      last: 'woodall'
    }
  }
});

app.service('practiceHttp', function(){
  return {
    addContent: function(){
      console.log('ho');
    }
  }
});

// this works too!
// Everything is wrapped in a return value
// app.service('taskList', function($http) {
//   return {
//     getTasks: function() {
//       return $http.get('tasks.json').
//         success(function(list) {
//           list;
//       })
//     }
//   }
// })

// this works!
// declare which methods are public API.
// I think I like this approach.
app.service('taskList', function($http){
  var getAll = function (){
    return $http.get('tasks.json')
      .success(function(data, status) {
        data;
    });
  };
  return {
    getTasks: getAll
  }
})

// this works too!
// called it a 'factory' instead of a service. what's the difference?
// app.factory('taskList', function($http) {
//   return {
//     getTasks: function() {
//       return $http.get('tasks.json').
//         success(function(list) {
//           list;
//       })
//     }
//   }
// })

