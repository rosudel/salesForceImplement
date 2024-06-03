import { LightningElement, api } from 'lwc';

export default class Tile extends LightningElement {
    @api product;
        //product is public property here and can set from its parent.
        //we can use method also with @api

    tileClick() {
        const event = new CustomEvent('tileclick', {
            // detail contains only primitives
            detail: this.product.fields.Id.value
        });
        // Fire the event from c-tile
        this.dispatchEvent(event);
    }
}
