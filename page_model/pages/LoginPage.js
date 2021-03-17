import {Selector, t} from 'testcafe'

class LoginPage {
    constructor(){
        this.usernameField = Selector('input[name="user-name"]')
        this.passwordField = Selector('input[name="password"]')
        this.loginButton = Selector('#login-button')
        this.errorMessage = Selector('.error-button')
    }

    async submitLoginForm(username, password){

        await t
            .typeText(this.usernameField, username)
            .typeText(this.passwordField, password) 
            .click(this.loginButton)

    }
}

export default new LoginPage()