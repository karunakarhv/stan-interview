const { Page } = require('./page');

exports.DownloadPage = class DownloadPage extends Page {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);
        this.page = page;
        this.file1 = '//*[@id="content"]/div/a[1]'
    }

    async goto() {
        await this.page.goto(this.url + '/download');
    }

    async downloadFile(){
        const [ download ] = await Promise.all([
            // Start waiting for the download
            this.page.waitForEvent('download'),
            // Perform the action that initiates download
            this.page.locator(this.file1).click()
          ]);
          // Wait for the download process to complete
          await download.saveAs(download.suggestedFilename());
    }
}