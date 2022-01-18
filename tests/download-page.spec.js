const { test, expect, browserType } = require('@playwright/test');
const { DownloadPage } = require('../pages/download-page');

test('Download Page - Success', async ({ page }) => {
    const downloadPage = new DownloadPage(page);
    await downloadPage.goto();
    await downloadPage.downloadFile();
  });

module.exports = DownloadPage