const pingAudio = new Audio('../av/ping.mp3');

window.onload = () => {
    document.getElementById("clue-id").ondragstart = (event) => {
        event.dataTransfer.setData("clue-puzzle", event.target.id);
        console.log(event.target.id);
    };

    setTimeout(() => {
        document.getElementById("hint").style.opacity = 100;
    }, 5000);
};

const handleDragOver = (event) => {
    event.preventDefault();
}

const handleDrop = (event) => {
    event.preventDefault();
    let data = event.dataTransfer.getData("clue-puzzle");
    const someVal = document.getElementById(data).innerText;
    document.getElementById(data).remove();
    document.getElementById(event.target.id).remove();
    generateClue();
}

const generateClue = () => {
    pingAudio.play();
    document.getElementById("content-ending").style.opacity = 100;
    SetLocalUpdate("win", "true");
}