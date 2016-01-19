/**
 * Created by ehret_g on 14/10/15.
 */
(function () {
  'use strict';

  angular.module('jt-controllers').controller('HomeCtrl', function () {
    'ngInject';
    var ctrl = this;

    ctrl.name = 'Home';

    ctrl.changeName = function(newname){
      ctrl.name = newname;
    }

  });

})();