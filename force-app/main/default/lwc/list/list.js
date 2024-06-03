import { LightningElement } from 'lwc';
import { bikes } from 'c/data';

export default class List extends LightningElement {
    bikes = bikes;

    handleTileClick(evt) {
        /*We are doing same as before. Just creating another custom event called 'productselected' and add
        the data inside the event*/
        // This component wants to emit a productselected event to its parent
        const event = new CustomEvent('productselected', {
            detail: evt.detail
        });

        console.log('value in list: ' + evt.detail);

        // Fire the event from c-list
        //dispatchEvent will make the 'tileclick' event available in its parent.
        this.dispatchEvent(event);
    }
}
