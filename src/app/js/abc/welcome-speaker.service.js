

function WelcomeSpeaker(speakerService) {
  'use strict';

  var obj = this;
  obj.speakerService = speakerService;


  obj.sayHello = function (name) {

    if (!name) {
      return 'Who are you ?';
    }

    try {
      return 'Hello ' + name + ', your badge number is ' + obj.speakerService.getBadge(name);
    }
    catch (e) {
      return 'Error occurred';
    }

  };


  obj.sayGoodbye = function (name) {
    if (!name) {
      return 'Goodbye !'
    }
    return 'Goodbye ' + name;
  }

}