/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */
'use strict';

var ServerUrl = require('../../ServerUrl.js');

var AngularHomepage = function() {

  this.url = new ServerUrl().URL;

  this.linkTalk = $('.link_talk');
  this.linkHome = element(by.className('link_home'));
  this.linkJqueryApp = element(by.className('link_jquery'));

  this.go = function(name) {
    this[name].click();
  };
};

module.exports = AngularHomepage;