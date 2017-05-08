var app = angular.module('comicApp');

app.directive('reddit', function() {

  return {
    restrict: 'E',
    replace: false,
    templateUrl: 'views/reddit.html'
  }
  app.directive('outputText', function() {

    return {
      restrict: 'E',
      replace: false,
      template: '<h1> My text here</h1>'
    }




});
