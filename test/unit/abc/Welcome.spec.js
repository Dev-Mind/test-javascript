
  describe('WelcomeSpeaker', function(){
    var speakerService, obj;

    beforeEach(function(){
      speakerService = {
        getBadge : function(){}
      }
      obj = new WelcomeSpeaker(speakerService);

    });



    describe('sayHello', function () {
      it('should say "Who are you ?" when name is udefined', function(){
        var msg = obj.sayHello();
        expect(msg).toBe('Who are you ?');
      });

      it('should return "Hello Breizhcamp, your badge number is C832J" when name is Breizhcamp', function () {
        spyOn(speakerService, 'getBadge').and.returnValue('C832J')
        var msg = obj.sayHello('Breizhcamp');
        expect(msg).toBe('Hello Breizhcamp, your badge number is C832J');
      });

      it('should return "Error occurred" when name is Breizhcamp', function () {
        spyOn(speakerService, 'getBadge').and.throwError(new Error())
        var msg = obj.sayHello('Breizhcamp');
        expect(msg).toBe('Error occurred');
      });
    });

    describe('sayGoodbye', function () {

      it('should return "Goodbye !" when name is undefined', function () {
        var msg = obj.sayGoodbye();
        expect(msg).toBe('Goodbye !');
      });

      it('should return "Goodbye Breizhcamp" when name is Breizhcamp', function () {
        var msg = obj.sayGoodbye('Breizhcamp');
        expect(msg).toBe('Goodbye Breizhcamp');
      });

    });
  });