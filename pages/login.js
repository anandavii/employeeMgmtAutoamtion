export class LoginPage {
    constructorconstructor(page) {
        this.page = page
        this.username_textbox = page.getByRole('textbox', { name: 'Username' })
        this.password_textbox = page.getByRole('textbox', { name: 'Password' })
        this.login_button = page.getByRole('button', { name: 'Login' })
    }

    async goToLoginPage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
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