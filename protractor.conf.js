// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['src/test/e2e/**/*.spec.js'],

  baseUrl: 'http://localhost:4000',

  onPrepare: function () {
    browser.driver.manage().window().maximize();
  },

  suites: {
    abc: 'src/test/e2e/abc/**/*.spec.js',
    angular: 'src/test/e2e/angular/**/*.spec.js',
    jquery: 'src/test/e2e/jquery/**/*.spec.js'
  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
