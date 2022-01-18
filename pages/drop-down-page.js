const { Page } = require('./page');

exports.DropDownPage = class DropDownPage extends Page {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);
        this.page = page;
    }

    async goto() {
        await this.page.goto(this.url + '/dropdown');
      }
}