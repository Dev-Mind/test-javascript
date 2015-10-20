/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var jQueryTalkPage = function () {

  this.url = require('../../serverUrl.js').URL;

  //Protractor can't be used in a non angular app. So we have to call the webdriver
  this.get = function () {
    browser.get(this.url);
    element(by.className('link_jquery')).click();
    element(by.className('link_talk')).click();
  };

  this.filter = function(name) {
    var input = element(by.id('session-search'));
    input.sendKeys(name);
  };

  this.nbElementInList = function(){
    //We can't use waitForAngular in our test so we need to wait that the DOM is updated manually
    return browser.driver.wait(function() {
      return element.all(by.className('jt-talk-line')).count();
    });
  }

};

module.exports = jQueryTalkPage;