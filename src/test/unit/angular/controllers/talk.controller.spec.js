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
    httpBackend.expectGET('api/session/talk').respond([{"idSession" : 631,
      _links : {
        "speaker" : [ { "href" : "http://localhost:8080/api/member/1371"}]
      }
    }]);
    httpBackend.expectGET('/api/member/speaker').respond([]);
    httpBackend.flush();

    expect(controller.sessions.length).toBe(1);
    expect(controller.sessions[0].idSession).toBe(631);
  });

  it('should find sessions with no speaker', function () {
    httpBackend.expectGET('api/session/talk').respond([{
      "idSession" : 631,
      _links : {
      }
    }]);
    httpBackend.expectGET('/api/member/speaker').respond([]);
    httpBackend.flush();

    expect(controller.sessions.length).toBe(1);
    expect(controller.sessions[0].speakers).toEqual([]);
  });


  it('should find a session with a speaker', function () {
    httpBackend.expectGET('api/session/talk').respond([{
      "idSession" : 1234,
      _links : {
        "speaker" : [ { "href" : "http://localhost:8080/api/member/631"}]
      }
    }]);
    httpBackend.expectGET('/api/member/speaker').respond([{ "idMember" : 631, "firstname" : "Stéphane", "lastname" : "Bortzmeyer"}]);
    httpBackend.flush();

    expect(controller.sessions[0].speakers).toEqual([{ "idMember" : 631, "firstname" : "Stéphane", "lastname" : "Bortzmeyer"}]);
  });

});