describe('Angular : Controller TalkCtrl', function () {

  var controller, httpBackend;

  beforeEach(module('jt-controllers'));

  beforeEach(inject(function($controller, $http, $httpBackend){
    httpBackend = $httpBackend;
    controller = $controller('TalkCtrl', {
      $http : $http
    });
  }));


  it('should find sessions', function () {
    httpBackend.expectGET('api/session/talk?year=2015').respond([
      builders.createSession(631).title('Amazing session').speaker(567).build(),
      builders.createSession(634).title('Unbelievable session').speaker(498).build()
    ]);
    httpBackend.expectGET('api/member/speaker?year=2015').respond([]);
    httpBackend.flush();

    expect(controller.sessions.length).toBe(2);
  });

  it('should find one session with a speaker', function () {
    httpBackend.expectGET('api/session/talk?year=2015').respond([
      builders.createSession(631).title('Amazing session').speaker(567).build(),
    ]);
    httpBackend.expectGET('api/member/speaker?year=2015').respond([builders.createSpeaker(567).firstname("Stéphane").lastname("Bortzmeyer").build()]);
    httpBackend.flush();

    expect(controller.sessions.length).toBe(1);
    expect(controller.sessions[0].speakers).toEqual([{ "idMember" : 567, "firstname" : "Stéphane", "lastname" : "Bortzmeyer"}]);
  });

});