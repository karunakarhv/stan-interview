const { test, expect } = require('@playwright/test');
const { CheckboxesPage } = require('../pages/check-boxes-page');

test('Checkboxes', async ({ page }) => {
    const checkBoxesPage = new CheckboxesPage(page);
    await checkBoxesPage.goto();
    await expect(checkBoxesPage.checkboxes_content_visible()).toBeTruthy();
    await checkBoxesPage.click_checkboxes();
  });

  module.exports = CheckboxesPage