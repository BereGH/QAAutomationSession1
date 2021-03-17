import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`

test.only('Login with valid credentials', async t => {
    await LoginPage.submitLoginForm(
        CREDENTIALS.VALID_USER.USERNAME, 
        CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(ProductsPage.pageTitle.exists).ok()
})

test('Login with invalid credentials', async t => {
    await LoginPage.submitLoginForm(
        CREDENTIALS.INVALUD_USER.USERNAME, 
        CREDENTIALS.VALID_USER.PASSWORD)
    
    await t.expect(LoginPage.errorMessage.exists).ok()
})
