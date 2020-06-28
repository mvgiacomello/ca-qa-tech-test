require('dotenv').config()

// Changing default timeout
// may cause unexpected errors
const defaultTimeout = 60000

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
          ...(process.env.HEADLESS === 'false' ? [] : ['--headless'])
        ]
      }
    }
  ],
  logLevel: process.env.LOG_LEVEL || 'info',
  baseUrl: process.env.BASE_URL || 'http://qa-test.data-playground-1.ivxs.uk/',
  waitforTimeout: defaultTimeout,
  connectionRetryTimeout: defaultTimeout,
  connectionRetryCount: 3,
  services: [],
  framework: 'jasmine',
  reporters: ['spec'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: defaultTimeout,
    helpers: [require.resolve('@babel/register')]
  },

  beforeTest: () => {
    browser.deleteAllCookies()
    // Using most popular resolution:
    // w3schools.com/browsers/browsers_display.asp
    browser.setWindowSize(1366, 768)
  }
}
