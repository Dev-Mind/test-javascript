describe('Screen talks', () => {

  beforeEach(() => {
    browser.get('/talk');
  });

  it('should display the 64 talks when the page is opened', () => {
    expect(element.all(by.className('jt-talk-line')).count()).toBe(64);
    expect($$('.jt-talk-line').count()).toBe(64);
  });

  it('should find one talk when you want to filter the list and find "microp"', () => {
    element(by.id('search')).sendKeys('microp');
    expect($$('.jt-talk-line').count()).toBe(1);
  });
});