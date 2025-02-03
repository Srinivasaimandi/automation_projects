const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  // implement node event listeners here
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  e2e: {
    setupNodeEvents,
    specPattern: "./cypress/integration/*/*.js",
  },
  // below item is set to false for CORS
  chromeWebSecurity: false,

  modifyObstructiveCode: true,
  experimentalSourceRewriting: false,
});
