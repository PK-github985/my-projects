document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("welcomeMessage").style.display = "none";
    }, 4000); // Hides the welcome message after 4 seconds

    document.getElementById("toggleDarkMode").addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        toggleBackgroundImage();
    });

    var backgroundMusic = document.getElementById("backgroundMusic");
    backgroundMusic.play();
});

function openProject(url) {
    window.open(url, '_blank');
}

function toggleBackgroundImage() {
    const body = document.body;
    if (body.classList.contains("dark-mode")) {
        body.style.backgroundImage = "url('https://wallpapers.com/images/featured/universe-qs811igzbabl1m0o.jpg')";
    } else {
        body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdh-aZ1vYamJbpQNM_UA_mytCvfRtJLg-CfA&s')";
    }
}
