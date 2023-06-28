
class Player {
    constructor(player_data) {
        this.hp = 100;
        this.image = new Image();
        this.name = player_data.name;
        this.image.src = player_data.imageSource
    }

    player_turn() {
        return new Promise((resolve) => {
          attack_button.onclick = () => {
            player.combat_choice_attack();
          };
      
          a_button.onclick = () => {
            player.attack_enemy(enemy, "a");
            resolve();
          };
      
          b_button.onclick = () => {
            player.attack_enemy(enemy, "b");
            resolve();
          };
      
          c_button.onclick = () => {
            player.attack_enemy(enemy, "c");
            resolve();
          };
        });
      }

    combat_choice_attack() {
        battle_buttons_div.classList.add('hidden');
        attack_div.classList.remove('hidden');
        index_num.innerText = Math.floor(Math.random() * 6)
        choice_a.innerText = '[' + this.create_random_array() + ']';
        choice_b.innerText = '[' + this.create_random_array() + ']';
        choice_c.innerText = '[' + this.create_random_array() + ']';
    }

    attack_enemy(enemy, array_choice) {
        let array_a = JSON.parse(choice_a.innerText);
        let array_b = JSON.parse(choice_b.innerText);
        let array_c = JSON.parse(choice_c.innerText);
        if (array_choice == 'a') {
            if (array_a[index_num.innerText]) {
                enemy.hp -= array_a[index_num.innerText]
            } else {
                wrong_index.innerText = 'Index out of range, you lose your turn!'
            }
        }
        if (array_choice == 'b') {
            if (array_b[index_num.innerText]) {
                enemy.hp -= array_b[index_num.innerText]
            } else {
                wrong_index.innerText = 'Index out of range, you lose your turn!'
            }
        }
        if (array_choice == 'c') {
            if (array_c[index_num.innerText]) {
                enemy.hp -= array_c[index_num.innerText]
            } else {
                wrong_index.innerText = 'Index out of range, you lose your turn!'
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
}

const player = new Player(
    {name: 'Luke',
    imageSource: "static/images/player/elf_female_idle1.png",
})