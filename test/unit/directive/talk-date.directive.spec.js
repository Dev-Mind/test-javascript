/**
 * Created by Dev-Mind
 * *******************************
 * Test d'une directive simple
 */
(function () {
  'use strict'

  describe('Directive talkDate', function () {

    var $scope, $compile, $filter;

    beforeEach(module('at-directives'));

    beforeEach(inject(function (_$rootScope_, _$compile_, _$filter_) {
      $scope = _$rootScope_.$new();
      $compile = _$compile_;
      $filter = _$filter_;
    }));

    it('should format date and talk range in [Apr 16, 2015 from 9:15 AM to 9:35 AM]', function(){
      $scope.date1 = '2015-04-16T09:15:00.000+02:00';
      $scope.date2 = '2015-04-16T09:35:00.000+02:00';
      var html = $compile('<talk-date start="date1" end="date2"></talk-date>')($scope);

      $scope.$digest();

      expect(html.html()).toBe('Apr 16, 2015 from 9:15 AM to 9:35 AM');
    });

    it('should not throw error if date is invalid', function(){
      $scope.date1 = '2015-04-16T09:15:00.000+02:00';
      $scope.date2 = '201qSSQDSQDQSD';
      var html = $compile('<talk-date start="date1" end="date2"></talk-date>')($scope);

      $scope.$digest();

      expect(html.html()).toBe('Apr 16, 2015 from 9:15 AM to 201qSSQDSQDQSD');
    });
  });

})();

