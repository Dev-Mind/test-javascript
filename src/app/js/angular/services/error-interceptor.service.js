(function () {
  'use strict';

  angular.module('jt-services').factory('errorUtil', function () {
    'ngInject';
    function isFunctionalError(response) {
      return response.headers && response.headers('Content-Type') &&
        response.headers('Content-Type').indexOf('application/json') === 0 &&
        angular.isDefined(response.data.message);
    }

    return {
      isFunctionalError : isFunctionalError
    }
  });

  angular.module('jt-services').factory('errorInterceptor', function ($rootScope, $q, errorUtil) {
    'ngInject';

    return {
      responseError: function (response) {
        if (!errorUtil.isFunctionalError(response)) {
          $rootScope.error = response;
        }
        return $q.reject(response);
      }
    };
  });

})();