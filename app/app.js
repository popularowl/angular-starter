'use strict';

// Defining Angular app model with all dependencies
var mostPopularListingsApp = angular.module('mostPopularListingsApp',['ngRoute']);

mostPopularListingsApp.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/',
		{
			controller: 'HomeViewController',
			templateUrl: 'components/views/homeView.html'
		})

		.when('/about',
		{
			controller: 'AboutViewController',
			templateUrl: 'components/views/aboutView.html'
		})

		// if non of the above routes
		// are matched we are setting router
		// to redirect to the RootController
		.otherwise({ redirectTo: '/about'});

		// // disabling # in Angular urls
		// $locationProvider.html5Mode({
		//    	enabled: true,
		//        requireBase: false
		//    });
});

// CONTROLLERS

mostPopularListingsApp.controller('HomeViewController', [function() {

	// Just a housekeeping.
	// In the init method we are declaring all the
	// neccesarry settings and assignments to be run once
	// controller is invoked
	init();

	function init(){
	
	};

	this.message = "Hello!";

}]);

mostPopularListingsApp.controller('AboutViewController', [function() {

	// Just a housekeeping.
	// In the init method we are declaring all the
	// neccesarry settings and assignments to be run once
	// controller is invoked
	init();

	function init(){

	};

	this.message = "About!";
	
}]);