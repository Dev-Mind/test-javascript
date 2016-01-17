'use strict';

app.menu = {


  init: function () {
    $(".link_home").click(app.menu.goHome);

    $(".link_talk").click(app.menu.goTalk);
  },

  goHome: function (event) {
    event.preventDefault();
    app.loadTemplate('#content', 'views/home.html');
  },

  goTalk: function (event) {
    event.preventDefault();
    app.loadTemplate('#content', 'views/jquery/talk.html');
  }


};

$(app.menu.init);