const pingAudio = new Audio('../av/ping.mp3');

window.onload = () => {
    // First thing to do is to generate a single clue
    const contentElement = document.getElementById('content');
    const words = contentElement.innerText.split(' ');
    const randomPosition = Math.floor(Math.random() * words.length);
    const randomWord = words[randomPosition];
    
    const leftHalf = words.slice(0, randomPosition).join(" ");
    const rightHalf = randomPosition + 1 >= words.length ? "" : words.slice(randomPosition + 1).join(" ");

    const ClueElement = document.createElement("span");
    ClueElement.classList.add('clue', 'clue-intext');
    ClueElement.innerText = randomWord;
    ClueElement.id = "clue-id";
    contentElement.innerHTML = leftHalf + ` ${ClueElement.outerHTML} ` + rightHalf;
    console.log(randomWord);

    document.getElementById("clue-id").addEventListener("click", (event) => {
        pingAudio.play();
        SetLocalUpdate("message", ClueElement.innerText);
    });
}