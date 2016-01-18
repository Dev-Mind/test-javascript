'use strict';


app.talk =  (function() {

  function init() {
    componentHandler.upgradeAllRegistered();

    $("#session-search").keyup(function(){
      app.talk.talkFilter(this.value);
    });
    $.ajax({url: 'api/session/talk?year=2015'}).done(app.talk.callBackTalks);
  }

  function callBackTalks(sessions) {
    app.talk.data = sessions;
    $.ajax({url: '/api/member/speaker?year=2015'}).done(app.talk.callBackSpeakers);
  }

  function callBackSpeakers(speaks) {
    app.talk.data.forEach(function (session) {
      var speakers = utils.getArrayFromLinks(session.links, 'speaker');
      session.speakers = speaks.filter(function (speaker) {
        var found = speakers.filter(function (s) {
          return utils.extractId(s) === (speaker.idMember + '');
        });
        return found.length > 0;
      });
    });
    app.talk.updateDom(app.talk.data);
  }

  function talkFilter(text) {
    if (text) {
      text = text.toLowerCase();
      app.talk.updateDom(app.talk.data.filter(function (session) {
        return session.summary.toLowerCase().indexOf(text) >= 0 ||
          session.format.toLowerCase().indexOf(text) >= 0 ||
          session.title.toLowerCase().indexOf(text) >= 0;
      }));
    }
    else {
      app.talk.updateDom(app.talk.data);
    }
  }

  function updateDom(sessions) {
    $(".session-table-content").empty();

    if (sessions) {
      sessions.forEach(function (session) {
        var line = '<tr class="jt-talk-line"><td class="mdl-data-table__cell--non-numeric">';
        line += '<p class="jt-text mdl-card__title-text cesar-card__title-text">';
        line += '<i class="material-icons cesar-button--fab">local_library</i>&nbsp;';
        line += '<span class="jt-session-title">' + session.title + '&nbsp;<b>' + session.lang + '</b>' + '</span>';
        line += '</p>';
        line += session.summary + '<br>&nbsp;<br>';

        session.speakers.forEach(function (speaker) {
          line += '<span><a class="jt-mini-button mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">';
          line += '<img src="http://www.gravatar.com/avatar/' + speaker.hash + '"></a>&nbsp;';
          line += '<a class="jt-speaker">' + speaker.firstname + ' ' + speaker.lastname + '</a>&nbsp;';
          line += '</span>';
        });

        line += '</td></tr>';
        $(".session-table-content").append(line);
      });
    }
    else {
      var line = '<tr><td class="mdl-data-table__cell--non-numeric">';
      line += '<p class="jt-text mdl-card__title-text cesar-card__title-text">';
      line += 'Pas de session correspondant à vos critères de recherche';
      line += '</td></tr>';
      $(".session-table-content").append(line);
    }

    componentHandler.upgradeAllRegistered();
    $(".session-table-header").css('display', 'none');
  }

  return{
    data : undefined,
    init: init,
    callBackTalks: callBackTalks,
    callBackSpeakers: callBackSpeakers,
    talkFilter:talkFilter,
    updateDom:updateDom
  };

})();


$(app.talk.init);
