# Playwright

Is a Automation Framework based in Playwright and Typescript as programming language

## Installation

Go to nodejs.org, download NodeJS and install it

Run the following command to install Playwright
npm init playwright@latest

Run the following command to install Playwright browsers
npx playwright install

Download Visual Studio Code or any other IDE compatible with TypeScript

Provide Write access to Playwright folder if you are having write issues
sudo chmod -R 777 Playwright

## Framework Structure

.
├── tests                       # Repository of test scripts
├── pages                       # Repository of web elements/functions grouped by pages
├── README.md                   # Readme file
└── playwright.config.ts        # Settings

## Execution

Run the command with tag and headed mode allowing to see the browser when tests are executed
URL="https://global.hitachi-solutions.com" npx playwright test --grep "@smoke" --headed

Currently there are 3 test scripts and 3 workers, each test script will run in a worker, so the tests will executed concurrently