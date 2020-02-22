var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('', {
        templateUrl: 'home.html',
        controller: 'HomeController as hc'
    })
    .when('/experience', {
        templateUrl: 'generic.html',
        controller: 'AboutController as bc'
    })
    .otherwise({
        redirectTo: '/'
    })
})