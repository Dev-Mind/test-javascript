
var jQueryHomepage = require('./home.po.js');

describe('jQuery Homepage', function(){
  var page;

  beforeEach(function(){
    //Protractor wait for Angular by default ==> Failed: Error while waiting for Protractor to sync with the page: "angular could not be found on the window"
    //So you can desactive this param
    browser.ignoreSynchronization = true;

    page = new jQueryHomepage();
    page.get();
  });

  it('should have a title "Tests en jQuery"', function(){
    //to prevent to use '' at everytime we can declare a constant 'global.drv=browser.driver' in protractor.conf in the block onPrepare
    expect(browser.driver.getTitle()).toBe('Tests en jQuery');

  });

  it('should refresh home page', function(){
    page.go('linkHome');
    expect(browser.driver.getCurrentUrl()).toBe(page.url + 'index-jquery.html');
  });

  it('should open an angular app', function(){
    page.go('linkAngularApp');
    //Protractor can't be used in a non angular app. So we have to call the webdriver
    expect(browser.driver.getTitle()).toBe('Tests en Angular');
  });
});

