/**
 * Created by Dev-Mind
 * *******************************
 * Test d'une directive simple
 */
(function () {
  'use strict'

  describe('Directive talkImgFormat :', function(){

    var $scope, $compile;

    beforeEach(module('at-directives'));

    beforeEach(inject(function(_$rootScope_, _$compile_){
      $scope = _$rootScope_.$new();
      $compile = _$compile_;
     }));

    function verifyButton(format){
      $scope.talkformat = format;
      var element = $compile('<talk-img-format format="talkformat"></talk-img-format>')($scope);
      $scope.$digest();

      var node = element.find('md-button');
      expect(node.length).toBe(1);
      expect(angular.element(node).attr('aria-label')).toBe(format);
    }

    function verifyTooltip(format){
      $scope.talkformat = format;
      var element = $compile('<talk-img-format format="talkformat"></talk-img-format>')($scope);
      $scope.$digest();

      expect(element.find('md-tooltip').html()).toBe(format);
    }

    function verifyImageIcon(format, icon){
      $scope.talkformat = format;
      var element = $compile('<talk-img-format format="talkformat"></talk-img-format>')($scope);
      $scope.$digest();

      var node = element.find('md-icon');
      expect(node.length).toBe(1);
      expect(angular.element(node).attr('md-svg-src')).toBe('img/icons/' + icon + '.svg');
    }

    describe('with default format Talk', function(){
      it('should display a button with an aria-label [Talk]', function(){
        verifyButton('default');
      });

      it('should display a tooltip [Talk]', function(){
        verifyTooltip('everuthing');
      });

      it('should display a button with an image icon [img/icons/ic_talk.svg]', function(){
        verifyImageIcon('thing', 'ic_talk');
      });
    });

    describe('with format Keynote', function(){
      it('should display a button with an aria-label [Keynote]', function(){
        verifyButton('Keynote');
      });

      it('should display a tooltip [Keynote]', function(){
        verifyTooltip('Keynote');
      });

      it('should display a button with an image icon [img/icons/ic_keynotes.svg]', function(){
        verifyImageIcon('Keynote', 'ic_keynotes');
      });
    });

    describe('with format Workshop', function(){
      it('should display a button with an aria-label [Workshop]', function(){
        verifyButton('Workshop');
      });

      it('should display a tooltip [Workshop]', function(){
        verifyTooltip('Workshop');
      });

      it('should display a button with an image icon [img/icons/ic_workshop.svg]', function(){
        verifyImageIcon('Workshop', 'ic_workshop');
      });
    });

  });
})();


