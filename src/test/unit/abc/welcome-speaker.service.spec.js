

describe('WelcomeSpeaker', ()=>{

  let obj, speakerService;


  beforeEach(() => {
    speakerService = {
      getBadge: function(){
        return 'C832J'
      }
    };

    obj = new WelcomeSpeaker(speakerService);
  });

  describe('sayHelllo', ()=>{
    it('should return "Who are you ?" when name is undefined', () => {
      let msg = obj.sayHello();
      expect(msg).toBe('Who are you ?');
    });

    it('should return "Hello SnowCamp, your badge number is C832J" when name is JugSummerCamp', () => {
      let msg = obj.sayHello('SnowCamp');
      expect(msg).toBe('Hello SnowCamp, your badge number is C832J');
    });

    it('should return "Error occurred', () => {
      spyOn(speakerService, 'getBadge').and.throwError();
      let msg = obj.sayHello('SnowCamp');
      expect(msg).toBe('Error occurred');
    });
  });
  describe('sayGoodbye', ()=>{
    it('should return "Who are you ?" when name is undefined', () => {
      let msg = obj.sayHello();
      expect(msg).toBe('Who are you ?');
    });

    it('should return "Hello SnowCamp, your badge number is C832J" when name is JugSummerCamp', () => {
      let msg = obj.sayHello('SnowCamp');
      expect(msg).toBe('Hello SnowCamp, your badge number is C832J');
    });

    it('should return "Error occurred', () => {
      spyOn(speakerService, 'getBadge').and.throwError();
      let msg = obj.sayHello('SnowCamp');
      expect(msg).toBe('Error occurred');
    });
  });

});