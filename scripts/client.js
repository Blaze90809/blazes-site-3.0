var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('', {
        templateURL: '/views/index.html',
        controller: 'HomeController as hc'
    })
    .when('/experience', {
        templateURL: '/views/generic.html',
        controller: 'AboutController as bc'
    })
    .otherwise({
        redirectTo: '/'
    })
})