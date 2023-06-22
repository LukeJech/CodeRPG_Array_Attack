
class Player {
    constructor(player_data, ctx) {
        this.hp = 100;
        this.image = new Image();
        this.name = player_data.name;
        this.ctx = ctx
    }

    drawPlayerImage() {
        this.image.src = "static/images/player/elf_female_idle1.png";
        this.ctx.drawImage(this.image, 400, 400, this.image.width * 0.4, this.image.height * 0.4);
        this.ctx.fillText(`${this.hp}hp`, 545, 725);
    }

    combat_choice_attack() {
        battle_buttons_div.classList.add('hidden');
        attack_div.classList.remove('hidden');
        choice_a.innerText = '[' + this.create_random_array() + ']';
        choice_b.innerText = '[' + this.create_random_array() + ']';
        choice_c.innerText = '[' + this.create_random_array() + ']';
    }

    attack_enemy(enemy_hp, array_choice) {
        let index = 0
        let array_a = JSON.parse(choice_a.innerText);
        let array_b = JSON.parse(choice_b.innerText);
        let array_c = JSON.parse(choice_c.innerText);
        if (array_choice == 'a') {
            enemy_hp -= array_a[index]
            console.log(enemy_hp)
        }
        if (array_choice == 'b') {
            enemy_hp -= array_b[index]
            console.log(enemy_hp)
        }
        if (array_choice == 'c') {
            enemy_hp -= array_c[index]
            console.log(enemy_hp)
        }
        return enemy_hp
    }

    create_random_array() {
        let array_length = Math.ceil(Math.random() * 6);
        let random_array = []
        for (let i = 0; i < array_length; i++) {
            random_array.push(Math.floor(Math.random() * 10))
        }
        console.log(random_array)
        return random_array
    }
}
