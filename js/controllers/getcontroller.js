var app = angular.module('comicApp');

app.controller('getController', function($scope, $http) {

  $scope.reddit = [];

  $http({
    method: 'GET',
    url: 'http://www.reddit.com/r/comicbooks.json'

  }).then(function call(response) {
    $scope.reddit = response.data.data.children;
  });

});
