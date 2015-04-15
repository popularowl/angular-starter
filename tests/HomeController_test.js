'use strict';

describe('HomeController Tests :', function() {

  // Only loading one module which is being tested
  beforeEach(module('mostPopularListingsApp.home'));

  describe('Loading HomeController. It...', function(){

    // custom variables needed during the tests
    var scope;
    var controller;
    
    // Get the controller
    beforeEach(inject(function($controller,$rootScope){
      scope = $rootScope.$new(); // initializa child of global $rootScope
      controller = $controller("HomeController", {$scope: scope}); // Controller expects $scope

    }));


    it('should be defined', inject(function() {
      expect(controller).toBeDefined();
    }));

    it('should have property next defined', inject(function() {
      expect(controller.message).toEqual("Hello Home!");    
    }));
  });

});