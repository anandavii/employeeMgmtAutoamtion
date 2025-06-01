exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page
        this.username_textbox = page.getByRole('textbox', { name: 'Username' })
        this.password_textbox = page.getByRole('textbox', { name: 'Password' })
        this.login_button = page.getByRole('button', { name: 'Login' })
        this.invalidCredentials_label = page.getByRole('alert')
    }

    async goToLoginPage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/')
    }

    async enterUsername(username) {
        await this.username_textbox.fill(username)
    }

    async enterPassword(password) {
        await this.password_textbox.fill(password)
    }

    async clickOnLogin() {
        await this.login_button.click()
    }

}