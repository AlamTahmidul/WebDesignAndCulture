export default class Card {
    constructor() {
        this.key = -1;
        this.value = -1;
        this.className = "card";
        this.content = "Card Content";
    }

    toHTML() {
        return `<div class=${this.className}>${this.content}</div>`;
    }
}