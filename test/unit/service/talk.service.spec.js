/**
 * Created by Dev-Mind
 * *******************************
 * Test d'un service Angular qui renvoie des promesses au controller associé. Montre l'utilisation
 * de $httpBackend
 */
(function () {
  'use strict';

  describe('talkService : ', function () {

    var $httpBackend, service;

    beforeEach(module('at-services'));

    beforeEach(inject(function ($injector) {
      service = $injector.get('talkService');
      $httpBackend = $injector.get('$httpBackend');
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    function createTalk(id, format, title) {
      return {
        id: id,
        format: format,
        title: title
      };
    }



    describe('get', function () {

      it('should find a talk', function () {
        var result;

        $httpBackend.expectGET('/api/talks/1').respond(createTalk(1));

        service.get("1").then(function(talk){
          result = talk;
        });
        $httpBackend.flush();

        expect(result.id).toBe(1);
      });

      it('should not find a talk if id invalid', function () {
        var result;
        $httpBackend.expectGET('/api/talks/1sq').respond(404);

        service.get("1sq").then(function (talk) {
          result = talk;
        });
        $httpBackend.flush();

        expect(result).toBeUndefined();
      });

    });

    describe('getAll', function () {
      var filters;

      beforeEach(function () {
        //The server send HATEOAS request via Spring Data Rest
        $httpBackend.expectGET('/api/talks').respond({
          _embedded: {
            talks: [
              createTalk(1, 'Keynote'),
              createTalk(2, 'Talk'),
              createTalk(3, 'Workshop')
            ]
          }
        });

        filters = {
          keynote: true,
          talk: true,
          workshop: true
        };
      });

      it('should find all the talks, keynotes and workshop', function () {
        var result;
        service.getAll(filters).then(function (talks) {
          result = talks;
        });
        $httpBackend.flush();

        expect(result.length).toBe(3);
      });

      it('should find only the keynotes', function () {
        var result;
        filters.talk = false;
        filters.workshop = false;

        service.getAll(filters).then(function (talks) {
          result = talks;
        });
        $httpBackend.flush();

        expect(result.length).toBe(1);
        expect(result[0].format).toBe('Keynote');
      });

      it('should find only the workshops', function () {
        var result;
        filters.talk = false;
        filters.keynote = false;

        service.getAll(filters).then(function (talks) {
          result = talks;
        });
        $httpBackend.flush();

        expect(result.length).toBe(1);
        expect(result[0].format).toBe('Workshop');
      });

    });

    describe('getTalkSpeakers', function () {

      it('should find talk speakers', function () {
        var result;
        $httpBackend.expectGET('/api/talks/1/speakers').respond(
          {
            _embedded: {
              speakers: [
                {
                  id: 1,
                  urlimage: 'http://dev-mind.fr/img/test.png',
                  firstname: 'Guillaume'
                }
              ]}
          });

        service.getTalkSpeakers(1).then(function (data) {
          result = data;
        });

        $httpBackend.flush();

        expect(result[0].firstname).toBe('Guillaume');
      });

      it('should return empty table if no speaker found', function () {
        var result;
        $httpBackend.expectGET('/api/talks/1/speakers').respond([]);

        service.getTalkSpeakers(1).then(function (data) {
          result = data;
        });

        $httpBackend.flush();

        expect(result).toEqual([]);
      });

    });

    describe('save', function () {
      var talk, result;

      it('should create a new talk when id is undefined', function () {
        talk = createTalk(undefined, 'Talk', 'My talk');
        $httpBackend.expectPOST('/api/talks', talk).respond(201);

        service.save(talk).then(function (data) {
          result = data;
        });
        $httpBackend.flush();

        expect(result.status).toBe(201);
      });

      it('should update a talk when id is defined', function () {
        talk = createTalk(1, 'Talk', 'My talk');
        $httpBackend.expectPUT('/api/talks/1', talk).respond(201);

        service.save(talk).then(function (data) {
          result = data;
        });
        $httpBackend.flush();

        expect(result.status).toBe(201);
      });
    });
  });


})();