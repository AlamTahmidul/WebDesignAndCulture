// import { CommentCard } from "./components/CommentCard.js"

window.onload = function () {
    // const comment = new CommentCard("Author", "This is a comment");
    // document.getElementById("wrapper-body").append(comment.toHTML());
    // document.body.innerHTML.append(comment.toHTML());
    // console.log(comment);

    document.getElementById("view-tab").onmouseover= (event) => {
        event.target.style.backgroundColor = "wheat";
        event.target.style.color = "black";
    }
    document.getElementById("view-tab").onmouseout= (event) => {
        event.target.style.backgroundColor = "transparent";
        event.target.style.color = "wheat";
    }

    document.getElementById("window-close-btn").onmouseout= (event) => {
        event.target.style.backgroundColor = "transparent";
    }

    document.getElementById("window-close-btn").onmouseover= (event) => {
        event.target.style.backgroundColor = "red";
    }

    document.getElementById("window-minimize-btn").onmouseout= (event) => {
        event.target.style.backgroundColor = "transparent";
        event.target.style.opacity = "100%";
    }

    document.getElementById("window-minimize-btn").onmouseover= (event) => {
        event.target.style.backgroundColor = "lightgray";
        event.target.style.opacity = "70%";
    }

    document.getElementById("url").onkeydown = (event) => {
        // TODO: See if you can load iFrames to serve multiple pages...
        if (event.key === "Enter") document.getElementById("content-body").innerHTML = event.target.value;
    }
}