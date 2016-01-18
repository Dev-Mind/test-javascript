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
    require('babel-core/register', {presets: ["es2015"]});
  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
