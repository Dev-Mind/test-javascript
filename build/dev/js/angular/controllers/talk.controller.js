/**
 * Created by ehret_g on 14/10/15.
 */
(function () {
  'use strict';

  angular.module('jt-controllers').controller('TalkCtrl', ['$http', function ($http) {
    var ctrl = this;

    function extractId(url){
      var elements = url.split('/');
      return elements[elements.length-1];
    }

    $http.get('api/session/talk')
      .then(function (response) {
        ctrl.sessions = response.data;
        return $http.get('/api/member/speaker');
      })
      .then(function (response) {
        ctrl.sessions.forEach(function (session) {
          var speakers = Array.isArray(session._links.speaker) ? session._links.speaker : [session._links.speaker];
          session.speakers = response.data.filter(function (speaker) {
            var found = speakers.filter(function (s) {
              return extractId(s.href) === (speaker.idMember + '');
            });
            return found.length > 0;
          });
        });
      });
  }]);

})();