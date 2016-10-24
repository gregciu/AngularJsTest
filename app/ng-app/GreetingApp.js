'use strict'

var greetingMainApp = angular.module('greetingApp', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/greeting', {
            templateUrl: 'templates/greeting.html',
            controller: 'MessageController'
        }).when('/submitted', {
            templateUrl: 'templates/submitted-greeting.html',
            controller: 'MessageSubmitController'
        }).when('/queries', {
            templateUrl: 'templates/queries-content.html',
            controller: 'QueriesController'
        });

        $routeProvider.otherwise({redirectTo: '/greeting'});
        $locationProvider.html5Mode(true);
    });