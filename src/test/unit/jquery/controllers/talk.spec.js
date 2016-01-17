describe('Jquery : Controller talk', function () {

  var controller;

  beforeEach(function () {
    controller = app.talk;
  });

  describe(' method : callBackTalks', function () {
    it('should find 2 talks and put them in scope', function () {
      controller.callBackTalks([
        builders.createSession(631).title('Amazing session').speaker(567).build(),
        builders.createSession(634).title('Unbelievable session').speaker(498).build()
      ]);

      expect(controller.data.length).toBe(2);
    });
  });

  describe(' method : callBackSpeakers', function () {
    it('should find talks and speakers', function () {
      //The talk have been updated
      controller.data = [builders.createSession(631).title('Amazing session').speaker(567).build()];
      controller.callBackSpeakers([builders.createSpeaker(567).firstname("Stéphane").lastname("Bortzmeyer").build()]);

      expect(controller.data.length).toBe(1);
      expect(controller.data[0].speakers).toEqual([{ "idMember" : 567, "firstname" : "Stéphane", "lastname" : "Bortzmeyer"}]);
    });
  });

  describe(' method : talkFilter', function () {
    beforeEach(function () {
      controller.data = [
        builders.createSession(631).title('Amazing session').speaker(567).build(),
        builders.createSession(634).title('Unbelievable session').speaker(498).build()
      ];
      spyOn(controller, 'updateDom');
    });

    it('should display all the sessions if filter is undefined', function () {
      controller.talkFilter();
      expect(controller.updateDom.calls.argsFor(0)[0].length).toBe(2);
    });

    it('should filter session by Amazing', function () {
      controller.talkFilter('Amazing');
      var arg = controller.updateDom.calls.argsFor(0)[0];

      expect(arg.length).toBe(1);
      expect(arg[0].title).toBe('Amazing session');
    });

  });

  describe(' method : updateDom', function () {

    function createTalks(){
      return [
        builders.createSession(631).title('Amazing session').speaker(567)
          .addSpeaker(builders.createSpeaker(567).firstname("Stéphane").lastname("Bortzmeyer").build())
          .build(),
        builders.createSession(634).title('Unbelievable session').speaker(498)
          .addSpeaker(builders.createSpeaker(634).firstname("Dan").lastname("North").build())
          .build()
      ];
    }

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

      expect($(".jt-session-title").first().text()).toBe('Amazing session EN');
      expect($(".jt-speaker").first().text()).toBe('Stéphane Bortzmeyer');
    });

  });


});