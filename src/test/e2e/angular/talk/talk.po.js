var AngularTalkPage = function () {

  this.search = element(by.model('search'));
  this.list = element.all(by.repeater('session in ctrl.sessions'));

  this.get = function () {
    browser.get('http://localhost:4000/talk');
  };

  this.filter = function(name) {
    this.search.sendKeys(name);
  };
};

module.exports = AngularTalkPage;