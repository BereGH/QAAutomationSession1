import {Selector, t } from 'testcafe'

class CheckoutPage {
    constructor(){
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.postalCodeField = Selector('#postal-code')
        this.continueButton = Selector('.btn_primary.cart_button')
        this.errorButton = Selector('.error-button')
    }
    async fillUserInfo(firstName, lastName, postalCode){

        await t
            .typeText(this.firstNameField, firstName)
            .typeText(this.lastNameField, lastName) 
            .typeText(this.postalCodeField, postalCode) 
            .click(this.continueButton)

    }
}

export default new CheckoutPage()