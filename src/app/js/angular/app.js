'use strict';

angular.module('jt-controllers', []);
angular.module('jt-directives', []);
angular.module('jt-filters', []);
angular.module('jt-services', []);

angular.module('jt',
  [
    'ui.router',
    'jt-controllers',
    'jt-directives',
    'jt-filters',
    'jt-services'
  ]
);

angular.module('jt').config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "views/home.html"
    })
    .state('talk', {
      url: "/talk",
      templateUrl: "views/angular/talk.html",
      controller: 'TalkCtrl',
      controllerAs: 'ctrl'
    });

  $httpProvider.interceptors.push('errorInterceptor')
});

angular.module('jt').run(function ($rootScope, $timeout) {
  $rootScope.isAngularApp = true;

  //Refresh material design lite
  $rootScope.$on('$viewContentLoaded', function () {
    $timeout(function () {
      componentHandler.upgradeAllRegistered();
    });
  });
});
