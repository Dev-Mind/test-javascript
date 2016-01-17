'use strict';

var AngularHomepage = require('./home.po.js');

fdescribe('Angular Homepage', function(){

  var page = new AngularHomepage();
  var fs = require('fs');

  beforeEach(function(){
    browser.get('/home');
  });

  it('should have a title "Tests en Angular"', () =>{
    expect(browser.getTitle()).toBe('Tests en Angular');
  });

  it('should refresh home page', function(){
    page.go('linkHome');
    expect(browser.getCurrentUrl()).toBe('http://localhost:4000/home');
  });

  it('should open talk page', function(){
    page.go('linkTalk');
    page.takeScreeenShot('talk.png');
    expect(browser.getCurrentUrl()).toBe('http://localhost:4000/talk');
  });

  it('should open jquery app', function(){
    page.go('linkJqueryApp');
    //Protractor can't be used in a non angular app. So we have to call the webdriver
    expect(browser.driver.getTitle()).toBe('Tests en jQuery');
  });
});

