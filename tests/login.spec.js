import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('admin login', async ({ page }) => {
    const Login = new LoginPage(page)

    await Login.goToLoginPage()
    await Login.enterUsername('Admin')
    await Login.enterPassword('admin123')
    await Login.clickOnLogin()
});

test('invalid login 1', async ({ page }) => {
    const Login = new LoginPage(page)

    await Login.goToLoginPage()
    await Login.enterUsername('Admin1')
    await Login.enterPassword('admin123')
    await Login.clickOnLogin()
    await expect(Login.invalidCredentials_label).toContainText('Invalid credentials');

});