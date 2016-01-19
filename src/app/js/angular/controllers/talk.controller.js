/**
 * Created by ehret_g on 14/10/15.
 */
(function () {
  'use strict';

  angular.module('jt-controllers').controller('TalkCtrl', function ($http) {
    'ngInject';
    var ctrl = this;

    $http.get('api/session/talk?year=2015')
      .then(function (response) {
        ctrl.sessions = response.data;
        return $http.get('api/member/speaker?year=2015');
      })
      .then(function (response) {
        ctrl.sessions.forEach(function (session) {
          var speakers = utils.getArrayFromLinks(session.links, 'speaker');
          session.speakers = response.data.filter(function (speaker) {
            var found = speakers.filter(function (s) {
              return utils.extractId(s) === (speaker.idMember + '');
            });
            return found.length > 0;
          });
        });
      });
  });

})();