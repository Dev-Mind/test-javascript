/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */
'use strict';

var ScreenShot = require('../../ScreenShot.js');

var AngularHomepage = function() {

  this.linkTalk = $$('.link_talk').first();
  this.linkHome = element.all(by.className('link_home')).first();
  this.linkJqueryApp = element(by.className('link_jquery'));

  this.go = function(name) {
    this[name].click();
  };

  this.takeScreeenShot = function(name){
    // within a test:
    browser.takeScreenshot().then(function (png) {
      new ScreenShot().writeScreenShot(png, name);
    });
  }
};

module.exports = AngularHomepage;