'use strict';

app.menu = (function() {

  function init() {
    $(".link_home").click(app.menu.goHome);

    $(".link_talk").click(app.menu.goTalk);
  }

  function goHome(event) {
    event.preventDefault();
    app.loadTemplate('#content', 'views/home.html');
  }

  function goTalk(event){
    event.preventDefault();
    app.loadTemplate('#content', 'views/jquery/talk.html');
  }

  return{
    init: init,
    goHome: goHome ,
    goTalk: goTalk
  };

})();

$(app.menu.init);