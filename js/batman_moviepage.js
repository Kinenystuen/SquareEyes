const trailerplayer = document.getElementById("trailerplayer");
    trailerplayer.style.display ="none";
    
    function watchtrailer() {                            
    if (playbutton.textContent === "Watch trailer") {
        playbutton.textContent = "Close trailer";
        trailerplayer.style.display = "block";
    } 
    else {
        playbutton.textContent = "Watch trailer";
        trailerplayer.style.display = "none";
    }
}
