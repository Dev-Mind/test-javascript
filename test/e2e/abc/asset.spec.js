describe('asset panel', function () {

  var bottomPanelTabs;
  var lines;

  beforeEach(function () {
    browser.get('http://localhost:3000/index-dev.html#/en/pages/bc14ed84-f143-42d8-817c-1b76f1f28563');
    element(by.css('body')).allowAnimations(false);
    //by default the asset panel is not open
    bottomPanelTabs = element.all(by.className('BottomPanel-toggle'));
    browser.actions().click(bottomPanelTabs.last()).perform();

  });

  it('should display an ', function () {
   // browser.actions().click(bottomPanelTabs.last()).perform();
    lines = element.all(by.repeater('asset in assets'));

    expect(lines.count()).toBe(0);
    //
  });
});


