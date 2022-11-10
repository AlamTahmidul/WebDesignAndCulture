// import { CommentCard } from "./components/CommentCard.js"
import timerDuration from "./components/config.js";

let gameTimerDuration = timerDuration;
let gameTimerHandler;
window.onload = function () {
    // const comment = new CommentCard("Author", "This is a comment");
    // document.getElementById("wrapper-body").append(comment.toHTML());
    // document.body.innerHTML.append(comment.toHTML());
    // console.log(comment);

    document.getElementById("url").onkeydown = (event) => {
        // TODO: See if you can load iFrames to serve multiple pages...
        if (event.key === "Enter") {
            document.getElementById("content-body").innerHTML = event.target.value;
            document.getElementById("tab-title").innerText = event.target.value;
        }
    }

    gameTimerHandler = setInterval(() => {
        console.log(gameTimerDuration);
        document.getElementById("timer-text").innerText = gameTimerDuration;
        
        if (--gameTimerDuration < 0) clearInterval(gameTimerHandler);
    }, 1000);


}