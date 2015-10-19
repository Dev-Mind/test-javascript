/**
 * Created by ehret_g on 07/05/15.
 */
(function () {
  'use strict'

  var $rootScope, $location, $state, $httpBackend;

  describe('Application AngularAndTests', function () {

    beforeEach(module('at', 'ui.router'));

    beforeEach(inject(function ($injector) {
      $rootScope = $injector.get('$rootScope');
      $location = $injector.get('$location');
      $state = $injector.get('$state');
      $httpBackend = $injector.get('$httpBackend');
    }));

    it('should load home by default', function () {
      $httpBackend.expectGET('navigation/home.html').respond(200);

      // when we go to the editor
      $location.path('/');
      $rootScope.$apply();
      $httpBackend.flush();

      expect($state.current.name).toBe('home');
      expect($state.current.controller).toBe('HomeCtrl');
    });

    it('should navigate to talk list page when url=[/talk]', function () {
      $httpBackend.expectGET('talks/talk-list.html').respond(200);
      // when we go to the editor
      $location.path('/talk');
      $rootScope.$apply();
      $httpBackend.flush();

      expect($state.current.name).toBe('talks');
      expect($state.current.controller).toBe('TalkListCtrl as talks');
    });

    it('should navigate to talk detail page when url=[/talk/id]', function () {
      $httpBackend.expectGET('talks/talk-detail.html').respond(200);
      // when we go to the editor
      $location.path('/talk/id');
      $rootScope.$apply();
      $httpBackend.flush();

      expect($state.current.name).toBe('talk');
      expect($state.current.controller).toBe('TalkDetailCtrl as talk');
    });
  });

})();