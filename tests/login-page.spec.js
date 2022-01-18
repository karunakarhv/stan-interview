const { test, expect, context } = require('@playwright/test');
const { LoginPage } = require('../pages/login-page');

test('Login Page - Success', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.fill_login('tomsmith', 'SuperSecretPassword!');
    expect(page.url()).toContain('secure');
  });

test('Login Page - Failure', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.fill_login('tomsmith', 'SuperSecretPassword');
    expect(page.url()).toContain('login');
  });

module.exports = LoginPage