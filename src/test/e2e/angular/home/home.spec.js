'use strict';

var AngularHomepage = require('./home.po.js');

describe('Angular Homepage', function(){

  var page = new AngularHomepage();

  beforeEach(function(){
    browser.get(page.url);
  });

  it('should have a title "Tests en Angular"', function(){
    expect(browser.getTitle()).toBe('Tests en Angular');

  });

  it('should refresh home page', function(){
    page.go('linkHome');
    expect(browser.getCurrentUrl()).toBe(page.url + 'home');
  });

  it('should open talk page', function(){
    page.go('linkTalk');
    expect(browser.getCurrentUrl()).toBe(page.url + 'talk');
  });

  it('should open jquery app', function(){
    page.go('linkJqueryApp');
    //Protractor can't be used in a non angular app. So we have to call the webdriver
    expect(browser.driver.getTitle()).toBe('Tests en jQuery');
  });
});

