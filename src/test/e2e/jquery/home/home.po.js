/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var jQueryHomepage = function() {

  this.url = require('../../serverUrl.js').URL;
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