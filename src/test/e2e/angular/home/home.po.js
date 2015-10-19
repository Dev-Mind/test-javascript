var AngularHomepage = function() {

  this.url = 'http://localhost:4000/';

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