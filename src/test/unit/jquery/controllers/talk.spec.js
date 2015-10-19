describe('Jquery : Controller talk', function () {

  var controller;

  beforeEach(function () {
    controller = app.talk;
  });

  function createSpeakers(){
    return [
      {
        idMember:1,
        firstname: 'Guillaume',
        lastname: 'EHRET'
      },
      {
        idMember:2,
        firstname: 'Dev',
        lastname: 'Mind'
      }]
  }

  function createTalks(withoutSpeaker){
    var talks =  [{
      title: 'First session',
      lang: 'EN',
      format : 'talk',
      summary: 'Tests in JavaScript'
    },
      {
        title: 'Second session',
        lang: 'FR',
        format : 'talk',
        summary: 'Tests in Java'
      }];

    if(!withoutSpeaker){
      talks[0].speakers = [createSpeakers()[0]];
      talks[1].speakers = [createSpeakers()[1]];
    }
    return talks;
  }

  function createJsonTalksSentByRemoteServer(){
    var talks =  createTalks(true);
    talks[0]._links = {
      speaker : { href : 'http://localhost/speaker/1'}
    };
    talks[1]._links = {
      speaker : { href : 'http://localhost/speaker/2'}
    };
    return talks;
  }

  describe(' method : callBackTalks', function () {
    it('should update talks', function () {
      controller.callBackTalks(createJsonTalksSentByRemoteServer());
      expect(controller.data).toEqual(createJsonTalksSentByRemoteServer());
    });
  });

  describe(' method : callBackSpeakers', function () {
    it('should update talks and add the good speaker', function () {
      //The talk have been updated
      controller.data = createJsonTalksSentByRemoteServer();
      //Act
      controller.callBackSpeakers(createSpeakers());

      //We delete the links to simplify the expect
      delete controller.data[0]._links;
      delete controller.data[1]._links;
      expect(controller.data).toEqual(createTalks());
    });
  });

  describe(' method : talkFilter', function () {
    beforeEach(function () {
      controller.data = createTalks();
      spyOn(controller, 'updateDom');
    });

    it('should display all the sessions if filter is undefined', function () {
      controller.talkFilter()
      expect(controller.updateDom.calls.argsFor(0)[0]).toEqual(createTalks());
    });

    it('should filter session by summary', function () {
      controller.talkFilter('First')
      expect(controller.updateDom.calls.argsFor(0)[0]).toEqual([createTalks()[0]]);
    });

  });

  describe(' method : updateDom', function () {

    beforeEach(function () {
      $('body').append('<table class="mytest"><tbody class="session-table-content"></tbody></table>');
      spyOn(componentHandler, 'upgradeAllRegistered');
    });

    afterEach(function () {
      $(".mytest").remove();
    });

    it('should add the message "Pas de session correspondant à vos critères de recherche" when no talk', function () {
      controller.updateDom();
      expect($(".session-table-content").text()).toBe('Pas de session correspondant à vos critères de recherche');
    });

    it('should add a 2 talks', function () {
      controller.updateDom(createTalks());

      expect($("tr").length).toBe(2);
    });

    it('should add a new line for the session with the name of th speaker, the name of the session', function () {
      controller.updateDom(createTalks());

      expect($(".jt-text").first().text()).toBe('local_library First session EN');
      expect($(".jt-speaker").first().text()).toBe('Guillaume EHRET');
    });

  });

  describe(' method : extractId', function () {

    it('should return undefined when no arg', function () {
      expect(controller.extractId()).toBeUndefined();
    });

    it('should extract id from URL', function () {
      expect(controller.extractId('http://localhost:8080/talk/123')).toBe('123');
    });

  });

});