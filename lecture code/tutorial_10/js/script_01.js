function getCurrentFile() {
    // Variable to contain entire path to current file
    var url = window.location.pathname;

    // Variable to contain only the filename at the end of the url
    return url.split("/").pop();
}

window.onload = function () {
    let file = getCurrentFile();
    let imgPath = "../images/";

    if (file == "index.html") {
        imgPath = "images/";
    }

    // Populate images
    let images = new Array(5);
    for (let i = 0; i < images.length; i++) {
        images[i] = "anime" + (i + 1) + ".jpg";
    }

    let n = Math.floor(Math.random() * images.length);
    console.log(n, images[n]);
    document.getElementById("image").innerHTML = 
        `<img src="${imgPath + images[n]}" alt="${file} Image" />`;
};

function randomPage() {
    
    var f = "html/";

    // Array to hold the filenames
    var p = new Array();
        p[0] = "index.html";
        p[1] = "two.html";
        p[2] = "three.html";
        p[3] = "four.html";
        p[4] = "five.html";
    
    // Variable to contain a random number based on the number of elements in the array
    var n = Math.floor(Math.random() * p.length);

    let file = getCurrentFile();

    if (file == "index.html") {
        if (n === 0) {
            document.location = p[n];
        } else {
            document.location = f + p[n];   
        }
    } else {
        if (n === 0) {
            document.location = "../" + p[n];
        } else {
            document.location = p[n];   
        }
    }
};