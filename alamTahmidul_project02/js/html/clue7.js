const pingAudio = new Audio('../av/ping.mp3');

window.onload = () => {
    // First thing to do is to generate a single clue
    const contentElement = document.getElementById('content');
    const words = contentElement.innerText.split(' ');
    const randomPosition = Math.floor(Math.random() * words.length);
    const randomWord = words[randomPosition];
    console.log(randomWord);
    
    const leftHalf = words.slice(0, randomPosition).join(" ");
    const rightHalf = randomPosition + 1 >= words.length ? "" : words.slice(randomPosition + 1).join(" ");

    for (let i = 0; i < 12; i++) {
        console.log(i);
        const boxTemplate = document.createElement("div");
        boxTemplate.classList.add("drop-target-faint", "flex-child");
        boxTemplate.ondrop = handleDrop;
        boxTemplate.ondragover = handleDragOver;
        document.getElementById("wrapper-container").appendChild(boxTemplate);
    }


    const ClueElement = document.createElement("span");
    ClueElement.classList.add('clue');
    ClueElement.innerText = randomWord;
    ClueElement.id = "clue-id";
    ClueElement.draggable = true;
    contentElement.innerHTML = leftHalf + ` ${ClueElement.outerHTML} ` + rightHalf;

    const divs = document.getElementsByClassName("drop-target-faint");
    const randomDiv = divs[Math.floor(Math.random() * divs.length)];
    randomDiv.id = "true-clue-pair";

    document.getElementById("clue-id").ondragstart = (event) => {
        event.dataTransfer.setData("clue-puzzle", event.target.id);
        console.log(event.target.id);
    };
}

const handleDragOver = (event) => {
    event.preventDefault();
}

const handleDrop = (event) => {
    event.preventDefault();
    if (event.target.id === "true-clue-pair") {
        let data = event.dataTransfer.getData("clue-puzzle");
        const someVal = document.getElementById(data).innerText;
        document.getElementById(data).remove();
        document.getElementById(event.target.id).remove();
        generateClue(someVal);
    }
}

const generateClue = (someVal) => {
    const clue = document.createElement('p');
    clue.innerText = "4." + someVal;
    clue.classList.add("clue", "clue-intext");
    clue.addEventListener("click", (event) => {
        SetLocalUpdate("message", clue.innerText);
        pingAudio.play();
        clue.remove();
    });
    document.getElementById("wrapper").appendChild(clue);
}