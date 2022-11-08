// Variables for moving square
var x = 0; // x position of square
var o = 0.3; // Opacity of square
var w;

function moveIt() {
    w = window.innerWidth;
    if (x - 100 > w) x = 0;
    x += 0.3;
    o += 0.0002;
    document.getElementById("one").style.left = x + "px";
    document.getElementById("one").style.opacity = o;
};
setInterval(moveIt, 1);