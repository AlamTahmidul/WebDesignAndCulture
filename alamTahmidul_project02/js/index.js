// import { CommentCard } from "./components/CommentCard.js"
import { ItemCard } from "./components/ItemCard.js"
import {timerDuration} from "./components/config.js";

let gameTimerDuration = timerDuration;
let gameTimerHandler;

window.onload = function () {
    // const comment = new CommentCard("Author", "This is a comment");
    // document.getElementById("wrapper-body").append(comment.toHTML());
    // document.body.innerHTML.append(comment.toHTML());
    // console.log(comment);

    const Searching = (event) => {
        /**
         *  TODO: See if you can load iFrames to serve multiple pages...
         *  Or, use Cards as an alternative
         */

        // This means that the user wants to search...
        if (event.key === "Enter" || event.type === "click") {
            const value = document.getElementById("url").value;
            document.getElementById("content-body").appendChild(new ItemCard("Content", value).toHTML());
            document.getElementById("tab-title").innerText = value;
        }
    };

    document.getElementById("url").addEventListener('keydown', Searching, false);
    document.getElementById("url-search").addEventListener('click', Searching, false);

    // document.getElementById("url").onkeydown = (event) => {
    //     // TODO: See if you can load iFrames to serve multiple pages...
    //     if (event.key === "Enter") {
    //         document.getElementById("content-body").innerHTML = event.target.value;
    //         document.getElementById("tab-title").innerText = event.target.value;
    //     }
    // };

    // document.getElementById('tab-title').addEventListener('OutOfTime', (e) => {
    //     console.log("Goes Here!");
    //     alert(e.detail.text());
    // });

    // Handles Game Timer
    gameTimerHandler = setInterval(() => {
        document.getElementById("timer-text").innerText = gameTimerDuration--;
        
        // TODO: Should do something but for now clear the Timer
        if (gameTimerDuration < 0) {
            // document.getElementById('tab-title').dispatchEvent(events.OutOfTime);
            clearInterval(gameTimerHandler);

            /* Uncomment below to simulate game over */
            const gameOverCard = new ItemCard("GameOver", "You Failed");
            document.getElementById("subscreen").appendChild(gameOverCard.toHTML());
            document.getElementById("subscreen").appendChild(new ItemCard("Redirecting", "Taking You Back to the Start...").toHTML());
            // setTimeout(() => {
            //     location.href = "index.html";
            // }, 2000);
        }
    }, 1000);
}