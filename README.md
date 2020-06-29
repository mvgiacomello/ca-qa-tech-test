# CA - QA Tech Test

The web solution by Mauricio Valenti Giacomello using Webdriver.IO

For my analisys and findings of the system, [check this file](THOUGHTS.md)

## Requirements

- Node 12+
- Yarn
- Vscode (for automatic linting)

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

## Test Architecture

1. Code runs through babel, so latest javascript standards is supported
1. The file `wdio.conf.js` holds the configuarion for webdriver.io
1. It uses devtools through puppeteer as automation protocol, instead of webdriver
1. You don't need to have a browser installed, it's using puppeteer's built-in chromium binary for consistency
1. We are using a well known abstraction patter called page-objects. For more information [read more here](https://webdriver.io/docs/pageobjects.html)
1. There's an extension folder, currently only holder one extension to retrieve data from the system's API
1. Tests are written with Jasmine framework which has a similar syntax to Jest. For more Jasmine trick, [visit this page](https://devhints.io/jasmine)
1. We devide each test in 3 sections: "Arrange", "Act", "Assert" (the 3 As of testing)