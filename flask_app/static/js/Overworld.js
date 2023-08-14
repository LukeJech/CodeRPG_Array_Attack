class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 1920;
        this.canvas.height = 1080;
    }
    
    init() {
        const image = new Image();
        image.onload = () => { 
            this.ctx.drawImage(image, 0, 0);

        };
        image.src = "static/images/level_bg/mushroom_forest.png";

        const x = 300;
        const y = 400;

        const shadow = new Image();
        shadow.onload = async () => { 
            await new Promise(resolve => setTimeout(resolve, 20));
            this.ctx.drawImage(shadow, x, y, shadow.width * .4, shadow.height * .4);
        };
        shadow.src = "static/images/player/shadow.png"

        const player = new Image();
        player.onload = async () => {
            await new Promise(resolve => setTimeout(resolve, 10));
            this.ctx.drawImage(player, x, y, player.width * .4, player.height * .4);
        };
        player.src = "static/images/player/elf_female_idle1.png";
    }
}