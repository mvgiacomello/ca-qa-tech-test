require('dotenv').config()

exports.config = {
  automationProtocol: 'devtools',
  runner: 'local',
  specs: ['./specs/**.test.js'],
  maxInstances: 1,
  capabilities: [
    {
      // Using most popular browser rendenring engine:
      // w3schools.com/browsers/browsers_chrome.asp
      browserName: 'chromium',
      maxInstances: 1,
      'goog:chromeOptions': {
        binary: require('puppeteer').executablePath(),
        args: [
          '--no-sandbox',
          '--disable-dev-shm-usage',
          ...(process.env.HEADLESS === 'true' ? ['--headless'] : [])
        ]
      }
    }
  ],
  logLevel: process.env.LOG_LEVEL || 'info',
  baseUrl: process.env.BASE_URL || 'http://qa-test.data-playground-1.ivxs.uk/',
  waitforTimeout: 60000,
  connectionRetryTimeout: 60000,
  connectionRetryCount: 3,
  services: [],
  framework: 'jasmine',
  reporters: ['spec'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
    helpers: [require.resolve('@babel/register')]
  },

  beforeTest: () => {
    browser.deleteAllCookies()
    // Using most popular resolution:
    // w3schools.com/browsers/browsers_display.asp
    browser.setWindowSize(1366, 768)
  }
}
