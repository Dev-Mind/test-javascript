/**
 * Created by Dev-Mind
 * *******************************
 * Test d'une directive utilisant un template de page (templateURL). Ce template doit par exemple
 * être chargé en JS via Html2JS ==> module at-templates
 */
(function () {
  'use strict'

  describe('Directive navbar', function () {

    var $compile, $scope;

    beforeEach(module('at-directives', 'at-filters'));

    beforeEach(inject(function(_$compile_, _$rootScope_){
      $compile = _$compile_;
      $scope = _$rootScope_.$new();
    }));


    it('should be a material toolbar', function () {
        // Compile the directive
        var element = $compile('<navbar></navbar>')($scope);
        // fire all the watches
        $scope.$digest();
        // Check that the compiled element contains the templated content
        expect(element.html()).toContain('<md-toolbar>');
    });

    it('should display logo devmind with a link to the website', function () {
      // Compile the directive
      var element = $compile('<navbar></navbar>')($scope);
      // fire all the watches
      $scope.$digest();
      // Check that the compiled element contains the templated content
      expect(element.html()).toContain('<a href="http://dev-mind.fr"><img src="img/logo-devmind-long.png"></a>');
    });

    it('should have 2 actions in toolbar', function () {
      // Compile the directive
      var element = $compile('<navbar pageinfo="home"></navbar>')($scope);
      // fire all the watches
      $scope.$digest();

      expect(element.find('md-icon').length).toBe(2);

    });

    it('should active menu item home when pageinfo=[home]', function () {
      $scope.pageinfo = {name : "home"};
      // Compile the directive
      var element = $compile('<navbar pageinfo="pageinfo"></navbar>')($scope);
      // fire all the watches
      $scope.$digest();

      var homeAction = angular.element(element.find('md-icon')[0]);

      expect(homeAction.attr('md-svg-icon')).toContain('ic_home');
      expect(homeAction.attr('class')).toBe('dm-toolbar dm-svg-active');
    });

    it('should active menu item home but not the second when pageinfo=[home]', function () {
      // Compile the directive
      $scope.pageinfo = {name : "home"};
      var element = $compile('<navbar pageinfo="pageinfo"></navbar>')($scope);
      // fire all the watches
      $scope.$digest();

      var talkAction = angular.element(element.find('md-icon')[1]);

      expect(talkAction.attr('md-svg-icon')).toContain('ic_talk');
      expect(talkAction.attr('class')).toBe('dm-toolbar dm-svg-inactive');
    });

    it('should desactive menu item home when pageinfo=[talk]', function () {
      $scope.pageinfo = {name : "talk"};
      // Compile the directive
      var element = $compile('<navbar pageinfo="pageinfo"></navbar>')($scope);
      // fire all the watches
      $scope.$digest();

      var homeAction = angular.element(element.find('md-icon')[0]);

      expect(homeAction.attr('md-svg-icon')).toContain('ic_home');
      expect(homeAction.attr('class')).toBe('dm-toolbar dm-svg-inactive');
    });

  });


})();