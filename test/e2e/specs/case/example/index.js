// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  before: function (browser) {
    // browser.resizeWindow(1280, 800);
    browser.maximizeWindow()
  },

  'Demo test Googles': function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .assert.elementPresent('#main')
      .assert.elementPresent('div.jsb input[name=btnK]')
      .waitForElementVisible('div.jsb input[name=btnK]', 1000)
      .click('div.jsb input[name=btnK]')
      .moveToElement('div.jsb input[name=btnK]', 0, 0)
      .mouseButtonClick(0)
      .pause(3000)
      .assert.elementPresent('.srg div.g:last-child .rc h3.r a')
      .waitForElementVisible('.srg div.g:last-child .rc h3.r a', 1000)
      .click('.srg div.g:last-child .rc h3.r a')
      // .moveToElement('.srg div.g:last-child .rc h3.r a', 0, 0)
      // .mouseButtonClick(0)
      .pause(100000)
      // .assert.containsText('#main', 'Night Watch', 1000)
      .end()
  },

  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .assert.containsText('h1', 'Welcome to Your Vue.js App')
      .assert.elementCount('img', 1)
      .end()
  }
}
