import { expect } from "@playwright/test"

exports.AboutPage = class AboutPage {

    constructor(page) {
        this.page = page
        this.aboutLink = page.getByRole('menuitem', { name: 'About' })
        this.aboutLabels = page.locator('.orangehrm-about-title')
    }

    async clickOnAboutLink() {
        await this.aboutLink.click()
    }

    async verifyAboutLabels(expectedLabels) {
        await expect(this.aboutLabels).toHaveText(expectedLabels)
    }
}