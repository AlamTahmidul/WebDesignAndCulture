const pingAudio = new Audio('../av/ping.mp3');

let count = 0;
let ClueElement;
let originalText; // Keep a copy for future references
window.onload = () => {
    // First thing to do is to generate multiple "fake" clues
    const contentElement = document.getElementById('content');
    originalText = contentElement.innerText;
    const words = contentElement.innerText.split(' ');
    const randomPosition = Math.floor(Math.random() * words.length);
    const randomWord = words[randomPosition];
    console.log(randomWord);
    
    const leftHalf = words.slice(0, randomPosition).join(" ");
    const rightHalf = randomPosition + 1 >= words.length ? "" : words.slice(randomPosition + 1).join(" ");

    ClueElement = document.createElement("span");
    ClueElement.classList.add('clue', 'clue-intext');
    ClueElement.innerText = randomWord;
    ClueElement.id = "clue-id";
    ClueElement.draggable = true;
    contentElement.innerHTML = leftHalf + ` ${ClueElement.outerHTML} ` + rightHalf;

    document.getElementById("clue-id").ondragstart = (event) => {
        event.dataTransfer.setData("clue-puzzle", event.target.id);
        console.log(event.target.id);
    };
    document.getElementById("clue-id").addEventListener("click", function(event) {
        if (count > 1) {
            SetLocalUpdate("message", randomWord);
            pingAudio.play();
            this.removeEventListener('click', arguments.callee, false); // Removes event listener so that we don't set update again
            document.getElementById('clue-id').remove();
        } else {
            count++;
            generateNewRandomWord();
        }
    });
}

const generateNewRandomWord = () => {
    const contentElement = document.getElementById('content');
    const words = originalText.split(' ');
    const randomPosition = Math.floor(Math.random() * words.length);
    const randomWord = words[randomPosition];
    
    const leftHalf = words.slice(0, randomPosition).join(" ");
    const rightHalf = randomPosition + 1 >= words.length ? "" : words.slice(randomPosition + 1).join(" ");

    ClueElement = document.createElement("span");
    ClueElement.classList.add('clue', 'clue-intext');
    ClueElement.innerText = randomWord;
    ClueElement.id = "clue-id";
    ClueElement.draggable = true;
    contentElement.innerHTML = leftHalf + ` ${ClueElement.outerHTML} ` + rightHalf;

    document.getElementById("clue-id").ondragstart = (event) => {
        event.dataTransfer.setData("clue-puzzle", event.target.id);
        console.log(event.target.id);
    };
    document.getElementById("clue-id").addEventListener("click", (event) => {
        if (count > 1) {
            SetLocalUpdate("message", randomWord);
            pingAudio.play();
            // this.removeEventListener('click', arguments.callee, false); // Removes event listener so that we don't set update again
            document.getElementById('clue-id').classList.remove("clue", "clue-intext");
            document.getElementById('clue-id').remove();
        } else {
            count++;
            generateNewRandomWord();
        }
    });
}

const handleDragOver = (event) => {
    event.preventDefault();
}

const handleDrop = (event) => {
    event.preventDefault();
}