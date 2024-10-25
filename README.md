# E2E-Automation - Playwright

## Requirements
- Node.js 18+
- Compatible operating systems:
  - Windows 10+, Windows Server 2016+, or Windows Subsystem for Linux (WSL)
  - MacOS 12 Monterey, MacOS 13 Ventura, or MacOS 14 Sonoma
  - Debian 11, Debian 12, Ubuntu 20.04, or Ubuntu 22.04, with x86-64 or arm64 architecture.

## Installation
To install Playwright for the first time, run:

➡️ npm init playwright@latest

## Commands
Inside the project directory, you can use the following commands:

- `npx playwright test`: Runs the end-to-end tests.
- `npx playwright test --ui`: Starts the interactive UI mode.
- `npx playwright test --project=chromium`: Runs the tests only on Desktop Chrome.
- `npx playwright test example`: Runs the tests in a specific file.
- `npx playwright test --debug`: Runs the tests in debug mode.
- `npx playwright codegen`: Auto generates tests with Codegen.

Alternatively, there have been added different ways to run the tests, as shown below:

On `package.json`:
```json
  "scripts": {
    "exec": "npx playwright test",
    "smoke": "npx playwright test --grep @smoke",
    "regression": "npx playwright test --grep @regression"
  },
```

Then, execute the command: `npm run exec`

## Folder Structure

    +-- .github/
    |   +-- workflows/
    |   |   +-- playwright.yml
    
    +-- pages/
    |   +-- resultsPage.js
    |   +-- searchPage.js
    
    +-- tests/
    |   +-- test1.spec.js
    |   +-- test2.spec.js
    |   +-- test3.spec.js
    
    +-- utils/
    |   +-- requestsManager.js
    
    +-- test-results/
    
    +-- .gitignore
    +-- package-lock.json
    +-- package.json
    +-- playwright.config.ts
    +-- README.md
    +-- QA - TestCases.pdf
    +-- Improvements.txt

## Configuration
`playwright.config.ts` ➡️ This file is important for the configuration in order to set up the driver properly.

The items to take into account are:

`baseURL` ➡️ This variable will keep the URL needed to execute the E2E tests on any browser as desired.

> [!CAUTION]
> Here will be needed the base URL, please do not put any URL with extra rediects.

`headless` ➡️ This variable needs to be set up on FALSE (false) everytime the code is pushed to the remote repo.

> [!NOTE]
> Locally it could be set to TRUE (true) while testing the scripts.

`actionTimeout` ➡️ This variable will determine the action time needed for any action the driver could take as it's maximum time it could take. By default is set up to 5 seconds.
