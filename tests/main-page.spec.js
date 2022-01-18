// @ts-check
const { test, expect } = require('@playwright/test');
const { Page } = require('../pages/page');

test('Main page test', async ({ page }) => {
  const internetDev = new Page(page);
  await internetDev.goto();
  await expect(page).toHaveTitle(/The Internet/);
});


module.exports = Page
