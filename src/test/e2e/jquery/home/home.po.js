/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';


var JQueryHomepage = function() {

  this.linkHome = element.all(by.className('link_home')).first();
  this.linkAngularApp = element(by.className('link_angular'));
  this.linkJQueryTalk = element.all(by.className('link_talk')).first();


  this.get = function() {
    browser.get('/');
    element(by.className('link_jquery')).click();
  };

  this.go = function(name) {
    this[name].click();
  };

};

module.exports = JQueryHomepage;