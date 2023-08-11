import { randomEnemy } from './enemies.js';
let gold = 0
let xp = 0
let kills = 0
let enenmy_bonus_hp = 0
let earning_multiplier = 0


// when browser fully loads page
window.addEventListener('load', function() {
    let enemy_random = randomEnemy()
    let enemy = new Enemy(`static/images/enemies/${enemy_random}_idle.png`, `static/images/enemies/${enemy_random}_attack.png`)
    // Game begins once start or continue button is clicked
    start_button.onclick = () => {
      player.hp = 100
      battle_music.volume = .1;
      battle_music.play();
      run_battle();
      };

    continue_button.onclick = () => {
      let enemy_random = randomEnemy()
      enemy.image.src = `static/images/enemies/${enemy_random}_idle.png`
      enemy.attack_image.src = `static/images/enemies/${enemy_random}_attack.png`
      run_battle();
      };


      const run_battle = async () => {
        // enemy hp increases each round
        enemy.hp = 10 + enenmy_bonus_hp

        level.draw_all_game_objects(player,enemy)
          start_screen_div.classList.add('hidden');
          win_screen_div.classList.add('hidden');

          while (true) {
            await player.player_turn(enemy);
            level.draw_all_game_objects(player, enemy);
            if(enemy.hp <= 0) {
              // Player defeats enemy
              win_screen_div.classList.remove('hidden');
              gold += Math.ceil(Math.random() * 8) + earning_multiplier
              xp += Math.ceil(Math.random() * 8) + earning_multiplier
              kills ++ 
              enenmy_bonus_hp += 10
              earning_multiplier++
              run_gold.innerText = `Run Gold: ${gold}`
              run_xp.innerText = `Run XP: ${xp}`
              run_bonus.innerText = `Next Round Earning Bonus: +${earning_multiplier}`
              break
            }
            let dmg = Math.ceil(Math.random() * 9)
            await level.attack_animate(dmg, 'player', player, enemy)
            player.hp -= dmg
            player.reset_turn()
            if(player.hp <= 0) {
              // Player Loses
              start_screen_div.classList.remove('hidden');
              enenmy_bonus_hp = 0
              break
            }
            level.draw_all_game_objects(player, enemy);
          }
      }
    

})

const end_run = () =>{
  end_game_run(gold,xp, kills)
}
const end_game_run = (gold,xp, kills) => {
  window.location.href = `/game/endrun/${xp}/${gold}/${kills}`;
}
