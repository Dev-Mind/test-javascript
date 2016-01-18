//  Add e2e module to main pb module
angular.module('jt').requires.push('jt.e2e');

angular.module('jt.e2e', ['ngMockE2E']).run(function ($httpBackend, $http) {

    var obj = this;

    //Talks are read locally chen angular is loaded
    $http.get('data/talks.json').then(function(response){
      this.talks = response.data;
    });

    //We mock the remote calls
    $httpBackend.whenGET('api/session/talk?year=2015').respond(this.talk);


  });
