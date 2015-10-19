/**
 * Created by Dev-Mind
 * *******************************
 * Test d'un filtre angular
 */
(function () {
  'use strict'

  describe('Filter language', function () {
    var $filter;

    beforeEach(module('at-filters'));

    beforeEach(inject(function(_$filter_){
      $filter = _$filter_('language');
    }));

    it('should return FR by default', function(){
      expect($filter()).toBe('FR');
    });

    it('should return EN when value is en', function(){
      expect($filter('en')).toBe('EN');
    });
  });
})();