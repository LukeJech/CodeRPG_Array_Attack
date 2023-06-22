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



    function draw_all_game_objects(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        player.drawPlayerImage()
        ctx.drawImage(enemyImage, 1200, 520, enemyImage.width * 0.6, enemyImage.height * 0.6);
        ctx.fillText(`${enemy_hp}hp`, 1245, 725);
    }
    
    start_button.onclick = () => {
        start_screen_div.classList.add('hidden')
        draw_all_game_objects()
      };
    
    attack_button.onclick = () => {
        player.combat_choice_attack()
    };

    a_button.onclick = () => {
        player.attack_enemy(enemy_hp, "a")
        draw_all_game_objects()
    }
    b_button.onclick = () => {
        player.attack_enemy(enemy_hp, "b")
        draw_all_game_objects()
    }
    c_button.onclick = () => {
        player.attack_enemy(enemy_hp, "c")
        draw_all_game_objects()
    }

})
