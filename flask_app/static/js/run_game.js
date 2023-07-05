

window.addEventListener('load', function() {
    const enemy = new Enemy("static/images/enemies/skeleton_idle_0.png")
    
    start_button.onclick = () => {
      player.hp = 100
      run_battle();
      };

    continue_button.onclick = () => {
      run_battle();
      };

      const run_battle = async () => {
        enemy.hp = 100
        level.draw_all_game_objects(player,enemy)
          start_screen_div.classList.add('hidden');
          win_screen_div.classList.add('hidden');
          while (true) {
            await player.player_turn(enemy);
            level.draw_all_game_objects(player, enemy);
            if(enemy.hp <= 0) {
              win_screen_div.classList.remove('hidden');
              console.log('you won')
              break
            }
            let dmg = Math.ceil(Math.random() * 9)
            await level.attack_animate(dmg, 'player')
            player.hp -= dmg
            player.reset_turn()
            if(player.hp <= 0) {
              start_screen_div.classList.remove('hidden');
              console.log('you lost')
              break
            }
            level.draw_all_game_objects(player, enemy);
          }
      }
    
    
    


})
