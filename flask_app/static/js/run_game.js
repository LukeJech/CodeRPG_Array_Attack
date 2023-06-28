

window.addEventListener('load', function() {
    level.draw_all_game_objects(player,enemy)

    start_button.onclick = () => {
        level.draw_all_game_objects(player,enemy)
        start_screen_div.classList.add('hidden')
      };
    
    attack_button.onclick = () => {
        player.combat_choice_attack()
    };

    a_button.onclick = () => {
        player.attack_enemy(enemy, "a")
        level.draw_all_game_objects(player,enemy)
    }
    b_button.onclick = () => {
        player.attack_enemy(enemy, "b")
        level.draw_all_game_objects(player,enemy)
    }
    c_button.onclick = () => {
        player.attack_enemy(enemy, "c")
        level.draw_all_game_objects(player,enemy)
    }

})
