/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var JQueryTalkPage = function () {

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

module.exports = JQueryTalkPage;