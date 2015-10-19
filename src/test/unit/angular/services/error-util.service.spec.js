describe('Angular : Service errorUtil', function(){

  var service, response;

  beforeEach(module('jt-services'));

  beforeEach(inject(function($injector){
    response = {
      headers : angular.noop,
      data : {}
    };
    service = $injector.get('errorUtil');
  }));

  it('should return true when response Content type is "application/json" and when the response has a message', function(){
    spyOn(response, 'headers').and.returnValue('application/json');
    response.data.message = 'An error occured';
    expect(service.isFunctionalError(response)).toBeTruthy();
  });

  it('should return false by default', function(){
    expect(service.isFunctionalError(response)).toBeFalsy();
  });
});
