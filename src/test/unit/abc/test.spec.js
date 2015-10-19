

describe('WelcomeSpeaker', function(){

  var obj, speakerService;

  beforeEach(function () {
    speakerService = { getBadge : function(){}};

    obj = new WelcomeSpeaker(speakerService);
  });


  describe('sayHello', function () {
    it('should say "Who are you ?" when name is not defined', function(){
      var msg = obj.sayHello();

      expect(msg).toBe('Who are you ?');
    });

    it('should return "Hello JugSummerCamp, your badge number is C832J" when name is JugSummerCamp', function () {

      spyOn(speakerService, 'getBadge').and.returnValue('C832J');

      var msg = obj.sayHello('JugSummerCamp');

      expect(msg).toBe('Hello JugSummerCamp, your badge number is C832J');
    });

    it('should return "Error occurred" when speakerService fails', function () {

      spyOn(speakerService, 'getBadge').and.throwError(new Error());

      var msg = obj.sayHello('JugSummerCamgp');

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