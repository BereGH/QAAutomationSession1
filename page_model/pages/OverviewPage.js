import {Selector, t } from 'testcafe'

class Overview {
    constructor(){
        this.pageTitle = Selector('.subheader')
        this.itemLabel = Selector('.inventory_item_name')
        this.finishButton = Selector('.btn_action.cart_button').withText('FINISH')
    }
}

export default new Overview()