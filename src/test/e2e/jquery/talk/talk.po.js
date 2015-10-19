var jQueryTalkPage = function () {

  //Protractor can't be used in a non angular app. So we have to call the webdriver
  this.get = function () {
    browser.get('http://localhost:4000');
    element(by.className('link_jquery')).click();
    element(by.className('link_talk')).click();
  };

  this.filter = function(name) {
    var input = element(by.id('session-search'));
    return input.sendKeys(name);
  };

  this.nbElementInList = function(){
    //We can't use waitForAngular in our test so we need to wait that the DOM is updated manually
    return browser.driver.wait(function() {
      return element.all(by.className('jt-talk-line')).count();
    });
  }

};

module.exports = jQueryTalkPage;