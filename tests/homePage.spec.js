import { test } from '@playwright/test'
import { LoginPage } from '../pages/login'
import { Homepage } from '../pages/homePage'

test.beforeEach('Login with valid creadentials', async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.goToLoginPage();
    await Login.enterUsername('Admin');
    await Login.enterPassword('admin123');
    await Login.clickOnLogin();

})

test('Verify labels on homepage', async ({ page }) => {
    const HomePage = new Homepage(page)

    // Expected labels after successful login
    const expectedSideLabels = [
        'Admin',
        'PIM',
        'Leave',
        'Time',
        'Recruitment',
        'My Info',
        'Performance',
        'Dashboard',
        'Directory',
        'Maintenance',
        'Claim',
        'Buzz'
    ];

    await page.pause()
    //verify the side labels are present
    await HomePage.verifyHomepageSidelabels(expectedSideLabels)

})