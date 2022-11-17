// Import components
// import { CommentCard } from "./components/CommentCard.js"
import { ItemCard } from "./components/ItemCard.js"

// Import the game configurations
import { TimerDuration } from "./utils/config.js";

// Import Search Queries to Cross Reference Against
import PossibleResults from "../data/search_results.js";

// Assets
const pingJSAudio = new Audio("./av/ping_js.mp3");
const scaryPiano = new Audio("./av/scary-piano.wav");
const melodicHorrorPiano = new Audio("./av/horror-piano-melodic.mp3");
const horrorBackgroundMusic = new Audio("./av/horror-background-music.mp3");
const horrorPianoTheme = new Audio("./av/horrorpianotheme.mp3");
const horrorPiano = new Audio("./av/horror-piano.mp3");

// Background Music Setup
const musicPlaylist = [horrorBackgroundMusic, horrorPianoTheme, horrorPiano];

// Temporary Handlers
let ambiencePlayed = false;
let musicPlaylistIndex = 0;

// Setup Environment
let gameTimerDuration = TimerDuration;
let gameTimerHandler;
const cluesFound = [];

const resetUpdates = () => {
    localStorage.setItem("canUpdate", "false");
    localStorage.setItem("updateType", "");
    localStorage.setItem("updateValue", "");
}

const handlePlaylist = () => {
    musicPlaylist[musicPlaylistIndex].pause();
    musicPlaylist[musicPlaylistIndex].currentTime = 0;
    musicPlaylistIndex = (Math.floor(Math.random() * musicPlaylist.length)) % musicPlaylist.length;
    musicPlaylist[musicPlaylistIndex].play();
    musicPlaylist[musicPlaylistIndex].volume = 0.2;
    if (!musicPlaylist[musicPlaylistIndex].onended) {
        musicPlaylist[musicPlaylistIndex].onended = () => {
            handlePlaylist();
        }
    }
}

window.onload = function () {
    // RESET EVERYTHING...
    resetUpdates();

    // const comment = new CommentCard("Author", "This is a comment");
    // document.getElementById("wrapper-body").append(comment.toHTML());
    // document.body.innerHTML.append(comment.toHTML());
    // console.log(comment);-
    document.body.style.overflow = "hidden";

    // Play menu theme
    document.getElementById("intro").addEventListener('mousemove', () => {
        melodicHorrorPiano.play();
        melodicHorrorPiano.loop = true;
    });

    // Initialize A few things
    // Set Event Listeners
    document.getElementById("url").addEventListener('keydown', Searching, false);
    document.getElementById("url-search").addEventListener('click', Searching, false);

    // In-Game Timer; turns on when the player presses close
    document.getElementById("intro-buttons").onclick = (event) => {
        document.getElementById("intro").remove();
        startGameTimer();
        document.body.style.overflow = "auto";

        // Play music
        melodicHorrorPiano.loop = false;
        melodicHorrorPiano.pause();
        melodicHorrorPiano.currentTime = 0;
        handlePlaylist();
    }

    let canUpdate, updateType, updateValue;
    const db = document.getElementById("dashboard-content");
    // ~Loop for handling events: Every ~0.2 secs, check if we need to update anything
    setInterval(() => {
        canUpdate = Boolean(localStorage.getItem('canUpdate'));
        if (canUpdate) {
            updateType = localStorage.getItem('updateType');
            if (updateType === "message") {
                updateValue = localStorage.getItem("updateValue");
                if (!cluesFound.includes(updateValue)) {
                    db.appendChild(new ItemCard("message", updateValue).toHTML());
                    cluesFound.push(updateValue);
                    createPath(updateValue);
                }
            } else if (updateType === "clear-messages") {
                document.getElementById("dashboard-content").innerHTML = "";
            } else if (updateType === "win") {
                updateValue = localStorage.getItem("updateValue");
                if (updateValue === "true") {
                    // const winModal = document.getElementById("clue-modal");
                    // winModal.appendChild()
                    GameWin();
                }
            }
            resetUpdates();
        }
    }, 200);
    // console.log("post timer handler");
}

