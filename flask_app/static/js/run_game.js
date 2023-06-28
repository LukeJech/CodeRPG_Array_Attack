

window.addEventListener('load', function() {
    level.draw_all_game_objects(player,enemy)

    start_button.onclick = async () => {
        start_screen_div.classList.add('hidden');
        while (enemy.hp > 0) {
          await player.player_turn();
          level.draw_all_game_objects(player, enemy);
          player.hp -= Math.ceil(Math.random() * 10)
          level.draw_all_game_objects(player, enemy);
        }
      };
    
    
    


})
