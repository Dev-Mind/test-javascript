'use strict';

window.app = (function () {

  function bootsrap() {
    app.loadTemplate('#header', 'views/templates/header.html');
    app.loadTemplate('#footer', 'views/templates/footer.html');
    app.loadTemplate('#content', 'views/home.html');
  }

  function loadTemplate(selector, templateUrl) {
    $(selector).load(templateUrl);
  }

  return {
    bootsrap: bootsrap,
    loadTemplate: loadTemplate
  }
})();

$(app.bootsrap);