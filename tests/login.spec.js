import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('admin login', async ({ page }) => {
    const Login = new LoginPage(page)

    await Login.goToLoginPage()
    await Login.enterUsername('Admin')
    await Login.enterPassword('admin123')
    await Login.clickOnLogin()
    await page.pause()
});