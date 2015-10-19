var serverUrl = require('../../serverUrl.js');

var AngularHomepage = function() {

  this.url = new serverUrl().URL;
  this.linkTalk = $('.link_talk');
  this.linkHome = element(by.className('link_home'));
  this.linkJqueryApp = element(by.className('link_jquery'));

  this.get = function() {
    browser.get(this.url);
  };

  this.go = function(name) {
    this[name].click();
  };
};

module.exports = AngularHomepage;