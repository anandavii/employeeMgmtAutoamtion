import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('Valid admin login', async ({ page }) => {
    const Login = new LoginPage(page)
    // assign username and password
    const username = 'Admin'
    const password = 'admin123'
    await Login.loginUser(username, password)
    await Login.logoutUser()
})
test('invalid login 1', async ({ page }) => {
    const Login = new LoginPage(page)
    // assign username and password
    const username = 'Admin1'
    const password = 'admin123'
    await Login.loginUser(username, password)
    await expect(Login.invalidCredentials_label).toContainText('Invalid credentials');

});