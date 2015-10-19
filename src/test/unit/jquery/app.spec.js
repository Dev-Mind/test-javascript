describe('Jquery : Application', function () {

  describe('method : bootstrap', function(){
    beforeEach(function(){
      spyOn(app, 'loadTemplate');
    });

    it('should init page and load the 3 templates', function () {
      //Act
      app.bootsrap();
      //Assert
      expect(app.loadTemplate.calls.count()).toBe(3);
    });


    it('should load the template header', function () {
      //Act
      app.bootsrap();
      //Assert
      expect(app.loadTemplate.calls.argsFor(0)).toEqual(['#header', 'views/templates/header.html']);
    });

    it('should load the template footer', function () {
      //Act
      app.bootsrap();
      //Assert
      expect(app.loadTemplate.calls.argsFor(1)).toEqual(['#footer', 'views/templates/footer.html']);
    });

    it('should load the home page in the main view', function () {
      //Act
      app.bootsrap();
      //Assert
      expect(app.loadTemplate.calls.argsFor(2)).toEqual(['#content', 'views/home.html']);
    });
  });

  it('method : loadTemplate', function () {
    app.loadTemplate();
  });
});