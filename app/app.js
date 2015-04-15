'use strict';

// Defining Angular app model with all other dependent modules
var mostPopularListingsApp = angular.module('mostPopularListingsApp',['ngRoute',
	'mostPopularListingsApp.home','mostPopularListingsApp.about','mostPopularListingsApp.login']);

mostPopularListingsApp.config(function($routeProvider, $locationProvider) {
	
	// Declaration of the default route if neither of the controllers
	// is supporting the request path
	$routeProvider.otherwise({ redirectTo: '/'});

	// disabling # in Angular urls
	// $locationProvider.html5Mode({
	// 		enabled: true,
	//      requireBase: false
	// });
});