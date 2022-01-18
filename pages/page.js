// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.Page = class Page {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.url = 'https://the-internet.herokuapp.com/'
  }

  async goto() {
    await this.page.goto(this.url);
  }
}