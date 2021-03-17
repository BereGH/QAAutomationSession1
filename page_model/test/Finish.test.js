import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import YourCartPage from '../pages/YourCartPage'
import CheckoutPage from '../pages/CheckoutPage'
import OverviewPage from '../pages/OverviewPage'
import FinishPage from '../pages/FinishPage'
import { CREDENTIALS } from '../data/Constants'

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
        await CheckoutPage.fillUserInfo(
            CREDENTIALS.USER_INFO.FIRST_NAME, 
            CREDENTIALS.USER_INFO.LAST_NAME,
            CREDENTIALS.USER_INFO.POSTAL_CODE)
    })

test('Finish order items', async t => {
    var addedItems = ''
    var overviewItems = ''
    for(let index = 0; index <= 5; index++) {
        addedItems = addedItems + YourCartPage.itemLabel.innerText
        overviewItems = overviewItems + OverviewPage.itemLabel.innerText
    }
    await t.expect(addedItems).eql(overviewItems)
})

test('complete a purchase', async t => {
    await t.click(OverviewPage.finishButton)
    await t.expect(FinishPage.thanksHeader.exists).ok()
})