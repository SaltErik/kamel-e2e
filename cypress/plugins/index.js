/// <reference types="cypress" />
'use strict';

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to the project's config changing)

// `on` is used to hook into various events Cypress emits
// `config` is the resolved Cypress config

////////////////////////////////////////////////////////////////////////////////

// NOTE: https://github.com/cypress-io/cypress/issues/518#issuecomment-552382781

let shouldSkip = false;

module.exports = (on) => {
  on('task', {
    resetShouldSkipFlag() {
      shouldSkip = false;
      return null;
    },
    shouldSkip(value) {
      if (value != null) shouldSkip = value;
      return shouldSkip;
    },
  });
};

////////////////////////////////////////////////////////////////////////////////
