const { test, expect } = require('@playwright/test');

test('Basic Authentication', async ({ browser }) => {
    const context = await browser.newContext({
        httpCredentials:
        {
            username: "admin",
            password: "admin"
        }
    })
    const page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    const header = await page.$('h3');
    if (header){
        expect(await header.textContent()).toBe('Basic Auth');
    }
});