import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import YourCartPage from '../pages/YourCartPage'
import { CREDENTIALS } from '../data/Constants'
import CheckoutPage from '../pages/CheckoutPage'
import OverviewPage from '../pages/OverviewPage'

fixture('Checkout feature testing')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await LoginPage.submitLoginForm(
            CREDENTIALS.VALID_USER.USERNAME, 
            CREDENTIALS.VALID_USER.PASSWORD)
        for(let index = 0; index <= 5; index++) {
            await t.click(ProductsPage.addToCartButton)
        }
        await t.click(ProductsPage.shoppingCartButton)
        await t.click(YourCartPage.checkoutButton)
    })

test('Continue with missing mail information', async t => {
    await t.click(CheckoutPage.continueButton)
    await t.expect(CheckoutPage.errorButton.exists).ok()
})

test.only('Fill user\'s information', async t => {
    await CheckoutPage.fillUserInfo(
        CREDENTIALS.USER_INFO.FIRST_NAME, 
        CREDENTIALS.USER_INFO.LAST_NAME,
        CREDENTIALS.USER_INFO.POSTAL_CODE)
    await t.expect(OverviewPage.pageTitle.innerText).eql('Checkout: Overview')
})

test('Fill user\'s information', async t => {
    await CheckoutPage.fillUserInfo(
        CREDENTIALS.USER_INFO.FIRST_NAME, 
        CREDENTIALS.USER_INFO.LAST_NAME,
        CREDENTIALS.USER_INFO.POSTAL_CODE)
    await t.expect(OverviewPage.pageTitle.innerText).eql('Checkout: Overview')
})