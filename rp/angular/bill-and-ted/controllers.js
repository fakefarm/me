var app = angular.module('bandt');

app.controller('bandtController', function($scope){

  $scope.showBill = false;
  $scope.showTed = false;
  $scope.noPeople = true;
  $scope.showResults = false;
  $scope.winner = false;

  $scope.toggleBill = function(){
    $scope.showBill = true;
    $scope.showTed = false;
    $scope.noPeople = false;
    $scope.billScore.points += 1;
    $scope.leader();
    $scope.winner = false;
  };

  $scope.toggleTed = function(){
    $scope.showTed = true;
    $scope.showBill = false;
    $scope.noPeople = false;
    $scope.tedScore.points += 1;
    $scope.leader();
    $scope.winner = false;
  };

  $scope.endMatch = function() {
    $scope.showBill = false;
    $scope.showTed = false;
    $scope.noPeople = true;
    $scope.showResults = true;
    $scope.winner = $scope.leader();
    $scope.billScore.points = 0;
    $scope.tedScore.points = 0;
  };

  $scope.leader = function(){
    if ($scope.billScore.points > $scope.tedScore.points) {
      return 'bill';
    } else if ($scope.tedScore.points > $scope.billScore.points) {
      return 'ted';
    } else {
      return 'booth';
    }
  };

  $scope.billScore = { points: 0};
  $scope.tedScore = { points: 0};

  $scope.newGame = function(){
    if ( $scope.billScore.points === 0 && $scope.tedScore.points === 0 ) {
      return false;
    } else {
      return true;
    }
  };
});

