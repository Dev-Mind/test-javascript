'use strict';

var AngularTalkPage = require('./talk.po.js');

describe('Angular Talk', function(){

  var page = new AngularTalkPage();

  beforeEach(function(){
    browser.get('/talk');
  });

  it('should load the 64 talks when the screen is opened', function(){
    expect(page.list.count()).toBe(64);
  });

  it('should filter the list and return 1 element when filter is "micro"', function(){
    page.filter('microp');
    expect(page.list.count()).toBe(1);
  });
});

