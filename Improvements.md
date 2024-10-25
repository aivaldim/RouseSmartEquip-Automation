# Improvements

## POM and Pages clases usage:
- We could split the selectors to another file, so we could import the selectors when trying to use any of them.
- We could try to implement Factory design pattern in order to centralize the POM clases inicialization.

## Reporting tool:
- We could add a third party reporting tool as could be AllureReports, this tool provides a well-known HTML report with lots of features to work on.

## Drivers setup:
- We should define which browsers are we going to run the tests on. Right now we have it setup for Chrome, Safari and Firefox.
- We should test more the tests stability in order to define proper timeouts or actionTimeouts to avoid flackiness.

## Test case designs:
- We should define a better way to store the tests data, and expected values to be taken into account on the assertions.
- We could add a way to handle the test cases data and steps using Gherkin+Cucumber if the scenarios get too complex or if there are several steps that are needed across the different scenarios.

## CI/CD workflows:
- We should determine a better strategy when doing a Merge Request. For example we should not be able to merge when the current branch has not ran successfully.
- We should link/relate the tests pipeline with the project under test so every time the dev team makes a Merge Request, the tests are triggered automatically.
- We should set a periodic timeline (scheduled executions) that the tests that we have are ran automatically. For example, every night or every two days, or so on.
- We should set the workflow to be run manually and with runtime variables so the QA team could run smoke, regressions, certain portion of tests, or any other option as needed.
