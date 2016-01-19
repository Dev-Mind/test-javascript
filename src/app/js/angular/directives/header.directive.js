(function () {

  'use strict';

  angular.module('jt-directives').directive('jtHeader', function () {
    'ngInject';
    return {
      templateUrl: 'views/templates/header.html'
    };
  });
})();
