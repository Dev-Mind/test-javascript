/**
 * Created by Dev-Mind
 * *******************************
 * Test d'un filtre angular
 */
(function () {
  'use strict'

  describe('Filter navbarClass', function () {
    var $filter;

    beforeEach(module('at-filters'));

    beforeEach(inject(function(_$filter_){
      $filter = _$filter_('navbarClass');
    }));

    it('should return dm-svg-inactive by default', function(){
      expect($filter('home', 'talks')).toBe('dm-svg-inactive');
    });

    it('should return dm-svg-active when value is en', function(){
      expect($filter('home', 'home')).toBe('dm-svg-active');
    });
  });
})();