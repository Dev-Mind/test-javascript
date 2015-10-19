'use strict';

app.talk = {

  data : undefined,

  init: function () {
    componentHandler.upgradeAllRegistered();

    $("#session-search").keyup(function(){
      app.talk.talkFilter(this.value);
    });
    $("#session-search").change(function(){
      app.talk.talkFilter(this.value);
    });
    $.ajax({url: 'api/session/talk'}).done(app.talk.callBackTalks);
  },

  callBackTalks :  function (sessions) {
    app.talk.data = sessions;
    $.ajax({url: '/api/member/speaker'}).done(app.talk.callBackSpeakers);
  },

  callBackSpeakers : function (speaks) {
    app.talk.data.forEach(function (session) {
      var speakers = Array.isArray(session._links.speaker) ? session._links.speaker : [session._links.speaker];
      session.speakers = speaks.filter(function (speaker) {
        var found = speakers.filter(function (s) {
          return app.talk.extractId(s.href) === (speaker.idMember + '');
        });
        return found.length > 0;
      });
    });
    app.talk.updateDom(app.talk.data);
  },

  talkFilter : function(text) {
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
  },

  updateDom: function (sessions) {
    $(".session-table-content").empty();

    if (sessions) {
      sessions.forEach(function (session) {
        var line = '<tr class="jt-talk-line"><td class="mdl-data-table__cell--non-numeric">';
        line += '<p class="jt-text mdl-card__title-text cesar-card__title-text">';
        line += '<i class="material-icons cesar-button--fab">local_library</i>&nbsp;';
        line += session.title + '&nbsp;<b>' + session.lang + '</b>';
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
  },

  extractId: function (url) {
    if(!url){
      return undefined
    }
    var elements = url.split('/');
    return elements[elements.length - 1];
  }
};


$(app.talk.init);
