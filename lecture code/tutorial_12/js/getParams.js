window.onload = function() {
    const parameters = new URLSearchParams(window.location.search);
    first = JSON.parse(parameters.get('first')),
    last = JSON.parse(parameters.get('last'));
    document.getElementById("userID").innerText = `Welcome, ${first} ${last}!`;
    
    // Check if fadeID exists while we have parameters...
    const fadeID = document.getElementById("fadeID");
    if (fadeID && first && last) fadeID.remove();
}