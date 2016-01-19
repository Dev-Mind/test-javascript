(function () {

  'use strict';

  angular.module('jt-directives').directive('jtErrorDialog', function () {
    'ngInject';
    return {
      replace: true,
      scope: {
        error : '='
      },
      templateUrl: 'views/templates/error.html',
      link : function($scope, element){
        $scope.$watch('error', function(value){
          if(value){
            element.css('visibility', 'visible');
          }
        });
        $scope.closeDialog = function(){
          element.css('visibility', 'hidden');
        }
      }
    };
  });
})();
