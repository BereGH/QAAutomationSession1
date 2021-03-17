import {Selector, t } from 'testcafe'

class ProductsPage {
    constructor(){
        this.pageTitle = Selector('.product_label')
        this.menuButton = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.shoppingCartButton = Selector('.shopping_cart_link')
        this.addToCartButton = Selector('.btn_primary.btn_inventory').withText('ADD TO CART')
    }

    async logout(){
        await t.click(this.menuButton)
        await t.click(this.logoutButton)
    }
}

export default new ProductsPage()