
describe('talks', function () {

  beforeEach(function () {
    browser.get('http://localhost:3000/talk');
  });

  it('should filter talk list', function () {
    element(by.name('searchText')).sendKeys('agilité');

    expect(element.all(by.repeater('talk in talks.list'))
      .count()).toBe(4);
  });
});