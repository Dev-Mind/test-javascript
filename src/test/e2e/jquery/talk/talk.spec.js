'use strict';

var JQueryHomepage = require('../home/home.po.js');
var JQueryTalkPage = require('./talk.po.js');

describe('jQuery Talk', () => {

  let page = new JQueryTalkPage();
  let menu = new JQueryHomepage();

  beforeEach(() => {

    //Protractor wait for Angular by default ==> Failed: Error while waiting for Protractor to sync with the page: "angular could not be found on the window"
    //So you can desactive this param
    browser.ignoreSynchronization = true;

    menu.get();
    menu.go('linkJQueryTalk');
  });

  it('should load the 64 talks when the screen is opened', function(){
    expect(page.nbElementInList()).toBe(64);
  });

  it('should filter the list and return 3 elements when filter is "microp"', function(){
    //We can't use waitForAngular in this mode. So we need to manage a timeout manually
    //We need to wait the Jquery load
    browser.sleep(1000);
    page.filter('microp');
    browser.sleep(100);
    expect(page.nbElementInList()).toBe(1);
  });
});

