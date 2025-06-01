import { test, expect } from '@playwright/test'
import { LoginPage, homePage } from '../pages/login'
import { Homepage } from '../pages/homePage'

test('Verify labels on homepage', async ({ page }) => {
    const Login = new LoginPage(page)
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

    //login to the application
    await Login.goToLoginPage()
    await Login.enterUsername('Admin')
    await Login.enterPassword('admin123')
    await Login.clickOnLogin()
    await expect(page).toHaveURL(/dashboard/)

    await page.pause()
    //verify the side labels are present
    await HomePage.verifyHomepageSidelabels(expectedSideLabels)

})