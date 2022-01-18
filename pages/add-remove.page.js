const { Page } = require('./page');

exports.AddRemoveElements = class AddRemoveElementsPage extends Page {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      super(page);
      this.page = page;
    }

    async goto() {
      await this.page.goto(this.url + '/add_remove_elements/');
    }

    async add_element(){
      await this.page.locator('//*[@id="content"]/div/button').click()
    }

    async add_element_visible(){
      await this.page.locator('//*[@id="elements"]/button[1]').isVisible()
    }

    async remove_element(){
      await this.page.locator('//*[@id="elements"]/button[1]').click()
    }

    async remove_element_not_visible(){
      await this.page.locator('//*[@id="elements"]/button[1]').isVisible()
    }

  }