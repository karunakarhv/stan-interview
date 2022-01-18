const { Page } = require('./page');



exports.CheckboxesPage = class CheckboxesPage extends Page {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      super(page);
      this.page = page;
      this.all_checkboxes = 'checkboxes'
      this.checkbox_1 = '//*[@id="checkboxes"]/input[1]'
      this.checkbox_2 = '//*[@id="checkboxes"]/input[2]'
    }

    async goto() {
      await this.page.goto(this.url + '/checkboxes');
    }

    async checkboxes_content_visible(){
        return await this.page.locator(this.all_checkboxes).isVisible();
    }

    async click_checkboxes(){
        await this.page.locator(this.checkbox_1).click();
        await this.page.locator(this.checkbox_2).click();
    }

  }