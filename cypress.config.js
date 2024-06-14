const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "projectId": 'sjnqhg',
  "viewportWidth": 1280,
  "viewportHeight": 800,
  e2e: {
    setupNodeEvents(on, config) {

      return config;
      // implement node event listeners here
     
    },
    fixturesFolder: 'cypress/e2e/fixtures',
   
    video: true,
    videosFolder: 'cypress/e2e/videos',
    screenshotsFolder: 'cypress/e2e/screenshots',
  
    // pageLoadTimeout:60000 ,
    screenshots: true,
  
    screenshotOnRunFailure: true,
    reporter: 'mocha-allure-reporter',
    reporterOptions: {
      targetDir: 'allure-results'
    }

    },
  },
);
