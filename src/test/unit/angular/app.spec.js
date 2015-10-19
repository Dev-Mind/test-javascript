/**
 * Created by ehret_g on 07/05/15.
 */
(function () {
  'use strict'

  var $rootScope, $location, $state, $httpBackend;

  describe('Angular : Application', function () {

    beforeEach(module('jt'));

    beforeEach(inject(function ($injector) {
      $rootScope = $injector.get('$rootScope');
      $location = $injector.get('$location');
      $state = $injector.get('$state');
      $httpBackend = $injector.get('$httpBackend');
    }));

    it('should be an angular app', function () {
      expect($rootScope.isAngularApp).toBeTruthy();
    });

    it('should load home by default', function () {
      $httpBackend.expectGET('views/home.html').respond(200);

      // when we go to the editor
      $location.url('oups');
      $rootScope.$apply();
      $httpBackend.flush();

      expect($location.path()).toBe('/home');
      expect($state.current.controller).toBeUndefined();
    });

    it('should navigate to talk list page when url=[/talk]', function () {
      $httpBackend.expectGET('views/angular/talk.html').respond(200);
      // when we go to the editor
      $location.url('talk');
      $rootScope.$apply();
      $httpBackend.flush();

      expect($location.path()).toBe('/talk');
      expect($state.current.controller).toBe('TalkCtrl');
    });

  });

})();