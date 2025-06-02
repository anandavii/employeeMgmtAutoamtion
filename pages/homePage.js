import { expect } from "@playwright/test";

export class HomePage {
    constructor(page) {
        this.page = page
        this.sidedBanner_label = page.locator('nav[aria-label="Sidepanel"] li')
    }

    async verifyHomepageSidelabels(expectedSideBannerLabels) {
        await expect(this.sidedBanner_label).toHaveText(expectedSideBannerLabels)
    }

}