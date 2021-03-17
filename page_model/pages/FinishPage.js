import {Selector, t } from 'testcafe'

class FinishPage {
    constructor(){
        this.thanksHeader = Selector('.complete-header').withText('THANK YOU FOR YOUR ORDER')
    }
}

export default new FinishPage()