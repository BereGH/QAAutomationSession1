import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import YourCartPage from '../pages/YourCartPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Products feature testing')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await LoginPage.submitLoginForm(
            CREDENTIALS.VALID_USER.USERNAME, 
            CREDENTIALS.VALID_USER.PASSWORD)
    })

test('Logout from Products page', async t => {
    await ProductsPage.logout()
    await t.expect(LoginPage.loginButton.exists).ok()
})

test('Navigate to the shoping cart', async t => {
    await t.click(ProductsPage.shoppingCartButton)
    await t.expect(YourCartPage.pageTitle.innerText).eql('Your Cart')
})

test('Add single product to the cart', async t => {
    await t.click(ProductsPage.addToCartButton)
    await t.click(ProductsPage.shoppingCartButton)
    await t.expect(YourCartPage.itemLabel.exists).ok()
})

test.only('Add multilpe products to the cart', async t => {
    
    //while(ProductsPage.addToCartButton.exists)
    for(let index = 0; index <= 5; index++) {
        await t.click(ProductsPage.addToCartButton)
    }
    await t.click(ProductsPage.shoppingCartButton)
    await t.expect(YourCartPage.itemLabel.exists).ok()
})