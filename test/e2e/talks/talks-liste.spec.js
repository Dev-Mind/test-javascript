/**
 * Created by Dev-Mind
 */
(function () {
  'use strict'

  describe('Talk list', function () {

    beforeEach(function () {
      browser.get('http://localhost:3000/talk');
    });

    it('should have a list of talks', function () {
      expect(element.all(By.repeater('talk in talks.list')).count()).toBe(64);
    });

    it('should filter only keynote if I deselect options for Talks and Workshops', function () {
      element(By.model('talks.filter.talk')).click();
      element(By.model('talks.filter.workshop')).click();
      expect(element.all(By.repeater('talk in talks.list')).count()).toBe(7);
    });

    it('should filter talk if I enter "test"', function () {
      element(By.model('talks.searchText')).sendKeys('Innovation');
      var talks = element.all(By.repeater('talk in talks.list'));
      expect(talks.count()).toBe(5);
    });

    it('should open a dialog when user click on a user in the list', function () {
      element(By.className('md-list-item-text')).click();
      expect(element(By.className('md-dialog-container')).isDisplayed()).toBeTruthy();
      expect(element(By.className('md-dialog-container')).element(By.tagName('h3')).getText()).toBe('North Dan');
    });
  });
})();