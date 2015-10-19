/**
 * Created by Dev-Mind
 * *******************************
 * Dans ce test on utilise $q.when() pour mocker nos services ou tout au moins leurs méthodes
 */
(function () {
  'use strict'

  describe('TalkDetailCtrl : ', function () {
    var $scope, $controller, talkService, speakerService, $q;

    beforeEach(module('at-controllers'));

    beforeEach(inject(function ($injector) {
      $scope = $injector.get('$rootScope').$new();
      $q = $injector.get('$q');

      //Our services return Javascript promises. We use $q to simulate the behavior
      speakerService = {
        save: function(){ return $q.when({})},
        remove: function(){ return $q.when({})}
      }

      talkService = {
        get: function(){ return $q.when({id: 1, title: 'my talk'})},
        getTalkSpeakers: function(){ return $q.when([
          {id: 1, firstname: 'Guillaume' }
        ])},
        save: function(){ return $q.when({})}
      };

      //When the data is refreshed we reset the talkForm. We use a mock
      $scope.talkForm = { $setPristine: jasmine.createSpy('$setPristine')};

      $controller = $injector.get('$controller')('TalkDetailCtrl', {
        $stateParams: { id: 1 },
        $scope: $scope,
        talkService: talkService,
        speakerService: speakerService
      });

      $scope.$digest();
    }));

    it('should have its name in pageinfo', function () {
      expect($controller.pageinfo).toEqual({name: 'talks'});
    });

    it('should load the talk in the controller scope', function () {
      expect($controller.selectedTalk.title).toBe('my talk');
    });


    it('should load the talk speakers in the controller scope', function () {
      expect($controller.speakers[0].firstname).toBe('Guillaume');
    });

    describe('refreshTalk', function () {

      it('should refresh the talkform', function () {
        //we reset the mock because reset on talkForm is called on init
        $scope.talkForm.$setPristine.calls.reset();

        $controller.refreshTalk();
        $scope.$digest();

        expect($scope.talkForm.$setPristine).toHaveBeenCalled();
      });

      it('should reload the talk', function () {
        $controller.refreshTalk();
        expect($controller.selectedTalk.title).toBe('my talk');
      });

    });

    describe('with panel talk', function () {

      it('should save talk and refresh form', function () {
        spyOn($controller, 'refreshTalk')
        $controller.saveTalk();
        $scope.$digest();
        expect($controller.refreshTalk).toHaveBeenCalled();
      });

    });


    describe('with panel speakers', function () {

      it('should save a speaker', function () {
        spyOn($controller, 'refreshSpeaker')
        $controller.selectedSpeaker = {
          id: 1,
          firstname: 'Guillaume'
        };

        $controller.saveSpeaker($controller.selectedSpeaker);
        $scope.$digest();

        //After saving the scope is cleaned and speakear is refreshed
        expect($controller.refreshSpeaker).toHaveBeenCalled();
        expect($controller.selectedSpeaker).toBeUndefined();
      });

      it('should remove a speaker', function () {
        spyOn($controller, 'refreshSpeaker')
        $controller.selectedSpeaker = {
          id: 1,
          firstname: 'Guillaume'
        };

        $controller.removeSpeaker($controller.selectedSpeaker);
        $scope.$digest();

        //After saving the scope is cleaned and speakear is refreshed
        expect($controller.refreshSpeaker).toHaveBeenCalled();
        expect($controller.selectedSpeaker).toBeUndefined();
      });

      it('should clean speaker in scope ', function () {
        $controller.selectedSpeaker = {
          id: 1,
          firstname: 'Guillaume'
        };

        $controller.cancelSpeakerEdition();

        expect($controller.selectedSpeaker).toBeUndefined();
      });

    });
  });

})();
