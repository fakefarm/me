'use strict';

var app = angular.module('bio');

app.controller('homeController', function($scope) {
  console.log('home ctrl has loaded...')
  $scope.user = {};
  $scope.submit = function() {
    $scope.user.button = true;
    console.log($scope.button);
  }
  $scope.hideLip = function() {
    $scope.user.button = false;
  }
});

app.controller('wifeController', function($scope){
  $scope.photo = './danae.jpg';
});

app.controller('bioController', function($scope, five, about){
  $scope.bio = {
    name: 'Dave',
    age: 37
  }
  $scope.greeting = 'hello world!';
  $scope.fivrr = five;
  $scope.background = about.blurb;
})

app.controller('firstFormController', function($scope, owner, practiceHttp) {
  $scope.bam = 'bam';
  $scope.title = {
    main: 'back in business.'
  };
  $scope.foo = owner.data.name;
  $scope.addCo = practiceHttp.addContent();
  $scope.status = true;
});


app.controller('reviewController', function($scope){

  $scope.day = { time: 'morning' }

  $scope.show = { me: true };

  $scope.change = function() {
    $scope.show.me = false;
  };

  $scope.greetings = {
    morning: 'this should go to evening',
    night: 'goodbye'
  }
  $scope.square = {}
  $scope.bang = function(){
    $scope.big = true;
    $scope.color = 'red';
    $scope.square.oneBox = 'clicked';
    console.log($scope);
  }
});

app.controller('todoController', function($scope, taskList) {

  taskList.getTasks().then(function(d){
    $scope.data = d.data;
  });

  $scope.addTask = function(task) {
    $scope.data.push({ item: task })
    console.log($scope.data)
  }
})
