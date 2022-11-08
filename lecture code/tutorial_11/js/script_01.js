// Variable for number of seconds in timer
var t = 5;

// Counter Variable
var s = 0;

// Number of seconds actually displayed in page as the countdown "clock"
var r;

setInterval(timer, 5);

function timer() {
    s++;

    r = Math.floor(t - s/200) + 1;

    if (r > 0) {
        document.getElementById("timer").innerHTML = r;
    } else {
        document.getElementById("timer").innerHTML = "";
        document.getElementById("wrapper").innerHTML = "Game Over";
        document.getElementById("wrapper").style.fontSize = "32pt";
        document.getElementById("wrapper").style.textAlign = "center";
    }
}