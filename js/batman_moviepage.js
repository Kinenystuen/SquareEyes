trailerplayer.style.display = "none";
    close_trailer.style.display = "none";
    function watchtrailer() {
        const trailerplayer = document.getElementById("trailerplayer");
        const movietrailer = document.getElementById("movietrailer");
        const close_trailer = document.getElementById("close_trailer");
        const batmansection1 = document.getElementById("batmansection1");
        if (playbutton.textContent === "Watch trailer") {
            playbutton.textContent = "Close trailer";
            trailerplayer.style.display = "block";
            close_trailer.style.display = "flex";
            movietrailer.scrollIntoView({ 
                behavior: 'smooth' });
        }
        else {
            playbutton.textContent = "Watch trailer";
            trailerplayer.style.display = "none";
            close_trailer.style.display = "none";
            batmansection1.scrollIntoView({ 
                behavior: 'smooth' });
        }
    }