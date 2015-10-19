/**
 * Created By Dev-Mind
 */
(function () {
  'use strict'

  describe('Homepage', function () {

    beforeEach(function () {
      browser.get('http://localhost:3000/home');
    });

    it('should has a title [Les tests en Javascript]', function () {
      expect(browser.getTitle()).toBe('Les tests en Javascript');
    });

    it('should find 5 links', function () {
      var links = element.all(By.repeater('link in links'));
      expect(links.count()).toBe(5);
      expect(links.getAttribute("aria-label")).toEqual([ 'Dev-Mind', 'Blog', 'Twitter', 'Google+', 'Facebook' ]);
    });

    it('should open talk list', function () {
      element(By.id('buttonTalk')).click();
      expect(browser.getCurrentUrl()).toBe('http://localhost:3000/talk');
    });

    describe('navbar ', function () {

      it('should contain 2 buttons home and talk', function () {
        var buttons = element.all(By.className('dm-toolbar')).getAttribute('md-svg-icon');

        expect(buttons.count()).toBe(2);

        //The fisrt one is home
        expect(buttons.first().getAttribute('md-svg-icon')).toContain('home');
        expect(buttons.last().getAttribute('md-svg-icon')).toContain('talk');
      });

      it('should highlight the button Home', function () {
        expect(element(By.className('dm-svg-active')).getAttribute('md-svg-icon')).toContain('home');
      });

      it('should not highlight the button Talk', function () {
        expect(element(By.className('dm-svg-inactive')).getAttribute('md-svg-icon')).toContain('talk');
      });

    })


  });
})();