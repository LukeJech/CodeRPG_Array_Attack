
class Player {
    constructor(player_data) {
        this.hp = 100;
        this.image = new Image();
        this.name = player_data.name;
        this.image.src = player_data.imageSource
    }

    player_turn(enemy) {
        return new Promise((resolve) => {
          attack_button.onclick = () => {
            player.combat_choice_attack();
          };
      
          a_button.onclick = async () => {
            let dmg = player.attack_enemy(enemy, "a");
            if(dmg >= 0){await level.attack_animate(dmg,'enemy')}
            resolve();
          };
      
          b_button.onclick = async () => {
            let dmg = player.attack_enemy(enemy, "b");
            if(dmg >= 0){await level.attack_animate(dmg, 'enemy')}
            resolve();
          };
      
          c_button.onclick = async () => {
            let dmg = player.attack_enemy(enemy, "c");
            if(dmg >= 0){await level.attack_animate(dmg, 'enemy')}
            resolve();
          };
        });
      }

    combat_choice_attack() {
        wrong_index.classList.add('hidden');
        battle_buttons_div.classList.add('hidden');
        attack_div.classList.remove('hidden');
        let array_a = this.create_random_array()
        let array_b = this.create_random_array()
        let array_c = this.create_random_array()
        let index_max = this.calculate_max_index(array_a, array_b, array_c)
        index_num.innerText = Math.floor(Math.random() * index_max)
        choice_a.innerText = `[${array_a}]`;
        choice_b.innerText = `[${array_b}]`;
        choice_c.innerText = `[${array_c}]`;
    }

    attack_enemy(enemy, array_choice) {
        let array_a = JSON.parse(choice_a.innerText);
        let array_b = JSON.parse(choice_b.innerText);
        let array_c = JSON.parse(choice_c.innerText);
        if (array_choice == 'a') {
            if (array_a[index_num.innerText] >= 0) {
                enemy.hp -= array_a[index_num.innerText]
                return array_a[index_num.innerText]
            } else {
                wrong_index.classList.remove('hidden');
            }
        }
        if (array_choice == 'b') {
            if (array_b[index_num.innerText] >= 0) {
                enemy.hp -= array_b[index_num.innerText]
                return array_b[index_num.innerText]
            } else {
                wrong_index.classList.remove('hidden');
            }
        }
        if (array_choice == 'c') {
            if (array_c[index_num.innerText] >= 0) {
                enemy.hp -= array_c[index_num.innerText]
                return array_c[index_num.innerText]
            } else {
                wrong_index.classList.remove('hidden');
            }
        }
    }

    create_random_array() {
        let array_length = Math.ceil(Math.random() * 6);
        let random_array = []
        for (let i = 0; i < array_length; i++) {
            random_array.push(Math.floor(Math.random() * 10))
        }
        return random_array
    }

    calculate_max_index(array_a, array_b, array_c) {
        return Math.max(array_a.length, array_b.length, array_c.length) -1;
    }

    reset_turn() {
        battle_buttons_div.classList.remove('hidden');
        attack_div.classList.add('hidden');
    }


}

const player = new Player(
    {name: 'Luke',
    imageSource: "static/images/player/elf_female_idle1.png",
})