import { test } from '@playwright/test'
import { LoginPage } from '../pages/login'
import { HomePage } from '../pages/homePage';

test.beforeEach('Login with valid creadentials', async ({ page }) => {
    const Login = new LoginPage(page);
    const username = 'Admin'
    const password = 'admin123'
    await Login.loginUser(username, password)
})

test('Verify labels on homepage', async ({ page }) => {
    const Home = new HomePage(page)

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

    //verify the side labels are present
    await Home.verifyHomepageSidelabels(expectedSideLabels)

})