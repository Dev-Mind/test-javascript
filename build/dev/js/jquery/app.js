'use strict';

var app = {
    bootsrap: function () {
      app.loadTemplate('#header', 'views/templates/header.html');
      app.loadTemplate('#footer', 'views/templates/footer.html');
      app.loadTemplate('#content', 'views/home.html');
    },

    loadTemplate: function (selector, templateUrl) {
      $(selector).load(templateUrl);
    }
  };

$(app.bootsrap);