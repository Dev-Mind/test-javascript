'use strict';


describe('jQuery Talk', () =>{

  describe('Desactivate waitForAngular', () => {

    beforeEach(() => {
      //Protractor wait for Angular by default ==> Failed: Error while waiting for Protractor to sync with the page: "angular could not be found on the window"
      //So you can desactive this param
      browser.ignoreSynchronization = true;

      browser.get('/');
      element.all(by.className('link_jquery')).first().click();
      element.all(by.className('link_talk')).first().click();
    });

    it('should load the 64 talks when the screen is opened', () => {
      //We can't use waitForAngular in our test so we need to wait that the DOM is updated manually
      expect(browser.driver.wait(function() {
        return element.all(by.className('jt-talk-line')).count();
      })).toBe(64);
    });

  });


  describe('Use directly webdriver', () => {

    beforeEach(() => {
      browser.driver.get('http://localhost:4000');
      browser.driver.findElement(By.className('link_jquery')).click();
      browser.driver.findElement(By.className('link_talk')).click();
    });

    it('should load the 64 talks when the screen is opened', () => {
      expect(browser.driver.wait(() =>  {
        return browser.driver.findElements(By.className('jt-talk-line')).then(function(arr){
          return arr.length;
        });
      })).toBe(64);
    });

  });
});

