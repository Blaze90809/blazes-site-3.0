var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('', {
        templateUrl: '/views/home.html',
        controller: 'HomeController as hc'
    })
    .when('/experience', {
        templateUrl: '/views/generic.html',
        controller: 'AboutController as bc'
    })
    .otherwise({
        redirectTo: '/'
    })
})