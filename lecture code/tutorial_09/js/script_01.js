window.onload = function () {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById("image").innerHTML = 
        "<img src='images/anime" + randomNumber + ".jpg' />";
};