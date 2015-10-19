/**
 * Created by Dev-Mind
 * *******************************
 * Controlleur utilisé dans une boite de dialogue
 */
(function () {
  'use strict'

  describe('TalkDetailDialogCtrl', function () {

    var $mdDialog, $scope, talkService;

    beforeEach(module('at-controllers'));

    beforeEach(inject(function ($injector) {
      var $q = $injector.get('$q');
      $scope = $injector.get('$rootScope').$new();

      talkService = {
        getTalkSpeakers: function () {
          return $q.when([
            {'firstname': 'Guillaume'}
          ]);
        }
      };
      $mdDialog = {
        cancel: function(){}
      };

      $injector.get('$controller')('TalkDetailDialogCtrl', {
        $scope: $scope,
        $mdDialog: $mdDialog,
        talk: { id: 1 },
        talkService: talkService});

      $scope.$digest();
    }));

    it('should close the dialog when user click on cancel', function () {
      spyOn($mdDialog, 'cancel');

      $scope.cancel();

      expect($mdDialog.cancel).toHaveBeenCalled();
    });

    it('should load the spekers on init', function () {

      expect($scope.talk.speakers[0].firstname).toBe('Guillaume');
    });
  });
})();