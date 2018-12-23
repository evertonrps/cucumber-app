// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  restartBrowserBetweenTests: true,
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./step-definitions/*.ts'],
    tags: [],
    strict: true,
    format: ["progress","json:.tmp/results.json"],
    dryRun: false,
    compiler: [ 'ts:ts-node']
  },
  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options:{
        // read the options part
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true
    }
}],
  onPrepare: function() {
    browser.manage().window();//.maximize(); // maximize the browser before executing the feature files
  },
  beforeLaunch: () => {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  }
};