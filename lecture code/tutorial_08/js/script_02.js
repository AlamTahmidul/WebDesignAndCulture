/*
    TYPES OF DATA IN JavaScript
    numerical data - numbers or numerical operations (addition, subtraction, etc)
    string data - series of characters set in between quotes ("hello")
    boolean data - true/false, 1/0

    VARIABLES - a variable is a named container for a single element of data

    FUNCTIONS -  a function (sometimes known as a method) is an action or series of actions taken by JavaScript and which is always followed by a pair of parentheses
        --> BUILT-IN FUNCTIONS - those function built into the language such as console.log() or alert()
        --> USER-DEFINED FUNCTIONS -  those functions that the user creates themselves which may contain other functions, operations, data containers or other decision structures
*/

// DECLARING A VARIABLE IS TO CREATE & NAME A VARIABLE
var num1;
// INITIALIZING A VARIABLE IS TO ASSIGN A VALUE TO IT FOR THE FIRST TIME
num1 = 120;
// YOU MAY COMBINE THOSE INTO 1 STEP
var num2 = 100;

// CREATE A USER-DEFINED FUNCTION
// IN THAT FUNCTION, CREATE A 3RD VARIABLE
// INITIALIZE IT WITH THE SUM OF THE OTHER 2 VARIABLES
// OUTPUT THE RESULT TO THE CONSOLE
function addTwoNumbers() {
    var num3 = num1 + num2;
    document.getElementById("heading").innerText = num3;
}

// CREATE A USER-DEFINED FUNCTION
// IN THAT FUNCTION, CREATE A 4TH VARIABLE
// INITIALIZE IT WITH THE PRODUCT OF THE FIRST 2 VARIABLES
// OUTPUT RESULT TO THE BROWSER WINDOW IN THE HEADING

// EXTRA CREDIT: OUTPUT THE ENTIRE OPERATION
// BUT DO SO WITHOUT TYPING ANY NUMBERS
function multiplyTwoNumbers() {
    var num4 = num1 * num2;
    document.getElementById("heading").innerText = num1 + " * " + num2 + " = " + num4;
}