// Function to add points to score
let s = 0;

function add() {
    document.getElementById("scoreID").innerText = ++s + " points";
}

function sub() {
    document.getElementById("scoreID").innerText = (--s < 0 ? s = 0 : s) + " points";
}

function goToPage(p) {
    // By default the path is inside the html directory
    let path = "./";
    // If the current document is index.html
    const isIndex = window.location.pathname.includes("index.html");
    // If the current document is index.html, we want access the html/
    if (isIndex) {
        path = "./html/";
    }
    let file = p + ".html";
    if (p === "one") { // We want to access index.html
        if (isIndex) path = "./"; // Currently, We are in index.html
        else path = "../"; // Or: Currently, We are inside the html/ directory
        file = "index.html";
    }
    location.href = path + file;
}