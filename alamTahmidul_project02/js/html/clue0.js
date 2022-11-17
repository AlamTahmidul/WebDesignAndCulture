/**
 *  Assets...
 */
const pingAudio = new Audio('../av/ping.mp3');

window.onload = () => {
    const clueElements = document.getElementsByClassName('clue');
    for (const element of clueElements) {
        element.addEventListener('click', function (event) {
            pingAudio.play();
            element.classList.remove('clue');
            if (element.classList.contains("clue-intext"))
                element.classList.remove("clue-intext")
            this.removeEventListener('click', arguments.callee, false); // Removes event listener so that we don't set update again

            // Sets updates so that the main page can handle interaction values
            SetLocalUpdate("message", element.innerText);
        });
    }
    setTimeout(() => {
        document.getElementById("show-hint").style.opacity = 100;
    }, 15000);
}