const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    experimentalWebKitSupport:true,
    chromeWebSecurity:false,
    "dashboardRun":"npx cypress run --record --key 58c265e7-7db5-47f1-b521-10e9fa5c5b66"

  },
  projectId: "a35sv9",
  chromeWebSecurity:false
});
