var jQueryHomepage = function() {

  this.url = 'http://localhost:4000/';

  this.linkHome = element(by.className('link_home'));
  this.linkAngularApp = element(by.className('link_angular'));


  this.get = function() {
    browser.get(this.url);
    element(by.className('link_jquery')).click();
  };

  this.go = function(name) {
    this[name].click();
  };
};

module.exports = jQueryHomepage;