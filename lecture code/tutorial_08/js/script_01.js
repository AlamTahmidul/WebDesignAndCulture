// USER-DEFINED FUNCTION
// A function that is created and determined by the user
// that is not built-in to the JavaScript language
window.onload = function() {
    document.getElementById("heading").innerText = "Hello!";
}

function insertText() {
    // Declaring & initializing a variable for the text in the text box
    const userText = document.getElementById("txt").value || document.getElementById("txt").placeholder;

    // Output the data in userText into the browser
    document.getElementById("heading").innerText = userText;
}