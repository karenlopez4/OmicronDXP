const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: 'reporte',
    html: true,
    saveAllAttempts: true
    
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    chromeWebSecurity: false,

  },

});
