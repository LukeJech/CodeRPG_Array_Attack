var enemy_hp = 100
var player_hp = 100
window.addEventListener('load', function() {
    // load canvas and images
    const canvas = document.getElementById('game_canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1920;
    canvas.height = 1080;
    ctx.font = '24px Poppins';
    ctx.fillStyle = 'white';
    const backgroundImage = new Image();
    backgroundImage.src = "static/images/level_bg/mushroom_forest.png";
    const playerImage = new Image();
    playerImage.src = "static/images/player/elf_female_idle1.png";
    const enemyImage = new Image();
    enemyImage.src = "static/images/enemies/skeleton_idle_0.png";


    // Wait for the background image to load before drawing
    backgroundImage.onload = function() {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        // Check if player and enemy images are also loaded
        if (playerImage.complete && enemyImage.complete) {
            ctx.drawImage(playerImage, 400, 400, playerImage.width * 0.4, playerImage.height * 0.4);
            ctx.drawImage(enemyImage, 1200, 520, enemyImage.width * 0.6, enemyImage.height * 0.6);
        } else {
            // Wait for player and enemy images to load
            playerImage.onload = drawPlayerAndEnemy;
            enemyImage.onload = drawPlayerAndEnemy;
        }

        ctx.fillText(`${player_hp}hp`, 545, 725);
        ctx.fillText(`${enemy_hp}hp`, 1245, 725);
    };

    function draw_all(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(playerImage, 400, 400, playerImage.width * 0.4, playerImage.height * 0.4);
        ctx.drawImage(enemyImage, 1200, 520, enemyImage.width * 0.6, enemyImage.height * 0.6);
        ctx.fillText(`${player_hp}hp`, 545, 725);
        ctx.fillText(`${enemy_hp}hp`, 1245, 725);
    }
    
    start_button.onclick = () => {
        start_screen_div.classList.add('hidden')
        draw_all()
      };
      
    attack_button.onclick = () => {
        enemy_hp -= 10
        draw_all()
      };
})
