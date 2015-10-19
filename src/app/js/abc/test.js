function WelcomeSpeaker(speakerService) {
  'use strict';

  this.speakerService = speakerService;


  this.sayHello = function (name) {

    if (!name) {
      return 'Who are you ?';
    }

    try {
      return 'Hello ' + name + ', your badge number is ' + this.speakerService.getBadge(name);
    }
    catch (e) {
      return 'Error occurred';
    }

  };


  this.sayGoodbye = function (name) {
    if (!name) {
      return 'Goodbye !'
    }
    return 'Goodbye ' + name;
  }

}