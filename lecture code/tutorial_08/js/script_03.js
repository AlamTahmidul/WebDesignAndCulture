// GENERATE 2 RANDOM NUMBERS
// ASSIGN THEM EACH TO A SEPARATE VARIABLE
// DETERMINE WHICH IS LARGER
// TURN THE BACKGROUND RED IF THE 1ST IS LARGER
// TURN THE BACKGROUND BLUE IF THE 2ND IS LARGER
// TURN THE BACKGROUND GREEN IF THEY ARE THE SAME

function doIt() {
    // GENERATE RANDOM NUMBERS
    var r1 = Math.floor(Math.random() * 10) + 1;
    var r2 = Math.floor(Math.random() * 10) + 1;
    if (r1 > r2)
        document.getElementById("wrapper").style.backgroundColor = "#ff0000";
    else if (r1 < r2)
        document.getElementById("wrapper").style.backgroundColor = "#0000ff";
    else
        document.getElementById("wrapper").style.backgroundColor = "#00ff00";
    document.getElementById("heading").innerText = `Number 1: ${r1} | Number 2: ${r2}`;
}