
describe('Page talk', function () {

  beforeEach(function () {
    browser.get('http://localhost:4000/talk')
  });

  it('should filter talk list', function () {
    var input = element(by.model('search'));
    input.sendKeys('microp');
    expect(element.all(by.repeater()));
  });
});