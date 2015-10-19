/**
 * Created by Dev-Mind
 * *******************************
 * Test d'un service Angular qui renvoie des promesses au controller associé. Montre l'utilisation
 * de $httpBackend
 */
(function () {
  'use strict';

  describe('speakerService : ', function () {

    var service, $httpBackend, speaker;

    beforeEach(module('at-services'));

    beforeEach(inject(function ($injector) {
      service = $injector.get('speakerService');
      $httpBackend = $injector.get('$httpBackend');

      speaker = {
        id: 1,
        urlimage: 'http://dev-mind.fr/img/test.png',
        firstname: 'Guillaume',
        lastname: 'EHRET'
      };
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    describe('save', function () {
      var talk;

      beforeEach(function () {
       talk = {
         _links : {
           self : {
             href : 'http://dev-mind.fr/talks/1'
           }
         }
       }
      });

      it('should create a new speaker when id null', function () {
        var response;
        delete speaker.id;
        $httpBackend.expectPOST('/api/speakers', speaker).respond(200, 'speaker created');

        service.save(speaker, talk).then(function(data){
          response = data;
        });

        $httpBackend.flush();
        expect(response.status).toBe(200);
        expect(response.data).toBe('speaker created');
      });

      it('should not create a new speaker when id null and error occurs', function () {
        var response;
        delete speaker.id;
        $httpBackend.expectPOST('/api/speakers', speaker).respond(500, 'speaker not created');

        service.save(speaker, talk).then(function(data){
          response = data;
        });

        $httpBackend.flush();
        expect(response).toBeUndefined();
      });

      it('should update a speaker when id not null', function () {
        var response;
        $httpBackend.expectPUT('/api/speakers/1', speaker).respond(200, 'speaker updated');

        service.save(speaker, talk).then(function(data){
          response = data;
        });
        $httpBackend.flush();

        expect(response.data).toBe('speaker updated');
      });

      it('should add a default image when imageurl undefined', function () {
        var response;
        delete speaker.urlimage;
        $httpBackend.expectPUT('/api/speakers/1', speaker).respond(200, 'speaker updated');

        service.save(speaker, talk).then(function(data){
          response = data;
        });
        $httpBackend.flush();

        expect(speaker.urlimage).toBe('https://sigil.cupcake.io/GuillaumeEHRET');
      });
    });

    describe('remove', function () {
      it('should delete a speaker', function () {
        var response;
        $httpBackend.expectDELETE('/api/speakers/1').respond(200, 'speaker deleted');

        service.remove(speaker).then(function(data){
          response = data;
        });
        $httpBackend.flush();

        expect(response.data).toBe('speaker deleted');
      });

    });

  });

})();