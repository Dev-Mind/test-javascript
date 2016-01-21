

describe('WelcomeSpeaker', () => {

  let obj, speakerService;

  beforeEach(() => {
    speakerService = {
      getBadge: function(){}
    };
    obj = new WelcomeSpeaker(speakerService);
  });

  describe('sayHello', () => {
    it('should say "Who are you ?" when name is undefined', () => {
      let msg = obj.sayHello();
      // Assert
      expect(msg).toBe('Who are you ?');
    });

    it('should return "Hello SnowCamp, your badge number is C832J" when name is JugSummerCamp', () => {
      spyOn(speakerService, 'getBadge').and.returnValue('C832J');
      let msg = obj.sayHello('SnowCamp');
      expect(msg).toBe('Hello SnowCamp, your badge number is C832J');
    });

    it('should return "Error occured" when eroor ', () => {
      spyOn(speakerService, 'getBadge').and.throwError();
      let msg = obj.sayHello('SnowCamp');
      expect(msg).toBe('Error occurred');
    });
  });

  describe('sayGoodbye', ()=> {
    it('should return "Goodbye !" when name is undefined', () => {
      let msg = obj.sayGoodbye();
      expect(msg).toBe('Goodbye !');
    });

    it('should return "Goodbye SnowCamp" when name is SnowCamp', () => {
      let msg = obj.sayGoodbye('SnowCamp');
      expect(msg).toBe('Goodbye SnowCamp');
    });

  });

});