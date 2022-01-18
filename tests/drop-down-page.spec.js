const { test, expect, context } = require('@playwright/test');
const { DropDownPage } = require('../pages/drop-down-page');

test('Drop Down Page', async ({ page }) => {
    const dropDownPage = new DropDownPage(page);
    await dropDownPage.goto();
    await page.selectOption('select#dropdown', '1');
    const text = await page.$eval('select#dropdown', ele => ele.value)
    expect(text).toEqual('1')
  });

module.exports = DropDownPage