describe('Jquery : Controller menu', function () {

  var controller, event;

  beforeEach(function(){
    controller = app.menu;
    event =  jasmine.createSpyObj('event', ['preventDefault']);
    spyOn(app, 'loadTemplate');
  });

  it('should go to the home page', function () {
    //Act
    controller.goHome(event);
    //Assert
    expect(app.loadTemplate.calls.argsFor(0)).toEqual(['#content', 'views/home.html']);
  });

  it('should go to the TALK page', function () {
    //Act
    controller.goTalk(event);
    //Assert
    expect(app.loadTemplate.calls.argsFor(0)).toEqual(['#content', 'views/jquery/talk.html']);
  });

});