const Searching = (event) => {
    /**
     *  See if you can load iFrames to serve multiple pages...
     *  Or, use Cards as an alternative
     */

    // This means that the user wants to search...
    if (event.key === "Enter" || event.type === "click") {
        // Remove the previous results and cross reference with the given clues
        document.getElementById("content-cards").innerHTML = "";
        const value = document.getElementById("url").value.toLowerCase();
        if (playerReachedEnd(value)) { // Check if what the player inputted is the final URL
            document.getElementById("content-cards").innerHTML = "";
            document.getElementById("subscreen-iframe").src = "html/final.html";
        } else {
            const filteredSearches = Object.entries(PossibleResults).filter(pair => pair[0].toLowerCase().includes(value) || value.includes(pair[0].toLowerCase()));
            for (const results of filteredSearches) {
                const ResultCard = new ItemCard("Content", results[0]).toHTML();
                ResultCard.onclick = () => {
                    document.getElementById("subscreen-iframe").src = "html/" + results[1];
                }
                document.getElementById("content-cards").appendChild(ResultCard);
            }
        }
        // document.getElementById("content-cards").appendChild(new ItemCard("Content", value).toHTML());
        document.getElementById("tab-title").innerText = value;
    }
};

const startGameTimer = () => {
    // Handles Game Timer
    gameTimerHandler = setInterval(() => {
        document.getElementById("timer-text").innerText = gameTimerDuration--;
        
        if (!ambiencePlayed && gameTimerDuration < 15) {
            scaryPiano.volume = 0.3;
            scaryPiano.play();
            musicPlaylist[musicPlaylistIndex].pause();
            ambiencePlayed = true;
        }
        if (gameTimerDuration < 0) {
            // document.getElementById('tab-title').dispatchEvent(events.OutOfTime);
            clearInterval(gameTimerHandler);

            /* Simulate game over */
            const gameOverCard = new ItemCard("GameOver", "You Failed");
            document.getElementById("subscreen").appendChild(gameOverCard.toHTML());
            document.getElementById("subscreen").appendChild(new ItemCard("Redirecting", "Taking You Back to the Start...").toHTML());
            
            GameOver();
        }
    }, 1000);
}

const playerReachedEnd = (value) => {
    const winCondCheck = cluesFound.filter(val => val.includes("1.") || val.includes("2.") || val.includes("3.") || val.includes("4.")); // 4 Pieces of Code
    if (winCondCheck.length !== 4) return false;
    // console.log(winCondCheck, value);
    winCondCheck.sort();
    for (const i in winCondCheck) {
        winCondCheck[i] = winCondCheck[i].substring(2);
    }
    // console.log(winCondCheck, value);
    const exitCode = winCondCheck.join("");
    // console.log(exitCode, value);
    if (value === exitCode.toLowerCase()) return true;
    document.getE
    return false;
}

const GameWin = () => {
    document.body.innerHTML = `
        <div id="intro" class="flex">
            <div id="intro-content" class="flex-col" style="text-align: center; overflow: hidden;">
                <!-- Game Win -->
                <h1 style="text-align: center; font-size:32pt;">You Survived!</h1>
                <p style="font-weight:100; font-size: 16pt; text-align: justify;">
                    Amidst All the Challenges, You Managed to Beat All the Puzzles.
                    <br/><br/>
                    Redirecting Back to the Main Menu in 5 seconds...
                </p>
            </div>
        </div>
    `;
    setTimeout(() => {
        location.href = "index.html";
    }, 5000);
};

const GameOver = () => {
    pingJSAudio.play();

    const errorModal = document.getElementById("error-modal");
    const GameOverNode = document.createElement('div');
    GameOverNode.id = "game-over";
    const titleNode = document.createElement('h1');
    titleNode.innerText = "Game Over";
    GameOverNode.appendChild(titleNode);
    const descriptionNode = document.createElement('h3');
    descriptionNode.innerText = "You Failed to Find the Exit... Taking You Back to the Start in 5 seconds...";
    GameOverNode.appendChild(descriptionNode);
    
    errorModal.appendChild(GameOverNode);
    
    // Redirect user back to the main page after 5 seconds
    setTimeout(() => {
        location.href = "index.html";
    }, 5000);
}

const createPath = (value) => {
    const paths = Object.entries(PossibleResults);
    const firstPair = paths.find((pair) => pair[0].includes('query'));
    delete PossibleResults[firstPair[0]]; // Deletes the previously held path
    PossibleResults[value] = firstPair[1]; // Creates a new binding based on the clue word
}