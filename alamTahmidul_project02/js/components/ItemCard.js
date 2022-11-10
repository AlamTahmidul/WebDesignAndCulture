import Card from "../classes/Card.js";

export class ItemCard extends Card {
    constructor(item, value) {
        super();
        this.item = item;
        this.value = value;
    }
    
}