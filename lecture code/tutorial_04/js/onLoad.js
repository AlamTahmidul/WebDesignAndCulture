function playAudio() {
    sessionStorage.setItem('TestItem', 'Value');
    var audioSrc = document.createElement("audio");
    audioSrc.autoplay = true;
    audioSrc.src = "./../assets/getDown.wav";
    audioSrc.volume = 0.1;
}