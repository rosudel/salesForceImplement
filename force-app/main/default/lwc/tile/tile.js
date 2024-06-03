import { LightningElement, api } from 'lwc';

export default class Tile extends LightningElement {
    @api product;

    tileClick() {
        /* We are doing nothing here for this click event. Just we are making a custom event here named
         'tileclick'. So same event will renamed to 'tileclick' in its parent. We are setting data to 
         detail inside the custom event. So parent will get data from child at the same time.*/

        const event = new CustomEvent('tileclick', {
            // detail contains only primitives
            detail: this.product.fields.Id.value
        });

        // Fire the event from c-tile
        //dispatchEvent will make the 'tileclick' event available in its parent.
        this.dispatchEvent(event);
    }
}
