const { Page } = require('./page');

exports.JavaScriptAlertsPage = class JavaScriptAlertsPage extends Page {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);
        this.page = page;
        this.btnJsAlert = '//*[@id="content"]/div/ul/li[1]/button'
        this.btnJsConfirm = '//*[@id="content"]/div/ul/li[2]/button'
        this.btnJsPrompt = '//*[@id="content"]/div/ul/li[3]/button'
        this.result = '//*[@id="result"]'
        this.alertType = ''
    }

    async goto() {
        await this.page.goto(this.url + 'javascript_alerts');
    }

    async js_prompt(msg){
        this.page.on("dialog", async dialog => {
            this.alertType = dialog.type();
            dialog.accept("Hello " + msg);
        });
        await this.page.locator(this.btnJsPrompt).click();
        return this.alertType;
    }

    async js_alert(){
        this.page.on("dialog", async dialog => {
            this.alertType = dialog.type();
            dialog.accept()
        });
        await this.page.locator(this.btnJsAlert).click();
        return this.alertType;
    }

    async js_confirm(){
        this.page.on("dialog", async dialog => {
            this.alertType = dialog.type();
            dialog.accept()
        });
        await this.page.locator(this.btnJsConfirm).click();
        return this.alertType;
    }

}