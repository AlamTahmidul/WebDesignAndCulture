/**
 *  Assets...
 */
const pingAudio = new Audio('../av/ping.mp3');

window.onload = () => {
    // const puzzleArea = document.getElementById('puzzle');

    //     puzzleResponse.value = `1.${data}Luck`;
    //     puzzleArea.appendChild(puzzleResponse);
    // }

    // Get All the Clue Elements
    const clueElements = document.getElementsByClassName('clue');

    for (const element of clueElements) {
        element.addEventListener('click', function (event) {
            pingAudio.play();
            element.classList.remove('clue');
            if (element.classList.contains("clue-draggable"))
                element.classList.remove("clue-draggable")
            this.removeEventListener('click', arguments.callee, false); // Removes event listener so that we don't set update again

            // Sets updates so that the main page can handle interaction values
            SetLocalUpdate("message", element.innerText);
            if (element.id.includes('puzzle-response'))
                element.remove();
        });
    }
}

const handleDragStart = (event) => {
    event.dataTransfer.setData("clue-puzzle", event.target.id);
}

const handleDragOver = (event) => {
    event.preventDefault();
}

const handleDrop = (event) => {
    event.preventDefault();
    let data = event.dataTransfer.getData("clue-puzzle");
    document.getElementById(data).remove();
    document.getElementById(event.target.id).remove();
    generateClue();
}

const generateClue = () => {
    const clue = document.createElement('p');
    clue.innerText = "1.ToughLuck";
    clue.classList.add("clue", "clue-intext");
    clue.onclick = (event) => {
        SetLocalUpdate("message", clue.innerText);
        pingAudio.play();
        clue.remove();
        document.getElementById("tip").style.opacity = 100;
        setTimeout(() => {
            SetLocalUpdate("clear-messages", "");
        }, 5000);
    }
    document.getElementById("puzzle").appendChild(clue);
}