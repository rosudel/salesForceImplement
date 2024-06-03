import { LightningElement } from 'lwc';

export default class Selector extends LightningElement {
    selectedProductId;

    handleProductSelected(evt) {
        this.selectedProductId = evt.detail;

        console.log('value in selector: ' + evt.detail);

        //no customization needed as we are not sending to any parent from here
    }
}
