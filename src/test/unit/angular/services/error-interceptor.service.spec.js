describe('Angular : Service error interceptor', function(){

  var service, mockErrorUtil, response, $rootScope;

  beforeEach(module('jt-services'));

  beforeEach(function(){
    mockErrorUtil = {
      isFunctionalError : angular.noop
    };
    response = {
      data : 'error occured'
    };

    module(function($provide) {
      $provide.value('errorUtil', mockErrorUtil);
    })

    inject(function(errorInterceptor, _$rootScope_){
      service = errorInterceptor;
      $rootScope = _$rootScope_;
    });
  });


  it('should populate error in $rootScope when a non functionnal error occured ', function(){
    spyOn(mockErrorUtil, 'isFunctionalError').and.returnValue(false);

    service.responseError(response);

    expect($rootScope.error).toEqual(response);
  });

  it('should not populate error in $rootScope when a functionnal error occured ', function(){
    spyOn(mockErrorUtil, 'isFunctionalError').and.returnValue(true);

    service.responseError(response);

    expect($rootScope.error).toBeUndefined();
  });

});
