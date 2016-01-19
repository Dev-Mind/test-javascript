'use strict';

var AngularTalkPage = require('./talk.po.js');

describe('Angular Talk', () => {

  beforeEach(() => {
    this.page = new AngularTalkPage();
    browser.get('/talk');
  });

  it('should load the 64 talks when the screen is opened', () => {
    expect(this.page.list.count()).toBe(64);
  });

  it('should filter the list and return 1 element when filter is "micro"', () => {
    this.page.filter('microp');
    expect(this.page.list.count()).toBe(1);
  });
});

