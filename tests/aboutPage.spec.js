import { test } from '@playwright/test'
import { LoginPage } from '../pages/login'
import { AboutPage } from '../pages/AboutPage'

test('Validate the labels in About Page', async ({ page }) => {
    const Login = new LoginPage(page)
    const About = new AboutPage(page)

    const expectedAboutLabels = [
        'Company Name: ',
        'Version: ',
        'Active Employees: ',
        'Employees Terminated: '
    ]

    //Login user
    const username = 'Admin'
    const password = 'admin123'
    await Login.loginUser(username, password)

    //click on About Link
    await Login.clickOnProfilePictureButton()
    await About.clickOnAboutLink()

    //Verify labels on the About page
    await About.verifyAboutLabels(expectedAboutLabels)
})
