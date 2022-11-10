export default class Card {
    constructor() {
        this.key = -1;
        this.value = -1;
        this.className = "card";
        this.content = "Card Content";
    }

    toHTML() {
        // Card Outermost layer
        const returnDiv = document.createElement('div');
        returnDiv.classList.add(this.className);
        const textH3 = document.createElement("h3");
        textH3.innerText = this.value;
        returnDiv.appendChild(textH3);

        return returnDiv;
    }
}