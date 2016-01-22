'use strict';

describe('Angular : Controller HomeCtrl', () => {

  let controller;

  beforeEach(module('jt-controllers'));

  beforeEach(inject(function($controller){
    controller = $controller('HomeCtrl', {});
  }));


  it('should have a name in scope', function () {
    expect(controller.name).toBe('Home');
  });

  it('should change name in scope', function () {
    controller.changeName('Test');
    expect(controller.name).toBe('Test')
  });
});