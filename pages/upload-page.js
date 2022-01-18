const { Page } = require('./page');

exports.UploadPage = class UploadPage extends Page {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);
        this.page = page;
        this.chooseFile = '//*[@id="file-upload"]'
        this.uploadBtn = '//*[@id="file-submit"]'
    }

    async goto() {
        await this.page.goto(this.url+'/upload');
      }

    async upload(){
        const [fileChooser] = await Promise.all([
            // It is important to call waitForEvent before click to set up waiting.
            this.page.waitForEvent('filechooser'),
            this.page.locator(this.chooseFile).click(),
          ]);
          await fileChooser.setFiles('david.jpg');
          await this.page.locator(this.uploadBtn).click()
    }
}