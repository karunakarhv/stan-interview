## Structure and Framework of Solution?

Structure - I followed the design pattern Page Object Model, by keeping each page in the pages folder and relevant tests under the test folder.
Framework - Used Playwright as mentioned in the document.

## Improvements?

I should have added negative test scenarios as well. Navigation to each page, which is missing.

## What would you do if you were allocated more time?

Could have added some more of below:
1. Pages
2. Test scenarios,
3. Organised Test Suites
4. Better Reporting - Any third party integration reporting.

## What did you think of this challenge?

I was a total beginner to playwright and I had to brush up the javascript syntax. I liked the challenge and learnt a lot.

## How to initialize the project
npx playwright init
The above command helped me to lay the structure of my project.

## How to run the test
npx playwright test

## Results
Running 12 tests using 2 workers
  12 passed (46s)

To open last HTML report run:
  npx playwright show-report

Reports are under playwright-report folder - index.html