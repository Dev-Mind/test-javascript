/**
 * In our tests we often need objects and the best way to have readable tests is to use builders to create complex
 * objects
  */
var builders = (function () {
  'use strict';

  //Object Session
  function Session(idSession) {
    this.session = {
      "idSession" : idSession,
      "format" : "Talk",
      "summary": "",
      "lang" : "EN",
      "speakers":[],
      "links" : [
        {
          "rel" : "self",
          "href" : "http://localhost:8080/api/session/" + idSession
        }
      ]};
    }
  Session.prototype.title = function (title) {
    this.session.title = title;
    return this;
  };
  Session.prototype.speaker = function (idSpeaker) {
    this.session.links.push({
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/" + idSpeaker
    });
    return this;
  };
  Session.prototype.addSpeaker = function (speaker) {
    this.session.speakers.push(speaker);
    return this;
  };
  Session.prototype.build = function () {
    return this.session;
  };


  //Object Session
  function Speaker(idSpeaker) {
    this.speaker = {
      "idMember" : idSpeaker
    };
  }
  Speaker.prototype.firstname = function (firstname) {
    this.speaker.firstname = firstname;
    return this;
  };
  Speaker.prototype.lastname = function (lastname) {
    this.speaker.lastname = lastname;
    return this;
  };
  Speaker.prototype.build = function () {
    return this.speaker;
  };

  return {
    createSession : function(idSession){
      return new Session(idSession);
    },
    createSpeaker : function(idSpeaker){
      return new Speaker(idSpeaker);
    }
  }
})();
