var app = angular.module('bandt');

app.directive('winner', function(){
  return {
    restrict: 'EA',
    controller: 'bandtController',
    replace: true,
    templateUrl: 'templates/winner.html',
  };
});

app.directive('score', function(){
  return {
    restrict: 'EA',
    controller: 'bandtController',
    replace: true,
    templateUrl: 'templates/score_board.html'
  };
});

app.directive('buttons', function(){
  return {
    replace: true,
    restrict: 'EA',
    controller: 'bandtController',
    templateUrl: 'templates/buttons.html'
  };
});

app.directive('models', function(){
  return {
    restrict: 'EA',
    controller: 'bandtController',
    replace: true,
    templateUrl: 'templates/models.html'
  };
});

app.directive('game', function(){
  return {
    restrict: 'EA',
    controller: 'bandtController',
    replace: true,
    transclude: true,
    templateUrl: 'templates/game.html'
  };
});
