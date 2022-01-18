const { Page } = require('./page');

exports.LoginPage = class LoginPage extends Page {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);
        this.page = page;
        this.username = '//*[@id="username"]'
        this.password = '//*[@id="password"]'
        this.loginBtn = '//*[@id="login"]/button/i'
    }

    async goto() {
        await this.page.goto(this.url+'/login');
      }

    async fill_login(user, pwd){
       await this.page.locator(this.username).fill(user)
       await this.page.locator(this.password).fill(pwd)
       await this.page.locator(this.loginBtn).click()
    }
}