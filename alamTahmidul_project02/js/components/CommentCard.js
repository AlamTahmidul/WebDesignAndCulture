import Card from "../classes/Card.js";

export class CommentCard extends Card {
    constructor(username, content) {
        super();
        this.username = username;
        this.content = content;
    }
}