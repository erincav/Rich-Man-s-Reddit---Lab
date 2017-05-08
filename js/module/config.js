var app= angular.module('comicApp');

app.config(function($routeProvider){
  $routeProvider.when('/home',{
    templateUrl: "views/home.html",
    controller: "getController"
  });

  $routeProvider.when('/reddit', {
    templateUrl: "views/reddit.html",
    controller: "getController"
  });

  $routeProvider.otherwise('/home',{
    templateUrl: "views/home.html",
    controller: "getController"
  });

});
