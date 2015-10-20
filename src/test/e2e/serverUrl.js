//It's better to add this constant in your global conf.
//baseUrl: 'http://localhost:12001',
var serverUrl = function() {
  this.URL = 'http://localhost:4000/';
  //this.URL = 'http://localhost:14001/';
};

module.exports = serverUrl;