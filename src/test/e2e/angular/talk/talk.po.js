var serverUrl = require('../../serverUrl.js');

var AngularTalkPage = function () {

  this.url = new serverUrl().URL;
  this.search = element(by.model('search'));
  this.list = element.all(by.repeater('session in ctrl.sessions'));

  this.get = function () {
    browser.get(this.url + 'talk');
  };

  this.filter = function(name) {
    this.search.sendKeys(name);
  };
};

module.exports = AngularTalkPage;