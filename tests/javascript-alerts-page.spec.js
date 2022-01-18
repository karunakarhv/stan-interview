
const { test, expect } = require('@playwright/test');
const { JavaScriptAlertsPage } = require('../pages/javascript-alerts-page');

test('Java Script Alert Prompt', async ({ page }) => {
    const javascriptAlertsPage = new JavaScriptAlertsPage(page);
    await javascriptAlertsPage.goto();
    const alertType = await javascriptAlertsPage.js_prompt('Karun')
    expect(alertType == 'prompt')
  });

test('Java Script Alert', async ({ page }) => {
  const javascriptAlertsPage = new JavaScriptAlertsPage(page);
  await javascriptAlertsPage.goto();
  const alertType = await javascriptAlertsPage.js_alert()
  expect(alertType == 'alert')
});

test('Java Script Alert Confirm', async ({ page }) => {
  const javascriptAlertsPage = new JavaScriptAlertsPage(page);
  await javascriptAlertsPage.goto();
  const alertType = await javascriptAlertsPage.js_confirm()
  expect(alertType == 'confirm')
});


  module.exports = JavaScriptAlertsPage