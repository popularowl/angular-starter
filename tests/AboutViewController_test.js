'use strict';

describe('AboutViewController Tests :', function() {

  beforeEach(module('mostPopularListingsApp'));

  describe('Loading AboutView controller. It', function(){

    it('should be defined', inject(function($controller) {
      //spec body
      var homeViewController = $controller('AboutViewController');
      expect(homeViewController).toBeDefined();
    }));

    it('should have property next defined', inject(function($controller) {
      //spec body
      var homeViewController = $controller('AboutViewController');
      expect(homeViewController.message).toEqual("About!");
    
    }));
  });
});