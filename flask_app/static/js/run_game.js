var enemy_hp = 100
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
    const enemyImage = new Image();
    enemyImage.src = "static/images/enemies/skeleton_idle_0.png";

    const player = new Player({name: 'Luke'}, ctx)
    player.drawPlayerImage()
    const enemy = new Enemy(ctx)
    enemy.drawEnemyImage()


    function draw_all_game_objects(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        player.drawPlayerImage()
        enemy.drawEnemyImage()
    }
    
    start_button.onclick = () => {
        draw_all_game_objects()
        start_screen_div.classList.add('hidden')
      };
    
    attack_button.onclick = () => {
        player.combat_choice_attack()
    };

    a_button.onclick = () => {
        player.attack_enemy(enemy, "a")
        draw_all_game_objects()
    }
    b_button.onclick = () => {
        player.attack_enemy(enemy, "b")
        draw_all_game_objects()
    }
    c_button.onclick = () => {
        player.attack_enemy(enemy, "c")
        draw_all_game_objects()
    }

})
