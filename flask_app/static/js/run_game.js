
let gold = 0
let xp = 0

window.addEventListener('load', function() {
    const enemy = new Enemy("static/images/enemies/skeleton_idle_0.png")
    let earning_multiplier = 0
    start_button.onclick = () => {
      player.hp = 100
      run_battle();
      };

    continue_button.onclick = () => {
      run_battle();
      };

      const run_battle = async () => {
        enemy.hp = 1
        level.draw_all_game_objects(player,enemy)
          start_screen_div.classList.add('hidden');
          win_screen_div.classList.add('hidden');

          while (true) {
            await player.player_turn(enemy);
            level.draw_all_game_objects(player, enemy);
            if(enemy.hp <= 0) {
              win_screen_div.classList.remove('hidden');
              console.log('you won')
              gold += Math.ceil(Math.random() * 8) + earning_multiplier
              xp += Math.ceil(Math.random() * 8) + earning_multiplier
              earning_multiplier++
              run_gold.innerText = `Run Gold: ${gold}`
              run_xp.innerText = `Run XP: ${xp}`
              run_bonus.innerText = `Next Round Earning Bonus: +${earning_multiplier}`
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

const end_run = () =>{
  end_game_run(gold,xp)
}
const end_game_run = (gold,xp) => {
  window.location.href = `/game/endrun/${xp}/${gold}`;
}
