var serverUrl = require('../../serverUrl.js');

describe('Angular Talk', function(){

  var url = new serverUrl().URL;

  describe('Desactivate waitForAngular', function(){

    beforeEach(function(){
      //Protractor wait for Angular by default ==> Failed: Error while waiting for Protractor to sync with the page: "angular could not be found on the window"
      //So you can desactive this param
      browser.ignoreSynchronization = true;

      browser.get(url);
      element(by.className('link_jquery')).click();
      element(by.className('link_talk')).click();
    });

    it('should load the 64 talks when the screen is opened', function(){
      //We can't use waitForAngular in our test so we need to wait that the DOM is updated manually
      expect(browser.driver.wait(function() {
        return element.all(by.className('jt-talk-line')).count();
      })).toBe(64);
    });

  });


  describe('Use directly webdriver', function(){

    beforeEach(function(){
      browser.driver.get(url);
      browser.driver.findElement(By.className('link_jquery')).click();
      browser.driver.findElement(By.className('link_talk')).click();
    });

    it('should load the 64 talks when the screen is opened', function(){
      expect(browser.driver.wait(function() {
        return browser.driver.findElements(By.className('jt-talk-line')).then(function(arr){
          return arr.length;
        });
      })).toBe(64);
    });

  });
});

