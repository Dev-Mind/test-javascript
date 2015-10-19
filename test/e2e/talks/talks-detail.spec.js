/**
 * Created by Dev-Mind
 * *********************
 * Dans cet exemple vous pouvez voir des tests liés aux composants materials
 */
(function () {
  'use strict'

  describe('Talk', function () {

    beforeEach(function () {
      browser.get('http://localhost:3000/talk/1');
    });

    it('should have the title "The Three Ages of Innovation"', function () {
      //Title is in a webcompoenent Material
      //The code in the browser is this one
      //<input ng-model="talk.selectedTalk.title" class="md-display-1 ng-pristine md-input ng-valid ng-valid-required ng-touched" required="" id="input_01Y" tabindex="0" aria-required="false" aria-invalid="false">
      //  #shadow root
      //  <div id="inner-editor">The Three Ages of Innovation</div>
      //</input>
      //If I want to select the text I have to write
      var title = element(By.model('talk.selectedTalk.title')).getAttribute('value');

      expect(title).toBe('The Three Ages of Innovation');
    });

    it('should change icon when the talk type change', function(){
      var img = element(by.tagName('talk-img-format')).element(by.tagName('md-icon')).getAttribute('md-svg-src');
      expect(img).toContain('keynotes');

      element(by.model('talk.selectedTalk.format')).sendKeys('Talk');

      img = element(by.tagName('talk-img-format')).element(by.tagName('md-icon')).getAttribute('md-svg-src');
      expect(img).toContain('talk');
    });

  });
})();