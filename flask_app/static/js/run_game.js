window.addEventListener('load', function() {
    const canvas = document.getElementById('game_canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1920;
    canvas.height = 1080;
    const backgroundImage = new Image();
    backgroundImage.src = "static/images/level_bg/mushroom_forest.png";
    const playerImage = new Image();
    playerImage.src = "static/images/player/elf_female_idle1.png";


    // Wait for the image to load before drawing it on the canvas
    backgroundImage.onload = function() {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    };

    playerImage.onload = function() {
        ctx.drawImage(playerImage, 400, 400, playerImage.width * .4, playerImage.height * .4);
    };
})