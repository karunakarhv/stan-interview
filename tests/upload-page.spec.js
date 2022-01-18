const { test, expect, context } = require('@playwright/test');
const { UploadPage } = require('../pages/upload-page');

test('Upload Page - Success', async ({ page }) => {
    const uploadPage = new UploadPage(page);
    await uploadPage.goto();
    await uploadPage.upload();
    const value = await page.locator('//*[@id="content"]/div/h3').innerText();
    expect(value == 'File Uploaded!');
  });

module.exports = UploadPage