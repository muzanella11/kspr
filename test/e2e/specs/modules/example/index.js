const config = require('../../config')
const caseDisabled = config.caseDisabled
const getCase = require('../../case')

module.exports = {
  '@disabled': caseDisabled.example,

  before: function (browser) {
    // browser.resizeWindow(1280, 800); // For resize
    // browser.maximizeWindow() For maximize window but has issues on mac can't maximize window and I change this into nightwatch conf
  },

  'Example case disabled': getCase().example
}
