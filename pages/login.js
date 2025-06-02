exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page
        this.username_textbox = page.getByRole('textbox', { name: 'Username' })
        this.password_textbox = page.getByRole('textbox', { name: 'Password' })
        this.login_button = page.getByRole('button', { name: 'Login' })
        this.invalidCredentials_label = page.getByRole('alert')
        this.profilePicture_button = page.getByRole('banner').getByRole('img', { name: 'profile picture' })
        this.logout_link = page.getByRole('menuitem', { name: 'Logout' })
    }

    async goToLoginPage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/')
    }

    async loginUser(username, password) {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/')
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }

    async logoutUser() {
        await this.profilePicture_button.click()
        await this.clickOnLogoutLink.click()
    }

}