# CA - QA Tech Test

The web solution by Mauricio Valenti Giacomello using Webdriver.IO

For my analisys and findings of the system, [check this file](THOUGHTS.md)

## Requirements

- [Node 12+](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Vscode](https://code.visualstudio.com/) (for automatic linting)

## Setup

Execute command: `yarn install`

Trouble-shooting: in case you receive an error from puppeteer's installation script, just re-run this command. Known issue: https://github.com/puppeteer/puppeteer/issues/5656

## Running tests

Execute command: `yarn test`

## Linting

Execute command: `yarn lint`

## Environment variables

You can either rename the file `.env.example` to `.env` and modify the variables OR add them before your command such as: `HEADLESS=false yarn test`.

Check `.env.example` for possible configurations.

## Reports

The test results are output in console. Any supported reports can be hooked into this framework. Such as [jUnit Reported](https://webdriver.io/docs/junit-reporter.html), [Allure reported](https://webdriver.io/docs/allure-reporter.html), [html reporter](https://webdriver.io/docs/rpii-wdio-html-reporter.html) and many others. The selection of the best one depends on the CI integration, so we're using only the [Spec reporter](https://webdriver.io/docs/spec-reporter.html) for now.

## Test Architecture

1. Code runs through babel, so latest javascript standards is supported
1. The file `wdio.conf.js` holds the configuarion for webdriver.io
1. It uses devtools through puppeteer as automation protocol, instead of webdriver
1. You don't need to have a browser installed, it's using puppeteer's built-in chromium binary for consistency
1. We are using a well known abstraction patter called page-objects. For more information [read more here](https://webdriver.io/docs/pageobjects.html)
1. There's an extension folder, currently only holder one extension to retrieve data from the system's API
1. Tests are written with Jasmine framework which has a similar syntax to Jest. For more Jasmine trick, [visit this page](https://devhints.io/jasmine)
1. We devide each test in 3 sections: "Arrange", "Act", "Assert" (the 3 As of testing)
1. Parallel execution can be configured in the `wdio.conf.js` in the `maxInstances` parameter
1. By default, using most popular combination of browser rendering engine and browser window resolution (chromium @ 1366px by 768px)
1. Test results are logged on the console for now. Check reports section above