import {Selector, t } from 'testcafe'

class YourCartPage {
    constructor(){
        this.pageTitle = Selector('.subheader')
        this.itemLabel = Selector('.inventory_item_name')
        this.checkoutButton = Selector('.btn_action.checkout_button')
    }
}

export default new YourCartPage()