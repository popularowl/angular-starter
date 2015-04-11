'use strict';

describe('HomeViewController Tests :', function() {

  beforeEach(module('mostPopularListingsApp'));

  describe('Loading HomeView controller. It', function(){

    it('should be defined', inject(function($controller) {
      //spec body
      var homeViewController = $controller('HomeViewController');
      expect(homeViewController).toBeDefined();
    }));

    it('should have property next defined', inject(function($controller) {
      //spec body
      var homeViewController = $controller('HomeViewController');
      expect(homeViewController.message).toEqual("Hello!");
    
    }));
  });

});