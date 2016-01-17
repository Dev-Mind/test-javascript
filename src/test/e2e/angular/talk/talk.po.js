/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var AngularTalkPage = function () {

  this.search = element(by.model('search'));
  this.list = element.all(by.repeater('session in ctrl.sessions'));

  this.filter = function(name) {
    this.search.sendKeys(name);
  };
};

module.exports = AngularTalkPage;