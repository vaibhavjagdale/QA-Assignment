const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": 'https://careers.justeattakeaway.com/global/en/home',
    "defaultCommandTimeout": 20000,
    "pageLoadTimeout": 20000,
    "screenshotsFolder": "cypress/screenshots",
    "video": false,
    "chromeWebSecurity": false,
    reporter: 'mochawesome',
  },
});
