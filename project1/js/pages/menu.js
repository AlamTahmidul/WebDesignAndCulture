class MenuYeet {
    constructor(pageName, state) {
        this.pageName = pageName;
        this.state = state;
    }

    foo() {
        console.log(this.pageName, this.state);
    }
}