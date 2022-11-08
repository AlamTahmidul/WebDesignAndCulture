// Create Array of Image Filenames
var imgs = new Array();
    imgs[0] = "anime1.jpg";
    imgs[1] = "anime2.jpg";
    imgs[2] = "anime3.jpg";
    imgs[3] = "anime4.jpg";
    imgs[4] = "anime5.jpg";

// Variable for the file path
var f = "../images/";
var i = 0;

// Function to create a slideshow cycling through images
function changeImg() {
    // Reset the src value for the img tag in the page
    document.getElementById("slides").src = f + imgs[i++ % imgs.length];
}

// Set the interval to call function changeImg() every 2 seconds (2000 ms)
setInterval(changeImg, 2000);