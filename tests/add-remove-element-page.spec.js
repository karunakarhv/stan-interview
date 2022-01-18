const { test, expect } = require('@playwright/test');
const { AddRemoveElements } = require('../pages/add-remove.page');

test('Add Remove Element', async ({ page }) => {
    const addRemoveElements = new AddRemoveElements(page);
    await addRemoveElements.goto();
    await expect(page.locator('text=Add/Remove Elements').first()).toBeVisible();
    await addRemoveElements.add_element();
    await expect(addRemoveElements.add_element_visible()).toBeTruthy();
    await addRemoveElements.remove_element();
  });

  module.exports = AddRemoveElements